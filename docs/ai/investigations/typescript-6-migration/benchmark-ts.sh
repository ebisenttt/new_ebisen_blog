#!/usr/bin/env bash
# docs/ai/investigations/typescript-6-migration/benchmark-ts.sh
#
# TypeScript build performance benchmark
# Measures baseline metrics before TypeScript version migration.
#
# Usage (run from project root):
#   bash docs/ai/investigations/typescript-6-migration/benchmark-ts.sh               # All benchmarks (~22-27 min)
#   bash docs/ai/investigations/typescript-6-migration/benchmark-ts.sh --skip-build  # Skip next build (~10 min)
#   bash docs/ai/investigations/typescript-6-migration/benchmark-ts.sh --only-typecheck  # Typecheck only (~5 min)

set -euo pipefail

# ─── CONFIGURATION ────────────────────────────────────────────────────────────
readonly PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../.." && pwd)"
readonly RESULTS_DIR="$(dirname "${BASH_SOURCE[0]}")/results"
readonly TSBUILDINFO="${PROJECT_ROOT}/tsconfig.tsbuildinfo"
readonly NEXT_DIR="${PROJECT_ROOT}/.next"

readonly RUNS=10

# ─── FLAGS ────────────────────────────────────────────────────────────────────
SKIP_BUILD=false
SKIP_JEST=false

for arg in "$@"; do
  case $arg in
    --skip-build)      SKIP_BUILD=true ;;
    --skip-jest)       SKIP_JEST=true ;;
    --only-typecheck)  SKIP_BUILD=true; SKIP_JEST=true ;;
  esac
done

# ─── TYPESCRIPT VERSION DETECTION ─────────────────────────────────────────────
detect_ts_version() {
  local ts_pkg="${PROJECT_ROOT}/node_modules/typescript/package.json"
  if [[ -f "$ts_pkg" ]]; then
    node -e "process.stdout.write(require('${ts_pkg}').version)"
  else
    pnpm exec tsc --version 2>/dev/null | awk '{print $NF}'
  fi
}

readonly TS_VERSION="$(detect_ts_version)"
readonly TIMESTAMP="$(date +%Y%m%d-%H%M%S)"
readonly OUTPUT_FILE="${RESULTS_DIR}/${TIMESTAMP}-ts${TS_VERSION}.json"

# ─── MILLISECOND TIMER ────────────────────────────────────────────────────────
# macOS system date does not support +%s%3N (GNU extension).
# Use python3 for reliable millisecond precision cross-platform.
get_ms() {
  python3 -c "import time; print(int(time.time()*1000))"
}

# ─── STATISTICS (pure awk) ────────────────────────────────────────────────────
# Input:  space-separated millisecond values as a single argument
# Output: "mean median stddev min max" (space-separated integers)
calc_stats() {
  local data="$1"
  awk -v data="$data" '
  BEGIN {
    n = split(data, a, " ")

    # Insertion sort for median
    for (i = 2; i <= n; i++) {
      key = a[i]; j = i - 1
      while (j >= 1 && a[j] > key) { a[j+1] = a[j]; j-- }
      a[j+1] = key
    }

    min = a[1]; max = a[n]

    sum = 0
    for (i = 1; i <= n; i++) sum += a[i]
    mean = sum / n

    if (n % 2 == 1) { median = a[int(n/2) + 1] }
    else             { median = (a[n/2] + a[n/2 + 1]) / 2.0 }

    if (n > 1) {
      sum_sq = 0
      for (i = 1; i <= n; i++) sum_sq += (a[i] - mean)^2
      stddev = (sum_sq / (n - 1)) ^ 0.5
    } else { stddev = 0 }

    printf "%.0f %.0f %.0f %.0f %.0f\n", mean, median, stddev, min, max
  }'
}

ms_to_s() {
  awk -v ms="$1" 'BEGIN { printf "%.2fs", ms/1000 }'
}

# ─── CACHE CLEAR HELPERS ──────────────────────────────────────────────────────
clear_tsbuildinfo() {
  if [[ -f "$TSBUILDINFO" ]]; then
    rm -f "$TSBUILDINFO"
    echo "  [cleared tsconfig.tsbuildinfo]"
  fi
}

clear_next() {
  if [[ -d "$NEXT_DIR" ]]; then
    rm -rf "$NEXT_DIR"
    echo "  [cleared .next/]"
  fi
}

clear_jest_cache() {
  pnpm exec jest --clearCache > /dev/null 2>&1 || true
  echo "  [cleared jest cache]"
}

# ─── CORE TIMING FUNCTION ─────────────────────────────────────────────────────
# Runs a command and appends elapsed ms to TIMES array.
# Usage: time_run <run_number> <command...>
time_run() {
  local run_num="$1"; shift
  local start end elapsed exit_code=0
  start="$(get_ms)"
  "$@" > /dev/null 2>&1 || exit_code=$?
  end="$(get_ms)"
  elapsed=$(( end - start ))
  if [[ $exit_code -ne 0 ]]; then
    printf "  run %2d/%d: FAILED (exit %d) — re-running with visible output:\n" "$run_num" "$RUNS" "$exit_code" >&2
    "$@"
    return $exit_code
  fi
  TIMES+=("$elapsed")
  printf "  run %2d/%d: %s\n" "$run_num" "$RUNS" "$(ms_to_s "$elapsed")"
}

# ─── BENCHMARK RUNNERS ────────────────────────────────────────────────────────

run_typecheck_cold() {
  echo ""
  echo "=== typecheck:cold (${RUNS} runs) — deletes tsbuildinfo before each run ==="
  TIMES=()
  for i in $(seq 1 "$RUNS"); do
    clear_tsbuildinfo
    time_run "$i" pnpm typecheck
  done
  TYPECHECK_COLD_TIMES="${TIMES[*]}"
}

run_typecheck_warm() {
  echo ""
  echo "=== typecheck:warm (${RUNS} runs) — incremental cache, 1 seed run discarded ==="
  echo "  [seeding tsconfig.tsbuildinfo...]"
  clear_tsbuildinfo
  pnpm typecheck > /dev/null 2>&1 || true
  TIMES=()
  for i in $(seq 1 "$RUNS"); do
    time_run "$i" pnpm typecheck
  done
  TYPECHECK_WARM_TIMES="${TIMES[*]}"
}

run_jest() {
  echo ""
  echo "=== jest (${RUNS} runs) — clears jest cache before each run ==="
  TIMES=()
  for i in $(seq 1 "$RUNS"); do
    clear_jest_cache
    time_run "$i" pnpm test --forceExit
  done
  JEST_TIMES="${TIMES[*]}"
}

run_build() {
  echo ""
  echo "=== next:build (${RUNS} runs) — clears .next/ and tsbuildinfo before each run ==="
  TIMES=()
  for i in $(seq 1 "$RUNS"); do
    clear_next
    clear_tsbuildinfo
    time_run "$i" pnpm build
  done
  BUILD_TIMES="${TIMES[*]}"
}

# ─── OUTPUT: SUMMARY TABLE ────────────────────────────────────────────────────
print_table() {
  echo ""
  echo "┌─────────────────────────────────────────────────────────────────────┐"
  printf  "│  TypeScript Benchmark  ·  TS %-8s  ·  %s           │\n" \
          "$TS_VERSION" "$TIMESTAMP"
  echo "├──────────────────────┬──────────┬──────────┬──────────┬────────────┤"
  echo "│ Benchmark            │   Mean   │  Median  │  StdDev  │  Min / Max │"
  echo "├──────────────────────┼──────────┼──────────┼──────────┼────────────┤"

  print_row() {
    local label="$1" data="$2"
    read -r mean median stddev min max <<< "$(calc_stats "$data")"
    printf "│ %-20s │ %8s │ %8s │ %8s │ %4s/%4s  │\n" \
      "$label" \
      "$(ms_to_s "$mean")" \
      "$(ms_to_s "$median")" \
      "$(ms_to_s "$stddev")" \
      "$(ms_to_s "$min")" \
      "$(ms_to_s "$max")"
  }

  print_row "typecheck:cold" "$TYPECHECK_COLD_TIMES"
  print_row "typecheck:warm" "$TYPECHECK_WARM_TIMES"
  [[ "$SKIP_JEST" == false ]]  && print_row "jest"       "$JEST_TIMES"
  [[ "$SKIP_BUILD" == false ]] && print_row "next:build" "$BUILD_TIMES"

  echo "└──────────────────────┴──────────┴──────────┴──────────┴────────────┘"
  echo ""
  echo "Results saved: ${OUTPUT_FILE}"
}

# ─── OUTPUT: JSON REPORT ──────────────────────────────────────────────────────
write_json() {
  mkdir -p "$RESULTS_DIR"

  build_block() {
    local name="$1" data="$2"
    read -r mean median stddev min max <<< "$(calc_stats "$data")"
    local times_json
    times_json="$(echo "$data" | tr ' ' ',')"
    printf '    "%s": {\n      "runs": %d,\n      "times_ms": [%s],\n      "mean_ms": %s,\n      "median_ms": %s,\n      "stddev_ms": %s,\n      "min_ms": %s,\n      "max_ms": %s\n    }' \
      "$name" "$RUNS" "$times_json" "$mean" "$median" "$stddev" "$min" "$max"
  }

  {
    printf '{\n'
    printf '  "meta": {\n'
    printf '    "timestamp": "%s",\n'    "$TIMESTAMP"
    printf '    "ts_version": "%s",\n'  "$TS_VERSION"
    printf '    "platform": "%s",\n'    "$(uname -s)"
    printf '    "node_version": "%s",\n' "$(node --version)"
    printf '    "runs": %d\n'           "$RUNS"
    printf '  },\n'
    printf '  "benchmarks": {\n'

    build_block "typecheck_cold" "$TYPECHECK_COLD_TIMES"
    printf ',\n'
    build_block "typecheck_warm" "$TYPECHECK_WARM_TIMES"

    if [[ "$SKIP_JEST" == false ]]; then
      printf ',\n'
      build_block "jest" "$JEST_TIMES"
    fi

    if [[ "$SKIP_BUILD" == false ]]; then
      printf ',\n'
      build_block "next_build" "$BUILD_TIMES"
    fi

    printf '\n  }\n}\n'
  } > "$OUTPUT_FILE"
}

# ─── MAIN ─────────────────────────────────────────────────────────────────────
main() {
  if [[ ! -d "${PROJECT_ROOT}/node_modules" ]]; then
    echo "ERROR: node_modules not found. Run 'pnpm install' first." >&2
    exit 1
  fi

  echo "TypeScript Build Benchmark"
  echo "TypeScript version : ${TS_VERSION}"
  echo "Runs per benchmark : ${RUNS}"
  echo "Timestamp          : ${TIMESTAMP}"
  echo "Skip build         : ${SKIP_BUILD}"
  echo "Skip jest          : ${SKIP_JEST}"

  TIMES=()

  run_typecheck_cold
  run_typecheck_warm
  [[ "$SKIP_JEST" == false ]]  && run_jest
  [[ "$SKIP_BUILD" == false ]] && run_build

  print_table
  write_json
}

main "$@"

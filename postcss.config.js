// Strip UTF-8 BOM from CSS output. PostCSS preserves BOM via
// root.source.input.hasBOM and re-adds it when stringifying, which causes
// Lightning CSS (used in Next.js Turbopack) to fail on devicon.min.css.
const stripBom = () => ({
  postcssPlugin: 'strip-bom',
  Once(root) {
    if (root.source?.input?.hasBOM) {
      root.source.input.hasBOM = false
    }
  },
})
stripBom.postcss = true

module.exports = {
  plugins: [stripBom(), require('@tailwindcss/postcss')],
}

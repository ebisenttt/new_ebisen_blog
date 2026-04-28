`docs/ai/plans/tmp.md` を読み込み、プランの内容についてユーザーと日本語で相談しながら精査する。

計画を修正する際は必ず `tmp.md` も更新すること。

プランが確定したら以下の順で実行する：

1. `docs/ai/plans/README.md` の命名規則（`{type}-{description}.md`）に従って `tmp.md` をリネームする
2. `wt switch --create {type}/{description}` でworktreeを作成する（ブランチ名はリネームしたファイル名の先頭ハイフンをスラッシュに変換した形式。例: `ci-coverage-report.md` → `ci/coverage-report`）
3. リネームしたプランファイルをworktreeの `docs/ai/plans/` にコピーする
4. worktreeで実装を進める
5. 実装が完了したら `gh pr create --base develop` でPRを作成する
6. PRがmergeされたら `wt remove` でworktreeを削除する

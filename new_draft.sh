#!/bin/bash

# ファイル名の入力を求める
echo "作成する記事のファイル名を入力してください（.mdは不要）："
read filename

# 入力が空の場合
if [ -z "$filename" ]; then
    echo "エラー: ファイル名を入力してください"
    exit 1
fi

# ファイルパスの設定
filepath="_drafts/${filename}.md"

# ファイルの存在チェック
if [ -f "$filepath" ]; then
    echo "エラー: ${filepath} は既に存在します"
    exit 1
fi

# 現在の日時を取得
current_datetime=$(date +"%Y-%m-%d")

# テンプレートの内容を新しいファイルにコピー
cat > "$filepath" << EOF
---
title: ''
date: '${current_datetime}'
tag:
  - ''
---

EOF

echo "新しい記事が作成されました: $filepath"
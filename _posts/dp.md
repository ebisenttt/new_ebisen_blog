---
title: "動的計画法（DP）"
date: '2023-09-02T12:58:05+09:00'
---
## 🤔 なにが書いてあるの？
- 動的計画法（DP）の実装方法と例題をまとめました
## 🤔 なにが大事なの？
- DPテーブル上でfrmからtoへ遷移するとき，frmの値は確定済みであること
  - この発想は幅優先探索，ダイクストラ法と同様．どのように順番を決めるかという点に違いがある．
## 🤔 動的計画法（DP）って？
- 追記する
## 🤔 どうやって実装するの？

## 例題とコメント
1. [DPまとめコンテスト-A問題-Frog1](https://atcoder.jp/contests/dp/tasks/dp_a)

    基礎的なフィボナッチ数列的なやつ
2. [DPまとめコンテスト-B問題-Frog2](https://atcoder.jp/contests/dp/tasks/dp_b)

    ループを1個増やすだけ．10**7くらいの計算量が必要なので微妙なところかと思ったがAC．
3. [DPまとめコンテスト-C問題-Vacation](https://atcoder.jp/contests/dp/tasks/dp_c)


    制約があるので，その制約を守るように実装する．

4. [DPまとめコンテスト-D問題-Knapsack1](https://atcoder.jp/contests/dp/tasks/dp_d)

    典型的なナップザック問題．

5. [DPまとめコンテスト-E問題-Knapsack2](https://atcoder.jp/contests/dp/tasks/dp_e)

    ナップザック問題だが，計算量に注意してDPテーブルをどう作るか(`dp[i][j]`で何を表すか)考察が必要だった．

6. 【解説AC】 [DPまとめコンテスト-F問題-LCS](https://atcoder.jp/contests/dp/tasks/dp_f)

    - 最長部分文字列の長さを求めるところまではできた．
    - DPテーブルに文字列をそのまま記録してTLEやMLEを起こした．
    - 経路の復元をして文字列を求めるという発想がなかった．

7. 【解説AC】 [DPまとめコンテスト-G問題-Longest Path](https://atcoder.jp/contests/dp/tasks/dp_g)

    - トポロジカルソートが必要（メモ化再帰でもよいが，実質トポロジカルソートと同意のことをすることになる．）

8. [DPまとめコンテスト-H問題-Grid1](https://atcoder.jp/contests/dp/tasks/dp_h)

    - DPテーブルを持つものの，幅優先探索で更新していけば良いので自力AC．どのタイミングでテーブルを更新し，キューに挿入するかという点については多少考察した．

9. 【解説AC】[DPまとめコンテスト-I問題-Coins](https://atcoder.jp/contests/dp/tasks/dp_i)

    - DPテーブルをどう作るか悩んだが自力で解決できず．解説を見たら案外単純．基本的には「`DP[i][j]` = 最初の`i`回で`hoge`が`j`になる値or文字列」を順に更新していくイメージでよさそう？

10. [TypicalDPContest-A-コンテスト](https://atcoder.jp/contests/tdpc/tasks/tdpc_contest)

    - 最初はsetで解いた．テーブル使う発想がまだ苦手？

11. [ABC011-C-123引き算](https://atcoder.jp/contests/abc011/tasks/abc011_3)

    - 引き算ではなく足し算で計算した．

12. [ABC040-C-柱柱柱柱柱](https://atcoder.jp/contests/abc040/tasks/abc040_c)

    - 典型的なDP．Frog1と同じ．

## 参考
- [Educational DP Contest の F ～ J 問題の解説と類題集 - Qiita](https://qiita.com/drken/items/03c7db44ccd27820ea0d)
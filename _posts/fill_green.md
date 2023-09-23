---
title: "Fill_green"
date: '2023-09-05T11:06:12+09:00'
---
## 🤔 何が書いてあるの？
- 緑コーダーを目指して緑埋めしていく過程の記録
- 緑diffの問題の解法のメモ

## 📝 解いた問題と感想
1. [第二回全国統一プログラミング王決定戦予選-B-Counting of Trees](https://atcoder.jp/contests/nikkei2019-2-qual/tasks/nikkei2019_2_qual_b)

    【解説AC】大まかな方針は合っていたが，自力では2つのWAが取れなかった．ランダムなテストケースを作る環境が必要？それでもエッジケースに出会えるとは限らないけど．

2. [ABC178-D-Redistribution](https://atcoder.jp/contests/abc178/tasks/abc178_d)

    数列の長さをNとしてS-3*NをN個に分ける分け方をコンビネーションで求めてAC．想定解はDPだったのでDPでも解いた．

3. [ARC149-A-RepdigitNumber](https://atcoder.jp/contests/arc149/tasks/arc149_a)

    【解説AC】愚直な方法で実装したらRE,TLEで通らず．解説を見たらMODでDPテーブルを作るような感じ．漸化式を作るということをめんどくさがらずにやって見るということは大事かもしれない．

4. [ABC311-D-GridIceFloor](https://atcoder.jp/contests/abc311/tasks/abc311_d)

    BFSで解けた．

5. [ABC301-D-Bitmask](https://atcoder.jp/contests/abc301/tasks/abc301_d)

    下記のような手順で自力で解けた
    - nのほうが桁数が大きい -> sの?はすべて1にする
    - nのほうが桁数が小さい
      - sのはみ出ている部分に1がある -1
      - sのはみ出ている部分に1がない はみでている部分を切る
    - nとsは桁数が同じ
      - 最高位の?を1にする，ほかを0にする
        - n以下になった
          - 最高位の?は1にする
        - nよりも大きくなった
          - 最高位の?は0にする
     
    でももっと楽な方法が解説されていた
    - ?を全部0に変えてNよりも大きければ-1
    - ?を全部0に変えてNよりも小さくなれば，大きい桁から順に再度1に変えてみる．N以下になれば1のまま，Nより大きくなれば0に戻す．

    上の2点を簡素化している解答だった．1点目は3点目に包含されるので簡素化できた．2点目はSをできるだけ小さくするとN以下になるか，という点で発想は同じだが，解説のほうが圧倒的にシンプルに実装ができる．

6. [ABC127-D-IntegerCards](https://atcoder.jp/contests/abc127/tasks/abc127_d)

    - 自力AC．heapqで解いた．

7. [ARC144-B-GiftTax](https://atcoder.jp/contests/arc144/tasks/arc144_b)

    - 【解説AC】答えを二分探索する発想がまだない．二分探索の続ける条件式も問題，実装者によって違う気がする．どう使い分けるべきなのか二分探索を集中的にやる時間も設けるべきかも．


まだまだ追記していきます
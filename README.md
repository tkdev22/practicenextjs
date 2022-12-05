# React / NEXTJS / microCMS の学習用
## はじめに
このアプリは、React(NEXTJS) をフロントエンドにmicroCMS からjson でデータを受け取る＜br>
ブログアプリです。
個人や中小企業のブログに最適です。

動かしながら学習することを目的としてます。

事前準備に通りステップを踏めば、使えるようにしてます。

ロジック含め、内容は徐々にブラッシュアアップ予定。

Mac(Ventura / M1チップ)、Node.js(v18.12.1)で作ってるので、他の環境だとコマンドが違うことがあります。

## 機能
- レスポンシブデザイン
- ReactHook （useState)を使ったハンバーガーメニュー
- microCms からのjson を非同期処理を使って読み込み
- 動的ルーティング

## 今後の予定（優先度順）
- typescript にリファクタリング
- ログイン機能の実装
- ブログ投稿機能

これをそのままmain ブランチにして、ブランチを切りそこを練習用にする予定です。

## 事前準備

#### Node.js のVolta を使ったインストール

https://volta.sh

の案内に従ってインストールしてください

#### node_modules のインストール
package.json から依存関係をインストールするため下記コマンドを実行してください
```
npm install
```

#### envファイルの作成
セキュリティを理由をここにAPI Key は記述しません<br>
ルートディレクトリに「.env.local」を作成し、以下を記述
```
API_KEY = <一緒に送信したAPI Key を代入>
SERVICE_DOMAIN = hellonext
```


## 起動方法
```
npm run dev
```


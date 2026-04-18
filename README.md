# Portfolio — 宮路 祐誠

面接用ポートフォリオサイト。Nuxt 3 + Tailwind CSS で構築、GitHub Pages で公開。

- 公開URL: https://miyaji-yusei-fixer.github.io/Portfolio/
- 技術: Nuxt 3 (Static Generation) / TypeScript / Tailwind CSS / @nuxtjs/color-mode

---

## 動作環境

- **Node.js**: `18.18.0 以上` （推奨: `20.18.x` / `22.x LTS`）
- **npm**: `9.x 以上`

Nuxt は `3.13.2` に固定しています。`.nvmrc` と `.node-version` を同梱しているので、対応ツールなら自動でバージョン切替できます。

```bash
# nvm
nvm use

# nodist (Windows)
nodist local 22.11.0

# volta
volta pin node@22.11.0

# fnm
fnm use
```

## ローカル開発

```bash
# 依存関係インストール (初回のみ)
npm install

# 開発サーバー (hot reload)
npm run dev

# 静的サイトビルド (.output/public/ に生成)
npm run generate

# ビルド結果プレビュー (generate後にローカルで確認)
npm run preview
```

開発時のローカルURL: http://localhost:3000/

### トラブルシュート

| 症状 | 原因 / 対処 |
|------|-------------|
| `npm install` 時に `does not provide an export named 'styleText'` 等のエラー | Node.js が古いです。`20.18.0` 以上 (推奨は `20.18.x` または `22.x LTS`) にアップグレード |
| 別バージョンで `npm install` した後にエラーが出る | `node_modules/` と `package-lock.json` を削除し、`npm install` を再実行 |
| ビルド時に `EBADENGINE` 警告 | Node.js がパッケージ要求バージョンに満たない。アップグレードを推奨 |

## ディレクトリ構成

```
.
├── app.vue                 # ルートレイアウト (Header/Footer/NuxtPage)
├── assets/css/main.css     # Tailwindエントリ + CSS変数定義
├── components/
│   ├── TheHeader.vue       # ヘッダー (ナビ・テーマ切替)
│   ├── TheFooter.vue       # フッター
│   ├── ScrollReveal.vue    # スクロールアニメ用ラッパ
│   └── sections/           # 各セクション (Hero/About/Skills/Career/Works/Contact)
├── pages/
│   ├── index.vue           # トップページ (1ページスクロール)
│   └── resume.vue          # 履歴書・職務経歴書ダウンロードページ
├── data/                   # 表示データ (career/works/skills/profile)
├── public/
│   ├── docs/               # 履歴書・職務経歴書PDF
│   ├── favicon.svg
│   └── .nojekyll           # GitHub Pages で _nuxt/ を配信するために必要
├── nuxt.config.ts          # Nuxt設定 (baseURL, SSG, モジュール)
├── tailwind.config.ts      # Tailwind設定 (ダークモードclass, 拡張カラー)
└── .github/workflows/
    └── deploy.yml          # main ブランチ push で自動デプロイ
```

---

## 初回セットアップ手順

### 1. 既存リポジトリを初期化してこの内容をpush

```bash
# リポジトリをクローン
git clone https://github.com/miyaji-yusei-fixer/Portfolio.git
cd Portfolio

# 既存ファイルを削除 (Gitは残して中身だけクリーン)
git rm -rf .
git clean -fxd

# このパッケージの中身をコピー (パスは適宜読み替え)
cp -r /path/to/this/package/. ./

# 最初のコミット
git add .
git commit -m "chore: Rebuild portfolio with Nuxt 3 + Tailwind"

# develop が残っているので main に切替
git branch -M main

# リモートの既存ブランチを上書きpush
git push -u origin main --force
```

> もし既存の `develop` ブランチ等が不要であれば、GitHubの管理画面から削除してください。

### 2. GitHub Pages を有効化

GitHubのリポジトリページ > Settings > Pages:

- **Source**: `GitHub Actions` を選択

これで `main` ブランチに push するたびに、`.github/workflows/deploy.yml` が
ビルド & デプロイを実行します。

### 3. デプロイ完了を確認

`Actions` タブから `Deploy Nuxt site to GitHub Pages` のワークフロー進捗を確認。
成功すれば `https://miyaji-yusei-fixer.github.io/Portfolio/` で公開されます。

初回は Pages の有効化が完了するまで数分かかる場合があります。

---

## 更新の運用

- 職務経歴を追加したい → `data/career.ts` に項目を追加
- 作品を追加したい → `data/works.ts` に項目を追加 (スクショは `public/images/works/`)
- プロフィール/自己紹介の文面を変えたい → `data/profile.ts`
- スキルの年数を更新したい → `data/skills.ts`

データを編集して `main` に push するだけで、自動で再デプロイされます。

## 個人情報の取り扱い

`public/docs/resume-masked.pdf` は、住所・電話番号・メールアドレス・生年月日・顔写真を
PyMuPDF の redaction 機能で削除済みの公開用バージョンです。
テキストレイヤーからも個人情報は削除されています。

オリジナルの履歴書・職務経歴書は、面接確定後にエージェント経由 / 個別に送付する運用です。

## Tailwind 設定メモ

- `darkMode: 'class'` 構成。`@nuxtjs/color-mode` で `html` 要素に `.dark` クラスを付与
- ブランドカラーは `accent-*` に統一 (#2563eb 系のブルー)
- 独自アニメーション: `animate-fade-in`, `animate-fade-in-up`
- CSS変数 (`--bg-primary` 等) でライト/ダークの切替を高速化

export interface Work {
  id: string;
  title: string;
  tagline: string;
  description: string;
  points: string[];
  tech: string[];
  repoUrl?: string;
  demoUrl?: string;
  status: "public" | "private" | "archived";
  statusNote?: string;
  image?: string; // /images/works/xxx.png (public配下)
}

export const works: Work[] = [
  {
    id: "seven",
    title: "Seven",
    tagline: "身内で遊んでいた独自トランプゲームを、誰でもどこでも遊べる形に。",
    description:
      "知り合い・身内の間で遊んでいたオリジナルのトランプゲーム「Seven」を、Webブラウザだけで遊べる形に再実装した個人制作プロジェクト。ゲーム自体の認知度を広めること、そして物理的なトランプが手元になくても遊べる環境を提供することを目的に開発。",
    points: [
      "生成AI (Claude Code 等) を一切使わず、完全自作でロジック・UI・ゲーム進行を実装",
      "独自ルールのゲームを、初見ユーザーでも遊べるチュートリアル付きで実装",
      "難易度調整を入れて、初心者から慣れたプレイヤーまで楽しめる設計",
      "Storybook を用いてコンポーネントのドキュメント化も実施",
    ],
    tech: ["Vue.js", "JavaScript", "Storybook", "ESLint"],
    repoUrl: "https://github.com/miyaji-yusei-fixer/seven",
    demoUrl: "https://miyaji-yusei-fixer.github.io/seven/",
    status: "public",
    image: "/images/works/seven.png",
  },
  {
    id: "amazonphoto-rating-tool",
    title: "Amazon Photos Rating Tool",
    tagline: "サーバーレスなChrome拡張。Amazon Photos上で直接レーティング。",
    description:
      "Amazon Photos に保存された写真をその場で星評価し、高評価のものを自動で「お気に入り」に振り分ける Chrome 拡張機能。サーバーを持たない構成で、セキュリティと動作速度の両立を狙った設計。",
    points: [
      "サーバーレス構成 — 写真データを外部サーバーへ一切送信せず、ブラウザ内で完結することでセキュリティを担保",
      "外部通信を挟まないため、レーティング操作の体感速度も高速",
      "DOM 操作で既存Webサービスの UI を拡張し、写真整理フローを短縮",
      "日常的な不便を自分で解決する実用志向のツール",
    ],
    tech: ["JavaScript", "Chrome Extension API"],
    status: "private",
    statusNote: "ソースコードは非公開です。",
    image: "/images/works/amazonphoto-rating-tool.png",
  },
  {
    id: "youtube-tools",
    title: "YouTube Tools",
    tagline: "LINE 公式アカウントで YouTube のサムネ画像を取得できる Bot。",
    description:
      "LINE 公式アカウントに YouTube の URL を送信すると、自動でサムネイル画像を返信する Bot。個人で運用・保守まで行った後、役目を終えて運用終了。",
    points: [
      "LINE Messaging API × YouTube Data API の連携実装",
      "サーバー運用・API 呼び出しのコスト管理まで含めて個人でフル運用",
      "運用停止までのライフサイクルを個人で経験",
    ],
    tech: ["LINE Messaging API", "YouTube Data API"],
    status: "archived",
    statusNote: "運用は終了しています。ソースコードは非公開。",
  },
];

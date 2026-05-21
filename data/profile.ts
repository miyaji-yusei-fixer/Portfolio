export interface SocialLink {
  label: string;
  url: string;
  icon: "github" | "mail";
}

export interface Profile {
  name: string;
  nameEn: string;
  role: string;
  headlineEn: string;
  headlineJa: string;
  tagline: string;
  about: string[];
  social: SocialLink[];
}

export const profile: Profile = {
  name: "宮路 祐誠",
  nameEn: "Yusei Miyaji",
  role: "Frontend Engineer × Project Manager",
  headlineEn: "Frontend Engineer × Project Manager",
  headlineJa: "設計から運用まで、技術と対話でプロダクトを前進させる。",
  tagline:
    "金融・公共・医療の現場で磨いた、TypeScript / Vue / React を軸としたフロントエンド。",
  about: [
    "2019年より株式会社FIXERにて、金融・公共・医療といった高い品質と信頼性が求められる領域でフロントエンド開発に従事しています。",
    "TypeScript / Vue.js / React を軸に、UIの設計・実装からE2Eテスト、クラウド移行、バックエンド改修、DB設計まで、プロダクトに必要な領域を幅広くカバーします。",
    "地方銀行向けシステムでは10名規模のフロントエンドチームを率いるプロジェクトリーダーへ、医療研究機関向けシステムでは顧客折衝とチーム運営を担うプロジェクトマネージャーへと役割を広げてきました。技術・マネジメント・ビジネスの3つの観点でプロダクトに貢献することを大切にしています。",
    "学生時代に特許（特許第6644389号）を取得するなど、柔軟な発想を形にする力を大切にしています。",
  ],
  social: [
    {
      label: "GitHub",
      url: "https://github.com/miyaji-yusei-fixer",
      icon: "github",
    },
  ],
};

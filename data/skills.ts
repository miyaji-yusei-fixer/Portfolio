export interface Skill {
  name: string;
  years: number;
  note?: string;
}

export interface SkillCategory {
  label: string;
  labelEn: string;
  items: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    label: "言語",
    labelEn: "Languages",
    items: [
      { name: "TypeScript", years: 8, note: "メイン言語" },
      { name: "Python", years: 1.5 },
    ],
  },
  {
    label: "フレームワーク / UI",
    labelEn: "Frameworks",
    items: [
      { name: "Vue.js", years: 6 },
      { name: "Nuxt.js", years: 3.5 },
      { name: "vue-router", years: 1.5 },
      { name: "React", years: 2.5 },
    ],
  },
  {
    label: "クラウド",
    labelEn: "Cloud",
    items: [
      { name: "Microsoft Azure", years: 8 },
      { name: "Amazon Web Services", years: 3.5 },
    ],
  },
  {
    label: "データベース / テスト",
    labelEn: "DB / Testing",
    items: [
      { name: "SQL Server", years: 2.5 },
      { name: "Azure Cosmos DB", years: 1.5 },
      { name: "Cypress (E2E)", years: 1.5 },
    ],
  },
  {
    label: "その他",
    labelEn: "Others",
    items: [
      { name: "Azure DevOps", years: 3 },
      { name: "プロジェクトマネジメント", years: 4 },
      { name: "チームリーダーシップ", years: 5 },
    ],
  },
];

export interface Career {
  id: string;
  period: string;
  title: string;
  industry: string;
  role: string;
  teamSize: string;
  tech: string[];
  summary: string;
  achievements: string[];
  others?: string[];
}

export const careers: Career[] = [
  {
    id: "medical-cancer-registry",
    period: "2023年1月 〜 現在",
    title: "がん登録関連システム",
    industry: "医療研究機関向け（独立行政法人）",
    role: "Project Manager / Frontend Developer",
    teamSize: "11〜20名",
    tech: ["TypeScript", "Nuxt.js", "Microsoft Azure", "Amazon Web Services", "Azure DevOps"],
    summary:
      "医療機関向けデータ登録システムのフロントエンド実装・運用保守、および情報集約・統計データ提供システムのPM業務を担当。週次の顧客MTGを主導し、タスク管理・課題整理・スケジュール調整を実施。",
    achievements: [
      "Azure DevOps を活用したタスクの見える化を推進し、開発チームと顧客の間の円滑な連携を実現",
      "顧客担当者との信頼関係構築に注力し、要件の早期合意とスケジュールの安定化に貢献",
      "フロントエンド領域は安定運用を維持しつつ、機能改善を並行して推進",
    ],
    others: [
      "上記と並行し、社内の新入社員約50名を対象としたフロントエンド技術研修の講師を担当（2025年2月〜8月）。使用ツール・フレームワーク・ライブラリの選定、教材作成、授業実施まで一貫して遂行。",
    ],
  },
  {
    id: "local-gov-messaging",
    period: "2021年7月 〜 2022年12月",
    title: "メッセージングアプリ 公式アカウント開発・運営",
    industry: "地方自治体向け（人口約30万人規模）",
    role: "Member",
    teamSize: "5〜10名",
    tech: [
      "TypeScript",
      "Python",
      "Vue.js",
      "Amazon Web Services",
      "Microsoft Azure",
      "Azure Cosmos DB",
    ],
    summary:
      "大手プラットフォーマー提供の自治体向け配信システムを改修し、人口約30万人規模の地方自治体へ導入・ローンチ。ゴミ分別検索・陥没道路報告・Webサービス誘導チャットボットなどのトーク機能を開発。",
    achievements: [
      "公式アカウントをローンチし、登録者数を3万人規模まで拡大",
      "AWS → Microsoft Azure へのクラウド移行を完遂し、自社技術基盤との統合を実現",
      "顧客へのマーケティング施策・新規機能の提案など、ビジネス面でも積極的に貢献",
      "Cosmos DB を用いたデータ設計・運用を担当",
    ],
  },
  {
    id: "regional-bank-corp",
    period: "2019年9月 〜 2021年7月",
    title: "法人クラウドバンキングシステム",
    industry: "地方銀行向け",
    role: "Member → Project Leader (サブリーダー)",
    teamSize: "21〜50名（拡大期）",
    tech: ["TypeScript", "React", "Vue.js", "SQL Server", "Microsoft Azure", "Cypress"],
    summary:
      "入社初プロジェクト。フロントエンド設計・実装を担当し、銀行ご担当者様との直接折衝でデザイン調整や要件の擦り合わせを実施。Cypress を用いた E2E テストの設計・実装を約1年半担当。",
    achievements: [
      "チーム拡大に伴い、フロントエンドチーム10名のPLへ昇格。進捗管理・タスク割り振りを担当",
      "銀行ご担当者様との直接折衝を通じて、要件の正確な把握とデザイン品質の向上に貢献",
      "Cypress による E2E テスト導入で品質担保の仕組みを構築",
    ],
  },
];

export const careerNote = "※ 2022年12月〜2023年1月 休職";

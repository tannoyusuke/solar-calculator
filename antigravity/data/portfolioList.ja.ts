export type FullPortfolioItem = {
    name: string;
    description: string;
    type: string;
    status: string;
    logoImage?: string;
};

export const fullPortfolios: FullPortfolioItem[] = [
    { name: "レクメド", description: "医薬品開発事業", type: "PE投資", status: "EXIT済", logoImage: "/logos/recmed.svg" },
    { name: "FTG Company", description: "世界にまたがる焼肉チェーンを展開", type: "VC投資", status: "EXIT済", logoImage: "/logos/ftg.svg" },
    { name: "General Oyster", description: "牡蠣の卸売およびチェーンを展開", type: "PIPEs投資", status: "EXIT済", logoImage: "/logos/generaloyster.svg" },
    { name: "BIZIT", description: "世界最大級のM&A情報プラットフォームを運営", type: "インキュベーション", status: "EXIT済", logoImage: "/logos/bizit.svg" },
    { name: "九州医事新報社", description: "創刊60年を超える医療新聞を発行", type: "PE投資", status: "EXIT済", logoImage: "/logos/kyushuijishinpo.svg" },
    { name: "フィル・カンパニー", description: "駐車場での空中店舗事業を展開", type: "PIPEs投資", status: "投資中", logoImage: "/logos/philcompany.svg" },
    { name: "Sustech", description: "再生可能エネルギー向けのAI事業", type: "インキュベーション", status: "投資中", logoImage: "/logos/sustech.svg" },
    { name: "シエンシー", description: "障害福祉事業所向けオンライン研修サービス", type: "VC投資", status: "投資中", logoImage: "/logos/shiency.svg" },
    { name: "エスキャピタル", description: "再エネ・インフラ用リース会社", type: "VC投資", status: "投資中", logoImage: "/logos/scapital.svg" },
    { name: "Wanova", description: "日本の製品を海外展開する商社", type: "VC投資", status: "投資中", logoImage: "/logos/wanova.svg" },
    { name: "Pegasus Tech Ventures", description: "AUM3,000億円の米国VC", type: "VC投資", status: "投資中", logoImage: "/logos/pegasus.svg" },
    { name: "ファルス", description: "新興国向けマイクロファイナンス事業", type: "VC投資", status: "投資中", logoImage: "/logos/phalus.svg" },
    { name: "Handson AI", description: "外国人向け教育ローンファイナンス事業", type: "VC投資", status: "投資中", logoImage: "/logos/handsonai.svg" },
    { name: "エンセンテン", description: "PR＆クリエイティブ・エージェンシー", type: "VC投資", status: "投資中", logoImage: "/logos/ensenten.svg" }
];

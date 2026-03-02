export type PortfolioItem = {
    id: string;
    name: string;
    logoText: string;
    description: string;
    image: string;
};

export const portfolioData: PortfolioItem[] = [
    {
        id: "sustech",
        name: "Sustech",
        logoText: "SUSTECH",
        description: "テクノロジースタートアップの包括的成長支援（バリューアップ）",
        image: "/cs_sustech_ai.png"
    },
    {
        id: "general-oyster",
        name: "ゼネラル・オイスター",
        logoText: "General Oyster",
        description: "EBITDA▲7億円からのV字回復・黒字化リード",
        image: "/cs_oyster_turnaround.png"
    },
    {
        id: "phil-company",
        name: "フィル・カンパニー",
        logoText: "Phil Company",
        description: "空中店舗事業の加速と強力なプロジェクトマネジメント支援",
        image: "/cs_phil_company.png"
    },
    {
        id: "ishizaka",
        name: "石坂産業",
        logoText: "石坂産業",
        description: "産業廃棄物処理業から「環境創造企業」へのブランド変革",
        image: "/cs_ishizaka_attached.jpg"
    },
    {
        id: "ukai",
        name: "うかい",
        logoText: "UKAI",
        description: "「うかい亭」の海外初進出・ベトナム財閥とのJV構築",
        image: "/cs_ukai_global.png"
    }
];

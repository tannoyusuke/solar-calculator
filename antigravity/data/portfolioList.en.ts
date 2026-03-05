export type FullPortfolioItem = {
    name: string;
    description: string;
    type: string;
    status: string;
    logoImage?: string;
};

export const fullPortfolios: FullPortfolioItem[] = [
    { name: "Recmed", description: "Pharmaceutical development business", type: "PE Investment", status: "Exited", logoImage: "/logos/recmed.svg" },
    { name: "FTG Company", description: "Expanding a worldwide Yakiniku chain", type: "VC Investment", status: "Exited", logoImage: "/logos/ftg.svg" },
    { name: "General Oyster", description: "Wholesale and chain of oysters", type: "PIPEs Investment", status: "Exited", logoImage: "/logos/generaloyster.svg" },
    { name: "BIZIT", description: "Operating one of the world's largest M&A information platforms", type: "Incubation", status: "Exited", logoImage: "/logos/bizit.svg" },
    { name: "Kyushu Medical News", description: "Publishing a medical newspaper with a history of over 60 years", type: "PE Investment", status: "Exited", logoImage: "/logos/kyushuijishinpo.svg" },
    { name: "Phil Company", description: "Developing aerial store business in parking lots", type: "PIPEs Investment", status: "Invested", logoImage: "/logos/philcompany.svg" },
    { name: "Sustech", description: "AI business for renewable energy", type: "Incubation", status: "Invested", logoImage: "/logos/sustech.svg" },
    { name: "Ciency", description: "Online training service for disability welfare offices", type: "VC Investment", status: "Invested", logoImage: "/logos/shiency.svg" },
    { name: "S Capital", description: "Leasing company for renewable energy and infrastructure", type: "VC Investment", status: "Invested", logoImage: "/logos/scapital.svg" },
    { name: "Wanova", description: "Trading company expanding Japanese products overseas", type: "VC Investment", status: "Invested", logoImage: "/logos/wanova.svg" },
    { name: "Pegasus Tech Ventures", description: "US VC with AUM of 300 billion JPY", type: "VC Investment", status: "Invested", logoImage: "/logos/pegasus.svg" },
    { name: "Pharus", description: "Microfinance business for emerging countries", type: "VC Investment", status: "Invested", logoImage: "/logos/phalus.svg" },
    { name: "Handson AI", description: "Education loan finance business for foreigners", type: "VC Investment", status: "Invested", logoImage: "/logos/handsonai.svg" },
    { name: "Ensenten", description: "PR & Creative Agency", type: "VC Investment", status: "Invested", logoImage: "/logos/ensenten.svg" }
];

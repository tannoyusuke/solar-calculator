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
        description: "Comprehensive growth support (value-up) for technology startups",
        image: "/cs_sustech_ai.png"
    },
    {
        id: "general-oyster",
        name: "General Oyster",
        logoText: "General Oyster",
        description: "Led V-shaped recovery and return to profitability from negative EBITDA of 700M JPY",
        image: "/cs_oyster_turnaround.png"
    },
    {
        id: "phil-company",
        name: "Phil Company",
        logoText: "Phil Company",
        description: "Acceleration of aerial store business and strong project management support",
        image: "/cs_phil_company.png"
    },
    {
        id: "ishizaka",
        name: "Ishizaka Inc.",
        logoText: "Ishizaka",
        description: "Brand transformation from industrial waste disposal to an 'environmental creation company'",
        image: "/cs_ishizaka_attached.jpg"
    },
    {
        id: "ukai",
        name: "UKAI",
        logoText: "UKAI",
        description: "UKAI-tei's first overseas expansion and JV formation with a Vietnamese conglomerate",
        image: "/cs_ukai_global.png"
    }
];

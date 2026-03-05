export type CaseStudy = {
    id: string;
    client: string;
    title: string;
    category: string;
    summary: string;
    tags: string[];
    image: string;
    articleImage?: string; // Optional image to show inside the article body
    results: string[];
    content: {
        background: string;
        challenges: string;
        approach: string;
        outcome: string;
    };
};

export const caseStudies: CaseStudy[] = [
    {
        id: "sustech",
        client: "Sustech",
        title: "Comprehensive Growth Support (Value-up) for a Technology Startup",
        category: "Incubation / Startup Support",
        summary: "In addition to end-to-end fundraising support from Seed to Series C, provided an omnidirectional growth fast-pass encompassing AI development, major corporate alliances, and talent acquisition via RPO.",
        tags: ["AI Development", "Fundraising", "Hands-on Management", "RPO"],
        image: "/cs_sustech_ai.png",
        articleImage: "/cs_content_sustech.png",
        results: ["Successful fundraising from Seed to Series C", "Early establishment of an AI development framework", "Ecosystem construction for exponential business growth"],
        content: {
            background: "Sustech was a promising startup aiming to utilize AI in the renewable energy sector. However, they lacked the capital to realize their innovative ideas, the ability to secure highly skilled AI engineers, and the solid business foundation necessary for scaling.",
            challenges: "The greatest challenge was how to cross the 'Valley of Death' faced by startups—characterized by unstable cash flow during the seed stage, a shortage of talent capable of advanced AI development, and the difficulty of building alliances with major corporations—and place them on an explosive growth trajectory.",
            approach: "Tryfunds participated not merely as consultants, but from the standpoint of 'Co-founders.' We exclusively networked and introduced all lead investors from the initial seed money raise up to Series A, B, and C. Simultaneously, we fortified their management foundation by dispatching executives from our own firm. Furthermore, to address the shortage in AI development, we fully utilized the resources of Tryfunds' closely affiliated companies, and rapidly supplied the talent required for business expansion through RPO (Recruitment Process Outsourcing). We also took the lead in building alliances with major corporations.",
            outcome: "By complementing all 'missing parts'—capital, talent, development resources, and networks—Tryfunds enabled Sustech to achieve growth at an astonishing speed. establishing a model case that serves as a 'growth fast-pass' for startups, they continue to lead the industry in the renewable energy × AI domain."
        }
    },
    {
        id: "general-oyster",
        client: "General Oyster",
        title: "Led V-shaped Recovery and Return to Profitability from Negative EBITDA of 700M JPY",
        category: "Turnaround / Hands-on Management",
        summary: "Directly dispatched a CEO and COO to a restaurant chain suffering from massive deficits. Realized a dramatic V-shaped recovery through radical cost reduction and HR reform.",
        tags: ["Turnaround", "Executive Dispatch", "Cost Reduction", "HR Reform"],
        image: "/cs_oyster_turnaround.png",
        results: ["Achieved profitability from an EBITDA deficit of 700 million yen", "Management reform via CEO/COO dispatch", "Construction of a stable talent supply system"],
        content: {
            background: "General Oyster, operating one of Japan's leading oyster restaurant chains, had fallen into a severe management crisis with an EBITDA of negative 700 million yen due to changes in the external environment and an increase in unprofitable stores.",
            challenges: "They were in a phase where simple advice could not turn things around. It was urgent to implement a fundamental restructuring of the cost structure through strong leadership, and to rebuild the human resources (HR) supporting the frontline.",
            approach: "As professionals in corporate turnaround, Tryfunds directly dispatched a CEO and COO from its own firm to the target company. Embedding ourselves in the absolute frontlines, we carried out radical cost reductions, including the liquidation of unprofitable divisions and a thorough review of the supply chain. Furthermore, to overcome the high turnover rate typical of the restaurant industry, we introduced a completely new HR reform program and designed a system from scratch to ensure a stable supply of high-quality talent.",
            outcome: "As a result of hands-on reform driven by both top-down and bottom-up approaches, the company achieved an impressive return to profitability from a negative EBITDA of 700 million yen in a short period. Revitalized, the company was reborn with a resilient business foundation capable of envisioning new growth strategies."
        }
    },
    {
        id: "warehouse-dx",
        client: "Major Logistics Company",
        title: "Breaking Free from Vendor Lock-in and Achieving Billions of Yen in Annual Cost Reductions",
        category: "Digital Transformation (DX)",
        summary: "To break free from excessive reliance on a major IT firm, Tryfunds developed a system within its in-house lab. Achieved overwhelming cost reductions by introducing a license billing model.",
        tags: ["DX", "Vendor Independence", "In-house Lab", "Cost Reduction"],
        image: "/cs_warehouse_dx.png",
        results: ["Large-scale cost reduction amounting to billions of yen annually", "Complete liberation from vendor lock-in", "Construction of a business-linked licensing model"],
        content: {
            background: "A major logistics company with a massive nationwide network. They were completely held hostage by a specific global IT vendor for the operation and maintenance of their core systems, trapped in a 'vendor lock-in' state where they had no choice but to comply with price hike demands thrust upon them almost every year.",
            challenges: "Due to the legacy systems becoming a black box, it was impossible to add functions or make modifications in-house. The running costs of advancing DX were pressuring management. It was crucial to break these chains and advance digitalization led by the company itself.",
            approach: "Tryfunds participated not as a 'subcontractor' for system development, but as a strategic technology partner. Utilizing Tryfunds' in-house development lab, we developed a state-of-the-art system from scratch to replace the existing legacy functions. Most notably, rather than billing the client a lump sum for development expenses, we established a proprietary SaaS-type licensing structure that charges based on the system's 'usage frequency'.",
            outcome: "The client succeeded in completely breaking away from the major vendor while keeping massive initial development investments in check. System costs were overwhelmingly optimized, resulting in large-scale cost reductions exceeding billions of yen per year. We presented a new form of partnership in logistics DX."
        }
    },
    {
        id: "ukai-global",
        client: "UKAI",
        title: "First Overseas Expansion of 'UKAI-TEI' and JV Formation with a Vietnamese Conglomerate",
        category: "Global Expansion",
        summary: "Supported the overseas expansion of the premium Japanese restaurant brand 'UKAI-TEI,' from structuring a joint venture with a leading Southeast Asian conglomerate to launching the restaurant.",
        tags: ["Global Expansion", "Cross-border", "Joint Venture", "F&B"],
        image: "/cs_ukai_global.png",
        results: ["Successful launch of the first overseas restaurant", "JV formation with a leading Vietnamese conglomerate", "The first step towards building a global brand"],
        content: {
            background: "'UKAI-TEI,' renowned for its top-tier Teppanyaki cuisine. Although they had established an unshakable position domestically, their first overseas expansion into the growing Asian market, where the wealthy population is rapidly increasing, was essential for further growth.",
            challenges: "How to maintain the brand's 'spirit of hospitality' and quality overseas, where language, culture, and business practices differ? Furthermore, the greatest barrier was selecting a powerful local partner to smoothly secure the best location locally and obtain permits and licenses.",
            approach: "Leveraging Tryfunds' network 'from the center of government to the top of conglomerates,' we selected a top conglomerate with overwhelming influence and real estate development power in Vietnam as a partner. Going beyond a mere introduction, we consistently accompanied the client from constructing the Joint Venture (JV) scheme and negotiating the terms of capital alliance to the project management of the local restaurant launch.",
            outcome: "Securing a premium location in the capital of Vietnam, the first overseas 'UKAI-TEI' restaurant opened with great success. By capturing not only the local wealthy class but also global executives as customers, they took a striking first step towards the internationalization of the UKAI brand."
        }
    },
    {
        id: "phil-company",
        client: "Phil Company",
        title: "Acceleration of Aerial Store Business and Strong Project Management Support",
        category: "Business Acceleration",
        summary: "Directly dispatched project leaders to expand alliances for their unique 'Aerial Store' business, utilizing the unused space above parking lots.",
        tags: ["Business Acceleration", "Executive Dispatch", "Alliance", "Real Estate Tech"],
        image: "/cs_phil_company.png",
        results: ["Dispatch of executives and management layer", "Partnerships with leading project partners", "Doubled the speed of aerial store development"],
        content: {
            background: "Focusing on the unused space above parking lots (aerial space) in urban areas, Phil Company plans and develops unique multi-level commercial units. Their innovative business model was highly evaluated, and they were entering a phase of rapid expansion.",
            challenges: "Against the explosive increase in projects, there was an overwhelming shortage of project managers capable of overseeing negotiations with landowners, the design/construction phases, and tenant attraction at a high level. This had become a bottleneck for growth.",
            approach: "Under the policy of 'We will provide the very driving force the business lacks,' Tryfunds directly dispatched talent highly skilled in practical execution and management (President-class and Business Heads) into the client's operations. While strengthening the internal organizational structure, we connected Tryfunds' diverse network of developers and investors, successively concluding alliances with excellent project partners.",
            outcome: "Acquiring a powerful driving engine on the frontlines dramatically improved the speed and quality of project execution. Moving beyond mere consulting, this is a representative case where we drove business growth from within the client as a business operating company."
        }
    },
    {
        id: "us-real-estate",
        client: "US Real Estate AM",
        title: "Total Project Cost 60B JPY: Asset Management for a High-rise Building Near NY",
        category: "Asset Management / Finance",
        summary: "Covered everything from structuring the optimal investment scheme to fundraising and providing investment opportunities to Japanese companies for a high-rise building development costing 60 billion JPY in the NY area.",
        tags: ["Real Estate", "Asset Management", "Cross-border Finance", "New York"],
        image: "/cs_ny_manhattan.jpg",
        results: ["Structuring a 60 billion JPY project", "Completion of complex cross-border fundraising", "Creation of premium investment opportunities for domestic companies"],
        content: {
            background: "A massive high-rise development project boasting a total project cost exceeding 60 billion JPY in a prime location near New York. In a market where investment money gathers from around the world, meticulous structuring was required.",
            challenges: "It necessitated highly sophisticated scheme construction to clear not only massive fundraising hurdles but also US-specific real estate tax systems and legal risks. At the same time, the challenge was how to lower the barriers to entry for Japanese institutional investors and operating companies to participate in this highly attractive deal.",
            approach: "Our professional finance team worked closely with local developers and financial institutions to design the optimal asset management (AM) structure and vehicle (such as an investment limited partnership). We structured a complex financing scheme ranging from mezzanine to equity. Furthermore, we structured and marketed an investment package for Japanese investors that clearly defined the risks and returns.",
            outcome: "Successfully completing a fundraising of tens of billions of yen, the project went into full swing. We provided domestic companies with direct investment opportunities in ultra-premium US real estate developments that are normally difficult to access, functioning as a bridge for global capital repatriation."
        }
    },
    {
        id: "ishizaka-branding",
        client: "Ishizaka Inc.",
        title: "Brand Transformation from Industrial Waste Disposal to an 'Environmental Creation Company'",
        category: "Branding / ESG",
        summary: "Dispelled the old image of a 'garbage collector,' formulating a powerful brand identity as a futuristic environmental creation business coexisting with nature.",
        tags: ["Corporate Branding", "ESG", "Sustainability", "Industrial Innovation"],
        image: "/cs_ishizaka_attached.jpg",
        articleImage: "/cs_content_ishizaka.png",
        results: ["Formulation of a new purpose and VI", "Fundamental shift in industry image", "Increased domestic and international inspections/media exposure"],
        content: {
            background: "Through highly advanced recycling technologies and expansive woodland conservation activities, Ishizaka possessed an unparalleled industrial waste disposal ecosystem. However, they faced the dilemma of still being viewed by society through the 'Industrial Waste Disposer = Negative Image' lens.",
            challenges: "Their world-class environmental technologies and philosophy were not directly translating into corporate brand value. A 'rebranding' was required to accurately communicate that value beyond the B2B framework to society at large and the globe.",
            approach: "Tryfunds engaged in deep dialogue with the management team and redefined the meaning of the company's existence in society (Purpose). We verbalized the transformation from a company that 'disposes of industrial waste' to one that 'coexists with nature and creates the Earth's future.' From renewing the visual logo and VI (Visual Identity) to a communication strategy encouraging the 'Showcasing (Theme Park-ification)' of the factory, we designed and executed the entire brand strategy seamlessly.",
            outcome: "The renewed branding dramatically improved recognition and evaluation both inside and outside the industry, evolving the facility into a sustainability mecca currently visited by governments and corporations from all over the world. It became a successful case of ESG management where the company's business strength and brand strength were perfectly integrated."
        }
    },
    {
        id: "regional-tourism",
        client: "Major Financial Institution × Local Government",
        title: "Business Investment-driven, Wide-area Inbound Tourism Strategy Project",
        category: "Regional Revitalization / Investment",
        summary: "Going beyond fee business, Tryfunds dared to make principal investments to create local tourist attractions. A unique model achieving both consulting fees and investment returns.",
        tags: ["Regional Revitalization", "Tourism Strategy", "Principal Investment", "Inbound"],
        image: "/cs_sado_island.jpg",
        results: ["Creation of new tourist attractions for inbound visitors", "Hybrid recovery of consulting fees and principal investment", "Construction of a self-sustaining growth ecosystem for the regional economy"],
        content: {
            background: "A wide-area tourism strategy project where a major financial institution and local governments teamed up to spread the wave of inbound demand to Sado Island, Niigata. However, a strategy document that is mere 'pie in the sky' does not make money flow into the local area in reality.",
            challenges: "Initial investments and operational know-how are essential to make tourist destinations attractive, but the reality was that local businesses alone could not bear all the risks. What was needed was a player who would not merely offer external 'advice' but would seriously take on risks to drive the project forward.",
            approach: "Tryfunds not only provided the grand design of the tourism strategy (strategy formulation, flow design, promotion strategy) but also injected its own capital into the project itself as 'principal investment.' By participating as an operator ourselves in the renovation of old folk houses and the development of new activity hubs, we elevated the speed of business promotion and commitment to an overwhelming level.",
            outcome: "Following the strategy document, attractive tourist spots opened one after another, successfully drawing tourists from overseas. Tryfunds succeeded in generating returns through the profitability of the tourism business, in addition to fixed consulting fees. It was a project that truly demonstrated the essence of Tryfunds as a 'Co-operator who shares the risk.'"
        }
    },
    {
        id: "daishi-hokuetsu-fund",
        client: "Daishi Hokuetsu Bank",
        title: "Structuring a Multi-Asset GP Fund to Truly Drive Regional Development",
        category: "Fund Formation / Regional Revitalization",
        summary: "Believing that investing in a single business or real estate property is insufficient for regional revitalization, we launched an area-focused investment fund combining different assets such as business investments, real estate, energy, and infrastructure.",
        tags: ["Fund Formation", "Co-GP", "Regional Development", "Multi-Asset"],
        image: "/cs_daishi_bank.jpg",
        results: ["Establishment of a Co-GP Fund", "Establishment of an area-focused investment model", "Cross-asset-class portfolio design"],
        content: {
            background: "Daishi Hokuetsu Bank, a regional financial institution, possessed a strong sense of mission to revitalize the local economy. However, conventional financial support alone made it difficult to fundamentally transform the region, demanding a more profound approach to regional development.",
            challenges: "To 'truly' succeed in regional development, simply investing in one business or buying a single property was not enough. Concentrated investments across an 'area (surface)' rather than just 'points' were necessary. Consequently, there was an unprecedented challenge to design a vehicle (fund) from scratch capable of simultaneously investing in multiple targets with different asset classes, such as businesses, real estate, energy, and infrastructure.",
            approach: "Tryfunds partnered with Daishi Hokuetsu Bank as a Co-GP (General Partner), launching a completely new, cross-asset-class regional development fund concept. Fully applying the knowledge in 'Corporate Management,' 'Real Estate AM,' and 'Energy/Infrastructure Development' that Tryfunds had cultivated over the years, we constructed and executed a complex scheme that cleared financial regulations and investor return requirements.",
            outcome: "A 'Multi-asset, Area-focused Investment Fund'—rare even in Japan—was successfully structured, initiating direct investment activities aimed at boosting the areal value of the region. It has become a model case for new regional revitalization finance that maximizes the potential of local communities."
        }
    }
];

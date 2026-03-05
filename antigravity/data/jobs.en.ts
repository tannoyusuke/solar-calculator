export type Job = {
    id: string;
    title: string;
    department: string;
    location: string;
    type: string;
    description: string;
    requirements: string[];
    niceToHave: string[];
    aboutTeam: string;
};

export const jobs: Job[] = [
    {
        id: "advisor-analyst-associate",
        title: "Advisor (Analyst / Associate / Senior Associate)",
        department: "Business Development",
        location: "Tokyo, Japan",
        type: "Full-time",
        aboutTeam: "We are an advisory team that provides hands-on execution support from solving clients' management issues to business production, M&A, and in-house fund investment. We provide an environment where junior members can grow at an overwhelming speed.",
        description: "You will be on the front lines handling practical operations (Play) such as information gathering, data analysis, material creation, and project progress management in corporate transformation, M&A, and new business launches. You are required to possess the execution capability to go beyond consulting and actively complement 'missing parts' by taking direct action.\n\nKey Responsibilities:\n- Research, market research, and data analysis of competitors\n- Support for financial modeling and business plan formulation\n- Creation of presentation materials for management\n- Hands-on execution support and project management assistance at client sites\n- Execution support for value-enhancing measures at our investee companies",
        requirements: [
            "Logical thinking and high information gathering/analytical skills",
            "Business-level PC skills (Modeling in Excel, material creation in PowerPoint)",
            "Intellectual stamina and a sense of ownership to catch up and accomplish tasks even in unexperienced domains",
            "Smooth communication skills as a team player"
        ],
        niceToHave: [
            "Practical experience at consulting firms, financial institutions, or operating companies (planning department)",
            "Language skills such as English"
        ]
    },
    {
        id: "advisor-em-vp",
        title: "Advisor (Engagement Manager / Vice President)",
        department: "Business Development",
        location: "Tokyo, Japan",
        type: "Full-time",
        aboutTeam: "We are an advisory team that provides hands-on execution support from solving clients' management issues to business production, M&A, and in-house fund investment. You will play a core role in pioneering the front lines of projects and committing to results. Furthermore, you are strongly expected to engage in frontline business investment activities, such as launching businesses at our investees, hands-on value enhancement, and leading fundraising for businesses you create.",
        description: "As the on-site project manager (Drive), you will lead issue setting, solution formulation, client management, and member development. In addition, you are required to continuously structure and execute high-margin, value-based deals (e.g., investing cheap/selling high, selling high-value consulting, performance-based fees), equipped with 'value verbalization through out-of-the-box thinking' and 'an instinct for generating and improving margins based on provided value,' which are explicitly evaluated in our HR system.\n\nNaturally, a constant and proactive attitude towards utilizing Generative AI to enhance productivity across the team, as well as frontline marketing and sales expertise, are essential.\n\nKey Responsibilities:\n- Overall project design, milestone management, and quality control\n- Building relationships and aligning expectations with client management (CxO class)\n- Contributing to the expansion of our value-adding network/ecosystem (building Win-Win relationships)\n- Implementing execution support including M&A and alliances, beyond mere advisory, and leading hands-on business launches at our investees\n- Taking risks to structure high-margin, value-based deals by involving senior management\n- Leading operations construction and marketing/sales activities through the proactive use of the latest AI/GenAI tools",
        requirements: [
            "Practical experience at strategic/comprehensive consulting firms, investment banks, PE, etc. (Approx. 3+ years)",
            "Experience in project management and developing junior staff",
            "Ability to design and actualize business models that monetize based on value provided (high unit prices, performance fees, etc.)",
            "A sense of ownership to lead business growth by standing on the side of the operating company, going beyond consulting",
            "Strong interest in Generative AI and the latest technologies, with the ability to proactively utilize them at a practical level"
        ],
        niceToHave: [
            "Experience leading M&A, corporate turnaround, and cross-border deals",
            "Experience in core business launches and promotion at operating companies"
        ]
    },
    {
        id: "advisor-principal-md",
        title: "Advisor (Principal / Managing Director)",
        department: "Business Development",
        location: "Tokyo, Japan",
        type: "Full-time",
        aboutTeam: "This is the management layer (Lead) that oversees and drives the Tryfunds Group's advisory and investment businesses. You have the crucial mission of scaling the business as the face of the firm, developing next-generation leaders, and building the 'infrastructure' (systems/resources) for the entire Tryfunds organization to leap forward.",
        description: "While the 'structuring of high-margin deals' and 'hands-on lead of investee businesses' required of VPs are absolute prerequisites, as a Lead (MD) you will spearhead the 【creation of infrastructure usable by all Tryfunds members】. This includes 'connections with decision-makers of global partners capable of preferential alliances,' 'development of powerful sales channels,' 'structuring of fund vehicles utilizable across the company,' and 'building systems that elevate company-wide performance.'\n\nBased on these foundations, you will drive the maximization of value provision to clients and the expansion of our own business (acquiring new accounts, developing massive services, etc.), taking risks to oversee the business yourself. Naturally, an attitude of leading the entire firm in promoting innovation via Generative AI and passing down advanced marketing and sales strategies to the organization is indispensable.\n\nKey Responsibilities:\n- Construction and provision of infrastructure (global partner alliances, sales channels, funds, etc.) that elevates the performance of all Tryfunds members\n- Formulation and execution of Tryfunds' business and sales/marketing strategies\n- Acquisition of new accounts and deepening of relationships with major enterprise clients\n- Management intervention in client companies, hands-on support as CxO, and overseeing the value enhancement of investee companies\n- Leading the proactive introduction of AI/GenAI technologies and process transformation at the corporate level",
        requirements: [
            "Outstanding track record at consulting firms (Partner/Director level), investment banks (MD level), or operating companies (Executive/Division Head level)",
            "A robust global network and overwhelming business development capabilities to discover and structure massive deals and funds firsthand",
            "Skill in building internal/external infrastructure (sales channels, alliance partners, systems) from scratch and sublimating it into a form usable by the entire organization",
            "Strong driving force and leadership to directly impact the company's management and embed AI utilization and new marketing methods into the organization"
        ],
        niceToHave: [
            "Experience as a Managing Director at a PE fund",
            "Experience as a CxO in listed ventures or large-scale carve-out deals",
            "Deep expertise in Generative AI",
            "Experience leading product development and safely guiding it to operation/growth as a business",
            "A track record of achieving extraordinary, overwhelming sales results",
            "Advanced web marketing knowledge based on absolute metrics"
        ]
    },
    {
        id: "ceo-office",
        title: "CEO Office (Executive Assistant to the President)",
        department: "Executive Office",
        location: "Tokyo, Japan",
        type: "Full-time",
        aboutTeam: "The CEO Office drives important, special mission projects across the entire Tryfunds Group directly under the President. It functions as the core of management, bringing a bird's-eye view to the group's business structure.",
        description: "We are seeking an executive assistant to the president who will create unprecedented deals alongside the representative. This is a highly challenging position requiring extreme professionalism, an executive perspective, and the ability to overlook the business structure of the entire group. You will cover a wide range of areas from business launches and alliance building to the execution of special-mission projects.\n\nBecause this position strongly drives business transformation and commercialization using Generative AI, experience in product development utilizing Generative AI and knowledge of software development are foundational prerequisites.\n\nKey Responsibilities:\n- Planning and promotion of cross-group special mission projects\n- Supporting the representative's decision-making and executing special mission deals\n- Launching new businesses and proprietary products utilizing Generative AI, and formulating, negotiating, and executing alliance strategies\n- Identifying business issues across the group and presenting solutions",
        requirements: [
            "High professionalism and a sense of ownership",
            "Ability to view matters structurally from a management perspective",
            "A driving force to pave the way in highly uncertain environments",
            "Experience creating products utilizing Generative AI, or practical knowledge of software development"
        ],
        niceToHave: [
            "Experience in entrepreneurship or launching new businesses",
            "Practical experience in M&A or alliance building",
            "Experience at a strategic consulting firm or investment bank"
        ]
    },
    {
        id: "fund-raising-finance",
        title: "Fund Raising & Finance",
        department: "Finance",
        location: "Tokyo, Japan",
        type: "Full-time",
        aboutTeam: "The specialized finance unit that financially supports massive projects for our firm and our clients. We take on activities as a PE fund and the structuring of large-scale project finance.",
        description: "You will be responsible for raising our own funds as a PE fund, or structuring client project finance on the scale of hundreds of millions to tens of billions of yen. This is a crucial role that utilizes structuring capabilities for diverse financing schemes and a strong network with domestic and international financial institutions to complement the 'missing part' of funding necessary for business growth.\n\nKey Responsibilities:\n- Planning and promotion of fundraising activities for our proprietary investment funds\n- Structuring project finance and structured finance for clients\n- Proposing optimal capital structures from both debt and equity perspectives and executing fundraising\n- Building and maintaining relationships with domestic and international institutional investors and financial institutions\n- Financial modeling and valuation work during investment consideration",
        requirements: [
            "Practical experience in fundraising/finance at investment banks, securities companies, funds, etc.",
            "Advanced knowledge regarding various financing schemes (debt, equity, mezzanine, etc.)",
            "Possession of financial modeling and advanced valuation skills",
            "Relationship building capabilities with domestic and international financial institutions/investors"
        ],
        niceToHave: [
            "Experience in fundraising operations at a PE fund",
            "Fundraising experience in cross-border deals",
            "Business-level English proficiency or higher"
        ]
    },
    {
        id: "asset-management",
        title: "Asset Management",
        department: "Investment",
        location: "Tokyo, Japan",
        type: "Full-time",
        aboutTeam: "The team responsible for the asset management of the diverse funds (real estate, infrastructure, corporate investments, etc.) managed by Tryfunds. We maximize fund performance through post-investment value enhancement.",
        description: "You will handle all post-acquisition asset management operations for a wide variety of investment targets including real estate, infrastructure, and corporations. Beyond mere administrative work, this is a position that contributes to maximizing the performance of the entire fund operation, spanning hands-on value-up support, reporting, and formulating/executing investment recovery (EXIT) strategies.\n\nKey Responsibilities:\n- Formulating business plans and managing budget vs. actuals for invested assets (real estate, infrastructure, corporations, etc.)\n- Executing hands-on business value enhancement (value-up) measures in collaboration with the investee's management and frontline teams\n- Monitoring assets and regularly reporting performance to investors\n- Formulating and executing optimal EXIT strategies (sales, IPO, etc.)",
        requirements: [
            "Experience in asset management or business management at funds, AM companies, operating companies, etc.",
            "Analytical ability to accurately interpret PL/BS/CF and extract business issues from a financial perspective",
            "Logical thinking and documentation skills"
        ],
        niceToHave: [
            "Possession of relevant certifications such as CPA, Real Estate Appraiser, CMA, etc."
        ]
    },
    {
        id: "tech-ai-specialist",
        title: "AI Specialist",
        department: "Technology",
        location: "Tokyo, Japan",
        type: "Full-time",
        aboutTeam: "The technology unit pioneering the frontiers of business transformation utilizing cutting-edge technology and AI. We directly complement the technical missing parts for our own and our clients' projects.",
        description: "A specialist who deeply understands the latest AI models and machine learning technologies, and leads the implementation phase of integrating them into actual business processes and products. We are seeking someone who doesn't let AI end as a mere buzzword, but can translate it into 'results'—dramatic productivity improvements and the creation of new customer experiences.\n\nKey Responsibilities:\n- Technical verification and prototype development of AI solutions (LLM, etc.) for client issues\n- System architecture design and implementation for AI introduction projects at business investees\n- Catching up on the latest AI trends and systematizing internal knowledge\n- Requirement definition support through collaboration with non-engineering layers (consultants, business professionals)",
        requirements: [
            "Experience building and fine-tuning machine learning models (especially LLM, etc.)",
            "Practical experience building backend and data pipelines using Python, etc.",
            "Ability to understand the latest research papers and technical trends and apply them to real business",
            "Communication skills to smoothly align business perspectives with technical requirements"
        ],
        niceToHave: [
            "Experience building MLOps environments on the cloud (AWS, GCP, Azure)",
            "Experience launching AI-related products from 0 to 1"
        ]
    },
    {
        id: "tech-product-manager",
        title: "Product Manager",
        department: "Technology",
        location: "Tokyo, Japan",
        type: "Full-time",
        aboutTeam: "The technology unit pioneering the frontiers of business transformation utilizing cutting-edge technology and AI. We directly complement the technical missing parts for our own and our clients' projects.",
        description: "We are seeking a product manager who can seamlessly complete the entire lifecycle of new product development for our firm or our investees—from business requirement definition to UX design, development management, and post-release growth. We require 'full-stack' driving force; someone with overwhelming insight into technology/AI who can roll up their sleeves and shape a product even with limited engineering resources.\n\nKey Responsibilities:\n- Planning and defining requirements for new products\n- Formulating and prototyping significant UX improvement measures utilizing AI\n- Project management during the development phase (leading agile development)\n- Setting product KPIs, measuring effectiveness, and executing continuous growth strategies",
        requirements: [
            "Experience leading software products (Web, App, etc.) from requirement definition to release",
            "Fundamental knowledge of engineering (level to write code oneself and build prototypes)",
            "Deep understanding and design experience regarding UI/UX design",
            "Logical thinking to translate business issues into system requirements"
        ],
        niceToHave: [
            "Practical experience as a software engineer",
            "PM experience for AI-related products",
            "Experience being responsible for a product's P&L as a business head"
        ]
    },
    {
        id: "pr-marketing-specialist",
        title: "PR & Marketing Specialist",
        department: "Corporate Design",
        location: "Tokyo, Japan",
        type: "Full-time",
        aboutTeam: "The PR and marketing team that maximizes Tryfunds' brand value and delivers its appeal to the right candidates and clients. Fully leveraging the latest technologies like Generative AI, we produce output of overwhelming quality as an elite, specialized unit.",
        description: "You will handle everything from formulating Tryfunds' PR and marketing strategies to actual creative production in a seamless process. In addition to creating text content, we require the ability to maximize operational efficiency through full use of Generative AI, and the skills to complete video production alone—from planning to editing.\n\nKey Responsibilities:\n- Strategic planning and execution for corporate branding and recruitment PR\n- High-speed production of high-quality content/creatives (articles, images) utilizing Generative AI (ChatGPT, Midjourney, etc.)\n- Production of video content (for YouTube, SNS, etc.) completed entirely alone, from planning and filming to editing\n- Planning and writing for owned media and press releases\n- Building and handling media relations",
        requirements: [
            "Practical experience in PR, Public Relations, or Marketing roles",
            "Skills to integrate Generative AI (LLM tools, Image/Video generation AI) into daily practical work to enhance the quality and speed of outputs",
            "Skills to complete video production alone, from planning and shooting to video editing in Premiere Pro / DaVinci Resolve",
            "High expressive ability to deeply understand and verbalize/visualize Tryfunds' philosophy and business content"
        ],
        niceToHave: [
            "Experience in PR/Marketing at BtoB companies (especially in finance or consulting domains)",
            "Practical knowledge in website direction and design"
        ]
    }
];

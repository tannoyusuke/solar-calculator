export type NewsCategory = "Notice" | "Press" | "Event" | "Release" | "Media";

export type NewsItem = {
    id: string;
    title: string;
    date: string; // YYYY.MM.DD
    category: NewsCategory;
    content: string;
};

export const newsData: NewsItem[] = [
    {
        id: "2026-02-16-nigata-fund",
        title: "Acceptance of Additional Investment for 'Niigata Sustainable Regional Development Investment Limited Partnership'",
        date: "2026.02.16",
        category: "Release",
        content: "We have accepted new investments from regional financial institutions and operating companies for the 'Niigata Sustainable Regional Development Investment Limited Partnership' in our regional development fund.\nWith this additional investment, we will further promote investment and hands-on support aimed at revitalizing the regional economy, including solving business succession issues faced by mid-sized and SMEs in Niigata Prefecture."
    },
    {
        id: "2025-11-10-license",
        title: "Acquisition of Real Estate Brokerage License",
        date: "2025.11.10",
        category: "Notice",
        content: "Tryfunds Inc. has recently acquired a 'Real Estate Brokerage License'.\n\nWith the acquisition of this license, in addition to our conventional corporate turnaround and business succession support, we are now able to provide a fast, one-stop solution for more diversified value-up measures, M&A, and business restructuring involving real estate assets.\n\n- License Number: Governor of Tokyo (1) No. 112791"
    },
    {
        id: "2025-09-08-sme-cert",
        title: "Certification as 'Management Innovation Support Organization' by the SME Agency",
        date: "2025.09.08",
        category: "Notice",
        content: "Our company has been officially certified as a 'Management Innovation Support Organization (Certified Support Organization)' by the Small and Medium Enterprise Agency.\n\nThis is a system where the government certifies individuals with a certain level or higher of specialized knowledge and practical experience. Receiving this certification, we will continue to provide our clients with more effective financial and management solutions, such as support for utilizing various subsidies and tax incentives."
    },
    {
        id: "2025-07-31-daishi-hokuetsu",
        title: "Launch of Regional Development Fund jointly with Daishi Hokuetsu Capital Partners",
        date: "2025.07.31",
        category: "Press",
        content: "Tryfunds Inc. has jointly launched a new 'Regional Development Fund' with Daishi Hokuetsu Capital Partners Inc., a group company of Daishi Hokuetsu Bank.\n\nBy uniting our business development and hands-on support know-how with the strong regional network of the Daishi Hokuetsu Financial Group, this fund will strongly back the next generation of growth and sustainable development of regional companies."
    },
    {
        id: "2024-04-17-vietnam-partnership",
        title: "Partnership Agreement with Major Vietnamese Real Estate Developer Sun Group for Business Development Support in Van Phong Special Economic Zone",
        date: "2024.04.17",
        category: "Release",
        content: "Tryfunds Inc. has entered into a strategic partnership agreement with Sun Group, one of Vietnam's leading conglomerates, regarding support for the development of various infrastructure and real estate businesses in the Van Phong Special Economic Zone.\n\nProviding our global fundraising network and our knowledge of launching numerous business entities, we will participate in the project to enhance the Special Economic Zone's value as an international gateway."
    },
    {
        id: "2024-03-01-corporate-renewal",
        title: "Notice of Complete Corporate Website Renewal",
        date: "2024.03.01",
        category: "Notice",
        content: "Founded with an overseas expansion support business, we have since undertaken various initiatives, such as launching recruitment services, marketing support, and fund businesses. We have successfully created operating companies in-house, raised funds for them, and sold them; we have also succeeded in stabilizing management through engagement investments in listed companies. Tryfunds has completely renewed its corporate website with the aim of correctly conveying its current state.\n\nWith this renewal, we have expanded our design and content to allow for a more intuitive understanding of our 'Willful Challenges (TRY)' and our unique 'Value Creation' model."
    }
];

import { cmsClient } from "@/lib/cms";
import { caseStudies as caseStudiesJa } from "@/data/caseStudies.ja";
import { caseStudies as caseStudiesEn } from "@/data/caseStudies.en";
import { Locale } from "./i18n-config";

export const getCaseStudiesData = async (lang: Locale) => {
    try {
        const response = await cmsClient.get({
            endpoint: "case-studies",
            queries: {
                limit: 100,
                orders: "order",
            },
            customRequestInit: { next: { revalidate: 60 } }
        });

        if (response && response.contents && response.contents.length > 0) {
            return response.contents.map((item: any) => {
                const localData: any = caseStudiesJa.find(c => c.client === item.client || c.title === item.title) || caseStudiesEn.find(c => c.client === item.client || c.title === item.title) || {};
                
                return {
                    id: item.id,
                    client: item.client,
                    title: lang === "en" && item.title_en ? item.title_en : item.title,
                    category: lang === "en" && item.category_en ? item.category_en : item.category,
                    summary: lang === "en" && item.summary_en ? item.summary_en : item.summary,
                    tags: item.tags ? item.tags.split(",").map((t: string) => t.trim()) : [],
                    image: item.image?.url || localData.image || "",
                    articleImage: item.articleImage?.url || localData.articleImage || "",
                    results: lang === "en" && item.results_en ? item.results_en.split("\n") : (item.results ? item.results.split("\n") : []),
                    content: {
                        background: lang === "en" && item.content_background_en ? item.content_background_en : (item.content_background || ""),
                        challenges: lang === "en" && item.content_challenges_en ? item.content_challenges_en : (item.content_challenges || ""),
                        approach: lang === "en" && item.content_approach_en ? item.content_approach_en : (item.content_approach || ""),
                        outcome: lang === "en" && item.content_outcome_en ? item.content_outcome_en : (item.content_outcome || ""),
                    }
                };
            });
        }
    } catch (error) {
        console.warn("Failed to fetch case studies from microCMS, falling back to local data.", error);
    }

    // Fallback
    return lang === "en" ? caseStudiesEn : caseStudiesJa;
};

import { cmsClient } from "@/lib/cms";
import { newsData as newsJa } from "@/data/news.ja";
import { newsData as newsEn } from "@/data/news.en";
import { Locale } from "./i18n-config";

export const getNewsData = async (lang: Locale) => {
    try {
        const response = await cmsClient.get({
            endpoint: "news",
            queries: {
                limit: 100,
            },
        });

        if (response && response.contents && response.contents.length > 0) {
            return response.contents.map((item: any) => {
                const dateObj = item.publishedAt ? new Date(item.publishedAt) : new Date(item.createdAt);
                const isoDate = `${dateObj.getFullYear()}.${String(dateObj.getMonth() + 1).padStart(2, '0')}.${String(dateObj.getDate()).padStart(2, '0')}`;

                return {
                    id: item.id,
                    title: lang === 'en' && item.title_en ? item.title_en : item.title,
                    date: isoDate,
                    category: item.category ? (Array.isArray(item.category) ? item.category[0] : item.category) : "Notice",
                    content: lang === 'en' && item.content_en ? item.content_en : item.content || "",
                };
            });
        }
    } catch (error) {
        console.warn("Failed to fetch news from microCMS, falling back to local data.", error);
    }

    // Fallback to local hardcoded arrays
    return lang === "en" ? newsEn : newsJa;
};

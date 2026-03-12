import { cmsClient } from "@/lib/cms";
import { Locale } from "./i18n-config";
import { getDictionary } from "./dictionary";

export const getHistoryData = async (lang: Locale) => {
    try {
        const response = await cmsClient.get({
            endpoint: "history",
            queries: {
                limit: 100,
            },
        });

        if (response && response.contents && response.contents.length > 0) {
            // Sort by year just in case
            const sortedContents = response.contents.sort((a: any, b: any) => {
                 return String(a.year).localeCompare(String(b.year));
            });
            return sortedContents.map((item: any) => {
                return {
                    id: item.id,
                    year: lang === "en" && item.year_en ? item.year_en : item.year,
                    event: lang === "en" && item.event_en ? item.event_en : item.event,
                };
            });
        }
    } catch (error) {
        console.warn("Failed to fetch history from microCMS, falling back to local data.", error);
    }

    // Fallback to local hardcoded arrays via dictionary
    const dict = await getDictionary(lang);
    return dict.company.history.events;
};

import { cmsClient } from "@/lib/cms";
import { fullPortfolios as portfolioListJa } from "@/data/portfolioList.ja";
import { fullPortfolios as portfolioListEn } from "@/data/portfolioList.en";
import { portfolioData as highlightPortfolioJa } from "@/data/portfolio.ja";
import { portfolioData as highlightPortfolioEn } from "@/data/portfolio.en";
import { Locale } from "./i18n-config";

export const getPortfolioData = async (lang: Locale) => {
    try {
        const response = await cmsClient.get({
            endpoint: "portfolio",
            queries: {
                limit: 100,
                orders: "order",
            },
        });

        if (response && response.contents && response.contents.length > 0) {
            // Map to the highlight format used by HeroPortfolioSlider
            return response.contents
                .filter((item: any) => item.isHighlight)
                .map((item: any) => {
                    const localData: any = highlightPortfolioJa.find(p => p.name === item.name) || highlightPortfolioEn.find(p => p.name === item.name) || {};
                    return {
                        id: item.id,
                        name: lang === "en" && item.name_en ? item.name_en : item.name,
                        logoText: item.logoText || item.name,
                        description: lang === "en" && item.highlightDescription_en ? item.highlightDescription_en : (item.highlightDescription || item.description),
                        image: item.highlightImage?.url || item.logoImage?.url || localData.image || "",
                    };
                });
        }
    } catch (error) {
        console.warn("Failed to fetch portfolio from microCMS, falling back to local data.", error);
    }

    return lang === "en" ? highlightPortfolioEn : highlightPortfolioJa;
};

export const getFullPortfolioList = async (lang: Locale) => {
    try {
        const response = await cmsClient.get({
            endpoint: "portfolio",
            queries: {
                limit: 100,
                orders: "order",
            },
        });

        if (response && response.contents && response.contents.length > 0) {
            return response.contents.map((item: any) => {
                const localData: any = portfolioListJa.find(p => p.name === item.name) || portfolioListEn.find(p => p.name === item.name) || {};
                return {
                    id: item.id,
                    name: lang === "en" && item.name_en ? item.name_en : item.name,
                    description: lang === "en" && item.description_en ? item.description_en : item.description,
                    type: lang === "en" && item.type_en ? item.type_en : item.type,
                    status: lang === "en" && item.status_en ? item.status_en : item.status,
                    logoImage: item.logoImage?.url || localData.logoImage || "",
                };
            });
        }
    } catch (error) {
        console.warn("Failed to fetch full portfolio from microCMS, falling back to local data.", error);
    }

    return lang === "en" ? portfolioListEn : portfolioListJa;
};

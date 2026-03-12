

import { members as membersJa } from "@/data/members.ja";
import { members as membersEn } from "@/data/members.en";

import { newsData as newsJa } from "@/data/news.ja";
import { newsData as newsEn } from "@/data/news.en";

import { jobs as jobsJa } from "@/data/jobs.ja";
import { jobs as jobsEn } from "@/data/jobs.en";



import { Locale } from "./i18n-config";

export { getPortfolioData, getFullPortfolioList } from "./portfolio";

export const getMembersData = (lang: Locale) => {
    return lang === "en" ? membersEn : membersJa;
};


export const getJobsData = (lang: Locale) => {
    return lang === "en" ? jobsEn : jobsJa;
};

export { getCaseStudiesData } from "./case-studies";

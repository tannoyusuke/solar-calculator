import { portfolioData as portfolioJa } from "@/data/portfolio.ja";
import { portfolioData as portfolioEn } from "@/data/portfolio.en";
import { fullPortfolios as fullPortfolioJa } from "@/data/portfolioList.ja";
import { fullPortfolios as fullPortfolioEn } from "@/data/portfolioList.en";

import { members as membersJa } from "@/data/members.ja";
import { members as membersEn } from "@/data/members.en";

import { newsData as newsJa } from "@/data/news.ja";
import { newsData as newsEn } from "@/data/news.en";

import { jobs as jobsJa } from "@/data/jobs.ja";
import { jobs as jobsEn } from "@/data/jobs.en";

import { caseStudies as caseStudiesJa } from "@/data/caseStudies.ja";
import { caseStudies as caseStudiesEn } from "@/data/caseStudies.en";

import { Locale } from "./i18n-config";

export const getPortfolioData = (lang: Locale) => {
    return lang === "en" ? portfolioEn : portfolioJa;
};

export const getFullPortfolioList = (lang: Locale) => {
    return lang === "en" ? fullPortfolioEn : fullPortfolioJa;
};

export const getMembersData = (lang: Locale) => {
    return lang === "en" ? membersEn : membersJa;
};

export const getNewsData = (lang: Locale) => {
    return lang === "en" ? newsEn : newsJa;
};

export const getJobsData = (lang: Locale) => {
    return lang === "en" ? jobsEn : jobsJa;
};

export const getCaseStudiesData = (lang: Locale) => {
    return lang === "en" ? caseStudiesEn : caseStudiesJa;
};

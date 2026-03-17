import { createClient } from 'microcms-js-sdk';
import { Job, jobs as localJobsJa } from '@/data/jobs.ja';
import { jobs as localJobsEn } from '@/data/jobs.en';

const client = createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN || '',
    apiKey: process.env.MICROCMS_API_KEY || '',
});

export type MicroCMSRecruit = {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    title: string;
    title_en?: string;
    department: string;
    department_en?: string;
    location: string;
    location_en?: string;
    type: string;
    type_en?: string;
    aboutTeam: string;
    aboutTeam_en?: string;
    description: string;
    description_en?: string;
    requirements: string;
    requirements_en?: string;
    niceToHave?: string;
    niceToHave_en?: string;
    order?: number;
};

// Helper to convert comma/newline separated strings to arrays
const splitStrings = (str: string | undefined): string[] => {
    if (!str) return [];
    return str.split('\n').map(s => s.trim()).filter(s => s.length > 0);
};

export async function getRecruits(lang: 'ja' | 'en' = 'ja'): Promise<Job[]> {
    if (!process.env.MICROCMS_SERVICE_DOMAIN || !process.env.MICROCMS_API_KEY) {
        console.warn("microCMS env vars missing, falling back to local recruit data");
        return lang === 'en' ? localJobsEn : localJobsJa;
    }

    try {
        const data = await client.getList<MicroCMSRecruit>({
            endpoint: 'recruit',
            queries: {
                limit: 100,
                // Sort by order field if available, otherwise by published date
                orders: 'order,-publishedAt',
            },
        });

        if (data.contents.length === 0) {
            console.warn("No recruit data in microCMS, falling back to local recruit data");
            return lang === 'en' ? localJobsEn : localJobsJa;
        }

        return data.contents.map((item) => ({
            id: item.id,
            title: lang === 'en' && item.title_en ? item.title_en : item.title,
            department: lang === 'en' && item.department_en ? item.department_en : item.department,
            location: lang === 'en' && item.location_en ? item.location_en : item.location,
            type: lang === 'en' && item.type_en ? item.type_en : item.type,
            aboutTeam: lang === 'en' && item.aboutTeam_en ? item.aboutTeam_en : item.aboutTeam,
            description: lang === 'en' && item.description_en ? item.description_en : item.description,
            requirements: splitStrings(lang === 'en' && item.requirements_en ? item.requirements_en : item.requirements),
            niceToHave: splitStrings(lang === 'en' && item.niceToHave_en ? item.niceToHave_en : item.niceToHave),
        }));

    } catch (error) {
        console.error("Error fetching recruit data from microCMS:", error);
        console.warn("Falling back to local recruit data");
        return lang === 'en' ? localJobsEn : localJobsJa;
    }
}

export async function getRecruitById(id: string, lang: 'ja' | 'en' = 'ja'): Promise<Job | null> {
    if (!process.env.MICROCMS_SERVICE_DOMAIN || !process.env.MICROCMS_API_KEY) {
        const fallbackJobs = lang === 'en' ? localJobsEn : localJobsJa;
        return fallbackJobs.find(j => j.id === id) || null;
    }

    try {
        const item = await client.get<MicroCMSRecruit>({
            endpoint: 'recruit',
            contentId: id,
        });

        return {
            id: item.id,
            title: lang === 'en' && item.title_en ? item.title_en : item.title,
            department: lang === 'en' && item.department_en ? item.department_en : item.department,
            location: lang === 'en' && item.location_en ? item.location_en : item.location,
            type: lang === 'en' && item.type_en ? item.type_en : item.type,
            aboutTeam: lang === 'en' && item.aboutTeam_en ? item.aboutTeam_en : item.aboutTeam,
            description: lang === 'en' && item.description_en ? item.description_en : item.description,
            requirements: splitStrings(lang === 'en' && item.requirements_en ? item.requirements_en : item.requirements),
            niceToHave: splitStrings(lang === 'en' && item.niceToHave_en ? item.niceToHave_en : item.niceToHave),
        };
    } catch (error) {
        console.error(`Error fetching recruit ${id} from microCMS:`, error);
        const fallbackJobs = lang === 'en' ? localJobsEn : localJobsJa;
        return fallbackJobs.find(j => j.id === id) || null;
    }
}

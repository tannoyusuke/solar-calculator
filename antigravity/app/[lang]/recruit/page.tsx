import { getDictionary } from "@/lib/dictionary";
import { getJobsData } from "@/lib/data";
import { Locale } from "@/lib/i18n-config";
import RecruitClient from "./RecruitClient";

export const metadata = {
    title: "Careers | Tryfunds",
    description: "Tryfunds Groupの採用情報・募集要項",
};

export default async function RecruitPage({ params: { lang } }: { params: { lang: Locale } }) {
    const dict = await getDictionary(lang);
    const jobsData = getJobsData(lang);

    return <RecruitClient dict={dict.recruit} jobs={jobsData} lang={lang} />;
}

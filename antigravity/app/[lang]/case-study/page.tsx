import { getDictionary } from "@/lib/dictionary";
import { getCaseStudiesData } from "@/lib/data";
import { Locale } from "@/lib/i18n-config";
import CaseStudyClient from "./CaseStudyClient";

export default async function CaseStudyPage({ params }: { params: { lang: Locale } }) {
    const dict = await getDictionary(params.lang);
    const caseStudies = getCaseStudiesData(params.lang);
    return <CaseStudyClient dict={dict.caseStudy} caseStudies={caseStudies} lang={params.lang} />;
}

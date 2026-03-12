import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/lib/i18n-config";
import { CompanyClient } from "./CompanyClient";

export const metadata = {
    title: "Company | Tryfunds",
    description: "Tryfunds Groupの会社概要と沿革",
};

import { getHistoryData } from "@/lib/history";

export const revalidate = 60;

export default async function AboutPage({ params: { lang } }: { params: { lang: Locale } }) {
    const dict = await getDictionary(lang);
    const historyData = await getHistoryData(lang);
    return <CompanyClient dict={dict} historyData={historyData} />;
}

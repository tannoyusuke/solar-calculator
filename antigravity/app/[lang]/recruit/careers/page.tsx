import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/lib/i18n-config";
import { CareersClient } from "./CareersClient";

export const metadata = {
    title: "Careers & Philosophy | Tryfunds",
    description: "経営人材としての真のキャリアパスと哲学",
};

export default async function CareersPage({ params: { lang } }: { params: { lang: Locale } }) {
    const dict = await getDictionary(lang);
    return <CareersClient dict={dict} lang={lang} />;
}

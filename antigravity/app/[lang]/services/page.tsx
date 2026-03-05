import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/lib/i18n-config";
import { ServicesClient } from "./ServicesClient";

export const metadata = {
    title: "Services | Tryfunds",
    description: "Tryfunds Groupの事業領域と提供サービスについて",
};

export default async function ServicesPage({ params: { lang } }: { params: { lang: Locale } }) {
    const dict = await getDictionary(lang);
    return <ServicesClient dict={dict} />;
}

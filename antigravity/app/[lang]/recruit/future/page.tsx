import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/lib/i18n-config";
import { FutureClient } from "./FutureClient";

export async function generateMetadata({ params: { lang } }: { params: { lang: Locale } }) {
    const dict = await getDictionary(lang);
    return {
        title: "Future Vision | Tryfunds",
        description: dict.future.header.title.replace(/<[^>]*>?/gm, ''), // strip HTML
    };
}

export default async function FutureVisionPage({ params: { lang } }: { params: { lang: Locale } }) {
    const dict = await getDictionary(lang);
    return <FutureClient dict={dict.future} lang={lang} />;
}

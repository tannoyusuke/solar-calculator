import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/lib/i18n-config";
import { DocumentClient } from "./DocumentClient";

export async function generateMetadata({ params: { lang } }: { params: { lang: Locale } }) {
    const dict = await getDictionary(lang);
    return {
        title: "Document Request | Tryfunds",
        description: dict.document.header.title.replace(/<[^>]*>?/gm, ''), // strip HTML
    };
}

export default async function DocumentPage({ params: { lang } }: { params: { lang: Locale } }) {
    const dict = await getDictionary(lang);
    return <DocumentClient dict={dict.document} />;
}

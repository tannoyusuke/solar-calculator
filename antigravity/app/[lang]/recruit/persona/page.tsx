import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/lib/i18n-config";
import PersonaClient from "./PersonaClient";

export async function generateMetadata({ params: { lang } }: { params: { lang: Locale } }) {
    const dict = await getDictionary(lang);
    return {
        title: "Persona | Tryfunds",
        description: dict.persona.header.description.substring(0, 100) + "...",
    };
}

export default async function PersonaPage({ params: { lang } }: { params: { lang: Locale } }) {
    const dict = await getDictionary(lang);
    return <PersonaClient dict={dict.persona} />;
}

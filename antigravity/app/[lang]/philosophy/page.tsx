import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/lib/i18n-config";
import { PhilosophyClient } from "./PhilosophyClient";

export const metadata = {
    title: "Philosophy | Tryfunds",
    description: "Tryfunds Groupの理念・ビジョン・ミッション",
};

export default async function PhilosophyPage({ params: { lang } }: { params: { lang: Locale } }) {
    const dict = await getDictionary(lang);
    return <PhilosophyClient dict={dict} />;
}

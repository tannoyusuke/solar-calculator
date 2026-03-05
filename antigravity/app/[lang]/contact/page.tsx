import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/lib/i18n-config";
import { ContactClient } from "./ContactClient";

export async function generateMetadata({ params: { lang } }: { params: { lang: Locale } }) {
    return {
        title: "Contact | Tryfunds",
        description: "新規事業創出、M&A、事業投資に関するご相談など、お気軽にお問い合わせください。",
    };
}

export default async function ContactPage({ params: { lang } }: { params: { lang: Locale } }) {
    const dict = await getDictionary(lang);
    return <ContactClient dict={dict.contactForm} />;
}

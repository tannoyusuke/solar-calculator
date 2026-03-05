import { getMembersData } from "@/lib/data";
import { MemberList } from "@/components/members/MemberList";
import { ConversionCTA } from "@/components/layout/ConversionCTA";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/lib/i18n-config";

export async function generateMetadata({ params: { lang } }: { params: { lang: Locale } }) {
    const dict = await getDictionary(lang);
    return {
        title: dict.members.metaTitle,
        description: dict.members.metaDesc,
    };
}

export default async function MembersPage({ params: { lang } }: { params: { lang: Locale } }) {
    const dict = await getDictionary(lang);
    const membersData = getMembersData(lang);
    return (
        <main className="flex min-h-screen flex-col w-full bg-background pt-32">

            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full mb-32">

                {/* Header */}
                <div className="mb-20 text-center md:text-left flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                    <div>
                        <div className="inline-flex items-center gap-4 mb-6 justify-center md:justify-start">
                            <div className="h-px w-12 bg-primary/50" />
                            <h2 className="text-sm tracking-[0.3em] text-primary-light font-display">{dict.members.subtitle}</h2>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-display font-medium tracking-tight">
                            {dict.members.title}
                        </h1>
                    </div>
                    <div
                        className="max-w-md text-sm text-gray-400 font-sans tracking-widest leading-relaxed text-center md:text-right"
                        dangerouslySetInnerHTML={{ __html: dict.members.headerDesc }}
                    />
                </div>

                {/* Member Grid */}
                <MemberList members={membersData} />

            </div>

            <ConversionCTA dict={dict.shared?.conversionCTA} />
        </main>
    );
}

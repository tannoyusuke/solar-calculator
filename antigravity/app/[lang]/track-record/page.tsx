import { TrackRecord as TrackRecordSection } from "@/components/home/TrackRecord";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/lib/i18n-config";

export const metadata = {
    title: "Track Record | Tryfunds",
    description: "Tryfundsの実績紹介",
};

export default async function TrackRecordPage({ params: { lang } }: { params: { lang: Locale } }) {
    const dict = await getDictionary(lang);
    return (
        <div className="pt-32 pb-20 min-h-screen relative overflow-hidden bg-background">
            <div className="max-w-4xl mx-auto px-6 mb-16 relative z-10">
                <h1 className="text-4xl md:text-5xl font-display font-medium tracking-widest mb-8" dangerouslySetInnerHTML={{ __html: dict.trackRecordPage?.title || "TRACK RECORD" }} />
                <p className="text-gray-400 font-sans leading-relaxed tracking-wider mb-8" dangerouslySetInnerHTML={{ __html: dict.trackRecordPage?.desc || "" }} />
            </div>

            <div className="relative z-10">
                <TrackRecordSection dict={dict.home?.trackRecord} />
            </div>
        </div>
    );
}

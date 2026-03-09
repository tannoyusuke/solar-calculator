import { getNewsData } from "@/lib/news";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ConversionCTA } from "@/components/layout/ConversionCTA";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/lib/i18n-config";

export const metadata = {
    title: "News | Tryfunds",
    description: "Tryfunds Groupの最新ニュースとお知らせ",
};

export default async function NewsPage({ params: { lang } }: { params: { lang: Locale } }) {
    const dict = await getDictionary(lang);
    const newsData = await getNewsData(lang);
    // Sort all news by date descending
    const allNews = [...newsData].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return (
        <main className="flex min-h-screen flex-col w-full bg-background pt-32">
            <div className="max-w-4xl mx-auto px-6 md:px-12 w-full mb-32">

                {/* Header */}
                <div className="mb-16">
                    <div className="inline-flex items-center gap-4 mb-6">
                        <div className="h-px w-12 bg-primary/50" />
                        <h2 className="text-sm tracking-[0.3em] text-primary-light font-display uppercase">News</h2>
                        <div className="h-px w-12 bg-primary/50" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-display font-medium tracking-tight mb-8">
                        LATEST NEWS
                    </h1>
                </div>

                {/* News List */}
                <div className="flex flex-col">
                    {allNews.map((item, i) => (
                        <Link
                            key={item.id}
                            href={`/${lang}/news/${item.id}`}
                            className="group flex flex-col md:flex-row md:items-center py-8 border-b border-white/10 hover:bg-white/[0.02] -mx-6 px-6 transition-colors duration-300"
                        >
                            <div className="flex items-center gap-4 mb-3 md:mb-0 md:w-64 shrink-0">
                                <span className="text-sm font-sans tracking-widest text-gray-400">{item.date}</span>
                                <span className="text-[10px] font-bold tracking-widest px-2 py-1 bg-white/5 border border-white/10 text-white/70 uppercase">
                                    {item.category}
                                </span>
                            </div>
                            <div className="w-full">
                                <h3 className="text-lg font-sans text-gray-200 group-hover:text-primary-light transition-colors leading-relaxed mb-2 md:mb-0">
                                    {item.title}
                                </h3>
                            </div>
                            <div className="shrink-0 ml-4 hidden md:flex opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300">
                                <ArrowRight className="w-5 h-5 text-primary-light" />
                            </div>
                        </Link>
                    ))}
                </div>

            </div>

            <ConversionCTA dict={dict.shared?.conversionCTA} />
        </main>
    );
}

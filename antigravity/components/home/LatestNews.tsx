
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getNewsData } from "@/lib/news";
import type { Locale } from "@/lib/i18n-config";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

export async function LatestNews({ dict, lang }: { dict: any; lang: Locale }) {
    // Fetch news data asynchronously from CMS (or local fallback)
    const newsData = await getNewsData(lang);
    const latestNews = [...newsData].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3);

    return (
        <section className="relative w-full py-16 md:py-20 bg-background border-t border-white/5">
            <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-start gap-8 md:gap-16">

                {/* Visual Label (Left Column) */}
                <ScrollReveal delay={0.1} className="md:w-1/4 pt-2">
                    <div className="inline-flex items-center gap-4 mb-4">
                        <div className="h-px w-8 bg-primary/50" />
                        <h2 className="text-xs tracking-[0.3em] text-primary-light font-display uppercase">{dict.section_title}</h2>
                    </div>
                    <p
                        className="text-xs font-sans tracking-widest text-gray-500 mt-2 leading-relaxed hidden md:block"
                        dangerouslySetInnerHTML={{ __html: dict.description }}
                    />
                </ScrollReveal>

                {/* News List (Right Column) */}
                <div className="md:w-3/4 flex flex-col">
                    <div className="border-t border-white/10" />
                    <StaggerContainer staggerDelay={0.1}>
                        {latestNews.map((item, i) => (
                            <StaggerItem key={item.id}>
                                <Link
                                    href={`/news/${item.id}`}
                                    className="group flex flex-col md:flex-row md:items-center py-5 border-b border-white/10 hover:bg-white/[0.02] -mx-4 px-4 transition-colors duration-300"
                                >
                                    <div className="flex items-center gap-4 mb-2 md:mb-0 md:w-48 shrink-0">
                                        <span className="text-xs font-sans tracking-widest text-gray-400">{item.date}</span>
                                        <span className="text-[9px] font-bold tracking-widest px-2 py-1 bg-white/5 text-white/50 uppercase">
                                            {item.category}
                                        </span>
                                    </div>
                                    <div className="w-full">
                                        <h3 className="text-base font-sans text-gray-200 group-hover:text-white transition-colors leading-relaxed line-clamp-2 md:line-clamp-1">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <div className="shrink-0 ml-4 hidden md:flex opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300">
                                        <ArrowRight className="w-4 h-4 text-primary-light" />
                                    </div>
                                </Link>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>

                    <ScrollReveal delay={0.4} className="mt-12 flex justify-end">
                        <Link
                            href="/news"
                            className="inline-flex items-center gap-2 text-xs font-display font-bold tracking-[0.2em] text-white/50 hover:text-white transition-colors group"
                        >
                            {dict.view_all}
                            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}

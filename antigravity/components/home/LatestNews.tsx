"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { newsData } from "@/data/news";

export function LatestNews() {
    // Get top 3 latest news
    const latestNews = [...newsData].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3);

    return (
        <section className="relative w-full py-16 md:py-20 bg-background border-t border-white/5">
            <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-start gap-8 md:gap-16">

                {/* Visual Label (Left Column) */}
                <div className="md:w-1/4 pt-2">
                    <div className="inline-flex items-center gap-4 mb-4">
                        <div className="h-px w-8 bg-primary/50" />
                        <h2 className="text-xs tracking-[0.3em] text-primary-light font-display uppercase">Latest News</h2>
                    </div>
                    <p className="text-xs font-sans tracking-widest text-gray-500 mt-2 leading-relaxed hidden md:block">
                        Tryfunds Groupからの<br />最新のお知らせ
                    </p>
                </div>

                {/* News List (Right Column) */}
                <div className="md:w-3/4 flex flex-col">
                    <div className="border-t border-white/10" />
                    {latestNews.map((item, i) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                        >
                            <Link
                                href={`/news/${item.id}`}
                                className="group flex flex-col md:flex-row md:items-center py-5 border-b border-white/10 hover:bg-white/[0.02] -mx-4 px-4 transition-colors duration-300"
                            >
                                <div className="flex items-center gap-4 mb-2 md:mb-0 md:w-48 shrink-0">
                                    <span className="text-xs font-sans tracking-widest text-gray-400">{item.date}</span>
                                    <span className="text-[9px] font-bold tracking-widest px-2 py-1 bg-white/5 border border-white/10 text-white/70 uppercase">
                                        {item.category}
                                    </span>
                                </div>
                                <div className="w-full">
                                    <h3 className="text-base font-sans text-gray-200 group-hover:text-primary-light transition-colors leading-relaxed line-clamp-2 md:line-clamp-1">
                                        {item.title}
                                    </h3>
                                </div>
                                <div className="shrink-0 ml-4 hidden md:flex opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300">
                                    <ArrowRight className="w-4 h-4 text-primary-light" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-12 flex justify-end"
                    >
                        <Link
                            href="/news"
                            className="inline-flex items-center gap-2 text-xs font-display font-bold tracking-[0.2em] text-white/50 hover:text-white transition-colors group"
                        >
                            VIEW ALL NEWS
                            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

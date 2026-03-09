"use client";

import { motion } from "framer-motion";

export function TrackRecord({ dict }: { dict: any }) {
    const records = dict.records || [];
    return (
        <section className="relative py-32 bg-background overflow-hidden border-t border-white/5">

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 md:mb-24"
                >
                    <div className="inline-flex items-center gap-4 mb-6">
                        <div className="h-px w-12 bg-primary/50" />
                        <h2 className="text-sm tracking-[0.3em] text-primary-light font-display">{dict.section_title}</h2>
                    </div>
                </motion.div>

                {/* Massive 1000 Projects Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                    <div>
                        <h3 className="text-5xl md:text-7xl font-display font-medium tracking-tighter mb-4 text-white leading-tight">
                            <span className="text-white">{dict.stats_value}</span>
                            <span className="text-3xl md:text-4xl text-white tracking-widest ml-2">{dict.stats_unit1}</span>
                            <br className="hidden md:block" />
                            <span className="text-3xl md:text-5xl text-white tracking-widest mt-2 block">{dict.stats_unit2}</span>
                        </h3>
                    </div>
                    <div className="border-l border-white/10 pl-8 lg:pl-12">
                        <p
                            className="text-gray-300 font-sans tracking-widest leading-loose md:text-lg mb-8"
                            dangerouslySetInnerHTML={{ __html: dict.description }}
                        />
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="/portfolio" className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/20 hover:bg-white hover:text-black transition-all duration-300 px-6 py-3 font-display tracking-widest text-sm text-white group">
                                {dict.button_portfolio}
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                            </a>
                            <a href="/case-study" className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/20 hover:bg-white hover:text-black transition-all duration-300 px-6 py-3 font-display tracking-widest text-sm text-white group">
                                {dict.button_case_study}
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* 4 Stat Cards — no icons, number-driven */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.1 } }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {records.map((record: any, i: number) => (
                        <motion.div
                            key={i}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                            }}
                            className="bg-white/[0.02] border border-white/10 p-8 hover:bg-white/5 hover:border-primary/50 transition-all duration-500 group relative overflow-hidden flex flex-col h-full"
                        >
                            <div className="absolute top-0 left-0 w-0 h-[2px] bg-white/50 group-hover:w-full transition-all duration-700 ease-in-out" />

                            <div className="mb-4 flex-grow flex items-baseline flex-wrap">
                                <span className="text-4xl md:text-5xl font-display font-bold tracking-tighter text-white group-hover:text-white/80 transition-colors">
                                    {record.value}
                                </span>
                                <span className="text-sm font-sans text-gray-400 ml-1 font-medium whitespace-nowrap">
                                    {record.unit}
                                </span>
                            </div>

                            <div className="w-8 h-px bg-white/20 mb-4 group-hover:w-12 group-hover:bg-white/50 transition-all duration-500" />

                            <h4 className="text-lg font-bold font-sans tracking-wide mb-3 text-white">
                                {record.label}
                            </h4>

                            <p className="text-xs text-gray-400 font-sans tracking-wide leading-relaxed mt-auto">
                                {record.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

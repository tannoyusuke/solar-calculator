"use client";

import { motion } from "framer-motion";
import { TrendingUp, Zap } from "lucide-react";

export function CareersPlan({ dict }: { dict: any }) {
    return (
        <section className="py-24 border-t border-white/5 bg-background relative z-10">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <div className="inline-flex items-center gap-4 mb-6">
                        <div className="h-px w-12 bg-primary/50" />
                        <h2 className="text-sm tracking-[0.3em] text-primary/80 font-display uppercase">{dict.header.subtitle}</h2>
                    </div>
                    <h3 className="text-3xl md:text-5xl font-sans font-bold tracking-tight mb-8">
                        {dict.header.title}
                    </h3>
                </motion.div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                    {/* Left: Philosophy */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-6 space-y-8 text-gray-400 font-sans tracking-wide leading-relaxed text-base md:text-lg"
                    >
                        <p dangerouslySetInnerHTML={{ __html: dict.content.p1 }} />
                        <p>{dict.content.p2}</p>
                    </motion.div>

                    {/* Right: Fast Track Cases */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-6"
                    >
                        <div className="bg-white/[0.02] border border-white/10 p-8 md:p-10 relative overflow-hidden group h-full flex flex-col">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] pointer-events-none rounded-full" />
                            <div className="absolute left-0 top-0 w-1 h-full bg-primary-light" />

                            <h4 className="text-2xl font-bold font-sans text-white mb-8 border-b border-white/10 pb-4 flex items-center gap-3">
                                <TrendingUp className="text-primary-light w-6 h-6" />
                                {dict.cases.title}
                            </h4>
                            <p className="text-gray-300 font-sans mb-10 leading-relaxed text-sm">
                                {dict.cases.description}
                            </p>

                            {/* Case Studies */}
                            <div className="space-y-6 mt-auto">
                                <div className="bg-black/40 border border-white/5 p-6 relative">
                                    <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                    </div>
                                    <h5 className="text-white font-bold font-sans mb-2 flex items-center gap-2">
                                        <Zap className="w-4 h-4 text-primary" /> {dict.cases.list[0].tag}: {dict.cases.list[0].title}
                                    </h5>
                                    <p className="text-gray-400 text-xs leading-relaxed">
                                        {dict.cases.list[0].text}
                                    </p>
                                </div>

                                <div className="bg-black/40 border border-white/5 p-6 relative">
                                    <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                                        <div className="w-2 h-2 bg-primary-light rounded-full animate-pulse" />
                                    </div>
                                    <h5 className="text-white font-bold font-sans mb-2 flex items-center gap-2">
                                        <Zap className="w-4 h-4 text-primary-light" /> {dict.cases.list[1].tag}: {dict.cases.list[1].title}
                                    </h5>
                                    <p className="text-gray-400 text-xs leading-relaxed">
                                        {dict.cases.list[1].text}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}

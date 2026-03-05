"use client";

import { motion } from "framer-motion";

export function RecruitPersona({ dict }: { dict: any }) {
    return (
        <section className="py-24 border-t border-white/5 bg-background relative z-10">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-20">
                    {/* Left side: Heading */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-5/12"
                    >
                        <h3 className="text-sm tracking-[0.3em] text-primary-light font-display uppercase mb-6 flex items-center gap-4">
                            {dict.subtitle}
                            <div className="h-px w-12 bg-primary/50" />
                        </h3>
                        <h2
                            className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-white leading-tight mb-8"
                            dangerouslySetInnerHTML={{ __html: dict.title }}
                        />
                        <div className="w-16 h-1 bg-primary-light"></div>
                    </motion.div>

                    {/* Right side: Description */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:w-7/12 flex flex-col justify-center space-y-8 text-gray-300 font-sans tracking-wide leading-relaxed text-base md:text-lg"
                    >
                        <p dangerouslySetInnerHTML={{ __html: dict.paragraphs[0] }} />
                        <p dangerouslySetInnerHTML={{ __html: dict.paragraphs[1] }} />
                    </motion.div>
                </div>

                {/* Matrix area */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 mb-16">
                    {/* Must */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h4 className="text-2xl font-bold font-sans text-white mb-6 border-b border-white/10 pb-4">
                            {dict.must.title}
                        </h4>
                        <ul className="space-y-5 text-gray-300 font-sans text-sm md:text-base leading-relaxed">
                            {dict.must.items.map((item: string, i: number) => (
                                <li key={i} className="flex items-start gap-4">
                                    <span className="text-primary-light mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-light shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Nice to have */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h4 className="text-2xl font-bold font-sans text-white mb-6 border-b border-white/10 pb-4">
                            {dict.niceToHave.title}
                        </h4>
                        <ul className="space-y-5 text-gray-400 font-sans text-sm md:text-base leading-relaxed">
                            {dict.niceToHave.items.map((item: string, i: number) => (
                                <li key={i} className="flex items-start gap-4">
                                    <span className="text-white/30 mt-1.5 w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* 向かない人 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-white/[0.02] border border-white/5 p-8 md:p-12 mb-8 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[80px] pointer-events-none" />
                    <h4 className="text-xl font-bold font-sans text-white mb-8 border-b border-white/10 pb-4 inline-block">
                        {dict.negative.title}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-gray-400 font-sans text-sm md:text-base">
                        {dict.negative.items.map((item: string, i: number) => (
                            <div key={i} className="flex items-start gap-4">
                                <span className="text-white/20 mt-0.5 text-lg leading-none shrink-0">×</span>
                                {item}
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

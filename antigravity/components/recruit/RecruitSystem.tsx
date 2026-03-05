"use client";

import { motion } from "framer-motion";

export function RecruitSystem({ dict }: { dict: any }) {
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
                    <p className="text-gray-400 font-sans tracking-wide leading-relaxed max-w-3xl">
                        {dict.header.description}
                    </p>
                </motion.div>

                {/* Growth Phases Diagram */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
                >
                    {dict.phases.map((phase: any, index: number) => {
                        const isMiddle = index === 1;
                        return (
                            <div key={index} className={`relative p-10 flex flex-col overflow-hidden group hover:-translate-y-2 transition-transform duration-500 ${isMiddle ? 'border border-primary/30 shadow-[0_0_40px_rgba(0,118,130,0.15)]' : 'border border-white/10'}`}>
                                <div className={`absolute inset-0 z-0 ${isMiddle ? 'bg-gradient-to-br from-[#0f2127] to-[#050c0e]' : 'bg-gradient-to-br from-[#0c1821] to-[#04080b]'}`} />
                                <div className={`absolute z-0 pointer-events-none transition-colors duration-700 ${index === 0 ? 'top-0 right-0 w-32 h-32 bg-primary/20 blur-[50px] group-hover:bg-primary/40' :
                                        index === 1 ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/20 blur-[60px] group-hover:bg-primary/40' :
                                            'bottom-0 left-0 w-32 h-32 bg-primary/20 blur-[50px] group-hover:bg-primary/40'
                                    }`} />

                                <div className="relative z-10">
                                    <h4 className="text-3xl font-display font-bold text-white mb-2 flex items-baseline gap-2">
                                        {phase.name} <span className="text-lg text-primary-light font-sans tracking-widest font-normal">{phase.kanji}</span>
                                    </h4>
                                    <div className={`text-xs tracking-widest font-sans mb-8 pb-4 border-b uppercase ${isMiddle ? 'border-primary/20 text-primary/70' : 'border-white/10 text-gray-400'}`}>
                                        {phase.roles}
                                    </div>
                                    <ul className="text-sm text-gray-300 font-sans space-y-4 leading-relaxed">
                                        {phase.items.map((item: string, i: number) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <span className="text-primary mt-1">▶</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </motion.div>

                {/* 6 Leadership Principles */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="p-10 md:p-16 border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-dark/20 blur-[120px] rounded-full pointer-events-none" />
                    <h3 className="text-2xl font-display tracking-widest text-white mb-8 border-l-4 border-primary pl-4">
                        {dict.principles.title}
                    </h3>
                    <p className="text-gray-400 font-sans mb-10 text-sm md:text-base leading-relaxed max-w-4xl">
                        {dict.principles.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                        {dict.principles.items.map((item: any, idx: number) => (
                            <div key={idx}>
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="text-primary font-display font-bold tracking-widest text-lg">0{idx + 1}</div>
                                    <h4 className="text-white font-sans font-bold text-lg">{item.title}</h4>
                                </div>
                                <p className="text-gray-400 text-sm font-sans leading-relaxed">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}


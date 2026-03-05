"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";



export function PhilosophyClient({ dict }: { dict: any }) {
    return (
        <main className="pt-32 pb-32 min-h-screen bg-background relative overflow-hidden">
            {/* Background Atmosphere */}
            <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-primary/5 blur-[150px] mix-blend-screen pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
                {/* Premium Header - Refined & Stylish */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="mb-32 relative flex flex-col items-center text-center mt-12"
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-light text-white mb-6 leading-tight tracking-tight select-none">
                        {dict.philosophy.header.title_en} <span className="font-medium text-primary-light drop-shadow-lg">{dict.philosophy.header.title_highlight}</span><br />
                        <span className="text-gray-400">{dict.philosophy.header.subtitle}</span>
                    </h1>

                    <div className="h-px w-32 bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-8" />

                    <p className="text-gray-300 font-sans tracking-[0.4em] text-sm md:text-base font-medium uppercase drop-shadow-sm">
                        {dict.philosophy.header.tagline}
                    </p>
                </motion.div>

                {/* --- 1. Philosophy / Vision / Mission --- */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="mb-48 space-y-40"
                >
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
                        {/* Text Content Column (Golden Ratio: ~55%) */}
                        <div className="w-full lg:w-[55%] flex flex-col justify-center relative">
                            {/* Accent Line */}
                            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary-light via-primary/30 to-transparent" />

                            <div className="pl-8 md:pl-12 py-4">
                                <h3 className="text-lg md:text-xl text-primary-light font-display tracking-[0.2em] mb-6 font-medium uppercase drop-shadow">
                                    {dict.philosophy.block1.philosophy_label}
                                </h3>
                                <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-sans font-bold text-white mb-10 leading-[1.3] tracking-wide break-keep drop-shadow-2xl" dangerouslySetInnerHTML={{ __html: dict.philosophy.block1.headline }} />
                                <p className="text-gray-300/90 font-sans tracking-[0.04em] leading-[2.2] text-base md:text-xl mb-4" dangerouslySetInnerHTML={{ __html: dict.philosophy.block1.p1 }} />
                                <p className="text-gray-400 font-sans tracking-[0.04em] leading-[2.2] text-base md:text-xl" dangerouslySetInnerHTML={{ __html: dict.philosophy.block1.p2 }} />
                            </div>
                        </div>

                        {/* Description Box Column (Golden Ratio: ~45%) */}
                        <div className="w-full lg:w-[45%] shrink-0 flex flex-col bg-[#0a0f12]/80 backdrop-blur-xl rounded-2xl overflow-hidden relative border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,136,163,0.2)] group transition-all duration-700 hover:border-primary/50 hover:shadow-[0_20px_60px_-15px_rgba(0,136,163,0.3)] hover:-translate-y-2">
                            {/* Premium Top Glow Accent */}
                            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-primary-light to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="w-full p-10 md:p-14 relative z-10">
                                {/* Ambient inner gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                                <p className="text-gray-300 font-sans tracking-[0.08em] leading-[2.6] text-[0.95rem] md:text-base text-justify" dangerouslySetInnerHTML={{ __html: dict.philosophy.block1.box_text }} />
                            </div>
                        </div>
                    </div>

                    {/* Vision block */}
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="md:w-1/2 w-full aspect-[4/3] rounded-2xl overflow-hidden relative shadow-[0_0_30px_rgba(0,136,163,0.1)] border border-white/5">
                            <div className="w-full h-full bg-gradient-to-bl from-primary/20 to-black relative">
                                <img src="/images/vision_concept.png" alt="Vision Concept" className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-luminosity" />
                                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                            </div>
                        </div>
                        <div className="md:w-1/2 border-l-2 border-primary-light/30 pl-8">
                            <h3 className="text-xl md:text-2xl text-primary-light font-display tracking-widest mb-4 font-bold">
                                {dict.philosophy.block2.vision_label}
                            </h3>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-sans font-bold tracking-widest text-white mb-6 leading-tight drop-shadow-lg whitespace-nowrap" dangerouslySetInnerHTML={{ __html: dict.philosophy.block2.headline }} />
                            <p className="text-gray-300 font-sans tracking-wide leading-relaxed text-base md:text-lg" dangerouslySetInnerHTML={{ __html: dict.philosophy.block2.desc }} />
                        </div>
                    </div>

                    {/* Mission block */}
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="md:w-1/2 order-2 md:order-1 border-l-2 border-primary-light/30 pl-8">
                            <h3 className="text-xl md:text-2xl text-primary-light font-display tracking-widest mb-4 font-bold">
                                {dict.philosophy.block3.mission_label}
                            </h3>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-sans font-bold tracking-widest text-white mb-6 leading-tight drop-shadow-lg break-keep break-words hyphens-none" dangerouslySetInnerHTML={{ __html: dict.philosophy.block3.headline }} />
                            <p className="text-gray-300 font-sans tracking-wide leading-relaxed text-base md:text-lg" dangerouslySetInnerHTML={{ __html: dict.philosophy.block3.desc }} />
                        </div>
                        <div className="md:w-1/2 order-1 md:order-2 w-full aspect-[4/3] rounded-2xl overflow-hidden relative shadow-[0_0_30px_rgba(0,136,163,0.1)] border border-white/5">
                            <div className="w-full h-full bg-gradient-to-tr from-primary/20 to-black relative">
                                <img src="/images/mission_concept.png" alt="Mission Concept" className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-luminosity" />
                                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* --- 2. Values We Provide --- */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-40 relative"
                    id="values"
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] pointer-events-none" />

                    <div className="mb-16 relative z-10">
                        <div className="inline-flex items-center gap-4 mb-4">
                            <div className="h-px w-8 bg-primary-light/50" />
                            <h3 className="text-sm md:text-base text-primary-light font-sans tracking-[0.2em] font-bold">
                                {dict.philosophy.values.label}
                            </h3>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold tracking-widest text-white mb-6 leading-tight drop-shadow-md" dangerouslySetInnerHTML={{ __html: dict.philosophy.values.headline }} />
                        <p className="text-gray-300 text-lg leading-loose font-sans tracking-wide max-w-2xl bg-black/20 p-6 border-l-2 border-primary-light backdrop-blur-sm" dangerouslySetInnerHTML={{ __html: dict.philosophy.values.desc }} />
                    </div>

                    <div className="space-y-8 relative z-10">
                        {dict.philosophy.values.cards.map((card: any, idx: number) => {
                            const isMiddle = idx === 1;
                            return (
                                <div key={idx} className={`group relative bg-white/[0.01] border border-white/5 hover:border-primary/30 p-8 md:p-12 transition-all duration-500 overflow-hidden ml-0 ${isMiddle ? 'md:ml-12' : 'md:mr-12'}`}>
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] group-hover:bg-primary/20 transition-colors duration-700 pointer-events-none" />
                                    <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                                        <div className="text-6xl md:text-8xl font-display font-bold text-white/5 group-hover:text-primary-light/20 transition-colors duration-500 leading-none">
                                            {card.num}
                                        </div>
                                        <div className="flex-1 mt-2">
                                            <div className="w-12 h-px bg-primary mb-6" />
                                            <h4 className="text-2xl md:text-3xl text-white font-bold mb-4 font-sans tracking-wide" dangerouslySetInnerHTML={{ __html: card.title }} />
                                            <p className="text-gray-400 text-base md:text-lg leading-relaxed font-sans tracking-wide" dangerouslySetInnerHTML={{ __html: card.desc }} />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </motion.section>

                {/* --- 3. 6 Leadership Principles --- */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <div className="mb-12">
                        <h3 className="text-xl md:text-2xl text-primary-light font-display tracking-widest mb-4 font-bold">
                            {dict.philosophy.leadership.label}
                        </h3>
                        <p className="text-gray-300 text-lg leading-loose font-sans tracking-wide" dangerouslySetInnerHTML={{ __html: dict.philosophy.leadership.desc }} />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
                        {dict.philosophy.leadership.principles.map((principle: any, index: number) => (
                            <div
                                key={index}
                                className="group relative bg-white/[0.02] border border-white/5 hover:border-white/20 p-8 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.04]"
                            >
                                <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary-dark/80 backdrop-blur border border-primary/30 rounded-full flex items-center justify-center text-white font-display font-bold shadow-lg">
                                    0{index + 1}
                                </div>
                                <h4 className="text-xl font-display font-bold tracking-wider text-white mb-6 pb-4 border-b border-white/10 group-hover:text-primary-light transition-colors mt-2" dangerouslySetInnerHTML={{ __html: principle.title }} />
                                <div className="flex gap-4">
                                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 opacity-70 mt-1" />
                                    <p className="text-white/80 font-sans tracking-wide leading-relaxed text-sm md:text-base" dangerouslySetInnerHTML={{ __html: principle.desc }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.section>

            </div>
        </main>
    );
}

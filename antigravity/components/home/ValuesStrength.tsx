"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function ValuesStrength({ dict }: { dict: any }) {
    const values = dict.cards || [];
    return (
        <section className="relative py-32 bg-[#020202] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

                {/* Values Section (Asymmetric Layout) */}
                <div className="mb-40 flex flex-col lg:flex-row gap-16 lg:gap-24 relative">

                    {/* Sticky Header Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:w-1/3 lg:sticky lg:top-32 h-fit"
                    >
                        <div className="inline-flex items-center gap-4 mb-6">
                            <div className="h-px w-12 bg-primary/50" />
                            <h2 className="text-sm tracking-[0.3em] text-primary-light font-bold font-sans">{dict.section_title}</h2>
                        </div>
                        <p
                            className="text-3xl md:text-5xl font-sans font-bold tracking-tight mb-8 text-white leading-tight"
                            dangerouslySetInnerHTML={{ __html: dict.headline }}
                        />
                        <p className="text-gray-400 font-sans leading-relaxed tracking-wide mb-8">
                            {dict.description}
                        </p>
                    </motion.div>

                    {/* Scrolling Cards Column — number-based, no icons */}
                    <div className="lg:w-2/3 flex flex-col gap-8">
                        {values.map((v: any, i: number) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                                className={`bg-transparent border border-white/10 p-10 md:p-14 hover:border-primary/50 transition-all duration-500 group relative overflow-hidden flex flex-col items-start backdrop-blur-sm hover:shadow-[0_10px_50px_rgba(0,78,102,0.1)] hover:-translate-y-2 ${i % 2 !== 0 ? 'lg:ml-12' : 'lg:mr-12'}`}
                            >
                                {/* Structural Accent */}
                                <div className="absolute top-0 left-0 w-0 h-[2px] bg-white/50 group-hover:w-full transition-all duration-700 ease-in-out" />
                                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white/20 group-hover:border-white/50 transition-colors" />

                                <div className="relative z-10 w-full flex flex-col md:flex-row gap-8 items-start">
                                    {/* Number instead of icon */}
                                    <div className="shrink-0">
                                        <span className="text-6xl md:text-7xl font-display font-bold text-white/5 group-hover:text-primary/20 transition-colors duration-500 select-none leading-none">{v.num}</span>
                                    </div>
                                    <div>
                                        <div className="w-8 h-px bg-primary/40 mb-6 group-hover:w-16 group-hover:bg-primary-light transition-all duration-500" />
                                        <h3 className="text-xl md:text-2xl font-bold tracking-widest mb-4 font-sans whitespace-pre-line leading-relaxed text-white transition-all">
                                            {v.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm tracking-wide leading-loose font-sans group-hover:text-gray-300 transition-colors">
                                            {v.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Strength Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 40 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative border border-primary/20 overflow-hidden hover:border-primary/40 transition-all duration-700 group grid grid-cols-1 lg:grid-cols-2"
                >
                    {/* Content Side */}
                    <div className="p-10 md:p-16 lg:p-20 bg-[#050A0F] relative z-10 flex flex-col justify-center border-r border-white/5">
                        <h2 className="text-sm tracking-[0.3em] pl-4 border-l-2 border-white/30 text-white font-bold font-sans mb-6 inline-block pb-1">
                            コアとなる強み
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-sans font-bold tracking-widest mb-8 leading-tight text-white leading-snug">
                            政権中枢から財閥トップへ至る<br className="hidden md:block" />真に強固なネットワーク
                        </h3>
                        <p className="text-gray-400 text-base leading-relaxed tracking-wide font-sans">
                            一般的に語られる表面的なグローバルネットワークとは一線を画す、圧倒的なアクセス権。
                            各国政権の中枢や現地財閥のトップ層と直結した「真に強いネットワーク」を保有しています。
                            この独自のルートを自社事業や投資先事業にフル活用することで、他社には実現不可能な異次元のバリューアップを可能にします。
                        </p>
                    </div>

                    {/* Image Side - Government/Power/Architecture Visual */}
                    <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden min-h-[300px]">
                        <Image
                            src="/strategic_network_power.png"
                            alt="Core Power Network"
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-700 grayscale-[40%]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#050A0F] via-[#050A0F]/50 to-transparent" />
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

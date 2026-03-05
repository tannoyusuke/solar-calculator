"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function FutureClient({ dict, lang }: { dict: any, lang: string }) {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-background selection:bg-primary/30 selection:text-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <Link href={`/${lang}/recruit`} className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-20 z-10 relative">
                    <ArrowLeft size={16} />
                    {dict.header.backBtn}
                </Link>

                {/* Hero / Title with World Map Background */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="relative w-full mb-16 min-h-[70vh] md:min-h-[85vh] flex flex-col items-center justify-center text-center overflow-hidden"
                >
                    {/* Global Network Background Map */}
                    <div className="absolute inset-0 z-0 pointer-events-none opacity-60 mix-blend-screen">
                        {/* Glowing background behind image */}
                        <div className="absolute inset-0 bg-primary/10 blur-3xl z-0" />
                        <Image
                            src="/images/global_world_map_future.png"
                            alt="Global Network Map"
                            fill
                            priority
                            className="object-cover object-center"
                            unoptimized
                        />
                        {/* Dark gradient overlay so text stands out */}
                        <div className="absolute inset-0 bg-black/40 z-10" />
                        {/* Edge fading */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/20 to-background z-20" />
                        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-20" />
                    </div>

                    <div className="relative z-30 flex flex-col items-center px-4 w-full">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="inline-flex items-center gap-4 mb-6"
                        >
                            <div className="h-px w-12 bg-primary/50" />
                            <h2 className="text-sm tracking-[0.3em] text-primary/80 font-display uppercase drop-shadow-md">{dict.header.subtitle}</h2>
                            <div className="h-px w-12 bg-primary/50" />
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-4xl md:text-5xl lg:text-7xl font-sans font-bold tracking-tight mb-8 leading-tight text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]"
                            dangerouslySetInnerHTML={{ __html: dict.header.title }}
                        />
                    </div>
                </motion.div>

                {/* Manifesto Text Flow */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-3xl mx-auto mb-24 px-6"
                >

                    {/* Text Flow */}
                    <div className="relative z-10 max-w-3xl mx-auto px-6 space-y-12 text-base md:text-lg text-gray-300 font-sans tracking-[0.05em] leading-[2.2]">
                        <p dangerouslySetInnerHTML={{ __html: dict.manifesto.p1 }} />
                        <p dangerouslySetInnerHTML={{ __html: dict.manifesto.p2 }} />
                        <p dangerouslySetInnerHTML={{ __html: dict.manifesto.p3 }} />
                        <p dangerouslySetInnerHTML={{ __html: dict.manifesto.p4 }} />
                        <p dangerouslySetInnerHTML={{ __html: dict.manifesto.p5 }} />
                        <p className="text-white font-bold text-xl md:text-2xl drop-shadow-[0_0_8px_rgba(0,136,163,0.5)]" dangerouslySetInnerHTML={{ __html: dict.manifesto.p6 }} />
                        <p dangerouslySetInnerHTML={{ __html: dict.manifesto.p7 }} />
                        <p className="text-primary-light font-bold text-xl md:text-2xl drop-shadow-[0_0_8px_rgba(0,210,211,0.5)]" dangerouslySetInnerHTML={{ __html: dict.manifesto.p8 }} />
                        <p dangerouslySetInnerHTML={{ __html: dict.manifesto.p9 }} />
                        <p dangerouslySetInnerHTML={{ __html: dict.manifesto.p10 }} />
                        <p dangerouslySetInnerHTML={{ __html: dict.manifesto.p11 }} />
                        <p dangerouslySetInnerHTML={{ __html: dict.manifesto.p12 }} />
                        <p className="text-white font-bold text-xl" dangerouslySetInnerHTML={{ __html: dict.manifesto.p13 }} />
                        <p dangerouslySetInnerHTML={{ __html: dict.manifesto.p14 }} />
                        <p className="text-white font-bold text-xl" dangerouslySetInnerHTML={{ __html: dict.manifesto.p15 }} />

                        <div className="pt-8 pb-8 border-l-2 border-primary pl-8 mt-12 bg-gradient-to-r from-primary/5 to-transparent">
                            <p className="text-white font-bold text-2xl md:text-3xl leading-[1.8] drop-shadow-[0_0_12px_rgba(255,255,255,0.2)]">
                                <span dangerouslySetInnerHTML={{ __html: dict.mission.text }} />
                                <span className="text-sm md:text-base font-normal text-gray-300 tracking-[0.2em] mt-4 block" dangerouslySetInnerHTML={{ __html: dict.mission.sub }} />
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Our Try Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />
                    <div className="absolute bottom-0 left-[-10%] w-[400px] h-[400px] bg-[#C00034]/5 rounded-full blur-[100px] -z-10" />

                    <div className="mb-20">
                        <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-4 text-white">
                            {dict.ourTry.title}
                        </h2>
                        <div className="h-px w-full max-w-sm bg-gradient-to-r from-primary to-transparent" />
                    </div>

                    <div className="flex flex-col gap-12">
                        {dict.ourTry.items.map((item: any, idx: number) => (
                            <div
                                key={idx}
                                className="relative group bg-white/[0.02] border border-white/5 p-8 md:p-12 hover:border-primary/30 transition-all duration-700 overflow-hidden"
                            >
                                {/* Immersive Background Number */}
                                <div className="absolute -right-4 -bottom-10 text-[150px] md:text-[200px] font-display font-bold text-white/[0.03] group-hover:text-primary/[0.05] transition-colors duration-700 pointer-events-none select-none leading-none z-0">
                                    {item.num}
                                </div>
                                {/* Hover Glow Line */}
                                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary to-primary-light opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-16">
                                    <div className="md:w-1/3 flex-shrink-0">
                                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-primary/30 text-primary font-display font-bold mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-[0_0_15px_rgba(0,136,163,0.3)]">
                                            {item.num}
                                        </div>
                                        <h3 className="text-2xl font-bold font-sans tracking-tight text-white leading-snug">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <div className="md:w-2/3 flex items-center">
                                        <p className="text-gray-300 font-sans text-[15px] md:text-base leading-[2.2] tracking-[0.02em]">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </div>
    );
}

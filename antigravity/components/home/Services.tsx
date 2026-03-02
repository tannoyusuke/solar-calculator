"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Services() {
    const services = [
        {
            title: "Fund AM",
            tag: "Investment & Operation",
            description: "国内外のインフラ関連スタートアップへの投資および、PEファンド/PIPESファンドの運用を通じた企業価値向上。",
            metrics: ["インフラファンド", "PE/PIPES", "ハンズオン投資"],
            bgImage: "bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80')]",
            colSpan: "lg:col-span-8",
        },
        {
            title: "Hands-on",
            tag: "Principal",
            description: "自らリスクを取り、自社経営陣やプロフェッショナル人材を直接派遣するハンズオン型の事業再生・成長支援。",
            metrics: ["CxO派遣", "事業再生", "グロース"],
            bgImage: "bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80')]",
            colSpan: "lg:col-span-4",
        },
        {
            title: "Consulting",
            tag: "Advisory",
            description: "戦略立案からM&A、デジタル変革まで。高度な知見とグローバルネットワークを駆使した企業変革アドバイザリー。",
            metrics: ["事業戦略", "M&A", "海外進出"],
            bgImage: "bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80')]",
            colSpan: "lg:col-span-12",
        }
    ];

    return (
        <section className="relative py-32 bg-[#050505] overflow-hidden">
            {/* Dynamic Background Noise/Glow */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 text-center"
                >
                    <div className="inline-flex items-center gap-4 justify-center mb-6">
                        <div className="h-px w-12 bg-primary/50" />
                        <h2 className="text-sm tracking-[0.3em] text-primary-light font-display uppercase">Services</h2>
                        <div className="h-px w-12 bg-primary/50" />
                    </div>
                    <p className="text-4xl md:text-5xl text-white font-display leading-tight tracking-widest font-medium drop-shadow-lg">
                        ビジネスを牽引し、<br className="md:hidden" />挑戦を形にする3つの柱
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.15 } }
                    }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                            }}
                            className="h-full"
                        >
                            <Link
                                href={`/services#${service.tag.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                                className="group flex flex-col justify-between p-10 bg-white/[0.02] border border-white/10 hover:border-white/30 transition-all duration-500 hover:-translate-y-2 cursor-pointer h-full backdrop-blur-sm relative overflow-hidden hover:bg-white/[0.04] hover:shadow-[0_15px_40px_rgba(255,255,255,0.05)]"
                            >
                                {/* Hover Glow Effect */}
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                                <div className="relative z-10 flex flex-col flex-grow">
                                    <div className="mb-6 inline-block self-start">
                                        <span className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 text-[10px] font-sans tracking-widest text-gray-300 uppercase group-hover:border-white/30 group-hover:text-white transition-colors">
                                            {service.tag}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-display font-medium tracking-widest mb-4 text-white group-hover:text-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all">
                                        {service.title}
                                    </h3>

                                    <ul className="flex flex-wrap gap-2 mb-6">
                                        {service.metrics.map((metric, idx) => (
                                            <li key={idx} className="text-[11px] font-sans text-primary-light border border-primary/30 px-2 py-1 bg-primary/5">
                                                {metric}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="w-8 h-px bg-white/20 mb-6 group-hover:w-16 group-hover:bg-primary-light transition-all duration-500" />

                                    <p className="text-gray-400 font-sans text-sm leading-relaxed tracking-wide mb-8 group-hover:text-gray-200 transition-colors flex-grow">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="relative z-10 flex items-center text-sm font-display tracking-[0.2em] font-bold text-gray-500 group-hover:text-white transition-colors uppercase pt-6 border-t border-white/5">
                                    Explore Details <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

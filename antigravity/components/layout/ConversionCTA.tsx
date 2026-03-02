"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, Briefcase, Users, MessageSquare } from "lucide-react";
import Link from "next/link";

export function ConversionCTA() {
    return (
        <section className="relative py-24 bg-background overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">

                    {/* Corporate CTA (Left) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="p-10 md:p-16 border border-white/10 relative overflow-hidden group bg-white/[0.02]"
                    >
                        {/* Glow effect */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-dark/10 blur-[100px] pointer-events-none group-hover:bg-primary/20 transition-colors duration-700" />

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-4 mb-8">
                                <div className="h-px w-8 bg-primary/50" />
                                <h2 className="text-xs tracking-[0.3em] text-primary-light font-display uppercase">Corporate Information</h2>
                            </div>

                            <h3 className="text-3xl md:text-4xl font-display font-medium tracking-widest text-white mb-6 leading-tight">
                                会社概要・プロジェクト事例
                            </h3>

                            <p className="text-gray-400 font-sans tracking-wide leading-relaxed mb-12 min-h-[80px]">
                                Tryfundsの事業内容や、1000以上の支援実績から抜粋した具体的なプロジェクト事例をご紹介します。
                            </p>

                            <div className="flex flex-col gap-4">
                                <Link
                                    href="/document"
                                    className="w-full flex items-center justify-between py-5 px-8 bg-primary-dark/20 border border-primary/30 text-white font-display font-bold tracking-widest text-sm hover:bg-primary hover:border-primary transition-all group/btn"
                                >
                                    <span className="flex items-center gap-3"><FileText size={18} /> DOWNLOAD DOCUMENT</span>
                                    <ArrowRight size={18} className="transform group-hover/btn:translate-x-2 transition-transform" />
                                </Link>

                                <Link
                                    href="/projects"
                                    className="w-full flex items-center justify-between py-5 px-8 bg-transparent border border-white/20 text-white font-display font-bold tracking-widest text-sm hover:bg-white/10 transition-all group/btn"
                                >
                                    <span className="flex items-center gap-3"><Briefcase size={18} /> VIEW PROJECTS</span>
                                    <ArrowRight size={18} className="transform group-hover/btn:translate-x-2 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* Recruit CTA (Right) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="p-10 md:p-16 border border-white/20 relative overflow-hidden group bg-white"
                    >
                        <div className="relative z-10 w-full h-full flex flex-col">
                            <div className="inline-flex items-center gap-4 mb-8">
                                <div className="h-px w-8 bg-black/30" />
                                <h2 className="text-xs tracking-[0.3em] text-black/60 font-display uppercase">Join Our Team</h2>
                            </div>

                            <h3 className="text-3xl md:text-4xl font-display font-bold tracking-widest text-black mb-6 leading-tight">
                                JOIN OUR TRY
                            </h3>

                            <p className="text-gray-700 font-sans tracking-wide leading-relaxed mb-12 min-h-[80px]">
                                共に前人未到の事業を成し遂げる仲間を募集しています。これからのキャリアや我々の挑戦について、まずは情報交換からはじめませんか。
                            </p>

                            <div className="flex flex-col gap-4 mt-auto">
                                <Link
                                    href="/recruit"
                                    className="w-full flex items-center justify-between py-5 px-8 bg-black text-white font-display font-bold tracking-widest text-sm hover:bg-black/80 hover:shadow-xl transition-all group/btn"
                                >
                                    <span className="flex items-center gap-3"><Users size={18} /> CAREERS / RECRUIT</span>
                                    <ArrowRight size={18} className="transform group-hover/btn:translate-x-2 transition-transform" />
                                </Link>

                                <Link
                                    href="/contact/casual"
                                    className="w-full flex items-center justify-between py-5 px-8 bg-transparent border border-black/20 text-black font-display font-bold tracking-widest text-sm hover:bg-black/5 transition-all group/btn"
                                >
                                    <span className="flex items-center gap-3"><MessageSquare size={18} /> CASUAL INTERVIEW</span>
                                    <ArrowRight size={18} className="transform group-hover/btn:translate-x-2 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

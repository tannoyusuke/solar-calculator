"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ConversionCTA } from "@/components/layout/ConversionCTA";
import { EnvisionGraphic } from "@/components/ui/EnvisionGraphic";
import { ArrowRight } from "lucide-react";



export function ServicesClient({ dict }: { dict: any }) {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-background relative overflow-hidden">
            {/* Ambient Backgrounds */}
            <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] mix-blend-screen pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-primary-dark/10 blur-[150px] mix-blend-screen pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

                {/* Header Sequence */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 text-center md:text-left"
                >
                    <div className="inline-flex items-center justify-center md:justify-start gap-4 mb-6 w-full md:w-auto">
                        <div className="h-px w-12 bg-primary/50" />
                        <h2 className="text-sm tracking-[0.3em] text-primary-light font-bold font-sans">{dict.servicesPage.header.label}</h2>
                        <div className="h-px w-12 bg-primary/50 md:hidden" />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-sans font-bold tracking-widest text-white mb-8 leading-tight drop-shadow-lg" dangerouslySetInnerHTML={{ __html: dict.servicesPage.header.title }} />
                    <p className="text-gray-400 font-sans tracking-wide leading-relaxed text-lg max-w-3xl" dangerouslySetInnerHTML={{ __html: dict.servicesPage.header.desc }} />
                </motion.div>

                {/* The Tryfunds Model (Missing Parts Completion) */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-32"
                >
                    <div className="bg-white/[0.02] border border-white/5 p-8 md:p-16 relative overflow-hidden group">

                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer z-0 pointer-events-none transition-all duration-1000" />

                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h3 className="text-xs tracking-[0.3em] text-primary-light font-display mb-4">{dict.servicesPage.envision.label}</h3>
                                <h4 className="text-3xl md:text-5xl font-sans font-bold text-white mb-8 leading-tight tracking-wide" dangerouslySetInnerHTML={{ __html: dict.servicesPage.envision.title }} />
                                <div className="space-y-6 text-gray-400 font-sans tracking-wide leading-relaxed text-base">
                                    <p dangerouslySetInnerHTML={{ __html: dict.servicesPage.envision.p1 }} />
                                    <p dangerouslySetInnerHTML={{ __html: dict.servicesPage.envision.p2 }} />
                                    <p dangerouslySetInnerHTML={{ __html: dict.servicesPage.envision.p3 }} />
                                </div>
                            </div>

                            {/* Graphic Side */}
                            <div className="relative w-full aspect-[4/3] md:aspect-auto md:h-full flex items-center justify-center">
                                <EnvisionGraphic />
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Fee Model Section */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-32"
                >
                    <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 p-8 md:p-12 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

                        <div className="flex flex-col md:flex-row gap-12 items-start md:items-center relative z-10">
                            <div className="md:w-1/3">
                                <h3 className="text-xs tracking-[0.3em] text-primary-light font-bold font-sans mb-4">{dict.servicesPage.fee.label}</h3>
                                <h4 className="text-3xl md:text-4xl font-sans font-bold text-white mb-4 tracking-wide" dangerouslySetInnerHTML={{ __html: dict.servicesPage.fee.title }} />
                            </div>
                            <div className="md:w-2/3 space-y-6 text-gray-400 font-sans tracking-wide leading-relaxed text-base">
                                <p dangerouslySetInnerHTML={{ __html: dict.servicesPage.fee.p1 }} />
                                <p dangerouslySetInnerHTML={{ __html: dict.servicesPage.fee.p2 }} />
                                <div className="p-6 bg-black/40 border border-white/5 rounded-sm">
                                    <ul className="space-y-4 text-gray-300">
                                        <li className="flex items-start gap-3">
                                            <span className="mt-1 w-1.5 h-1.5 bg-primary-light rounded-full shrink-0" />
                                            <span>
                                                <strong className="text-white">{dict.servicesPage.fee.model1_title}</strong><br />
                                                {dict.servicesPage.fee.model1_desc}
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="mt-1 w-1.5 h-1.5 bg-primary-light rounded-full shrink-0" />
                                            <span>
                                                <strong className="text-white">{dict.servicesPage.fee.model2_title}</strong><br />
                                                {dict.servicesPage.fee.model2_desc}
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Specific Capabilities List */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className="flex flex-col mb-16">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-px w-8 bg-white/20" />
                            <h3 className="text-xl tracking-[0.2em] text-white font-bold font-sans">{dict.servicesPage.capabilities.label}</h3>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-sans font-bold text-white leading-tight tracking-widest pl-12 border-l-2 border-primary-light" dangerouslySetInnerHTML={{ __html: dict.servicesPage.capabilities.title }} />
                        <p className="mt-6 text-gray-400 font-sans tracking-wide leading-relaxed pl-12 max-w-3xl" dangerouslySetInnerHTML={{ __html: dict.servicesPage.capabilities.desc }} />
                    </div>

                    <div className="space-y-6">
                        {dict.servicesPage.capabilities.items.map((service: any, idx: number) => (
                            <div
                                key={idx}
                                className="group relative border border-white/10 bg-white/[0.01] hover:bg-white/[0.03] hover:border-primary/30 transition-all duration-500 overflow-hidden"
                            >
                                {/* Accent Line */}
                                <div className="absolute left-0 top-0 w-1 h-full bg-primary-light transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out" />

                                <div className="p-8 md:p-12 lg:pr-24 flex flex-col md:flex-row gap-10 items-start">
                                    {/* Number / Title Block */}
                                    <div className="md:w-1/3 shrink-0">
                                        <span className="text-primary-light/50 font-display text-sm tracking-[0.2em] block mb-4">
                                            {String(idx + 1).padStart(2, '0')}
                                        </span>
                                        <h4 className="text-2xl md:text-3xl font-display font-medium text-white mb-3" dangerouslySetInnerHTML={{ __html: service.title }} />
                                        <p className="text-sm font-sans text-gray-400 tracking-wider" dangerouslySetInnerHTML={{ __html: service.subtitle }} />
                                    </div>

                                    {/* Description & Tags Block */}
                                    <div className="md:w-2/3">
                                        <p className="text-gray-300 font-sans leading-loose tracking-wide mb-8" dangerouslySetInnerHTML={{ __html: service.description }} />
                                        <div className="flex flex-wrap gap-2">
                                            {service.tags.map((tag: any, tagIdx: number) => (
                                                <span
                                                    key={tagIdx}
                                                    className="text-xs font-sans text-white/60 border border-white/10 px-3 py-1 bg-white/5"
                                                    dangerouslySetInnerHTML={{ __html: tag }}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Decorative Arrow */}
                                    <div className="absolute right-12 top-1/2 -translate-y-1/2 text-white/10 group-hover:text-primary-light group-hover:translate-x-2 transition-all duration-500 hidden lg:block">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* Bottom Cross Links */}
                <section className="mt-32 pt-24 border-t border-white/10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                        <Link href="/case-study" className="group block relative overflow-hidden bg-white/[0.02] border border-white/10 hover:border-primary/40 transition-all duration-500 p-12">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px] group-hover:bg-primary/30 transition-colors" />
                            <h3 className="text-sm tracking-[0.3em] text-primary-light font-bold font-sans mb-4">{dict.servicesPage.links.cases.label}</h3>
                            <h4 className="text-3xl font-sans font-bold text-white mb-6" dangerouslySetInnerHTML={{ __html: dict.servicesPage.links.cases.title }} />
                            <p className="text-gray-400 font-sans leading-relaxed mb-8" dangerouslySetInnerHTML={{ __html: dict.servicesPage.links.cases.desc }} />
                            <div className="flex items-center text-white/50 group-hover:text-primary-light transition-colors font-display tracking-widest text-xs font-bold">
                                <span>{dict.servicesPage.links.cases.btn}</span>
                                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" />
                            </div>
                        </Link>

                        <Link href="/portfolio" className="group block relative overflow-hidden bg-white/[0.02] border border-white/10 hover:border-primary/40 transition-all duration-500 p-12">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px] group-hover:bg-primary/30 transition-colors" />
                            <h3 className="text-sm tracking-[0.3em] text-primary-light font-display uppercase mb-4">{dict.servicesPage.links.portfolio.label}</h3>
                            <h4 className="text-3xl font-display font-bold text-white mb-6" dangerouslySetInnerHTML={{ __html: dict.servicesPage.links.portfolio.title }} />
                            <p className="text-gray-400 font-sans leading-relaxed mb-8" dangerouslySetInnerHTML={{ __html: dict.servicesPage.links.portfolio.desc }} />
                            <div className="flex items-center text-white/50 group-hover:text-primary-light transition-colors font-display tracking-widest text-xs font-bold">
                                <span>{dict.servicesPage.links.portfolio.btn}</span>
                                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" />
                            </div>
                        </Link>
                    </div>

                    <ConversionCTA dict={dict.shared?.conversionCTA} />
                </section>

            </div>
        </div>
    );
}

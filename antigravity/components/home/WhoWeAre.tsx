"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function WhoWeAre({ dict }: { dict: any }) {
    return (
        <section className="relative py-32 bg-background overflow-hidden">

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16">
                <ScrollReveal delay={0.2} className="w-full md:w-[55%] lg:w-[50%]">
                    <div className="inline-flex items-center gap-4 mb-8">
                        <div className="h-px w-12 bg-primary/50" />
                        <h2 className="text-sm tracking-[0.3em] text-primary-light font-display">{dict.section_title}</h2>
                    </div>
                    <h3 className="text-[2rem] md:text-4xl lg:text-5xl font-display font-medium tracking-widest mb-8 leading-tight text-white pr-4">
                        <span className="whitespace-nowrap">{dict.title_line1}</span><br className="hidden md:block" />
                        <span className="inline-block text-white mt-2 md:mt-0 whitespace-nowrap">{dict.title_line2}</span>
                    </h3>
                    <p
                        className="text-gray-400 leading-loose tracking-wide font-sans text-lg [&>strong]:text-white [&>strong]:font-medium mb-10"
                        dangerouslySetInnerHTML={{ __html: dict.description }}
                    />
                </ScrollReveal>

                <ScrollReveal delay={0.4} direction="left" className="w-full md:w-[45%] lg:w-[50%] hidden md:block relative h-[600px]">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="grid grid-cols-1 gap-8 h-full">
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, x: -30 },
                                visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
                            }}
                            className="bg-transparent border border-white/10 p-10 hover:border-white/30 backdrop-blur-sm relative group overflow-hidden transition-all duration-500"
                        >
                            <div className="absolute top-0 left-0 w-0 h-[2px] bg-primary-light group-hover:w-full transition-all duration-700 ease-in-out" />
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <h4 className="text-2xl font-display tracking-widest mb-4 text-white relative z-10">{dict.advisory.title}</h4>
                            <div className="w-12 h-px bg-primary/30 mb-6 group-hover:w-24 group-hover:bg-primary-light transition-all duration-500 relative z-10" />
                            <p
                                className="text-gray-400 text-sm tracking-wider mb-6 leading-relaxed relative z-10"
                                dangerouslySetInnerHTML={{ __html: dict.advisory.desc }}
                            />
                        </motion.div>

                        <motion.div
                            variants={{
                                hidden: { opacity: 0, x: 30 },
                                visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
                            }}
                            className="bg-white/[0.02] border border-white/10 p-10 hover:border-primary/40 relative overflow-hidden group shadow-[0_0_30px_rgba(0,0,0,0.3)] transition-all duration-500"
                        >
                            <div className="absolute top-0 left-0 w-0 h-[2px] bg-primary-light group-hover:w-full transition-all duration-700 ease-in-out" />
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-dark/10 blur-[80px] group-hover:bg-primary-dark/20 transition-colors duration-700 pointer-events-none" />

                            <h4 className="text-2xl font-display tracking-widest mb-4 text-white relative z-10">{dict.investment.title}</h4>
                            <div className="w-12 h-px bg-primary/40 mb-6 group-hover:w-32 group-hover:bg-primary-light transition-all duration-500 relative z-10" />
                            <p
                                className="text-gray-300 text-sm tracking-wider mb-6 relative z-10 leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: dict.investment.desc }}
                            />
                        </motion.div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}

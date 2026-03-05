"use client";

import { motion } from "framer-motion";
import { Users, Target, ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import { RecruitRoles } from "@/components/recruit/RecruitRoles";
import { Locale } from "@/lib/i18n-config";
import { Job } from "@/data/jobs.en";

export default function RecruitClient({ dict, jobs, lang }: { dict: any, jobs: Job[], lang: Locale }) {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-background">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
                >
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-4 mb-6">
                            <div className="h-px w-12 bg-primary/50" />
                            <h2 className="text-sm tracking-[0.3em] text-primary/80 font-display uppercase">{dict.top.subtitle}</h2>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-display font-medium tracking-tight mb-8">
                            {dict.top.title}
                        </h1>
                        <p
                            className="text-gray-400 font-sans tracking-wide leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: dict.top.description }}
                        />
                    </div>
                </motion.div>
            </div>

            {/* Injected Detailed Roles section */}
            <RecruitRoles dict={dict.roles} jobs={jobs} lang={lang} />

            <div className="max-w-7xl mx-auto px-6 md:px-12 mt-24">

                {/* Actions */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Link
                        href={`/${lang}/contact/document`}
                        className="group p-8 border border-white/10 bg-transparent hover:bg-white hover:border-white transition-all duration-500 relative flex flex-col items-start"
                    >
                        <div className="text-white group-hover:text-black mb-6 transition-colors">
                            <Users strokeWidth={1.5} className="w-10 h-10" />
                        </div>
                        <h4 className="text-xl font-bold font-sans tracking-wide mb-4 text-white group-hover:text-black transition-colors">
                            {dict.top.actions.document.title}
                        </h4>
                        <p className="text-sm leading-relaxed mb-8 text-gray-400 group-hover:text-gray-600 font-sans transition-colors">
                            {dict.top.actions.document.description}
                        </p>
                        <div className="w-full mt-auto flex items-center justify-between text-white group-hover:text-black font-display font-bold tracking-widest text-sm transition-colors">
                            {dict.top.actions.document.btn} <ArrowRight size={18} className="transform group-hover:translate-x-2 transition-transform" />
                        </div>
                    </Link>

                    <Link
                        href={`/${lang}/contact/casual`}
                        className="group p-8 border border-white bg-white hover:bg-gray-100 transition-all duration-500 relative flex flex-col items-start"
                    >
                        <div className="text-black mb-6">
                            <Target strokeWidth={1.5} className="w-10 h-10" />
                        </div>
                        <h4 className="text-xl font-bold font-sans tracking-wide mb-4 text-black">
                            {dict.top.actions.casual.title}
                        </h4>
                        <p className="text-sm leading-relaxed mb-8 text-gray-700 font-sans">
                            {dict.top.actions.casual.description}
                        </p>
                        <div className="w-full mt-auto flex items-center justify-between text-black font-display font-bold tracking-widest text-sm">
                            {dict.top.actions.casual.btn} <ArrowRight size={18} className="transform group-hover:translate-x-2 transition-transform" />
                        </div>
                    </Link>

                    <Link
                        href={`/${lang}/contact`}
                        className="group p-8 border border-primary/30 bg-primary/10 hover:bg-primary transition-all duration-500 relative flex flex-col items-start"
                    >
                        <div className="text-primary mb-6 group-hover:text-white transition-colors">
                            <ChevronRight strokeWidth={1.5} className="w-10 h-10" />
                        </div>
                        <h4 className="text-xl font-bold font-sans tracking-wide mb-4 text-white">
                            {dict.top.actions.entry.title}
                        </h4>
                        <p className="text-sm leading-relaxed mb-8 text-gray-300 group-hover:text-white font-sans transition-colors">
                            {dict.top.actions.entry.description}
                        </p>
                        <div className="w-full mt-auto flex items-center justify-between text-white font-display font-bold tracking-widest text-sm transition-colors">
                            {dict.top.actions.entry.btn} <ArrowRight size={18} className="transform group-hover:translate-x-2 transition-transform" />
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    );
}

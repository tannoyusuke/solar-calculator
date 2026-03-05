"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Locale } from "@/lib/i18n-config";
import { Job } from "@/data/jobs.en";

export function RecruitRoles({ dict, jobs, lang }: { dict: any, jobs: Job[], lang: Locale }) {
    // Group jobs by department
    const departments = Array.from(new Set(jobs.map((job) => job.department)));

    return (
        <section className="py-24 border-t border-white/5 bg-background" id="open-roles">
            <div className="max-w-4xl mx-auto px-6 md:px-12">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <div className="inline-flex items-center gap-4 mb-6">
                        <div className="h-px w-12 bg-primary/50" />
                        <h2 className="text-sm tracking-[0.3em] text-primary/80 font-display uppercase">{dict.subtitle}</h2>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-display tracking-tight mb-8">
                        {dict.title}
                    </h3>
                    <p className="text-gray-400 font-sans tracking-wide leading-relaxed text-lg">
                        {dict.description}
                    </p>
                </motion.div>



                {/* Job Board List */}
                <div className="space-y-16">
                    {departments.map((dept, deptIdx) => (
                        <motion.div
                            key={dept}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: deptIdx * 0.1 }}
                        >
                            <h4 className="text-2xl font-display font-medium text-white mb-6 pb-4 border-b border-white/10">
                                {dept}
                            </h4>
                            <div className="flex flex-col">
                                {jobs.filter(j => j.department === dept).map((job) => (
                                    <Link
                                        href={`/${lang}/recruit/jobs/${job.id}`}
                                        key={job.id}
                                        className="group flex flex-col sm:flex-row sm:items-center justify-between py-6 border-b border-white/5 hover:bg-white/[0.02] px-4 -mx-4 transition-colors duration-300"
                                    >
                                        <div className="mb-2 sm:mb-0">
                                            <h5 className="text-lg font-sans font-medium text-white group-hover:text-primary transition-colors duration-300">
                                                {job.title}
                                            </h5>
                                        </div>
                                        <div className="flex items-center gap-6">
                                            <span className="text-sm font-sans text-gray-500">
                                                {job.location}
                                            </span>
                                            <ArrowRight size={18} className="text-gray-600 group-hover:text-primary transform group-hover:translate-x-1 transition-all duration-300 hidden sm:block" />
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}

"use client";

import { AccessSection } from "@/components/about/AccessSection";
import { ScrollReveal } from "@/components/ui/ScrollReveal";



export function CompanyClient({ dict, historyData }: { dict: any, historyData: any[] }) {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-background relative overflow-hidden">
            {/* Background Atmosphere */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[150px] mix-blend-screen pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

                {/* Header */}
                <ScrollReveal delay={0.1}>
                    <div className="mb-24">
                        <div className="inline-flex items-center gap-4 mb-6">
                            <div className="h-px w-12 bg-primary/50" />
                            <h2 className="text-sm tracking-[0.3em] text-primary-light font-bold font-sans">{dict.company.title}</h2>
                        </div>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                    {/* Company Profile */}
                    <ScrollReveal delay={0.2} direction="left">
                        <section>
                            <h3 className="text-2xl font-sans font-bold tracking-widest text-white mb-10 pb-4 border-b border-white/10 flex items-center gap-4">
                                <div className="w-2 h-2 rounded-full bg-primary-light" />
                                {dict.company.info.title}
                            </h3>

                            <dl className="grid grid-cols-1 gap-4 text-sm font-sans tracking-wide">
                                <div className="flex flex-col md:flex-row md:items-start p-4 md:p-6 bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-colors">
                                    <dt className="text-gray-400 uppercase font-display tracking-widest mb-2 md:mb-0 md:w-36 lg:w-48 shrink-0">{dict.company.info.name_label}</dt>
                                    <dd className="text-white font-medium">{dict.company.info.name_value}</dd>
                                </div>
                                <div className="flex flex-col md:flex-row md:items-start p-4 md:p-6 bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-colors">
                                    <dt className="text-gray-400 uppercase font-display tracking-widest mb-2 md:mb-0 md:w-36 lg:w-48 shrink-0">{dict.company.info.ceo_label}</dt>
                                    <dd className="text-white font-medium">{dict.company.info.ceo_value}</dd>
                                </div>
                                <div className="flex flex-col md:flex-row md:items-start p-4 md:p-6 bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-colors">
                                    <dt className="text-gray-400 uppercase font-display tracking-widest mb-2 md:mb-0 md:w-36 lg:w-48 shrink-0">{dict.company.info.established_label}</dt>
                                    <dd className="text-white font-medium">{dict.company.info.established_value}</dd>
                                </div>
                                <div className="flex flex-col md:flex-row md:items-start p-4 md:p-6 bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-colors">
                                    <dt className="text-gray-400 uppercase font-display tracking-widest mb-2 md:mb-0 md:w-36 lg:w-48 shrink-0">{dict.company.info.capital_label}</dt>
                                    <dd className="text-white font-medium">{dict.company.info.capital_value}</dd>
                                </div>
                                <div className="flex flex-col md:flex-row md:items-start p-4 md:p-6 bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-colors">
                                    <dt className="text-gray-400 uppercase font-display tracking-widest mb-2 md:mb-0 md:w-36 lg:w-48 shrink-0">{dict.company.info.employees_label}</dt>
                                    <dd className="text-white font-medium">{dict.company.info.employees_value}</dd>
                                </div>
                                <div className="flex flex-col md:flex-row md:items-start p-4 md:p-6 bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-colors">
                                    <dt className="text-gray-400 uppercase font-display tracking-widest mb-2 md:mb-0 md:w-36 lg:w-48 shrink-0">{dict.company.info.hq_label}</dt>
                                    <dd className="text-white font-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: dict.company.info.hq_value }} />
                                </div>
                                <div className="flex flex-col md:flex-row md:items-start p-4 md:p-6 bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-colors">
                                    <dt className="text-gray-400 uppercase font-display tracking-widest mb-2 md:mb-0 md:w-36 lg:w-48 shrink-0">{dict.company.info.contact_label}</dt>
                                    <dd className="text-white font-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: dict.company.info.contact_value }} />
                                </div>
                                <div className="flex flex-col md:flex-row md:items-start p-4 md:p-6 bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-colors">
                                    <dt className="text-gray-400 uppercase font-display tracking-widest mb-2 md:mb-0 md:w-36 lg:w-48 shrink-0">{dict.company.info.business_label}</dt>
                                    <dd className="text-white font-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: dict.company.info.business_value }} />
                                </div>
                                <div className="flex flex-col md:flex-row md:items-start p-4 md:p-6 bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-colors">
                                    <dt className="text-gray-400 uppercase font-display tracking-widest mb-2 md:mb-0 md:w-36 lg:w-48 shrink-0">{dict.company.info.group_label}</dt>
                                    <dd className="text-white font-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: dict.company.info.group_value }} />
                                </div>
                                <div className="flex flex-col md:flex-row md:items-start p-4 md:p-6 bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-colors">
                                    <dt className="text-gray-400 uppercase font-display tracking-widest mb-2 md:mb-0 md:w-36 lg:w-48 shrink-0">{dict.company.info.banks_label}</dt>
                                    <dd className="text-white font-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: dict.company.info.banks_value }} />
                                </div>
                                <div className="flex flex-col md:flex-row md:items-start p-4 md:p-6 bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-colors">
                                    <dt className="text-gray-400 uppercase font-display tracking-widest mb-2 md:mb-0 md:w-36 lg:w-48 shrink-0">{dict.company.info.licenses_label}</dt>
                                    <dd className="text-white font-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: dict.company.info.licenses_value }} />
                                </div>
                            </dl>
                        </section>
                    </ScrollReveal>

                    {/* History */}
                    <ScrollReveal delay={0.3} direction="right">
                        <section>
                            <h3 className="text-2xl font-sans font-bold tracking-widest text-white mb-10 pb-4 border-b border-white/10 flex items-center gap-4">
                                <div className="w-2 h-2 rounded-full bg-primary-light" />
                                {dict.company.history.title}
                            </h3>

                            <div className="relative pl-6 md:pl-8 border-l border-white/10 space-y-12">
                                {historyData.map((item: any, idx: number) => (
                                    <div key={idx} className="relative group">
                                        {/* Timeline Node */}
                                        <div className="absolute -left-[29px] md:-left-[37px] top-1.5 w-3 h-3 rounded-full border-2 border-background bg-primary-light group-hover:scale-150 transition-transform duration-300" />

                                        <h4 className="text-primary-light font-display tracking-widest text-sm mb-3">
                                            {item.year}
                                        </h4>
                                        <p className="text-white font-sans tracking-wide leading-relaxed bg-white/[0.02] p-5 border border-white/5 hover:border-primary/20 transition-colors">
                                            {item.event}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </ScrollReveal>

                </div>

                <AccessSection dict={dict.accessControl} />

            </div>
        </div>
    );
}

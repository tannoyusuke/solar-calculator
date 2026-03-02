"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { jobs } from "@/data/jobs";

export function RecruitRoles() {
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
                        <h2 className="text-sm tracking-[0.3em] text-primary/80 font-display uppercase">Open Roles</h2>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-display tracking-tight mb-8">
                        Join Tryfunds
                    </h3>
                    <p className="text-gray-400 font-sans tracking-wide leading-relaxed text-lg">
                        経営の中枢を担うCEO室から各専門性を活かしたアドバイザリー、ファンドマネジメントまで多様なポジションを募集しています。
                    </p>
                </motion.div>

                {/* Career Plan Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-32 relative"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] rounded-full pointer-events-none" />
                    <div className="bg-white/[0.02] border border-white/10 p-8 md:p-12 relative overflow-hidden group">
                        <div className="absolute left-0 top-0 w-1 h-full bg-primary-light" />

                        <h4 className="text-xl md:text-2xl font-display font-medium text-white mb-6 tracking-wide">
                            Career Plan & Talent Development
                        </h4>

                        <div className="space-y-6 text-gray-400 font-sans tracking-wide leading-relaxed">
                            <p>
                                当社は、特定領域に強みを持つ「専門性の高いコンサルタント」を創ることを目的としていません。スピード感の早い現代において、<strong className="text-white">海外動向、ファイナンス、テクノロジーといった多角的な目線で経営意思決定とオペレーション構築ができる「真のビジネスリーダー」</strong>の育成を目指しています。この点で、細分化された既存の競合コンサルティングファームとは大きく異なります。
                            </p>
                            <p>
                                コンサルティング業務の枠を超え、企業のミッシングパーツを直接補完するサービス（資金調達、人材調達、グローバルネットワークの開拓）や、自ら数字を作る業務（営業・マーケティング、アライアンス構築）に実務レベルで従事させることで、現場で圧倒的な戦闘力を持つ人材へと鍛え上げます。
                            </p>
                            <div className="bg-primary/10 border border-primary/20 p-6 mt-8">
                                <h5 className="text-primary-light font-bold mb-3 flex items-center gap-2">
                                    <ArrowRight size={18} />
                                    最短3年での経営陣・ファンドマネージャーへの登用
                                </h5>
                                <p className="text-sm text-gray-300">
                                    Tryfundsの最大の特徴は、成長のスピードとその後のキャリア機会の雄大さにあります。最短3年間で、自社の事業経営陣やファンドマネージャーとして抜擢するパスを用意しています。実際に、<strong className="text-white">入社4年目でファンドマネージャーへと駆け上がった実績</strong>があり、年齢や年次に関係なく、圧倒的な結果を残した者にはそれに見合う役割とリターンを提供します。
                                </p>
                            </div>
                        </div>
                    </div>
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
                                        href={`/recruit/jobs/${job.id}`}
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

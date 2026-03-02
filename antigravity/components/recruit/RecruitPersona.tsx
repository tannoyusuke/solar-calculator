"use client";

import { motion } from "framer-motion";

export function RecruitPersona() {
    return (
        <section className="py-24 border-t border-white/5 bg-background relative z-10">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-20">
                    {/* Left side: Heading */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-5/12"
                    >
                        <h3 className="text-sm tracking-[0.3em] text-primary-light font-display uppercase mb-6 flex items-center gap-4">
                            PERSONA
                            <div className="h-px w-12 bg-primary/50" />
                        </h3>
                        <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-white leading-tight mb-8">
                            求めるのは<br />
                            「事業家としての<br />
                            マインドセット」<br />
                            を持つ人。
                        </h2>
                        <div className="w-16 h-1 bg-primary-light"></div>
                    </motion.div>

                    {/* Right side: Description */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:w-7/12 flex flex-col justify-center space-y-8 text-gray-300 font-sans tracking-wide leading-relaxed text-base md:text-lg"
                    >
                        <p>
                            Tryfundsが求めるのは、領域を問わず、やれるまでやり切る人材です。<br />
                            当社は、コンサルティング収益だけで成立するモデルではなく、事業収益を前提としたポートフォリオを構築しています。
                        </p>
                        <p>
                            だからこそ、戦略・財務は基本プロトコルとして身につけた上で、数字と向き合い、収益を上げることに執念を持てる人が必要です。
                        </p>
                    </motion.div>
                </div>

                {/* Matrix area */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 mb-16">
                    {/* Must */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h4 className="text-2xl font-bold font-sans text-white mb-6 border-b border-white/10 pb-4">
                            Must
                        </h4>
                        <ul className="space-y-5 text-gray-300 font-sans text-sm md:text-base leading-relaxed">
                            <li className="flex items-start gap-4">
                                <span className="text-primary-light mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-light shrink-0" />
                                数字で語れる（売上、粗利、回収、KPI）
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="text-primary-light mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-light shrink-0" />
                                自分でキャッチアップできる（未経験領域でも調べて前に進める）
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="text-primary-light mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-light shrink-0" />
                                顧客相対ができる（意思決定者に向き合える）
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="text-primary-light mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-light shrink-0" />
                                やり切る（最後まで責任を持つ）
                            </li>
                        </ul>
                    </motion.div>

                    {/* Nice to have */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h4 className="text-2xl font-bold font-sans text-white mb-6 border-b border-white/10 pb-4">
                            Nice to have
                        </h4>
                        <ul className="space-y-5 text-gray-400 font-sans text-sm md:text-base leading-relaxed">
                            <li className="flex items-start gap-4">
                                <span className="text-white/30 mt-1.5 w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" />
                                戦略/財務/投資いずれかの強み
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="text-white/30 mt-1.5 w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" />
                                海外案件の経験、または英語での業務経験
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="text-white/30 mt-1.5 w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" />
                                事業会社でのP/L責任経験、または新規事業立ち上げ
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="text-white/30 mt-1.5 w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" />
                                事業会社における類まれなる営業・マーケティング実績
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* 向かない人 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-white/[0.02] border border-white/5 p-8 md:p-12 mb-8 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[80px] pointer-events-none" />
                    <h4 className="text-xl font-bold font-sans text-white mb-8 border-b border-white/10 pb-4 inline-block">
                        向かない人（自己選別）
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-gray-400 font-sans text-sm md:text-base">
                        <div className="flex items-start gap-4">
                            <span className="text-white/20 mt-0.5 text-lg leading-none shrink-0">×</span>
                            綺麗な提案書を作って終わりたい
                        </div>
                        <div className="flex items-start gap-4">
                            <span className="text-white/20 mt-0.5 text-lg leading-none shrink-0">×</span>
                            担当領域を固定したい（領域横断が苦手）
                        </div>
                        <div className="flex items-start gap-4">
                            <span className="text-white/20 mt-0.5 text-lg leading-none shrink-0">×</span>
                            成果よりプロセスの説明を重視したい
                        </div>
                        <div className="flex items-start gap-4">
                            <span className="text-white/20 mt-0.5 text-lg leading-none shrink-0">×</span>
                            数字への執念より、安定を優先したい
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

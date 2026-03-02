"use client";

import { motion } from "framer-motion";
import { TrendingUp, Zap } from "lucide-react";

export function CareersPlan() {
    return (
        <section className="py-24 border-t border-white/5 bg-background relative z-10">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <div className="inline-flex items-center gap-4 mb-6">
                        <div className="h-px w-12 bg-primary/50" />
                        <h2 className="text-sm tracking-[0.3em] text-primary/80 font-display uppercase">Talent Development</h2>
                    </div>
                    <h3 className="text-3xl md:text-5xl font-sans font-bold tracking-tight mb-8">
                        Career Plan & Talent Development
                    </h3>
                </motion.div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                    {/* Left: Philosophy */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-6 space-y-8 text-gray-400 font-sans tracking-wide leading-relaxed text-base md:text-lg"
                    >
                        <p>
                            当社は、特定領域に強みを持つ「専門性の高いコンサルタント」を創ることを目的としていません。スピード感の早い現代において、<strong className="text-white">海外動向、ファイナンス、テクノロジーといった多角的な目線で経営意思決定とオペレーション構築ができる「真のビジネスリーダー」</strong>の育成を目指しています。この点で、細分化された既存の競合コンサルティングファームとは大きく異なります。
                        </p>
                        <p>
                            コンサルティング業務の枠を超え、企業のミッシングパーツを直接補完するサービス（資金調達、人材調達、グローバルネットワークの開拓）や、自ら数字を作る業務（営業・マーケティング、アライアンス構築）に実務レベルで従事させることで、現場で圧倒的な戦闘力を持つ人材へと鍛え上げます。
                        </p>
                    </motion.div>

                    {/* Right: Fast Track Cases */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-6"
                    >
                        <div className="bg-white/[0.02] border border-white/10 p-8 md:p-10 relative overflow-hidden group h-full flex flex-col">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] pointer-events-none rounded-full" />
                            <div className="absolute left-0 top-0 w-1 h-full bg-primary-light" />

                            <h4 className="text-2xl font-bold font-sans text-white mb-8 border-b border-white/10 pb-4 flex items-center gap-3">
                                <TrendingUp className="text-primary-light w-6 h-6" />
                                最短3年での経営陣・ファンドマネージャーへの登用
                            </h4>
                            <p className="text-gray-300 font-sans mb-10 leading-relaxed text-sm">
                                Tryfundsの最大の特徴は、成長のスピードとその後のキャリア機会の雄大さにあります。最短3年間で、自社の事業経営陣やファンドマネージャーとして抜擢するパスを用意しています。年齢や年次に関係なく、圧倒的な挑戦機会を提供します。
                            </p>

                            {/* Case Studies */}
                            <div className="space-y-6 mt-auto">
                                <div className="bg-black/40 border border-white/5 p-6 relative">
                                    <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                    </div>
                                    <h5 className="text-white font-bold font-sans mb-2 flex items-center gap-2">
                                        <Zap className="w-4 h-4 text-primary" /> CASE 01: 入社4年目でファンドマネージャーへ
                                    </h5>
                                    <p className="text-gray-400 text-xs leading-relaxed">
                                        戦略コンサルティング部門での圧倒的なデリバリー実績と、自ら新規投資案件の発掘・クロージングまでを主導した結果が評価され、入社4年目という異例のスピードで自社運営ファンドのマネージャーに就任。
                                    </p>
                                </div>

                                <div className="bg-black/40 border border-white/5 p-6 relative">
                                    <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                                        <div className="w-2 h-2 bg-primary-light rounded-full animate-pulse" />
                                    </div>
                                    <h5 className="text-white font-bold font-sans mb-2 flex items-center gap-2">
                                        <Zap className="w-4 h-4 text-primary-light" /> CASE 02: 最年少での投資先事業会社CXO抜擢
                                    </h5>
                                    <p className="text-gray-400 text-xs leading-relaxed">
                                        コンサルティング部門にて複数プロジェクトのEngagement Managerを務めた後、そのテクノロジーへの深い知見と強力なコミットメントが評価され、AIテクノロジー領域のグループ会社のCEO層へ抜擢。グループ内でのスピンオフ＆ユニコーン創生を体現するモデルケースに。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";

export function RecruitSystem() {
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
                        <h2 className="text-sm tracking-[0.3em] text-primary/80 font-display uppercase">HR System & Expectations</h2>
                    </div>
                    <h3 className="text-3xl md:text-5xl font-sans font-bold tracking-tight mb-8">
                        人事制度と求める人物像
                    </h3>
                    <p className="text-gray-400 font-sans tracking-wide leading-relaxed max-w-3xl">
                        Tryfundsではメンバーの成長フェーズを「Play」「Drive」「Lead」の3段階に定義。
                        各ランク（MD、Principal等）と紐づけながら、6つのリーダーシップ要素をもとに評価と育成を行います。
                        主として「成果」を見ますが、フィードバックを通じた「パフォーマンスの向上・改善」を最重視し、
                        コンサルタントとしてのスキルだけでなく、経営人材・事業開発人材としてのマインドセットを徹底的に鍛え上げます。
                    </p>
                </motion.div>

                {/* Growth Phases Diagram */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
                >
                    {/* Play */}
                    <div className="relative border border-white/10 p-10 flex flex-col overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0c1821] to-[#04080b] z-0" />
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[50px] group-hover:bg-primary/40 transition-colors duration-700 pointer-events-none z-0" />

                        <div className="relative z-10">
                            <h4 className="text-3xl font-display font-bold text-white mb-2 flex items-baseline gap-2">
                                Play <span className="text-lg text-primary-light font-sans tracking-widest font-normal">（守）</span>
                            </h4>
                            <div className="text-xs tracking-widest text-gray-400 font-sans mb-8 pb-4 border-b border-white/10 uppercase">
                                Analyst / Associate / Senior Associate
                            </div>
                            <ul className="text-sm text-gray-300 font-sans space-y-4 leading-relaxed">
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">▶</span>
                                    顧客の本質的課題を理解し、最短でインパクトある解決策を提示できる。
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">▶</span>
                                    未知の領域でも自己研鑽を重ね、第一人者たる領域をつくろうと努力できる。
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Drive */}
                    <div className="relative border border-primary/30 p-10 flex flex-col shadow-[0_0_40px_rgba(0,118,130,0.15)] overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0f2127] to-[#050c0e] z-0" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/20 blur-[60px] group-hover:bg-primary/40 transition-colors duration-700 pointer-events-none z-0" />

                        <div className="relative z-10">
                            <h4 className="text-3xl font-display font-bold text-white mb-2 flex items-baseline gap-2">
                                Drive <span className="text-lg text-primary-light font-sans tracking-widest font-normal">（破）</span>
                            </h4>
                            <div className="text-xs tracking-widest text-primary/70 font-sans mb-8 pb-4 border-b border-primary/20 uppercase">
                                Engagement Manager / Vice President
                            </div>
                            <ul className="text-sm text-gray-300 font-sans space-y-4 leading-relaxed">
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">▶</span>
                                    対象事業がより大きな収益をあげるビジネスモデル・新サービスを創出・提供できる。
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">▶</span>
                                    自ら先頭に立って未知の領域への挑戦機会を創り出し、メンバ―を鼓舞・育成できる。
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Lead */}
                    <div className="relative border border-white/10 p-10 flex flex-col overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0c1821] to-[#04080b] z-0" />
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/20 blur-[50px] group-hover:bg-primary/40 transition-colors duration-700 pointer-events-none z-0" />

                        <div className="relative z-10">
                            <h4 className="text-3xl font-display font-bold text-white mb-2 flex items-baseline gap-2">
                                Lead <span className="text-lg text-primary-light font-sans tracking-widest font-normal">（離）</span>
                            </h4>
                            <div className="text-xs tracking-widest text-gray-400 font-sans mb-8 pb-4 border-b border-white/10 uppercase">
                                Principal / Managing Director
                            </div>
                            <ul className="text-sm text-gray-300 font-sans space-y-4 leading-relaxed">
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">▶</span>
                                    社会に変革をもたらす、今までにない事業・サービスを創造することができる。
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">▶</span>
                                    Tryfundsに関わる誰もが人生をかけて実現したい夢を持てる環境をつくることができる。
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>

                {/* 6 Leadership Principles */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="p-10 md:p-16 border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-dark/20 blur-[120px] rounded-full pointer-events-none" />
                    <h3 className="text-2xl font-display tracking-widest text-white mb-8 border-l-4 border-primary pl-4">
                        TRYFUNDS 6 LEADERSHIP PRINCIPLES
                    </h3>
                    <p className="text-gray-400 font-sans mb-10 text-sm md:text-base leading-relaxed max-w-4xl">
                        これらの行動指針は、評価指標のみならず、パフォーマンスマネジメントサイクルにおけるフィードバックの軸となります。高いスキルと共に、経営人材として不可欠な「マインドセット」をこの6軸を通じて高めていきます。
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">

                        {/* 1 */}
                        <div>
                            <div className="flex items-center gap-3 mb-3">
                                <div className="text-primary font-display font-bold tracking-widest text-lg">01</div>
                                <h4 className="text-white font-sans font-bold text-lg">革新的な発想</h4>
                            </div>
                            <p className="text-gray-400 text-sm font-sans leading-relaxed">
                                世界の動きを捉え、情報収集力と発想力を駆使して、一歩先のビジネス機会や驚きのある課題解決策を提示できるか。
                            </p>
                        </div>

                        {/* 2 */}
                        <div>
                            <div className="flex items-center gap-3 mb-3">
                                <div className="text-primary font-display font-bold tracking-widest text-lg">02</div>
                                <h4 className="text-white font-sans font-bold text-lg">事業への情熱</h4>
                            </div>
                            <p className="text-gray-400 text-sm font-sans leading-relaxed">
                                業界構造を正しく理解し、顧客価値を最大化する事業構想力と、それを完遂させる蓋然性のあるプロセス設計力を持つか。
                            </p>
                        </div>

                        {/* 3 */}
                        <div>
                            <div className="flex items-center gap-3 mb-3">
                                <div className="text-primary font-display font-bold tracking-widest text-lg">03</div>
                                <h4 className="text-white font-sans font-bold text-lg">人を巻き込む力</h4>
                            </div>
                            <p className="text-gray-400 text-sm font-sans leading-relaxed">
                                顧客や内部協力を個として得られる信頼性と、必要な人材（協力者・採用）を定義しアプローチする採用・調達力を持つか。
                            </p>
                        </div>

                        {/* 4 */}
                        <div>
                            <div className="flex items-center gap-3 mb-3">
                                <div className="text-primary font-display font-bold tracking-widest text-lg">04</div>
                                <h4 className="text-white font-sans font-bold text-lg">開拓者の魂</h4>
                            </div>
                            <p className="text-gray-400 text-sm font-sans leading-relaxed">
                                使命感を持って率先垂範し、未知の領域であっても自己研鑽と学習を通じて第一人者たる領域を創り出そうとしているか。
                            </p>
                        </div>

                        {/* 5 */}
                        <div>
                            <div className="flex items-center gap-3 mb-3">
                                <div className="text-primary font-display font-bold tracking-widest text-lg">05</div>
                                <h4 className="text-white font-sans font-bold text-lg">夢中になれる行動力</h4>
                            </div>
                            <p className="text-gray-400 text-sm font-sans leading-relaxed">
                                期待水準を超える最高の目標を設定し、どんな困難な状況にあってもラストマンシップでやり抜く力を行動で示しているか。
                            </p>
                        </div>

                        {/* 6 */}
                        <div>
                            <div className="flex items-center gap-3 mb-3">
                                <div className="text-primary font-display font-bold tracking-widest text-lg">06</div>
                                <h4 className="text-white font-sans font-bold text-lg">王道を行く覚悟</h4>
                            </div>
                            <p className="text-gray-400 text-sm font-sans leading-relaxed">
                                いかなる圧力下でも公明正大に向き合い、他者からの助言を自己客観性をもって真摯に受け止め、成長を続けているか。
                            </p>
                        </div>

                    </div>
                </motion.div>

            </div>
        </section>
    );
}


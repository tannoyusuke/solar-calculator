"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const leadershipPrinciples = [
    {
        title: "革新的な発想",
        desc: "世界の動きを捉え、情報収集力と発想力を駆使して、一歩先のビジネス機会や驚きのある課題解決策を提示できるか。"
    },
    {
        title: "事業への情熱",
        desc: "業界構造を正しく理解し、顧客価値を最大化する事業構想力と、それを完遂させる蓋然性のあるプロセス設計力を持つか。"
    },
    {
        title: "人を巻き込む力",
        desc: "顧客や内部協力を個として得られる信頼性と、必要な人材（協力者・採用）を定義しアプローチする採用・調達力を持つか。"
    },
    {
        title: "開拓者の魂",
        desc: "使命感を持って率先垂範し、未知の領域であっても自己研鑽と学習を通じて第一人者たる領域を創り出そうとしているか。"
    },
    {
        title: "夢中になれる行動力",
        desc: "期待水準を超える最高の目標を設定し、どんな困難な状況にあってもラストマンシップでやり抜く力を行動で示しているか。"
    },
    {
        title: "王道を行く覚悟",
        desc: "いかなる圧力下でも公明正大に向き合い、他者からの助言を自己客観性をもって真摯に受け止め、成長を続けているか。"
    }
];

export default function PhilosophyPage() {
    return (
        <main className="pt-32 pb-32 min-h-screen bg-background relative overflow-hidden">
            {/* Background Atmosphere */}
            <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-primary/5 blur-[150px] mix-blend-screen pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
                {/* Premium Header - Refined & Stylish */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="mb-32 relative flex flex-col items-center text-center mt-12"
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-light text-white mb-6 leading-tight tracking-tight select-none">
                        Our <span className="font-medium text-primary-light drop-shadow-lg">Philosophy</span><br />
                        <span className="text-gray-400">&amp; Culture</span>
                    </h1>

                    <div className="h-px w-32 bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-8" />

                    <p className="text-gray-300 font-sans tracking-[0.4em] text-sm md:text-base font-medium uppercase drop-shadow-sm">
                        The Genesis of Our Challenge
                    </p>
                </motion.div>

                {/* --- 1. Philosophy / Vision / Mission --- */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="mb-48 space-y-40"
                >
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
                        {/* Text Content Column (Golden Ratio: ~55%) */}
                        <div className="w-full lg:w-[55%] flex flex-col justify-center relative">
                            {/* Accent Line */}
                            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary-light via-primary/30 to-transparent" />

                            <div className="pl-8 md:pl-12 py-4">
                                <h3 className="text-lg md:text-xl text-primary-light font-display tracking-[0.2em] mb-6 font-medium uppercase drop-shadow">
                                    Philosophy
                                </h3>
                                {/* "意志ある挑戦を創造する。" - Refined Typography */}
                                <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-sans font-bold text-white mb-10 leading-[1.3] tracking-wide break-keep drop-shadow-2xl">
                                    意志ある挑戦を<br className="hidden md:block" />創造する。
                                </h2>
                                <p className="text-gray-300/90 font-sans tracking-[0.04em] leading-[2.2] text-base md:text-xl mb-4">
                                    「もっとやれる」を確信に変える。<br className="hidden sm:block" />
                                    私たちが目指すのは、誰もが挑戦の第一歩を踏み出せる社会。
                                </p>
                                <p className="text-gray-400 font-sans tracking-[0.04em] leading-[2.2] text-base md:text-xl">
                                    社会の課題解決に挑み続けるため、私たち自身が最前線の挑戦者となり、新たな価値創造を牽引します。
                                </p>
                            </div>
                        </div>

                        {/* Description Box Column (Golden Ratio: ~45%) */}
                        <div className="w-full lg:w-[45%] shrink-0 flex flex-col bg-[#0a0f12]/80 backdrop-blur-xl rounded-2xl overflow-hidden relative border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,136,163,0.2)] group transition-all duration-700 hover:border-primary/50 hover:shadow-[0_20px_60px_-15px_rgba(0,136,163,0.3)] hover:-translate-y-2">
                            {/* Premium Top Glow Accent */}
                            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-primary-light to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="w-full p-10 md:p-14 relative z-10">
                                {/* Ambient inner gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                                <p className="text-gray-300 font-sans tracking-[0.08em] leading-[2.6] text-[0.95rem] md:text-base text-justify">
                                    私たちは、現状に満足せず、本質的な企業価値の向上を<span className="text-white font-medium">追求</span>します。
                                    <br /><br />
                                    単なる計画にとどまらず、事業の深部に入り込み、ハンズオンで<span className="text-white font-medium">実行を牽引</span>。過去の成功体験に縛られず、真に必要な変革を社会にもたらす。
                                    <br /><br />
                                    <span className="text-primary-light font-bold tracking-widest text-lg drop-shadow-md">それが私たちの使命です。</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Vision block */}
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="md:w-1/2 w-full aspect-[4/3] rounded-2xl overflow-hidden relative shadow-[0_0_30px_rgba(0,136,163,0.1)] border border-white/5">
                            <div className="w-full h-full bg-gradient-to-bl from-primary/20 to-black relative">
                                <img src="/images/vision_concept.png" alt="Vision Concept" className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-luminosity" />
                                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                            </div>
                        </div>
                        <div className="md:w-1/2 border-l-2 border-primary-light/30 pl-8">
                            <h3 className="text-xl md:text-2xl text-primary-light font-display tracking-widest mb-4 font-bold">
                                VISION
                            </h3>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-sans font-bold tracking-widest text-white mb-6 leading-tight drop-shadow-lg whitespace-nowrap">
                                挑戦をカルチャーに。
                            </h2>
                            <p className="text-gray-300 font-sans tracking-wide leading-relaxed text-base md:text-lg">
                                真の当事者たる「事業運営会社」として、私たちは社会の至る所にある課題解決に挑み続けます。
                                アドバイザリーという手段にとらわれず、必要なピースを自ら補完し、未知の領域へと踏み出す。
                                すべては、本気の挑戦が生み出す劇的な進化を社会の当たり前にするために。
                            </p>
                        </div>
                    </div>

                    {/* Mission block */}
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="md:w-1/2 order-2 md:order-1 border-l-2 border-primary-light/30 pl-8">
                            <h3 className="text-xl md:text-2xl text-primary-light font-display tracking-widest mb-4 font-bold">
                                MISSION
                            </h3>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-sans font-bold tracking-widest text-white mb-6 leading-tight drop-shadow-lg break-keep break-words hyphens-none">
                                世界で戦える事業を<br className="hidden lg:block" />生み出す。
                            </h2>
                            <p className="text-gray-300 font-sans tracking-wide leading-relaxed text-base md:text-lg">
                                国境を越えた視点でビジネスを見つめ、圧倒的なクオリティとスピードで結果を出す。<br />
                                失敗を恐れず、常に「どうすればできるか」を問い続ける。
                                経営者と肩を組み、事業投資・ハンズオン支援を通じて、次世代の産業モデルを社会に実装します。
                            </p>
                        </div>
                        <div className="md:w-1/2 order-1 md:order-2 w-full aspect-[4/3] rounded-2xl overflow-hidden relative shadow-[0_0_30px_rgba(0,136,163,0.1)] border border-white/5">
                            <div className="w-full h-full bg-gradient-to-tr from-primary/20 to-black relative">
                                <img src="/images/mission_concept.png" alt="Mission Concept" className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-luminosity" />
                                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* --- 2. Values We Provide --- */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-40 relative"
                    id="values"
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] pointer-events-none" />

                    <div className="mb-16 relative z-10">
                        <div className="inline-flex items-center gap-4 mb-4">
                            <div className="h-px w-8 bg-primary-light/50" />
                            <h3 className="text-sm md:text-base text-primary-light font-sans tracking-[0.2em] font-bold">
                                提供価値
                            </h3>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold tracking-widest text-white mb-6 leading-tight drop-shadow-md">
                            共に事業を成長<br className="md:hidden" />させるための<br className="hidden md:block" />3つの価値行動
                        </h2>
                        <p className="text-gray-300 text-lg leading-loose font-sans tracking-wide max-w-2xl bg-black/20 p-6 border-l-2 border-primary-light backdrop-blur-sm">
                            私たちは単なる外部アドバイザーではありません。クライアントとリスクを共有し、圧倒的な当事者意識で事業価値の最大化にコミットします。
                        </p>
                    </div>

                    <div className="space-y-8 relative z-10">
                        {/* Value 01 */}
                        <div className="group relative bg-white/[0.01] border border-white/5 hover:border-primary/30 p-8 md:p-12 transition-all duration-500 overflow-hidden ml-0 md:mr-12">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] group-hover:bg-primary/20 transition-colors duration-700 pointer-events-none" />
                            <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                                <div className="text-6xl md:text-8xl font-display font-bold text-white/5 group-hover:text-primary-light/20 transition-colors duration-500 leading-none">
                                    01
                                </div>
                                <div className="flex-1 mt-2">
                                    <div className="w-12 h-px bg-primary mb-6" />
                                    <h4 className="text-2xl md:text-3xl text-white font-bold mb-4 font-sans tracking-wide">
                                        世界基準で<br className="hidden md:block" />事業機会を切り拓く
                                    </h4>
                                    <p className="text-gray-400 text-base md:text-lg leading-relaxed font-sans tracking-wide">
                                        グローバルな視点を持ち、国境を越えた事業成長の機会を発見し、現実のものとします。
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Value 02 */}
                        <div className="group relative bg-white/[0.01] border border-white/5 hover:border-primary/30 p-8 md:p-12 transition-all duration-500 overflow-hidden ml-0 md:ml-12">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] group-hover:bg-primary/20 transition-colors duration-700 pointer-events-none" />
                            <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                                <div className="text-6xl md:text-8xl font-display font-bold text-white/5 group-hover:text-primary-light/20 transition-colors duration-500 leading-none">
                                    02
                                </div>
                                <div className="flex-1 mt-2">
                                    <div className="w-12 h-px bg-primary mb-6" />
                                    <h4 className="text-2xl md:text-3xl text-white font-bold mb-4 font-sans tracking-wide">
                                        枠にとらわれず挑戦し、<br className="hidden md:block" />主体者としてやりきる
                                    </h4>
                                    <p className="text-gray-400 text-base md:text-lg leading-relaxed font-sans tracking-wide">
                                        前例や既存の枠組みにとらわれず、当事者意識を持って事業の成功まで並走します。
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Value 03 */}
                        <div className="group relative bg-white/[0.01] border border-white/5 hover:border-primary/30 p-8 md:p-12 transition-all duration-500 overflow-hidden ml-0 md:mr-12">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] group-hover:bg-primary/20 transition-colors duration-700 pointer-events-none" />
                            <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                                <div className="text-6xl md:text-8xl font-display font-bold text-white/5 group-hover:text-primary-light/20 transition-colors duration-500 leading-none">
                                    03
                                </div>
                                <div className="flex-1 mt-2">
                                    <div className="w-12 h-px bg-primary mb-6" />
                                    <h4 className="text-2xl md:text-3xl text-white font-bold mb-4 font-sans tracking-wide">
                                        チームワークで<br className="hidden md:block" />未踏の高みを目指す
                                    </h4>
                                    <p className="text-gray-400 text-base md:text-lg leading-relaxed font-sans tracking-wide">
                                        多様なプロフェッショナルが結集し、個の足し算を超えた圧倒的な成果を生み出します。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* --- 3. 6 Leadership Principles --- */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <div className="mb-12">
                        <h3 className="text-xl md:text-2xl text-primary-light font-display tracking-widest mb-4 font-bold">
                            TRYFUNDS 6 LEADERSHIP PRINCIPLES
                        </h3>
                        <p className="text-gray-300 text-lg leading-loose font-sans tracking-wide">
                            これらの行動指針は、評価指標のみならず、パフォーマンスマネジメントサイクルにおけるフィードバックの軸となります。<br />
                            高いスキルと共に、経営人材として不可欠な「マインドセット」をこの6軸を通じて高めていきます。
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
                        {leadershipPrinciples.map((principle, index) => (
                            <div
                                key={index}
                                className="group relative bg-white/[0.02] border border-white/5 hover:border-white/20 p-8 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.04]"
                            >
                                <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary-dark/80 backdrop-blur border border-primary/30 rounded-full flex items-center justify-center text-white font-display font-bold shadow-lg">
                                    0{index + 1}
                                </div>
                                <h4 className="text-xl font-display font-bold tracking-wider text-white mb-6 pb-4 border-b border-white/10 group-hover:text-primary-light transition-colors mt-2">
                                    {principle.title}
                                </h4>
                                <div className="flex gap-4">
                                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 opacity-70 mt-1" />
                                    <p className="text-white/80 font-sans tracking-wide leading-relaxed text-sm md:text-base">
                                        {principle.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.section>

            </div>
        </main>
    );
}

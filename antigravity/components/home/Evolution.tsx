"use client";

import { motion } from "framer-motion";

export function Evolution() {
    return (
        <section className="relative py-32 bg-background overflow-hidden">
            {/* Background glow enriched */}
            <div className="absolute top-1/2 -left-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    {/* Left side text */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:sticky lg:top-40 lg:col-span-6 xl:col-span-5"
                    >
                        <div className="inline-flex items-center gap-4 mb-6">
                            <div className="h-px w-12 bg-primary/50" />
                            <h2 className="text-xs tracking-[0.3em] text-primary-light font-display">OUR EVOLUTION</h2>
                        </div>
                        <h3 className="text-3xl lg:text-4xl xl:text-[2.75rem] font-sans font-bold tracking-widest mb-8 leading-[1.5] text-white drop-shadow-lg">
                            <span className="inline-block">コンサルティングから、</span><br />
                            <span className="text-gray-400 font-medium inline-block mt-2">事業運営会社へ。</span>
                        </h3>
                        <p className="text-gray-400 leading-[2.2] tracking-wide font-sans text-sm md:text-base">
                            私たちは単なる外部アドバイザーではありません。<br />
                            コンサルティングフィーを前提とした契約に加え、<br className="hidden lg:block xl:hidden" />自らも事業リスクを取り、<br className="hidden xl:block" />
                            <strong className="text-white font-bold whitespace-nowrap">レベニューシェアモデル</strong> や <strong className="text-white font-bold whitespace-nowrap">事業投資</strong> を通じて<br className="hidden lg:block" />
                            クライアントと同じ立場で結果にコミットしています。
                            <br /><br />
                            だからこそ、私たちのコンサルティングには<br className="hidden lg:block xl:hidden" />圧倒的な当事者意識と、<br className="hidden xl:block" />実践から得たリアルな知見が宿ります。<br className="hidden xl:block" />
                            「やったことがない人間のアドバイス」ではなく、<br className="hidden lg:block" />
                            <strong className="text-white font-bold whitespace-nowrap">「自ら事業を動かす人間の提案」</strong>。<br className="hidden lg:block" />
                            それが、普通のコンサルティングファームとは決定的に異なる<br className="hidden xl:block" />私たちの価値です。
                            <br /><br />
                            現在では自らの事業と投資先の成長に直接コミットする<br className="hidden xl:block" />真の事業運営会社として、日々新たな挑戦を生み出しています。
                        </p>
                    </motion.div>

                    {/* Right side cards */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            hidden: {},
                            visible: { transition: { staggerChildren: 0.2 } }
                        }}
                        className="flex flex-col gap-6 lg:gap-8 w-full lg:col-span-6 xl:col-span-7"
                    >
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, x: -30 },
                                visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
                            }}
                            className="bg-transparent border border-white/10 p-8 md:p-12 hover-glow backdrop-blur-sm relative group overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <h4 className="text-2xl md:text-3xl font-display tracking-[0.2em] mb-6 text-white leading-relaxed">ADVISORY</h4>
                            <div className="w-12 h-px bg-primary/40 mb-8 group-hover:w-24 border border-primary/40 group-hover:bg-primary transition-all duration-500" />
                            <p className="text-gray-400 text-sm md:text-base tracking-widest mb-2 leading-[2] relative z-10 font-sans font-medium">
                                <span className="whitespace-nowrap">国内外のビジネス課題を解決する、</span><span className="whitespace-nowrap">高度な知的専門サービス。</span><br className="hidden lg:block xl:hidden" />
                                <span className="whitespace-nowrap">M&Aから事業再生まで、</span><span className="whitespace-nowrap">すべての挑戦の基盤となる</span><span className="whitespace-nowrap">ナレッジを提供します。</span>
                            </p>
                        </motion.div>

                        <motion.div
                            variants={{
                                hidden: { opacity: 0, x: 30 },
                                visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
                            }}
                            className="bg-transparent border border-white/20 p-8 md:p-12 hover-glow relative overflow-hidden group shadow-[0_0_30px_rgba(255,255,255,0.03)]"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] group-hover:bg-primary/10 transition-colors duration-700 pointer-events-none" />
                            <div className="absolute inset-0 border border-white/5 group-hover:scale-[0.99] transition-transform duration-500 pointer-events-none" />

                            <h4 className="text-2xl md:text-3xl font-display tracking-[0.2em] mb-6 text-white relative z-10 leading-relaxed">INVESTMENT & OPERATION</h4>
                            <div className="w-12 h-px bg-primary/40 mb-8 group-hover:w-32 group-hover:bg-primary transition-all duration-500 relative z-10" />
                            <p className="text-gray-300 text-sm md:text-base tracking-widest mb-2 relative z-10 leading-[2] font-sans font-medium">
                                <span className="whitespace-nowrap">自ら資金を投じ、</span><span className="whitespace-nowrap">ハンズオンで事業を牽引。</span><br className="hidden lg:block xl:hidden" />
                                <span className="whitespace-nowrap">PE/PIPES/インフラファンドの運営や、</span><span className="whitespace-nowrap">プリンシパル投資を通じて、</span><br className="hidden lg:block xl:hidden" />
                                <span className="whitespace-nowrap">企業の企業価値をダイレクトに向上させます。</span>
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

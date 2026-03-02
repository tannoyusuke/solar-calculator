"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function WhoWeAre() {
    return (
        <section className="relative py-32 bg-background overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 -left-1/4 w-[500px] h-[500px] bg-primary-dark/10 blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

                {/* Header + Main Copy */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-20 md:w-2/3"
                >
                    <div className="inline-flex items-center gap-4 mb-6">
                        <div className="h-px w-12 bg-primary/50" />
                        <h2 className="text-sm tracking-[0.3em] text-primary-light font-display">WHO WE ARE</h2>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-display font-medium tracking-widest mb-8 leading-tight text-white drop-shadow-lg">
                        コンサルティングから、<br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">事業運営会社へ。</span>
                    </h3>
                    <p className="text-gray-400 leading-loose tracking-wide font-sans text-lg">
                        私たちは単なる外部アドバイザーではありません。
                        コンサルティングフィーを前提とした契約に加え、自らも事業リスクを取り、
                        <strong className="text-white font-medium">レベニューシェアモデル</strong> や <strong className="text-white font-medium">事業投資</strong> を通じて
                        クライアントと同じ立場で結果にコミットしています。
                        <br /><br />
                        だからこそ、私たちのコンサルティングには圧倒的な当事者意識と、実践から得たリアルな知見が宿ります。
                        「やったことがない人間のアドバイス」ではなく、
                        <strong className="text-white font-medium">「自ら事業を動かす人間の提案」</strong>。
                        それが、普通のコンサルティングファームとは決定的に異なる私たちの価値です。
                        <br /><br />
                        現在では自らの事業と投資先の成長に直接コミットする真の事業運営会社として、日々新たな挑戦を生み出しています。
                    </p>
                </motion.div>

                {/* Two Cards: Advisory & Investment */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.2 } }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: -30 },
                            visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
                        }}
                        className="bg-transparent border border-white/10 p-10 hover:border-primary/40 backdrop-blur-sm relative group overflow-hidden transition-all duration-500"
                    >
                        <div className="absolute top-0 left-0 w-0 h-[2px] bg-primary-light group-hover:w-full transition-all duration-700 ease-in-out" />
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <h4 className="text-2xl font-display tracking-widest mb-4 text-white relative z-10">ADVISORY</h4>
                        <div className="w-12 h-px bg-primary/30 mb-6 group-hover:w-24 group-hover:bg-primary-light transition-all duration-500 relative z-10" />
                        <p className="text-gray-400 text-sm tracking-wider mb-6 leading-relaxed relative z-10">
                            国内外のビジネス課題を解決する、高度な知的専門サービス。
                            M&Aから事業再生まで、すべての挑戦の基盤となるナレッジを提供します。
                        </p>
                    </motion.div>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: 30 },
                            visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
                        }}
                        className="bg-white/[0.02] border border-white/20 p-10 hover:border-primary/40 relative overflow-hidden group shadow-[0_0_30px_rgba(0,0,0,0.3)] transition-all duration-500"
                    >
                        <div className="absolute top-0 left-0 w-0 h-[2px] bg-primary-light group-hover:w-full transition-all duration-700 ease-in-out" />
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-dark/10 blur-[80px] group-hover:bg-primary-dark/20 transition-colors duration-700 pointer-events-none" />

                        <h4 className="text-2xl font-display tracking-widest mb-4 text-white relative z-10">INVESTMENT & OPERATION</h4>
                        <div className="w-12 h-px bg-primary/40 mb-6 group-hover:w-32 group-hover:bg-primary-light transition-all duration-500 relative z-10" />
                        <p className="text-gray-300 text-sm tracking-wider mb-6 relative z-10 leading-relaxed">
                            自ら資金を投じ、ハンズオンで事業を牽引。
                            PE/PIPES/インフラファンドの運営や、プリンシパル投資を通じて、
                            企業の企業価値をダイレクトに向上させます。
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

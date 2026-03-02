"use client";

import { motion } from "framer-motion";

export function Evolution() {
    return (
        <section className="relative py-32 bg-background overflow-hidden">
            {/* Background glow enriched */}
            <div className="absolute top-1/2 -left-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-20 md:w-2/3"
                >
                    <div className="inline-flex items-center gap-4 mb-6">
                        <div className="h-px w-12 bg-white/50" />
                        <h2 className="text-sm tracking-[0.3em] text-white/80 font-display">OUR EVOLUTION</h2>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-display font-medium tracking-widest mb-8 leading-tight text-white drop-shadow-lg">
                        コンサルティングから、<br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">事業運営会社へ。</span>
                    </h3>
                    <p className="text-gray-400 leading-loose tracking-wide font-sans text-lg">
                        私たちは単なる外部アドバイザーではありません。
                        これまで培ってきた高度なコンサルティング能力を基盤とし、自ら事業リスクを取る
                        <strong className="text-white font-medium"> レベニューシェアモデル</strong> や <strong className="text-white font-medium">事業投資</strong> を展開しています。
                        <br />
                        <br />
                        現在では売上の50%を事業収益が占める構造へと進化を遂げ、
                        自らの事業と投資先の成長に直接コミットする真の事業運営会社として、日々新たな挑戦を生み出しています。
                    </p>
                </motion.div>

                {/* Visual Graph / Representation */}
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
                        className="bg-transparent border border-white/10 p-10 hover-glow backdrop-blur-sm relative group overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <h4 className="text-2xl font-display tracking-widest mb-4 text-white">ADVISORY</h4>
                        <div className="w-12 h-px bg-white/20 mb-6 group-hover:w-24 group-hover:bg-white/70 transition-all duration-500" />
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
                        className="bg-white/[0.02] border border-white/20 p-10 hover-glow relative overflow-hidden group shadow-[0_0_30px_rgba(255,255,255,0.03)]"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] group-hover:bg-white/20 transition-colors duration-700 pointer-events-none" />
                        <div className="absolute inset-0 border border-white/10 group-hover:scale-[0.98] transition-transform duration-500 pointer-events-none" />

                        <h4 className="text-2xl font-display tracking-widest mb-4 text-white relative z-10">INVESTMENT & OPERATION</h4>
                        <div className="w-12 h-px bg-white/50 mb-6 group-hover:w-32 group-hover:bg-white transition-all duration-500 relative z-10" />
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

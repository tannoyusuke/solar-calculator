"use client";

import { motion } from "framer-motion";

const records = [
    {
        value: "2,000",
        unit: "億円超",
        label: "出資先合計時価総額",
        description: "コンサルティングおよび投資先企業の圧倒的な成長と価値創造を実現。"
    },
    {
        value: "1",
        unit: "社",
        label: "ユニコーン企業創出",
        description: "出資先に対するコンサルティング提供から、評価額10億ドル超の企業群へと育成。"
    },
    {
        value: "1,500",
        unit: "億円超",
        label: "インフラファンド",
        description: "国内外の社会基盤を支えるエネルギープロジェクトにおけるAM総額。"
    },
    {
        value: "100",
        unit: "億円超",
        label: "PE/PIPESファンド",
        description: "未上場および上場企業へのグロース投資・バイアウト投資ファンドの運用。"
    }
];

export function TrackRecord() {
    return (
        <section className="relative py-32 bg-background overflow-hidden border-t border-white/5">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] bg-primary/5 blur-[200px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 md:mb-24"
                >
                    <div className="inline-flex items-center gap-4 mb-6">
                        <div className="h-px w-12 bg-primary/50" />
                        <h2 className="text-sm tracking-[0.3em] text-primary-light font-display">TRACK RECORD</h2>
                    </div>
                </motion.div>

                {/* Massive 1000 Projects Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                    <div>
                        <h3 className="text-5xl md:text-7xl font-display font-medium tracking-tighter mb-4 text-white drop-shadow-md leading-tight">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-corp-gray">1,000</span>
                            <span className="text-3xl md:text-4xl text-white tracking-widest ml-2">プロジェクト超</span>
                            <br className="hidden md:block" />
                            <span className="text-3xl md:text-5xl text-white tracking-widest mt-2 block">の支援実績</span>
                        </h3>
                    </div>
                    <div className="border-l border-white/10 pl-8 lg:pl-12">
                        <p className="text-gray-300 font-sans tracking-widest leading-loose md:text-lg mb-8">
                            創業から14年で、戦略アドバイザリー、M&Aアドバイザリー、世界58カ国への進出支援、新規事業立案支援、DX／AI支援、ヘッドハンティング支援、コスト削減コンサルティングなど幅広い分野を網羅。
                            <strong className="text-white font-medium block mt-4">累計1,000プロジェクト以上の実績</strong>が、ハイブリッドモデルの圧倒的な推進力を証明しています。
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="/portfolio" className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/20 hover:bg-white hover:text-black transition-all duration-300 px-6 py-3 font-display tracking-widest text-sm text-white group">
                                PORTFOLIO
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                            </a>
                            <a href="/case-study" className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/20 hover:bg-white hover:text-black transition-all duration-300 px-6 py-3 font-display tracking-widest text-sm text-white group">
                                CASE STUDY
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* 4 Stat Cards — no icons, number-driven */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.1 } }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {records.map((record, i) => (
                        <motion.div
                            key={i}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                            }}
                            className="bg-white/[0.02] border border-white/10 p-8 hover:bg-white/5 hover:border-primary/50 transition-all duration-500 group relative overflow-hidden flex flex-col h-full"
                        >
                            {/* Accent top bar on hover */}
                            <div className="absolute top-0 left-0 w-0 h-[2px] bg-white/50 group-hover:w-full transition-all duration-700 ease-in-out" />
                            {/* Highlight effect */}
                            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                            <div className="mb-4 flex-grow flex items-baseline flex-wrap">
                                <span className="text-4xl md:text-5xl font-display font-bold tracking-tighter text-white group-hover:text-primary-light transition-colors">
                                    {record.value}
                                </span>
                                <span className="text-sm font-sans text-gray-400 ml-1 font-medium whitespace-nowrap">
                                    {record.unit}
                                </span>
                            </div>

                            <div className="w-8 h-px bg-white/20 mb-4 group-hover:w-12 group-hover:bg-white/50 transition-all duration-500" />

                            <h4 className="text-lg font-bold font-sans tracking-wide mb-3 text-white">
                                {record.label}
                            </h4>

                            <p className="text-xs text-gray-400 font-sans tracking-wide leading-relaxed mt-auto">
                                {record.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const values = [
    {
        num: "01",
        title: "世界基準で\n事業機会を切り拓く",
        description: "グローバルな視点を持ち、国境を越えた事業成長の機会を発見し、現実のものとします。",
    },
    {
        num: "02",
        title: "枠にとらわれず挑戦し、\n主体者としてやりきる",
        description: "前例や既存の枠組みにとらわれず、当事者意識を持って事業の成功まで並走します。",
    },
    {
        num: "03",
        title: "チームワークで\n未踏の高みを目指す",
        description: "多様なプロフェッショナルが結集し、個の足し算を超えた圧倒的な成果を生み出します。",
    },
];

export function ValuesStrength() {
    return (
        <section className="relative py-32 bg-[#020202] overflow-hidden">
            {/* Decorative Lights */}
            <div className="absolute top-0 right-0 w-1/3 h-[500px] bg-primary/5 blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/2 h-[500px] bg-primary-dark/5 blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

                {/* Values Section (Asymmetric Layout) */}
                <div className="mb-40 flex flex-col lg:flex-row gap-16 lg:gap-24 relative">

                    {/* Sticky Header Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:w-1/3 lg:sticky lg:top-32 h-fit"
                    >
                        <div className="inline-flex items-center gap-4 mb-6">
                            <div className="h-px w-12 bg-primary/50" />
                            <h2 className="text-sm tracking-[0.3em] text-primary-light font-display">VALUES WE PROVIDE</h2>
                        </div>
                        <p className="text-3xl md:text-5xl font-display font-medium tracking-tight mb-8 text-white drop-shadow-md leading-tight">
                            共に事業を成長させるための<br />3つの価値行動
                        </p>
                        <p className="text-gray-400 font-sans leading-relaxed tracking-wide mb-8">
                            私たちは単なる外部アドバイザーではありません。クライアントとリスクを共有し、圧倒的な当事者意識で事業価値の最大化にコミットします。
                        </p>
                    </motion.div>

                    {/* Scrolling Cards Column — number-based, no icons */}
                    <div className="lg:w-2/3 flex flex-col gap-8">
                        {values.map((v, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                                className={`bg-transparent border border-white/10 p-10 md:p-14 hover:border-primary/50 transition-all duration-500 group relative overflow-hidden flex flex-col items-start backdrop-blur-sm hover:shadow-[0_10px_50px_rgba(0,78,102,0.1)] hover:-translate-y-2 ${i % 2 !== 0 ? 'lg:ml-12' : 'lg:mr-12'}`}
                            >
                                {/* Structural Accent */}
                                <div className="absolute top-0 left-0 w-0 h-[2px] bg-white/50 group-hover:w-full transition-all duration-700 ease-in-out" />
                                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary/30 group-hover:border-primary transition-colors" />
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                                <div className="relative z-10 w-full flex flex-col md:flex-row gap-8 items-start">
                                    {/* Number instead of icon */}
                                    <div className="shrink-0">
                                        <span className="text-6xl md:text-7xl font-display font-bold text-white/5 group-hover:text-primary/20 transition-colors duration-500 select-none leading-none">{v.num}</span>
                                    </div>
                                    <div>
                                        <div className="w-8 h-px bg-primary/40 mb-6 group-hover:w-16 group-hover:bg-primary-light transition-all duration-500" />
                                        <h3 className="text-xl md:text-2xl font-bold tracking-widest mb-4 font-sans whitespace-pre-line leading-relaxed text-white transition-all">
                                            {v.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm tracking-wide leading-loose font-sans group-hover:text-gray-300 transition-colors">
                                            {v.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Strength Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 40 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative border border-primary/20 overflow-hidden hover:border-primary/40 transition-all duration-700 group grid grid-cols-1 lg:grid-cols-2"
                >
                    {/* Content Side */}
                    <div className="p-10 md:p-16 lg:p-20 bg-gradient-to-br from-primary-dark/20 via-primary/10 to-transparent relative z-10 flex flex-col justify-center">
                        <h2 className="text-sm tracking-[0.3em] text-primary-light font-display mb-6 inline-block border-b border-primary/30 pb-2">
                            CORE STRENGTH
                        </h2>
                        <h3 className="text-4xl md:text-6xl font-display font-medium tracking-widest mb-8 leading-tight text-white drop-shadow-lg">
                            STRATEGIC <br /> PARTNERSHIP
                        </h3>
                        <p className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-corp-gray to-gray-400 tracking-wider font-sans mb-8 font-bold">
                            政権中枢から財閥トップへ至る<br className="hidden md:block" />真に強固なネットワーク
                        </p>
                        <p className="text-gray-400 text-base leading-relaxed tracking-wide font-sans">
                            一般的に語られる表面的なグローバルネットワークとは一線を画す、圧倒的なアクセス権。
                            各国政権の中枢や現地財閥のトップ層と直結した「真に強いネットワーク」を保有しています。
                            この独自のルートを自社事業や投資先事業にフル活用することで、他社には実現不可能な異次元のバリューアップを可能にします。
                        </p>
                    </div>

                    {/* Image Side - Government/Power/Architecture Visual */}
                    <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden min-h-[300px]">
                        <Image
                            src="/strategic_network_power.png"
                            alt="Core Power Network"
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-700 grayscale-[20%]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
                        <div className="absolute inset-0 bg-primary-dark/20 mix-blend-overlay" />
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

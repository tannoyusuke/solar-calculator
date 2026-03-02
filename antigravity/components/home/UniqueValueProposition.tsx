"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const cards = [
    {
        label: "01",
        subtitle: "vs. Consulting Firms",
        title: "当事者としての「リスク」を負う",
        description:
            "通常のアドバイザリー業務（フィービジネス）に留まらず、自らプリンシパル投資やレベニューシェアを実行。アドバイザーではなく「共同事業者」として、結果に直接コミットします。",
        image: "/uvp_street_smart_cliff.png",
    },
    {
        label: "02",
        subtitle: "Missing Parts Completion",
        title: "強力な「ミッシングパーツ補完機能」",
        description:
            "企業が成長を遂げるために不足するリソース——資金調達、経営人材の派遣、グローバルネットワークへの接続、DX/AI技術、M&Aの実行力——を包括的に調達・提供する機能を自社内に保有。単なる紹介ではなく、自社のプロフェッショナル集団が直接現場に入り込み、不足するピースを埋め、事業の完成形へと導きます。",
        image: "/images/uvp_missing_parts.png",
        details: [
            { key: "資金", value: "ファンド運用・プリンシパル投資による直接資金供給" },
            { key: "人材", value: "CxOクラスの経営人材を即座にアサイン・派遣" },
            { key: "ネットワーク", value: "世界58ヶ国のアライアンスを活用した事業機会創出" },
            { key: "技術", value: "DX/AI・デジタル変革の設計と実装支援" },
        ],
    },
    {
        label: "03",
        subtitle: "The Tryfunds Difference",
        title: "世界を繋ぐ「強力なネットワーク」",
        description:
            "世界58ヶ国以上に広がるアライアンスと情報網。これらをフル活用し、国境を越えた事業成長の機会を発見し、現実のものとします。投資先・クライアント双方に対し、グローバル規模でのバリューアップを実現する唯一無二の基盤です。",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    },
];

export function UniqueValueProposition() {
    return (
        <section className="relative py-32 bg-background overflow-hidden border-t border-white/5">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-1/2 h-[500px] bg-primary/5 blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">

                {/* Header — Left-aligned, asymmetric */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
                >
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-4 mb-6">
                            <div className="h-px w-12 bg-primary/50" />
                            <h2 className="text-sm tracking-[0.3em] text-primary-light font-display uppercase">Our Unique Approach</h2>
                        </div>
                        <h3 className="text-3xl md:text-5xl font-display font-medium tracking-tight text-white mb-6 leading-tight">
                            なぜ、私たちが選ばれるのか。<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-corp-gray">
                                唯一無二のハイブリッドモデル
                            </span>
                        </h3>
                    </div>
                    <div className="max-w-md">
                        <p className="text-gray-400 text-sm tracking-widest leading-loose">
                            一般的なコンサルティングファームや投資ファンドとは一線を画す、圧倒的な実行力とコミットメント。
                        </p>
                    </div>
                </motion.div>

                {/* Cards — image-driven, no icons */}
                <div className="flex flex-col gap-12">
                    {cards.map((card, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            className={`group grid grid-cols-1 lg:grid-cols-2 gap-0 border border-white/10 overflow-hidden hover:border-primary/40 transition-all duration-500 ${i % 2 !== 0 ? 'lg:direction-rtl' : ''}`}
                        >
                            {/* Image Side */}
                            <div className={`relative aspect-[4/3] lg:aspect-auto overflow-hidden ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-background/60" />
                                <div className="absolute bottom-4 left-4 z-10">
                                    <span className="text-[10px] tracking-[0.4em] text-white/50 font-display uppercase border border-white/20 px-3 py-1 bg-background/50 backdrop-blur-sm">
                                        {card.subtitle}
                                    </span>
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className={`p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white/[0.02] relative ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                                {/* Hover glow */}
                                <div className="absolute top-0 left-0 w-0 h-1 bg-white/50 group-hover:w-full transition-all duration-700 ease-in-out" />

                                <span className="text-5xl md:text-7xl font-display font-bold text-white/5 mb-6 select-none">{card.label}</span>

                                <h4 className="text-[1.05rem] sm:text-xl lg:text-2xl xl:text-3xl font-bold font-sans tracking-tight mb-6 text-white leading-tight whitespace-nowrap">
                                    {card.title}
                                </h4>

                                <p className="text-sm text-gray-400 leading-relaxed font-sans mb-8 tracking-wide">
                                    {card.description}
                                </p>

                                {/* Detail list for missing parts card */}
                                {card.details && (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/10">
                                        {card.details.map((d, idx) => (
                                            <div key={idx} className="flex flex-col gap-1">
                                                <span className="text-xs font-display tracking-[0.3em] text-primary-light uppercase font-bold">{d.key}</span>
                                                <span className="text-xs text-gray-400 font-sans leading-relaxed">{d.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}

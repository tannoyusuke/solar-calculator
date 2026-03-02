"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ConversionCTA } from "@/components/layout/ConversionCTA";
import { EnvisionGraphic } from "@/components/ui/EnvisionGraphic";
import { ArrowRight } from "lucide-react";

const services = [
    {
        title: "Investment & Incubation",
        subtitle: "事業投資 / ファンド運営",
        description: "自己資金による直接投資、ならびに子会社を通じた投資ファンド（PE/PIPES/インフラファンド）の運営を実施。単なるアセットマネジメントではなく、コンサルティングナレッジをフル活用したハンズオン型のバリューアップを行い、投資先の劇的な企業価値向上を実現します。",
        tags: ["Principal Investment", "PE Fund", "PIPES", "Infrastructure Fund"]
    },
    {
        title: "Business Advisory & Strategy",
        subtitle: "経営戦略・新規事業コンサルティング",
        description: "クライアントの事業責任者と同じ目線に立ち、深い業界知見と実行力を武器に経営課題を解決します。新規事業の立ち上げから事業再生まで、計画策定のみならず「自ら事業を動かす」当事者として現場に介入し、レベニューシェア等を通じて結果に強くコミットします。",
        tags: ["Growth Strategy", "Business Incubation", "Turnaround", "DX / AI"]
    },
    {
        title: "M&A Advisory",
        subtitle: "M&A / パートナーシップ支援",
        description: "事業戦略上の「Missing parts（欠落要素）」を埋めるためのノンオーガニック成長戦略を支援。国内外の独自のネットワークを駆使し、単なるマッチングにとどまらない、事業シナジーを最大化するM&AのソーシングからPMIまでを一貫して実行します。",
        tags: ["Sourcing", "Execution", "PMI", "Alliance"]
    },
    {
        title: "Global Expansion",
        subtitle: "海外進出・グローバル展開支援",
        description: "過去58カ国におよぶ進出支援実績を基に、日系企業のグローバルな挑戦を強力にバックアップ。現地財閥や政府機関とのトップネットワークを活用し、市場調査から現地法人設立、クロスボーダーM&A、ローカルパートナーとのJV組成までを主導します。",
        tags: ["Market Entry", "Cross-border M&A", "JV Setup", "Global Strategy"]
    },
    {
        title: "Executive Search & HR",
        subtitle: "経営人材・グローバル人材ヘッドハンティング",
        description: "事業の飛躍に不可欠な「人材」のピースを迅速に補完します。外部調達（RPO）にとどまらず、必要に応じて当社からCEO/COOクラスを直接派遣。自力で走れる組織構築までを支援し、クライアントの実行力を根本から引き上げます。",
        tags: ["Executive Search", "RPO", "Management Dispatch", "Organization Building"]
    },
    {
        title: "Cost Reduction",
        subtitle: "大規模コストダウン・調達最適化",
        description: "BPRやDX化にとどまらず、物資やエネルギーの調達戦略再策定により大規模なコスト削減を実現します。現場の無駄を省くだけでなく、サプライチェーン全体を抜本的に見直し、利益率の飛躍的向上に直結する施策を実行します。",
        tags: ["Cost Reduction", "Procurement Optimization", "BPR", "Supply Chain"]
    },
    {
        title: "Marketing & PR Support",
        subtitle: "マーケティング・PR支援",
        description: "優れた技術やサービスを市場に浸透させるための包括的なマーケティング戦略を立案・実行します。デジタルマーケティングからマスメディアを活用したPRまで、ブランド認知の最大化と顧客獲得に向けた最適なチャネル構築を支援します。",
        tags: ["Marketing Strategy", "Public Relations", "Brand Awareness", "Digital Marketing"]
    }
];

export default function ServicesPage() {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-background relative overflow-hidden">
            {/* Ambient Backgrounds */}
            <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] mix-blend-screen pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-primary-dark/10 blur-[150px] mix-blend-screen pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

                {/* Header Sequence */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 text-center md:text-left"
                >
                    <div className="inline-flex items-center justify-center md:justify-start gap-4 mb-6 w-full md:w-auto">
                        <div className="h-px w-12 bg-primary/50" />
                        <h2 className="text-sm tracking-[0.3em] text-primary-light font-display">OUR SERVICES</h2>
                        <div className="h-px w-12 bg-primary/50 md:hidden" />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-sans font-bold tracking-widest text-white mb-8 leading-tight drop-shadow-lg">
                        事業の進化を、<br className="hidden md:block" />
                        直接ドライブする。
                    </h1>
                    <p className="text-gray-400 font-sans tracking-wide leading-relaxed text-lg max-w-3xl">
                        Tryfundsは、従来のアドバイザリーの枠組みを超え、<br className="hidden md:block" />
                        自らリスクを取り、事業運営主体として企業のバリューアップを牽引します。
                    </p>
                </motion.div>

                {/* The Tryfunds Model (Missing Parts Completion) */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-32"
                >
                    <div className="bg-white/[0.02] border border-white/5 p-8 md:p-16 relative overflow-hidden group">

                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer z-0 pointer-events-none transition-all duration-1000" />

                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h3 className="text-xs tracking-[0.3em] text-primary-light font-display mb-4">THE TRYFUNDS MODEL</h3>
                                <h4 className="text-3xl md:text-5xl font-sans font-bold text-white mb-8 leading-tight tracking-wide">
                                    Envision &<br />
                                    Missing Parts Completion
                                </h4>
                                <div className="space-y-6 text-gray-400 font-sans tracking-wide leading-relaxed text-base">
                                    <p>
                                        私たちが提供するサービスの根幹にあるのが、<strong>「Envision（目標の再定義）」</strong>と<strong>「Missing Parts Completion（欠落要素の補完）」</strong>という独自の事業推進モデルです。
                                    </p>
                                    <p>
                                        まず、クライアントと共に現状の延長線上にはない、より高みを目指す強力なビジョンと戦略（Envision）を描き出します。
                                    </p>
                                    <p>
                                        そして、その途方もない目標を現実のものにするために不足している要素—<strong className="text-white">【資金】【人材】【ネットワーク】【技術】</strong>—を、机上の空論ではなく「Tryfunds自身が直接供給・補完」します。このサイクルを高速回転させることで、クライアントに非連続な成長をもたらします。
                                    </p>
                                </div>
                            </div>

                            {/* Graphic Side */}
                            <div className="relative w-full aspect-[4/3] md:aspect-auto md:h-full flex items-center justify-center">
                                <EnvisionGraphic />
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Fee Model Section */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-32"
                >
                    <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 p-8 md:p-12 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

                        <div className="flex flex-col md:flex-row gap-12 items-start md:items-center relative z-10">
                            <div className="md:w-1/3">
                                <h3 className="text-xs tracking-[0.3em] text-primary-light font-display mb-4 uppercase">Fee Model</h3>
                                <h4 className="text-3xl md:text-4xl font-sans font-bold text-white mb-4 tracking-wide">
                                    事業成功への<br />コミットメント
                                </h4>
                            </div>
                            <div className="md:w-2/3 space-y-6 text-gray-400 font-sans tracking-wide leading-relaxed text-base">
                                <p>
                                    Tryfundsは単なる外部アドバイザリーとしてではなく、共同事業運営者としての立ち位置を重視しています。当社自らが主体となって運営した場合においても、確実に成果を上げられると確信した案件を中心にプロジェクト化することを前提としています。
                                </p>
                                <p>
                                    そのため、事業成功に向けて同じ方向性で尽力する証として、成功時の果実の一部を共有する契約形態を積極的に採用しています。
                                </p>
                                <div className="p-6 bg-black/40 border border-white/5 rounded-sm">
                                    <ul className="space-y-4 text-gray-300">
                                        <li className="flex items-start gap-3">
                                            <span className="mt-1 w-1.5 h-1.5 bg-primary-light rounded-full shrink-0" />
                                            <span>
                                                <strong className="text-white">ベースフィー ＋ アップサイド享受型:</strong><br />
                                                基本となる人月チャージ型のフィーに加え、事業成長のアップサイドをレベニューシェア、プロフィットシェア、成功報酬などの形で得る成果連動型の契約モデル。
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="mt-1 w-1.5 h-1.5 bg-primary-light rounded-full shrink-0" />
                                            <span>
                                                <strong className="text-white">ベースフィー ＋ エクイティ・SO享受型:</strong><br />
                                                基本となるフィーに加え、クライアントと文字通り「同じ船の乗組員」となるため、案件によっては株式取得やSO（ストックオプション）付与による資本参加を伴うハンズオン支援を実施します。
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Specific Capabilities List */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className="flex flex-col mb-16">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-px w-8 bg-white/20" />
                            <h3 className="text-xl tracking-[0.2em] text-white font-display">CAPABILITIES</h3>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-sans font-bold text-white leading-tight tracking-widest pl-12 border-l-2 border-primary-light">
                            できることが多いのではない。<br />
                            勝たせるために、必要なことを全部やる。
                        </h2>
                        <p className="mt-6 text-gray-400 font-sans tracking-wide leading-relaxed pl-12 max-w-3xl">
                            戦略から実行、ファイナンスからテクノロジーまで。事業成長に必要なあらゆる機能を内製化し、シームレスに提供します。
                        </p>
                    </div>

                    <div className="space-y-6">
                        {services.map((service, idx) => (
                            <div
                                key={idx}
                                className="group relative border border-white/10 bg-white/[0.01] hover:bg-white/[0.03] hover:border-primary/30 transition-all duration-500 overflow-hidden"
                            >
                                {/* Accent Line */}
                                <div className="absolute left-0 top-0 w-1 h-full bg-primary-light transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out" />

                                <div className="p-8 md:p-12 lg:pr-24 flex flex-col md:flex-row gap-10 items-start">
                                    {/* Number / Title Block */}
                                    <div className="md:w-1/3 shrink-0">
                                        <span className="text-primary-light/50 font-display text-sm tracking-[0.2em] block mb-4">
                                            {String(idx + 1).padStart(2, '0')}
                                        </span>
                                        <h4 className="text-2xl md:text-3xl font-display font-medium text-white mb-3">
                                            {service.title}
                                        </h4>
                                        <p className="text-sm font-sans text-gray-400 tracking-wider">
                                            {service.subtitle}
                                        </p>
                                    </div>

                                    {/* Description & Tags Block */}
                                    <div className="md:w-2/3">
                                        <p className="text-gray-300 font-sans leading-loose tracking-wide mb-8">
                                            {service.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {service.tags.map((tag, tagIdx) => (
                                                <span
                                                    key={tagIdx}
                                                    className="text-xs font-sans text-white/60 border border-white/10 px-3 py-1 bg-white/5"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Decorative Arrow */}
                                    <div className="absolute right-12 top-1/2 -translate-y-1/2 text-white/10 group-hover:text-primary-light group-hover:translate-x-2 transition-all duration-500 hidden lg:block">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* Bottom Cross Links */}
                <section className="mt-32 pt-24 border-t border-white/10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                        <Link href="/case-study" className="group block relative overflow-hidden bg-white/[0.02] border border-white/10 hover:border-primary/40 transition-all duration-500 p-12">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px] group-hover:bg-primary/30 transition-colors" />
                            <h3 className="text-sm tracking-[0.3em] text-primary-light font-display uppercase mb-4">Client Stories</h3>
                            <h4 className="text-3xl font-display font-bold text-white mb-6">Case Study</h4>
                            <p className="text-gray-400 font-sans leading-relaxed mb-8">
                                Tryfundsが介入し、非連続な成長と劇的なバリューアップを実現した企業の舞台裏をご紹介します。
                            </p>
                            <div className="flex items-center text-white/50 group-hover:text-primary-light transition-colors font-display tracking-widest text-xs font-bold">
                                <span>VIEW CASES</span>
                                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" />
                            </div>
                        </Link>

                        <Link href="/portfolio" className="group block relative overflow-hidden bg-white/[0.02] border border-white/10 hover:border-primary/40 transition-all duration-500 p-12">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px] group-hover:bg-primary/30 transition-colors" />
                            <h3 className="text-sm tracking-[0.3em] text-primary-light font-display uppercase mb-4">Investment Track Record</h3>
                            <h4 className="text-3xl font-display font-bold text-white mb-6">Portfolio</h4>
                            <p className="text-gray-400 font-sans leading-relaxed mb-8">
                                クライアントとの共同事業や、自社ファンドを通じたプリンシパル投資のポートフォリオ企業をご紹介します。
                            </p>
                            <div className="flex items-center text-white/50 group-hover:text-primary-light transition-colors font-display tracking-widest text-xs font-bold">
                                <span>VIEW PORTFOLIO</span>
                                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" />
                            </div>
                        </Link>
                    </div>

                    <ConversionCTA />
                </section>

            </div>
        </div>
    );
}

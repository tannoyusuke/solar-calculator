"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowDown } from "lucide-react";
import Link from "next/link";
import { CareersPlan } from "@/components/recruit/CareersPlan";
import { ConversionCTA } from "@/components/layout/ConversionCTA";

const careerProgression = [
    {
        phase: "Play",
        sub: "（守）",
        roles: "ANALYST / ASSOCIATE / SENIOR ASSOCIATE",
        points: [
            "顧客の本質的課題を理解し、最短でインパクトある解決策を提示できる。",
            "未知の領域でも自己研鑽を重ね、第一人者たる領域をつくろうと努力できる。"
        ]
    },
    {
        phase: "Drive",
        sub: "（破）",
        roles: "ENGAGEMENT MANAGER / VICE PRESIDENT",
        points: [
            "対象事業がより大きな収益をあげるビジネスモデル・新サービスを創出・提供できる。",
            "自ら先頭に立って未知の領域への挑戦機会を創り出し、メンバーを鼓舞・育成できる。"
        ]
    },
    {
        phase: "Lead",
        sub: "（離）",
        roles: "PRINCIPAL / MANAGING DIRECTOR",
        points: [
            "社会に変革をもたらす、今までにない事業・サービスを創造することができる。",
            "Tryfundsに関わる誰もが人生をかけて実現したい夢を持てる環境をつくることができる。"
        ]
    }
];

const philosophyBlocks = [
    {
        num: "01",
        title: "「ストリート・スマート」",
        subtitle: "Adaptation to Street Smart",
        description: "Associateレベルまでは、体系立てられたインプットと手取り足取りのスキルアップが約束されます。しかし、Senior Associate層以上では「机上の空論（ブック・スマート）」からの完全な脱却が求められます。変化が激しく戦略の賞味期限が短い現代において、新たなテクノロジーの受容や素早い決断こそが成否を分けます。未知の事業領域であっても、自らの足で仮説を構築し、泥臭く解を見つけ出し、実社会で生き抜く「要領の良さ」と「実践的なセンス」を持ったストリート・スマートな人材集団を私たちは目指しています。"
    },
    {
        num: "02",
        title: "コンサル × 事業のデュアルジョブ",
        subtitle: "Breaking the Consulting Dilemma",
        description: "一般的なコンサルティング企業では、スキルと報酬は上がっても「自ら事業に挑戦する機会」が与えられず、結果として高給のまま事業を動かせないジレンマに陥るケースが多々あります。Tryfundsでは、自社事業としてのハンズオン介入と、純粋なクライアントサービスの両輪を経験する環境を提供します。コンサルティングから抜け出し、真の事業マネジメントへと至る不可逆の経験値を与えます。"
    },
    {
        num: "03",
        title: "フィーではなく「P&Lと時価総額」へのコミットメント",
        subtitle: "Commitment to P&L and Market Cap",
        description: "クライアントへの価値提供に基づいたフィービジネスに留まらず、ハンズオン事業再生や自社投資プロジェクトにおいては「P&L（損益計算書）の改善」および「時価総額の大幅な向上」という生々しい企業価値への直接的なインパクトが最も重要視されます。自らリスクと責任を負い、実業に果実をもたらしたかどうかが評価の全てであり、この本番環境こそが次世代の経営人材を育てます。"
    },
    {
        num: "04",
        title: "多様な人材を率いる「真のマネジメント力」",
        subtitle: "True Management: Leading Diverse Talent",
        description: "同質的で優秀なプロフェッショナルばかりが集まるファーム内でのマネジメントと、事業会社のマネジメントは完全に異なります。事業会社に入り込み機能させるためには、多様なバックグラウンドや専門性を持たないメンバーをも巻き込み、モチベートして成果を出させる泥臭いリーダシップが不可欠です。Tryfundsの最前線では、現場の人心を読み解き、彼らに本気で働いてもらうための「人間への深い洞察」と「組織深部への介入能力」が養われます。"
    },
    {
        num: "05",
        title: "「キャッシュと胆力」を鍛え上げる戦線",
        subtitle: "The Frontline forging Cash and Grit",
        description: "会社の存続を決定づけるのは、最終的には「キャッシュ」というリアルな数字です。アドバイザリーの基本スキルを習得するだけでなく、実際に事業会社のバリューアップを実現するための最前線の営業・マーケティング、そして過酷な資金繰りを含むマネジメント経験を積むことになります。不確実性の高い荒波の中で未知の課題に直面し、それでも逃げずに会社を支え切る「企画力」と「圧倒的な胆力」を持った人材こそが、次の世界を創ると信じています。"
    }
];

export function CareersClient({ dict, lang }: { dict: any, lang: string }) {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-background">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <Link href={`/${lang}/recruit`} className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-12">
                    <ArrowLeft size={16} />
                    {dict.careers.header.backBtn}
                </Link>

                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-32"
                >
                    <div className="inline-flex items-center gap-4 mb-6">
                        <div className="h-px w-12 bg-primary/50" />
                        <h2 className="text-sm tracking-[0.3em] text-primary/80 font-display uppercase">{dict.careers.header.subtitle}</h2>
                    </div>
                    <h1
                        className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tight mb-8 leading-tight"
                        dangerouslySetInnerHTML={{ __html: dict.careers.header.title }}
                    />
                    <p
                        className="text-lg md:text-xl text-gray-300 font-sans tracking-wide leading-relaxed max-w-3xl"
                        dangerouslySetInnerHTML={{ __html: dict.careers.header.description }}
                    />
                </motion.div>

                {/* Career Path Flow */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-32 bg-white/[0.02] border border-white/10 p-8 md:p-12 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
                    <h3 className="text-2xl font-bold font-sans tracking-tight mb-4 text-white">
                        {dict.careers.flow.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-300 font-sans tracking-[0.02em] leading-relaxed mb-12 max-w-2xl">
                        {dict.careers.flow.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-4">
                        {dict.careers.flow.steps.map((step: any, idx: number) => (
                            <div key={idx} className="bg-white/[0.02] border border-white/5 p-8 flex flex-col items-start relative overflow-hidden group hover:border-primary/20 transition-colors duration-500 min-h-[340px]">
                                {/* Subtle glowing gradient top line on hover */}
                                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/30 to-primary-light/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                <div className="flex items-baseline gap-3 mb-3">
                                    <h4 className="text-[32px] font-display font-bold text-white tracking-tight leading-none">{step.phase}</h4>
                                    <span className="text-[#3ea2a9] font-medium text-[15px]">{step.sub}</span>
                                </div>

                                <p className="text-[11px] text-gray-400 font-display tracking-[0.15em] leading-[1.8] mb-8 w-11/12 uppercase">
                                    {step.roles}
                                </p>

                                <div className="w-full h-px bg-white/5 mb-8" />

                                <ul className="space-y-6">
                                    {step.points.map((point: string, i: number) => (
                                        <li key={i} className="flex items-start gap-4">
                                            {/* Cyan triangular Play Icon bullet */}
                                            <div className="mt-[6px] flex-shrink-0">
                                                <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-[#1E90FF] border-b-[5px] border-b-transparent shadow-[0_0_8px_rgba(30,144,255,0.4)]" />
                                            </div>
                                            <p className="text-sm text-gray-300 leading-[1.8] font-sans tracking-[0.02em]">{point}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Philosophy Blocks */}
                <div className="mb-32 space-y-32">
                    {dict.careers.philosophy.map((block: any, idx: number) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-start ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                        >
                            <div className="lg:w-1/3 flex flex-col pt-2 relative">
                                <div className="text-[120px] leading-none font-display font-black text-white/5 absolute -top-12 -left-8 -z-10 select-none">
                                    {block.num}
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold font-sans tracking-tight mb-3 text-white">
                                    {block.title}
                                </h3>
                                <p className="text-sm font-display tracking-widest text-primary uppercase mb-6 drop-shadow-[0_0_8px_rgba(0,118,130,0.5)]">
                                    {block.subtitle}
                                </p>
                            </div>
                            <div className="lg:w-2/3 bg-transparent border-l border-white/10 pl-8 lg:pl-12 hover:border-primary/50 transition-colors duration-500 relative">
                                <p className="text-base md:text-lg text-gray-300 font-sans leading-loose relative z-10 w-full mb-8">
                                    {block.description}
                                </p>

                                {/* Injection of Reward Cycle in Philosophy 02 */}
                                {block.num === "02" && (
                                    <div className="mt-12 bg-white/[0.03] border border-white/10 p-6 flex flex-col sm:flex-row items-center justify-between text-center gap-4">
                                        <div className="flex-1 min-w-[120px]">
                                            <p className="text-xs text-gray-400 font-sans mb-1">{dict.careers.philosophy02Chart.rewardPhase}</p>
                                            <p className="text-sm font-bold text-white">{dict.careers.philosophy02Chart.rewardTitle}</p>
                                        </div>
                                        <ArrowRight className="hidden sm:block text-primary/50 w-5 h-5 flex-shrink-0" />
                                        <ArrowDown className="sm:hidden text-primary/50 w-5 h-5" />
                                        <div className="flex-1 min-w-[120px]">
                                            <p className="text-xs text-gray-400 font-sans mb-1">{dict.careers.philosophy02Chart.investmentPhase}</p>
                                            <p className="text-sm font-bold text-white">{dict.careers.philosophy02Chart.investmentTitle}</p>
                                        </div>
                                        <ArrowRight className="hidden sm:block text-primary/50 w-5 h-5 flex-shrink-0" />
                                        <ArrowDown className="sm:hidden text-primary/50 w-5 h-5" />
                                        <div className="flex-1 min-w-[120px]">
                                            <p className="text-xs text-primary font-sans mb-1">{dict.careers.philosophy02Chart.returnPhase}</p>
                                            <p className="text-sm font-bold text-primary w-full break-words">{dict.careers.philosophy02Chart.returnTitle}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Refined Compensation Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <div className="mb-16">
                        <h2
                            className="text-3xl md:text-4xl font-bold font-sans tracking-tight mb-8 text-white"
                            dangerouslySetInnerHTML={{ __html: dict.careers.compensation.title }}
                        />

                        {/* Compensation Formula Visual */}
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 bg-white/[0.03] border border-white/10 rounded-xl p-6 mb-12 shadow-[0_0_30px_rgba(0,136,163,0.1)]">
                            <span className="text-sm md:text-base font-bold text-gray-300 tracking-widest whitespace-nowrap">{dict.careers.compensation.formula.base}</span>
                            <span className="text-2xl text-primary font-light">＋</span>
                            <span className="text-sm md:text-base font-bold text-white tracking-widest whitespace-nowrap">{dict.careers.compensation.formula.bonus}</span>
                            <span className="text-2xl text-primary font-light">＋</span>
                            <span className="text-sm md:text-base font-bold text-primary-light tracking-widest whitespace-nowrap drop-shadow-[0_0_8px_rgba(0,210,211,0.5)]">{dict.careers.compensation.formula.incentive}</span>
                        </div>

                        <p className="text-gray-300 font-sans max-w-4xl leading-[2.2] text-sm md:text-base tracking-[0.02em]">
                            {dict.careers.compensation.description}
                        </p>
                    </div>

                    {/* Evaluation System */}
                    <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-[#0a0f12]/80 backdrop-blur-xl border border-white/10 p-8 rounded-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10" />
                            <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">{dict.careers.compensation.system.title}</h3>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="flex-1 bg-white/[0.03] p-4 text-center rounded-lg border border-white/5 flex items-center justify-center min-h-[64px]">
                                    <p className="font-bold text-white tracking-wide">{dict.careers.compensation.system.part1}</p>
                                </div>
                                <span className="text-xl text-primary font-bold">＋</span>
                                <div className="flex-1 bg-white/[0.03] p-4 text-center rounded-lg border border-white/5 flex items-center justify-center min-h-[64px]">
                                    <p className="font-bold text-white tracking-wide">{dict.careers.compensation.system.part2}</p>
                                </div>
                            </div>
                            <div className="text-center py-3 bg-gradient-to-r from-primary-dark/50 to-primary/50 text-white font-bold rounded-lg border border-primary/30 shadow-[0_0_15px_rgba(0,136,163,0.3)]">
                                {dict.careers.compensation.system.result}
                            </div>
                        </div>

                        <div className="bg-[#0a0f12]/80 backdrop-blur-xl border border-white/10 p-8 rounded-2xl relative overflow-hidden group hover:border-primary/50 transition-colors duration-500">
                            <div className="absolute top-0 right-0 w-48 h-48 bg-primary-light/10 rounded-full blur-3xl -z-10 group-hover:bg-primary-light/20 transition-all duration-700" />
                            <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">{dict.careers.compensation.conditions.title}</h3>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="w-2 h-2 rounded-full bg-white mt-2 shrink-0" />
                                    <div>
                                        <p className="font-bold text-white text-base">{dict.careers.compensation.conditions.items[0].title}</p>
                                        <p className="text-sm text-gray-400 mt-1">{dict.careers.compensation.conditions.items[0].desc}</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-2 h-2 rounded-full bg-primary-light shadow-[0_0_8px_rgba(0,210,211,0.8)] mt-2 shrink-0" />
                                    <div>
                                        <p className="font-bold text-primary-light text-base drop-shadow-[0_0_5px_rgba(0,210,211,0.5)]">{dict.careers.compensation.conditions.items[1].title}</p>
                                        <p className="text-sm text-gray-300 mt-1">{dict.careers.compensation.conditions.items[1].desc}</p>
                                        <div className="mt-3 inline-block px-3 py-1 bg-primary/20 border border-primary/50 rounded text-xs font-bold text-white">
                                            {dict.careers.compensation.conditions.items[1].badge}
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Reward Ratio Pie Charts */}
                    <div className="bg-gradient-to-b from-[#0a0f12] to-background border border-white/5 p-8 md:p-12 rounded-2xl relative overflow-hidden">
                        {/* Background atmospheric glows */}
                        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

                        <div className="mb-12 text-center">
                            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-4">{dict.careers.compensation.charts.title}</h3>
                            <p className="text-sm md:text-base text-gray-400">{dict.careers.compensation.charts.description}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
                            {dict.careers.compensation.charts.items.map((chartItem: any, idx: number) => {
                                // Keep the hardcoded colors/gradients based on index
                                const highlights = [
                                    { gradient: "conic-gradient(rgba(255,255,255,0.2) 0% 90%, #0088A3 90% 100%)", highlight: false, colors: ["bg-white/20", "bg-primary"] },
                                    { gradient: "conic-gradient(rgba(255,255,255,0.2) 0% 80%, #0088A3 80% 90%, #ef4444 90% 100%)", highlight: false, colors: ["bg-white/20", "bg-primary", "bg-red-500"] },
                                    { gradient: "conic-gradient(rgba(255,255,255,0.2) 0% 30%, #0088A3 30% 50%, #ef4444 50% 100%)", highlight: true, colors: ["bg-white/20", "bg-primary", "bg-red-500"] },
                                ];
                                const conf = highlights[idx];
                                return (
                                    <div key={idx} className={`flex flex-col items-center relative ${conf.highlight ? 'scale-105' : ''}`}>
                                        {conf.highlight && (
                                            <div className="absolute -inset-6 bg-primary/5 rounded-2xl blur-xl -z-10" />
                                        )}
                                        <h4 className="text-xl font-bold text-white mb-2">{chartItem.phase}</h4>
                                        <p className="text-xs text-gray-500 mb-8 font-sans">{chartItem.desc}</p>

                                        {/* CSS Donut Chart */}
                                        <div className="relative w-40 h-40 mb-8 group hover:scale-105 transition-transform duration-500">
                                            <div
                                                className="w-full h-full rounded-full drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
                                                style={{ background: conf.gradient }}
                                            />
                                            {/* Donut Hole */}
                                            <div className="absolute inset-4 bg-[#0d1316] rounded-full flex flex-col items-center justify-center">
                                                {conf.highlight && (
                                                    <div className="absolute inset-0 bg-primary-light/10 rounded-full blur-md" />
                                                )}
                                            </div>
                                        </div>

                                        {/* Legend */}
                                        <div className="w-full max-w-[200px] flex flex-col gap-3 text-sm font-sans">
                                            {chartItem.data.map((item: any, i: number) => (
                                                <div key={i} className="flex items-center justify-between">
                                                    <div className="flex items-center gap-2">
                                                        <div className={`w-3 h-3 rounded-full ${conf.colors[i]} shadow-sm`} />
                                                        <span className={item.label === dict.careers.compensation.formula.incentive ? 'text-white font-medium' : 'text-gray-300'}>{item.label}</span>
                                                    </div>
                                                    <span className="font-bold text-gray-200">{item.value}%</span>
                                                </div>
                                            ))}
                                        </div>
                                        {chartItem.note && (
                                            <p className="text-[10px] text-gray-500 mt-4 text-center">{chartItem.note}</p>
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </motion.div>
            </div>

            <CareersPlan dict={dict.careers.plan} />
            <ConversionCTA dict={dict.shared?.conversionCTA} />
        </div>
    );
}

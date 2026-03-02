"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowDown } from "lucide-react";
import Link from "next/link";
import { CareersPlan } from "@/components/recruit/CareersPlan";
import { ConversionCTA } from "@/components/layout/ConversionCTA";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/lib/i18n-config";

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

export default async function CareersPage({ params: { lang } }: { params: { lang: Locale } }) {
    const dict = await getDictionary(lang);
    return (
        <div className="pt-32 pb-24 min-h-screen bg-background">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <Link href="/recruit" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-12">
                    <ArrowLeft size={16} />
                    Back to Recruit
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
                        <h2 className="text-sm tracking-[0.3em] text-primary/80 font-display uppercase">Careers & Philosophy</h2>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tight mb-8 leading-tight">
                        経営人材としての<br />真のキャリアパス
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 font-sans tracking-wide leading-relaxed max-w-3xl">
                        高給なコンサルタントで満足するか、実業を牽引する経営人材・ファンドマネージャーへと昇華するか。<br />
                        Tryfundsは、圧倒的なプロフェッショナリズムと「泥臭い手触り感」を通じて、本番環境で戦える絶対的なリーダー層を育成します。
                    </p>
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
                        Play, Drive, Lead
                    </h3>
                    <p className="text-sm md:text-base text-gray-300 font-sans tracking-[0.02em] leading-relaxed mb-12 max-w-2xl">
                        Play・Drive・Leadの3つの等級を通じて、自ら考え行動し、チームを牽引し、最終的に事業と社会に変革をもたらす「経営人材」へと昇華することを目指します。
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-4">
                        {careerProgression.map((step, idx) => (
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
                                    {step.points.map((point, i) => (
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
                    {philosophyBlocks.map((block, idx) => (
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
                                            <p className="text-xs text-gray-400 font-sans mb-1">仕事の報酬</p>
                                            <p className="text-sm font-bold text-white">圧倒的な成果</p>
                                        </div>
                                        <ArrowRight className="hidden sm:block text-primary/50 w-5 h-5 flex-shrink-0" />
                                        <ArrowDown className="sm:hidden text-primary/50 w-5 h-5" />
                                        <div className="flex-1 min-w-[120px]">
                                            <p className="text-xs text-gray-400 font-sans mb-1">新たな投下</p>
                                            <p className="text-sm font-bold text-white">より巨大な未知の領域</p>
                                        </div>
                                        <ArrowRight className="hidden sm:block text-primary/50 w-5 h-5 flex-shrink-0" />
                                        <ArrowDown className="sm:hidden text-primary/50 w-5 h-5" />
                                        <div className="flex-1 min-w-[120px]">
                                            <p className="text-xs text-primary font-sans mb-1">劇的リターン</p>
                                            <p className="text-sm font-bold text-primary w-full break-words">経験値と巨額の報酬</p>
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
                        <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight mb-8 text-white">
                            事業収益に基づく<span className="text-primary-light">青天井のリターン</span>の設計
                        </h2>

                        {/* Compensation Formula Visual */}
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 bg-white/[0.03] border border-white/10 rounded-xl p-6 mb-12 shadow-[0_0_30px_rgba(0,136,163,0.1)]">
                            <span className="text-sm md:text-base font-bold text-gray-300 tracking-widest whitespace-nowrap">固定給</span>
                            <span className="text-2xl text-primary font-light">＋</span>
                            <span className="text-sm md:text-base font-bold text-white tracking-widest whitespace-nowrap">全社業績連動賞与</span>
                            <span className="text-2xl text-primary font-light">＋</span>
                            <span className="text-sm md:text-base font-bold text-primary-light tracking-widest whitespace-nowrap drop-shadow-[0_0_8px_rgba(0,210,211,0.5)]">特別インセンティブ（事業収益連動）</span>
                        </div>

                        <p className="text-gray-300 font-sans max-w-4xl leading-[2.2] text-sm md:text-base tracking-[0.02em]">
                            コンサルティング業界水準となる固定給に加え、事業家・投資家としての成果にダイレクトに紐づく「青天井のアップサイド（インセンティブ）」を用意しています。通常、コンサルティングファームでのインセンティブは、全社収益の基づく分配となり、PEファンドでは、キャリー報酬の分配が基本となります。当社ではP&Lに事業収益でのインパクトを与えた人材には、更なるインセンティブの分配を行います。この制度により、真に顧客と同じ方向を向いた支援が可能になります。将来的には、事業成功インセンティブを積み上げていくことで、グローバルPEファンドに匹敵する報酬を還元することを目指しています。
                        </p>
                    </div>

                    {/* Evaluation System */}
                    <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-[#0a0f12]/80 backdrop-blur-xl border border-white/10 p-8 rounded-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10" />
                            <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">評価制度</h3>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="flex-1 bg-white/[0.03] p-4 text-center rounded-lg border border-white/5 flex items-center justify-center min-h-[64px]">
                                    <p className="font-bold text-white tracking-wide">成果に対する評価</p>
                                </div>
                                <span className="text-xl text-primary font-bold">＋</span>
                                <div className="flex-1 bg-white/[0.03] p-4 text-center rounded-lg border border-white/5 flex items-center justify-center min-h-[64px]">
                                    <p className="font-bold text-white tracking-wide">6つの要素による評価</p>
                                </div>
                            </div>
                            <div className="text-center py-3 bg-gradient-to-r from-primary-dark/50 to-primary/50 text-white font-bold rounded-lg border border-primary/30 shadow-[0_0_15px_rgba(0,136,163,0.3)]">
                                ベースの職制ランクの決定
                            </div>
                        </div>

                        <div className="bg-[#0a0f12]/80 backdrop-blur-xl border border-white/10 p-8 rounded-2xl relative overflow-hidden group hover:border-primary/50 transition-colors duration-500">
                            <div className="absolute top-0 right-0 w-48 h-48 bg-primary-light/10 rounded-full blur-3xl -z-10 group-hover:bg-primary-light/20 transition-all duration-700" />
                            <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">インセンティブ発生条件</h3>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="w-2 h-2 rounded-full bg-white mt-2 shrink-0" />
                                    <div>
                                        <p className="font-bold text-white text-base">全社業績連動賞与</p>
                                        <p className="text-sm text-gray-400 mt-1">全社収益に紐づく年次ボーナス。対象者全員に支給。</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-2 h-2 rounded-full bg-primary-light shadow-[0_0_8px_rgba(0,210,211,0.8)] mt-2 shrink-0" />
                                    <div>
                                        <p className="font-bold text-primary-light text-base drop-shadow-[0_0_5px_rgba(0,210,211,0.5)]">特別インセンティブ</p>
                                        <p className="text-sm text-gray-300 mt-1">ポートフォリオ事業収益およびEXIT報酬の一部還元。</p>
                                        <div className="mt-3 inline-block px-3 py-1 bg-primary/20 border border-primary/50 rounded text-xs font-bold text-white">
                                            対象: Driveの上位ランク以上
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
                            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-4">ランク別 報酬イメージ</h3>
                            <p className="text-sm md:text-base text-gray-400">ランクが上がるにつれ、青天井のアップサイド（インセンティブ）比率が飛躍的に高まる設計です。</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
                            {[
                                {
                                    phase: "Play (守)",
                                    desc: "メンバー層",
                                    data: [
                                        { label: "固定給", value: 90, color: "bg-white/20" },
                                        { label: "賞与", value: 10, color: "bg-primary" },
                                    ],
                                    gradient: "conic-gradient(rgba(255,255,255,0.2) 0% 90%, #0088A3 90% 100%)"
                                },
                                {
                                    phase: "Drive (破)",
                                    desc: "マネージャー・VP層",
                                    data: [
                                        { label: "固定給", value: 80, color: "bg-white/20" },
                                        { label: "賞与", value: 10, color: "bg-primary" },
                                        { label: "インセンティブ", value: 10, color: "bg-red-500" },
                                    ],
                                    gradient: "conic-gradient(rgba(255,255,255,0.2) 0% 80%, #0088A3 80% 90%, #ef4444 90% 100%)",
                                    note: "※Drive上位ランク以上がインセンティブ対象"
                                },
                                {
                                    phase: "Lead (離)",
                                    desc: "経営・パートナー層",
                                    data: [
                                        { label: "固定給", value: 30, color: "bg-white/20" },
                                        { label: "賞与", value: 20, color: "bg-primary" },
                                        { label: "インセンティブ", value: 50, color: "bg-red-500" },
                                    ],
                                    gradient: "conic-gradient(rgba(255,255,255,0.2) 0% 30%, #0088A3 30% 50%, #ef4444 50% 100%)",
                                    highlight: true
                                },
                            ].map((chart, idx) => (
                                <div key={idx} className={`flex flex-col items-center relative ${chart.highlight ? 'scale-105' : ''}`}>
                                    {chart.highlight && (
                                        <div className="absolute -inset-6 bg-primary/5 rounded-2xl blur-xl -z-10" />
                                    )}
                                    <h4 className="text-xl font-bold text-white mb-2">{chart.phase}</h4>
                                    <p className="text-xs text-gray-500 mb-8 font-sans">{chart.desc}</p>

                                    {/* CSS Donut Chart */}
                                    <div className="relative w-40 h-40 mb-8 group hover:scale-105 transition-transform duration-500">
                                        <div
                                            className="w-full h-full rounded-full drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
                                            style={{ background: chart.gradient }}
                                        />
                                        {/* Donut Hole */}
                                        <div className="absolute inset-4 bg-[#0d1316] rounded-full flex flex-col items-center justify-center">
                                            {chart.highlight && (
                                                <div className="absolute inset-0 bg-primary-light/10 rounded-full blur-md" />
                                            )}
                                        </div>
                                    </div>

                                    {/* Legend */}
                                    <div className="w-full max-w-[200px] flex flex-col gap-3 text-sm font-sans">
                                        {chart.data.map((item, i) => (
                                            <div key={i} className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <div className={`w-3 h-3 rounded-full ${item.color} shadow-sm`} />
                                                    <span className={item.label === 'インセンティブ' ? 'text-white font-medium' : 'text-gray-300'}>{item.label}</span>
                                                </div>
                                                <span className="font-bold text-gray-200">{item.value}%</span>
                                            </div>
                                        ))}
                                    </div>
                                    {chart.note && (
                                        <p className="text-[10px] text-gray-500 mt-4 text-center">{chart.note}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            <CareersPlan />
            <ConversionCTA dict={dict.shared?.conversionCTA} />
        </div>
    );
}

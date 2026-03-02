"use client";

import { motion } from "framer-motion";
import { AccessSection } from "@/components/about/AccessSection";

const historyData = [
    { year: "2012年 9月", event: "株式会社Tryfunds 設立（代表取締役CEO：丹野裕介）" },
    { year: "2013年 6月", event: "海外進出支援事業 開始" },
    { year: "2018年 2月", event: "株式会社ゼネラル・オイスターと資本業務提携 / 投資実行" },
    { year: "2018年 5月", event: "グローバルM&Aプラットフォーム「BIZIT M&A」サービス開始" },
    { year: "2021年 2月", event: "株式会社BIZITをGCA株式会社へ売却" },
    { year: "2021年 6月", event: "株式会社TF Power 設立（関連会社）" },
    { year: "2021年 12月", event: "株式会社Sustechへ資本参画及び共同代表就任" },
    { year: "2022年 4月", event: "ONGAESHIキャピタル事業 開始" },
    { year: "2023年 2月", event: "ONGAESHI 第1号ファンド 組成" },
];

export default function AboutPage() {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-background relative overflow-hidden">
            {/* Background Atmosphere */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[150px] mix-blend-screen pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-24"
                >
                    <div className="inline-flex items-center gap-4 mb-6">
                        <div className="h-px w-12 bg-primary/50" />
                        <h2 className="text-sm tracking-[0.3em] text-primary-light font-bold font-sans">会社概要</h2>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                    {/* Company Profile */}
                    <motion.section
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-sans font-bold tracking-widest text-white mb-10 pb-4 border-b border-white/10 flex items-center gap-4">
                            <div className="w-2 h-2 rounded-full bg-primary-light" />
                            会社情報
                        </h3>

                        <dl className="grid grid-cols-1 gap-4 text-sm font-sans tracking-wide">
                            <div className="flex flex-col md:flex-row md:items-start p-4 md:p-6 bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-colors">
                                <dt className="text-gray-400 uppercase font-display tracking-widest mb-2 md:mb-0 md:w-36 lg:w-48 shrink-0">Company Name</dt>
                                <dd className="text-white font-medium">株式会社Tryfunds（英文名 Tryfunds Inc.）</dd>
                            </div>
                            <div className="flex flex-col md:flex-row md:items-start p-4 md:p-6 bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-colors">
                                <dt className="text-gray-400 uppercase font-display tracking-widest mb-2 md:mb-0 md:w-36 lg:w-48 shrink-0">CEO</dt>
                                <dd className="text-white font-medium">代表取締役 CEO 丹野 裕介</dd>
                            </div>
                            <div className="flex flex-col md:flex-row md:items-start p-4 md:p-6 bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-colors">
                                <dt className="text-gray-400 uppercase font-display tracking-widest mb-2 md:mb-0 md:w-36 lg:w-48 shrink-0">Established</dt>
                                <dd className="text-white font-medium">2012年9月19日</dd>
                            </div>
                            <div className="flex flex-col md:flex-row md:items-start p-4 md:p-6 bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-colors">
                                <dt className="text-gray-400 uppercase font-display tracking-widest mb-2 md:mb-0 md:w-36 lg:w-48 shrink-0">Capital</dt>
                                <dd className="text-white font-medium">1億5,828万円（資本準備金含む：2024年3月現在）</dd>
                            </div>
                            <div className="flex flex-col md:flex-row md:items-start p-4 md:p-6 bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-colors">
                                <dt className="text-gray-400 uppercase font-display tracking-widest mb-2 md:mb-0 md:w-36 lg:w-48 shrink-0">Employees</dt>
                                <dd className="text-white font-medium">50名（グループ150名）</dd>
                            </div>
                            <div className="flex flex-col md:flex-row md:items-start p-4 md:p-6 bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-colors">
                                <dt className="text-gray-400 uppercase font-display tracking-widest mb-2 md:mb-0 md:w-36 lg:w-48 shrink-0">Headquarters</dt>
                                <dd className="text-white font-medium leading-relaxed">
                                    〒105-0014<br />
                                    東京都港区芝3丁目1番14号 芝公園阪神ビル5階
                                </dd>
                            </div>
                            <div className="flex flex-col md:flex-row md:items-start p-4 md:p-6 bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-colors">
                                <dt className="text-gray-400 uppercase font-display tracking-widest mb-2 md:mb-0 md:w-36 lg:w-48 shrink-0">Contact</dt>
                                <dd className="text-white font-medium leading-relaxed">
                                    TEL : 03-6453-9008<br />
                                    FAX : 03-6453-9007
                                </dd>
                            </div>
                            <div className="flex flex-col md:flex-row md:items-start p-4 md:p-6 bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-colors">
                                <dt className="text-gray-400 uppercase font-display tracking-widest mb-2 md:mb-0 md:w-36 lg:w-48 shrink-0">Business</dt>
                                <dd className="text-white font-medium leading-relaxed">
                                    <ol className="list-decimal pl-4 space-y-1">
                                        <li>事業投資等、子会社を通じた投資ファンドの運営</li>
                                        <li>M&Aアドバイザリー、企業間パートナーシップに関するアドバイザリー事業</li>
                                        <li>海外進出、及び事業開発支援事業</li>
                                        <li>経営人材・グローバル人材のヘッドハンティング</li>
                                        <li>地方創生・事業承継支援</li>
                                    </ol>
                                </dd>
                            </div>
                            <div className="flex flex-col md:flex-row md:items-start p-4 md:p-6 bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-colors">
                                <dt className="text-gray-400 uppercase font-display tracking-widest mb-2 md:mb-0 md:w-36 lg:w-48 shrink-0">Group Companies</dt>
                                <dd className="text-white font-medium leading-relaxed">
                                    株式会社Tryfunds Investment<br />
                                    株式会社TF Power<br />
                                    合同会社TF Growth<br />
                                    合同会社TF Ventures<br />
                                    株式会社エンセンテン<br />
                                    Ongaeshi Capital<br />
                                    にいがたサステナブル地域創生投資事業有限責任組合
                                </dd>
                            </div>
                            <div className="flex flex-col md:flex-row md:items-start p-4 md:p-6 bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-colors">
                                <dt className="text-gray-400 uppercase font-display tracking-widest mb-2 md:mb-0 md:w-36 lg:w-48 shrink-0">Banks</dt>
                                <dd className="text-white font-medium leading-relaxed">
                                    みずほ銀行 小舟町支店<br />
                                    三井住友銀行 日比谷法人営業第二部
                                </dd>
                            </div>
                            <div className="flex flex-col md:flex-row md:items-start p-4 md:p-6 bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-colors">
                                <dt className="text-gray-400 uppercase font-display tracking-widest mb-2 md:mb-0 md:w-36 lg:w-48 shrink-0">Licenses</dt>
                                <dd className="text-white font-medium leading-relaxed">
                                    宅地建物取引業免許 東京都知事（１）第112791号<br />
                                    有料職業紹介事業許可証 13-ユ-315351（子会社である株式会社TFXが保持）
                                </dd>
                            </div>
                        </dl>
                    </motion.section>

                    {/* History */}
                    <motion.section
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <h3 className="text-2xl font-sans font-bold tracking-widest text-white mb-10 pb-4 border-b border-white/10 flex items-center gap-4">
                            <div className="w-2 h-2 rounded-full bg-primary-light" />
                            沿革
                        </h3>

                        <div className="relative pl-6 md:pl-8 border-l border-white/10 space-y-12">
                            {historyData.map((item, idx) => (
                                <div key={idx} className="relative group">
                                    {/* Timeline Node */}
                                    <div className="absolute -left-[29px] md:-left-[37px] top-1.5 w-3 h-3 rounded-full border-2 border-background bg-primary-light group-hover:scale-150 transition-transform duration-300" />

                                    <h4 className="text-primary-light font-display tracking-widest text-sm mb-3">
                                        {item.year}
                                    </h4>
                                    <p className="text-white font-sans tracking-wide leading-relaxed bg-white/[0.02] p-5 border border-white/5 hover:border-primary/20 transition-colors">
                                        {item.event}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.section>

                </div>

                <AccessSection />

            </div>
        </div>
    );
}

"use client";

import { motion } from "framer-motion";
import { Users, Target, ArrowRight, Briefcase, ChevronRight } from "lucide-react";
import Link from "next/link";
import { RecruitSystem } from "@/components/recruit/RecruitSystem";
import { RecruitRoles } from "@/components/recruit/RecruitRoles";
import { RecruitPersona } from "@/components/recruit/RecruitPersona";

export default function RecruitPage() {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-background">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
                >
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-4 mb-6">
                            <div className="h-px w-12 bg-primary/50" />
                            <h2 className="text-sm tracking-[0.3em] text-primary/80 font-display uppercase">Careers / Recruit</h2>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-display font-medium tracking-tight mb-8">
                            JOIN OUR TRY
                        </h1>
                        <p className="text-gray-400 font-sans tracking-wide leading-relaxed">
                            Tryfundsは、共に前人未到の事業を成し遂げる仲間を募集しています。<br className="hidden md:block" />
                            圧倒的な成長と、世界基準での事業立ち上げを経験できる環境があります。
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Injected Detailed HR and Roles sections */}
            <RecruitPersona />
            <RecruitSystem />
            <RecruitRoles />

            <div className="max-w-7xl mx-auto px-6 md:px-12 mt-24">

                {/* Actions */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Link
                        href="/contact/document"
                        className="group p-8 border border-white/10 bg-transparent hover:bg-white hover:border-white transition-all duration-500 relative flex flex-col items-start"
                    >
                        <div className="text-white group-hover:text-black mb-6 transition-colors">
                            <Users strokeWidth={1.5} className="w-10 h-10" />
                        </div>
                        <h4 className="text-xl font-bold font-sans tracking-wide mb-4 text-white group-hover:text-black transition-colors">
                            採用資料ダウンロード
                        </h4>
                        <p className="text-sm leading-relaxed mb-8 text-gray-400 group-hover:text-gray-600 font-sans transition-colors">
                            給与体系、キャリアパス、具体的なプロジェクトアサイン例などを詳細に記載した採用ピッチ資料です。
                        </p>
                        <div className="w-full mt-auto flex items-center justify-between text-white group-hover:text-black font-display font-bold tracking-widest text-sm transition-colors">
                            DOWNLOAD PITCH <ArrowRight size={18} className="transform group-hover:translate-x-2 transition-transform" />
                        </div>
                    </Link>

                    <Link
                        href="/contact/casual"
                        className="group p-8 border border-white bg-white hover:bg-gray-100 transition-all duration-500 relative flex flex-col items-start"
                    >
                        <div className="text-black mb-6">
                            <Target strokeWidth={1.5} className="w-10 h-10" />
                        </div>
                        <h4 className="text-xl font-bold font-sans tracking-wide mb-4 text-black">
                            カジュアル面談
                        </h4>
                        <p className="text-sm leading-relaxed mb-8 text-gray-700 font-sans">
                            まずは気軽にお話ししませんか。現場で活躍する社員が、あなたの疑問やキャリアに関する相談に直接お答えします。
                        </p>
                        <div className="w-full mt-auto flex items-center justify-between text-black font-display font-bold tracking-widest text-sm">
                            REQUEST INTERVIEW <ArrowRight size={18} className="transform group-hover:translate-x-2 transition-transform" />
                        </div>
                    </Link>

                    <Link
                        href="/contact"
                        className="group p-8 border border-primary/30 bg-primary/10 hover:bg-primary transition-all duration-500 relative flex flex-col items-start"
                    >
                        <div className="text-primary mb-6 group-hover:text-white transition-colors">
                            <ChevronRight strokeWidth={1.5} className="w-10 h-10" />
                        </div>
                        <h4 className="text-xl font-bold font-sans tracking-wide mb-4 text-white">
                            エントリー・お問い合わせ
                        </h4>
                        <p className="text-sm leading-relaxed mb-8 text-gray-300 group-hover:text-white font-sans transition-colors">
                            本選考へのエントリー、または採用に関する一般的なお問い合わせはこちらのフォームをご利用ください。
                        </p>
                        <div className="w-full mt-auto flex items-center justify-between text-white font-display font-bold tracking-widest text-sm transition-colors">
                            ENTRY & INQUIRY <ArrowRight size={18} className="transform group-hover:translate-x-2 transition-transform" />
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    );
}

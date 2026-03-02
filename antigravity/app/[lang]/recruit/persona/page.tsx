"use client";

import { motion } from "framer-motion";
import { RecruitPersona } from "@/components/recruit/RecruitPersona";
import { RecruitSystem } from "@/components/recruit/RecruitSystem";

export default function PersonaPage() {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-background relative overflow-hidden">
            {/* Background Atmosphere */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[150px] mix-blend-screen pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <div className="inline-flex items-center gap-4 mb-6">
                        <div className="h-px w-12 bg-primary/50" />
                        <h2 className="text-sm tracking-[0.3em] text-primary-light font-bold font-sans">
                            求める人物像
                        </h2>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-sans font-bold tracking-tight mb-8 text-white">
                        事業家としての<br className="md:hidden" />マインドセット
                    </h1>
                    <p className="text-gray-400 font-sans tracking-wide leading-relaxed max-w-3xl">
                        Tryfundsは、コンサルティングスキルだけでなく、自ら事業を創り、収益に執念を持てる人材を求めています。
                        ここでは、私たちが求めるマインドセット、3つの成長フェーズ（Play/Drive/Lead）、そして評価の軸となる6つのリーダーシップ・プリンシプルをご紹介します。
                    </p>
                </motion.div>
            </div>

            {/* Embedded Components */}
            <RecruitPersona />
            <RecruitSystem />
        </div>
    );
}

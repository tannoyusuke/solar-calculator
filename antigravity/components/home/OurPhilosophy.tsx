"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { EnvisionGraphic } from "@/components/ui/EnvisionGraphic";

export function OurPhilosophy() {
    return (
        <section className="relative pt-32 pb-12 bg-background overflow-hidden border-t border-white/5">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-dark/10 blur-[120px] rounded-full mix-blend-screen" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <div className="inline-flex items-center gap-4 mb-6">
                        <div className="h-px w-12 bg-primary/50" />
                        <h2 className="text-sm tracking-[0.3em] text-primary-light font-display">OUR PHILOSOPHY</h2>
                        <div className="h-px w-12 bg-primary/50" />
                    </div>
                </motion.div>

                {/* Key Message */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-4xl mx-auto mb-6"
                >
                    <h3 className="text-4xl md:text-6xl font-sans font-bold tracking-widest leading-tight text-white mb-8 drop-shadow-md">
                        意志ある挑戦を創造する。
                    </h3>

                    <div className="space-y-6 text-gray-300 font-sans tracking-wide leading-relaxed text-base md:text-lg">
                        <p>
                            私たちは顧客の本気の挑戦を支援するだけでなく、<br className="hidden md:block" />自らも確固たる意志を持ち、誰よりも最前線の「挑戦者」として活動し続けます。
                        </p>
                        <p>
                            顧客の事業責任者と共に <strong className="text-white font-bold">Envision</strong> ＝さらに高いビジョンを描き、目指すべき頂点を再定義する。<br className="hidden md:block" />そして、その実現に不可欠な「ミッシングパーツ（資金、人材、テクノロジー、ネットワークなど）」を当社が直接補完し、かつてないスケールでの事業成長へと挑戦させます。
                        </p>
                    </div>
                </motion.div>

                {/* Envision Model Graphic */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="w-full max-w-[1200px] mx-auto relative mt-8"
                >
                    <EnvisionGraphic />
                </motion.div>

            </div>
        </section>
    );
}

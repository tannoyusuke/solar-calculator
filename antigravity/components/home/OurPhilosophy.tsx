"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { EnvisionGraphic } from "@/components/ui/EnvisionGraphic";

export function OurPhilosophy({ dict }: { dict: any }) {
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
                        <h2 className="text-sm tracking-[0.3em] text-primary-light font-display">{dict.section_title}</h2>
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
                        {dict.headline}
                    </h3>

                    <div
                        className="space-y-6 text-gray-300 font-sans tracking-wide leading-relaxed text-base md:text-lg"
                        dangerouslySetInnerHTML={{ __html: dict.description }}
                    />
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

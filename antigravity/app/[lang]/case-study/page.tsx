"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";

export default function CaseStudyPage() {
    const categories = ["All", ...Array.from(new Set(caseStudies.map((c) => c.category)))];
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredStudies = caseStudies.filter((study) =>
        selectedCategory === "All" || study.category === selectedCategory
    );

    return (
        <div className="pt-32 pb-24 min-h-screen bg-background">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Header */}
                <div className="mb-16">
                    <div className="inline-flex items-center gap-4 mb-6">
                        <div className="h-px w-12 bg-primary/50" />
                        <h2 className="text-sm tracking-[0.3em] text-primary-light font-display">CASE STUDY / CLIENT STORIES</h2>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-display font-medium tracking-widest text-white mb-8 leading-tight">
                        本気の挑戦を、<br className="md:hidden" />共に具現化する。
                    </h1>
                    <p className="text-gray-400 font-sans tracking-wide leading-relaxed max-w-2xl text-lg">
                        単なるアドバイザリーを超え、リスクを共に負う事業運営会社としてのTryfunds。
                        スタートアップの立ち上げから大手企業のDX・事業再生まで、劇的なバリューアップを実現した物語（ストーリー）をご紹介します。
                    </p>
                </div>

                {/* Filter Tags */}
                <div className="flex flex-wrap gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-5 py-2 text-xs tracking-widest font-sans transition-all duration-300 border ${selectedCategory === category
                                ? "bg-white text-black border-white"
                                : "bg-transparent text-gray-400 border-white/20 hover:border-white/50 hover:text-white"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Deep Dive Case Study Articles Grid (2 columns for richness) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {filteredStudies.map((study, i) => (
                        <Link
                            href={`/case-study/${study.id}`}
                            key={i}
                            className="group flex flex-col border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/20 transition-all duration-500 overflow-hidden h-full"
                        >
                            {/* Image Part */}
                            <div className="relative w-full aspect-[16/10] overflow-hidden border-b border-white/5">
                                <Image
                                    src={study.image}
                                    alt={study.title}
                                    fill
                                    className="object-cover group-hover:scale-105 group-hover:grayscale-0 grayscale-[30%] transition-all duration-700"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                {/* Top Accent bar purely structural */}
                                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-primary-light to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            </div>

                            {/* Content Part */}
                            <div className="p-8 md:p-10 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-6">
                                    <span className="text-[10px] tracking-[0.2em] text-primary-light font-display uppercase border-b border-primary/20 pb-1">
                                        {study.category}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold font-sans tracking-wide mb-4 text-white leading-tight group-hover:text-primary-light transition-colors">
                                    {study.title}
                                </h3>
                                <p className="text-sm text-gray-400 font-sans leading-relaxed tracking-wide mb-8 flex-grow">
                                    {study.summary}
                                </p>

                                {/* Tags & Read More */}
                                <div className="mt-auto border-t border-white/5 pt-6 flex flex-col xl:flex-row xl:items-center justify-between gap-4">
                                    <div className="flex flex-wrap gap-2">
                                        {study.tags.slice(0, 2).map((tag, idx) => (
                                            <span key={idx} className="text-[9px] font-sans text-gray-500 border border-white/10 px-2 py-1 uppercase">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-2 text-white font-sans text-xs tracking-[0.2em] font-bold group-hover:text-primary-light transition-colors">
                                        READ STORY
                                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-32 text-center pt-20 border-t border-white/5">
                    <p className="text-gray-400 font-sans tracking-wide mb-8">
                        これらは私たちが手掛けた1,000以上のプロジェクトのほんの一部です。<br className="hidden md:block" />
                        詳細な企業情報や過去実績については、会社説明資料をご請求ください。
                    </p>
                    <Link
                        href="/document"
                        className="inline-flex items-center gap-3 bg-white text-black font-display font-bold tracking-widest py-4 px-10 hover:bg-corp-gray transition-colors group"
                    >
                        DOWNLOAD DOCUMENT
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

            </div>
        </div>
    );
}

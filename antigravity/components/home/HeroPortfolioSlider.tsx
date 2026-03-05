"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getPortfolioData, getCaseStudiesData, getFullPortfolioList } from "@/lib/data";
import { Locale } from "@/lib/i18n-config";

type SliderItem = {
    id: string;
    title: string;
    description: string;
    image: string;
    link: string;
};

export function HeroPortfolioSlider({ lang }: { lang: Locale }) {
    const [shuffledItems, setShuffledItems] = useState<SliderItem[]>([]);

    useEffect(() => {
        const portfolioData = getPortfolioData(lang);
        const caseStudies = getCaseStudiesData(lang);
        const portfolioListRaw = getFullPortfolioList(lang);

        // Transform and merge data
        const mappedPortfolio: SliderItem[] = portfolioData.map(p => ({
            id: `p-${p.id}`,
            title: p.logoText || p.name,
            description: p.description,
            image: p.image,
            link: "/case-study" // Portfolios generally link to case study list unless specific
        }));

        const mappedCases: SliderItem[] = caseStudies.map(c => ({
            id: `c-${c.id}`,
            title: c.title, // Emphasize the initiative/story (コト)
            description: c.client, // Put client name in the smaller description text
            image: c.image,
            link: `/case-study#${c.id}`
        }));

        const getPortfolioImage = (name: string) => {
            if (name === "BIZIT") return "/cs_ptf_bizit.png";
            if (name === "フィル・カンパニー" || name === "Phil Company") return "/cs_phil_company.png";
            if (name === "Sustech") return "/cs_sustech_ai.png";
            return "/images/portfolio_shared_bg.png";
        };

        const portfolioList: SliderItem[] = portfolioListRaw.map(p => ({
            id: `ptf-${p.name}`,
            title: p.description, // Emphasize the "コト" (business/initiative)
            description: p.name,  // Secondary text is the portfolio name
            image: getPortfolioImage(p.name),
            link: "/portfolio"
        }));

        const combined = [...mappedPortfolio, ...mappedCases, ...portfolioList];

        // Fisher-Yates shuffle
        for (let i = combined.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [combined[i], combined[j]] = [combined[j], combined[i]];
        }

        setShuffledItems(combined);
    }, []);

    // Show empty placeholder while rendering on server to avoid hydration mismatch
    if (shuffledItems.length === 0) {
        return <div className="w-full mt-16 md:mt-24 h-[200px] md:h-[250px] opacity-0"></div>;
    }

    // Duplicate the array to create a seamless infinite loop
    const doubledItems = [...shuffledItems, ...shuffledItems, ...shuffledItems];

    return (
        <div className="w-full mt-16 md:mt-24 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            <div className="mb-4 text-left px-8">
                <span className="text-[10px] tracking-[0.3em] font-display text-primary-light uppercase border-b border-primary/30 pb-1">
                    Portfolio & Track Record
                </span>
            </div>

            <div className="flex w-full group">
                <div className="flex animate-marquee hover:[animation-play-state:paused] gap-6 px-3">
                    {doubledItems.map((item, idx) => (
                        <Link
                            key={`${item.id}-${idx}`}
                            href={item.link}
                            className={`relative flex-shrink-0 w-[240px] sm:w-[280px] md:w-[320px] aspect-[4/3] sm:aspect-[16/9] rounded-lg overflow-hidden flex flex-col justify-end group cursor-pointer shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-500`}
                        >
                            {/* Background Image */}
                            <Image
                                src={item.image || "/images/portfolio_shared_bg.png"}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                                priority={false}
                                sizes="(max-width: 768px) 240px, 320px"
                            />
                            {/* Gradient Overlay tailored for text readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#111624] via-[#111624]/60 to-transparent transition-opacity duration-500 group-hover:from-black/90 group-hover:via-black/50"></div>

                            {/* Content Container - carefully padded and styled for typography */}
                            <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-end h-full">
                                {/* Secondary/Client Name */}
                                <div className="mb-2 w-full translate-y-2 group-hover:translate-y-0 opacity-80 group-hover:opacity-100 transition-all duration-300">
                                    <span className="text-xs text-primary-light font-display tracking-widest uppercase truncate block">
                                        {item.description || "Portfolio"}
                                    </span>
                                </div>

                                {/* Primary Title/Initiative */}
                                <div className="w-full translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-75">
                                    <h3 className="text-sm md:text-base text-white font-sans font-bold leading-relaxed break-keep break-words line-clamp-3 md:line-clamp-2">
                                        {item.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Subtle Border effect on hover */}
                            <div className="absolute inset-0 border border-white/5 rounded-lg group-hover:border-primary-light/40 transition-colors duration-500 pointer-events-none"></div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

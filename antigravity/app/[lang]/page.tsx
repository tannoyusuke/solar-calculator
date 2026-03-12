import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { WhoWeAre } from "@/components/home/WhoWeAre";
import { OurPhilosophy } from "@/components/home/OurPhilosophy";
import { ValuesStrength } from "@/components/home/ValuesStrength";
import { TrackRecord } from "@/components/home/TrackRecord";
import { Services } from "@/components/home/Services";
import { UniqueValueProposition } from "@/components/home/UniqueValueProposition";
import { ConversionCTA } from "@/components/layout/ConversionCTA";
import { LatestNews } from "@/components/home/LatestNews";
import { HeroPortfolioSlider } from "@/components/home/HeroPortfolioSlider";
import { HeroBackgroundSlider } from "@/components/home/HeroBackgroundSlider";
import { getDictionary } from "@/lib/dictionary";
import { getPortfolioData, getCaseStudiesData, getFullPortfolioList } from "@/lib/data";
import type { Locale } from "@/lib/i18n-config";

export default async function Home({ params }: { params: { lang: Locale } }) {
  const dict = await getDictionary(params.lang);
  const portfolioData = await getPortfolioData(params.lang);
  const caseStudies = await getCaseStudiesData(params.lang);
  const portfolioListRaw = await getFullPortfolioList(params.lang);

  return (
    <main className="flex min-h-screen flex-col w-full overflow-hidden">
      <section className="relative h-screen min-h-[800px] w-full bg-[#050A0F] overflow-hidden flex flex-col md:flex-row">

        {/* Left Panel: Intelligent Authority Corporate Identity */}
        <div className="w-full md:w-[50%] lg:w-[45%] h-[50vh] md:h-full relative z-20 flex flex-col justify-start px-6 md:pl-16 lg:pl-[12%] xl:pl-[15%] pr-12 bg-[#050A0F] border-r border-white/5 pt-28 md:pt-[19vh] lg:pt-[19vh]">

          <div className="max-w-[600px] animate-fade-in-up">
            {/* Title - The one moment of strong assertion */}
            <h1 className="text-[44px] md:text-[56px] lg:text-[60px] font-sans font-bold tracking-tight mb-8 md:mb-10 leading-[1.05] text-white whitespace-nowrap drop-shadow-lg">
              TRY to All
            </h1>

            {/* Core Mission - Highly disciplined typography */}
            <div className="flex flex-col">
              <p className="text-[15px] md:text-[17px] font-sans font-medium tracking-[0.1em] text-white/90 leading-[2.2] md:leading-[2.4]">
                最新のテクノロジーと圧倒的な実行力を融合し、<br className="hidden md:block" />
                未踏の事業領域を開拓する。<br />
                <br className="my-2 md:my-3" />
                私たちは単なるアドバイザリーの枠を超え、<br className="hidden md:block" />
                自らリスクを取り、すべての挑戦を具現化する<br className="hidden md:block" />
                次世代の事業運営会社です。
              </p>

              {/* Extremely restrained CTA */}
              <div className="mt-12 md:mt-16">
                <Link href={`/${params.lang}/contact`} className="group inline-flex items-center justify-center border border-white/30 text-white hover:border-white transition-all duration-500 px-8 py-3 md:px-10 md:py-4 w-fit tracking-[0.2em] text-[11px] md:text-xs font-bold bg-white/5 hover:bg-white/10 backdrop-blur-sm">
                  CONTACT US <span className="ml-4 font-mono font-light text-white/50 group-hover:text-white transition-colors duration-500">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel: Multiple Business Portfolio & Capital Flow Visuals */}
        <div className="w-full md:w-[50%] lg:w-[55%] h-[50vh] md:h-full relative z-10 overflow-hidden bg-[#0A1017]">

          {/* Subtle structural grid lines overlay to convey 'structure' and 'portfolio' */}
          <div className="absolute inset-0 z-20 pointer-events-none opacity-20 md:opacity-40 mix-blend-overlay">
            {/* Center horizontal line */}
            <div className="absolute top-[45%] w-full border-t border-white/20" />
            {/* Dynamic vertical split */}
            <div className="absolute left-[30%] h-full border-l border-white/20" />
            <div className="absolute left-[70%] h-full border-l border-white/20" />
          </div>

          <HeroBackgroundSlider />

          {/* Edge and Bottom gradients for seamless blending */}
          <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#050A0F] to-transparent z-10 hidden md:block pointer-events-none" />
          <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#050A0F]/90 via-[#050A0F]/40 to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#050A0F] via-[#050A0F]/50 to-transparent z-10 pointer-events-none" />
        </div>

        {/* Hero Auto-scrolling Slider (Portfolio) - Positioned at bottom of screen, overlapping both panels smoothly */}
        <div className="absolute bottom-0 md:bottom-6 left-0 w-full animate-fade-in-up z-30 pointer-events-auto" style={{ animationDelay: '0.6s' }}>
          <HeroPortfolioSlider lang={params.lang} portfolioData={portfolioData} caseStudies={caseStudies} portfolioListRaw={portfolioListRaw} />
        </div>

      </section>

      {/* Main Content Sections */}
      <WhoWeAre dict={dict.home.whoWeAre} />
      <Suspense fallback={<div className="h-[400px] w-full flex items-center justify-center text-white/50 text-sm tracking-widest bg-background">LOADING NEWS...</div>}>
        <LatestNews dict={dict.home.latestNews} lang={params.lang} />
      </Suspense>
      <OurPhilosophy dict={dict.home.ourPhilosophy} />
      <TrackRecord dict={dict.home.trackRecord} />
      <UniqueValueProposition dict={dict.home.uniqueValueProposition} />
      <ValuesStrength dict={dict.home.valuesStrength} />
      <Services dict={dict.home.services} />

      {/* Conversion Section */}
      <ConversionCTA dict={dict.shared?.conversionCTA} />

    </main >
  );
}

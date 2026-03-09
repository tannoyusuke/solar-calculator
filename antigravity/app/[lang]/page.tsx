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
import type { Locale } from "@/lib/i18n-config";

export default async function Home({ params }: { params: { lang: Locale } }) {
  const dict = await getDictionary(params.lang);

  return (
    <main className="flex min-h-screen flex-col w-full overflow-hidden">
      {/* Hero Section */}
      <section className="w-full h-screen flex flex-col items-center justify-center relative z-0">

        {/* Background Overlay effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-white/5 blur-[100px] md:blur-[120px] pointer-events-none animate-pulse-slow" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 blur-[100px] pointer-events-none animate-float" />

        <div className="absolute inset-0 w-full h-full z-[-2]">
          <HeroBackgroundSlider />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>

        <div className="z-10 text-left px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto w-full flex flex-col items-start justify-center h-full relative pb-48 md:pb-[20vh] pt-32">

          {/* Main Title - 1 Line "TRY to All" */}
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[7.5rem] xl:text-[9rem] font-sans font-bold tracking-tight mb-6 md:mb-8 leading-none text-white drop-shadow-2xl animate-fade-in-up relative whitespace-nowrap">
            TRY to All
          </h1>

          {/* Subtitles (Japanese Text) */}
          <div className="flex flex-col mt-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-sm md:text-base lg:text-lg font-sans font-medium tracking-[0.15em] text-white drop-shadow-md leading-[2.2] md:leading-[2.4]">
              最新のテクノロジーと圧倒的な実行力を融合し、<br />
              未踏の事業領域を開拓する。<br />
              <br className="my-1 md:my-2" />
              私たちは単なるアドバイザリーの枠を超え、<br />
              自らリスクを取り、すべての挑戦を具現化する<br />
              次世代の事業運営会社です。
            </p>

            <div className="mt-8 md:mt-10">
              <Link href={`/${params.lang}/contact`} className="inline-flex items-center justify-center border border-white text-white hover:bg-white hover:text-black transition-colors duration-300 px-6 py-3 w-fit tracking-widest text-xs font-bold backdrop-blur-sm">
                CONTACT US <span className="ml-3 font-mono transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Auto-scrolling Slider (Portfolio) - Positioned at bottom of screen, full width */}
        <div className="absolute bottom-6 md:bottom-8 left-0 w-full animate-fade-in-up z-20" style={{ animationDelay: '0.6s' }}>
          <HeroPortfolioSlider lang={params.lang} />
        </div>

        {/* Decorative Side Element (Left Vertical Text) */}
        <div className="absolute top-[40vh] -translate-y-1/2 left-4 md:left-8 lg:left-12 hidden md:flex flex-col items-center gap-6 animate-fade-in-up opacity-60 z-30" style={{ animationDelay: '0.6s' }}>
          <span className="text-[10px] tracking-[0.4em] lg:tracking-[0.5em] text-white/50 font-display uppercase whitespace-nowrap" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
            Advanced Consulting & Investment
          </span>
          <div className="w-px h-16 md:h-24 bg-white/20" />
        </div>

        {/* Desktop scroll indicator - Centered vertically on right side to mirror left text */}
        <div className="absolute top-[40vh] -translate-y-1/2 right-4 md:right-8 lg:right-12 hidden md:flex flex-col items-center gap-6 animate-fade-in-up opacity-60 hover:opacity-100 transition-opacity cursor-default z-30" style={{ animationDelay: '0.8s' }}>
          <span className="text-[10px] font-display tracking-[0.4em] lg:tracking-[0.5em] text-white uppercase whitespace-nowrap" style={{ writingMode: 'vertical-rl' }}>{dict.home.hero.scroll}</span>
          <div className="w-px h-16 md:h-24 bg-gradient-to-b from-white/80 to-transparent animate-pulse" />
        </div>

        {/* Mobile scroll indicator */}
        <div className="absolute bottom-[25vh] sm:bottom-[28vh] left-0 right-0 md:hidden flex flex-col items-center justify-center gap-4 animate-fade-in-up opacity-60 z-30" style={{ animationDelay: '0.8s' }}>
          <span className="text-[9px] font-display tracking-[0.3em] uppercase text-white text-center pl-[0.3em]">{dict.home.hero.scroll}</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/80 to-transparent animate-pulse" />
        </div>
      </section>

      {/* Main Content Sections */}
      <WhoWeAre dict={dict.home.whoWeAre} />
      <LatestNews dict={dict.home.latestNews} />
      <OurPhilosophy dict={dict.home.ourPhilosophy} />
      <TrackRecord dict={dict.home.trackRecord} />
      <UniqueValueProposition dict={dict.home.uniqueValueProposition} />
      <ValuesStrength dict={dict.home.valuesStrength} />
      <Services dict={dict.home.services} />

      {/* Conversion Section */}
      <ConversionCTA dict={dict.shared?.conversionCTA} />

    </main>
  );
}

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
          <Image
            src="/images/hero_bg_corporate.png"
            alt="Tryfunds Corporate - Next Gen"
            fill
            sizes="100vw"
            quality={100}
            priority
            className="object-cover object-center opacity-60 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>

        <div className="z-10 text-center px-4 max-w-7xl mx-auto w-full flex flex-col items-center justify-center h-full relative">

          {/* Decorative Side Element (Left Vertical Text) */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 lg:left-8 hidden lg:flex flex-col items-center gap-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <span className="text-[10px] tracking-[0.4em] text-white/40 font-display uppercase whitespace-nowrap" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
              Advanced Consulting & Investment
            </span>
            <div className="w-px h-24 bg-white/20" />
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl lg:text-[8rem] font-display font-bold tracking-tighter mb-4 md:mb-6 leading-none text-white drop-shadow-2xl animate-fade-in-up relative mt-20">
            {dict.home.hero.title} <span className="text-gray-400">{dict.home.hero.titleHighlight}</span>
          </h1>

          <p className="text-xl md:text-3xl font-sans font-bold tracking-[0.3em] md:tracking-[0.4em] text-white animate-fade-in-up drop-shadow-md" style={{ animationDelay: '0.2s' }}>
            {dict.home.hero.subtitle}
          </p>

          {/* Description Paragraph */}
          <div className="mt-12 md:mt-16 animate-fade-in-up w-full max-w-3xl flex flex-col items-center" style={{ animationDelay: '0.4s' }}>
            <div className="w-8 h-px bg-white/40 mb-8" />
            <p className="text-xs md:text-sm text-gray-300 font-sans tracking-[0.15em] md:tracking-[0.2em] leading-[2.5] md:leading-loose text-center drop-shadow-sm">
              {dict.home.hero.description.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < dict.home.hero.description.length - 1 && <br className={i === 0 || i === 2 || i === 3 ? "hidden md:block" : ""} />}
                </span>
              ))}
            </p>

            {/* Hero Auto-scrolling Slider (Portfolio) */}
            <div className="w-[100vw] lg:w-[120vw] relative left-1/2 -translate-x-1/2 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <HeroPortfolioSlider lang={params.lang} />
            </div>

          </div>
        </div>

        <div className="absolute bottom-12 right-6 md:right-12 hidden md:flex flex-col items-center animate-fade-in-up opacity-60 hover:opacity-100 transition-opacity cursor-default" style={{ animationDelay: '0.8s' }}>
          <span className="text-[10px] font-display tracking-[0.3em] uppercase mb-6 text-white" style={{ writingMode: 'vertical-rl' }}>{dict.home.hero.scroll}</span>
          <div className="w-[1px] h-20 bg-gradient-to-b from-white/80 to-transparent animate-pulse" />
        </div>

        {/* Mobile scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:hidden flex flex-col items-center animate-fade-in-up opacity-50" style={{ animationDelay: '0.8s' }}>
          <span className="text-[9px] font-display tracking-[0.3em] uppercase mb-3 text-white pl-[0.3em]">{dict.home.hero.scroll}</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-white to-transparent" />
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

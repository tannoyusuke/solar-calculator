import { Metadata } from "next";
import Image from "next/image";
import { getFullPortfolioList } from "@/lib/data";
import { Locale } from "@/lib/i18n-config";
import { getDictionary } from "@/lib/dictionary";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
    title: "Portfolio | Tryfunds",
    description: "Tryfunds Group全体での主なポートフォリオ（投資・インキュベーション案件）をご紹介します。",
};

export const revalidate = 60;

export default async function PortfolioPage({ params: { lang } }: { params: { lang: Locale } }) {
    const portfolios = await getFullPortfolioList(lang);
    const dict = await getDictionary(lang);

    return (
        <div className="pt-32 pb-24 min-h-screen">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                <ScrollReveal>
                    <div className="mb-16">
                        <div className="inline-flex items-center gap-4 mb-6">
                            <div className="h-px w-12 bg-primary/50" />
                            <h2 className="text-sm tracking-[0.3em] text-primary-light font-display">PORTFOLIO</h2>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-display font-medium tracking-widest text-white mb-8 leading-tight">
                            {lang === "en" ? "Portfolio" : "ポートフォリオ"}
                        </h1>
                        <p className="text-gray-400 font-sans tracking-wide leading-relaxed max-w-2xl text-lg mb-4">
                            {lang === "en" ? "From proprietary incubation businesses to principal investments through funds." : "自社展開のインキュベーション事業から、ファンドを通じたプリンシパル投資まで。"}
                        </p>
                        <div className="inline-block border border-primary/30 bg-primary/5 px-4 py-2 mt-2">
                            <span className="text-xs text-primary-light font-bold tracking-wider">
                                {lang === "en" ? "* Includes investments by the entire group, including funds managed by Tryfunds Group." : "※ Tryfunds Groupが運営するファンドを含む、グループ全体の投資実績を掲載しています。"}
                            </span>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {portfolios.map((item: any, i: number) => (
                        <div
                            key={i}
                            className="bg-white/[0.02] border border-white/10 relative overflow-hidden group hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 h-[280px] flex flex-col"
                        >
                            {/* Hover Accent Line */}
                            <div className="absolute top-0 left-0 w-0 h-[2px] bg-white/50 group-hover:w-full transition-all duration-700 ease-in-out" />

                            <div className="absolute top-4 right-4 z-10">
                                <span className={`text-[10px] font-bold tracking-wider px-3 py-1 rounded-sm ${item.status === "EXIT済" || item.status === "Exited"
                                    ? "bg-accent/20 text-accent border border-accent/30"
                                    : "bg-primary/20 text-primary-light border border-primary/30"
                                    }`}>
                                    {item.status}
                                </span>
                            </div>

                            {/* Investment Type Badge */}
                            <div className="absolute top-4 left-4 z-10">
                                <span className="text-[10px] font-sans tracking-widest text-gray-500 uppercase border-b border-white/10 pb-1">
                                    {item.type}
                                </span>
                            </div>

                            {/* Center Logo Area */}
                            <div className="flex-1 flex items-center justify-center p-8 mt-4 relative">
                                {item.logoImage ? (
                                    <div className="relative w-full h-[60px] md:h-[80px] group-hover:scale-105 transition-transform duration-500">
                                        <Image
                                            src={item.logoImage}
                                            alt={`${item.name} logo`}
                                            fill
                                            unoptimized={true}
                                            className="object-contain filter brightness-110 drop-shadow-md"
                                        />
                                    </div>
                                ) : (
                                    <h3 className="text-xl md:text-2xl font-display font-bold text-center text-white/90 group-hover:scale-105 transition-transform duration-500 whitespace-nowrap overflow-hidden text-ellipsis w-full max-w-[200px]">
                                        {item.name}
                                    </h3>
                                )}
                            </div>

                            {/* Business Description Area */}
                            <div className="p-6 border-t border-white/5 bg-black/20 text-center">
                                <p className="text-[11px] md:text-[12px] text-gray-400 font-sans leading-relaxed whitespace-nowrap overflow-hidden text-ellipsis">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

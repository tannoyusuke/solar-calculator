import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio | Tryfunds",
    description: "Tryfunds Group全体での主なポートフォリオ（投資・インキュベーション案件）をご紹介します。",
};

const portfolios = [
    {
        name: "レクメド",
        description: "医薬品開発事業",
        type: "PE投資",
        status: "EXIT済",
    },
    {
        name: "FTG Company",
        description: "世界にまたがる焼肉チェーンを展開",
        type: "VC投資",
        status: "EXIT済",
    },
    {
        name: "General Oyster",
        description: "牡蠣の卸売およびチェーンを展開",
        type: "PIPEs投資",
        status: "EXIT済",
    },
    {
        name: "BIZIT",
        description: "世界最大級のM&A情報プラットフォームを運営",
        type: "インキュベーション",
        status: "EXIT済",
    },
    {
        name: "九州医事新報社",
        description: "創刊60年を超える医療新聞を発行",
        type: "PE投資",
        status: "EXIT済",
    },
    {
        name: "フィル・カンパニー",
        description: "駐車場での空中店舗事業を展開",
        type: "PIPEs投資",
        status: "投資中",
    },
    {
        name: "Sustech",
        description: "再生可能エネルギー向けのAI事業",
        type: "インキュベーション",
        status: "投資中",
    },
    {
        name: "シエンシー",
        description: "障害福祉事業所向けオンライン研修サービス",
        type: "VC投資",
        status: "投資中",
    },
    {
        name: "エスキャピタル",
        description: "再エネ・インフラ用リース会社",
        type: "VC投資",
        status: "投資中",
    },
    {
        name: "Wanova",
        description: "日本の製品を海外展開する商社",
        type: "VC投資",
        status: "投資中",
    },
    {
        name: "Pegasus Tech Ventures", // Adjusted slightly for logo layout
        description: "AUM3,000億円の米国VC",
        type: "VC投資",
        status: "投資中",
    },
    {
        name: "ファルス",
        description: "新興国向けマイクロファイナンス事業",
        type: "VC投資",
        status: "投資中",
    },
    {
        name: "Handson AI",
        description: "外国人向け教育ローンファイナンス事業",
        type: "VC投資",
        status: "投資中",
    },
    {
        name: "エンセンテン",
        description: "PR＆クリエイティブ・エージェンシー",
        type: "VC投資",
        status: "投資中",
    },
];

export default function PortfolioPage() {
    return (
        <div className="pt-32 pb-24 min-h-screen">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Header */}
                <div className="mb-16">
                    <div className="inline-flex items-center gap-4 mb-6">
                        <div className="h-px w-12 bg-primary/50" />
                        <h2 className="text-sm tracking-[0.3em] text-primary-light font-display">PORTFOLIO</h2>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-display font-medium tracking-widest text-white mb-8 leading-tight">
                        ポートフォリオ
                    </h1>
                    <p className="text-gray-400 font-sans tracking-wide leading-relaxed max-w-2xl text-lg mb-4">
                        自社展開のインキュベーション事業から、ファンドを通じたプリンシパル投資まで。
                    </p>
                    <div className="inline-block border border-primary/30 bg-primary/5 px-4 py-2 mt-2">
                        <span className="text-xs text-primary-light font-bold tracking-wider">
                            ※ Tryfunds Groupが運営するファンドを含む、グループ全体の投資実績を掲載しています。
                        </span>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {portfolios.map((item, i) => (
                        <div
                            key={i}
                            className="bg-white/[0.02] border border-white/10 relative overflow-hidden group hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 h-[280px] flex flex-col"
                        >
                            {/* Hover Accent Line */}
                            <div className="absolute top-0 left-0 w-0 h-[2px] bg-white/50 group-hover:w-full transition-all duration-700 ease-in-out" />

                            {/* Status Badge */}
                            <div className="absolute top-4 right-4 z-10">
                                <span className={`text-[10px] font-bold tracking-wider px-3 py-1 rounded-sm ${item.status === "EXIT済"
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
                            <div className="flex-1 flex items-center justify-center p-8 mt-4">
                                <h3 className="text-xl md:text-2xl font-display font-bold text-center text-white/90 group-hover:scale-105 transition-transform duration-500 whitespace-nowrap overflow-hidden text-ellipsis w-full max-w-[200px]">
                                    {item.name}
                                </h3>
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

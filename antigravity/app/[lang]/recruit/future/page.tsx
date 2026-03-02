"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const ourTries = [
    {
        num: "01",
        title: "日本中に眠る「かくれ資産」の発掘と再成長",
        description: "日本の各地域には、いまだ世界レベルで通用するポテンシャルを秘めた「かくれ資産」が無数に存在しています。独自の気候風土が育む高品質な農水産物、何世代にもわたり受け継がれてきた伝統工芸、そして地方の中小企業が持つ世界最高峰のニッチトップ技術。これらは単なるローカルな魅力にとどまらず、グローバル市場で戦える確かな競争優位性を持っています。私たちは、こうした埋もれた資産を発掘し、戦略と資本、そして最新のテクノロジーを掛け合わせることで、力強い再成長を促し、世界で勝てるグローバル事業へと昇華させます。"
    },
    {
        num: "02",
        title: "オーセンティックな地域資産の開発",
        description: "日本には、世界でも類を見ない独自の歴史、文化、自然基盤が息づいています。しかし、その多くは適切なビジネスモデルやマーケティング戦略が欠如しているため、本来の価値を十分に発揮できていません。私たちは、未開拓の観光資源や特異な文化的背景を再定義し、インバウンド需要の刈り取りだけではなく、高付加価値な体験として設計します。地域の独自性（オーセンティシティ）を守りながら、持続可能な収益基盤となる「世界基準のデスティネーション」を創出します。"
    },
    {
        num: "03",
        title: "既存の強みをレバレッジした非連続な事業開発",
        description: "急激な外部環境の変化やテクノロジーの進化により、従来のビジネスモデルが急速に陳腐化する「事業の賞味期限」が問われる時代です。過去の成功体験から脱却し、事業ポートフォリオを大胆に再構築しなければ、企業の存続は危ぶまれます。私たちは、企業が長年培ってきた「真のコアコンピタンス（技術、顧客基盤、ブランドなど）」を見極め、それを全く新しい市場や成長領域へと転用する非連続な事業開発をハンズオンで実行し、第二の創業を強力に牽引します。"
    },
    {
        num: "04",
        title: "ペニー・ストックを打破するグロースインベストメント",
        description: "日本には、優れた技術やサービスを持ちながら上場を果たしたものの、国内市場の縮小や経営リソースの不足により、海外展開や周辺領域への事業展開に踏み出せない企業が数多く存在します。結果として時価総額が低迷し、本来のポテンシャルを発揮できていないケースが後を絶ちません。私たちは、こうした上場企業に対し、自己資本とプロフェッショナル人材をダイレクトに投下します。経営の「ミッシングパーツ」を補完し、大胆なグローバル展開とM&Aを主導することで、抜本的な事業モデルの変革と時価総額の大幅な向上（バリューアップ）を実現します。"
    },
    {
        num: "05",
        title: "社会をアップデートし、世界で戦うスタートアップの創出",
        description: "人口減少、超高齢化、インフラの老朽化など、日本が直面する不可逆的な社会課題は、裏を返せばテクノロジーと新たなビジネスモデルによって解決すべき巨大な「市場機会」でもあります。私たちは、これらの課題解決（社会のアップデート）を起点としたイノベーションを自ら生み出し、ゼロから事業を立ち上げます。さらに、その事業を「課題先進国・日本」で磨き上げ、同様の課題に直面する世界市場へと展開し、真にグローバルで戦えるメガベンチャーへと自立・育成させます。"
    }
];

export default function FutureVisionPage() {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-background selection:bg-primary/30 selection:text-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <Link href="/recruit" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-20 z-10 relative">
                    <ArrowLeft size={16} />
                    Back to Recruit
                </Link>

                {/* Hero / Title with World Map Background */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="relative w-full mb-16 min-h-[70vh] md:min-h-[85vh] flex flex-col items-center justify-center text-center overflow-hidden"
                >
                    {/* Global Network Background Map */}
                    <div className="absolute inset-0 z-0 pointer-events-none opacity-60 mix-blend-screen">
                        {/* Glowing background behind image */}
                        <div className="absolute inset-0 bg-primary/10 blur-3xl z-0" />
                        <Image
                            src="/images/global_world_map_future.png"
                            alt="Global Network Map"
                            fill
                            priority
                            className="object-cover object-center"
                            unoptimized
                        />
                        {/* Dark gradient overlay so text stands out */}
                        <div className="absolute inset-0 bg-black/40 z-10" />
                        {/* Edge fading */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/20 to-background z-20" />
                        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-20" />
                    </div>

                    <div className="relative z-30 flex flex-col items-center px-4 w-full">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="inline-flex items-center gap-4 mb-6"
                        >
                            <div className="h-px w-12 bg-primary/50" />
                            <h2 className="text-sm tracking-[0.3em] text-primary/80 font-display uppercase drop-shadow-md">Future Vision</h2>
                            <div className="h-px w-12 bg-primary/50" />
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-4xl md:text-5xl lg:text-7xl font-sans font-bold tracking-tight mb-8 leading-tight text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]"
                        >
                            意志ある挑戦を創造する。
                        </motion.h1>
                    </div>
                </motion.div>

                {/* Manifesto Text Flow */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-3xl mx-auto mb-24 px-6"
                >

                    {/* Text Flow */}
                    <div className="relative z-10 max-w-3xl mx-auto px-6 space-y-12 text-base md:text-lg text-gray-300 font-sans tracking-[0.05em] leading-[2.2]">
                        <p>
                            かつて、日本は世界の中心にいた。<br />
                            Japan as Number One と呼ばれ、経済と技術で時代を牽引した。<br />
                            その後は “Cool Japan” として文化が評価され、世界から注目を集めた。
                        </p>
                        <p>
                            しかし現在、日本はどう見られているか。<br />
                            成熟、停滞、リスクを取らない国。<br />
                            かつての成功体験の延長線上にとどまり、<br />
                            世界の競争から一歩引いている存在。
                        </p>
                        <p>
                            そう語られる場面も少なくない。
                        </p>
                        <p>
                            だが、本質はそこではない。
                        </p>
                        <p>
                            日本には依然として、世界水準の技術がある。<br />
                            圧倒的な現場力がある。<br />
                            緻密な思考と実行の積み重ねがある。<br />
                            そして、世界で戦える可能性を持つ企業と人材が確実に存在している。
                        </p>
                        <p className="text-white font-bold text-xl md:text-2xl drop-shadow-[0_0_8px_rgba(0,136,163,0.5)]">
                            足りないのは能力ではない。<br />
                            意志である。<br />
                            <br />
                            そして、意志を現実に変える構造である。
                        </p>
                        <p>
                            世界で勝つ覚悟を持つ人はいる。<br />
                            だが、その挑戦を戦略・資本・組織・実装で支える機能は十分ではない。<br />
                            情熱だけでは、世界市場では勝てない。<br />
                            構造がなければ、挑戦は持続しない。
                        </p>
                        <p className="text-primary-light font-bold text-xl md:text-2xl drop-shadow-[0_0_8px_rgba(0,210,211,0.5)]">
                            だから、トライファンズがいる。
                        </p>
                        <p>
                            私たちは、挑戦を偶然に委ねない。<br />
                            意志を戦略に変え、<br />
                            戦略を資本で加速させ、<br />
                            実行を伴う組織へと設計する。
                        </p>
                        <p>
                            ときに投資家として、<br />
                            ときにパートナーとして、<br />
                            ときにCxOとして現場に入り込み、<br />
                            成果に対して責任を持つ。
                        </p>
                        <p>
                            志を語るだけではなく、<br />
                            世界で勝てる企業を共に創る。
                        </p>
                        <p>
                            私たちが目指すのは、<br />
                            単なるコンサルティングでも、単なる投資でもない。
                        </p>
                        <p className="text-white font-bold text-xl">
                            世界基準で戦う人材を生み出し、<br />
                            世界基準で戦う企業を創造すること。
                        </p>
                        <p>
                            日本には、まだ可能性がある。<br />
                            磨かれていない才能がある。<br />
                            構造化されていない知がある。<br />
                            世界を変えうる意志がある。
                        </p>
                        <p className="text-white font-bold text-xl">
                            その意志を、挑戦へ。<br />
                            その挑戦を、勝利へ。
                        </p>
                        <div className="pt-8 pb-8 border-l-2 border-primary pl-8 mt-12 bg-gradient-to-r from-primary/5 to-transparent">
                            <p className="text-white font-bold text-2xl md:text-3xl leading-[1.8] drop-shadow-[0_0_12px_rgba(255,255,255,0.2)]">
                                挑戦を孤独にしない。<br />
                                挑戦を再現可能にする。<br />
                                挑戦を構造化する。<br />
                                <br />
                                意志ある挑戦を創造する。<br />
                                <br />
                                <span className="text-sm md:text-base font-normal text-gray-300 tracking-[0.2em] mt-4 block">
                                    それが、トライファンズの使命である。
                                </span>
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Our Try Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />
                    <div className="absolute bottom-0 left-[-10%] w-[400px] h-[400px] bg-[#C00034]/5 rounded-full blur-[100px] -z-10" />

                    <div className="mb-20">
                        <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-4 text-white">
                            Our Try
                        </h2>
                        <div className="h-px w-full max-w-sm bg-gradient-to-r from-primary to-transparent" />
                    </div>

                    <div className="flex flex-col gap-12">
                        {ourTries.map((item, idx) => (
                            <div
                                key={idx}
                                className="relative group bg-white/[0.02] border border-white/5 p-8 md:p-12 hover:border-primary/30 transition-all duration-700 overflow-hidden"
                            >
                                {/* Immersive Background Number */}
                                <div className="absolute -right-4 -bottom-10 text-[150px] md:text-[200px] font-display font-bold text-white/[0.03] group-hover:text-primary/[0.05] transition-colors duration-700 pointer-events-none select-none leading-none z-0">
                                    {item.num}
                                </div>
                                {/* Hover Glow Line */}
                                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary to-primary-light opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-16">
                                    <div className="md:w-1/3 flex-shrink-0">
                                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-primary/30 text-primary font-display font-bold mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-[0_0_15px_rgba(0,136,163,0.3)]">
                                            {item.num}
                                        </div>
                                        <h3 className="text-2xl font-bold font-sans tracking-tight text-white leading-snug">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <div className="md:w-2/3 flex items-center">
                                        <p className="text-gray-300 font-sans text-[15px] md:text-base leading-[2.2] tracking-[0.02em]">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </div>
    );
}

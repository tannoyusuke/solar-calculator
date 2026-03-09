import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionary";
import Image from "next/image";

export async function generateMetadata({ params: { lang } }: { params: { lang: any } }): Promise<Metadata> {
    const dict = await getDictionary(lang);
    return {
        title: `${dict.navigation.about.items.message} | Tryfunds`,
    };
}

export default async function MessagePage({ params: { lang } }: { params: { lang: any } }) {
    const dict = await getDictionary(lang);
    const isJa = lang === 'ja';

    return (
        <div className="pt-32 pb-20 px-6 min-h-screen">
            <div className="max-w-5xl mx-auto font-sans">
                <h1 className="text-4xl md:text-5xl font-display font-medium tracking-widest mb-16 uppercase">
                    {dict.navigation.about.items.message}
                </h1>

                <div className="flex flex-col md:flex-row gap-12 text-gray-400 leading-relaxed font-sans">
                    <div className="md:w-1/3">
                        <div className="w-full aspect-[3/4] relative rounded-lg overflow-hidden mb-6 filter grayscale contrast-125">
                            <Image
                                src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&q=80&w=800"
                                alt="Yusuke Tanno"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <h3 className="text-xl text-white font-bold tracking-widest">Yusuke Tanno</h3>
                        <p className="text-sm mt-1">{dict.company.info.ceo_value}</p>
                    </div>

                    <div className="md:w-2/3 space-y-8 text-base md:text-lg">
                        <p className="text-white text-2xl md:text-3xl font-bold font-display leading-tight mb-8">
                            {isJa ? '自らリスクを取り、圧倒的な結果を約束する。' : 'Taking risks to promise overwhelming results.'}
                        </p>

                        <p>
                            {isJa
                                ? 'Tryfundsは、ただクライアントに助言を与えるだけの旧来のコンサルティングファームではありません。我々は「経営のプロフェッショナル」として、自らも事業リスクを取り、同じ船に乗る覚悟で挑んでいます。'
                                : 'Tryfunds is not a traditional consulting firm that merely gives advice to clients. As "management professionals", we tackle challenges with the resolve to take business risks ourselves and board the same ship.'}
                        </p>

                        <p>
                            {isJa
                                ? '「まだ世界にない価値」を創り出す過程には、必ず大きな障害が存在します。私たちは、その困難な道を避けることなく、資金、人材、ネットワークといったあらゆるミッシングパーツを直接補完し、社会への革新を具現化します。'
                                : 'In the process of creating "value that does not yet exist in the world," major obstacles always arise. Without shying away from these difficult paths, we directly supplement all missing parts—such as funding, talent, and networks—to manifest societal innovation.'}
                        </p>

                        <p>
                            {isJa
                                ? '言葉だけの戦略に価値はありません。私たちが目指すのは、社会の基盤となる確固たる「結果」であり、次の世代が誇れる未来を創ることです。未踏の領域に共に挑みたい企業様、そして、私たちと共に当事者として日本・世界を牽引する熱意ある仲間との出会いを、心よりお待ちしております。'
                                : 'Strategies comprised only of words have no value. We aim for solid "results" that become the foundation of society, creating a future that the next generation can be proud of. We sincerely look forward to encountering companies that want to challenge uncharted territories together, and passionate individuals who will lead Japan and the world as principals alongside us.'}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

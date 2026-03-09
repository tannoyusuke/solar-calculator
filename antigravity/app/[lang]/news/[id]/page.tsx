import { getNewsData } from "@/lib/news";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ConversionCTA } from "@/components/layout/ConversionCTA";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/lib/i18n-config";

export async function generateStaticParams() {
    const jaData = await getNewsData("ja") || [];
    const enData = await getNewsData("en") || [];

    const jaParams = jaData.map((news: any) => ({
        lang: "ja",
        id: news.id,
    }));
    const enParams = enData.map((news: any) => ({
        lang: "en",
        id: news.id,
    }));
    return [...jaParams, ...enParams];
}

export async function generateMetadata({ params }: { params: { lang: Locale, id: string } }) {
    const newsData = await getNewsData(params.lang) || [];
    const news = newsData.find((n: any) => n.id === params.id);

    if (!news) return { title: "News Not Found | Tryfunds" };

    const title = `${news.title} | Tryfunds News`;
    const description = news.content.substring(0, 120) + "...";

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: "article",
            publishedTime: news.date.replace(/\./g, "-"),
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
        }
    };
}

export default async function NewsDetailPage({ params }: { params: { id: string, lang: Locale } }) {
    const dict = await getDictionary(params.lang);
    const newsData = await getNewsData(params.lang) || [];
    const news = newsData.find((n: any) => n.id === params.id);

    if (!news) {
        notFound();
    }

    return (
        <main className="flex min-h-screen flex-col w-full bg-background pt-32">
            <div className="max-w-3xl mx-auto px-6 md:px-12 w-full mb-32">

                {/* Back Link */}
                <Link
                    href={`/${params.lang}/news`}
                    className="inline-flex items-center gap-2 text-xs font-display font-medium tracking-widest text-gray-400 hover:text-white transition-colors mb-12 group"
                >
                    <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
                    BACK TO NEWS
                </Link>

                {/* Article Header */}
                <div className="mb-12 pb-12 border-b border-white/10">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-sm font-sans tracking-widest text-gray-400">{news.date}</span>
                        <span className="text-[10px] font-bold tracking-widest px-2 py-1 bg-white/5 border border-white/10 text-white/70 uppercase">
                            {news.category}
                        </span>
                    </div>
                    <h1 className="text-2xl md:text-4xl font-sans font-bold leading-[1.4] text-white">
                        {news.title}
                    </h1>
                </div>

                {/* Article Content */}
                <div className="prose prose-invert prose-lg max-w-none font-sans tracking-wide leading-relaxed text-gray-300">
                    {/* For simplicity using whitespace-pre-wrap for basic text content */}
                    <div className="whitespace-pre-wrap">
                        {news.content}
                    </div>
                </div>

                <div className="mt-24 pt-12 border-t border-white/10">
                    <Link
                        href={`/${params.lang}/news`}
                        className="inline-flex items-center justify-center w-full md:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-display font-bold tracking-widest text-white transition-colors"
                    >
                        {dict.news.backToNews}
                    </Link>
                </div>
            </div>

            <ConversionCTA dict={dict.shared?.conversionCTA} />
        </main>
    );
}

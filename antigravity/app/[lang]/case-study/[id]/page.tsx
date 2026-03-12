import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getCaseStudiesData } from "@/lib/data";
import { Locale } from "@/lib/i18n-config";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: { lang: Locale, id: string } }): Promise<Metadata> {
    const caseStudies = await getCaseStudiesData(params.lang);
    const study = caseStudies.find(s => s.id === params.id);

    if (!study) return { title: "Not Found" };

    const title = `${study.title} | Tryfunds Case Study`;
    const description = study.summary;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: "article",
            images: [
                {
                    url: study.image,
                    width: 1200,
                    height: 630,
                    alt: study.title,
                }
            ]
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [study.image],
        }
    };
}

export async function generateStaticParams() {
    const jaData = await getCaseStudiesData("ja");
    const enData = await getCaseStudiesData("en");
    const jaParams = jaData.map((study: any) => ({
        lang: "ja",
        id: study.id,
    }));
    const enParams = enData.map((study: any) => ({
        lang: "en",
        id: study.id,
    }));
    return [...jaParams, ...enParams];
}

export default async function CaseStudyDetail({ params }: { params: { lang: Locale, id: string } }) {
    const caseStudies = await getCaseStudiesData(params.lang);
    const study = caseStudies.find(s => s.id === params.id);

    if (!study) {
        notFound();
    }

    return (
        <article className="pt-32 pb-24 min-h-screen bg-background">
            <div className="max-w-4xl mx-auto px-6 md:px-12">

                {/* Back Link */}
                <Link href={`/${params.lang}/case-study`} className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 text-sm tracking-widest font-sans">
                    <ArrowLeft size={16} />
                    BACK TO INDEX
                </Link>

                {/* Header */}
                <header className="mb-16">
                    <div className="flex items-center gap-4 mb-8">
                        <span className="text-xs tracking-[0.3em] text-primary-light font-display uppercase border border-primary/30 px-3 py-1 bg-primary/5">
                            {study.category}
                        </span>
                        <div className="h-px w-12 bg-white/20" />
                        <span className="text-xs tracking-widest text-gray-400 font-sans uppercase">
                            Client: {study.client}
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-sans font-bold leading-tight text-white mb-8">
                        {study.title}
                    </h1>

                    <p className="text-xl text-gray-300 font-sans leading-relaxed">
                        {study.summary}
                    </p>
                </header>

                {/* Hero Image */}
                <div className="relative w-full aspect-[21/9] mb-20 overflow-hidden border border-white/10">
                    <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        unoptimized={true}
                        priority
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 1024px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                </div>

                {/* Content Sections */}
                <div className="space-y-16 font-sans text-gray-300 leading-loose text-lg">

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 tracking-wide flex items-center gap-4">
                            <span className="text-primary-light font-display text-sm tracking-[0.2em]">01</span>
                            {params.lang === "en" ? "Background" : "背景 / Background"}
                        </h2>
                        <div className="w-8 h-px bg-white/20 mb-6" />
                        <p>{study.content.background}</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 tracking-wide flex items-center gap-4">
                            <span className="text-primary-light font-display text-sm tracking-[0.2em]">02</span>
                            {params.lang === "en" ? "Challenges" : "課題 / Challenges"}
                        </h2>
                        <div className="w-8 h-px bg-white/20 mb-6" />
                        <p>{study.content.challenges}</p>
                    </section>

                    {/* Optional Article Image embedded inside the text body */}
                    {study.articleImage && (
                        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] my-16 overflow-hidden border border-white/5">
                            <Image
                                src={study.articleImage}
                                alt={`${study.client} Approach visualization`}
                                fill
                                unoptimized={true}
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 1024px"
                            />
                        </div>
                    )}

                    <section className="p-8 md:p-12 border border-primary/20 bg-primary-dark/5 relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-1 h-full bg-primary-light" />
                        <h2 className="text-2xl font-bold text-white mb-6 tracking-wide flex items-center gap-4">
                            <span className="text-primary-light font-display text-sm tracking-[0.2em]">03</span>
                            {params.lang === "en" ? "Tryfunds Approach" : "アプローチ / Tryfunds Approach"}
                        </h2>
                        <p className="relative z-10">{study.content.approach}</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 tracking-wide flex items-center gap-4">
                            <span className="text-primary-light font-display text-sm tracking-[0.2em]">04</span>
                            {params.lang === "en" ? "Outcome" : "成果と提供価値 / Outcome"}
                        </h2>
                        <div className="w-8 h-px bg-white/20 mb-6" />
                        <p className="mb-10">{study.content.outcome}</p>

                        {/* Results Summary Box */}
                        <div className="bg-white/[0.02] border border-white/10 p-8">
                            <h3 className="text-sm tracking-[0.2em] text-white font-display mb-6 uppercase">Key Highlights</h3>
                            <ul className="space-y-4">
                                {study.results.map((res, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <div className="w-2 h-2 rounded-full bg-primary-light mt-2.5 shrink-0" />
                                        <span className="text-white/90 font-bold tracking-wide">{res}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                </div>

                {/* Tags Footer */}
                <div className="mt-20 pt-8 border-t border-white/10">
                    <div className="flex flex-wrap gap-3">
                        {study.tags.map((tag, idx) => (
                            <span key={idx} className="text-xs font-sans text-gray-400 border border-white/10 px-3 py-1.5 hover:bg-white/5 transition-colors cursor-default">
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </article>
    );
}

import { getJobsData } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/lib/i18n-config";

export function generateStaticParams() {
    const jaParams = getJobsData("ja").map((job) => ({
        lang: "ja",
        id: job.id,
    }));
    const enParams = getJobsData("en").map((job) => ({
        lang: "en",
        id: job.id,
    }));
    return [...jaParams, ...enParams];
}

export default async function JobDescriptionPage({ params }: { params: { lang: Locale, id: string } }) {
    const dict = await getDictionary(params.lang);
    const jobsData = getJobsData(params.lang);
    const job = jobsData.find((j) => j.id === params.id);

    if (!job) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-background pt-32 pb-24 font-sans text-gray-300">
            <div className="max-w-3xl mx-auto px-6 md:px-12">

                {/* Back Link */}
                <div className="mb-12">
                    <Link href={`/${params.lang}/recruit#open-roles`} className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                        <ArrowLeft size={16} />
                        {dict.jobs.backToRoles}
                    </Link>
                </div>

                {/* Job Header */}
                <div className="mb-16 pb-8 border-b border-white/10">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        {job.title}
                    </h1>
                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
                        <span>{job.department}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-600" />
                        <span>{job.location}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-600" />
                        <span>{job.type}</span>
                    </div>

                    <div className="mt-10">
                        <Link
                            href={`/${params.lang}/contact`}
                            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold font-display uppercase tracking-widest text-sm hover:bg-primary-light transition-colors w-full sm:w-auto text-center"
                        >
                            {dict.jobs.applyNow}
                        </Link>
                    </div>
                </div>

                {/* Job Content */}
                <div className="space-y-12 leading-relaxed">

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">{dict.jobs.aboutTeam}</h2>
                        <p>{job.aboutTeam}</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">{dict.jobs.aboutRole}</h2>
                        <p className="whitespace-pre-line">{job.description}</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">{dict.jobs.goodFit}</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            {job.requirements.map((req, idx) => (
                                <li key={idx}>{req}</li>
                            ))}
                        </ul>
                    </section>

                    {job.niceToHave.length > 0 && (
                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">{dict.jobs.niceToHave}</h2>
                            <ul className="list-disc pl-5 space-y-2">
                                {job.niceToHave.map((nth, idx) => (
                                    <li key={idx}>{nth}</li>
                                ))}
                            </ul>
                        </section>
                    )}

                </div>

                {/* Bottom Apply */}
                <div className="mt-20 pt-12 border-t border-white/10 text-center">
                    <p className="text-sm text-gray-400 mb-6">{dict.jobs.excitedApply}</p>
                    <Link
                        href={`/${params.lang}/contact`}
                        className="inline-flex items-center justify-center px-12 py-4 bg-primary text-white font-bold font-display uppercase tracking-widest text-sm hover:bg-primary-light transition-colors w-full sm:w-auto text-center"
                    >
                        {dict.jobs.applyNow}
                    </Link>
                </div>

            </div>
        </div>
    );
}

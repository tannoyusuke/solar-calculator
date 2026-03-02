import { jobs } from "@/data/jobs";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
    return jobs.map((job) => ({
        id: job.id,
    }));
}

export default function JobDescriptionPage({ params }: { params: { id: string } }) {
    const job = jobs.find((j) => j.id === params.id);

    if (!job) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-background pt-32 pb-24 font-sans text-gray-300">
            <div className="max-w-3xl mx-auto px-6 md:px-12">

                {/* Back Link */}
                <div className="mb-12">
                    <Link href="/recruit#open-roles" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                        <ArrowLeft size={16} />
                        Back to all roles
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
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold font-display uppercase tracking-widest text-sm hover:bg-primary-light transition-colors w-full sm:w-auto text-center"
                        >
                            Apply Now
                        </Link>
                    </div>
                </div>

                {/* Job Content */}
                <div className="space-y-12 leading-relaxed">

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">About the team</h2>
                        <p>{job.aboutTeam}</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">About the role</h2>
                        <p className="whitespace-pre-line">{job.description}</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">You may be a good fit if you have:</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            {job.requirements.map((req, idx) => (
                                <li key={idx}>{req}</li>
                            ))}
                        </ul>
                    </section>

                    {job.niceToHave.length > 0 && (
                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">Nice to have:</h2>
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
                    <p className="text-sm text-gray-400 mb-6">If you are excited by this role, we encourage you to apply!</p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-12 py-4 bg-primary text-white font-bold font-display uppercase tracking-widest text-sm hover:bg-primary-light transition-colors w-full sm:w-auto text-center"
                    >
                        Apply Now
                    </Link>
                </div>

            </div>
        </div>
    );
}

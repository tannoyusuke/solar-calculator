import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/lib/i18n-config";

export default async function ProjectsPage({ params }: { params: { lang: Locale } }) {
    const dict = await getDictionary(params.lang);
    return (
        <div className="pt-32 pb-24 min-h-screen">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="inline-flex items-center gap-4 mb-6">
                    <div className="h-px w-12 bg-primary/50" />
                    <h2 className="text-sm tracking-[0.3em] text-primary/80 font-display uppercase">PROJECTS & CASES</h2>
                </div>
                <h1 className="text-4xl md:text-6xl font-display font-medium tracking-tight mb-8">
                    {dict.projects.title}
                </h1>
                <p className="text-gray-400 font-sans tracking-wide leading-relaxed max-w-2xl mb-16">
                    {dict.projects.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Placeholder for project cases */}
                    {dict.projects.cases.map((c: any, i: number) => (
                        <div key={i} className="border border-white/10 group cursor-pointer overflow-hidden relative">
                            <div className="aspect-[4/3] bg-white/5 relative overflow-hidden">
                                {/* Replace with generated images of client/employee discussions later */}
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 group-hover:scale-105 group-hover:opacity-60 transition-all duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                                <div className="absolute bottom-4 left-4 z-10 flex gap-2">
                                    <span className="text-[10px] font-sans text-primary/80 border border-primary/30 px-2 py-1 bg-background/80 backdrop-blur-sm">{c.category}</span>
                                </div>
                            </div>
                            <div className="p-6 bg-white/[0.02]">
                                <h3 className="text-xl font-bold font-sans tracking-wide mb-3 text-white">
                                    {c.title}
                                </h3>
                                <p className="text-sm text-gray-400 font-sans">{c.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

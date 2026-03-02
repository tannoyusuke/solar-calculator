import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Dictionary } from "@/lib/dictionary";

export function Footer({ dict, lang }: { dict: Dictionary; lang: string }) {
    return (
        <footer className="bg-black/95 border-t border-white/10 pt-20 pb-10 w-full mt-auto relative overflow-hidden">
            {/* Decorative Glow */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-white/5 blur-[100px] pointer-events-none" />
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    {/* Logo & Vision */}
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="inline-block mb-6 group">
                            <span className="text-3xl font-display font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 group-hover:to-white transition-colors duration-500">
                                TRYFUNDS
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed tracking-wider font-sans max-w-sm whitespace-pre-line">
                            {dict.footer.vision}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-bold font-sans tracking-widest text-white mb-6">
                            {dict.footer.corporate_business}
                        </h4>
                        <ul className="space-y-4 font-sans text-sm tracking-wider">
                            <li>
                                <Link href={`/${lang}/philosophy`} className="text-gray-400 hover:text-white transition-all hover:translate-x-1 inline-block">{dict.navigation.about.items.philosophy}</Link>
                            </li>
                            <li>
                                <Link href={`/${lang}/company`} className="text-gray-400 hover:text-white transition-all hover:translate-x-1 inline-block">{dict.navigation.about.items.company}</Link>
                            </li>
                            <li>
                                <Link href={`/${lang}/services`} className="text-gray-400 hover:text-white transition-all hover:translate-x-1 inline-block">{dict.navigation.business.items.services}</Link>
                            </li>
                            <li>
                                <Link href={`/${lang}/portfolio`} className="text-gray-400 hover:text-white transition-all hover:translate-x-1 inline-block">{dict.navigation.business.items.portfolio}</Link>
                            </li>
                            <li>
                                <Link href={`/${lang}/case-study`} className="text-gray-400 hover:text-white transition-all hover:translate-x-1 inline-block">{dict.navigation.business.items.caseStudy}</Link>
                            </li>
                            <li>
                                <Link href={`/${lang}/recruit`} className="text-gray-400 hover:text-white transition-all hover:translate-x-1 inline-block">{dict.navigation.recruit.title}</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-sm font-bold font-sans tracking-widest text-white mb-6">
                            {dict.footer.office}
                        </h4>
                        <ul className="space-y-2 font-sans text-sm text-gray-400 tracking-wide mb-8">
                            {dict.footer.address.map((line: string, idx: number) => (
                                <li key={idx}>{line}</li>
                            ))}
                        </ul>
                        <Link
                            href={`/${lang}/contact`}
                            className="inline-flex items-center gap-2 border border-white/20 hover:border-white/50 bg-white/5 hover:bg-white/10 text-white text-xs font-bold tracking-widest px-6 py-3 transition-all hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] group"
                        >
                            {dict.footer.contact} <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs font-sans text-gray-500 tracking-widest">
                    <p>&copy; {new Date().getFullYear()} Tryfunds Inc. All Rights Reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href={`/${lang}/privacy`} className="hover:text-white transition-colors">{dict.footer.privacy}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

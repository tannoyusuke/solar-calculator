"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import clsx from "clsx";
import { TryfundsLogo } from "@/components/ui/TryfundsLogo";
import type { Dictionary } from "@/lib/dictionary";

export function Header({ dict, lang }: { dict: Dictionary; lang: string }) {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleLangPath = () => {
        if (!pathname) return '/';
        const targetLang = lang === 'ja' ? 'en' : 'ja';
        return pathname.replace(`/${lang}`, `/${targetLang}`);
    };

    const navStructure = [
        {
            name: dict.navigation.about.title,
            subItems: [
                { name: dict.navigation.about.items.philosophy, href: `/${lang}/philosophy` },
                { name: dict.navigation.about.items.company, href: `/${lang}/company` },
                { name: dict.navigation.about.items.message, href: `/${lang}/message` },
                { name: dict.navigation.about.items.access, href: `/${lang}/access` },
            ]
        },
        {
            name: dict.navigation.business.title,
            subItems: [
                { name: dict.navigation.business.items.services, href: `/${lang}/services` },
                { name: dict.navigation.business.items.portfolio, href: `/${lang}/portfolio` },
                { name: dict.navigation.business.items.caseStudy, href: `/${lang}/case-study` },
            ]
        },
        {
            name: dict.navigation.members,
            href: `/${lang}/members`
        },
        {
            name: dict.navigation.recruit.title,
            subItems: [
                { name: dict.navigation.recruit.items.future, href: `/${lang}/recruit/future` },
                { name: dict.navigation.recruit.items.careers, href: `/${lang}/recruit/careers` },
                { name: dict.navigation.recruit.items.persona, href: `/${lang}/recruit/persona` },
                { name: dict.navigation.recruit.items.roles, href: `/${lang}/recruit#open-roles` },
            ]
        },
        { name: dict.navigation.news, href: `/${lang}/news` },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header
            className={clsx(
                "fixed top-0 left-0 w-full z-50 transition-all duration-500",
                {
                    "bg-black/80 backdrop-blur-xl border-b border-white/10 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)]": isScrolled,
                    "bg-transparent py-6": !isScrolled,
                }
            )}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
                <Link href={`/${lang}`} className="group relative flex items-center">
                    <TryfundsLogo className="h-6 md:h-7 relative z-10 transition-transform duration-300 group-hover:opacity-80" />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navStructure.map((item) => (
                        <div key={item.name} className="relative group">
                            {item.subItems ? (
                                <div className="flex items-center gap-1 cursor-pointer py-4 text-sm font-sans tracking-widest text-gray-300 hover:text-white transition-colors">
                                    {item.name}
                                    <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:rotate-180 transition-transform duration-300" />

                                    {/* Dropdown Menu */}
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50">
                                        <div className="bg-black/95 backdrop-blur-3xl border border-white/10 rounded-lg shadow-2xl overflow-hidden min-w-[200px] py-2 flex flex-col">
                                            {item.subItems.map(sub => (
                                                <Link
                                                    key={sub.name}
                                                    href={sub.href}
                                                    className="px-6 py-3 text-sm font-sans tracking-widest text-gray-400 hover:text-white hover:bg-white/5 transition-colors whitespace-nowrap"
                                                >
                                                    {sub.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    href={item.href!}
                                    className="text-sm font-sans tracking-widest text-gray-300 hover:text-white transition-all relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-right hover:after:origin-left py-4"
                                >
                                    {item.name}
                                </Link>
                            )}
                        </div>
                    ))}
                    <Link
                        href={`/${lang}/contact`}
                        className="text-sm font-bold font-sans tracking-widest text-black bg-white/90 hover:bg-white px-8 py-3 transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:-translate-y-0.5 border border-transparent ml-4"
                    >
                        {dict.navigation.contact}
                    </Link>
                    {/* Language Switcher */}
                    <Link
                        href={toggleLangPath()}
                        className="ml-2 flex items-center gap-2 text-xs font-sans font-bold tracking-widest text-gray-400 hover:text-white transition-colors"
                    >
                        <Globe className="w-4 h-4" />
                        {lang === 'ja' ? 'EN' : 'JP'}
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-white p-2 relative z-50 hover:text-gray-300 transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Nav Overlay */}
                {isMenuOpen && (
                    <div className="fixed top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 lg:hidden z-40 overflow-y-auto py-20">
                        {navStructure.map((item, idx) => (
                            <div key={item.name} className="flex flex-col items-center animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                                {item.subItems ? (
                                    <>
                                        <div className="text-xl font-display font-bold tracking-widest text-primary-light mb-4">
                                            {item.name}
                                        </div>
                                        <div className="flex flex-col flex-wrap items-center gap-4 mb-4">
                                            {item.subItems.map(sub => (
                                                <Link
                                                    key={sub.name}
                                                    href={sub.href}
                                                    onClick={closeMenu}
                                                    className="text-lg font-sans tracking-widest text-gray-300 hover:text-white transition-colors"
                                                >
                                                    {sub.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    <Link
                                        href={item.href!}
                                        onClick={closeMenu}
                                        className="text-2xl font-display font-light tracking-widest text-white hover:text-gray-300 transition-colors mb-2"
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                        <Link
                            href={`/${lang}/contact`}
                            onClick={closeMenu}
                            className="text-xl font-bold font-sans tracking-widest text-black bg-white px-12 py-4 transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] mt-8 animate-fade-in-up border border-transparent"
                            style={{ animationDelay: `${navStructure.length * 0.1}s` }}
                        >
                            {dict.navigation.contact}
                        </Link>
                        {/* Mobile Language Switcher */}
                        <Link
                            href={toggleLangPath()}
                            onClick={closeMenu}
                            className="mt-6 flex items-center gap-2 text-base font-sans font-bold tracking-widest text-gray-400 hover:text-white animate-fade-in-up"
                            style={{ animationDelay: `${(navStructure.length + 1) * 0.1}s` }}
                        >
                            <Globe className="w-5 h-5" />
                            {lang === 'ja' ? 'English (EN)' : 'Japanese (JP)'}
                        </Link>
                    </div>
                )}
            </div>
        </header>
    );
}

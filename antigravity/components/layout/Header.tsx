"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import clsx from "clsx";
import { TryfundsLogo } from "@/components/ui/TryfundsLogo";

const navStructure = [
    {
        name: "ABOUT US",
        subItems: [
            { name: "Philosophy", href: "/philosophy" },
            { name: "Company", href: "/company" },
            { name: "Access", href: "/company#access" },
        ]
    },
    {
        name: "BUSINESS",
        subItems: [
            { name: "Services", href: "/services" },
            { name: "Portfolio", href: "/portfolio" },
            { name: "Case Study", href: "/case-study" },
        ]
    },
    {
        name: "MEMBER",
        href: "/members"
    },
    {
        name: "RECRUIT",
        subItems: [
            { name: "Future Vision", href: "/recruit/future" },
            { name: "Careers & Philosophy", href: "/recruit/careers" },
            { name: "Open Roles", href: "/recruit#open-roles" },
        ]
    },
    { name: "NEWS", href: "/news" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                <Link href="/" className="group relative flex items-center">
                    <div className="absolute -inset-2 bg-white/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                    <TryfundsLogo className="h-6 md:h-7 relative z-10 transition-transform duration-300 group-hover:scale-105" />
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
                                    className="text-sm font-sans tracking-widest text-gray-300 hover:text-white transition-all relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-white after:shadow-[0_0_8px_rgba(255,255,255,0.8)] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-right hover:after:origin-left hover:text-shadow-[0_0_10px_rgba(255,255,255,0.5)] py-4"
                                >
                                    {item.name}
                                </Link>
                            )}
                        </div>
                    ))}
                    <Link
                        href="/contact"
                        className="text-sm font-bold font-sans tracking-widest text-black bg-white/90 hover:bg-white px-8 py-3 transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:-translate-y-0.5 border border-transparent ml-4"
                    >
                        CONTACT
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
                            href="/contact"
                            onClick={closeMenu}
                            className="text-xl font-bold font-sans tracking-widest text-black bg-white px-12 py-4 transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] mt-8 animate-fade-in-up border border-transparent"
                            style={{ animationDelay: `${navStructure.length * 0.1}s` }}
                        >
                            CONTACT
                        </Link>
                    </div>
                )}
            </div>
        </header>
    );
}

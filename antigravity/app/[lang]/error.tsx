"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, RefreshCw } from "lucide-react";

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error("Global Error Boundary caught:", error);
    }, [error]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-background px-6">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-900/10 blur-[150px] pointer-events-none mix-blend-screen" />

            <div className="text-center max-w-xl relative z-10">
                <div className="inline-flex items-center gap-4 mb-6 justify-center w-full">
                    <div className="h-px w-12 bg-red-500/50" />
                    <h2 className="text-sm tracking-[0.3em] text-red-400 font-display">SYSTEM ERROR</h2>
                    <div className="h-px w-12 bg-red-500/50" />
                </div>

                <h1 className="text-4xl md:text-5xl font-display font-medium tracking-widest text-white mb-8 leading-tight">
                    予期せぬエラーが発生しました
                </h1>

                <p className="text-gray-400 font-sans tracking-wide leading-relaxed mb-12 min-h-[80px]">
                    大変申し訳ございません。システムエラーが発生したため、リクエストを処理できませんでした。<br />
                    しばらく時間をおいてから、再度お試しください。
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={() => reset()}
                        className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary/10 border border-primary/30 text-white font-display text-sm tracking-widest hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 group"
                    >
                        <RefreshCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
                        <span>RETRY</span>
                    </button>

                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-white/20 text-white font-display text-sm tracking-widest hover:bg-white/5 transition-all duration-300 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
                        <span>RETURN TO TOP</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

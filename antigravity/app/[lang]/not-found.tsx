import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function GlobalNotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background px-6">
            <div className="text-center max-w-xl">
                <div className="inline-flex items-center gap-4 mb-6 justify-center w-full">
                    <div className="h-px w-12 bg-primary/50" />
                    <h2 className="text-sm tracking-[0.3em] text-primary-light font-display">404 ERROR</h2>
                    <div className="h-px w-12 bg-primary/50" />
                </div>
                
                <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-6 tracking-widest drop-shadow-lg">
                    404
                </h1>
                
                <h3 className="text-2xl font-sans text-gray-200 mb-6 tracking-wide">
                    Page Not Found
                </h3>
                
                <p className="text-gray-400 font-sans leading-relaxed mb-10 tracking-wide text-sm md:text-base">
                    お探しのページが見つかりませんでした。<br/>
                    URLが間違っているか、ページが移動または削除された可能性があります。
                </p>
                
                <div className="flex justify-center">
                    <Link 
                        href="/"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/20 text-white font-display text-sm tracking-widest hover:bg-white/10 hover:border-white/40 transition-all duration-300 group"
                    >
                        <span>RETURN TO TOP</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

"use client";

import { motion } from "framer-motion";

export function EnvisionGraphic() {
    return (
        <div className="w-full max-w-[1000px] mx-auto min-h-[400px] md:min-h-[500px] relative flex items-center justify-center px-4 py-12 md:p-12 group">

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] pointer-events-none rounded-full" />

            {/* The Infinity Structure */}
            <div className="relative flex items-center justify-center z-10 transition-transform duration-700 hover:scale-[1.02] w-full max-w-[800px]">

                {/* Left Loop (Envision) */}
                <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full border border-primary-light flex flex-col items-center justify-center bg-transparent z-20"
                    style={{ transform: "translateX(15%)" }}>

                    {/* Text Container shifted to the left to avoid intersection */}
                    <div className="flex flex-col items-center justify-center pr-8 md:pr-16 text-center">
                        <span className="block font-display text-2xl md:text-5xl text-white tracking-[0.1em] font-light mb-3 break-words">Envision</span>
                        <span className="block font-sans text-[10px] md:text-sm text-primary-light font-bold tracking-widest pl-2">より高いビジョンを描く</span>
                    </div>

                    {/* Top Arrow (pointing left) */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-4 text-primary-light">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                    </div>
                </div>

                {/* Right Loop (Missing Parts) */}
                <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full border border-blue-400 flex flex-col items-center justify-center bg-transparent z-10"
                    style={{ transform: "translateX(-15%)" }}>

                    {/* Text Container shifted to the right to avoid intersection */}
                    <div className="flex flex-col items-center justify-center pl-8 md:pl-16 text-center max-w-[200px] md:max-w-[280px]">
                        <span className="block font-display text-lg md:text-3xl text-white tracking-[0.1em] font-light leading-[1.3] mb-3">Missing parts<br />completion</span>
                        <span className="block font-sans text-[10px] md:text-sm text-blue-300 font-bold tracking-widest">不足する経営資源を補う</span>
                    </div>

                    {/* Bottom Arrow (pointing left) */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-background px-4 text-blue-400">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                    </div>
                </div>

                {/* Connecting center node / accent */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex items-center justify-center mt-1">
                    {/* The glowing dot */}
                    <div className="w-3 h-3 md:w-5 md:h-5 rounded-full bg-white shadow-[0_0_20px_4px_rgba(255,255,255,0.8)] relative">
                        <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-60"></div>
                    </div>
                </div>

            </div>
        </div>
    );
}

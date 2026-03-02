"use client";

import { useState } from "react";
import { Copy, Check, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function AccessSection() {
    const [copied, setCopied] = useState(false);

    const addressInfo = {
        postal: "〒105-0014",
        address1: "東京都港区芝3丁目1番14号",
        address2: "芝公園阪神ビル5階"
    };

    const fullAddress = `${addressInfo.postal} ${addressInfo.address1} ${addressInfo.address2}`;

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(fullAddress);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy text: ", err);
        }
    };

    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-32 border-t border-white/10 pt-20"
            id="access"
        >
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
                <div>
                    <h3 className="text-2xl font-display tracking-widest text-white flex items-center gap-4">
                        <MapPin className="w-5 h-5 text-primary-light" />
                        ACCESS
                    </h3>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white/[0.02] border border-white/5 p-6 md:p-10 rounded-2xl">

                {/* Text Info */}
                <div className="lg:col-span-5 flex flex-col justify-center">
                    <div className="mb-8">
                        <h4 className="text-lg font-sans font-bold text-white mb-2">本社（Headquarters）</h4>
                        <div className="w-8 h-px bg-primary/50 mb-6" />

                        <div className="text-gray-300 font-sans tracking-widest leading-loose text-sm md:text-base">
                            <p>{addressInfo.postal}</p>
                            <p>{addressInfo.address1}</p>
                            <p>{addressInfo.address2}</p>
                        </div>
                    </div>

                    <button
                        onClick={handleCopy}
                        className="group relative flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 rounded overflow-hidden"
                    >
                        {copied ? (
                            <>
                                <Check className="w-4 h-4 text-green-400" />
                                <span className="text-sm font-display tracking-widest text-green-400 font-bold uppercase">Copied!</span>
                            </>
                        ) : (
                            <>
                                <Copy className="w-4 h-4 text-primary-light group-hover:scale-110 transition-transform" />
                                <span className="text-sm font-display tracking-widest text-white uppercase text-center">Copy Address</span>
                            </>
                        )}
                    </button>
                </div>

                {/* Map Embed */}
                <div className="lg:col-span-7 h-[400px] w-full rounded-lg overflow-hidden border border-white/5 grayscale hover:grayscale-0 transition-all duration-700">
                    <iframe
                        src="https://maps.google.com/maps?q=東京都港区芝3丁目1番14号&t=&z=16&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        style={{ border: 0 }}
                        allowFullScreen
                        aria-hidden="false"
                        tabIndex={0}
                        title="Tryfunds Headquarters Map"
                    />
                </div>

            </div>
        </motion.section>
    );
}

"use client";

import { TrackRecord as TrackRecordSection } from "@/components/home/TrackRecord";

export default function TrackRecordPage() {
    return (
        <div className="pt-32 pb-20 min-h-screen">
            <div className="max-w-4xl mx-auto px-6 mb-16">
                <h1 className="text-4xl md:text-5xl font-display font-medium tracking-widest mb-8">
                    TRACK RECORD
                </h1>
                <p className="text-gray-400 font-sans leading-relaxed tracking-wider mb-8">
                    自らの事業と出資先の成長にコミットすることで生み出してきた、
                    唯一無二の実績をご紹介します。
                </p>
            </div>

            <TrackRecordSection />
        </div>
    );
}

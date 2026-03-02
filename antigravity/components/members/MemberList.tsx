"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Member } from "@/types";
import { X } from "lucide-react";

export function MemberList({ members }: { members: Member[] }) {
    const [selectedMember, setSelectedMember] = useState<Member | null>(null);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (selectedMember) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [selectedMember]);

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                {members.map((member) => (
                    <div
                        key={member.id}
                        className="group relative flex flex-col cursor-pointer"
                        onClick={() => setSelectedMember(member)}
                    >
                        {/* Photo */}
                        <div className="relative w-full aspect-[4/5] overflow-hidden bg-white/5 transition-all duration-700">
                            <Image
                                src={member.imageUrl}
                                alt={member.name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                            <div className="absolute bottom-6 left-6 right-6">
                                <h3 className="text-2xl font-sans font-bold text-white mb-1 shadow-sm">
                                    {member.name}
                                </h3>
                                <div
                                    className="text-xs tracking-[0.2em] text-primary-light font-display font-bold uppercase-text-only"
                                    style={{ textTransform: 'uppercase' }}
                                    dangerouslySetInnerHTML={{ __html: member.role }}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedMember && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
                    <div className="relative w-full max-w-5xl max-h-[90vh] bg-[#111] border border-white/10 overflow-hidden shadow-2xl flex flex-col md:flex-row animate-in slide-in-from-bottom-4 duration-500">
                        {/* Close button */}
                        <button
                            onClick={() => setSelectedMember(null)}
                            className="absolute top-4 right-4 z-10 w-12 h-12 flex items-center justify-center bg-black/50 hover:bg-white/10 rounded-full transition-colors text-white"
                            aria-label="Close modal"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Image Panel */}
                        <div className="w-full md:w-5/12 h-[40vh] md:h-auto md:max-h-[90vh] relative bg-white/5 shrink-0">
                            <Image
                                src={selectedMember.imageUrl}
                                alt={selectedMember.name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#111] via-transparent to-transparent opacity-100 md:opacity-40" />
                        </div>

                        {/* Content Panel */}
                        <div className="w-full md:w-7/12 p-8 md:p-12 lg:p-16 flex flex-col overflow-y-auto max-h-[50vh] md:max-h-[90vh]">
                            <div
                                className="text-xs tracking-[0.2em] text-primary-light font-display font-bold mb-4 uppercase-text-only"
                                style={{ textTransform: 'uppercase' }}
                                dangerouslySetInnerHTML={{ __html: selectedMember.role }}
                            />
                            <h2 className="text-3xl md:text-5xl font-sans font-bold text-white mb-2">
                                {selectedMember.name}
                            </h2>
                            <p className="text-sm font-sans tracking-widest text-gray-400 uppercase mb-8">
                                {selectedMember.nameEn}
                            </p>

                            <div className="w-12 h-px bg-white/20 mb-8 shrink-0" />

                            <div className="prose prose-invert prose-p:text-gray-300 prose-p:leading-[2.2] prose-p:tracking-wider prose-p:text-[15px] max-w-none pb-8">
                                {selectedMember.description.split('\n').map((paragraph: string, index: number) => (
                                    paragraph.trim() ? <p key={index}>{paragraph}</p> : <div key={index} className="h-4" />
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Background click to close */}
                    <div className="absolute inset-0 -z-10" onClick={() => setSelectedMember(null)} />
                </div>
            )}
        </>
    );
}

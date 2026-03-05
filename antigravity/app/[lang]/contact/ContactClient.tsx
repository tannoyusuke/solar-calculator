"use client";

import { useState } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";

export function ContactClient({ dict }: { dict: any }) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const [formData, setFormData] = useState({
        company: "",
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMsg("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formData, type: "contact" })
            });

            if (!res.ok) {
                throw new Error("Failed to send message");
            }

            setIsSuccess(true);
            setFormData({ company: "", name: "", email: "", message: "" });
        } catch (err) {
            setErrorMsg(dict.form.error || "送信に失敗しました。時間をおいて再度お試しください。");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="pt-32 pb-20 px-6 min-h-screen">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-display font-medium tracking-widest mb-12">
                    {dict.title}
                </h1>
                <p
                    className="text-gray-400 font-sans leading-relaxed tracking-wider mb-12"
                    dangerouslySetInnerHTML={{ __html: dict.description }}
                />

                {isSuccess ? (
                    <div className="bg-primary/10 border border-primary/30 p-8 text-center mt-8">
                        <CheckCircle2 className="w-12 h-12 text-primary-light mx-auto mb-4" />
                        <h3 className="text-xl font-display tracking-widest text-white mb-4">送信完了</h3>
                        <p className="text-gray-400 font-sans text-sm leading-relaxed">
                            お問い合わせありがとうございます。<br />
                            担当者より通常2営業日以内にご連絡いたします。
                        </p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6 font-sans">
                        {errorMsg && (
                            <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                                {errorMsg}
                            </div>
                        )}
                        <div>
                            <label className="block text-sm text-gray-400 mb-2">{dict.form.company}</label>
                            <input
                                required
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                type="text"
                                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-white/30"
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm text-gray-400 mb-2">{dict.form.name}</label>
                                <input
                                    required
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    type="text"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-white/30"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-400 mb-2">{dict.form.email}</label>
                                <input
                                    required
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    type="email"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-white/30"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm text-gray-400 mb-2">{dict.form.message}</label>
                            <textarea
                                required
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={6}
                                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-white/30"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-white text-black font-bold tracking-widest py-4 rounded-lg mt-8 hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : dict.form.submit}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}

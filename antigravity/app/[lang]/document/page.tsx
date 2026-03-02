"use client";

import { motion } from "framer-motion";
import { Send, FileText, CheckCircle2, AlertCircle } from "lucide-react";
import { useState } from "react";

// List of common free public email domains to block
const PUBLIC_DOMAINS = [
    "gmail.com", "yahoo.com", "yahoo.co.jp", "hotmail.com", "outlook.com",
    "icloud.com", "me.com", "mac.com", "msn.com", "live.jp", "live.com",
    "ezweb.ne.jp", "au.com", "docomo.ne.jp", "softbank.ne.jp", "i.softbank.jp"
];

export default function DocumentPage() {
    const [emailError, setEmailError] = useState("");
    const [email, setEmail] = useState("");

    const validateEmail = (val: string) => {
        setEmail(val);
        setEmailError("");
        if (!val) return;

        const domain = val.split('@')[1]?.toLowerCase();
        if (domain && PUBLIC_DOMAINS.includes(domain)) {
            setEmailError("フリーメールアドレス（gmail等）はご利用いただけません。会社（法人）ドメインのメールアドレスをご入力ください。");
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (emailError) return;
        // submit logic here...
        alert("送信シミュレーション：完了しました");
    };

    return (
        <div className="pt-32 pb-24 min-h-screen bg-background">
            <div className="max-w-4xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <div className="inline-flex items-center gap-4 justify-center mb-6">
                        <div className="h-px w-12 bg-primary/50" />
                        <h2 className="text-sm tracking-[0.3em] text-primary/80 font-display uppercase">Document Request</h2>
                        <div className="h-px w-12 bg-primary/50" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-8 leading-tight">
                        会社・プロジェクト概要書<br className="hidden md:block" />ダウンロード
                    </h1>
                    <p className="text-gray-400 font-sans tracking-wide leading-relaxed">
                        Tryfundsの事業や実績、組織風土に関する概要資料をお送りします。<br className="hidden md:block" />
                        必要事項をご入力の上、送信してください。
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Document Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white/[0.02] border border-white/10 p-8 flex flex-col items-start h-fit sticky top-32"
                    >
                        <FileText className="w-12 h-12 text-primary mb-6" />
                        <h3 className="text-2xl font-bold font-sans tracking-wide mb-4 text-white">
                            Corporate Profile & Case Studies
                        </h3>
                        <p className="text-sm text-gray-400 font-sans leading-relaxed mb-6">
                            本資料では、弊社公式サイトでは公開していない具体的なプロジェクト事例の深掘りや、ハイブリッドモデルの仕組み、グローバルネットワークの全容などの一部を解説しています。
                        </p>
                        <ul className="flex flex-col gap-3 w-full">
                            {[
                                "Tryfundsの会社概要と沿革",
                                "インフラ/PEファンド投資事例",
                                "ハンズオン事業再生のプロセス",
                                "プロジェクト概要 等"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-sm text-gray-300 font-sans">
                                    <CheckCircle2 className="w-5 h-5 text-primary/80 shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-xs font-sans tracking-widest text-gray-400 mb-2 uppercase">会社名 *</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors font-sans placeholder:text-gray-600"
                                    placeholder="例: 株式会社トライファンズ"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-sans tracking-widest text-gray-400 mb-2 uppercase">部署</label>
                                    <input
                                        type="text"
                                        className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors font-sans placeholder:text-gray-600"
                                        placeholder="例: 経営企画部"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-sans tracking-widest text-gray-400 mb-2 uppercase">役職</label>
                                    <input
                                        type="text"
                                        className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors font-sans placeholder:text-gray-600"
                                        placeholder="例: 部長"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-sans tracking-widest text-gray-400 mb-3 uppercase">目的 *</label>
                                <div className="space-y-3 bg-white/5 border border-white/20 p-4">
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input type="checkbox" className="form-checkbox bg-transparent border-white/40 text-primary focus:ring-primary focus:ring-offset-background cursor-pointer" />
                                        <span className="text-sm font-sans text-gray-300 group-hover:text-white transition-colors">自社の課題解決・コンサルティング依頼の検討</span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input type="checkbox" className="form-checkbox bg-transparent border-white/40 text-primary focus:ring-primary focus:ring-offset-background cursor-pointer" />
                                        <span className="text-sm font-sans text-gray-300 group-hover:text-white transition-colors">事業投資・M&A・ファンド出資の検討</span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input type="checkbox" className="form-checkbox bg-transparent border-white/40 text-primary focus:ring-primary focus:ring-offset-background cursor-pointer" />
                                        <span className="text-sm font-sans text-gray-300 group-hover:text-white transition-colors">業務提携・パートナーシップの検討</span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input type="checkbox" className="form-checkbox bg-transparent border-white/40 text-primary focus:ring-primary focus:ring-offset-background cursor-pointer" />
                                        <span className="text-sm font-sans text-gray-300 group-hover:text-white transition-colors">その他・情報収集</span>
                                    </label>
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-sans tracking-widest text-gray-400 mb-2 uppercase">Email *</label>
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => validateEmail(e.target.value)}
                                    className={`w-full bg-white/5 border px-4 py-3 text-white focus:outline-none transition-colors font-sans placeholder:text-gray-600 ${emailError ? 'border-red-500 focus:border-red-500' : 'border-white/20 focus:border-primary'}`}
                                    placeholder="会社アドレスをご入力ください"
                                />
                                {emailError && (
                                    <p className="text-red-400 text-xs font-sans mt-2 flex items-start gap-1">
                                        <AlertCircle size={14} className="shrink-0 mt-0.5" />
                                        {emailError}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label className="block text-xs font-sans tracking-widest text-gray-400 mb-2 uppercase">自由記述</label>
                                <textarea
                                    rows={4}
                                    className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors font-sans placeholder:text-gray-600 resize-none"
                                    placeholder="具体的なご相談内容や背景がございましたらご記入ください"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={!!emailError}
                                className={`mt-4 w-full font-display font-bold tracking-widest py-4 px-8 flex items-center justify-center gap-3 transition-all ${emailError ? 'bg-white/20 text-white/50 cursor-not-allowed' : 'bg-white text-black hover:bg-gray-200 group'}`}
                            >
                                <Send size={18} className={emailError ? '' : 'group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform'} />
                                SEND REQUEST
                            </button>
                            <p className="text-[10px] text-gray-500 font-sans text-center mt-2 leading-relaxed">
                                送信することで、当社のプライバシーポリシーに同意したものとみなされます。<br />
                                競合他社様からのご請求はお断りさせていただく場合がございます。
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

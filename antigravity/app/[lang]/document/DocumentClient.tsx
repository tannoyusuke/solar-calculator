"use client";

import { motion } from "framer-motion";
import { Send, FileText, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { useState } from "react";

// List of common free public email domains to block
const PUBLIC_DOMAINS = [
    "gmail.com", "yahoo.com", "yahoo.co.jp", "hotmail.com", "outlook.com",
    "icloud.com", "me.com", "mac.com", "msn.com", "live.jp", "live.com",
    "ezweb.ne.jp", "au.com", "docomo.ne.jp", "softbank.ne.jp", "i.softbank.jp"
];

export function DocumentClient({ dict }: { dict: any }) {
    const [emailError, setEmailError] = useState("");
    const [email, setEmail] = useState("");

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    // Add state for form fields
    const [formData, setFormData] = useState({
        company: "",
        department: "",
        position: "",
        freeText: "",
    });
    const [purposes, setPurposes] = useState<string[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handlePurposeChange = (purpose: string) => {
        setPurposes(prev =>
            prev.includes(purpose)
                ? prev.filter(p => p !== purpose)
                : [...prev, purpose]
        );
    };

    const validateEmail = (val: string) => {
        setEmail(val);
        setEmailError("");
        if (!val) return;

        const domain = val.split('@')[1]?.toLowerCase();
        if (domain && PUBLIC_DOMAINS.includes(domain)) {
            setEmailError(dict.form.emailError || "フリーアドレスはご利用いただけません。");
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (emailError) return;
        if (purposes.length === 0) {
            setErrorMsg("ご希望の資料を選択してください。");
            return;
        }

        setIsSubmitting(true);
        setErrorMsg("");

        try {
            const payloadMessage = `
【希望資料】
${purposes.join(", ")}

【部署】
${formData.department || "-"}

【役職】
${formData.position || "-"}

【自由記入欄】
${formData.freeText || "-"}
            `.trim();

            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    type: "document",
                    name: "資料請求希望者", // Name is not in form, hardcode fallback
                    email: email,
                    company: formData.company,
                    message: payloadMessage
                })
            });

            if (!res.ok) {
                throw new Error("Failed to send message");
            }

            setIsSuccess(true);
        } catch (err) {
            setErrorMsg("送信に失敗しました。お手数ですが、info@tryfunds.comへ直接ご連絡ください。");
        } finally {
            setIsSubmitting(false);
        }
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
                        <h2 className="text-sm tracking-[0.3em] text-primary/80 font-display uppercase">{dict.header.subtitle}</h2>
                        <div className="h-px w-12 bg-primary/50" />
                    </div>
                    <h1
                        className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-8 leading-tight"
                        dangerouslySetInnerHTML={{ __html: dict.header.title }}
                    />
                    <p
                        className="text-gray-400 font-sans tracking-wide leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: dict.header.description }}
                    />
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
                            {dict.info.title}
                        </h3>
                        <p className="text-sm text-gray-400 font-sans leading-relaxed mb-6">
                            {dict.info.description}
                        </p>
                        <ul className="flex flex-col gap-3 w-full">
                            {dict.info.list.map((item: string, idx: number) => (
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
                        {isSuccess ? (
                            <div className="bg-primary/10 border border-primary/30 p-10 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
                                <CheckCircle2 className="w-16 h-16 text-primary-light mb-6" />
                                <h3 className="text-2xl font-display tracking-widest text-white mb-6">送信完了</h3>
                                <p className="text-gray-300 font-sans text-sm leading-relaxed mb-8">
                                    資料請求ありがとうございます。<br />
                                    ご入力いただいたメールアドレス宛に、資料ダウンロード用URLをお送りいたしました。
                                </p>
                            </div>
                        ) : (
                            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                                {errorMsg && (
                                    <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-sans flex items-center gap-2">
                                        <AlertCircle size={16} /> {errorMsg}
                                    </div>
                                )}
                                <div>
                                    <label className="block text-xs font-sans tracking-widest text-gray-400 mb-2 uppercase">{dict.form.company} *</label>
                                    <input
                                        type="text"
                                        required
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors font-sans placeholder:text-gray-600"
                                        placeholder={dict.form.companyPlaceholder}
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-sans tracking-widest text-gray-400 mb-2 uppercase">{dict.form.department}</label>
                                        <input
                                            type="text"
                                            name="department"
                                            value={formData.department}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors font-sans placeholder:text-gray-600"
                                            placeholder={dict.form.departmentPlaceholder}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-sans tracking-widest text-gray-400 mb-2 uppercase">{dict.form.position}</label>
                                        <input
                                            type="text"
                                            name="position"
                                            value={formData.position}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors font-sans placeholder:text-gray-600"
                                            placeholder={dict.form.positionPlaceholder}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-sans tracking-widest text-gray-400 mb-3 uppercase">{dict.form.purpose} *</label>
                                    <div className="space-y-3 bg-white/5 border border-white/20 p-4">
                                        {dict.form.purposes.map((purpose: string, i: number) => (
                                            <label key={i} className="flex items-center gap-3 cursor-pointer group">
                                                <input
                                                    type="checkbox"
                                                    checked={purposes.includes(purpose)}
                                                    onChange={() => handlePurposeChange(purpose)}
                                                    className="form-checkbox bg-transparent text-primary focus:ring-primary focus:ring-offset-background cursor-pointer"
                                                />
                                                <span className="text-sm font-sans text-gray-300 group-hover:text-white transition-colors">{purpose}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-sans tracking-widest text-gray-400 mb-2 uppercase">{dict.form.email} *</label>
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => validateEmail(e.target.value)}
                                        className={`w-full bg-white/5 border px-4 py-3 text-white focus:outline-none transition-colors font-sans placeholder:text-gray-600 ${emailError ? 'border-red-500 focus:border-red-500' : 'border-white/20 focus:border-primary'}`}
                                        placeholder={dict.form.emailPlaceholder}
                                    />
                                    {emailError && (
                                        <p className="text-red-400 text-xs font-sans mt-2 flex items-start gap-1">
                                            <AlertCircle size={14} className="shrink-0 mt-0.5" />
                                            {emailError}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-xs font-sans tracking-widest text-gray-400 mb-2 uppercase">{dict.form.freeText}</label>
                                    <textarea
                                        rows={4}
                                        name="freeText"
                                        value={formData.freeText}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors font-sans placeholder:text-gray-600 resize-none"
                                        placeholder={dict.form.freeTextPlaceholder}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={!!emailError || isSubmitting}
                                    className={`mt-4 w-full font-display font-bold tracking-widest py-4 px-8 flex items-center justify-center gap-3 transition-all ${(emailError || isSubmitting) ? 'bg-white/20 text-white/50 cursor-not-allowed' : 'bg-white text-black hover:bg-gray-200 group'}`}
                                >
                                    {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                                    {dict.form.submit}
                                </button>
                                <p
                                    className="text-[10px] text-gray-500 font-sans text-center mt-2 leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: dict.form.note }}
                                />
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

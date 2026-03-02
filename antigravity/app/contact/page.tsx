"use client";

export default function Contact() {
    return (
        <div className="pt-32 pb-20 px-6 min-h-screen">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-display font-medium tracking-widest mb-12">
                    CONTACT
                </h1>
                <p className="text-gray-400 font-sans leading-relaxed tracking-wider mb-12">
                    新規事業創出、M&A、事業投資に関するご相談など、お気軽にお問い合わせください。
                    後日、担当者よりご連絡させていただきます。
                </p>

                <form className="space-y-6 font-sans">
                    <div>
                        <label className="block text-sm text-gray-400 mb-2">御社名</label>
                        <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-white/30" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm text-gray-400 mb-2">お名前</label>
                            <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-white/30" />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-400 mb-2">メールアドレス</label>
                            <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-white/30" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm text-gray-400 mb-2">お問い合わせ内容</label>
                        <textarea rows={6} className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-white/30"></textarea>
                    </div>
                    <button type="button" className="w-full bg-white text-black font-bold tracking-widest py-4 rounded-lg mt-8 hover:bg-gray-200 transition-colors">
                        送信する
                    </button>
                </form>
            </div>
        </div>
    );
}

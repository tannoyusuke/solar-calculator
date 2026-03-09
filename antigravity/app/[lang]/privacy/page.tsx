import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionary";

export async function generateMetadata({ params: { lang } }: { params: { lang: any } }): Promise<Metadata> {
    const dict = await getDictionary(lang);
    return {
        title: `Privacy Policy | Tryfunds`,
    };
}

export default async function PrivacyPage({ params: { lang } }: { params: { lang: any } }) {
    const dict = await getDictionary(lang);
    const isJa = lang === 'ja';

    return (
        <div className="pt-32 pb-20 px-6 min-h-screen">
            <div className="max-w-4xl mx-auto font-sans">
                <h1 className="text-4xl md:text-5xl font-display font-medium tracking-widest mb-12 uppercase">
                    {dict.footer.privacy}
                </h1>

                <div className="space-y-12 text-gray-400 leading-relaxed bg-white/5 p-8 md:p-12 rounded-lg border border-white/10 backdrop-blur-sm">
                    <section>
                        <h2 className="text-2xl text-white font-bold mb-4 tracking-widest">{isJa ? '個人情報の取り扱いについて' : 'Handling of Personal Information'}</h2>
                        <p>{isJa ? '株式会社Tryfunds（以下、「当社」といいます。）は、お客様の個人情報の保護を重要事項と位置づけ、本プライバシーポリシーに基づき、その適切な管理に努めます。' : 'Tryfunds Inc. (hereinafter referred to as "the Company") considers the protection of customers\' personal information to be a matter of high importance and strives to manage it appropriately based on this Privacy Policy.'}</p>
                    </section>

                    <section>
                        <h2 className="text-xl text-white font-bold mb-4">{isJa ? '1. 個人情報の収集・利用' : '1. Collection and Use of Personal Information'}</h2>
                        <p>{isJa ? '当社は、お問い合わせへの対応、サービスのご案内、採用活動等に必要な範囲内で個人情報を適正に取得し利用いたします。' : 'The Company appropriately acquires and uses personal information within the scope necessary for responding to inquiries, providing service information, recruiting activities, etc.'}</p>
                    </section>

                    <section>
                        <h2 className="text-xl text-white font-bold mb-4">{isJa ? '2. 個人情報の第三者への提供' : '2. Disclosure of Personal Information to Third Parties'}</h2>
                        <p>{isJa ? '当社は、法令に基づく場合を除き、事前にお客様ご本人の同意を得ることなく個人情報を第三者に提供いたしません。' : 'Except as required by law, the Company will not provide personal information to any third party without obtaining the prior consent of the customer.'}</p>
                    </section>

                    <section>
                        <h2 className="text-xl text-white font-bold mb-4">{isJa ? '3. セキュリティ管理体制' : '3. Security Management'}</h2>
                        <p>{isJa ? '漏洩、紛失、改ざんなどのリスクに対して、合理的な安全対策を実施し個人情報を厳重に管理します。' : 'We implement reasonable safety measures and strictly manage personal information against risks such as leakage, loss, or falsification.'}</p>
                    </section>

                    <section>
                        <h2 className="text-xl text-white font-bold mb-4">{isJa ? '4. お問い合わせ窓口' : '4. Contact Information'}</h2>
                        <p>{isJa ? 'ご自身の個人情報に関する開示、訂正、利用停止等のご請求や、その他のお問い合わせにつきましては、当サイトの「CONTACT」よりご連絡ください。' : 'For requests regarding disclosure, correction, or suspension of use of your personal information, or any other inquiries, please contact us via "CONTACT" on this website.'}</p>
                    </section>
                </div>
            </div>
        </div>
    );
}

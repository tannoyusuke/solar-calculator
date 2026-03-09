import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionary";

export async function generateMetadata({ params: { lang } }: { params: { lang: any } }): Promise<Metadata> {
    const dict = await getDictionary(lang);
    return {
        title: `${dict.navigation.about.items.access} | Tryfunds`,
    };
}

export default async function AccessPage({ params: { lang } }: { params: { lang: any } }) {
    const dict = await getDictionary(lang);

    return (
        <div className="pt-32 pb-20 px-6 min-h-screen">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-display font-medium tracking-widest mb-12">
                    {dict.navigation.about.items.access}
                </h1>

                <div className="aspect-w-16 aspect-h-9 mb-12 h-[450px]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.6521501726002!2d139.74508491525835!3d35.65351858020088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bb5d1fb0be1%3A0xe67db511dd82eb75!2z44CSMTA1LTAwMTQgVG9reW8sIE1pbmF0byBDaXR5LCBTaGliYSwgMy1jaG9tZeSImjHiiJIxNCDiir1T44Kq44Oh44Kx44O7!5e0!3m2!1sen!2sjp!4v1680000000000!5m2!1sen!2sjp"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-lg border border-white/10"
                    ></iframe>
                </div>

                <div className="bg-white/5 border border-white/10 p-8 rounded-lg backdrop-blur-sm">
                    <h2 className="text-2xl tracking-widest font-bold mb-6">{dict.company.info.hq_label}</h2>
                    <p className="text-gray-400 font-sans leading-relaxed" dangerouslySetInnerHTML={{ __html: dict.company.info.hq_value }} />
                </div>
            </div>
        </div>
    );
}

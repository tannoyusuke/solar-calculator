import type { Metadata } from "next";
import { Inter, Noto_Sans_JP, Montserrat } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getDictionary } from "@/lib/dictionary";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Tryfunds | 意志ある挑戦を創造する",
  description:
    "Tryfundsは、コンサルティング、投資、M&A、エグゼクティブサーチを通じ、「意志ある挑戦を創造し、世界で戦える事業を創造する」事業運営会社です。",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  const dict = await getDictionary(params.lang as import("@/lib/i18n-config").Locale);

  return (
    <html lang={params.lang}>
      <body
        className={cn(
          inter.variable,
          notoSansJP.variable,
          montserrat.variable,
          "antialiased min-h-screen font-sans bg-background text-foreground flex flex-col"
        )}
      >
        <Header dict={dict} lang={params.lang} />
        <main className="flex-grow">{children}</main>
        <Footer dict={dict} lang={params.lang} />
      </body>
    </html>
  );
}



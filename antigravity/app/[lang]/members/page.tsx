import { members } from "@/data/members";
import { MemberList } from "@/components/members/MemberList";
import { ConversionCTA } from "@/components/layout/ConversionCTA";

export const metadata = {
    title: "Members | Tryfunds",
    description: "Tryfunds Groupのプロフェッショナルメンバーのご紹介",
};

export default function MembersPage() {
    return (
        <main className="flex min-h-screen flex-col w-full bg-background pt-32">

            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full mb-32">

                {/* Header */}
                <div className="mb-20 text-center md:text-left flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                    <div>
                        <div className="inline-flex items-center gap-4 mb-6 justify-center md:justify-start">
                            <div className="h-px w-12 bg-primary/50" />
                            <h2 className="text-sm tracking-[0.3em] text-primary-light font-display">Management Members</h2>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-display font-medium tracking-tight">
                            PROFESSIONALS
                        </h1>
                    </div>
                    <div className="max-w-md text-sm text-gray-400 font-sans tracking-widest leading-relaxed text-center md:text-right">
                        Tryfunds Groupの経営を牽引する、<br className="hidden md:block" />
                        マネジメントメンバー。<br />
                        それぞれ異なる高度な専門性を持つ人材が結集し、<br className="hidden md:block" />
                        意志ある挑戦を共に実現します。
                    </div>
                </div>

                {/* Member Grid */}
                <MemberList members={members} />

            </div>

            <ConversionCTA dict={dict.shared?.conversionCTA} />
        </main>
    );
}

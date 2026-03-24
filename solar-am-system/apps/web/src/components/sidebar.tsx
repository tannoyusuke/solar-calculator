"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mockWorkflowStats } from "@/lib/mock-workflow-data";
import { useAuth, type AuthUser } from "@/lib/auth-context";
import { useOnboarding } from "@/lib/onboarding-context";
import ProgressRing from "@/components/onboarding/progress-ring";

// =============================================================================
// サイドバー (#13 受信トレイ強調 + グローバル通知バナー + ロール別ナビ)
// =============================================================================

interface NavChild { label: string; href: string; }
interface NavItem { label: string; href: string; icon: React.ReactNode; children?: NavChild[]; roles?: AuthUser['role'][]; }
interface NavSection { title: string; items: NavItem[]; roles?: AuthUser['role'][]; }

const I = (d: string) => (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d={d} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>);

const navSections: NavSection[] = [
  {
    title: "運用監視",
    items: [
      { label: "受信トレイ", href: "/inbox", icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 5a1 1 0 011-1h12a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V5z" stroke="currentColor" strokeWidth="1.5"/><path d="M3 8h4l1.5 2h3L13 8h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>) },
      { label: "ダッシュボード", href: "/dashboard", icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><rect x="11" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><rect x="2" y="11" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><rect x="11" y="11" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/></svg>) },
      { label: "SPC管理", href: "/spcs", icon: I("M3 3h14v14H3zM3 10h14M10 3v14") },
      { label: "発電所管理", href: "/plants", icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="3.5" stroke="currentColor" strokeWidth="1.5"/><path d="M10 2V4.5M10 15.5V18M18 10H15.5M4.5 10H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>), children: [{ label: "新規登録", href: "/plants/register" }, { label: "マップ", href: "/plants/map" }] },
      { label: "アラート", href: "/alerts", icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M8.57 2.44a1.5 1.5 0 012.86 0l5.39 10.26A1.5 1.5 0 0115.39 15H4.61a1.5 1.5 0 01-1.43-2.3L8.57 2.44z" stroke="currentColor" strokeWidth="1.5"/><path d="M10 7.5V10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="10" cy="12.75" r="0.75" fill="currentColor"/></svg>) },
      { label: "タスク管理", href: "/tasks", icon: I("M3 3h14v14H3zM7 10l2 2 4-4") },
      { label: "PCS監視", href: "/monitoring/pcs", icon: I("M4 4h12v12H4zM7 4V2M13 4V2M4 9h12") },
      { label: "ストリング", href: "/monitoring/strings", icon: I("M3 6h14M3 10h14M3 14h14M6 3v14") },
    ],
  },
  {
    title: "財務・精算",
    items: [
      { label: "DSCR管理", href: "/finance/dscr", icon: I("M2 14l4-4 3 2 4-5 5 3M2 18h16"), children: [{ label: "コベナンツ管理", href: "/finance/covenants" }] },
      { label: "売電・精算", href: "/finance/revenue", icon: I("M10 2v16M6 6l4-4 4 4M3 10h14"), children: [{ label: "検針データ突合", href: "/finance/reconciliation" }] },
      { label: "売電契約", href: "/finance/power-sales", icon: I("M3 5h14M3 10h14M3 15h10M17 12v6M14 15h6") },
      { label: "予実管理", href: "/finance/budget", icon: I("M3 17V8l4-5 4 3 4-4 3 6v9H3zM3 13h14") },
      { label: "CF予測", href: "/finance/cashflow", icon: I("M2 10c3-3 5 3 8 0s5 3 8 0M2 14c3-3 5 3 8 0s5 3 8 0") },
      { label: "IRR/NPV", href: "/finance/irr", icon: I("M3 17l4-6 4 3 6-11M14 3l3 3-3 3") },
      { label: "請求書管理", href: "/finance/payments", icon: I("M5 2h10v16H5zM8 6h4M8 9h4M8 12h2") },
    ],
  },
  {
    title: "O&M・保全",
    items: [
      { label: "O&M管理", href: "/om", icon: I("M14.7 6.3a1 1 0 000-1.4l-1.6-1.6a1 1 0 00-1.4 0L3 12v3h3l8.7-8.7z") },
      { label: "点検管理", href: "/inspections", icon: I("M4 4h12v12H4zM4 8h12M8 4v12") },
      { label: "保険管理", href: "/insurance", icon: I("M10 2L3 6v5c0 4.4 3 8.5 7 9.5 4-1 7-5.1 7-9.5V6l-7-4z") },
      { label: "出力制御", href: "/operations/curtailment", icon: I("M13 2L3 14h7l-1 6 10-12h-7l1-6") },
      { label: "リパワリング", href: "/repowering", icon: I("M12 2L2 7l5 5-5 5 10-5-5-5z"), children: [{ label: "洗浄ROI", href: "/repowering/cleaning" }, { label: "パネル交換", href: "/repowering/panel" }, { label: "PCS更新", href: "/repowering/pcs" }] },
    ],
  },
  {
    title: "ESG・サステナビリティ",
    items: [
      { label: "環境価値", href: "/finance/credits", icon: I("M10 2a8 8 0 100 16 8 8 0 000-16zM7 10l2 2 4-4") },
      { label: "ESGレポート", href: "/esg", icon: I("M10 2v16M2 10h16M5 5l10 10M15 5L5 15"), children: [{ label: "CO2削減実績", href: "/esg/co2" }, { label: "レポート生成", href: "/esg/report" }] },
    ],
  },
  {
    title: "業務プロセス",
    items: [
      { label: "プロセス管理", href: "/processes", icon: I("M3 3h6v6H3zM11 3h6v6h-6zM3 11h6v6H3zM11 11h6v6h-6z"), children: [
        { label: "発電所運用管理", href: "/processes/rs-001" },
        { label: "投資家報告", href: "/processes/rs-002" },
        { label: "リスク・保険", href: "/processes/rs-003" },
        { label: "書類・庶務", href: "/processes/rs-004" },
      ] },
    ],
  },
  {
    title: "分析",
    items: [
      { label: "日射量・PR", href: "/analysis/irradiance", icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"/><path d="M10 3v2M10 15v2M3 10h2M15 10h2M5.05 5.05l1.4 1.4M13.55 13.55l1.4 1.4M5.05 14.95l1.4-1.4M13.55 6.45l1.4-1.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>) },
      { label: "劣化分析", href: "/analysis/degradation", icon: I("M2 2v16h16M5 14l4-3 3 2 5-6") },
      { label: "発電量予測", href: "/analysis/forecast", icon: I("M3 17l4-5 3 2 4-8 3 5M17 6v4h-4") },
      { label: "比較分析", href: "/analysis/comparison", icon: I("M4 17V9M8 17V5M12 17V11M16 17V7") },
      { label: "天候分析", href: "/analysis/weather", icon: I("M10 2a4 4 0 00-4 4c0 2.5 2 4 4 4h2c2 0 4-1.5 4-4a4 4 0 00-4-4zM4 14h12M6 18h8") },
    ],
  },
  {
    title: "レポート",
    items: [
      { label: "レポート一覧", href: "/reports", icon: I("M5 2.5h7l4 4V17.5a1 1 0 01-1 1H5a1 1 0 01-1-1V3.5a1 1 0 011-1zM12 2.5V6.5h4M7 10h6M7 13h4"), children: [{ label: "自動生成・送付", href: "/reports/auto" }, { label: "レポート生成", href: "/reports/generate" }, { label: "スケジュール", href: "/reports/schedule" }, { label: "コメント管理", href: "/reports/comments" }, { label: "レンダー報告", href: "/reports/lender" }] },
      { label: "データ出力", href: "/export", icon: I("M3 13v3a1 1 0 001 1h12a1 1 0 001-1v-3M10 3v10M6 9l4 4 4-4") },
    ],
  },
  {
    title: "マスタ管理",
    items: [
      { label: "投資家管理", href: "/investors", icon: I("M3 3h14v14H3zM3 9h14M9 9v8M7 6h6"), children: [{ label: "Q&A台帳", href: "/investors/qa" }] },
      { label: "資料管理", href: "/projects", icon: I("M2 5a1 1 0 011-1h5l2 2h7a1 1 0 011 1v9a1 1 0 01-1 1H3a1 1 0 01-1-1V5zM8 11h4M10 9v4") },
      { label: "担当者管理", href: "/staff", icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="6" r="3.5" stroke="currentColor" strokeWidth="1.5"/><path d="M3 18v-1.5C3 13.46 5.69 11 9 11h2c3.31 0 6 2.46 6 5.5V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>) },
      { label: "地権者・賃料", href: "/contracts/land", icon: I("M3 18l5-5M8 18h7a2 2 0 002-2V4a2 2 0 00-2-2H5a2 2 0 00-2 2v7") },
      { label: "系統連系", href: "/operations/grid", icon: I("M10 2v4M10 14v4M2 10h4M14 10h4M10 6a4 4 0 100 8 4 4 0 000-8z") },
    ],
  },
  {
    title: "設定",
    items: [
      { label: "ワークスペース", href: "/settings/workspace", icon: I("M3 3h6v6H3zM11 3h6v4h-6zM11 11h6v6h-6zM3 13h6v4H3z") },
      { label: "外部連携", href: "/settings", icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5"/><path d="M10 1.5l1.1 2.2a1 1 0 001 .55l2.4-.2 1 2.2-1.8 1.6a1 1 0 00-.3 1.1l.6 2.3-2.1 1.2-1.5-1.9a1 1 0 00-1.6 0l-1.5 1.9-2.1-1.2.6-2.3a1 1 0 00-.3-1.1L4.5 6.3l1-2.2 2.4.2a1 1 0 001-.55L10 1.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>) },
      { label: "通知設定", href: "/settings/notifications", icon: I("M10 2a6 6 0 00-6 6v4l-2 2h16l-2-2v-4a6 6 0 00-6-6zM8 16a2 2 0 004 0") },
      { label: "ユーザー管理", href: "/settings/users", icon: I("M7 8a3 3 0 106 0 3 3 0 01-6 0zM3 18c0-3 3-5 7-5s7 2 7 5") },
      { label: "監査ログ", href: "/settings/audit", icon: I("M5 3h10a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V4a1 1 0 011-1zM7 7h6M7 10h6M7 13h3") },
      { label: "ヘルプ・ガイド", href: "/guide", icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/><path d="M7.5 7.5a2.5 2.5 0 014.6 1.3c0 1.7-2.6 1.7-2.6 3.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="10" cy="14.5" r="0.75" fill="currentColor"/></svg>) },
    ],
  },
];

/** Filter nav sections by user role */
function filterNavForRole(sections: NavSection[], role: AuthUser['role'] | undefined): NavSection[] {
  if (!role) return sections;

  // Platform admin: show admin-specific menu only
  if (role === 'platform_admin') {
    return [
      {
        title: 'プラットフォーム管理',
        items: [
          { label: 'テナント管理', href: '/admin', icon: I("M3 3h14v14H3zM3 10h14M10 3v14") },
          { label: '監査ログ', href: '/settings/audit', icon: I("M5 3h10a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V4a1 1 0 011-1zM7 7h6M7 10h6M7 13h3") },
        ],
      },
    ];
  }

  if (role === 'admin') return sections; // tenant admin sees everything

  // Investor: only dashboard, reports, portal
  if (role === 'investor') {
    return [
      {
        title: '投資家ポータル',
        items: [
          { label: 'ポータル', href: '/portal', icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><rect x="11" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><rect x="2" y="11" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><rect x="11" y="11" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/></svg>) },
          { label: 'レポート', href: '/reports', icon: I("M5 2.5h7l4 4V17.5a1 1 0 01-1 1H5a1 1 0 01-1-1V3.5a1 1 0 011-1zM12 2.5V6.5h4M7 10h6M7 13h4") },
        ],
      },
    ];
  }

  // Viewer: hide settings (except limited), hide financial write
  if (role === 'viewer') {
    return sections.filter(s => s.title !== '設定');
  }

  // am_manager: full access except settings/users management
  return sections;
}

/** セットアップガイドリンク — 安定化版（loading中もプレースホルダー表示） */
function SetupNavLink({ collapsed, pathname }: { collapsed: boolean; pathname: string | null }) {
  const { completedCount, totalCount, progressPercent, isFullyComplete, loading } = useOnboarding();

  // 完了済みなら非表示
  if (!loading && (isFullyComplete || totalCount === 0)) return null;
  // loading中はプレースホルダーを表示（nullを返さない → レイアウトシフト防止）
  if (loading) {
    return collapsed ? (
      <div className="px-3 mt-3 mb-1"><div className="w-11 h-11 mx-auto rounded-lg bg-navy-700/30 animate-pulse" /></div>
    ) : (
      <div className="mx-3 mt-3 mb-1"><div className="h-12 rounded-lg bg-navy-700/30 animate-pulse" /></div>
    );
  }

  const isActive = pathname === "/getting-started";

  if (collapsed) {
    return (
      <div className="px-3 mt-3 mb-1">
        <Link href="/getting-started" className={`relative w-11 h-11 mx-auto rounded-lg flex items-center justify-center transition-colors ${isActive ? "bg-gold-500/20" : "bg-gold-500/10 hover:bg-gold-500/20"}`} title="セットアップ">
          <ProgressRing size={28} percent={progressPercent} strokeWidth={2.5} />
          <span className="absolute -top-0.5 -right-0.5 min-w-[16px] h-4 rounded-full bg-gold-500 text-white text-[9px] font-bold flex items-center justify-center px-1">
            {completedCount}/{totalCount}
          </span>
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-3 mt-3 mb-1">
      <Link href="/getting-started" className={`flex items-center gap-3 px-3 py-2.5 rounded-lg border transition-all ${isActive ? "bg-gold-500/20 border-gold-500/40" : "bg-gold-500/10 border-gold-500/20 hover:bg-gold-500/20 hover:border-gold-500/30"}`}>
        <ProgressRing size={32} percent={progressPercent} strokeWidth={3} />
        <div className="flex-1 min-w-0">
          <div className="text-xs font-semibold text-gold-400">セットアップ</div>
          <div className="text-[10px] text-navy-300">{completedCount}/{totalCount} 完了</div>
        </div>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-gold-500/60 flex-shrink-0"><path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </Link>
    </div>
  );
}

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const pending = mockWorkflowStats.pendingApprovals;
  const { user, logout } = useAuth();

  const filteredSections = useMemo(
    () => filterNavForRole(navSections, user?.role),
    [user?.role]
  );

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <>
      {/* Mobile hamburger */}
      <button onClick={() => setMobileOpen(true)} className="fixed top-4 left-4 z-50 lg:hidden w-10 h-10 rounded-lg bg-navy-900 flex items-center justify-center text-white shadow-lg" aria-label="メニューを開く">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
        {/* Mobile notification dot (#13) */}
        {pending > 0 && <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 text-white text-[9px] font-bold flex items-center justify-center">{pending}</span>}
      </button>

      {/* Mobile overlay */}
      {mobileOpen && <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setMobileOpen(false)} />}

      <aside className={`fixed left-0 top-0 h-screen navy-gradient flex flex-col z-50 transition-all duration-300 ${collapsed ? "w-[72px]" : "w-[260px]"} ${mobileOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}>
        {/* Header: Admin=ENAZY AMロゴ / Tenant=企業名+ロゴ */}
        {user?.role === 'platform_admin' ? (
          <Link href="/admin" className="flex items-center px-4 h-16 border-b border-navy-700/50 hover:bg-navy-800/30 transition-colors">
            {collapsed
              ? <img src="/images/logo-white.png" alt="ENAZY AM" className="w-10 h-auto object-contain mx-auto" />
              : <img src="/images/logo-white.png" alt="ENAZY AM" className="w-32 h-auto object-contain" />
            }
          </Link>
        ) : (
          <Link href="/dashboard" className="flex items-center gap-3 px-4 h-16 border-b border-navy-700/50 hover:bg-navy-800/30 transition-colors">
            <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-navy-700/50 border border-navy-600/30 flex items-center justify-center overflow-hidden">
              <span className="text-white text-xs font-bold">W</span>
            </div>
            {!collapsed && (
              <div className="flex flex-col min-w-0">
                <span className="text-white font-semibold text-sm truncate leading-tight">ワークスペース名</span>
                <span className="text-navy-400 text-[10px] truncate">{user?.email || ''}</span>
              </div>
            )}
          </Link>
        )}

        {/* Global notification banner (#13) */}
        {pending > 0 && !collapsed && (
          <Link href="/inbox" className="mx-3 mt-3 mb-1 px-3 py-2.5 rounded-lg bg-red-500/15 border border-red-500/30 hover:bg-red-500/25 transition-colors flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0">{pending}</span>
            <span className="text-xs text-red-300 font-medium">承認待ちがあります</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="ml-auto text-red-400"><path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        )}

        {/* Onboarding setup link */}
        <SetupNavLink collapsed={collapsed} pathname={pathname} />

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 overflow-y-auto">
          {filteredSections.map((section) => (
            <div key={section.title} className="mb-4">
              {!collapsed && <div className="px-3 mb-2 text-[10px] font-semibold text-navy-400 uppercase tracking-widest">{section.title}</div>}
              <div className="space-y-0.5">
                {section.items.map((item) => {
                  const isActive = pathname === item.href || pathname?.startsWith(item.href + "/");
                  return (
                    <div key={item.href}>
                      <Link href={item.href} className={`nav-item relative ${isActive ? "nav-item-active" : "nav-item-inactive"}`} title={collapsed ? item.label : undefined}>
                        <span className="flex-shrink-0">{item.icon}</span>
                        {!collapsed && <span>{item.label}</span>}
                        {item.href === '/inbox' && pending > 0 && !collapsed && (
                          <span className="ml-auto px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-red-500 text-white leading-none animate-pulse">{pending}</span>
                        )}
                        {item.href === '/inbox' && pending > 0 && collapsed && (
                          <span className="absolute top-0.5 right-0.5 w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                        )}
                        {isActive && !collapsed && item.href !== '/inbox' && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-gold-400" />}
                      </Link>
                      {item.children && isActive && !collapsed && (
                        <div className="ml-8 mt-0.5 space-y-0.5">
                          {item.children.map(child => {
                            const childActive = pathname === child.href;
                            return (
                              <Link key={child.href} href={child.href}
                                className={`block px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${childActive ? "text-gold-400 bg-navy-800/50" : "text-navy-300 hover:text-white hover:bg-navy-800/30"}`}>
                                {child.label}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* Collapse Toggle */}
        <div className="px-3 py-2">
          <button onClick={() => setCollapsed(!collapsed)} className="nav-item nav-item-inactive w-full justify-center" aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className={`transition-transform duration-300 ${collapsed ? "rotate-180" : ""}`}><path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            {!collapsed && <span>折りたたむ</span>}
          </button>
        </div>

        {/* User info + logout */}
        {user && (
          <div className="px-3 py-3 border-t border-navy-700/50">
            {!collapsed ? (
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center text-xs font-bold flex-shrink-0">
                  {user.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-medium text-white truncate">{user.name}</div>
                  <div className="text-[10px] text-navy-400 truncate">{user.email}</div>
                </div>
                <button onClick={logout} className="text-navy-400 hover:text-red-400 transition-colors flex-shrink-0" title="ログアウト">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 14H3.5A1.5 1.5 0 012 12.5v-9A1.5 1.5 0 013.5 2H6M10.5 11.5L14 8l-3.5-3.5M14 8H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </div>
            ) : (
              <button onClick={logout} className="w-full flex justify-center text-navy-400 hover:text-red-400 transition-colors" title="ログアウト">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 14H3.5A1.5 1.5 0 012 12.5v-9A1.5 1.5 0 013.5 2H6M10.5 11.5L14 8l-3.5-3.5M14 8H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            )}
          </div>
        )}

        <div className="px-4 py-3 border-t border-navy-700/50">
          {!collapsed ? (
            <div className="space-y-1.5">
              <img src="/images/logo-white.png" alt="ENAZY AM" className="w-24 h-auto object-contain opacity-70" />
              <div className="text-[10px] text-navy-500">Powered by <span className="text-gold-500 font-semibold">Tryfunds</span></div>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-1">
              <img src="/images/logo-white.png" alt="ENAZY AM" className="w-8 h-auto object-contain opacity-60" />
            </div>
          )}
        </div>
      </aside>
    </>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { businessFlow, type BusinessFlowSection } from "@/lib/guide-data";
import { useAuth } from "@/lib/auth-context";

type GuideTab = "quickstart" | "admin" | "tenant" | "workflow";

export default function GuidePage() {
  const { user } = useAuth();
  const isPlatformAdmin = user?.role === 'platform_admin';
  const [activeTab, setActiveTab] = useState<GuideTab>("quickstart");

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* ─── ヘッダー ────────────────────────────────────────── */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="8.5" stroke="currentColor" strokeWidth="1.5"/><path d="M8.5 8.5a2.5 2.5 0 014.6 1.3c0 1.7-2.6 1.7-2.6 3.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="11" cy="16" r="0.75" fill="currentColor"/></svg>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-navy-900">ENAZY AM ヘルプ・ガイド</h1>
            <p className="text-sm text-gray-500">使い方マニュアル・業務フロー</p>
          </div>
        </div>
      </div>

      {/* ─── タブナビ ────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-1 bg-white rounded-lg border border-gray-200 p-1 mb-8">
        {([
          { key: "quickstart" as GuideTab, label: "はじめに" },
          ...(isPlatformAdmin ? [{ key: "admin" as GuideTab, label: "Admin（プラットフォーム管理者）" }] : []),
          { key: "tenant" as GuideTab, label: "テナントユーザー" },
          { key: "workflow" as GuideTab, label: "業務フロー" },
        ]).map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === tab.key ? "bg-navy-900 text-white" : "text-gray-600 hover:text-navy-900"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ════════════════════════════════════════════════════════ */}
      {/* はじめに */}
      {/* ════════════════════════════════════════════════════════ */}
      {activeTab === "quickstart" && (
        <div className="space-y-8">
          <div className="card p-6">
            <h2 className="text-lg font-bold text-navy-900 mb-3">ENAZY AMとは</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              ENAZY AMは、太陽光発電所のアセットマネジメント業務を一元管理するプラットフォームです。
              発電所の監視、投資家レポートの自動生成、財務分析、O&M管理まで、AM業務のすべてをカバーします。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "発電所モニタリング", desc: "PCS監視・アラート検知・発電量リアルタイム追跡" },
                { title: "投資家レポート自動生成", desc: "月次/四半期レポートをAIが自動作成。確認後にワンクリック送付" },
                { title: "財務分析", desc: "DSCR・IRR/NPV・予実管理・キャッシュフロー予測" },
                { title: "マルチテナント", desc: "複数のAM会社を1つのプラットフォームで管理。データは完全分離" },
              ].map((item, i) => (
                <div key={i} className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-sm font-semibold text-navy-900 mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-6">
            <h2 className="text-lg font-bold text-navy-900 mb-3">ユーザーの種類</h2>
            <div className="space-y-3">
              {[
                { role: "プラットフォーム管理者（Admin）", desc: "テナント（AM会社）の作成・管理。ワークスペース追加申請の承認。システム全体の管理", badge: "bg-gold-100 text-gold-800" },
                { role: "テナント管理者", desc: "自社のSPC・発電所・投資家の登録。チームメンバーの招待・承認。企業名・ロゴの設定", badge: "bg-navy-100 text-navy-700" },
                { role: "AM担当者", desc: "日常の発電所監視・アラート対応・レポート作成・タスク管理", badge: "bg-blue-100 text-blue-700" },
                { role: "閲覧者", desc: "データの閲覧のみ（編集不可）", badge: "bg-gray-100 text-gray-600" },
                { role: "投資家", desc: "投資家ポータルからレポートの閲覧・ダウンロード", badge: "bg-emerald-100 text-emerald-700" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 border border-gray-100 rounded-lg">
                  <span className={`badge flex-shrink-0 mt-0.5 ${item.badge}`}>{item.role}</span>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-6">
            <h2 className="text-lg font-bold text-navy-900 mb-3">画面の見方</h2>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-navy-400 mt-2 flex-shrink-0" />
                <div><span className="font-medium text-navy-900">サイドバー（左）</span>：全機能へのナビゲーション。上部にワークスペース名、下部にENAZY AMロゴとPowered by Tryfundsが表示されます</div>
              </div>
              <div className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                <div><span className="font-medium text-navy-900">ガイドバー（各ページ上部の青いバー）</span>：そのページの目的と「次のステップ」を表示。初回訪問時は自動展開されます。クリックで折りたたみ/展開</div>
              </div>
              <div className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-2 flex-shrink-0" />
                <div><span className="font-medium text-navy-900">ゴールドのボタン</span>：主要なアクション（登録・生成・送付など）。次にやるべき操作はこのボタンで案内されます</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ════════════════════════════════════════════════════════ */}
      {/* Admin（プラットフォーム管理者）向け */}
      {/* ════════════════════════════════════════════════════════ */}
      {activeTab === "admin" && (
        <div className="space-y-6">
          <div className="p-4 bg-gold-50 border border-gold-200 rounded-lg">
            <p className="text-sm text-gold-800">このセクションはプラットフォーム管理者（tanno_yusuke@tryfunds.com）向けのガイドです。</p>
          </div>

          <div className="card p-6">
            <h2 className="text-lg font-bold text-navy-900 mb-4">Adminの初期設定手順</h2>
            <div className="space-y-4">
              {[
                { step: 1, title: "ログイン", desc: "tanno_yusuke@tryfunds.com でログインすると、管理コンソール（/admin）に自動リダイレクトされます。", link: "/login" },
                { step: 2, title: "テナントを作成", desc: "「テナントを作成」ボタンから、AM会社の企業名・マスターユーザーのメールアドレス・プランを入力します。作成すると、マスターユーザーに招待メールが送信されます。", link: "/admin" },
                { step: 3, title: "テナントを有効化", desc: "マスターユーザーがアカウントを設定したら、テナント一覧から「有効化」ボタンをクリックしてテナントを稼働状態にします。", link: "/admin" },
                { step: 4, title: "ワークスペース追加申請の承認", desc: "テナントユーザーから追加ワークスペースの申請があると、「申請管理」タブに通知されます。内容を確認して承認/却下します。", link: "/admin" },
              ].map(item => (
                <div key={item.step} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-gold-100 text-gold-700 flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-semibold text-navy-900">{item.title}</h3>
                      <Link href={item.link} className="text-[11px] text-blue-600 hover:underline">ページを開く →</Link>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-6">
            <h2 className="text-lg font-bold text-navy-900 mb-3">Admin画面の機能一覧</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left py-2 text-xs font-medium text-gray-400 uppercase">機能</th>
                    <th className="text-left py-2 text-xs font-medium text-gray-400 uppercase">説明</th>
                    <th className="text-left py-2 text-xs font-medium text-gray-400 uppercase">場所</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {[
                    { name: "テナント作成", desc: "新しいAM会社を登録し、マスターユーザーへ招待を送信", loc: "管理コンソール > テナントを作成" },
                    { name: "テナント停止/再開", desc: "テナントの利用を一時停止または再開", loc: "テナント一覧 > 詳細パネル" },
                    { name: "プラン変更", desc: "トライアル/スタンダード/プロフェッショナルの切り替え", loc: "テナント作成時に選択" },
                    { name: "申請管理", desc: "ワークスペース追加申請の承認/却下", loc: "管理コンソール > 申請管理タブ" },
                    { name: "監査ログ", desc: "全テナントの操作履歴を閲覧", loc: "サイドバー > 監査ログ" },
                  ].map((row, i) => (
                    <tr key={i}>
                      <td className="py-2 font-medium text-navy-900">{row.name}</td>
                      <td className="py-2 text-gray-600">{row.desc}</td>
                      <td className="py-2 text-gray-400 text-xs">{row.loc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ════════════════════════════════════════════════════════ */}
      {/* テナントユーザー向け */}
      {/* ════════════════════════════════════════════════════════ */}
      {activeTab === "tenant" && (
        <div className="space-y-6">
          <div className="card p-6">
            <h2 className="text-lg font-bold text-navy-900 mb-4">テナントユーザーの初回セットアップ</h2>
            <p className="text-sm text-gray-500 mb-4">招待メールを受け取ったら、以下の手順でシステムを使い始めます。</p>
            <div className="space-y-4">
              {[
                { step: 1, title: "招待メールからアカウント作成", desc: "Adminから届いた招待メールのリンクをクリックし、名前とパスワードを設定します。", link: null },
                { step: 2, title: "ワークスペース設定", desc: "ログイン後、サイドバーの「設定 > ワークスペース」で企業名とロゴを登録します（管理者権限のみ）。", link: "/settings/workspace" },
                { step: 3, title: "外部連携を設定（任意）", desc: "Notion・Dropbox・弥生などの外部システムを接続すると、AIがデータを自動取得します。", link: "/settings" },
                { step: 4, title: "SPCを登録", desc: "太陽光発電事業を運営するSPC（特別目的会社）を登録します。", link: "/spcs" },
                { step: 5, title: "投資家を登録", desc: "レンダー（銀行）や出資者を登録し、レポート送付先を設定します。", link: "/investors" },
                { step: 6, title: "発電所を登録", desc: "管理する太陽光発電所を登録します。SPC選択が必須なので、先にSPCを登録してください。", link: "/plants/register" },
                { step: 7, title: "レポートテンプレートを設定", desc: "投資家ごとに、月次/四半期どのレポートを生成するかを設定します。", link: "/reports/auto" },
                { step: 8, title: "チームメンバーを招待", desc: "AM担当者や閲覧者を「ユーザー管理」から招待します。", link: "/settings/users" },
              ].map(item => (
                <div key={item.step} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-semibold text-navy-900">{item.title}</h3>
                      {item.link && <Link href={item.link} className="text-[11px] text-blue-600 hover:underline">ページを開く →</Link>}
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-6">
            <h2 className="text-lg font-bold text-navy-900 mb-4">日常業務の進め方</h2>
            <div className="space-y-3">
              {[
                { time: "毎朝", tasks: ["受信トレイで承認待ちを処理", "アラートを確認して対応", "タスクを消化", "PCS監視で稼働状況を確認"], links: ["/inbox", "/alerts", "/tasks", "/monitoring/pcs"] },
                { time: "月末〜翌月初", tasks: ["売電データの確認・突合", "O&M月次報告の確認", "月次レポート生成・確認・送付"], links: ["/finance/revenue", "/om", "/reports/auto"] },
                { time: "四半期", tasks: ["DSCR計算・コベナンツ確認", "四半期レポート生成", "レンダー報告書作成"], links: ["/finance/dscr", "/reports/auto", "/reports/lender"] },
                { time: "年1回", tasks: ["IRR/NPV分析・来期計画", "保険証券の更新確認", "リパワリング検討", "ESGレポート生成"], links: ["/finance/irr", "/insurance", "/repowering", "/esg"] },
              ].map((item, i) => (
                <div key={i} className="p-4 border border-gray-100 rounded-lg">
                  <h3 className="text-sm font-semibold text-navy-900 mb-2">{item.time}</h3>
                  <div className="space-y-1.5">
                    {item.tasks.map((task, j) => (
                      <div key={j} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                          <span className="text-xs text-gray-600">{task}</span>
                        </div>
                        <Link href={item.links[j]} className="text-[11px] text-blue-600 hover:underline">開く →</Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-6">
            <h2 className="text-lg font-bold text-navy-900 mb-3">権限ごとにできること</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left py-2 font-medium text-gray-400">操作</th>
                    <th className="text-center py-2 font-medium text-gray-400">テナント管理者</th>
                    <th className="text-center py-2 font-medium text-gray-400">AM担当者</th>
                    <th className="text-center py-2 font-medium text-gray-400">閲覧者</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {[
                    { op: "SPC・発電所の登録", admin: true, am: true, viewer: false },
                    { op: "企業名・ロゴの変更", admin: true, am: false, viewer: false },
                    { op: "ユーザー招待・承認", admin: true, am: false, viewer: false },
                    { op: "レポート生成・送付", admin: true, am: true, viewer: false },
                    { op: "アラート対応", admin: true, am: true, viewer: false },
                    { op: "データ閲覧", admin: true, am: true, viewer: true },
                    { op: "パスワード変更", admin: true, am: true, viewer: true },
                    { op: "ワークスペース追加申請", admin: true, am: true, viewer: true },
                  ].map((row, i) => (
                    <tr key={i}>
                      <td className="py-2 text-navy-900 font-medium">{row.op}</td>
                      <td className="py-2 text-center">{row.admin ? <span className="text-emerald-600">●</span> : <span className="text-gray-300">—</span>}</td>
                      <td className="py-2 text-center">{row.am ? <span className="text-emerald-600">●</span> : <span className="text-gray-300">—</span>}</td>
                      <td className="py-2 text-center">{row.viewer ? <span className="text-emerald-600">●</span> : <span className="text-gray-300">—</span>}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ════════════════════════════════════════════════════════ */}
      {/* 業務フロー */}
      {/* ════════════════════════════════════════════════════════ */}
      {activeTab === "workflow" && (
        <div className="space-y-8">
          <p className="text-sm text-gray-600 leading-relaxed">
            各業務フローのカードをクリックすると該当ページに移動します。
            初めてご利用の方は「初期設定」から順番に進めてください。
          </p>

          {/* クイックナビ */}
          <div className="flex flex-wrap gap-2">
            {businessFlow.map((section) => (
              <a key={section.frequency} href={`#flow-${section.frequency}`} className="text-xs px-3 py-1.5 rounded-full border transition-colors hover:bg-gray-50">
                {section.frequency}
              </a>
            ))}
          </div>

          {businessFlow.map((section) => (
            <FlowSection key={section.frequency} section={section} />
          ))}
        </div>
      )}

      {/* ─── フッター ────────────────────────────────────────── */}
      <div className="mt-12 p-5 rounded-xl bg-gray-50 border border-gray-200">
        <h3 className="text-sm font-semibold text-gray-700 mb-2">お困りの場合</h3>
        <p className="text-xs text-gray-500 leading-relaxed">
          各ページ上部のガイドバーをクリックするとページ別のヘルプが表示されます。
          「次のステップ」ボタンを使って業務を迷わず進めることができます。
        </p>
        <div className="mt-3 flex gap-3">
          <Link href="/dashboard" className="text-xs text-blue-600 hover:text-blue-800 hover:underline">
            ← ダッシュボードに戻る
          </Link>
          <Link href="/getting-started" className="text-xs text-blue-600 hover:text-blue-800 hover:underline">
            セットアップガイドを見る →
          </Link>
        </div>
      </div>
    </div>
  );
}

// ─── フローセクション ─────────────────────────────────────────────────────

function FlowSection({ section }: { section: BusinessFlowSection }) {
  return (
    <div id={`flow-${section.frequency}`} className={`rounded-xl border-2 overflow-hidden ${section.colorClass}`}>
      <div className="px-5 py-4 border-b border-white/60">
        <div className="flex items-center gap-3">
          <span className="text-lg">{section.icon}</span>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base font-bold text-gray-800">{section.frequency}業務</h2>
              <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${section.badgeClass}`}>{section.frequency}</span>
            </div>
            <p className="text-xs text-gray-500 mt-0.5 max-w-2xl">{section.description}</p>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex flex-wrap gap-3">
          {section.steps.map((step, idx) => (
            <Link key={step.href + idx} href={step.href} className="group flex flex-col gap-1 bg-white rounded-lg border border-white/80 shadow-sm px-4 py-3 hover:shadow-md hover:border-gray-200 transition-all min-w-[160px] flex-1 max-w-[220px]">
              <div className="flex items-center gap-2">
                {step.stepNumber !== undefined && (
                  <span className="w-5 h-5 rounded-full bg-gray-100 text-[10px] font-bold text-gray-500 flex items-center justify-center flex-shrink-0">{step.stepNumber}</span>
                )}
              </div>
              <p className="text-xs font-semibold text-gray-800 group-hover:text-blue-700 transition-colors">{step.label}</p>
              <p className="text-[11px] text-gray-400 leading-relaxed">{step.description}</p>
              <div className="mt-auto pt-1 text-[11px] text-blue-400 group-hover:text-blue-600 font-medium">開く →</div>
            </Link>
          ))}
        </div>
        {section.frequency === "初期設定" && section.steps.length > 1 && (
          <p className="text-[11px] text-gray-400 mt-3 text-center">上から順番に設定してください（Step 0 → Step 6）</p>
        )}
      </div>
    </div>
  );
}

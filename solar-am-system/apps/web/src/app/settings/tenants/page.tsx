"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/lib/auth-context";

type TenantStatus = "active" | "suspended";
type PlanType = "professional" | "standard" | "trial";

interface Tenant {
  id: string;
  name: string;
  spcCount: number;
  plantCount: number;
  plan: PlanType;
  status: TenantStatus;
  lastLogin: string;
  userCount: number;
}

const mockTenants: Tenant[] = [
  { id: "t1", name: "RSアセットマネジメント", spcCount: 5, plantCount: 5, plan: "professional", status: "active", lastLogin: "2026/3/18 09:12", userCount: 8 },
  { id: "t2", name: "テストAM会社", spcCount: 2, plantCount: 3, plan: "standard", status: "active", lastLogin: "2026/3/17 14:30", userCount: 3 },
  { id: "t3", name: "デモ環境", spcCount: 1, plantCount: 1, plan: "trial", status: "suspended", lastLogin: "2026/2/10 16:45", userCount: 1 },
];

const planLabels: Record<PlanType, string> = {
  professional: "プロフェッショナル",
  standard: "スタンダード",
  trial: "トライアル",
};

const planColors: Record<PlanType, string> = {
  professional: "bg-navy-100 text-navy-700",
  standard: "bg-blue-100 text-blue-700",
  trial: "bg-gray-100 text-gray-600",
};

const statusConfig: Record<TenantStatus, { label: string; border: string; text: string }> = {
  active: { label: "アクティブ", border: "border-emerald-400", text: "text-emerald-700" },
  suspended: { label: "停止", border: "border-red-400", text: "text-red-700" },
};

interface SettingsSection {
  label: string;
  value: string;
  limit: string;
  usage: number;
}

const mockSettings: SettingsSection[] = [
  { label: "API制限", value: "8,500 / 10,000", limit: "回/日", usage: 85 },
  { label: "ストレージ使用量", value: "2.4 / 10.0", limit: "GB", usage: 24 },
  { label: "ユーザー数", value: "12 / 20", limit: "名", usage: 60 },
];

export default function TenantsPage() {
  const { user } = useAuth();
  const [tenants] = useState(mockTenants);
  const currentTenant = tenants[0];

  // platform_admin以外はアクセス不可
  if (user && user.role !== 'platform_admin') {
    return (
      <div className="p-8 flex items-center justify-center min-h-[50vh]">
        <div className="text-center">
          <h1 className="text-lg font-bold text-navy-900 mb-2">アクセス権限がありません</h1>
          <p className="text-sm text-gray-500 mb-4">このページはプラットフォーム管理者のみアクセスできます</p>
          <Link href="/dashboard" className="btn-gold text-sm">ダッシュボードに戻る</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="page-title">テナント管理</h1>
          <p className="text-sm text-gray-500 mt-1">AM会社のマルチテナント設定</p>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/settings" className="btn-secondary text-sm">設定トップ</Link>
          <Link href="/dashboard" className="btn-secondary text-sm">ダッシュボードへ</Link>
        </div>
      </div>

      {/* Current Tenant Card */}
      <div className="card p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="section-title">現在のテナント</h3>
          <button className="btn-secondary text-sm">編集</button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <p className="text-xs text-gray-500 mb-1">会社名</p>
            <p className="text-sm font-semibold text-navy-900">{currentTenant.name}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">プラン</p>
            <span className={`badge text-xs ${planColors[currentTenant.plan]}`}>{planLabels[currentTenant.plan]}</span>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">SPC上限</p>
            <p className="text-sm font-semibold text-navy-900">100</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">利用中</p>
            <p className="text-sm font-semibold text-navy-900">{currentTenant.spcCount}</p>
          </div>
        </div>
      </div>

      {/* Tenant List (Admin View) */}
      <div className="card">
        <div className="card-header flex items-center justify-between">
          <h3 className="section-title">テナント一覧 (管理者ビュー)</h3>
          <button className="btn-primary text-sm">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mr-1 inline">
              <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            新規テナント
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="table-header text-left px-6 py-3">テナント名</th>
                <th className="table-header text-right px-6 py-3">SPC数</th>
                <th className="table-header text-right px-6 py-3">発電所数</th>
                <th className="table-header text-left px-6 py-3">プラン</th>
                <th className="table-header text-center px-6 py-3">ステータス</th>
                <th className="table-header text-left px-6 py-3">最終ログイン</th>
                <th className="table-header text-center px-6 py-3">操作</th>
              </tr>
            </thead>
            <tbody>
              {tenants.map((tenant) => {
                const st = statusConfig[tenant.status];
                return (
                  <tr key={tenant.id} className={`border-b border-gray-50 hover:bg-gray-50/50 ${tenant.status === "suspended" ? "opacity-60" : ""}`}>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-navy-900">{tenant.name}</div>
                      <div className="text-xs text-gray-400">{tenant.userCount} ユーザー</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-right font-medium text-navy-900">{tenant.spcCount}</td>
                    <td className="px-6 py-4 text-sm text-right text-gray-700">{tenant.plantCount}</td>
                    <td className="px-6 py-4">
                      <span className={`badge text-xs ${planColors[tenant.plan]}`}>{planLabels[tenant.plan]}</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className={`badge border ${st.border} ${st.text} bg-transparent`}>{st.label}</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{tenant.lastLogin}</td>
                    <td className="px-6 py-4 text-center">
                      <button className="text-sm text-navy-600 hover:text-navy-800 font-medium">詳細</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Settings Section */}
      <div className="card p-6">
        <h3 className="section-title mb-4">リソース使用状況</h3>
        <div className="space-y-4">
          {mockSettings.map((setting) => (
            <div key={setting.label}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-navy-900">{setting.label}</span>
                <span className="text-sm text-gray-500">{setting.value} {setting.limit}</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all ${
                    setting.usage >= 80 ? "bg-red-500" : setting.usage >= 60 ? "bg-amber-500" : "bg-emerald-500"
                  }`}
                  style={{ width: `${setting.usage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState, useMemo } from "react";
import { useAuth } from "@/lib/auth-context";

// ─── Types ─────────────────────────────────────────────────────────────────

interface Tenant {
  id: string;
  name: string;
  masterEmail: string;
  masterName: string;
  plan: "professional" | "standard" | "trial";
  status: "active" | "setting_up" | "suspended";
  userCount: number;
  spcCount: number;
  plantCount: number;
  createdAt: string;
}

type TabType = "overview" | "tenants" | "activity" | "requests";

const planConfig: Record<string, { label: string; bg: string; text: string }> = {
  professional: { label: "プロフェッショナル", bg: "bg-navy-100", text: "text-navy-700" },
  standard: { label: "スタンダード", bg: "bg-blue-100", text: "text-blue-700" },
  trial: { label: "トライアル", bg: "bg-gray-100", text: "text-gray-600" },
};

const statusConfig: Record<string, { label: string; bg: string; text: string }> = {
  active: { label: "稼働中", bg: "bg-emerald-100", text: "text-emerald-700" },
  setting_up: { label: "セットアップ中", bg: "bg-amber-100", text: "text-amber-700" },
  suspended: { label: "停止", bg: "bg-red-100", text: "text-red-700" },
};

// ─── Component ─────────────────────────────────────────────────────────────

export default function AdminPage() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<TabType>("overview");
  const [tenants, setTenants] = useState<Tenant[]>([]);
  const [showCreate, setShowCreate] = useState(false);
  const [form, setForm] = useState<{ name: string; masterEmail: string; masterName: string; plan: "professional" | "standard" | "trial" }>({ name: "", masterEmail: "", masterName: "", plan: "standard" });
  const [toast, setToast] = useState<string | null>(null);
  const [selectedTenantId, setSelectedTenantId] = useState<string | null>(null);
  const [wsRequests, setWsRequests] = useState<{ id: string; tenantName: string; requestedName: string; requester: string; date: string; status: "pending" | "approved" | "rejected" }[]>([]);

  const showToast = (msg: string) => { setToast(msg); setTimeout(() => setToast(null), 3000); };

  const handleCreate = () => {
    if (!form.name || !form.masterEmail) return;
    const newTenant: Tenant = {
      id: `tenant-${Date.now()}`,
      name: form.name,
      masterEmail: form.masterEmail,
      masterName: form.masterName || "管理者",
      plan: form.plan,
      status: "setting_up",
      userCount: 1,
      spcCount: 0,
      plantCount: 0,
      createdAt: new Date().toISOString(),
    };
    setTenants(prev => [...prev, newTenant]);
    setForm({ name: "", masterEmail: "", masterName: "", plan: "standard" });
    setShowCreate(false);
    showToast(`テナント「${newTenant.name}」を作成し、${newTenant.masterEmail} に招待メールを送信しました`);
  };

  const toggleStatus = (id: string) => {
    setTenants(prev => prev.map(t =>
      t.id === id ? { ...t, status: t.status === "suspended" ? "active" as const : "suspended" as const } : t
    ));
  };

  const activateSetup = (id: string) => {
    setTenants(prev => prev.map(t =>
      t.id === id ? { ...t, status: "active" as const } : t
    ));
    showToast("テナントを有効化しました");
  };

  const selectedTenant = tenants.find(t => t.id === selectedTenantId);
  const settingUpTenants = tenants.filter(t => t.status === "setting_up");
  const activeTenants = tenants.filter(t => t.status === "active");

  // やるべきことリスト
  const tasks = useMemo(() => {
    const items: { id: string; label: string; desc: string; action: () => void; actionLabel: string; urgent: boolean }[] = [];
    if (tenants.length === 0) {
      items.push({
        id: "create-first",
        label: "最初のテナントを作成",
        desc: "AM会社を登録してシステムの利用を開始してください",
        action: () => setShowCreate(true),
        actionLabel: "テナントを作成",
        urgent: true,
      });
    }
    settingUpTenants.forEach(t => {
      items.push({
        id: `setup-${t.id}`,
        label: `「${t.name}」のセットアップ完了待ち`,
        desc: `${t.masterEmail} が招待を受諾してアカウントを設定中です`,
        action: () => activateSetup(t.id),
        actionLabel: "有効化する",
        urgent: false,
      });
    });
    return items;
  }, [tenants, settingUpTenants]);

  if (user && user.role !== 'platform_admin') {
    if (typeof window !== 'undefined') {
      window.location.href = '/dashboard';
      return null;
    }
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-lg font-bold text-navy-900 mb-2">アクセス権限がありません</h1>
          <p className="text-sm text-gray-500">ダッシュボードにリダイレクトします...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-8 space-y-6">
      {toast && <div className="fixed top-6 right-6 z-50 bg-navy-900 text-white px-4 py-2.5 rounded-lg shadow-lg text-sm">{toast}</div>}

      {/* ─── Header ─────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="page-title">管理コンソール</h1>
          <p className="text-sm text-gray-500 mt-1">テナント管理・ユーザー監視・システム設定</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-medium text-navy-900">{user.name}</p>
            <p className="text-[10px] text-gray-400">{user.email}</p>
          </div>
          <button onClick={() => setShowCreate(true)} className="btn-gold text-sm">
            テナントを作成
          </button>
        </div>
      </div>

      {/* ─── やるべきこと ─────────────────────────────────── */}
      {tasks.length > 0 && (
        <div className="space-y-2">
          {tasks.map(task => (
            <div key={task.id} className={`card p-4 flex items-center justify-between ${task.urgent ? 'border-l-4 border-l-gold-400' : ''}`}>
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full flex-shrink-0 ${task.urgent ? 'bg-gold-500' : 'bg-blue-400'}`} />
                <div>
                  <p className="text-sm font-medium text-navy-900">{task.label}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{task.desc}</p>
                </div>
              </div>
              <button onClick={task.action} className={`text-sm px-4 py-2 rounded-lg flex-shrink-0 ${task.urgent ? 'btn-gold' : 'btn-secondary'}`}>
                {task.actionLabel}
              </button>
            </div>
          ))}
        </div>
      )}

      {/* ─── KPI ─────────────────────────────────────────── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="card p-5">
          <div className="stat-label">総テナント数</div>
          <div className="stat-value">{tenants.length}</div>
        </div>
        <div className="card p-5">
          <div className="stat-label">稼働中</div>
          <div className="stat-value text-emerald-700">{activeTenants.length}</div>
        </div>
        <div className="card p-5">
          <div className="stat-label">セットアップ中</div>
          <div className="stat-value text-amber-700">{settingUpTenants.length}</div>
        </div>
        <div className="card p-5">
          <div className="stat-label">総ユーザー数</div>
          <div className="stat-value">{tenants.reduce((s, t) => s + t.userCount, 0)}</div>
        </div>
      </div>

      {/* ─── Tabs ─────────────────────────────────────────── */}
      <div className="flex items-center gap-1 bg-white rounded-lg border border-gray-200 p-1 w-fit">
        {([
          { key: "overview" as TabType, label: "テナント一覧" },
          { key: "activity" as TabType, label: "アクティビティ" },
          { key: "requests" as TabType, label: `申請管理${wsRequests.filter(r => r.status === "pending").length > 0 ? ` (${wsRequests.filter(r => r.status === "pending").length})` : ""}` },
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

      {/* ─── テナント一覧 ─────────────────────────────────── */}
      {activeTab === "overview" && (
        <>
          {tenants.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* テナントカード群 */}
              <div className="lg:col-span-2 space-y-3">
                {tenants.map(t => {
                  const plan = planConfig[t.plan];
                  const status = statusConfig[t.status];
                  const isSelected = selectedTenantId === t.id;
                  return (
                    <div
                      key={t.id}
                      onClick={() => setSelectedTenantId(t.id)}
                      className={`card p-5 cursor-pointer transition-all ${isSelected ? 'ring-2 ring-gold-400' : 'hover:shadow-md'}`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-navy-900">{t.name}</h3>
                          <p className="text-xs text-gray-400 mt-0.5">{t.masterName}（{t.masterEmail}）</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${plan.bg} ${plan.text}`}>{plan.label}</span>
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${status.bg} ${status.text}`}>{status.label}</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-4 gap-4 text-sm">
                        <div>
                          <p className="text-xs text-gray-400">ユーザー</p>
                          <p className="font-semibold text-navy-900">{t.userCount}名</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-400">SPC</p>
                          <p className="font-semibold text-navy-900">{t.spcCount}件</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-400">発電所</p>
                          <p className="font-semibold text-navy-900">{t.plantCount}件</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-400">作成日</p>
                          <p className="font-medium text-gray-600 text-xs">{new Date(t.createdAt).toLocaleDateString("ja-JP")}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* 詳細パネル */}
              <div>
                {selectedTenant ? (
                  <div className="card p-5 space-y-4 sticky top-8">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-navy-900">{selectedTenant.name}</h3>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusConfig[selectedTenant.status].bg} ${statusConfig[selectedTenant.status].text}`}>
                        {statusConfig[selectedTenant.status].label}
                      </span>
                    </div>

                    <div className="space-y-3 text-sm border-t border-gray-100 pt-4">
                      <div className="flex justify-between">
                        <span className="text-gray-500">マスターユーザー</span>
                        <span className="font-medium text-navy-900">{selectedTenant.masterName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">メール</span>
                        <span className="font-medium text-navy-900 text-xs">{selectedTenant.masterEmail}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">プラン</span>
                        <span className="font-medium text-navy-900">{planConfig[selectedTenant.plan].label}</span>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      {selectedTenant.status === "setting_up" && (
                        <button onClick={() => activateSetup(selectedTenant.id)} className="btn-gold text-xs flex-1">有効化</button>
                      )}
                      <button
                        onClick={() => toggleStatus(selectedTenant.id)}
                        className={`text-xs flex-1 rounded-lg py-2 border transition-colors ${
                          selectedTenant.status === "suspended"
                            ? "border-emerald-200 text-emerald-700 hover:bg-emerald-50"
                            : "border-red-200 text-red-700 hover:bg-red-50"
                        }`}
                      >
                        {selectedTenant.status === "suspended" ? "再開する" : "停止する"}
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="card p-8 text-center text-gray-400">
                    <p className="text-sm">テナントを選択すると詳細が表示されます</p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="card p-12 text-center">
              <h3 className="text-lg font-semibold text-navy-900 mb-2">テナントを作成してください</h3>
              <p className="text-sm text-gray-500 mb-6 max-w-md mx-auto">
                AM会社（テナント）を作成すると、その会社のマスターユーザーに招待メールが送信されます。
                マスターユーザーがアカウントを設定した後、SPC・発電所の登録が開始できます。
              </p>
              <button onClick={() => setShowCreate(true)} className="btn-gold text-sm">最初のテナントを作成</button>
            </div>
          )}
        </>
      )}

      {/* ─── アクティビティ ─────────────────────────────────── */}
      {activeTab === "activity" && (
        <div className="card p-5">
          <h3 className="section-title mb-4">最近のアクティビティ</h3>
          {tenants.length > 0 ? (
            <div className="space-y-3">
              {tenants.map(t => (
                <div key={t.id} className="flex items-center gap-3 py-2 border-b border-gray-50 last:border-0">
                  <div className="w-8 h-8 rounded-full bg-gold-100 text-gold-700 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-navy-900">
                      <span className="font-medium">{t.name}</span> を作成しました
                    </p>
                    <p className="text-xs text-gray-400">{new Date(t.createdAt).toLocaleString("ja-JP")}</p>
                  </div>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusConfig[t.status].bg} ${statusConfig[t.status].text}`}>
                    {statusConfig[t.status].label}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-400 text-center py-4">アクティビティはまだありません</p>
          )}
        </div>
      )}

      {/* ─── 申請管理タブ ─────────────────────────────────────── */}
      {activeTab === "requests" && (
        <div className="card p-5">
          <h3 className="section-title mb-4">ワークスペース追加申請</h3>
          {wsRequests.length > 0 ? (
            <div className="space-y-3">
              {wsRequests.map(req => (
                <div key={req.id} className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0">
                  <div>
                    <p className="text-sm font-medium text-navy-900">{req.requestedName}</p>
                    <p className="text-xs text-gray-400">{req.tenantName} — {req.requester} — {req.date}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {req.status === "pending" ? (
                      <>
                        <button
                          onClick={() => setWsRequests(prev => prev.map(r => r.id === req.id ? { ...r, status: "approved" as const } : r))}
                          className="text-xs px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 transition-colors"
                        >
                          承認
                        </button>
                        <button
                          onClick={() => setWsRequests(prev => prev.map(r => r.id === req.id ? { ...r, status: "rejected" as const } : r))}
                          className="text-xs px-3 py-1.5 rounded-lg bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 transition-colors"
                        >
                          却下
                        </button>
                      </>
                    ) : (
                      <span className={`badge ${req.status === "approved" ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"}`}>
                        {req.status === "approved" ? "承認済み" : "却下"}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-400 text-center py-4">ワークスペース追加申請はありません</p>
          )}
        </div>
      )}

      {/* ─── テナント作成モーダル ─────────────────────────────── */}
      {showCreate && (
        <>
          <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setShowCreate(false)} />
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-xl max-w-lg w-full p-6">
              <h3 className="text-lg font-semibold text-navy-900 mb-1">テナントを作成</h3>
              <p className="text-sm text-gray-500 mb-5">AM会社を登録し、マスターユーザーへ招待を送信します</p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">会社名 <span className="text-red-500">*</span></label>
                  <input className="input-field w-full" placeholder="例: RSアセットマネジメント株式会社" value={form.name} onChange={e => setForm({...form, name: e.target.value})} autoFocus />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">マスターユーザー名 <span className="text-red-500">*</span></label>
                    <input className="input-field w-full" placeholder="例: 田中 太郎" value={form.masterName} onChange={e => setForm({...form, masterName: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">メールアドレス <span className="text-red-500">*</span></label>
                    <input type="email" className="input-field w-full" placeholder="例: tanaka@rs-am.co.jp" value={form.masterEmail} onChange={e => setForm({...form, masterEmail: e.target.value})} />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">プラン</label>
                  <div className="grid grid-cols-3 gap-2">
                    {(["trial", "standard", "professional"] as const).map(p => (
                      <button
                        key={p}
                        onClick={() => setForm({...form, plan: p})}
                        className={`p-3 rounded-lg border text-center transition-all ${
                          form.plan === p ? 'border-gold-400 bg-gold-50/50 ring-1 ring-gold-200' : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <p className="text-sm font-medium text-navy-900">{planConfig[p].label}</p>
                        <p className="text-[10px] text-gray-400 mt-0.5">
                          {p === "trial" ? "14日間無料" : p === "standard" ? "基本機能" : "全機能"}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-3 bg-blue-50 rounded-lg text-xs text-blue-700">
                  作成後、マスターユーザーのメールアドレスに招待リンクが送信されます。
                  マスターユーザーがアカウントを設定すると、テナントが有効化されます。
                </div>
              </div>

              <div className="flex justify-end gap-2 mt-6">
                <button onClick={() => setShowCreate(false)} className="btn-secondary text-sm">キャンセル</button>
                <button
                  onClick={handleCreate}
                  disabled={!form.name || !form.masterEmail}
                  className="btn-gold text-sm disabled:opacity-50"
                >
                  作成して招待を送信
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

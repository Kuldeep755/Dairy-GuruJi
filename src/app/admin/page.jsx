import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  Bell,
  Clock3,
  FileText,
  LayoutDashboard,
  LogOut,
  Search,
  Settings,
  Sprout,
  UserCheck,
  Users,
} from "lucide-react";
import { backendApiUrl } from "@/lib/api";

const sidebarLinks = [
  { label: "Dashboard", icon: LayoutDashboard, active: true, href: "/admin" },
  { label: "Careers", icon: Users, href: "/admin/careers" },
  { label: "Farmer Registration", icon: Sprout, href: "/admin/farmer-registration" },
  { label: "Settings", icon: Settings, href: "#" },
];

function statusTone(status) {
  if (status === "Approved" || status === "Completed") {
    return "text-green-700 bg-green-50 border-green-200";
  }
  if (status === "In Review") {
    return "text-blue-700 bg-blue-50 border-blue-200";
  }
  return "text-amber-700 bg-amber-50 border-amber-200";
}

// Format relative date nicely
function timeAgo(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now - date) / 1000);
  
  let interval = seconds / 31536000;
  if (interval > 1) return Math.floor(interval) + " years ago";
  interval = seconds / 2592000;
  if (interval > 1) return Math.floor(interval) + " months ago";
  interval = seconds / 86400;
  if (interval > 1) return Math.floor(interval) + " days ago";
  interval = seconds / 3600;
  if (interval > 1) return Math.floor(interval) + " hours ago";
  interval = seconds / 60;
  if (interval > 1) return Math.floor(interval) + " minutes ago";
  return "Just now";
}

export default async function AdminPage() {
  const cookieStore = await cookies();
  const cookieHeader = cookieStore.toString();

  let session = null;
  let dashboardData = null;

  try {
    const response = await fetch(backendApiUrl("/api/auth/session"), {
      headers: { cookie: cookieHeader },
      cache: "no-store",
    });

    session = await response.json();
  } catch {
    redirect("/login?next=/admin");
  }

  if (!session?.authenticated) {
    redirect("/login?next=/admin");
  }

  // Fetch Dashboard Stats
  try {
    const statsRes = await fetch(backendApiUrl("/api/admin/dashboard-stats"), {
      headers: { cookie: cookieHeader },
      cache: "no-store",
    });
    if (statsRes.ok) {
      const statsJson = await statsRes.json();
      dashboardData = statsJson.data;
    }
  } catch (error) {
    console.error("Dashboard stats fetch failed", error);
  }

  const metrics = [
    {
      label: "Careers Apps",
      value: dashboardData?.metrics?.totalCareers || 0,
      trend: "Real-time sync",
      icon: Users,
    },
    {
      label: "Farmer Reg.",
      value: dashboardData?.metrics?.totalFarmers || 0,
      trend: "Real-time sync",
      icon: Sprout,
    },
    {
      label: "Dealers",
      value: dashboardData?.metrics?.totalDealers || 0,
      trend: "Real-time sync",
      icon: UserCheck,
    },
    {
      label: "Total Inquiries",
      value: dashboardData?.metrics?.totalInquiries || 0,
      trend: "Real-time sync",
      icon: FileText,
    },
  ];

  const recentRequests = dashboardData?.recentRequests || [];

  return (
    <section className="relative min-h-screen bg-[#f5f2e8] text-slate-900 overflow-hidden font-sans">
      {/* Decorative Orbs */}
      <div className="absolute -top-24 left-[-5%] h-96 w-96 rounded-full bg-[#f3c24b]/20 blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] right-[-5%] h-96 w-96 rounded-full bg-[#1f7d46]/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto flex w-full min-h-screen gap-4 p-3 sm:p-4 lg:p-6 max-w-[1600px]">
        {/* Sidebar */}
        <aside className="hidden w-72 shrink-0 rounded-[2rem] border border-white/40 bg-white/60 p-5 shadow-[0_8px_32px_-16px_rgba(0,0,0,0.1)] backdrop-blur-xl lg:flex lg:flex-col">
          <div className="mb-6 flex items-center gap-3 border-b border-primary/10 pb-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1f7d46] to-[#1a6539] text-base font-bold text-white shadow-lg shadow-[#1f7d46]/30">
              DG
            </div>
            <div>
              <p className="text-base font-bold text-[#172432]">Admin Panel</p>
              <p className="text-xs font-semibold text-primary/70 uppercase tracking-wider">Dairy Guruji</p>
            </div>
          </div>

          <nav className="flex flex-col gap-1.5">
            {sidebarLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                    item.active
                      ? "bg-gradient-to-r from-[#1f7d46] to-[#1a6539] text-white shadow-md shadow-[#1f7d46]/20"
                      : "text-slate-600 hover:bg-white/50 hover:text-[#1f7d46] hover:-translate-y-0.5"
                  }`}
                >
                  <Icon className={`h-4 w-4 ${item.active ? "text-white" : "text-slate-400 group-hover:text-[#1f7d46]"}`} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto rounded-2xl border border-white/50 bg-white/40 p-4 backdrop-blur-md">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-8 w-8 rounded-full bg-[#f3c24b]/20 flex items-center justify-center border border-[#f3c24b]/30">
                <Users className="h-4 w-4 text-[#d39a0c]" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#1f7d46]">Logged In</p>
                <p className="text-sm font-bold text-[#172432]">{session.username}</p>
              </div>
            </div>
            <Link
              href="/logout"
              className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-white/50 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50 hover:text-red-700"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Link>
          </div>
        </aside>

        <div className="min-w-0 flex-1 flex flex-col gap-4">
          {/* Header */}
          <header className="rounded-[2rem] border border-white/40 bg-white/60 p-4 shadow-[0_8px_32px_-16px_rgba(31,125,70,0.1)] backdrop-blur-xl sm:p-6 lg:p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-2xl font-bold text-[#172432]">Executive Dashboard</h1>
                <p className="text-sm font-medium text-slate-500 mt-1">Real-time overview of your digital operations.</p>
              </div>

              <div className="flex items-center gap-3">
                <label className="hidden md:flex items-center gap-2 rounded-xl border border-white bg-white/50 px-4 py-2.5 shadow-sm focus-within:ring-2 focus-within:ring-[#1f7d46]/20 transition-all">
                  <Search className="h-4 w-4 text-[#1f7d46]/70" />
                  <input
                    className="w-56 bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
                    placeholder="Search operations..."
                    type="search"
                  />
                </label>
                <button
                  type="button"
                  className="group relative flex h-11 w-11 items-center justify-center rounded-xl bg-white/80 border border-white shadow-sm transition hover:bg-white"
                  aria-label="Notifications"
                >
                  <Bell className="h-5 w-5 text-slate-500 group-hover:text-[#f3c24b] transition-colors" />
                  <span className="absolute top-2 right-2 h-2.5 w-2.5 rounded-full bg-[#f3c24b] border-2 border-white animate-pulse" />
                </button>
                <Link
                  href="/logout"
                  className="flex h-11 items-center gap-2 rounded-xl bg-white/80 border border-white px-4 text-sm font-bold text-slate-700 shadow-sm transition hover:bg-red-50 hover:text-red-600 lg:hidden"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </Link>
              </div>
            </div>
          </header>

          {/* Metrics */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {metrics.map((item, index) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.label}
                  className="group relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/70 p-6 shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br from-white/5 to-[#1f7d46]/5 blur-2xl transition group-hover:bg-[#1f7d46]/10" />
                  <div className="relative z-10 flex items-start justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-[#1f7d46]/70">{item.label}</p>
                      <p className="mt-2 text-4xl font-black text-[#172432] tracking-tight">{item.value}</p>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1f7d46] to-[#1a6539] text-white shadow-md shadow-[#1f7d46]/20 transition-transform group-hover:scale-110">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-1.5 opacity-80">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#79b062] animate-pulse" />
                    <p className="text-xs font-semibold text-[#79b062]">{item.trend}</p>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Tables block */}
          <div className="mt-2 grid grid-cols-1 gap-4 xl:grid-cols-[1.8fr_1fr]">
            <section className="rounded-[2rem] border border-white/60 bg-white/70 shadow-sm backdrop-blur-xl flex flex-col">
              <div className="flex items-center justify-between border-b border-primary/10 px-6 py-5">
                <h2 className="text-lg font-bold text-[#172432]">Recent Entries</h2>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f3c24b]/20 text-[#d39a0c]">
                  <Clock3 className="h-4 w-4 animate-[spin_5s_linear_infinite]" />
                </div>
              </div>

              <div className="p-2 flex-1 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="text-left text-xs uppercase tracking-widest text-slate-400">
                    <tr>
                      <th className="px-4 py-3 font-semibold w-24">ID</th>
                      <th className="px-4 py-3 font-semibold">Module</th>
                      <th className="px-4 py-3 font-semibold">Owner</th>
                      <th className="px-4 py-3 font-semibold">Updated</th>
                      <th className="px-4 py-3 font-semibold text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentRequests.length === 0 ? (
                      <tr>
                        <td colSpan="5" className="px-4 py-8 text-center text-slate-500 font-medium">
                          No recent activity found.
                        </td>
                      </tr>
                    ) : (
                      recentRequests.map((row) => (
                        <tr key={row.id} className="group border-b border-primary/5 last:border-0 hover:bg-white/50 transition">
                          <td className="whitespace-nowrap px-4 py-4 font-bold text-[#172432]">#{row.id}</td>
                          <td className="whitespace-nowrap px-4 py-4 font-medium text-slate-600">
                            <span className="inline-flex items-center gap-1.5 rounded-lg bg-primary/5 px-2.5 py-1 text-[#1f7d46]">
                              {row.module === 'Careers' ? <Users className="h-3 w-3" /> : <Sprout className="h-3 w-3" />}
                              {row.module}
                            </span>
                          </td>
                          <td className="whitespace-nowrap px-4 py-4 font-medium text-slate-700">{row.owner}</td>
                          <td className="whitespace-nowrap px-4 py-4 text-slate-500">{timeAgo(row.updated)}</td>
                          <td className="whitespace-nowrap px-4 py-4 text-right">
                            <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold shadow-sm ${statusTone(row.status)}`}>
                              {row.status}
                            </span>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="rounded-[2rem] border border-white/60 bg-[#1f7d46] text-white shadow-lg shadow-[#1f7d46]/20 relative overflow-hidden flex flex-col">
              <div className="absolute top-0 right-0 h-64 w-64 bg-gradient-to-bl from-white/20 to-transparent blur-3xl rounded-full" />
              <div className="border-b border-white/10 px-6 py-5 relative z-10">
                <h2 className="text-lg font-bold text-white">Live Feed Status</h2>
              </div>

              <div className="p-6 relative z-10 flex-1">
                <ul className="space-y-4">
                  {recentRequests.length === 0 ? (
                    <li className="text-white/70 italic text-sm text-center mt-8">Waiting for updates...</li>
                  ) : (
                    recentRequests.map((item, idx) => (
                      <li
                        key={idx}
                        className="group flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md transition hover:bg-white/10 hover:border-white/20"
                      >
                        <div className="mt-1 flex h-2 w-2 shrink-0 items-center justify-center">
                          <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-[#f3c24b] opacity-75"></span>
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-[#f3c24b]"></span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white/90">
                            New {item.module} entry from <span className="font-bold text-white">{item.owner}</span>
                          </p>
                          <p className="text-[10px] uppercase tracking-widest text-[#f3c24b] mt-1">{timeAgo(item.updated)}</p>
                        </div>
                      </li>
                    ))
                  )}
                </ul>
              </div>
              <div className="p-4 bg-black/10 border-t border-white/10 relative z-10">
                <p className="text-xs text-center text-white/70 font-medium">Data synced securely with Dairy Guru Ji servers Dashboard</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ArrowLeft, Sprout } from "lucide-react";
import { backendApiUrl } from "@/lib/api";
import CareersTable from "./CareersTable";

export default async function AdminCareersPage() {
  const cookieStore = await cookies();
  const cookieHeader = cookieStore.toString();

  const sessionResponse = await fetch(backendApiUrl("/api/auth/session"), {
    headers: {
      cookie: cookieHeader,
    },
    cache: "no-store",
  });

  const session = await sessionResponse.json();

  if (!session?.authenticated) {
    redirect("/login?next=/admin/careers");
  }

  let applications = [];
  let fetchError = "";

  try {
    const response = await fetch(backendApiUrl("/api/forms/admin/careers"), {
      headers: {
        cookie: cookieHeader,
      },
      cache: "no-store",
    });

    const data = await response.json();

    if (!response.ok) {
      fetchError = data?.error || "Unable to load careers data.";
    } else {
      applications = Array.isArray(data?.applications) ? data.applications : [];
    }
  } catch {
    fetchError = "Unable to load careers data.";
  }

  return (
    <section className="relative min-h-screen bg-[#f5f2e8] text-slate-900 overflow-hidden font-sans pb-12">
      {/* Decorative Orbs */}
      <div className="absolute -top-24 right-1/4 h-96 w-96 rounded-full bg-[#1f7d46]/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-[30%] left-[-5%] h-96 w-96 rounded-full bg-[#f3c24b]/15 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-3 py-4 sm:px-4 lg:px-6 lg:py-6">
        <header className="mb-6 rounded-[2rem] border border-white/60 bg-white/70 p-5 shadow-sm backdrop-blur-xl sm:p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#1f7d46]/70">Admin Operations</p>
              <h1 className="text-2xl font-black text-[#172432] mt-1 tracking-tight">Careers Applications</h1>
              <p className="text-sm font-medium text-slate-500 mt-1">Manage and filter incoming job applications.</p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/admin"
                className="group flex items-center gap-2 rounded-xl bg-white/80 border border-white px-4 py-2.5 text-sm font-bold text-slate-700 shadow-sm transition hover:bg-[#1f7d46] hover:text-white"
              >
                <ArrowLeft className="h-4 w-4 text-slate-400 group-hover:text-white transition-colors" />
                Dashboard
              </Link>
              <Link
                href="/admin/farmer-registration"
                className="group flex items-center gap-2 rounded-xl bg-white/80 border border-white px-4 py-2.5 text-sm font-bold text-slate-700 shadow-sm transition hover:bg-[#1f7d46] hover:text-white"
              >
                <Sprout className="h-4 w-4 text-slate-400 group-hover:text-white transition-colors" />
                Farmer Data
              </Link>
            </div>
          </div>
        </header>

        {fetchError ? (
          <div className="rounded-[2rem] border border-red-200 bg-red-50 p-6 shadow-sm">
            <h2 className="text-lg font-bold text-red-800">Error fetching data</h2>
            <p className="mt-2 text-sm text-red-600">{fetchError}</p>
          </div>
        ) : (
          <CareersTable applications={applications} />
        )}
      </div>
    </section>
  );
}

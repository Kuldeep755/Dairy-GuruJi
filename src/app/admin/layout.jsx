import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { backendApiUrl } from "@/lib/api";
import AdminSidebar from "@/components/admin/AdminSidebar";

export default async function AdminLayout({ children }) {
  const cookieStore = await cookies();
  const cookieHeader = cookieStore.toString();
  let session = null;

  try {
    const response = await fetch(backendApiUrl("/api/auth/session"), {
      headers: { cookie: cookieHeader },
      cache: "no-store",
    });
    const data = await response.json().catch(() => null);

    if (response.ok && data?.authenticated) {
      session = {
        username: data.username,
        exp: data.expiresAt,
      };
    }
  } catch {
    session = null;
  }

  if (!session) {
    redirect("/login?next=/admin");
  }

  return (
    <div className="relative min-h-screen bg-[#edf3f1] text-slate-900 font-sans flex">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(15,118,110,0.08),transparent_40%),radial-gradient(circle_at_88%_12%,rgba(14,116,144,0.06),transparent_36%)]" />
      <AdminSidebar session={session} />
      <main className="relative min-w-0 flex-1 flex flex-col px-4 sm:px-6 lg:px-8 py-6 h-screen overflow-y-auto">
        {children}
      </main>
    </div>
  );
}

import { cookies } from "next/headers";
import { backendApiUrl } from "@/lib/api";

function formatDateTime(value) {
  if (!value) return "-";
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return value;
  return parsed.toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  });
}

export default async function AdminContactPage() {
  const cookieStore = await cookies();
  const cookieHeader = cookieStore.toString();

  let inquiries = [];
  let total = 0;
  let fetchError = "";

  try {
    const response = await fetch(backendApiUrl("/api/forms/admin/contact?limit=100"), {
      headers: { cookie: cookieHeader },
      cache: "no-store",
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      fetchError = data?.error || "Unable to load contact inquiries.";
    } else {
      inquiries = Array.isArray(data?.inquiries) ? data.inquiries : [];
      total = typeof data?.total === "number" ? data.total : inquiries.length;
    }
  } catch {
    fetchError = "Unable to load contact inquiries.";
  }

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
      <header className="rounded-3xl border border-[#d6e4e1] bg-white/90 p-6 shadow-sm backdrop-blur">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0f766e]">Contact Form Data</p>
        <h1 className="mt-2 text-3xl font-black tracking-tight text-[#0f172a]">Contact Inquiries</h1>
        <p className="mt-2 text-sm text-slate-600">All contact form submissions from your website.</p>
        <p className="mt-3 inline-flex rounded-lg bg-[#ecf7f4] px-3 py-1 text-sm font-semibold text-[#0f766e]">Total Inquiries: {total}</p>
      </header>

      <section className="overflow-hidden rounded-2xl border border-[#d8e5e2] bg-white shadow-sm">
        {fetchError ? (
          <p className="px-6 py-8 text-sm font-semibold text-red-600">{fetchError}</p>
        ) : inquiries.length === 0 ? (
          <p className="px-6 py-8 text-sm font-medium text-slate-500">No contact form submissions yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] text-left text-sm">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-100">
                  <th className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-500">ID</th>
                  <th className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-500">Name</th>
                  <th className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-500">Phone</th>
                  <th className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-500">Email</th>
                  <th className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-500">Business Type</th>
                  <th className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-500">Message</th>
                  <th className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-500">Submitted</th>
                </tr>
              </thead>
              <tbody>
                {inquiries.map((row) => (
                  <tr key={row.id} className="border-b border-slate-100 align-top">
                    <td className="px-5 py-4 font-semibold text-slate-800">#{row.id}</td>
                    <td className="px-5 py-4 text-slate-700 font-semibold">{row.name || "-"}</td>
                    <td className="px-5 py-4 text-slate-600">{row.phone || "-"}</td>
                    <td className="px-5 py-4 text-slate-600">{row.email || "-"}</td>
                    <td className="px-5 py-4 text-slate-600">{row.businessType || "-"}</td>
                    <td className="px-5 py-4 text-slate-600 max-w-[260px]">{row.message || "-"}</td>
                    <td className="px-5 py-4 text-slate-500">{formatDateTime(row.createdAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}

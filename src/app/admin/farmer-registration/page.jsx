import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ArrowLeft, FileText, Users } from "lucide-react";
import { backendApiUrl } from "@/lib/api";

function formatDateTime(value) {
  if (!value) {
    return "-";
  }

  const parsed = new Date(value);

  if (Number.isNaN(parsed.getTime())) {
    return value;
  }

  return parsed.toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  });
}

export default async function AdminFarmerRegistrationPage() {
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
    redirect("/login?next=/admin/farmer-registration");
  }

  let registrations = [];
  let total = 0;
  let fetchError = "";

  try {
    const response = await fetch(backendApiUrl("/api/forms/admin/farmer-registration"), {
      headers: {
        cookie: cookieHeader,
      },
      cache: "no-store",
    });

    const data = await response.json();

    if (!response.ok) {
      fetchError = data?.error || "Unable to load farmer registration data.";
    } else {
      registrations = Array.isArray(data?.registrations) ? data.registrations : [];
      total = typeof data?.total === "number" ? data.total : registrations.length;
    }
  } catch {
    fetchError = "Unable to load farmer registration data.";
  }

  return (
    <section className="min-h-screen bg-slate-100 px-3 py-4 sm:px-4 lg:px-6 lg:py-6">
      <div className="mx-auto max-w-[1400px]">
        <header className="mb-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Admin Panel</p>
              <h1 className="text-xl font-bold text-slate-900 sm:text-2xl">Farmer Registrations</h1>
            </div>

            <div className="flex items-center gap-2">
              <Link
                href="/admin"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                <ArrowLeft className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                href="/admin/careers"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                <Users className="h-4 w-4" />
                Careers Data
              </Link>
            </div>
          </div>
        </header>

        <section className="mb-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700">
              <FileText className="h-4 w-4" />
              Total Farmer Forms: {total}
            </div>
            <p className="text-xs text-slate-500">Each row includes main fields and full submitted JSON data.</p>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center gap-2 border-b border-slate-100 px-4 py-3 sm:px-5">
            <FileText className="h-4 w-4 text-slate-600" />
            <h2 className="text-sm font-semibold text-slate-900 sm:text-base">Complete Farmer Registration Data</h2>
          </div>

          {fetchError ? (
            <p className="px-4 py-6 text-sm font-medium text-red-600 sm:px-5">{fetchError}</p>
          ) : registrations.length === 0 ? (
            <p className="px-4 py-6 text-sm text-slate-600 sm:px-5">No farmer registrations found yet.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500">
                  <tr>
                    <th className="px-4 py-3 font-medium">ID</th>
                    <th className="px-4 py-3 font-medium">Farmer Name</th>
                    <th className="px-4 py-3 font-medium">Mobile</th>
                    <th className="px-4 py-3 font-medium">Village</th>
                    <th className="px-4 py-3 font-medium">District</th>
                    <th className="px-4 py-3 font-medium">State</th>
                    <th className="px-4 py-3 font-medium">Submitted At</th>
                    <th className="px-4 py-3 font-medium">Complete Form Data</th>
                  </tr>
                </thead>
                <tbody>
                  {registrations.map((item) => (
                    <tr key={item.id} className="border-t border-slate-100 align-top text-slate-700">
                      <td className="whitespace-nowrap px-4 py-3 font-semibold text-slate-900">{item.id}</td>
                      <td className="whitespace-nowrap px-4 py-3">{item.farmerName || "-"}</td>
                      <td className="whitespace-nowrap px-4 py-3">{item.primaryMobile || "-"}</td>
                      <td className="whitespace-nowrap px-4 py-3">{item.village || "-"}</td>
                      <td className="whitespace-nowrap px-4 py-3">{item.district || "-"}</td>
                      <td className="whitespace-nowrap px-4 py-3">{item.state || "-"}</td>
                      <td className="whitespace-nowrap px-4 py-3">{formatDateTime(item.createdAt)}</td>
                      <td className="min-w-[360px] px-4 py-3">
                        <details>
                          <summary className="cursor-pointer text-sm font-medium text-slate-700 hover:text-slate-900">
                            View full data
                          </summary>
                          <pre className="mt-2 overflow-x-auto rounded-lg bg-slate-50 p-3 text-xs leading-5 text-slate-700">
                            {JSON.stringify(item.registrationData || {}, null, 2)}
                          </pre>
                        </details>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </section>
  );
}

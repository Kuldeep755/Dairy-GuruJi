"use client";

import { useState } from "react";
import { Search, MapPin, Users, FilterX, Map } from "lucide-react";

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

export default function CareersTable({ applications = [] }) {
  const [nameFilter, setNameFilter] = useState("");
  const [stateFilter, setStateFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");

  const filteredApplications = applications.filter((app) => {
    const matchName =
      !nameFilter ||
      (app.name && app.name.toLowerCase().includes(nameFilter.toLowerCase()));
    const matchState =
      !stateFilter ||
      (app.state &&
        app.state.toLowerCase().includes(stateFilter.toLowerCase()));
    const matchCity =
      !cityFilter ||
      (app.city && app.city.toLowerCase().includes(cityFilter.toLowerCase()));

    return matchName && matchState && matchCity;
  });

  const clearFilters = () => {
    setNameFilter("");
    setStateFilter("");
    setCityFilter("");
  };

  const hasActiveFilters = nameFilter || stateFilter || cityFilter;

  return (
    <section className="flex flex-col gap-4">
      {/* Filters Form */}
      <div className="rounded-[2rem] border border-white/60 bg-white/70 p-5 shadow-sm backdrop-blur-xl">
        <div className="grid gap-4 md:grid-cols-[1fr_1fr_1fr_auto]">
          <label className="flex items-center gap-3 rounded-xl border border-white bg-white/50 px-4 py-3 shadow-sm focus-within:ring-2 focus-within:ring-[#1f7d46]/20 transition-all">
            <Search className="h-4 w-4 text-[#1f7d46]/70 shrink-0" />
            <input
              type="text"
              placeholder="Search by Applicant Name"
              className="w-full bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
              value={nameFilter}
              onChange={(e) => setNameFilter(e.target.value)}
            />
          </label>

          <label className="flex items-center gap-3 rounded-xl border border-white bg-white/50 px-4 py-3 shadow-sm focus-within:ring-2 focus-within:ring-[#1f7d46]/20 transition-all">
            <Map className="h-4 w-4 text-[#1f7d46]/70 shrink-0" />
            <input
              type="text"
              placeholder="Filter by State"
              className="w-full bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
              value={stateFilter}
              onChange={(e) => setStateFilter(e.target.value)}
            />
          </label>

          <label className="flex items-center gap-3 rounded-xl border border-white bg-white/50 px-4 py-3 shadow-sm focus-within:ring-2 focus-within:ring-[#1f7d46]/20 transition-all">
            <MapPin className="h-4 w-4 text-[#1f7d46]/70 shrink-0" />
            <input
              type="text"
              placeholder="Filter by City"
              className="w-full bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
              value={cityFilter}
              onChange={(e) => setCityFilter(e.target.value)}
            />
          </label>

          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="flex items-center justify-center gap-2 rounded-xl bg-orange-50 border border-orange-100 px-5 text-sm font-semibold text-orange-600 transition-all hover:bg-orange-100 py-3 md:py-0"
            >
              <FilterX className="h-4 w-4" />
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Table Section */}
      <section className="rounded-[2rem] border border-white/60 bg-white/70 shadow-sm backdrop-blur-xl flex flex-col overflow-hidden">
        <div className="flex items-center justify-between border-b border-primary/10 px-6 py-5 bg-white/40">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1f7d46]/10 text-[#1f7d46]">
              <Users className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#172432]">
                Careers Results
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                Showing {filteredApplications.length} of {applications.length}{" "}
                matching applicants
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-x-auto p-2">
          {filteredApplications.length === 0 ? (
            <div className="px-6 py-12 text-center flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 mb-4">
                <Search className="h-6 w-6 text-slate-400" />
              </div>
              <p className="text-sm font-semibold text-slate-700">
                No applications match your filter criteria.
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Try clearing or adjusting your filters.
              </p>
            </div>
          ) : (
            <table className="w-full text-sm">
              <thead className="bg-[#f5f2e8]/50 text-left text-xs uppercase tracking-widest text-[#1f7d46]/70">
                <tr>
                  <th className="px-4 py-4 font-bold">Name</th>
                  <th className="px-4 py-4 font-bold">Email</th>
                  <th className="px-4 py-4 font-bold">Phone</th>
                  <th className="px-4 py-4 font-bold">State</th>
                  <th className="px-4 py-4 font-bold">City</th>
                  <th className="px-4 py-4 font-bold">LSA / Exp</th>
                  <th className="px-4 py-4 font-bold text-right rounded-tr-xl">
                    Submitted
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-primary/5">
                {filteredApplications.map((item) => (
                  <tr
                    key={item.id}
                    className="group hover:bg-white/60 transition-colors"
                  >
                    <td className="whitespace-nowrap px-4 py-4 text-slate-700 font-semibold">
                      {item.name || "-"}
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-slate-600">
                      {item.email || "-"}
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-slate-600">
                      {item.phoneNumber || "-"}
                    </td>
                    <td className="whitespace-nowrap px-4 py-4">
                      <span className="inline-flex rounded-lg bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 border border-blue-100">
                        {item.state || "-"}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-slate-700">
                      {item.city || "-"}
                    </td>
                    <td className="whitespace-nowrap px-4 py-4">
                      <div className="flex flex-col">
                        <span className="text-sm text-slate-800 font-medium">
                          {item.lsa || "-"}
                        </span>
                        <span className="text-xs text-slate-500 mt-0.5">
                          {item.experience || "No experience"}
                        </span>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-right text-slate-500 font-medium">
                      {formatDateTime(item.createdAt)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </section>
    </section>
  );
}

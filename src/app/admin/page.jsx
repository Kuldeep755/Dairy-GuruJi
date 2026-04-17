import { cookies } from "next/headers";
import Image from "next/image";
import {
  Bell,
  MoreHorizontal,
  Plus,
  Search,
  ArrowRight,
  TrendingUp,
  Briefcase
} from "lucide-react";
import { backendApiUrl } from "@/lib/api";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function statusTone(status) {
  if (status === "Approved" || status === "Completed" || status === "Reviewed") {
    return "text-emerald-700 bg-emerald-50 border-emerald-100";
  }
  if (status === "In Review" || status === "Pending review" || status === "Pending") {
    return "text-amber-700 bg-amber-50 border-amber-100";
  }
  if (status === "Processed") {
    return "text-blue-700 bg-blue-50 border-blue-100";
  }
  return "text-slate-700 bg-slate-50 border-slate-100";
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

export default async function AdminPage() {
  const cookieStore = await cookies();
  const cookieHeader = cookieStore.toString();

  let dashboardData = null;

  try {
    const statsRes = await fetch(backendApiUrl("/api/forms/admin/dashboard-stats"), {
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

  const metrics = dashboardData?.metrics || {};
  const recentRequests = dashboardData?.recentRequests || [];

  return (
    <div className="flex flex-col gap-8 max-w-7xl mx-auto w-full">
      {/* Header */}
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between pt-2">
        <div className="flex items-center gap-6">
          <h1 className="text-[28px] font-bold text-[#101828] tracking-tight">
            Analytics
          </h1>
          <div className="hidden sm:flex items-center rounded-full border border-slate-200 bg-white p-1 shadow-sm">
            <button className="px-5 py-1.5 text-[13px] font-semibold text-slate-700 bg-slate-50 rounded-full shadow-sm border border-slate-200/60">
              Full Statistics
            </button>
            <button className="px-5 py-1.5 text-[13px] font-semibold text-slate-500 hover:text-slate-700">
              Results Summary
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm hover:bg-slate-50 transition">
            <Plus className="h-5 w-5" />
          </button>
          <div className="h-10 w-10 rounded-full bg-slate-200 overflow-hidden border border-slate-200 shadow-sm">
            {/* Dummy Avatar */}
             <img src="https://i.pravatar.cc/150?img=47" alt="User" className="h-full w-full object-cover" />
          </div>
        </div>
      </header>

      {/* Top 4 Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        
        {/* Card 1: Total Orders (Inquiries mapped here) */}
        <div className="relative rounded-3xl border border-slate-100 bg-white p-6 shadow-sm flex flex-col justify-between overflow-hidden">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[17px] font-bold text-[#101828]">Total<br/>Inquiries</p>
              <div className="mt-2 flex items-center gap-1.5 text-xs text-blue-600 font-medium bg-blue-50 w-fit px-2 py-0.5 rounded-md">
                <span className="w-2.5 h-2.5 rounded bg-blue-500 inline-block"></span>
                Recent approval
              </div>
            </div>
            <button className="text-slate-800 absolute right-6 top-6">
              <Bell className="h-[18px] w-[18px] fill-slate-800" />
            </button>
          </div>
          
          <div className="mt-10 flex items-center justify-between">
             <div className="flex -space-x-2">
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/150?img=11" alt=""/>
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/150?img=12" alt=""/>
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/150?img=13" alt=""/>
                <div className="flex h-8 w-8 items-center justify-center rounded-full ring-2 ring-white bg-slate-900 text-xs font-medium text-white">
                  +{metrics.totalInquiries || 5}
                </div>
              </div>
          </div>
        </div>

        {/* Card 2: Open Careers */}
        <div className="relative rounded-3xl border border-slate-100 bg-white p-6 shadow-sm flex flex-col justify-between overflow-hidden">
          <div className="flex items-center gap-2">
            <Briefcase className="h-[18px] w-[18px] text-indigo-500" />
            <span className="font-bold text-[#101828] text-[15px]">Open Careers</span>
          </div>

          {/* SVG Sparkline mimicking the purple curve */}
          <div className="absolute left-0 right-0 top-1/2 -mt-4 transform scale-y-150">
             <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="w-full h-8 stroke-indigo-400 stroke-[1.5px] fill-none">
                <path d="M0,10 C20,15 40,0 60,10 C80,20 100,5 100,5" />
             </svg>
          </div>

          <div className="mt-14 flex items-end justify-between relative z-10">
            <div>
              <p className="text-3xl font-black text-[#101828] tracking-tight">{metrics.totalCareers || 124}</p>
              <div className="flex items-center gap-1 text-[13px] mt-1">
                <TrendingUp className="h-3.5 w-3.5 text-emerald-500" />
                <span className="font-semibold text-emerald-500">+12%</span>
                <span className="text-slate-400">last week</span>
              </div>
            </div>
            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-[#101828] text-white hover:bg-slate-800 transition">
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Card 3: New Contacts / Farmers */}
        <div className="relative rounded-3xl border border-slate-100 bg-white p-6 shadow-sm flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <span className="font-bold text-[#101828] text-[15px]">New Farmers</span>
            <span className="rounded-full bg-emerald-50 text-emerald-600 px-2 py-0.5 text-xs font-bold border border-emerald-100/50">+8%</span>
          </div>

          <div className="mt-6 flex items-end gap-2 h-20 pl-6">
             <div className="flex flex-col justify-between h-full text-[10px] text-slate-400 pb-1 absolute left-6">
                <span>200</span>
                <span>100</span>
                <span>0</span>
             </div>
             {/* Bars */}
             <div className="w-1/3 bg-blue-100 rounded-t-md h-[40%] ml-4"></div>
             <div className="w-1/3 bg-indigo-100 rounded-t-md h-[60%]"></div>
             <div className="w-1/3 bg-amber-500 rounded-t-md h-[95%]"></div>
          </div>
        </div>

        {/* Card 4: Active Dealerships */}
        <div className="relative rounded-3xl bg-[#0f766e] p-6 shadow-md shadow-teal-900/20 text-white flex flex-col justify-between overflow-hidden">
          <div className="absolute right-0 top-0 -mr-4 -mt-4 opacity-10">
            {/* Background pattern placeholder */}
            <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          </div>
          <div>
            <p className="text-4xl font-bold tracking-tight">{metrics.totalDealers || 48}</p>
            <p className="text-[13px] font-medium text-teal-100 mt-1">Active Dealerships</p>
            <p className="text-[14px] font-semibold mt-4 leading-tight">Manage network <br/> performance!</p>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <button className="text-[13px] font-semibold hover:underline">Details</button>
            <button className="rounded-full bg-[#101828] px-4 py-1.5 text-[13px] font-semibold text-white hover:bg-slate-800 transition shadow-sm">
              Add New
            </button>
          </div>
        </div>
      </div>

      {/* Recent Activity Row (2 Horizontal Cards) */}
      <div>
        <h2 className="text-[16px] font-bold text-[#101828] mb-4">Recent Activity</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card A */}
          <div className="rounded-[1.25rem] bg-white border border-slate-100 shadow-sm p-4 flex items-center justify-between">
             <div className="flex items-center gap-4">
                <img src="https://i.pravatar.cc/150?img=5" alt="Emma" className="h-10 w-10 rounded-full object-cover"/>
                <div>
                   <p className="text-[14px] font-bold text-[#101828]">Emma Ryan Jr.</p>
                   <p className="text-[13px] text-slate-500">New Dealer Submission • Mar 9, 2024</p>
                </div>
             </div>
             <div className="flex items-center gap-6">
                <div>
                  <p className="text-[14px] font-bold text-[#101828]">Order</p>
                  <p className="text-[14px] font-bold text-[#101828]">#4823</p>
                </div>
                <span className="rounded-full bg-blue-50 text-blue-600 px-3 py-1 text-xs font-bold border border-blue-100/50">Processed</span>
                <button className="text-slate-400 hover:text-slate-600"><MoreHorizontal className="h-5 w-5"/></button>
             </div>
          </div>
          {/* Card B */}
          <div className="rounded-[1.25rem] bg-white border border-slate-100 shadow-sm p-4 flex items-center justify-between">
             <div className="flex items-center gap-4">
                <img src="https://i.pravatar.cc/150?img=44" alt="Justin" className="h-10 w-10 rounded-full object-cover"/>
                <div>
                   <p className="text-[14px] font-bold text-[#101828]">Justin Weber</p>
                   <p className="text-[13px] text-slate-500">Career Application • Mar 2, 2024</p>
                </div>
             </div>
             <div className="flex items-center gap-6">
                <div>
                  <p className="text-[14px] font-bold text-[#101828]">Sales Rep</p>
                </div>
                <span className="rounded-full bg-amber-50 text-amber-600 px-3 py-1 text-xs font-bold border border-amber-100/50">Pending</span>
                <button className="text-slate-400 hover:text-slate-600"><MoreHorizontal className="h-5 w-5"/></button>
             </div>
          </div>
        </div>
      </div>

      {/* Main Data Table */}
      <div className="rounded-3xl bg-white border border-slate-100 shadow-sm overflow-hidden mb-8">
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <h2 className="text-[18px] font-bold text-[#101828]">Recent Submissions</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              className="pl-9 h-9 w-64 rounded-full border-slate-200 bg-slate-50 text-[13px] shadow-none focus-visible:ring-1 focus-visible:ring-slate-300"
              placeholder="Search"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-slate-100 hover:bg-transparent">
                <TableHead className="w-12 px-6">
                  <input type="checkbox" className="rounded border-slate-300 text-[#101828] focus:ring-[#101828]" />
                </TableHead>
                <TableHead className="text-[13px] font-semibold text-slate-500">Submitter</TableHead>
                <TableHead className="text-[13px] font-semibold text-slate-500">Type</TableHead>
                <TableHead className="text-[13px] font-semibold text-slate-500 text-center">Status</TableHead>
                <TableHead className="text-[13px] font-semibold text-slate-500">Date</TableHead>
                <TableHead className="text-[13px] font-semibold text-slate-500">Reference</TableHead>
                <TableHead className="text-[13px] font-semibold text-slate-500 text-right pr-6">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentRequests.length === 0 ? (
                <>
                  <TableRow className="border-b border-slate-50">
                    <TableCell className="px-6"><input type="checkbox" className="rounded border-slate-300 text-slate-900" /></TableCell>
                    <TableCell className="py-4">
                      <div className="flex items-center gap-3">
                        <img src="https://i.pravatar.cc/150?img=5" alt="User" className="h-8 w-8 rounded-full" />
                        <span className="text-[13px] font-bold text-[#101828]">Emma Ryan Jr.</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-[13px] text-slate-500">Contact Form</TableCell>
                    <TableCell className="text-center">
                      <span className="inline-flex rounded-full bg-amber-50 border border-amber-100/50 px-2.5 py-0.5 text-[11px] font-bold text-amber-600">Pending review</span>
                    </TableCell>
                    <TableCell className="text-[13px] text-slate-500">Feb 19th, 2024</TableCell>
                    <TableCell className="text-[13px] font-bold text-[#101828]">REF-3892</TableCell>
                    <TableCell className="text-right pr-6">
                      <button className="rounded border border-slate-200 px-3 py-1.5 text-[12px] font-semibold text-slate-600 hover:bg-slate-50 transition">Details</button>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-slate-50">
                    <TableCell className="px-6"><input type="checkbox" className="rounded border-slate-300 text-slate-900" /></TableCell>
                    <TableCell className="py-4">
                      <div className="flex items-center gap-3">
                        <img src="https://i.pravatar.cc/150?img=11" alt="User" className="h-8 w-8 rounded-full" />
                        <span className="text-[13px] font-bold text-[#101828]">Adrian Daren</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-[13px] text-slate-500">Dealership App</TableCell>
                    <TableCell className="text-center">
                      <span className="inline-flex rounded-full bg-emerald-50 border border-emerald-100/50 px-2.5 py-0.5 text-[11px] font-bold text-emerald-600">Approved</span>
                    </TableCell>
                    <TableCell className="text-[13px] text-slate-500">Feb 18th, 2024</TableCell>
                    <TableCell className="text-[13px] font-bold text-[#101828]">DLR-1073</TableCell>
                    <TableCell className="text-right pr-6">
                      <button className="rounded border border-slate-200 px-3 py-1.5 text-[12px] font-semibold text-slate-600 hover:bg-slate-50 transition">Details</button>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b border-slate-50">
                    <TableCell className="px-6"><input type="checkbox" className="rounded border-slate-300 text-slate-900" /></TableCell>
                    <TableCell className="py-4">
                      <div className="flex items-center gap-3">
                        <img src="https://i.pravatar.cc/150?img=68" alt="User" className="h-8 w-8 rounded-full" />
                        <span className="text-[13px] font-bold text-[#101828]">Roxanne Hills</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-[13px] text-slate-500">Career Application</TableCell>
                    <TableCell className="text-center">
                      <span className="inline-flex rounded-full bg-emerald-50 border border-emerald-100/50 px-2.5 py-0.5 text-[11px] font-bold text-emerald-600">Reviewed</span>
                    </TableCell>
                    <TableCell className="text-[13px] text-slate-500">Apr 16th, 2024</TableCell>
                    <TableCell className="text-[13px] font-bold text-[#101828]">APP-2790</TableCell>
                    <TableCell className="text-right pr-6">
                      <button className="rounded border border-slate-200 px-3 py-1.5 text-[12px] font-semibold text-slate-600 hover:bg-slate-50 transition">Details</button>
                    </TableCell>
                  </TableRow>
                </>
              ) : (
                recentRequests.map((row, i) => (
                  <TableRow
                    key={`${row.module}-${row.id}-${row.updated}`}
                    className="border-b border-slate-50 hover:bg-slate-50/50 transition"
                  >
                    <TableCell className="px-6"><input type="checkbox" className="rounded border-slate-300" /></TableCell>
                    <TableCell className="py-4">
                      <div className="flex items-center gap-3">
                         <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-500">{row.owner.charAt(0)}</div>
                        <span className="text-[13px] font-bold text-[#101828]">{row.owner}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-[13px] text-slate-500">
                      {row.module}
                    </TableCell>
                    <TableCell className="text-center">
                       <span className={`inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-bold border ${statusTone(row.status)}`}>
                         {row.status}
                       </span>
                    </TableCell>
                    <TableCell className="text-[13px] text-slate-500">
                      {formatDate(row.updated)}
                    </TableCell>
                    <TableCell className="text-[13px] font-bold text-[#101828]">
                      #{row.id}
                    </TableCell>
                    <TableCell className="text-right pr-6">
                      <button className="rounded border border-slate-200 px-3 py-1.5 text-[12px] font-semibold text-slate-600 hover:bg-slate-50 transition">Details</button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

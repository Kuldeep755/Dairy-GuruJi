"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LogOut,
  LayoutDashboard,
  ShoppingCart,
  Briefcase,
  Package2,
  ChevronLeft,
  ChevronRight,
  Sprout,
  FileText,
  Phone,
  Building2,
  UserRound,
} from "lucide-react";

const sidebarLinks = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/admin", exact: true },
  { label: "Orders", icon: ShoppingCart, href: "/admin/orders", exact: false },
  { label: "Career Forms", icon: Briefcase, href: "/admin/careers", exact: false },
  { label: "Contact Forms", icon: Phone, href: "/admin/contact", exact: false },
  { label: "Dealership Forms", icon: Building2, href: "/admin/dealership", exact: false },
  { label: "Farmer Forms", icon: Sprout, href: "/admin/farmer-registration", exact: false },
  { label: "Employee Forms", icon: FileText, href: "/admin/employee-data-form", exact: false },
];

export default function AdminSidebar({ session }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <aside
      className={`relative shrink-0 border-r border-[#dfe7e5] bg-[#f4f8f7] transition-all duration-300 ease-in-out flex flex-col h-screen ${
        isCollapsed ? "w-[84px]" : "w-[288px]"
      } hidden md:flex z-50`}
    >
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-8 flex h-6 w-6 items-center justify-center rounded-full border border-[#cfd9d6] bg-white text-slate-500 shadow-sm hover:scale-110 hover:text-slate-700 transition z-50"
      >
        {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
      </button>

      <div className={`h-20 flex items-center ${isCollapsed ? "justify-center" : "px-6"} shrink-0`}>
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0f766e] shadow-sm">
            <Package2 className="h-5 w-5 text-white" />
          </div>
          {!isCollapsed && (
            <div>
              <p className="text-base font-extrabold text-[#0f172a] leading-tight">Dairy Guruji</p>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Admin Panel</p>
            </div>
          )}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto py-4 flex flex-col gap-6">
        <div>
          {!isCollapsed && (
            <div className="px-6 mb-3">
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                Form Management
              </p>
            </div>
          )}
          <nav className="flex flex-col px-3 gap-1.5">
            {sidebarLinks.map((item) => {
              const Icon = item.icon;
              const isActive = item.exact
                ? pathname === item.href
                : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  title={isCollapsed ? item.label : undefined}
                  className={`group flex items-center rounded-xl px-3 py-2.5 text-[14px] font-semibold transition-all ${
                    isCollapsed ? "justify-center" : "gap-3"
                  } ${
                    isActive
                      ? "bg-[#e5f4f1] text-[#0f766e]"
                      : "text-slate-600 hover:bg-[#eaf1ef] hover:text-[#0f172a]"
                  }`}
                >
                  <Icon className={`h-[18px] w-[18px] shrink-0 ${isActive ? "text-[#0f766e]" : "text-slate-500 group-hover:text-slate-700"}`} />
                  {!isCollapsed && (
                    <span className="whitespace-nowrap">{item.label}</span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      <div className="px-3 pb-6 pt-4 border-t border-[#d9e4e1] mx-3">
        {!isCollapsed ? (
          <div className="mb-3 rounded-xl border border-[#d7e4e0] bg-white px-3 py-2.5">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Signed In</p>
            <p className="mt-1 text-sm font-bold text-slate-800 truncate">{session?.username || "Admin User"}</p>
          </div>
        ) : (
          <div className="mb-3 flex items-center justify-center">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white border border-[#d7e4e0] text-slate-600">
              <UserRound className="h-4 w-4" />
            </div>
          </div>
        )}

        <Link
          href="/logout"
          title={isCollapsed ? "Log Out" : undefined}
          className={`group flex items-center rounded-xl px-3 py-2.5 text-[14px] font-semibold text-slate-600 hover:bg-[#eaf1ef] hover:text-[#0f172a] transition-all ${isCollapsed ? "justify-center" : "gap-3"}`}
        >
          <LogOut className="h-[18px] w-[18px] shrink-0 text-slate-500 group-hover:text-slate-700" />
          {!isCollapsed && <span>Log Out</span>}
        </Link>
      </div>
    </aside>
  );
}

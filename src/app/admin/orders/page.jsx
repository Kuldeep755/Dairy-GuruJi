import { cookies } from "next/headers";
import Link from "next/link";
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

function tone(status) {
  const normalized = String(status || "").toLowerCase();
  if (["paid", "completed", "delivered", "placed"].includes(normalized)) {
    return "bg-emerald-50 text-emerald-700 border-emerald-100";
  }
  if (["pending", "processing", "created"].includes(normalized)) {
    return "bg-amber-50 text-amber-700 border-amber-100";
  }
  if (["cancelled", "failed"].includes(normalized)) {
    return "bg-red-50 text-red-700 border-red-100";
  }
  return "bg-slate-100 text-slate-700 border-slate-200";
}

export default async function OrdersPage() {
  const cookieStore = await cookies();
  const cookieHeader = cookieStore.toString();

  let orders = [];
  let total = 0;
  let fetchError = "";

  try {
    const response = await fetch(backendApiUrl("/api/orders/admin/orders?limit=100"), {
      headers: { cookie: cookieHeader },
      cache: "no-store",
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      fetchError = data?.error || "Unable to load orders.";
    } else {
      orders = Array.isArray(data?.orders) ? data.orders : [];
      total = typeof data?.total === "number" ? data.total : orders.length;
    }
  } catch {
    fetchError = "Unable to load orders.";
  }

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
      <header className="rounded-3xl border border-[#d6e4e1] bg-white/90 p-6 shadow-sm backdrop-blur">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0f766e]">Orders & Customers</p>
        <h1 className="mt-2 text-3xl font-black tracking-tight text-[#0f172a]">Order Management</h1>
        <p className="mt-2 text-sm text-slate-600">Manage placed orders and customer delivery details.</p>
        <p className="mt-3 inline-flex rounded-lg bg-[#ecf7f4] px-3 py-1 text-sm font-semibold text-[#0f766e]">Total Orders: {total}</p>
      </header>

      <section className="overflow-hidden rounded-2xl border border-[#d8e5e2] bg-white shadow-sm">
        {fetchError ? (
          <p className="px-6 py-8 text-sm font-semibold text-red-600">{fetchError}</p>
        ) : orders.length === 0 ? (
          <p className="px-6 py-8 text-sm font-medium text-slate-500">No orders placed yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1100px] text-left text-sm">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-100">
                  <th className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-500">Order</th>
                  <th className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-500">Customer</th>
                  <th className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-500">Address</th>
                  <th className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-500">Items</th>
                  <th className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-500">Amount</th>
                  <th className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-500">Payment</th>
                  <th className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-500">Order Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-b border-slate-100 align-top">
                    <td className="px-5 py-4">
                      <p className="font-bold text-slate-800">{order.orderNumber}</p>
                      <p className="text-xs text-slate-500">{formatDateTime(order.createdAt)}</p>
                      <p className="text-xs text-slate-500">User: {order.userId || "-"}</p>
                    </td>
                    <td className="px-5 py-4 text-slate-700">
                      <p className="font-semibold">{order.customerName || "-"}</p>
                      <p className="text-xs text-slate-500">{order.customerPhone || "-"}</p>
                      <p className="text-xs text-slate-500">{order.customerCity || "-"}, {order.customerState || "-"}</p>
                    </td>
                    <td className="px-5 py-4 text-slate-600 max-w-[260px]">
                      {order.customerAddress || "-"}
                      <p className="text-xs text-slate-500 mt-1">PIN: {order.customerPincode || "-"}</p>
                    </td>
                    <td className="px-5 py-4 text-slate-700">
                      <p className="font-semibold">{order.itemCount || 0} items</p>
                      <p className="text-xs text-slate-500 mt-1">Subtotal: ₹{Number(order.subtotalAmount || 0).toLocaleString("en-IN")}</p>
                      <p className="text-xs text-slate-500">Delivery: ₹{Number(order.deliveryCharge || 0).toLocaleString("en-IN")}</p>
                    </td>
                    <td className="px-5 py-4 font-bold text-slate-800">₹{Number(order.totalAmount || 0).toLocaleString("en-IN")}</td>
                    <td className="px-5 py-4">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500">{order.paymentMethod || "-"}</p>
                      <span className={`mt-1 inline-flex rounded-full border px-2.5 py-1 text-xs font-bold ${tone(order.paymentStatus)}`}>
                        {order.paymentStatus || "Pending"}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <span className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-bold ${tone(order.orderStatus)}`}>
                        {order.orderStatus || "Placed"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <div className="text-sm text-slate-500">
        Need career/contact/dealership submissions too? Go to <Link className="font-semibold text-[#0f766e]" href="/admin">Dashboard</Link> and open any section.
      </div>
    </div>
  );
}

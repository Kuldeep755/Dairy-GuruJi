import { backendFetch } from "@/lib/api";

async function parseResponse(response, fallbackMessage) {
  const payload = await response.json().catch(() => ({}));

  if (!response.ok || payload?.ok === false) {
    throw new Error(payload?.error || payload?.message || fallbackMessage);
  }

  return payload;
}

export async function fetchAddresses(userId) {
  const response = await backendFetch(`/api/orders/addresses?userId=${encodeURIComponent(userId)}`, {
    method: "GET",
    cache: "no-store",
  });

  const payload = await parseResponse(response, "Failed to fetch addresses.");
  return payload.addresses || [];
}

export async function createAddress(userId, address) {
  const response = await backendFetch("/api/orders/addresses", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ userId, address }),
  });

  const payload = await parseResponse(response, "Failed to save address.");
  return payload.address;
}

export async function placeCodOrder({ userId, items, address }) {
  const response = await backendFetch("/api/orders/place-cod", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ userId, items, address }),
  });

  const payload = await parseResponse(response, "Failed to place COD order.");
  return payload.order;
}

export async function createOnlineSession({ userId, items, address }) {
  const response = await backendFetch("/api/orders/create-online-session", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ userId, items, address }),
  });

  const payload = await parseResponse(response, "Failed to start online payment.");
  return payload.paymentSession;
}

export async function verifyOnlinePayment({
  orderDbId,
  razorpayOrderId,
  razorpayPaymentId,
  razorpaySignature,
}) {
  const response = await backendFetch("/api/orders/verify-online", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      orderDbId,
      razorpayOrderId,
      razorpayPaymentId,
      razorpaySignature,
    }),
  });

  const payload = await parseResponse(response, "Failed to verify payment.");
  return payload.order;
}

const defaultApiBaseUrl = "http://localhost:8080";

export function getBackendApiBaseUrl() {
  const rawBaseUrl =
    process.env.BACKEND_API_BASE_URL ||
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    (process.env.NODE_ENV === "development" ? defaultApiBaseUrl : "");

  if (!rawBaseUrl && typeof window === "undefined") {
    console.warn(
      "Missing backend API base URL on the server. Set BACKEND_API_BASE_URL.",
    );
  }

  return rawBaseUrl ? rawBaseUrl.replace(/\/+$/, "") : "";
}

export function backendApiUrl(path) {
  if (!path.startsWith("/")) {
    throw new Error("API path must start with '/'.");
  }

  return `${getBackendApiBaseUrl()}${path}`;
}

export async function backendFetch(path, options = {}) {
  const { headers, ...restOptions } = options;

  return fetch(backendApiUrl(path), {
    credentials: "include",
    ...restOptions,
    headers: {
      ...(headers || {}),
    },
  });
}

const defaultApiBaseUrl = "http://localhost:4000";

export function getBackendApiBaseUrl() {
  const rawBaseUrl =
    process.env.BACKEND_API_BASE_URL ||
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    (process.env.NODE_ENV === "development" ? defaultApiBaseUrl : "");

  if (!rawBaseUrl) {
    throw new Error(
      "Missing backend API base URL. Set BACKEND_API_BASE_URL (server) or NEXT_PUBLIC_API_BASE_URL (client).",
    );
  }

  return rawBaseUrl.replace(/\/+$/, "");
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

import { NextResponse } from "next/server";
import { AUTH_COOKIE_NAME } from "@/lib/auth";
import { backendApiUrl } from "@/lib/api";

export async function GET(request) {
  const cookieHeader = request.headers.get("cookie") || "";

  try {
    await fetch(backendApiUrl("/api/auth/logout"), {
      method: "POST",
      headers: {
        cookie: cookieHeader,
      },
      cache: "no-store",
    });
  } catch {
    // Best-effort backend logout; local cookie clear below is fallback.
  }

  const url = new URL("/login", request.url);
  const response = NextResponse.redirect(url);
  response.cookies.set(AUTH_COOKIE_NAME, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  });
  return response;
}

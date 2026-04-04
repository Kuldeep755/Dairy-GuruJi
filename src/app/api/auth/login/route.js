import { NextResponse } from "next/server";
import {
  AUTH_COOKIE_NAME,
  createSessionToken,
  getAuthCookieOptions,
  isValidAdminCredentials,
} from "@/lib/auth";

export async function POST(request) {
  try {
    const body = await request.json();
    const username = String(body?.username || "").trim();
    const password = String(body?.password || "");

    if (!isValidAdminCredentials(username, password)) {
      return NextResponse.json(
        { ok: false, message: "Invalid username or password." },
        { status: 401 },
      );
    }

    const token = createSessionToken(username);
    const response = NextResponse.json({ ok: true });
    response.cookies.set(AUTH_COOKIE_NAME, token, getAuthCookieOptions());
    return response;
  } catch {
    return NextResponse.json(
      { ok: false, message: "Unable to login. Please try again." },
      { status: 400 },
    );
  }
}

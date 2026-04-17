import { NextResponse } from "next/server";
import { backendApiUrl } from "@/lib/api";

export async function GET(request) {
  try {
    const cookieHeader = request.headers.get("cookie") || "";
    const { search } = new URL(request.url);

    const response = await fetch(backendApiUrl(`/api/forms/admin/dealer${search}`), {
      headers: {
        cookie: cookieHeader,
      },
      cache: "no-store",
    });

    const data = await response.json().catch(() => ({}));

    return NextResponse.json(data, {
      status: response.status,
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error: error?.message || "Unable to load dealer applications.",
      },
      { status: 500 },
    );
  }
}

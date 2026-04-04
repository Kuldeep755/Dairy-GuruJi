import { createHmac, timingSafeEqual } from "node:crypto";

export const AUTH_COOKIE_NAME = "admin_session";
const SESSION_TTL_SECONDS = 60 * 60 * 8;

function getAuthSecret() {
  return process.env.ADMIN_AUTH_SECRET || "dev-only-secret-change-in-production";
}

function sign(value) {
  return createHmac("sha256", getAuthSecret()).update(value).digest("base64url");
}

export function createSessionToken(username) {
  const payload = {
    username,
    exp: Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS,
  };

  const payloadSegment = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const signatureSegment = sign(payloadSegment);
  return `${payloadSegment}.${signatureSegment}`;
}

export function verifySessionToken(token) {
  if (!token || typeof token !== "string") {
    return null;
  }

  const [payloadSegment, signatureSegment] = token.split(".");

  if (!payloadSegment || !signatureSegment) {
    return null;
  }

  const expectedSignature = sign(payloadSegment);
  const providedSignatureBuffer = Buffer.from(signatureSegment);
  const expectedSignatureBuffer = Buffer.from(expectedSignature);

  if (
    providedSignatureBuffer.length !== expectedSignatureBuffer.length ||
    !timingSafeEqual(providedSignatureBuffer, expectedSignatureBuffer)
  ) {
    return null;
  }

  try {
    const payload = JSON.parse(
      Buffer.from(payloadSegment, "base64url").toString("utf-8"),
    );

    if (!payload?.username || !payload?.exp) {
      return null;
    }

    if (payload.exp <= Math.floor(Date.now() / 1000)) {
      return null;
    }

    return payload;
  } catch {
    return null;
  }
}

export function isValidAdminCredentials(username, password) {
  const allowedUsername = process.env.ADMIN_USERNAME || "admin";
  const allowedPassword = process.env.ADMIN_PASSWORD || "admin123";

  return username === allowedUsername && password === allowedPassword;
}

export function getAuthCookieOptions() {
  return {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_TTL_SECONDS,
  };
}

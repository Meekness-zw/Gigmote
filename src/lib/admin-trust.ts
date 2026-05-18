import { createHmac, timingSafeEqual as cryptoTimingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

export const TRUST_COOKIE_NAME = "gm-admin-trust";
const TTL_DAYS = 365;
const TTL_MS = TTL_DAYS * 24 * 60 * 60 * 1000;

/**
 * Signed long-lived cookie marking this device as having previously verified
 * a magic-link login for a specific admin email. The signing key is AUTH_SECRET,
 * so the cookie cannot be forged.
 *
 * Format: `<email>|<expiresMs>|<hmacHex>`
 */

function sign(payload: string): string {
  const secret = process.env.AUTH_SECRET || "";
  return createHmac("sha256", secret).update(payload).digest("hex");
}

export function buildTrustToken(email: string): string {
  const expires = Date.now() + TTL_MS;
  const payload = `${email.toLowerCase()}|${expires}`;
  return `${payload}|${sign(payload)}`;
}

export function verifyTrustToken(token: string, email: string): boolean {
  const parts = token.split("|");
  if (parts.length !== 3) return false;
  const [storedEmail, expiresStr, sig] = parts;
  if (storedEmail.toLowerCase() !== email.toLowerCase()) return false;
  const expires = Number(expiresStr);
  if (!Number.isFinite(expires) || Date.now() > expires) return false;
  const expected = sign(`${storedEmail}|${expiresStr}`);
  const a = Buffer.from(sig, "hex");
  const b = Buffer.from(expected, "hex");
  if (a.length !== b.length) return false;
  try {
    return cryptoTimingSafeEqual(a, b);
  } catch {
    return false;
  }
}

export async function readTrustedEmail(): Promise<string | null> {
  const store = await cookies();
  const value = store.get(TRUST_COOKIE_NAME)?.value;
  if (!value) return null;
  const parts = value.split("|");
  if (parts.length !== 3) return null;
  const email = parts[0];
  return verifyTrustToken(value, email) ? email : null;
}

export async function isDeviceTrustedFor(email: string): Promise<boolean> {
  const store = await cookies();
  const value = store.get(TRUST_COOKIE_NAME)?.value;
  if (!value) return false;
  return verifyTrustToken(value, email);
}

export async function setTrustCookie(email: string): Promise<void> {
  const store = await cookies();
  store.set(TRUST_COOKIE_NAME, buildTrustToken(email), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: TTL_DAYS * 24 * 60 * 60,
  });
}

export async function clearTrustCookie(): Promise<void> {
  const store = await cookies();
  store.delete(TRUST_COOKIE_NAME);
}

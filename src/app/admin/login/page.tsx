import { AuthError } from "next-auth";
import { signIn, auth, isAdminEmail } from "@/lib/auth";
import {
  isAdminAllowlistConfigured,
  isAuthConfigured,
  isSmtpConfigured,
} from "@/lib/auth-env";
import { isDeviceTrustedFor } from "@/lib/admin-trust";
import { isNavigationRedirect } from "@/lib/navigation";
import { redirect } from "next/navigation";
import Link from "next/link";

function resolveSignInRedirect(resultUrl: string) {
  const base = process.env.AUTH_URL ?? "https://www.gigmote.com";
  const next = new URL(resultUrl, base);
  const errCode = next.searchParams.get("error");
  if (errCode) redirect(`/admin/login?error=${errCode}`);
  redirect(`${next.pathname}${next.search}`);
}

type SearchParams = Promise<{ callbackUrl?: string; error?: string }>;

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const callbackUrl = params.callbackUrl || "/admin";
  const error = params.error;

  const session = await auth();
  if (isAdminEmail(session?.user?.email)) redirect(callbackUrl);

  async function signInAction(formData: FormData) {
    "use server";
    const email = String(formData.get("email") ?? "")
      .trim()
      .toLowerCase();

    if (!isAuthConfigured()) {
      console.error("[admin/login] AUTH_SECRET is not configured");
      redirect("/admin/login?error=Configuration");
    }

    if (!isAdminAllowlistConfigured()) {
      console.error("[admin/login] ADMIN_EMAILS is empty");
      redirect("/admin/login?error=Configuration");
    }

    // Reject non-admin emails immediately — no magic link gets sent.
    if (!email || !isAdminEmail(email)) {
      redirect("/admin/login?error=AccessDenied");
    }

    try {
      // redirect: false — signIn() otherwise calls redirect(), which throws and
      // was being caught here as a false "Unknown" failure.
      let resultUrl: string;

      if (await isDeviceTrustedFor(email)) {
        resultUrl = await signIn("trusted-device", {
          email,
          redirectTo: callbackUrl,
          redirect: false,
        });
      } else {
        if (!isSmtpConfigured()) {
          console.error("[admin/login] SMTP is not fully configured");
          redirect("/admin/login?error=EmailSignin");
        }

        resultUrl = await signIn("nodemailer", {
          email,
          redirectTo: callbackUrl,
          redirect: false,
        });
      }

      resolveSignInRedirect(resultUrl);
    } catch (err) {
      if (isNavigationRedirect(err)) throw err;
      console.error("[admin/login] signIn failed", err);
      if (err instanceof AuthError) {
        redirect(`/admin/login?error=${err.type}`);
      }
      redirect("/admin/login?error=Unknown");
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-hugo-cream px-6 py-12">
      <div className="w-full max-w-md">
        <Link
          href="/"
          className="text-sm font-bold uppercase tracking-widest text-hugo-black/60 hover:text-hugo-black mb-8 inline-block"
        >
          ← Back to site
        </Link>

        <div className="bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border border-white p-7 md:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-hugo-gold mb-2">
            Gigmote Admin
          </p>
          <h1 className="text-2xl font-semibold text-hugo-black tracking-tight mb-1.5">
            Sign in
          </h1>
          <p className="text-sm text-hugo-black/60 mb-7 leading-relaxed">
            Enter your admin email. First time on a device we send a one-time
            link; after that you're signed in instantly.
          </p>

          {error && (
            <div className="mb-5 rounded-lg bg-red-50 border border-red-100 p-3 text-sm text-red-700">
              {error === "AccessDenied"
                ? "That email is not authorized for admin access."
                : error === "Configuration" || error === "MissingSecret"
                  ? "Admin sign-in is not configured on this deployment. Set AUTH_SECRET, ADMIN_EMAILS, and AUTH_URL (https://www.gigmote.com) in Vercel, then redeploy."
                  : error === "EmailSignin"
                    ? "Could not send the sign-in email. Check SMTP settings on the server."
                    : error === "CredentialsSignin"
                      ? "Trusted-device sign-in failed. Use the email link instead."
                    : error === "MissingCSRF"
                      ? "Session expired. Refresh the page and try again."
                      : `Sign-in failed (${error}). Please try again.`}
            </div>
          )}

          <form action={signInAction} className="space-y-4">
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-widest text-hugo-black/50 mb-1.5">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@gigmote.com"
                className="w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-transparent focus:bg-white focus:border-hugo-black focus:outline-none rounded-lg text-hugo-black"
              />
            </div>
            <button
              type="submit"
              className="w-full h-10 text-sm bg-hugo-black text-white font-semibold rounded-lg hover:text-hugo-gold transition-colors"
            >
              Continue
            </button>
          </form>
        </div>

        <p className="text-xs text-hugo-black/40 text-center mt-6">
          Only allowlisted emails can sign in. Trusted devices skip the email step.
        </p>
      </div>
    </main>
  );
}

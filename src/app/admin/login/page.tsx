import { signIn, auth, isAdminEmail } from "@/lib/auth";
import { isDeviceTrustedFor } from "@/lib/admin-trust";
import { redirect } from "next/navigation";
import Link from "next/link";

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

    // Reject non-admin emails immediately — no magic link gets sent.
    if (!email || !isAdminEmail(email)) {
      redirect("/admin/login?error=AccessDenied");
    }

    // If this device has previously verified this email, skip the magic link
    // and sign them in directly.
    if (await isDeviceTrustedFor(email)) {
      await signIn("trusted-device", {
        email,
        redirectTo: callbackUrl,
      });
      return;
    }

    // First time on this device — send a magic link to verify ownership.
    await signIn("nodemailer", {
      email,
      redirectTo: callbackUrl,
    });
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
                : "Sign-in failed. Please try again."}
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

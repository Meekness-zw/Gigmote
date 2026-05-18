import Link from "next/link";

export default function CheckEmailPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-hugo-cream px-6 py-12">
      <div className="w-full max-w-md text-center">
        <div className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border border-white p-8 md:p-10">
          <div className="w-16 h-16 mx-auto rounded-full bg-hugo-gold/20 flex items-center justify-center mb-6">
            <span className="text-3xl">✉️</span>
          </div>
          <h1 className="text-2xl font-bold text-hugo-black tracking-tight mb-3">
            Check your inbox
          </h1>
          <p className="text-hugo-black/60 font-light leading-relaxed mb-6">
            We sent you a sign-in link. Click the link in the email to access
            the admin panel. The link expires in 24 hours.
          </p>
          <Link
            href="/admin/login"
            className="text-sm font-bold text-hugo-black hover:text-hugo-gold underline underline-offset-4"
          >
            Use a different email
          </Link>
        </div>
      </div>
    </main>
  );
}

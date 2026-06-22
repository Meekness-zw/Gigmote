import { auth, signOut } from "@/lib/auth";
import { isAdminEmail } from "@/lib/auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function PanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!isAdminEmail(session?.user?.email)) redirect("/admin/login");

  async function logout() {
    "use server";
    await signOut({ redirectTo: "/admin/login" });
  }

  return (
    <div className="min-h-screen flex flex-col bg-hugo-cream">
      <header className="bg-white border-b border-hugo-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
          <div className="flex items-center gap-7">
            <Link href="/admin" className="text-sm font-semibold text-hugo-black tracking-tight">
              Gigmote <span className="text-hugo-gold">Admin</span>
            </Link>
            <nav className="hidden md:flex gap-5 text-sm">
              <Link
                href="/admin"
                className="text-hugo-black/70 hover:text-hugo-black"
              >
                Jobs
              </Link>
              <Link
                href="/admin/applications"
                className="text-hugo-black/70 hover:text-hugo-black"
              >
                Applications
              </Link>
              {/* <Link
                href="/admin/courses"
                className="text-hugo-black/70 hover:text-hugo-black"
              >
                Courses
              </Link> */}
              <Link
                href="/jobs"
                target="_blank"
                className="text-hugo-black/70 hover:text-hugo-black"
              >
                View site ↗
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline text-xs text-hugo-black/60">
              {session?.user?.email}
            </span>
            <form action={logout}>
              <button
                type="submit"
                className="text-xs font-medium text-hugo-black hover:text-hugo-gold"
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
}

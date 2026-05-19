import type { NextAuthConfig } from "next-auth";

const adminEmails = (process.env.ADMIN_EMAILS ?? "")
  .split(",")
  .map((e) => e.trim().toLowerCase())
  .filter(Boolean);

export const isAdminEmail = (email?: string | null) =>
  !!email && adminEmails.includes(email.toLowerCase());

/**
 * Edge-safe Auth.js config — no Node modules, no Prisma, no Nodemailer.
 *
 * Used by middleware (edge runtime) and extended by `auth.ts` with the
 * Prisma adapter + Nodemailer email provider (Node runtime only).
 */
export const authConfig = {
  secret: process.env.AUTH_SECRET,
  trustHost: true,
  pages: {
    signIn: "/admin/login",
    verifyRequest: "/admin/login/check-email",
    error: "/admin/login",
  },
  session: { strategy: "jwt" },
  providers: [],
  callbacks: {
    async signIn({ user }) {
      return isAdminEmail(user.email);
    },
    async jwt({ token, user }) {
      if (user?.email) token.email = user.email;
      return token;
    },
    async session({ session, token }) {
      if (token?.email && session.user) {
        session.user.email = token.email as string;
      }
      return session;
    },
    authorized({ auth, request: { nextUrl } }) {
      const { pathname } = nextUrl;
      if (!pathname.startsWith("/admin")) return true;
      if (pathname === "/admin/login" || pathname.startsWith("/admin/login/")) {
        return true;
      }
      return isAdminEmail(auth?.user?.email);
    },
  },
} satisfies NextAuthConfig;

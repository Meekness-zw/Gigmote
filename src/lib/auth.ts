import NextAuth from "next-auth";
import Nodemailer from "next-auth/providers/nodemailer";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./prisma";
import { authConfig, isAdminEmail } from "./auth.config";
import {
  clearTrustCookie,
  isDeviceTrustedFor,
  setTrustCookie,
} from "./admin-trust";

export { isAdminEmail } from "./auth.config";

const smtpPort = Number(process.env.SMTP_PORT ?? 587);

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  trustHost: true,
  adapter: PrismaAdapter(prisma),
  providers: [
    Nodemailer({
      server: {
        host: process.env.SMTP_HOST,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      },
      from: process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER,
    }),
    Credentials({
      id: "trusted-device",
      name: "Trusted Device",
      credentials: {
        email: { label: "Email", type: "email" },
      },
      async authorize(credentials) {
        const email = String(credentials?.email ?? "")
          .trim()
          .toLowerCase();
        if (!email || !isAdminEmail(email)) return null;
        if (!(await isDeviceTrustedFor(email))) return null;
        return {
          id: email,
          email,
          name: email.split("@")[0],
        };
      },
    }),
  ],
  events: {
    async signIn({ user, account }) {
      // After ANY successful sign-in (magic link OR trusted-device), refresh
      // the trust cookie so the device stays trusted for another full year.
      if (account?.provider === "nodemailer" || account?.provider === "trusted-device") {
        if (user.email && isAdminEmail(user.email)) {
          await setTrustCookie(user.email);
        }
      }
    },
    async signOut() {
      await clearTrustCookie();
    },
  },
});

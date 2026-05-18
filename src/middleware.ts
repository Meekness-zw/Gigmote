import NextAuth from "next-auth";
import { authConfig } from "@/lib/auth.config";

// Edge-safe NextAuth instance — uses only the shared config, no Prisma/Nodemailer.
// The `authorized` callback in authConfig handles the /admin gate; unauthorized
// requests are redirected to the configured signIn page automatically.
export default NextAuth(authConfig).auth;

export const config = {
  matcher: ["/admin/:path*"],
};

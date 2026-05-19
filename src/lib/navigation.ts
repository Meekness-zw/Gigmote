/** Re-throw Next.js App Router redirects (used by redirect() and signIn()). */
export function isNavigationRedirect(error: unknown): boolean {
  return (
    typeof error === "object" &&
    error !== null &&
    "digest" in error &&
    String((error as { digest: unknown }).digest).startsWith("NEXT_REDIRECT")
  );
}

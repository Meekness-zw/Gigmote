export function isAuthConfigured() {
  return Boolean(process.env.AUTH_SECRET?.trim());
}

export function isSmtpConfigured() {
  return Boolean(
    process.env.SMTP_HOST?.trim() &&
      process.env.SMTP_USER?.trim() &&
      process.env.SMTP_PASS?.trim() &&
      (process.env.SMTP_FROM_EMAIL?.trim() || process.env.SMTP_USER?.trim())
  );
}

export function isAdminAllowlistConfigured() {
  return (process.env.ADMIN_EMAILS ?? "")
    .split(",")
    .map((e) => e.trim())
    .some(Boolean);
}

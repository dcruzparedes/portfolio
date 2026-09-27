/**
 * Resolves a base URL for absolute canonical and hreflang links.
 * On Vercel it picks up the production domain automatically; locally it
 * falls back to localhost. Set NEXT_PUBLIC_SITE_URL to override.
 */
export function metadataBaseUrl(): URL {
  const candidates = [
    process.env.NEXT_PUBLIC_SITE_URL,
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : undefined,
    process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined,
  ];

  const found = candidates.find(Boolean);
  return new URL(found ?? "http://localhost:3000");
}

import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Route renaming, Aug 2026: /services -> /corporate-services,
      // /services2 -> /accountancy-tax, camelCase sub-routes -> kebab-case,
      // and the "/oversea-" typo fixed to "/overseas-". Permanent redirects
      // preserve any existing bookmarks/search-engine links to the old URLs.
      { source: "/services", destination: "/corporate-services", permanent: true },
      { source: "/services/local-company", destination: "/corporate-services/local-company", permanent: true },
      { source: "/services/office-service", destination: "/corporate-services/office-service", permanent: true },
      { source: "/services/compSecretary", destination: "/corporate-services/company-secretary", permanent: true },
      { source: "/services/bviCompany", destination: "/corporate-services/bvi-company", permanent: true },
      { source: "/services2", destination: "/accountancy-tax", permanent: true },
      { source: "/services2/accounting", destination: "/accountancy-tax/accounting", permanent: true },
      { source: "/services2/tax", destination: "/accountancy-tax/tax", permanent: true },
      { source: "/services2/businessAdv", destination: "/accountancy-tax/business-advisory", permanent: true },
      { source: "/oversea-immigration", destination: "/overseas-immigration", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

export default withNextIntl(nextConfig);

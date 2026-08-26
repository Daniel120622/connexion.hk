// Verbatim cross-navigation labels for the 4 Corporate Services sub-pages.
// Each title is copied unchanged from that page's own `content.<lang>.heroTitle`
// (or `BenfitsTitle` for BVI) so no new wording is introduced anywhere in the UI.
//
// groupLabel is copied verbatim from messages/{en,zh,cn}.json Header.services,
// the same label already shown for this section in the site header.
export type CorporateServiceSlug =
  | "local-company"
  | "company-secretary"
  | "office-service";

export const corporateServicesGroupLabel = {
  en: "Corporate Services",
  zh: "公司服務",
  cn: "公司服务",
};

export const corporateServicesOrder: CorporateServiceSlug[] = [
  "local-company",
  "company-secretary",
  "office-service",
];

export const corporateServicesNav: Record<
  CorporateServiceSlug,
  { href: string; title: { en: string; zh: string; cn: string } }
> = {
  "local-company": {
    href: "/corporate-services/local-company",
    title: {
      en: "Hong Kong Limited Company Formation",
      zh: "註冊香港有限公司",
      cn: "注册香港有限公司",
    },
  },
  "company-secretary": {
    href: "/corporate-services/company-secretary",
    title: {
      en: "Company Secretary Services",
      zh: "公司秘書服務",
      cn: "公司秘书服务",
    },
  },
  "office-service": {
    href: "/corporate-services/office-service",
    title: {
      en: "Register Office Service",
      zh: "辦公室服務",
      cn: "办公室服务",
    },
  },
};

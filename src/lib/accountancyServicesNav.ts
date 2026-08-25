// Verbatim cross-navigation labels for the 3 Accountancy & Tax sub-pages.
// Each title is copied unchanged from that page's own `content.<lang>.heroTitle`
// so no new wording is introduced anywhere in the UI.
//
// groupLabel is copied verbatim from messages/{en,zh,cn}.json Header.services2,
// the same label already shown for this section in the site header.
export type AccountancyServiceSlug = "accounting" | "business-advisory" | "tax";

export const accountancyServicesGroupLabel = {
  en: "Accountancy & Tax",
  zh: "會計及稅務",
  cn: "会计及税务",
};

export const accountancyServicesOrder: AccountancyServiceSlug[] = [
  "accounting",
  "business-advisory",
  "tax",
];

export const accountancyServicesNav: Record<
  AccountancyServiceSlug,
  { href: string; title: { en: string; zh: string; cn: string } }
> = {
  accounting: {
    href: "/accountancy-tax/accounting",
    title: {
      en: "Accounting Service",
      zh: "會計服務",
      cn: "会计服务",
    },
  },
  "business-advisory": {
    href: "/accountancy-tax/business-advisory",
    title: {
      en: "Business Advisory",
      zh: "商業咨詢服務",
      cn: "商业咨询服务",
    },
  },
  tax: {
    href: "/accountancy-tax/tax",
    title: {
      en: "Tax Services",
      zh: "稅務服務",
      cn: "税务服务",
    },
  },
};

import { cookies, headers } from "next/headers";
import { getRequestConfig } from "next-intl/server";

type Locale = "en" | "zh" | "cn";

function normalizeLocale(value: string | undefined | null): Locale {
  if (!value) return "en";

  const lower = value.toLowerCase();
  if (lower.startsWith("zh-hk") || lower.startsWith("zh-tw") || lower.startsWith("zh-mo")) {
    return "zh";
  }
  if (lower.startsWith("zh-cn") || lower.startsWith("zh-sg")) {
    return "cn";
  }
  if (lower.startsWith("zh")) {
    return "zh";
  }
  if (lower.startsWith("cn")) {
    return "cn";
  }
  return "en";
}

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const headerStore = await headers();
  const cookieLocale = cookieStore.get("connexions-locale")?.value;
  const acceptLanguage = headerStore.get("accept-language");
  const locale = normalizeLocale(cookieLocale ?? acceptLanguage);

  const messages = (await import(`../messages/${locale}.json`)).default;

  return {
    locale,
    messages
  };
});

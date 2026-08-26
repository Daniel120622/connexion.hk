import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import Contact from '@/components/Contact';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Common");

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    keywords:
      "Hong Kong immigration, visa application, quality migrant, investment visa, business setup",
  };
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Contact />
    </>
  );
}

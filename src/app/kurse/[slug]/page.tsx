import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { KURSE, findeKurs } from "@/lib/kurse-data";
import { NavV2 } from "@/components/sections/startseite-v2/nav-v2";
import { KursHeroV2 } from "@/components/sections/kurs-detail-v2/kurs-hero-v2";
import { KursZielgruppeV2 } from "@/components/sections/kurs-detail-v2/kurs-zielgruppe-v2";
import { KursModuleV2 } from "@/components/sections/kurs-detail-v2/kurs-module-v2";
import { VergleichV2 } from "@/components/sections/startseite-v2/vergleich-v2";
import { KursFaqV2 } from "@/components/sections/kurs-detail-v2/kurs-faq-v2";
import { CtaV2 } from "@/components/sections/startseite-v2/cta-v2";
import { FooterV2 } from "@/components/sections/startseite-v2/footer-v2";

export async function generateStaticParams() {
  return KURSE.map((k) => ({ slug: k.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const kurs = findeKurs(slug);
  if (!kurs) return {};
  return {
    title: kurs.metaTitle,
    description: kurs.metaDescription,
    robots: { index: false, follow: false },
  };
}

/**
 * Lehrgangs-Detailseiten im Design System v1.0. Noch nicht indexiert,
 * die Website ist insgesamt noch im Wartungsmodus (siehe generateMetadata
 * und public/staticwebapp.config.json).
 */
export default async function KursDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const kurs = findeKurs(slug);
  if (!kurs) notFound();

  return (
    <div className="hs-v2 bg-white">
      <NavV2 />
      <KursHeroV2 kurs={kurs} />
      <KursZielgruppeV2 kurs={kurs} />
      <KursModuleV2 kurs={kurs} />
      <VergleichV2 />
      <KursFaqV2 faq={kurs.faq} />
      <CtaV2 />
      <FooterV2 />
    </div>
  );
}

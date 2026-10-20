import type { Metadata } from "next";
import { NavV2 } from "@/components/sections/startseite-v2/nav-v2";
import { BeratungHeroV2 } from "@/components/sections/beratung-v2/beratung-hero-v2";
import { BeratungAblaufV2 } from "@/components/sections/beratung-v2/beratung-ablauf-v2";
import { BeratungFormularSektionV2 } from "@/components/sections/beratung-v2/beratung-formular-sektion-v2";
import { KursFaqV2 } from "@/components/sections/kurs-detail-v2/kurs-faq-v2";
import { BERATUNG_FAQ } from "@/lib/beratung-data";
import { FooterV2 } from "@/components/sections/startseite-v2/footer-v2";

export const metadata: Metadata = {
  title: "Kostenlose Beratung zur Weiterbildung | HalloSkills",
  description:
    "Kostenlose Beratung bei HalloSkills: Finde den Lehrgang, der zu dir passt, kläre deine Fragen und erfahre, ob ein Bildungsgutschein für dich infrage kommt.",
};

/**
 * Beratungsseite im Design System v1.0 — parallel zu /beratung-buchen
 * (altes Design). Das Formular ist ein HubSpot-Formular (siehe
 * BeratungHubspotFormularV2).
 */
export default function BeratungBuchenPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Kostenlose Lehrgangsberatung",
    provider: {
      "@type": "EducationalOrganization",
      name: "HalloSkills",
      url: "https://halloskills.de",
    },
    description:
      "Kostenlose und unverbindliche Beratung zu unseren Online-Lehrgängen und zur Förderung über den Bildungsgutschein.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
  };

  return (
    <div className="hs-v2 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NavV2 />
      <BeratungHeroV2 />
      <BeratungAblaufV2 />
      <BeratungFormularSektionV2 />
      <KursFaqV2 faq={BERATUNG_FAQ} />

      <FooterV2 />
    </div>
  );
}

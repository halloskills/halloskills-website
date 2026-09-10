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
 * (altes Design). Formspree-Endpoint und Feldnamen des Formulars sind
 * unverändert, nur Optik und die Lehrgangs-Auswahl sind neu.
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

      <section className="px-6 pb-20 md:px-10">
        <div className="mx-auto max-w-[600px] rounded-hs-card border border-hs-line bg-hs-soft p-8 text-center">
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-hs-pink">
            Andere Wege zu uns
          </p>
          <h2 className="mt-3 text-[1.1rem] font-[600] text-hs-navy">
            Schreib uns jederzeit
          </h2>
          <p className="mt-3 text-[0.9rem] leading-[1.65] text-hs-body">
            Du hast eine Frage zu unseren Lehrgängen oder bist dir noch
            unsicher? Schreib uns einfach — wir melden uns bei dir.{" "}
            <a href="mailto:admin@halloskills.de" className="text-hs-blue underline">
              admin@halloskills.de
            </a>
          </p>
          <p className="mt-4 text-[0.8rem] text-hs-muted">
            100% online — deutschlandweit für dich da.
          </p>
        </div>
      </section>

      <FooterV2 />
    </div>
  );
}

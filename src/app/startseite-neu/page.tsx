import type { Metadata } from "next";
import { NavV2 } from "@/components/sections/startseite-v2/nav-v2";
import { HeroV2 } from "@/components/sections/startseite-v2/hero-v2";
import { FeaturesV2 } from "@/components/sections/startseite-v2/features-v2";
import { KurseV2 } from "@/components/sections/startseite-v2/kurse-v2";
import { CtaV2 } from "@/components/sections/startseite-v2/cta-v2";
import { SchritteV2 } from "@/components/sections/startseite-v2/schritte-v2";
import { JobsV2 } from "@/components/sections/startseite-v2/jobs-v2";
import { FooterV2 } from "@/components/sections/startseite-v2/footer-v2";

export const metadata: Metadata = {
  title: "Startseite (Rebrand-Vorschau) | HalloSkills",
  robots: { index: false, follow: false },
};

/**
 * Vorschau der Startseite im Design System v1.0 (Rebrand 2026).
 * Die bestehende Startseite unter `/` bleibt unverändert, bis diese
 * Variante freigegeben ist — dann wird der Inhalt nach `src/app/page.tsx`
 * verschoben und diese Route entfernt.
 */
export default function StartseiteNeu() {
  return (
    <div className="hs-v2 bg-white">
      <NavV2 />
      <HeroV2 />
      <FeaturesV2 />
      <KurseV2 />
      <CtaV2 />
      <SchritteV2 />
      <JobsV2 />
      <FooterV2 />
    </div>
  );
}

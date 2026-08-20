import type { Metadata } from "next";
import { NavV2 } from "@/components/sections/startseite-v2/nav-v2";
import { HeroV2 } from "@/components/sections/startseite-v2/hero-v2";
import { FeaturesV2 } from "@/components/sections/startseite-v2/features-v2";
import { KurseV2 } from "@/components/sections/startseite-v2/kurse-v2";
import { VergleichV2 } from "@/components/sections/startseite-v2/vergleich-v2";
import { CtaV2 } from "@/components/sections/startseite-v2/cta-v2";
import { SchritteV2 } from "@/components/sections/startseite-v2/schritte-v2";
import { JobsV2 } from "@/components/sections/startseite-v2/jobs-v2";
import { FooterV2 } from "@/components/sections/startseite-v2/footer-v2";

export const metadata: Metadata = {
  title: "HalloSkills",
  description:
    "Online-Umschulungsinhalte in 6 statt 24 Monaten — praxisnah, flexibel und persönlich begleitet. Start im Herbst 2026.",
  // Weiterhin noindex — die Website ist gesamthaft noch nicht offiziell
  // live geschaltet (robots.txt steht sitewide auf Disallow: /). Sag
  // Bescheid, wenn die Startseite jetzt auch für Suchmaschinen sichtbar
  // werden soll, dann muss das zusammen mit robots.txt geändert werden.
  robots: { index: false, follow: false },
};

/** Startseite im Design System v1.0 (Rebrand 2026). */
export default function Startseite() {
  return (
    <div className="hs-v2 bg-white">
      <NavV2 />
      <HeroV2 />
      <VergleichV2 />
      <FeaturesV2 />
      <KurseV2 />
      <SchritteV2 />
      <CtaV2 />
      <JobsV2 />
      <FooterV2 />
    </div>
  );
}

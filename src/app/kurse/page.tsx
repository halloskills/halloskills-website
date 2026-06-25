import type { Metadata } from "next";
import { KurseHeader } from "@/components/sections/kurse/kurse-header";
import { KurseListe } from "@/components/sections/kurse/kurse-liste";
import { KurseVorteile } from "@/components/sections/kurse/kurse-vorteile";
import { KurseFaq } from "@/components/sections/kurse/kurse-faq";

export const metadata: Metadata = {
  title: "Online-Kurse mit Bildungsgutschein – Projektmanagement, Marketing, KI | HalloSkills",
  description:
    "AZAV-zertifizierte Online-Weiterbildungen – vollständig gefördert. Projektmanagement, Online Marketing und KI & Digitalisierung. Start jeden Montag.",
};

export default function KursePage() {
  return (
    <>
      <KurseHeader />
      <KurseListe />
      <KurseVorteile />
      <KurseFaq />
    </>
  );
}

import type { Metadata } from "next";
import { BgsHeader } from "@/components/sections/bildungsgutschein/bgs-header";
import { BgsErklaerung } from "@/components/sections/bildungsgutschein/bgs-erklaerung";
import { BgsSchritte } from "@/components/sections/bildungsgutschein/bgs-schritte";
import { BgsFaq } from "@/components/sections/bildungsgutschein/bgs-faq";

export const metadata: Metadata = {
  title: "Bildungsgutschein 2025 – So bekommst du deine kostenlose Weiterbildung | HalloSkills",
  description:
    "Alles über den Bildungsgutschein: Anspruch, Antrag, Ablauf. HalloSkills begleitet dich von der Beratung bis zur Genehmigung.",
};

export default function BildungsgutscheinPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Wer hat Anspruch auf einen Bildungsgutschein?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Du hast Anspruch, wenn du arbeitslos oder arbeitssuchend gemeldet bist, von Arbeitslosigkeit bedroht bist oder dich in Kurzarbeit befindest.",
        },
      },
      {
        "@type": "Question",
        name: "Was kostet eine Weiterbildung mit Bildungsgutschein?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Für dich: nichts. Die Agentur für Arbeit bzw. das Jobcenter übernimmt die gesamten Kurskosten.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BgsHeader />
      <BgsErklaerung />
      <BgsSchritte />
      <BgsFaq />
    </>
  );
}

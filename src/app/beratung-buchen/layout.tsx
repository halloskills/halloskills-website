import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kostenlose Beratung buchen | HalloSkills",
  description:
    "Jetzt kostenloses Erstgespräch buchen. Wir beraten dich zu geförderter Weiterbildung, Bildungsgutschein und dem passenden Kurs. Unverbindlich & persönlich.",
  openGraph: {
    title: "Kostenlose Beratung buchen | HalloSkills",
    description:
      "Kostenloses Erstgespräch zur geförderten Weiterbildung. Jetzt Termin anfragen.",
    images: [{ url: "/images/bilder/hero.png", width: 1200, height: 630 }],
  },
};

export default function BeratungBuchenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

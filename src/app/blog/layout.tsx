import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Magazin | HalloSkills – Ratgeber für Weiterbildung & Neustart",
  description:
    "Tipps rund um Bildungsgutschein, Karrierewechsel, Online-Lernen und geförderte Weiterbildung. Alle Artikel im HalloSkills-Magazin.",
  openGraph: {
    title: "HalloSkills Magazin – Ratgeber für Weiterbildung & Neustart",
    description:
      "Tipps zu Bildungsgutschein, Karrierewechsel und geförderter Weiterbildung.",
    images: [{ url: "/images/bilder/managerin-schwarzer-pullover-imac.png", width: 1200, height: 630 }],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bildungsgutschein-Check 2026: Deine Förderchancen prüfen | HalloSkills",
  description:
    "Finde in 3 Minuten heraus, wie gut deine Chancen auf einen Bildungsgutschein stehen – Status, Berufsziel und AZAV-Zertifizierung im Schnell-Check. Kostenlos, anonym, direkt im Browser.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

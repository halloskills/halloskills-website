import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bürgergeld-Rechner 2026 (Grundsicherungsgeld) | HalloSkills",
  description:
    "Berechne in 2 Minuten deinen möglichen Anspruch auf Bürgergeld / Grundsicherungsgeld für 2026 – kostenlos, anonym, direkt im Browser. Mit Regelsätzen, Freibeträgen und Wohnkosten.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

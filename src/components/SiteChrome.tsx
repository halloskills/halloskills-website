"use client";

import { usePathname } from "next/navigation";
import { Navbar2 } from "@/components/Navbar";
import { Footer4 } from "@/components/Footer";

/**
 * Seiten im Rebrand-Design bringen eigene Navigation und Footer mit.
 * Für alle übrigen Routen bleibt das bestehende Chrome unverändert aktiv.
 * Sobald der Rebrand komplett ist, kann diese Umschaltung entfallen.
 */
const EIGENES_CHROME = [
  "/",
  "/kurse",
  "/beratung-buchen",
  "/blog",
  "/impressum",
  "/datenschutz",
  "/ueber-uns",
];

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? "/";
  const bringtEigenesChrome = EIGENES_CHROME.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );

  if (bringtEigenesChrome) {
    return <main className="flex-1">{children}</main>;
  }

  return (
    <>
      <Navbar2 />
      <main className="flex-1">{children}</main>
      <Footer4 />
    </>
  );
}

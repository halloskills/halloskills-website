import Link from "next/link";
import React from "react";
import { Logo } from "./hs-ui";

const spalten = [
  {
    titel: "Weiterbildungen",
    links: [
      { label: "Alle Kurse", href: "/kurse" },
      { label: "Büromanagement", href: "/kurse" },
      { label: "Industrie", href: "/kurse" },
      { label: "Bankwesen", href: "/kurse" },
    ],
  },
  {
    titel: "Angebot",
    links: [
      { label: "Bildungsgutschein", href: "/bildungsgutschein" },
      { label: "Beratung buchen", href: "/beratung-buchen" },
      { label: "So funktioniert's", href: "/#so-funktioniert-es" },
    ],
  },
  {
    titel: "Ratgeber",
    links: [
      { label: "Alle Beiträge", href: "/blog" },
      { label: "Über uns", href: "/ueber-uns" },
      { label: "Jobs", href: "/jobs" },
    ],
  },
  {
    titel: "Rechtliches",
    links: [
      { label: "Impressum", href: "/impressum" },
      { label: "Datenschutz", href: "/datenschutz" },
      { label: "AGB", href: "/agb" },
    ],
  },
];

const rechtsleiste = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "AGB", href: "/agb" },
];

export function FooterV2() {
  return (
    // Oben abgerundet wie im Entwurf — overflow-hidden hält die Deko-Blobs
    // innerhalb der Rundung.
    <footer className="relative overflow-hidden rounded-t-[40px] bg-hs-blue px-6 pb-8 pt-16 text-white md:px-10">
      {/* Atmosphäre */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 -top-32 size-[420px] rounded-full bg-hs-violet/20 blur-3xl" />
        <div className="absolute -bottom-32 left-1/4 size-[320px] rounded-full bg-hs-pink/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1200px]">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_2.4fr] lg:gap-16">
          {/* Marke */}
          <div>
            <Link
              href="/startseite-neu"
              className="inline-flex items-center"
              aria-label="HalloSkills Startseite"
            >
              <Logo variante="hell" className="h-8" />
            </Link>
            <p className="mt-5 max-w-[300px] text-[0.875rem] leading-[1.7] text-white/70">
              Kaufmännische Online-Weiterbildungen — praxisnah, flexibel und
              persönlich begleitet. Start im Herbst 2026.
            </p>
          </div>

          {/* Linkspalten */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {spalten.map((spalte) => (
              <nav key={spalte.titel} aria-label={spalte.titel}>
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-white/50">
                  {spalte.titel}
                </p>
                <ul className="mt-4 flex flex-col gap-3">
                  {spalte.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[0.875rem] text-white/80 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        {/* Rechtsleiste */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.8rem] text-white/55">
            © {new Date().getFullYear()} HalloSkills GmbH
          </p>
          <nav aria-label="Rechtliche Hinweise" className="flex flex-wrap gap-x-6 gap-y-2">
            {rechtsleiste.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[0.8rem] text-white/55 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

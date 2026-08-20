"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Logo, btnPrimary } from "./hs-ui";

// Kurzlabels konsistent mit den Footer-Links und der Produktbenennung
// in kurse-data.ts ("Weiterbildung Bürokaufmann/-frau" etc.).
const weiterbildungen = [
  { label: "Büromanagement", href: "/kurse/bueromanagement" },
  { label: "Industriekaufmann", href: "/kurse/industriekaufmann" },
  { label: "Bankkaufmann", href: "/kurse/bankkaufmann" },
];

type NavGruppe = { label: string; href: string; kinder?: { label: string; href: string }[] };

const navGruppen: NavGruppe[] = [
  { label: "Lehrgänge", href: "/kurse", kinder: weiterbildungen },
  { label: "Ratgeber", href: "/blog" },
];

function Chevron({ offen }: { offen: boolean }) {
  return (
    <svg
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      aria-hidden="true"
      className={`transition-transform duration-200 ${offen ? "rotate-180" : ""}`}
    >
      <path
        d="M1 1l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Dropdown({ gruppe }: { gruppe: NavGruppe }) {
  const [offen, setOffen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function beiKlick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOffen(false);
    }
    function beiEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setOffen(false);
    }
    document.addEventListener("mousedown", beiKlick);
    document.addEventListener("keydown", beiEscape);
    return () => {
      document.removeEventListener("mousedown", beiKlick);
      document.removeEventListener("keydown", beiEscape);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOffen(true)}
      onMouseLeave={() => setOffen(false)}
    >
      <button
        type="button"
        aria-expanded={offen}
        onClick={() => setOffen((p) => !p)}
        className="flex items-center gap-1.5 rounded-full px-3 py-2 text-[0.875rem] font-[500] text-hs-ink transition-colors hover:text-hs-violet"
      >
        {gruppe.label}
        <Chevron offen={offen} />
      </button>

      <AnimatePresence>
        {offen && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.16 }}
            className="absolute left-0 top-full pt-3"
          >
            <div className="w-72 overflow-hidden rounded-hs-card border border-hs-line bg-white p-2 shadow-hs-float">
              {gruppe.kinder?.map((kind) => (
                <Link
                  key={kind.label}
                  href={kind.href}
                  onClick={() => setOffen(false)}
                  className="block rounded-2xl px-4 py-3 text-[0.85rem] font-[500] text-hs-ink transition-colors hover:bg-hs-soft hover:text-hs-violet"
                >
                  {kind.label}
                </Link>
              ))}
              <Link
                href={gruppe.href}
                onClick={() => setOffen(false)}
                className="mt-1 block border-t border-hs-line px-4 pb-1 pt-3 text-[0.8rem] font-[600] text-hs-pink transition-opacity hover:opacity-70"
              >
                Alle ansehen →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function NavV2() {
  const [mobilOffen, setMobilOffen] = useState(false);
  const [offeneGruppe, setOffeneGruppe] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-[999] px-4 pt-4 md:px-6 md:pt-6">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-6 rounded-full border border-white/70 bg-gradient-to-b from-white/80 to-white/62 px-5 py-3 shadow-hs-soft backdrop-blur-2xl backdrop-saturate-150 md:px-6">
        {/* Logo */}
        <Link
          href="/startseite-neu"
          className="flex shrink-0 items-center"
          aria-label="HalloSkills Startseite"
        >
          <Logo variante="dunkel" className="h-8" preload />
        </Link>

        {/* Desktop-Navigation */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Hauptnavigation">
          {navGruppen.map((gruppe) =>
            gruppe.kinder ? (
              <Dropdown key={gruppe.label} gruppe={gruppe} />
            ) : (
              <Link
                key={gruppe.href}
                href={gruppe.href}
                className="rounded-full px-3 py-2 text-[0.875rem] font-[500] text-hs-ink transition-colors hover:text-hs-violet"
              >
                {gruppe.label}
              </Link>
            ),
          )}
        </nav>

        {/* Desktop-CTAs */}
        <div className="hidden shrink-0 items-center gap-4 lg:flex">
          <Link
            href="/kurse"
            className="text-[0.875rem] font-[500] text-hs-body transition-colors hover:text-hs-navy"
          >
            Lehrgänge ansehen
          </Link>
          <Link href="/beratung-buchen" className={`${btnPrimary} px-6 py-3`}>
            Beratung sichern
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Mobile-Umschalter */}
        <button
          type="button"
          onClick={() => setMobilOffen((p) => !p)}
          aria-expanded={mobilOffen}
          aria-label={mobilOffen ? "Menü schliessen" : "Menü öffnen"}
          className="flex size-10 flex-col items-center justify-center gap-[5px] rounded-full lg:hidden"
        >
          <span
            className={`h-[1.5px] w-[20px] bg-hs-navy transition-transform duration-200 ${
              mobilOffen ? "translate-y-[6.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[1.5px] w-[20px] bg-hs-navy transition-opacity duration-200 ${
              mobilOffen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[1.5px] w-[20px] bg-hs-navy transition-transform duration-200 ${
              mobilOffen ? "-translate-y-[6.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile-Menü */}
      <AnimatePresence>
        {mobilOffen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="mx-auto mt-3 max-w-[1200px] overflow-hidden rounded-hs-card border border-hs-line bg-white p-3 shadow-hs-float lg:hidden"
          >
            {navGruppen.map((gruppe) => (
              <div key={gruppe.label}>
                {gruppe.kinder ? (
                  <>
                    <button
                      type="button"
                      aria-expanded={offeneGruppe === gruppe.label}
                      onClick={() =>
                        setOffeneGruppe((p) => (p === gruppe.label ? null : gruppe.label))
                      }
                      className="flex w-full items-center justify-between rounded-2xl px-4 py-3.5 text-[0.95rem] font-[600] text-hs-ink"
                    >
                      {gruppe.label}
                      <Chevron offen={offeneGruppe === gruppe.label} />
                    </button>
                    <AnimatePresence>
                      {offeneGruppe === gruppe.label && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.18 }}
                          className="overflow-hidden"
                        >
                          {gruppe.kinder.map((kind) => (
                            <Link
                              key={kind.label}
                              href={kind.href}
                              onClick={() => setMobilOffen(false)}
                              className="block rounded-2xl px-7 py-3 text-[0.875rem] font-[500] text-hs-body hover:text-hs-violet"
                            >
                              {kind.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={gruppe.href}
                    onClick={() => setMobilOffen(false)}
                    className="block rounded-2xl px-4 py-3.5 text-[0.95rem] font-[600] text-hs-ink"
                  >
                    {gruppe.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/beratung-buchen"
              onClick={() => setMobilOffen(false)}
              className={`${btnPrimary} mt-2 w-full`}
            >
              Beratung sichern
              <span aria-hidden="true">→</span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

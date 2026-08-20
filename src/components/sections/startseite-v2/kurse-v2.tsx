"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { PfeilKnopf, btnPrimary } from "./hs-ui";

/**
 * Die drei kaufmännischen Lehrgänge, Start Herbst 2026.
 * Anzeigewort ist "Lehrgang" — die URL /kurse bleibt bewusst unverändert.
 *
 * `href` zeigt auf die neuen Detailseiten unter /kurse/<slug>
 * (src/app/kurse/[slug]/page.tsx, Inhalte in kurse-data.ts).
 * Das bestehende /kurse/[slug] (kurse-data.ts, altes Design) ist davon
 * unberührt.
 */
const kurse = [
  {
    slug: "bueromanagement",
    // Namensgebung konsistent mit src/lib/kurse-data.ts, siehe Kommentar dort.
    titel: "Weiterbildung Bürokaufmann/-frau",
    meta: ["Umschulungsinhalte", "6 statt 24 Monate", "100% online"],
    bild: "/images/bilder/managerin-gruener-rollkragen-tablet-schreibt.png",
    href: "/kurse/bueromanagement",
    trending: true,
  },
  {
    slug: "industriekaufmann",
    titel: "Weiterbildung Industriekaufmann/-frau",
    meta: ["Umschulungsinhalte", "6 statt 24 Monate", "100% online"],
    bild: "/images/bilder/mann-kopfhoerer-blauer-pulli-analytics-dashboard.png",
    href: "/kurse/industriekaufmann",
    trending: false,
  },
  {
    slug: "bankkaufmann",
    titel: "Weiterbildung Bankkaufmann/-frau",
    meta: ["Umschulungsinhalte", "6 statt 24 Monate", "100% online"],
    bild: "/images/bilder/beraterin-orange-pullover-laptop.png",
    href: "/kurse/bankkaufmann",
    trending: false,
  },
];

function IkonLesezeichen() {
  return (
    <svg width="19" height="19" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M5 3.2h10v13.6l-5-3.4-5 3.4V3.2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function KursKarte({ kurs }: { kurs: (typeof kurse)[number] }) {
  return (
    <Link
      href={kurs.href}
      className="hs-snap-item group relative block w-[290px] shrink-0 overflow-hidden rounded-hs-image shadow-hs-soft transition-shadow duration-300 hover:shadow-hs-float sm:w-[330px]"
    >
      <Image
        src={kurs.bild}
        alt={kurs.titel}
        width={660}
        height={880}
        sizes="330px"
        className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
      />

      {/* Gleiche Optik wie die Badge im Hero: helles Rosa, Pink als Schrift.
          Dort ist es bg-hs-pink/10 — auf dem Foto braucht es den deckenden
          Gegenwert (#FFEAF2 = Pink bei 10% auf Weiss), sonst verschwindet es. */}
      {kurs.trending && (
        <span className="absolute left-4 top-4 rounded-full bg-[#ffeaf2] px-3.5 py-1.5 text-[0.7rem] font-[700] uppercase tracking-[0.1em] text-hs-pink">
          Trending
        </span>
      )}

      {/* Merken — weisses Icon ohne Kreis, mit Schatten für Lesbarkeit */}
      <span
        aria-hidden="true"
        className="absolute right-4 top-4 text-white transition-colors duration-200 group-hover:text-hs-pink"
        style={{ filter: "drop-shadow(0 1px 3px rgba(14,40,65,0.45))" }}
      >
        <IkonLesezeichen />
      </span>

      {/* Textfläche */}
      <div className="absolute inset-x-0 bottom-0 bg-white/95 p-5 backdrop-blur-sm">
        <h3 className="text-[1.0625rem] font-[600] leading-snug text-balance">
          {kurs.titel}
        </h3>
        <p className="mt-2 text-[0.8rem] text-hs-muted">{kurs.meta.join(" · ")}</p>

        <div className="mt-4 flex items-center justify-between border-t border-hs-line pt-4">
          <span className="text-[0.75rem] font-[600] text-hs-blue">Start Herbst 2026</span>
          <PfeilKnopf />
        </div>
      </div>
    </Link>
  );
}

export function KurseV2() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [kannZurueck, setKannZurueck] = useState(false);
  const [kannVor, setKannVor] = useState(false);

  const pruefePosition = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    setKannZurueck(el.scrollLeft > 8);
    setKannVor(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  }, []);

  useEffect(() => {
    pruefePosition();
    const el = scrollerRef.current;
    if (!el) return;
    el.addEventListener("scroll", pruefePosition, { passive: true });
    window.addEventListener("resize", pruefePosition);
    return () => {
      el.removeEventListener("scroll", pruefePosition);
      window.removeEventListener("resize", pruefePosition);
    };
  }, [pruefePosition]);

  function blaettern(richtung: 1 | -1) {
    const el = scrollerRef.current;
    if (!el) return;
    const karte = el.querySelector<HTMLElement>(".hs-snap-item");
    const schritt = karte ? karte.offsetWidth + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: schritt * richtung, behavior: "smooth" });
  }

  return (
    <section className="overflow-hidden px-6 py-20 md:px-10 lg:py-24">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-14">
        {/* ── Textspalte ── */}
        <div>
          <span className="inline-flex rounded-full bg-hs-lightblue px-4 py-1.5 text-[0.75rem] font-[600] text-hs-blue">
            Online-Umschulungsinhalte
          </span>

          <h2 className="mt-6 text-[clamp(1.75rem,4vw,2.6rem)] leading-[1.14]">
            Finde den Lehrgang, der dich wirklich{" "}
            <span className="text-hs-pink">weiterbringt.</span>
          </h2>

          <p className="mt-5 max-w-[380px] text-[1rem] leading-[1.65] text-hs-body">
            Die Inhalte von drei klassischen Umschulungen — bei uns in jeweils sechs
            statt 24 Monaten, komplett online und mit persönlicher Begleitung bis
            zum Abschluss.
          </p>

          <Link href="/kurse" className={`${btnPrimary} mt-8`}>
            Alle Lehrgänge entdecken
            <span aria-hidden="true">→</span>
          </Link>

          {/* Blätter-Steuerung */}
          <div className="mt-10 flex items-center gap-3">
            <button
              type="button"
              onClick={() => blaettern(-1)}
              disabled={!kannZurueck}
              aria-label="Vorheriger Lehrgang"
              className="flex size-11 items-center justify-center rounded-full border border-hs-line bg-white text-hs-navy shadow-hs-soft transition-all hover:border-hs-navy disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-hs-line"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M13 8H3m4-4L3 8l4 4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => blaettern(1)}
              disabled={!kannVor}
              aria-label="Nächster Lehrgang"
              className="flex size-11 items-center justify-center rounded-full border border-hs-line bg-white text-hs-navy shadow-hs-soft transition-all hover:border-hs-navy disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-hs-line"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* ── Karussell ── */}
        <div
          ref={scrollerRef}
          className="hs-snap-x -mx-6 flex gap-5 overflow-x-auto px-6 pb-2 lg:mx-0 lg:px-0"
          role="group"
          aria-label="Lehrgänge, horizontal scrollbar"
          tabIndex={0}
        >
          {kurse.map((kurs) => (
            <KursKarte key={kurs.slug} kurs={kurs} />
          ))}
        </div>
      </div>
    </section>
  );
}

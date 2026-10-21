import Link from "next/link";
import React from "react";
import { btnPrimary, btnWeiss } from "./hs-ui";

/**
 * Hinweis auf offene Stellen: links Text, rechts die aktuelle Stelle als
 * anklickbare Card mit den Buttons darunter.
 */
const PERSONIO_URL = "https://halloskills-recruiting.jobs.personio.com/job/2849369";

export function JobsV2() {
  return (
    <section className="px-6 pb-24 pt-24 md:px-10 lg:pb-28 lg:pt-28">
      <div
        className="relative mx-auto flex max-w-[1200px] flex-col gap-10 overflow-hidden rounded-[32px] px-7 py-11 md:px-12 md:py-14 lg:flex-row lg:items-center lg:justify-between lg:gap-16"
        style={{
          background: "linear-gradient(115deg, #e9f1fa 0%, #eef0fd 60%, #f6eef8 100%)",
        }}
      >
        {/* Dekorative Pill im Hintergrund */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 right-[6%] hidden size-[280px] rounded-full bg-hs-violet/15 blur-3xl md:block"
        />

        <div className="relative max-w-[520px]">
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-hs-pink">
            Jobs bei HalloSkills
          </p>

          <h2 className="mt-4 text-[clamp(1.6rem,3.8vw,2.4rem)] leading-[1.15]">
            Jobs, die dich weiterbringen.
          </h2>

          <p className="mt-4 text-[0.9375rem] leading-[1.65] text-hs-body">
            Wir bauen HalloSkills gerade auf und suchen Menschen, die etwas
            mitgestalten wollen.
          </p>
        </div>

        {/* Stelle */}
        <div className="relative flex w-full shrink-0 flex-col gap-5 lg:w-[400px]">
          <Link
            href="/jobs"
            className="group block rounded-[24px] border border-hs-line bg-white p-7 shadow-hs-soft transition hover:-translate-y-0.5 hover:border-hs-violet"
          >
            <span className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-hs-pink">
              Aktuell offen
            </span>
            <span className="mt-3 block text-[1.25rem] font-bold leading-snug text-hs-navy">
              Dozent (m/w/d) für kaufmännische Weiterbildungen
            </span>
            <span className="mt-2 block text-[0.875rem] text-hs-muted">
              Remote · Voll- oder Teilzeit
            </span>
            <span className="mt-5 inline-flex items-center gap-2 text-[0.9rem] font-bold text-hs-navy group-hover:text-hs-violet">
              Details ansehen
              <span aria-hidden="true">→</span>
            </span>
          </Link>

          <div className="flex flex-wrap gap-3">
            <Link href="/jobs" className={btnPrimary}>
              Zur Stellenanzeige
              <span aria-hidden="true">→</span>
            </Link>
            <Link href={PERSONIO_URL} target="_blank" rel="noopener" className={btnWeiss}>
              Direkt bewerben
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import React from "react";
import type { Kurs } from "@/lib/kurse-data";
import { btnPrimary, btnWeiss } from "@/components/sections/startseite-v2/hs-ui";

const fakten = [
  { titel: "6 Monate", text: "Statt 24 Monate" },
  { titel: "100% Online", text: "Lerne von zuhause" },
  { titel: "1:1 Betreuung", text: "Echte Expert:innen" },
];

function CheckKreis() {
  return (
    <span
      aria-hidden="true"
      className="inline-flex size-[18px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-hs-violet/40 text-hs-violet"
    >
      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
        <path
          d="M2.5 6.2l2.3 2.3L9.5 3.8"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function KursHeroV2({ kurs }: { kurs: Kurs }) {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-hs-soft via-white to-hs-soft" />
        <div className="absolute -left-32 top-10 size-[420px] rounded-full bg-hs-violet/10 blur-3xl" />
        <div className="absolute -right-24 top-0 size-[520px] rounded-full bg-hs-pink/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-[1200px] px-6 pb-16 pt-10 md:px-10 lg:pb-20 lg:pt-14">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 text-[0.8rem] text-hs-muted">
          <Link href="/" className="hover:text-hs-navy">
            Start
          </Link>
          <span className="mx-2">/</span>
          <span className="text-hs-navy">{kurs.titel}</span>
        </nav>

        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-10">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-hs-pink/10 px-4 py-1.5 text-[0.75rem] font-[600] text-hs-pink">
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M8 1.5l1.5 4.2 4.2 1.5-4.2 1.5L8 13l-1.5-4.3L2.3 7.2l4.2-1.5L8 1.5Z"
                  fill="currentColor"
                />
              </svg>
              {kurs.eyebrow}
            </span>

            <h1 className="mt-6 text-[clamp(2.2rem,5vw,3.25rem)] leading-[1.1] text-balance">
              {kurs.titel}
            </h1>

            <p className="mt-6 max-w-[460px] text-[1.0625rem] leading-[1.65] text-hs-body">
              {kurs.subline}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3.5">
              <Link href="/beratung-buchen" className={btnPrimary}>
                Beratung sichern
                <span aria-hidden="true">→</span>
              </Link>
              <Link href="#module" className={btnWeiss}>
                <span
                  aria-hidden="true"
                  className="inline-flex size-6 items-center justify-center rounded-full bg-hs-lightblue text-hs-blue"
                >
                  <svg width="9" height="9" viewBox="0 0 10 10" fill="currentColor">
                    <path d="M2 1l6 4-6 4V1Z" />
                  </svg>
                </span>
                Lehrplan ansehen
              </Link>
            </div>

            <ul className="mt-11 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3 sm:gap-x-5">
              {fakten.map((f) => (
                <li key={f.titel} className="leading-tight">
                  <span className="flex items-center gap-2">
                    <CheckKreis />
                    <span className="text-[0.9rem] font-bold text-hs-navy">{f.titel}</span>
                  </span>
                  <span className="mt-1.5 block text-[0.8rem] text-hs-muted">{f.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -right-6 -top-4 hidden h-[92%] w-[78%] opacity-70 md:block"
              style={{
                borderRadius: "999px 999px 260px 0",
                background:
                  "linear-gradient(150deg, rgba(120,97,255,0.30) 0%, rgba(255,45,122,0.22) 100%)",
              }}
            />
            <div
              className="relative overflow-hidden shadow-hs-float"
              style={{ borderRadius: "999px 999px 220px 48px" }}
            >
              <Image
                src={kurs.bild}
                alt={kurs.bildAlt}
                width={900}
                height={1000}
                preload
                sizes="(max-width: 992px) 90vw, 560px"
                className="aspect-[9/10] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

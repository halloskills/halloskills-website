import React from "react";
import type { Kurs } from "@/lib/kurse-data";
import { Eyebrow } from "@/components/sections/startseite-v2/hs-ui";

export function KursDanachV2({ kurs }: { kurs: Kurs }) {
  return (
    <section className="px-6 pb-10 md:px-10">
      <div className="mx-auto max-w-[1200px]">
        <div className="mx-auto max-w-[640px] text-center">
          <Eyebrow ton="blau">Danach</Eyebrow>
          <h2 className="mt-6 text-[clamp(1.6rem,3.6vw,2.35rem)] leading-[1.2] text-balance">
            Was kannst du nach der Weiterbildung machen?
          </h2>
          <p className="mt-4 text-[0.9375rem] leading-[1.65] text-hs-body">
            Nach deinem Lehrgang kannst du dein neues Wissen in verschiedenen
            Bereichen einsetzen.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2">
          {kurs.danach.map((d) => (
            <li
              key={d.titel}
              className="rounded-hs-card border border-hs-line bg-white p-6 shadow-hs-soft"
            >
              <h3 className="text-[1rem] font-[600] leading-snug text-hs-navy">
                {d.titel}
              </h3>
              <p className="mt-1.5 text-[0.85rem] leading-[1.6] text-hs-muted">
                {d.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

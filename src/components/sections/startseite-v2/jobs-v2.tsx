import Image from "next/image";
import Link from "next/link";
import React from "react";
import { btnPrimary } from "./hs-ui";

/**
 * Hinweis auf offene Stellen.
 *
 * Rechts stehen die echten Team-Porträts statt einer Illustration — bei
 * „bewirb dich bei uns" sind die tatsächlichen Gesichter glaubwürdiger, und
 * eine passende Illustration liegt nicht in den Assets.
 */
const team = [
  { name: "Nina", bild: "/images/team/nina.png" },
  { name: "Christian", bild: "/images/team/christian.png" },
  { name: "Andrea", bild: "/images/team/andrea.png" },
  { name: "Heiko", bild: "/images/team/heiko.png" },
  { name: "Konrad", bild: "/images/team/konrad.png" },
];

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
            mitgestalten wollen. Schau dir an, welche Stellen offen sind.
          </p>

          <Link href="/jobs" className={`${btnPrimary} mt-8`}>
            Offene Stellen ansehen
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Team */}
        <div className="relative flex shrink-0 flex-col gap-4">
          <div className="flex">
            {team.map((person, i) => (
              <span
                key={person.name}
                className="relative -ml-4 size-16 overflow-hidden rounded-full border-[3px] border-white shadow-hs-soft first:ml-0"
                style={{ zIndex: team.length - i }}
              >
                <Image
                  src={person.bild}
                  alt={person.name}
                  width={128}
                  height={128}
                  sizes="64px"
                  className="size-full object-cover"
                />
              </span>
            ))}
          </div>
          <span className="text-[0.85rem] font-[500] leading-snug text-hs-muted">
            Das Team, das dich einarbeitet
          </span>
        </div>
      </div>
    </section>
  );
}

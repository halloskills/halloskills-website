import React from "react";
import type { KursNeu } from "@/lib/kurse-neu-data";
import { Eyebrow } from "@/components/sections/startseite-v2/hs-ui";

export function KursModuleV2({ kurs }: { kurs: KursNeu }) {
  return (
    <section id="module" className="scroll-mt-28 px-6 pb-10 md:px-10">
      <div
        className="mx-auto max-w-[1200px] rounded-[40px] px-6 py-16 md:px-12 lg:py-20"
        style={{
          background: "linear-gradient(160deg, #f4f2ff 0%, #fbf5fb 45%, #f6f9fd 100%)",
        }}
      >
        <div className="mx-auto max-w-[640px] text-center">
          <Eyebrow>Der Lehrplan</Eyebrow>
          <h2 className="mt-6 text-[clamp(1.6rem,3.6vw,2.35rem)] leading-[1.2] text-balance">
            Die zentralen Themen deines Lehrgangs
          </h2>
          <p className="mt-4 text-[0.9375rem] leading-[1.65] text-hs-body">
            Orientiert an den Kernthemen der klassischen IHK-Ausbildung — kompakt
            aufbereitet für 6 statt 24 Monate.
          </p>
        </div>

        <ol className="mt-12 grid gap-5 sm:grid-cols-2">
          {kurs.module.map((m, i) => (
            <li
              key={m.titel}
              className="flex gap-4 rounded-hs-card border border-white bg-white/85 p-6 shadow-hs-soft"
            >
              <span className="shrink-0 text-[0.75rem] font-bold tabular-nums tracking-[0.1em] text-hs-pink">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-[1rem] font-[600] leading-snug">{m.titel}</h3>
                <p className="mt-1.5 text-[0.85rem] leading-[1.6] text-hs-muted">{m.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

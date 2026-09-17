import Image from "next/image";
import Link from "next/link";
import React from "react";
import { btnPrimary } from "./hs-ui";

export function CtaV2() {
  return (
    <section className="px-6 pb-16 md:px-10 lg:pb-20">
      <div
        className="relative mx-auto flex max-w-[1200px] flex-col gap-8 overflow-hidden rounded-[32px] px-7 py-10 md:px-12 lg:flex-row lg:items-center lg:justify-between lg:gap-12"
        style={{
          background:
            "linear-gradient(110deg, #fbeaf4 0%, #f2ecfd 55%, #eef1fe 100%)",
        }}
      >
        {/* Dekorative Pill im Markenverlauf — weich eingeblendet */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-16 -right-10 hidden size-[300px] rounded-full bg-hs-violet/20 blur-3xl md:block"
        />

        <div className="relative flex items-start gap-5">
          {/* Bild-Duo: zeigt zwei Teilnehmende, die bereits erfolgreich lernen */}
          <div className="relative hidden shrink-0 sm:block">
            <div className="size-16 overflow-hidden rounded-[18px] border-2 border-white shadow-hs-soft">
              <Image
                src="/images/bilder/mann-mit-laptop.png"
                alt="Teilnehmer lernt mit seinem Laptop"
                width={160}
                height={160}
                sizes="64px"
                className="size-full object-cover"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 size-14 overflow-hidden rounded-[16px] border-2 border-white shadow-hs-soft">
              <Image
                src="/images/bilder/dunkelhaarige-frau-mit-laptop.png"
                alt="Teilnehmerin lernt mit ihrem Laptop"
                width={140}
                height={140}
                sizes="56px"
                className="size-full object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="text-[clamp(1.35rem,3vw,1.85rem)] leading-[1.2]">
              Bereit für den nächsten Schritt?
            </h2>
            <p className="mt-2.5 max-w-[520px] text-[0.9375rem] leading-[1.6] text-hs-body">
              Die Plätze für den Start im Herbst 2026 sind begrenzt. Im kostenlosen
              Gespräch finden wir heraus, welcher Lehrgang zu dir passt.
            </p>
          </div>
        </div>

        <Link href="/beratung-buchen" className={`${btnPrimary} relative shrink-0`}>
          Beratung sichern
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}

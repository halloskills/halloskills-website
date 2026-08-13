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
          <span
            aria-hidden="true"
            className="hidden size-14 shrink-0 items-center justify-center rounded-[18px] bg-white text-hs-pink shadow-hs-soft sm:flex"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2.8l7.2 2.8v5.6c0 4.4-3 8.2-7.2 9.9-4.2-1.7-7.2-5.5-7.2-9.9V5.6L12 2.8Z"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinejoin="round"
              />
              <path
                d="M8.8 11.9l2.3 2.3 4.1-4.3"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>

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

        <Link href="/beratung-buchen-neu" className={`${btnPrimary} relative shrink-0`}>
          Beratung sichern
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}

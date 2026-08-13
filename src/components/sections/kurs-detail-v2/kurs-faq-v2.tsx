"use client";

import React, { useState } from "react";
import type { Kurs } from "@/lib/kurse-data";

function Chevron({ offen }: { offen: boolean }) {
  return (
    <svg
      width="14"
      height="8"
      viewBox="0 0 14 8"
      fill="none"
      aria-hidden="true"
      className={`shrink-0 transition-transform duration-200 ${offen ? "rotate-180" : ""}`}
    >
      <path
        d="M1 1l6 5 6-5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function KursFaqV2({ faq }: { faq: Kurs["faq"] }) {
  const [offen, setOffen] = useState(0);

  return (
    <section className="px-6 py-20 md:px-10 lg:py-24">
      <div className="mx-auto max-w-[760px]">
        <h2 className="text-center text-[clamp(1.6rem,3.6vw,2.35rem)] leading-[1.2] text-balance">
          Häufige Fragen
        </h2>

        <div className="mt-10 flex flex-col gap-3">
          {faq.map((item, i) => {
            const istOffen = offen === i;
            return (
              <div
                key={item.frage}
                className="overflow-hidden rounded-hs-card border border-hs-line bg-white"
              >
                <button
                  type="button"
                  aria-expanded={istOffen}
                  onClick={() => setOffen(istOffen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-[0.95rem] font-[600] text-hs-navy"
                >
                  {item.frage}
                  <span className="text-hs-violet">
                    <Chevron offen={istOffen} />
                  </span>
                </button>
                {istOffen && (
                  <p className="px-6 pb-5 text-[0.875rem] leading-[1.7] text-hs-body">
                    {item.antwort}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

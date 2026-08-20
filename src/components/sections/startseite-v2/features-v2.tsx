import Link from "next/link";
import React from "react";
import { PfeilKnopf } from "./hs-ui";

function IkonBlitz() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M13 2L4.5 13.5H10L9.5 22L19 10.5H13.5L13 2Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IkonPerson() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="8" r="3.6" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M4.5 20.5c0-3.6 3.4-6 7.5-6s7.5 2.4 7.5 6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IkonUhr() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.6" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M12 7.4V12l3.2 2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IkonSiegel() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
  );
}

const features = [
  {
    ikon: <IkonBlitz />,
    ton: "bg-hs-violet/10 text-hs-violet",
    titel: "Praxisnah lernen",
    text: "Inhalte, die du direkt im Arbeitsalltag anwenden kannst.",
    href: "/kurse",
  },
  {
    ikon: <IkonPerson />,
    ton: "bg-hs-pink/10 text-hs-pink",
    titel: "Persönliche Betreuung",
    text: "Echte Expert:innen begleiten dich auf deinem Weg.",
    href: "/beratung-buchen",
  },
  {
    ikon: <IkonUhr />,
    ton: "bg-hs-lightblue text-hs-blue",
    titel: "100% Online",
    text: "Lerne von zuhause.",
    href: "/kurse",
  },
  {
    ikon: <IkonSiegel />,
    ton: "bg-[#d9f2f4] text-[#217b83]",
    titel: "HalloSkills-Zertifikat",
    text: "Belegt deinen Lernerfolg und zählt im Bewerbungsprozess.",
    href: "/kurse",
  },
];

export function FeaturesV2() {
  return (
    <section id="so-funktioniert-es" className="scroll-mt-28 px-6 pb-10 md:px-10">
      <div
        className="mx-auto max-w-[1200px] rounded-[40px] px-6 py-16 md:px-12 lg:py-20"
        style={{
          background:
            "linear-gradient(160deg, #f4f2ff 0%, #fbf5fb 45%, #f6f9fd 100%)",
        }}
      >
        <h2 className="mx-auto max-w-[620px] text-center text-[clamp(1.6rem,3.6vw,2.35rem)] leading-[1.2] text-balance">
          Umschulungsinhalte, die zu deinem Leben passen.
        </h2>
        <p className="mx-auto mt-4 max-w-[560px] text-center text-[0.9375rem] leading-[1.65] text-hs-body">
          Kein zweijähriger Kraftakt, kein Pendeln zum Schulungsraum — bei uns lernst
          du die gleichen Inhalte online, kompakt und mit persönlicher Begleitung.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <Link
              key={f.titel}
              href={f.href}
              className="group flex flex-col rounded-hs-card border border-white bg-white/80 p-6 shadow-hs-soft transition-all duration-200 hover:-translate-y-1 hover:bg-white hover:shadow-hs-float"
            >
              <span
                className={`inline-flex size-11 items-center justify-center rounded-[14px] ${f.ton}`}
              >
                {f.ikon}
              </span>

              <h3 className="mt-5 text-[1.0625rem] font-[600] leading-snug">{f.titel}</h3>
              <p className="mt-2 text-[0.85rem] leading-[1.6] text-hs-muted">{f.text}</p>

              <span className="mt-6 flex pt-1">
                <PfeilKnopf />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

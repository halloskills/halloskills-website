"use client";

import React from "react";

const vorteile = [
  "Flexibles Online-Lernen – keine Präsenzpflicht",
  "Persönliche Lernbegleitung während des gesamten Kurses",
  "Bundesweit anerkannte Abschlüsse mit Zertifikat",
  "Lebenslanger Zugriff auf alle Kursinhalte",
  "Start jeden Montag – kurze Wartezeiten",
  "100% Kostenübernahme durch Bildungsgutschein",
];

export function KurseVorteile() {
  return (
    <section className="py-24" style={{ background: "#ffffff" }}>
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
          <div>
            <span
              className="mb-5 block text-[0.75rem] font-bold uppercase tracking-[0.12em]"
              style={{ color: "#D4AF37" }}
            >
              Das bekommst du
            </span>
            <h2
              className="mb-6"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                fontWeight: 400,
                color: "#0f2744",
              }}
            >
              Alle Kurse im Überblick
            </h2>
            <p className="mb-10 leading-[1.7]" style={{ color: "#475467" }}>
              Egal welchen Kurs du wählst – diese Vorteile gelten für alle HalloSkills-Weiterbildungen.
            </p>
            <ul className="flex flex-col gap-5">
              {vorteile.map((v, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div
                    className="flex size-5 shrink-0 items-center justify-center rounded-full"
                    style={{ background: "#004B76" }}
                  >
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4l2.5 2.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span style={{ color: "#111827" }}>{v}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <img
              src="/images/bilder/kurs-bueromanagement.png"
              className="w-full rounded-2xl object-cover"
              alt="HalloSkills Kursvorteile"
              style={{ aspectRatio: "4/3" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

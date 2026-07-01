"use client";

import React from "react";

const werte = [
  { title: "AZAV-zertifiziert", body: "Unsere Kurse erfüllen höchste Qualitätsstandards." },
  { title: "Praxisnah", body: "Wir vermitteln Skills, die Arbeitgeber heute wirklich suchen." },
  { title: "Persönlich", body: "Kein anonymes E-Learning, jeder Teilnehmende hat einen festen Ansprechpartner." },
  { title: "Wirksam", body: "87% unserer Absolvent:innen finden nach der Weiterbildung einen neuen Job." },
];

export function UeberUnsMission() {
  return (
    <section className="py-24" style={{ background: "#ffffff" }}>
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
          <div>
            <span
              className="mb-5 block text-[0.75rem] font-bold uppercase tracking-[0.12em]"
              style={{ color: "#D4AF37" }}
            >
              Unsere Mission
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
              Wer wir sind
            </h2>
            <p className="mb-5 leading-[1.7]" style={{ color: "#475467" }}>
              Wir sind ein Team aus Bildungsexpert:innen, Karriereberater:innen und
              Branchenkenner:innen. Unser Ziel ist es nicht, möglichst viele Kurse
              zu verkaufen, sondern möglichst vielen Menschen einen echten
              Karriereschritt zu ermöglichen.
            </p>
            <p className="mb-10 leading-[1.7]" style={{ color: "#475467" }}>
              Wir glauben, dass eine geförderte Weiterbildung nicht bedeutet,
              Abstriche bei der Qualität zu machen. AZAV-zertifiziert, praxisnah,
              mit persönlicher Betreuung. Das ist unser Standard.
            </p>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {werte.map((w, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div
                    className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full"
                    style={{ background: "#004B76" }}
                  >
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4l2.5 2.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="mb-0.5 font-semibold" style={{ color: "#111827" }}>{w.title}</p>
                    <p style={{ fontSize: "0.875rem", color: "#475467" }}>{w.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img
              src="/images/bilder/standorte.png"
              className="w-full rounded-2xl object-cover"
              alt="HalloSkills Team"
              style={{ aspectRatio: "16/12" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

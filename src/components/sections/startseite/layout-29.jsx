"use client";

import Link from "next/link";
import React from "react";

const vorteile = [
  {
    title: "Komplett gefördert",
    text: "Agentur für Arbeit oder Jobcenter übernimmt 100% der Kurskosten. Du zahlst nichts: nicht für den Kurs, nicht für das Zertifikat.",
  },
  {
    title: "100% online & flexibel",
    text: "Lerne von zuhause aus, im eigenen Tempo. Kein Pendeln, keine festen Anwesenheitszeiten, Familie und Lernen vereinen.",
  },
  {
    title: "AZAV-zertifiziert",
    text: "Unsere Kurse erfüllen staatliche Qualitätsstandards. Das Zertifikat ist bundesweit anerkannt und von Arbeitgebern geschätzt.",
  },
  {
    title: "Persönliche Betreuung",
    text: "Kein anonymes E-Learning. Jeder Teilnehmende hat einen festen Ansprechpartner von der Beratung bis zum Jobstart.",
  },
];

export function Layout29() {
  return (
    <section className="py-24" style={{ background: "#f5f7f9" }}>
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        {/* Header */}
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span
              className="mb-5 block text-[0.75rem] font-bold uppercase tracking-[0.12em]"
              style={{ color: "#D4AF37" }}
            >
              Vorteile
            </span>
            <h2
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                fontWeight: 400,
                color: "#0f2744",
              }}
            >
              Warum HalloSkills?
            </h2>
          </div>
          <Link
            href="/beratung-buchen"
            className="shrink-0 inline-block border-[1.5px] border-[#111827] px-7 py-3 text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-[#111827] transition-colors hover:bg-[#111827] hover:text-white"
          >
            Mehr erfahren
          </Link>
        </div>

        {/* Horizontal divider */}
        <div className="mb-0 border-t border-[#e5e7eb]" />

        {/* Vorteile grid — 2x2, alle auf gleicher Höhe */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {vorteile.map((v, i) => (
            <div
              key={i}
              className="grid items-start py-10"
              style={{
                gridTemplateColumns: "56px 1fr",
                gap: "0 20px",
                borderBottom: "1px solid #e5e7eb",
                paddingLeft: i % 2 === 1 ? "40px" : "0",
                paddingRight: i % 2 === 0 ? "40px" : "0",
              }}
            >
              <div
                className="flex size-10 shrink-0 items-center justify-center rounded-full"
                style={{ background: "rgba(0,75,118,0.1)" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" stroke="#004b76" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3
                  className="mb-2"
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: "1.05rem",
                    fontWeight: 400,
                    color: "#0f2744",
                  }}
                >
                  {v.title}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "#475467", lineHeight: 1.7 }}>{v.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

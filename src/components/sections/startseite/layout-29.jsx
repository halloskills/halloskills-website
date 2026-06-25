"use client";

import Link from "next/link";
import React from "react";

const vorteile = [
  {
    icon: "/images/bilder/kurs-ecommerce.png",
    title: "Komplett gefördert",
    text: "Agentur für Arbeit oder Jobcenter übernimmt 100% der Kurskosten. Du zahlst nichts – nicht für den Kurs, nicht für das Zertifikat.",
  },
  {
    icon: "/images/bilder/kurs-bueromanagement.png",
    title: "100% online & flexibel",
    text: "Lerne von zuhause aus, im eigenen Tempo. Kein Pendeln, keine festen Anwesenheitszeiten, Familie und Lernen vereinen.",
  },
  {
    icon: "/images/bilder/kurs-gesundheitswesen.png",
    title: "AZAV-zertifiziert",
    text: "Unsere Kurse erfüllen staatliche Qualitätsstandards. Das Zertifikat ist bundesweit anerkannt und von Arbeitgebern geschätzt.",
  },
  {
    icon: "/images/bilder/standorte.png",
    title: "Persönliche Betreuung",
    text: "Kein anonymes E-Learning. Jeder Teilnehmende hat einen festen Ansprechpartner von der Beratung bis zum Jobstart.",
  },
];

export function Layout29() {
  return (
    <section className="py-24" style={{ background: "#f5f7f9" }}>
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        {/* Header */}
        <div className="mb-16 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1px_1fr]">
          <div className="text-center">
            <span
              className="mb-5 block text-[0.75rem] font-semibold uppercase tracking-[0.12em]"
              style={{ color: "#D4AF37" }}
            >
              Vorteile
            </span>
            <h2
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                fontWeight: 400,
                color: "#111827",
              }}
            >
              Warum HalloSkills?
            </h2>
          </div>
          <div className="hidden bg-[#e5e7eb] lg:block" />
          <div className="flex flex-col justify-center">
            <p className="mb-8 leading-[1.7]" style={{ color: "#475467" }}>
              Mehr als eine Weiterbildung – ein echter Neustart. Wir begleiten dich
              von der Förderung bis zum neuen Job.
            </p>
            <Link
              href="/beratung-buchen"
              className="inline-block w-fit border-[1.5px] border-[#111827] px-7 py-3 text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-[#111827] transition-colors hover:bg-[#111827] hover:text-white"
            >
              Mehr erfahren
            </Link>
          </div>
        </div>

        {/* Vorteile grid */}
        <div className="grid grid-cols-1 gap-0 lg:grid-cols-[1fr_1px_1fr]">
          <div className="flex flex-col">
            {vorteile.slice(0, 2).map((v, i) => (
              <div
                key={i}
                className="grid items-start py-10"
                style={{
                  gridTemplateColumns: "64px 1fr",
                  gap: "0 24px",
                  paddingRight: "40px",
                  borderBottom: i === 0 ? "1px solid #e5e7eb" : "none",
                }}
              >
                <div className="flex size-12 items-center justify-center rounded-full bg-regal-blue/10">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
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
                      color: "#111827",
                    }}
                  >
                    {v.title}
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "#475467" }}>{v.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="hidden bg-[#e5e7eb] lg:block" />
          <div className="flex flex-col">
            {vorteile.slice(2).map((v, i) => (
              <div
                key={i}
                className="grid items-start py-10"
                style={{
                  gridTemplateColumns: "64px 1fr",
                  gap: "0 24px",
                  paddingLeft: "40px",
                  borderBottom: i === 0 ? "1px solid #e5e7eb" : "none",
                }}
              >
                <div className="flex size-12 items-center justify-center rounded-full bg-regal-blue/10">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
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
                      color: "#111827",
                    }}
                  >
                    {v.title}
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "#475467" }}>{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

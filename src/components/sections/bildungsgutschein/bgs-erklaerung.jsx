"use client";

import React from "react";

const vorteile = [
  { title: "100% Kostenübernahme", body: "Keine versteckten Gebühren – weder für den Kurs noch für das Zertifikat oder die Lernmaterialien." },
  { title: "Bundesweit gültig", body: "Einlösbar bei allen AZAV-zertifizierten Trägern wie HalloSkills." },
  { title: "Für alle unsere Kurse", body: "Gilt für Projektmanagement, Online Marketing und KI & Digitalisierung." },
  { title: "Schnelle Bewilligung", body: "Meist innerhalb von 1–2 Wochen genehmigt – du kannst schnell starten." },
];

export function BgsErklaerung() {
  return (
    <section className="py-24" style={{ background: "#ffffff" }}>
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
          {/* Left */}
          <div>
            <span
              className="mb-5 block text-[0.75rem] font-semibold uppercase tracking-[0.12em]"
              style={{ color: "#D4AF37" }}
            >
              Was ist das?
            </span>
            <h2
              className="mb-6"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                fontWeight: 400,
                color: "#111827",
              }}
            >
              Was ist der Bildungsgutschein?
            </h2>
            <p className="mb-10 leading-[1.7]" style={{ color: "#475467" }}>
              Der Bildungsgutschein ist ein staatliches Fördermittel, mit dem die Agentur für
              Arbeit oder das Jobcenter die Kosten für deine Weiterbildung vollständig übernimmt.
              Du zahlst nichts – nicht für den Kurs, nicht für das Zertifikat, nicht für die Lernmaterialien.
            </p>
            <div className="flex flex-col gap-6">
              {vorteile.map((v, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div
                    className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full"
                    style={{ background: "#004B76" }}
                  >
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4l2.5 2.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="mb-1 font-semibold" style={{ color: "#111827" }}>{v.title}</p>
                    <p style={{ fontSize: "0.9rem", color: "#475467" }}>{v.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image */}
          <div>
            <img
              src="/images/bilder/prozess.png"
              alt="Bildungsgutschein beantragen"
              className="w-full rounded-2xl object-cover"
              style={{ aspectRatio: "3/4" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

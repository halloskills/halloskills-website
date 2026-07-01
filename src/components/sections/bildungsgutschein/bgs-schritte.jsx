"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const schritte = [
  {
    num: "01",
    label: "Schritt 1",
    title: "Beratung bei HalloSkills buchen",
    body: "Wir erstellen mit dir ein passendes Angebot und erklären dir genau, welche Unterlagen du brauchst – kostenlos und unverbindlich.",
  },
  {
    num: "02",
    label: "Schritt 2",
    title: "Termin bei Agentur für Arbeit",
    body: "Du gehst optimal vorbereitet in dein Gespräch – mit unserer Unterlagen-Checkliste und bewährten Argumentationshilfen.",
  },
  {
    num: "03",
    label: "Schritt 3",
    title: "Bildungsgutschein einlösen & starten",
    body: "Sobald der Gutschein genehmigt ist, startest du beim nächsten verfügbaren Montag direkt in deinen Kurs.",
  },
];

export function BgsSchritte() {
  const [activeStep, setActiveStep] = useState(null);
  const stepRefs = useRef([]);

  useEffect(() => {
    const observers = [];
    stepRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveStep(i);
        },
        { threshold: 0.6 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section id="bgs-ablauf" className="py-24" style={{ background: "#f5f7f9" }}>
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <div className="mb-16 text-center">
          <span
            className="mb-5 block text-[0.75rem] font-bold uppercase tracking-[0.12em]"
            style={{ color: "#D4AF37" }}
          >
            Ablauf
          </span>
          <h2
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
              fontWeight: 400,
              color: "#0f2744",
            }}
          >
            Drei Schritte zum Bildungsgutschein
          </h2>
        </div>

        <div className="mx-auto max-w-[720px]">
          <ul className="list-none">
            {schritte.map((s, i) => {
              const isActive = activeStep === i;
              return (
                <li
                  key={s.num}
                  ref={(el) => (stepRefs.current[i] = el)}
                  className="relative grid py-8 transition-all duration-500"
                  style={{ gridTemplateColumns: "48px 1fr", gap: "0 24px" }}
                >
                  {i < schritte.length - 1 && (
                    <div
                      className="absolute left-[23px] top-[64px] bottom-0 w-px"
                      style={{ borderLeft: "1px dashed rgba(0,0,0,0.2)" }}
                    />
                  )}
                  <div className="flex flex-col items-center">
                    <div
                      className="flex size-10 shrink-0 items-center justify-center rounded-full border-[1.5px] text-sm font-medium transition-all duration-500"
                      style={{
                        background: isActive ? "#004B76" : "transparent",
                        borderColor: isActive ? "#004B76" : "#e5e7eb",
                        color: isActive ? "#ffffff" : "#475467",
                      }}
                    >
                      {i + 1}
                    </div>
                  </div>
                  <div>
                    <p className="mb-1.5 text-[0.7rem] font-bold uppercase tracking-[0.1em]" style={{ color: "#D4AF37" }}>
                      {s.label}
                    </p>
                    <h3
                      className="mb-2"
                      style={{
                        fontFamily: "Georgia, 'Times New Roman', serif",
                        fontSize: "1.2rem",
                        fontWeight: 400,
                        color: "#0f2744",
                      }}
                    >
                      {s.title}
                    </h3>
                    <p style={{ fontSize: "0.9rem", color: "#475467" }}>{s.body}</p>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="mt-8 flex justify-center">
            <Link
              href="/beratung-buchen"
              className="inline-block border-[1.5px] border-[#111827] px-8 py-3 text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-[#111827] transition-colors hover:bg-[#111827] hover:text-white"
            >
              Jetzt beraten lassen
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

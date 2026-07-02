"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const steps = [
  {
    num: "01",
    label: "Schritt 1",
    title: "Beratung buchen",
    text: "Wir prüfen gemeinsam deine Eignung und erstellen dein individuelles Angebot. Kostenlos und unverbindlich.",
  },
  {
    num: "02",
    label: "Schritt 2",
    title: "Bildungsgutschein beantragen",
    text: "Mit unserer Hilfe gehst du optimal vorbereitet zur Agentur für Arbeit, mit Unterlagen-Checkliste und Argumentationshilfe.",
  },
  {
    num: "03",
    label: "Schritt 3",
    title: "Onboarding & Start",
    text: "Du erhältst alle Zugänge und startest am nächsten verfügbaren Termin mit persönlicher Betreuung.",
  },
];

export function KursSchritte({ img = "/images/bilder/prozess.png" }) {
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
        { threshold: 0.5, rootMargin: "0px 0px -80px 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className="py-24" style={{ background: "#ffffff" }}>
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <div className="grid grid-cols-1 items-start gap-20 lg:grid-cols-2">
          {/* Left: image */}
          <div className="relative">
            <img
              src={img}
              alt="Dein Weg zum Kursstart"
              className="w-full rounded-2xl object-cover"
              style={{ aspectRatio: "3/4" }}
            />
          </div>

          {/* Right: steps */}
          <div>
            <span
              className="mb-5 block text-[0.75rem] font-bold uppercase tracking-[0.12em]"
              style={{ color: "#D4AF37" }}
            >
              So funktioniert es
            </span>
            <h2
              className="mb-12"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                fontWeight: 400,
                color: "#0f2744",
              }}
            >
              Dein Weg zum Kursstart
            </h2>

            <ul className="list-none">
              {steps.map((s, i) => {
                const isActive = activeStep === i;
                return (
                  <li
                    key={s.num}
                    ref={(el) => (stepRefs.current[i] = el)}
                    className="relative grid py-6 transition-all duration-500"
                    style={{ gridTemplateColumns: "48px 1fr", gap: "0 24px" }}
                  >
                    {i < steps.length - 1 && (
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
                      <p
                        className="mb-1.5 text-[0.7rem] font-bold uppercase tracking-[0.1em]"
                        style={{ color: "#D4AF37" }}
                      >
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
                      <p style={{ fontSize: "0.9rem", color: "#475467" }}>{s.text}</p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8">
              <Link
                href="/beratung-buchen"
                className="inline-block border-[1.5px] px-7 py-3 text-[0.8rem] font-semibold uppercase tracking-[0.1em] transition-colors"
                style={{ borderColor: "#111827", color: "#111827" }}
              >
                Jetzt beraten lassen
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

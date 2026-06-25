"use client";

import Link from "next/link";
import React from "react";

const steps = [
  {
    num: "01",
    label: "Schritt 1",
    title: "Beratung buchen",
    text: "Wir klären deine Situation, deine Ziele und welcher Kurs perfekt zu dir passt. Kostenlos und unverbindlich – in 20 Minuten.",
  },
  {
    num: "02",
    label: "Schritt 2",
    title: "Bildungsgutschein beantragen",
    text: "Wir bereiten dich optimal auf den Termin bei der Agentur für Arbeit vor. Mit Unterlagen-Checkliste und Argumentationshilfe.",
  },
  {
    num: "03",
    label: "Schritt 3",
    title: "Durchstarten",
    text: "Sobald dein BGS genehmigt ist, legst du los. Persönliches Onboarding, alle Zugänge und ein engagiertes Betreuungsteam.",
  },
];

export function Layout485() {
  return (
    <section className="py-24" style={{ background: "#ffffff" }}>
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <div className="grid grid-cols-1 items-start gap-20 lg:grid-cols-2">
          {/* Left: image */}
          <div className="relative">
            <img
              src="/images/bilder/prozess.png"
              alt="In 3 Schritten zum neuen Job"
              className="w-full rounded-2xl object-cover"
              style={{ aspectRatio: "3/4" }}
            />
          </div>

          {/* Right: steps */}
          <div>
            <span
              className="mb-5 block text-[0.75rem] font-semibold uppercase tracking-[0.12em]"
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
                color: "#111827",
              }}
            >
              In 3 Schritten zum neuen Job
            </h2>

            <ul className="list-none">
              {steps.map((s, i) => (
                <li key={s.num} className="relative grid py-6" style={{ gridTemplateColumns: "48px 1fr", gap: "0 24px" }}>
                  {/* Connector line */}
                  {i < steps.length - 1 && (
                    <div
                      className="absolute left-[23px] top-[64px] bottom-0 w-px"
                      style={{ borderLeft: "1px dashed rgba(0,0,0,0.2)" }}
                    />
                  )}
                  {/* Circle */}
                  <div className="flex flex-col items-center">
                    <div
                      className="flex size-10 shrink-0 items-center justify-center rounded-full border-[1.5px] text-sm font-medium"
                      style={{ borderColor: "#e5e7eb", color: "#475467" }}
                    >
                      {i + 1}
                    </div>
                  </div>
                  {/* Content */}
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
                        color: "#111827",
                      }}
                    >
                      {s.title}
                    </h3>
                    <p style={{ fontSize: "0.9rem", color: "#475467" }}>{s.text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex gap-5">
              <Link
                href="/beratung-buchen"
                className="inline-block border-[1.5px] border-[#111827] px-7 py-3 text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-[#111827] transition-colors hover:bg-[#111827] hover:text-white"
              >
                Jetzt beraten lassen
              </Link>
              <Link
                href="/kurse"
                className="inline-flex items-center gap-1 border-b border-[#111827] pb-0.5 text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-[#111827] transition-colors hover:border-regal-blue hover:text-regal-blue"
              >
                Kurse ansehen →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

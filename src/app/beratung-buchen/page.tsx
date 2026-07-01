// @ts-nocheck
"use client";

import type { Metadata } from "next";
import { HubSpotCalendar } from "@/components/sections/beratung-buchen/hubspot-calendar";
import React, { useState } from "react";

const vorteile = [
  {
    title: "Individuelle Kursberatung",
    body: "Kein Standard-Paket. Wir schauen gemeinsam, was zu dir, deinen Zielen und deiner Lebenssituation passt.",
  },
  {
    title: "Bildungsgutschein-Support",
    body: "Wir begleiten dich durch den gesamten Antragsprozess – von der Vorbereitung bis zur Genehmigung.",
  },
  {
    title: "Persönliche Betreuung",
    body: "Dein fester Ansprechpartner von der ersten Beratung bis zum Kursabschluss und darüber hinaus.",
  },
];

const faqs = [
  {
    q: "Wie läuft das Beratungsgespräch ab?",
    a: "Das kostenlose Erstgespräch dauert ca. 20–30 Minuten und findet per Videocall oder Telefon statt. Wir klären deine Situation, besprechen passende Kurse und erklären den nächsten Schritt zum Bildungsgutschein.",
  },
  {
    q: "Muss ich mich nach dem Gespräch für etwas entscheiden?",
    a: "Nein. Das Erstgespräch ist vollständig unverbindlich. Du entscheidest danach in Ruhe, ob und wie es weitergeht.",
  },
  {
    q: "Welche Unterlagen brauche ich für das Gespräch?",
    a: "Für das erste Gespräch brauchst du nichts. Wenn du den Bildungsgutschein beantragen möchtest, helfen wir dir danach mit einer vollständigen Unterlagen-Checkliste.",
  },
  {
    q: "Wie schnell bekomme ich einen Termin?",
    a: "Über unseren Online-Kalender findest du meist schon innerhalb von 24–48 Stunden einen passenden Termin.",
  },
];

export default function BeratungBuchenPage() {
  const [open, setOpen] = useState(null);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Kostenlose Weiterbildungsberatung",
    provider: {
      "@type": "EducationalOrganization",
      name: "HalloSkills",
      url: "https://halloskills.de",
    },
    description:
      "Kostenlose und unverbindliche Beratung zur geförderten Weiterbildung mit Bildungsgutschein.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section
        className="relative flex min-h-[55vh] items-center overflow-hidden"
        style={{ backgroundColor: "#004B76" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/bilder/hero.png')", opacity: 0.25 }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.2) 100%)" }}
        />
        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 py-16 md:px-12 md:py-24">
          <div className="max-w-[600px]">
            <span
              className="mb-5 block text-[0.75rem] font-bold uppercase tracking-[0.12em]"
              style={{ color: "#D4AF37" }}
            >
              Kostenlose Erstberatung
            </span>
            <h1
              className="mb-6"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 400,
                color: "#ffffff",
                lineHeight: 1.2,
              }}
            >
              Jetzt kostenlose{" "}
              <em style={{ fontStyle: "italic" }}>Beratung buchen.</em>
            </h1>
            <p
              className="leading-[1.7]"
              style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.05rem", maxWidth: 480 }}
            >
              In einem persönlichen Gespräch zeigen wir dir deine individuellen Möglichkeiten
              und wie du 100% kostenfrei in deine neue Karriere startest.
            </p>
          </div>
        </div>
      </section>

      {/* Vorteile */}
      <section className="py-16" style={{ background: "#f5f7f9" }}>
        <div className="mx-auto max-w-[1200px] px-6 md:px-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {vorteile.map((v, i) => (
              <div key={i} className="flex items-start gap-4">
                <div
                  className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full"
                  style={{ background: "#004B76" }}
                >
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4l2.5 2.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3
                    className="mb-1"
                    style={{
                      fontFamily: "Georgia, 'Times New Roman', serif",
                      fontWeight: 400,
                      fontSize: "1rem",
                      color: "#0f2744",
                    }}
                  >
                    {v.title}
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "#475467" }}>{v.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HubSpot Calendar */}
      <section className="py-24" style={{ background: "#ffffff" }}>
        <div className="mx-auto max-w-[1200px] px-6 md:px-12">
          <div className="mb-12 text-center">
            <span
              className="mb-5 block text-[0.75rem] font-bold uppercase tracking-[0.12em]"
              style={{ color: "#D4AF37" }}
            >
              Terminbuchung
            </span>
            <h2
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                fontWeight: 400,
                color: "#0f2744",
              }}
            >
              Wähle deinen Wunschtermin
            </h2>
          </div>
          <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-[#e5e7eb] bg-white shadow-sm">
            <HubSpotCalendar />
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24" style={{ background: "#004B76" }}>
        <div className="mx-auto max-w-[800px] px-6 md:px-12 text-center">
          <div className="mb-6 flex justify-center gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="#D4AF37">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            ))}
          </div>
          <p
            className="mb-8 leading-[1.7]"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
              fontStyle: "italic",
              color: "rgba(255,255,255,0.9)",
            }}
          >
            „Die Beratung war super verständlich und hat mir den Weg zum Bildungsgutschein leicht gemacht.
            Nach dem ersten Gespräch hatte ich einen klaren Plan – und zwei Wochen später hielt ich meinen
            genehmigten Bildungsgutschein in der Hand."
          </p>
          <p
            className="text-[0.75rem] font-bold uppercase tracking-[0.12em]"
            style={{ color: "#ffffff" }}
          >
            Fatima K.
          </p>
          <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)" }}>jetzt Online Marketing Managerin</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24" style={{ background: "#ffffff" }}>
        <div className="mx-auto max-w-[1200px] px-6 md:px-12">
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-[1fr_1.6fr]">
            <div>
              <span
                className="mb-5 block text-[0.75rem] font-bold uppercase tracking-[0.12em]"
                style={{ color: "#D4AF37" }}
              >
                FAQ
              </span>
              <h2
                className="mb-6"
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "clamp(1.8rem, 3vw, 2.2rem)",
                  fontWeight: 400,
                  color: "#0f2744",
                }}
              >
                Fragen zur Beratung
              </h2>
              <p style={{ color: "#475467", lineHeight: 1.7 }}>
                Noch unsicher? Hier findest du Antworten auf die häufigsten Fragen rund um das kostenlose Erstgespräch.
              </p>
            </div>

            <div>
              {faqs.map((faq, i) => (
                <div key={i} style={{ borderBottom: "1px solid #e5e7eb" }}>
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="flex w-full items-center justify-between py-5 text-left"
                  >
                    <span
                      style={{
                        fontFamily: "Georgia, 'Times New Roman', serif",
                        fontSize: "1rem",
                        fontWeight: 400,
                        color: "#0f2744",
                      }}
                    >
                      {faq.q}
                    </span>
                    <span
                      className="ml-4 shrink-0 text-xl font-light transition-transform duration-200"
                      style={{
                        color: "#475467",
                        transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                      }}
                    >
                      +
                    </span>
                  </button>
                  {open === i && (
                    <p className="pb-5 leading-[1.7]" style={{ fontSize: "0.9rem", color: "#475467" }}>
                      {faq.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// @ts-nocheck
"use client";

import type { Metadata } from "next";
import React, { useState } from "react";

const STEPS = [
  {
    key: "status",
    question: "Wie ist deine aktuelle Situation?",
    options: [
      { label: "Ich bin arbeitslos gemeldet", value: "arbeitslos" },
      { label: "Mir droht eine Kündigung", value: "kuendigung" },
      { label: "Ich bin noch in Arbeit", value: "in-arbeit" },
      { label: "Sonstiges", value: "sonstiges" },
    ],
  },
  {
    key: "foerderung",
    question: "Beziehst du aktuell eine Förderleistung?",
    options: [
      { label: "Ja, ALG I (Agentur für Arbeit)", value: "alg1" },
      { label: "Ja, Bürgergeld (Jobcenter)", value: "buergergeld" },
      { label: "Nein, (noch) nicht", value: "nein" },
      { label: "Ich bin mir nicht sicher", value: "unsicher" },
    ],
  },
  {
    key: "bildungsgutschein",
    question: "Hast du bereits einen Bildungsgutschein?",
    options: [
      { label: "Ja, ich habe bereits einen", value: "ja" },
      { label: "Nein, aber ich möchte einen beantragen", value: "nein-beantragen" },
      { label: "Ich weiß nicht, wie das geht", value: "weiss-nicht" },
    ],
  },
  {
    key: "interesse",
    question: "Welcher Bereich interessiert dich?",
    options: [
      { label: "Projektmanagement", value: "projektmanagement" },
      { label: "Online Marketing", value: "online-marketing" },
      { label: "KI & Digitalisierung", value: "ki-digitalisierung" },
      { label: "Ich bin noch unsicher", value: "unsicher" },
    ],
  },
];

function ContactForm() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [contact, setContact] = useState({ name: "", email: "", telefon: "" });
  const [submitStatus, setSubmitStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const totalSteps = STEPS.length + 1; // +1 for contact step
  const progress = Math.round(((step) / totalSteps) * 100);

  function selectOption(key: string, value: string) {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    setStep((s) => s + 1);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitStatus("sending");
    const payload = new FormData();
    payload.append("name", contact.name);
    payload.append("email", contact.email);
    payload.append("telefon", contact.telefon);
    Object.entries(answers).forEach(([k, v]) => payload.append(k, v));
    const res = await fetch("https://formspree.io/f/mrerpgqa", {
      method: "POST",
      body: payload,
      headers: { Accept: "application/json" },
    });
    setSubmitStatus(res.ok ? "success" : "error");
  }

  if (submitStatus === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-[#e5e7eb] bg-white p-10 shadow-sm text-center" style={{ minHeight: 320 }}>
        <div className="mb-4 flex size-12 items-center justify-center rounded-full" style={{ background: "#ecfdf3" }}>
          <svg width="22" height="18" viewBox="0 0 22 18" fill="none">
            <path d="M1 9l6 6L21 1" stroke="#027a48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: "1.3rem", fontWeight: 400, color: "#0f2744", marginBottom: 12 }}>
          Vielen Dank!
        </h3>
        <p style={{ fontSize: "0.9rem", color: "#475467", lineHeight: 1.7 }}>
          Wir haben deine Anfrage erhalten und melden uns<br />innerhalb von 24 Stunden bei dir.
        </p>
      </div>
    );
  }

  const currentStepData = STEPS[step];

  return (
    <div className="rounded-2xl border border-[#e5e7eb] bg-white shadow-sm overflow-hidden">
      {/* Progress bar */}
      <div className="h-1 w-full" style={{ background: "#f3f4f6" }}>
        <div
          className="h-1 transition-all duration-500"
          style={{ width: `${progress}%`, background: "#004B76" }}
        />
      </div>

      <div className="p-8">
        {/* Step counter */}
        <p className="mb-5 text-[0.72rem] font-semibold uppercase tracking-[0.1em]" style={{ color: "#9ca3af" }}>
          {step < STEPS.length ? `Frage ${step + 1} von ${STEPS.length}` : "Fast geschafft"}
        </p>

        {/* Question steps */}
        {step < STEPS.length && currentStepData && (
          <div>
            <h3
              className="mb-6"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: "1.15rem", fontWeight: 400, color: "#0f2744", lineHeight: 1.4 }}
            >
              {currentStepData.question}
            </h3>
            <div className="flex flex-col gap-3">
              {currentStepData.options.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => selectOption(currentStepData.key, opt.value)}
                  className="flex w-full items-center gap-3 rounded-xl border px-5 py-3.5 text-left text-sm font-medium transition-all hover:border-[#004B76] hover:text-[#004B76]"
                  style={{ borderColor: "#e5e7eb", color: "#374151" }}
                >
                  <span
                    className="flex size-5 shrink-0 items-center justify-center rounded-full border-[1.5px]"
                    style={{ borderColor: "#d1d5db" }}
                  />
                  {opt.label}
                </button>
              ))}
            </div>
            {step > 0 && (
              <button
                type="button"
                onClick={() => setStep((s) => s - 1)}
                className="mt-5 text-[0.78rem] font-medium transition-colors hover:text-[#004B76]"
                style={{ color: "#9ca3af" }}
              >
                ← Zurück
              </button>
            )}
          </div>
        )}

        {/* Contact step */}
        {step === STEPS.length && (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <h3
              className="mb-2"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: "1.15rem", fontWeight: 400, color: "#0f2744" }}
            >
              Wie können wir dich erreichen?
            </h3>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.72rem] font-semibold uppercase tracking-[0.08em]" style={{ color: "#475467" }}>Name *</label>
                <input
                  type="text" required placeholder="Dein Name"
                  value={contact.name} onChange={(e) => setContact((c) => ({ ...c, name: e.target.value }))}
                  className="border-b border-[#d1d5db] bg-transparent py-2.5 text-sm outline-none transition-colors focus:border-[#004B76]"
                  style={{ color: "#111827" }}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.72rem] font-semibold uppercase tracking-[0.08em]" style={{ color: "#475467" }}>E-Mail *</label>
                <input
                  type="email" required placeholder="deine@email.de"
                  value={contact.email} onChange={(e) => setContact((c) => ({ ...c, email: e.target.value }))}
                  className="border-b border-[#d1d5db] bg-transparent py-2.5 text-sm outline-none transition-colors focus:border-[#004B76]"
                  style={{ color: "#111827" }}
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[0.72rem] font-semibold uppercase tracking-[0.08em]" style={{ color: "#475467" }}>Telefon</label>
              <input
                type="tel" placeholder="+49 …"
                value={contact.telefon} onChange={(e) => setContact((c) => ({ ...c, telefon: e.target.value }))}
                className="border-b border-[#d1d5db] bg-transparent py-2.5 text-sm outline-none transition-colors focus:border-[#004B76]"
                style={{ color: "#111827" }}
              />
            </div>
            <div className="flex items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => setStep((s) => s - 1)}
                className="text-[0.78rem] font-medium transition-colors hover:text-[#004B76]"
                style={{ color: "#9ca3af" }}
              >
                ← Zurück
              </button>
              <button
                type="submit"
                disabled={submitStatus === "sending"}
                className="flex-1 border-[1.5px] border-[#004B76] px-7 py-3 text-[0.8rem] font-semibold uppercase tracking-[0.1em] transition-colors hover:bg-[#004B76] hover:text-white disabled:opacity-50"
                style={{ color: "#004B76" }}
              >
                {submitStatus === "sending" ? "Wird gesendet …" : "Beratung anfragen"}
              </button>
            </div>
            {submitStatus === "error" && (
              <p className="text-sm" style={{ color: "#dc2626" }}>Etwas ist schiefgelaufen. Bitte versuche es erneut.</p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}

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
    a: "Nach deiner Anfrage melden wir uns innerhalb von 24 Stunden bei dir und stimmen gemeinsam einen passenden Termin ab.",
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

      {/* Kontaktformular */}
      <section className="py-24" style={{ background: "#ffffff" }}>
        <div className="mx-auto max-w-[1200px] px-6 md:px-12">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">
            {/* Left: Text */}
            <div className="lg:pt-2">
              <span
                className="mb-5 block text-[0.75rem] font-bold uppercase tracking-[0.12em]"
                style={{ color: "#D4AF37" }}
              >
                Kostenlose Beratung
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
                Schreib uns – wir melden uns bei dir.
              </h2>
              <p className="mb-8 leading-[1.7]" style={{ color: "#475467" }}>
                Teile ein paar Details mit uns und wir melden uns innerhalb von 24 Stunden mit den nächsten Schritten bei dir. Kostenlos. Unverbindlich. Persönlich.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  "Keine Wartezeit – wir melden uns innerhalb von 24 h",
                  "Kostenlos & unverbindlich",
                  "Gespräch per Telefon oder Videocall",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div
                      className="flex size-5 shrink-0 items-center justify-center rounded-full"
                      style={{ background: "#004B76" }}
                    >
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4l2.5 2.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span style={{ fontSize: "0.9rem", color: "#475467" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <ContactForm />
          </div>
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

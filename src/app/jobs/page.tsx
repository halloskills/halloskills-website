"use client";

import React, { useState } from "react";

function JobsForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.currentTarget);
    formData.delete("cv");
    const res = await fetch("https://formspree.io/f/xjgqpkbj", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });
    setStatus(res.ok ? "success" : "error");
  }

  const inputCls = "w-full rounded-xl border border-[#d1d5db] bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[#004B76] placeholder:text-[#9ca3af]";

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-[#e5e7eb] bg-white p-10 text-center" style={{ minHeight: 280 }}>
        <div className="mb-4 flex size-12 items-center justify-center rounded-full" style={{ background: "#ecfdf3" }}>
          <svg width="22" height="18" viewBox="0 0 22 18" fill="none">
            <path d="M1 9l6 6L21 1" stroke="#027a48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: "1.3rem", fontWeight: 400, color: "#0f2744", marginBottom: 12 }}>
          Danke für deine Bewerbung!
        </h3>
        <p style={{ fontSize: "0.9rem", color: "#475467", lineHeight: 1.7 }}>
          Wir melden uns so schnell wie möglich bei dir.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-2xl border border-[#e5e7eb] bg-white p-8 shadow-sm">
      <div className="grid grid-cols-2 gap-4">
        <input type="text" name="vorname" required placeholder="Vorname *" className={inputCls} />
        <input type="text" name="nachname" required placeholder="Nachname *" className={inputCls} />
      </div>
      <input type="email" name="email" required placeholder="E-Mail *" className={inputCls} />
      <input type="tel" name="telefon" placeholder="Telefon" className={inputCls} />
      <textarea
        name="nachricht"
        required
        rows={4}
        placeholder="Warum möchtest du zu HalloSkills? *"
        className="w-full resize-none rounded-xl border border-[#d1d5db] bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[#004B76] placeholder:text-[#9ca3af]"
      />


      <label className="flex cursor-pointer items-start gap-3 pt-1">
        <input type="checkbox" name="dsgvo" required className="mt-0.5 shrink-0 accent-[#004B76]" />
        <span style={{ fontSize: "0.8rem", color: "#475467", lineHeight: 1.6 }}>
          Ich willige ein, dass HalloSkills meine Daten zur Bearbeitung meiner Bewerbung speichert und mich kontaktiert. Weitere Infos in den{" "}
          <a href="/datenschutz-bewerber" style={{ color: "#004B76", textDecoration: "underline" }}>Datenschutzhinweisen für Bewerber</a>. *
        </span>
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-2 w-full rounded-xl border-[1.5px] border-[#004B76] px-7 py-3.5 text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-[#004B76] transition-colors hover:bg-[#004B76] hover:text-white disabled:opacity-50"
      >
        {status === "sending" ? "Wird gesendet …" : "Bewerbung absenden"}
      </button>
      {status === "error" && (
        <p className="text-sm" style={{ color: "#dc2626" }}>Etwas ist schiefgelaufen. Bitte versuche es erneut.</p>
      )}
    </form>
  );
}

export default function JobsPage() {
  const [jobOpen, setJobOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <section
        className="relative flex min-h-[50vh] items-center overflow-hidden"
        style={{ backgroundColor: "#004B76" }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.1) 100%)" }}
        />
        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 py-16 md:px-12 md:py-24">
          <div className="max-w-[600px]">
            <span
              className="mb-5 block text-[0.75rem] font-bold uppercase tracking-[0.12em]"
              style={{ color: "#D4AF37" }}
            >
              Karriere bei HalloSkills
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
              Werde Teil eines Teams,{" "}
              <em style={{ fontStyle: "italic" }}>das etwas bewegt.</em>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: 480 }}>
              Wir sind noch am Anfang, und genau das macht es spannend. Wenn du Teil von etwas Neuem sein willst, freuen wir uns von dir zu hören.
            </p>
          </div>
        </div>
      </section>

      {/* Stellenanzeigen */}
      <section className="py-24" style={{ background: "#f5f7f9" }}>
        <div className="mx-auto max-w-[1200px] px-6 md:px-12">
          <div className="mb-14">
            <span
              className="mb-5 block text-[0.75rem] font-bold uppercase tracking-[0.12em]"
              style={{ color: "#D4AF37", fontFamily: "DM Sans, sans-serif" }}
            >
              Offene Stellen
            </span>
            <h2
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                fontWeight: 400,
                color: "#0f2744",
              }}
            >
              Jetzt bewerben
            </h2>
          </div>

          {/* Kategorie: Werkstudenten */}
          <div className="mb-6 flex items-center gap-3">
            <span
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "1.15rem",
                fontWeight: 400,
                color: "#0f2744",
              }}
            >
              Werkstudenten
            </span>
            <span
              className="flex size-6 items-center justify-center rounded-full text-[0.72rem] font-semibold"
              style={{ background: "#e5e7eb", color: "#475467" }}
            >
              1
            </span>
          </div>

          {/* Job Row */}
          <div className="overflow-hidden rounded-2xl border border-[#e5e7eb] bg-white">
            {/* Clickable Row */}
            <button
              onClick={() => setJobOpen((o) => !o)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-[#f9fafb]"
              style={{ borderBottom: jobOpen ? "1px solid #e5e7eb" : "none" }}
            >
              <div>
                <p
                  className="mb-1.5"
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: "1rem",
                    fontWeight: 400,
                    color: "#0f2744",
                  }}
                >
                  Werkstudent Digital &amp; Learning Operations (m/w/d)
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                  {[
                    { icon: "📍", label: "Hamburg / Remote" },
                    { icon: "🕐", label: "10–40 Std. / Woche" },
                    { icon: "💼", label: "Werkstudium · Praktikum · Freelance" },
                  ].map((f) => (
                    <span key={f.label} className="flex items-center gap-1.5 text-[0.78rem]" style={{ color: "#6b7280" }}>
                      <span>{f.icon}</span>
                      {f.label}
                    </span>
                  ))}
                </div>
              </div>
              <span
                className="shrink-0 text-lg transition-transform"
                style={{ color: "#004B76", transform: jobOpen ? "rotate(90deg)" : "rotate(0deg)" }}
              >
                →
              </span>
            </button>

            {/* Expanded Details */}
            {jobOpen && (
              <div>
                <div className="grid grid-cols-1 gap-10 px-8 py-10 md:px-10 lg:grid-cols-2">
                  {/* Aufgaben */}
                  <div>
                    <h4
                      className="mb-5 text-[0.72rem] font-bold uppercase tracking-[0.12em]"
                      style={{ color: "#D4AF37", fontFamily: "DM Sans, sans-serif" }}
                    >
                      Aufgabenprofil
                    </h4>
                    <ul className="flex flex-col gap-3">
                      {[
                        "Unterstützung im digitalen Tagesgeschäft rund um Website, Lernplattform, Content, Marketing und interne Organisation",
                        "Mitarbeit an SEO-, GEO- und Website-Optimierungen (Keyword-Recherche, Meta-Daten, Onpage)",
                        "Pflege und Weiterentwicklung von Website- und Lernplattform-Inhalten",
                        "Erstellung und Überarbeitung von Texten für Website, Social Media und Präsentationen",
                        "Recherche und Aufbereitung von Themen rund um berufliche Bildung und Arbeitsmarkt",
                        "Unterstützung bei Marketing-, Kommunikations- und technischen Aufgaben",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div
                            className="mt-1 flex size-4 shrink-0 items-center justify-center rounded-full"
                            style={{ background: "#004B76" }}
                          >
                            <svg width="8" height="6" viewBox="0 0 10 8" fill="none">
                              <path d="M1 4l2.5 2.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <span style={{ fontSize: "0.875rem", color: "#475467", lineHeight: 1.6 }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Anforderungen */}
                  <div>
                    <h4
                      className="mb-5 text-[0.72rem] font-bold uppercase tracking-[0.12em]"
                      style={{ color: "#D4AF37", fontFamily: "DM Sans, sans-serif" }}
                    >
                      Das solltest du mitbringen
                    </h4>
                    <ul className="flex flex-col gap-3">
                      {[
                        "Student oder Berufseinsteiger mit Fokus auf Wirtschaft, Marketing oder IT",
                        "Interesse an digitalen Themen: Marketing, Website, Content, SEO und KI",
                        "Bereitschaft, dich eigenständig in neue Themenfelder einzuarbeiten",
                        "Zuverlässige, gründliche Arbeitsweise – auch bei kleinteiligen Aufgaben",
                        "Kommunikativ und in der Lage, deinen Fortschritt regelmäßig zu teilen",
                        "Sicherer Umgang mit Microsoft Office (Word, Excel, PowerPoint, Teams, SharePoint)",
                        "Mindestens 10 Stunden pro Woche verfügbar",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div
                            className="mt-1 flex size-4 shrink-0 items-center justify-center rounded-full"
                            style={{ background: "#004B76" }}
                          >
                            <svg width="8" height="6" viewBox="0 0 10 8" fill="none">
                              <path d="M1 4l2.5 2.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <span style={{ fontSize: "0.875rem", color: "#475467", lineHeight: 1.6 }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* About + CTA */}
                <div className="px-8 pb-10 md:px-10">
                  <div
                    className="mb-6 rounded-xl p-6"
                    style={{ background: "#f5f7f9", border: "1px solid #e5e7eb" }}
                  >
                    <h4
                      className="mb-3 text-[0.72rem] font-bold uppercase tracking-[0.12em]"
                      style={{ color: "#D4AF37", fontFamily: "DM Sans, sans-serif" }}
                    >
                      Über HalloSkills
                    </h4>
                    <p style={{ fontSize: "0.875rem", color: "#475467", lineHeight: 1.7 }}>
                      HalloSkills ist ein Träger für berufliche Erwachsenenbildung mit Ursprung in Hamburg. Als Anbieter hochwertiger Bildungslehrgänge helfen wir Erwachsenen dabei, ihren Wissenshorizont zu erweitern und sich besser in den Arbeitsmarkt zu integrieren. Mit einem jungen, wachsenden Team bringen wir frischen Wind in den Bildungsmarkt.
                    </p>
                  </div>
                  <a
                    href="#bewerben"
                    className="inline-block border-[1.5px] border-[#004B76] px-6 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.1em] text-[#004B76] transition-colors hover:bg-[#004B76] hover:text-white"
                  >
                    Jetzt bewerben →
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Formular */}
      <section id="bewerben" className="py-24" style={{ background: "#ffffff" }}>
        <div className="mx-auto max-w-[1200px] px-6 md:px-12">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">
            <div className="lg:pt-2">
              <h2
                className="mb-6"
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                  fontWeight: 400,
                  color: "#0f2744",
                }}
              >
                Wir suchen Menschen, die mitgestalten wollen.
              </h2>
              <p className="leading-[1.7]" style={{ color: "#475467" }}>
                Schreib uns, wer du bist und was dich antreibt. Wir freuen uns, von dir zu hören.
              </p>
            </div>
            <JobsForm />
          </div>
        </div>
      </section>
    </>
  );
}

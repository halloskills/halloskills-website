"use client";

import React, { useState } from "react";
import type { Metadata } from "next";

const bereiche = [
  {
    title: "Karriereberatung",
    body: "Du begleitest Menschen auf dem Weg in ihre neue Karriere — vom ersten Gespräch bis zur Vermittlung.",
    icon: "💬",
  },
  {
    title: "Education & Kursentwicklung",
    body: "Du entwickelst und verbesserst unsere Kurskonzepte und sorgst für hohe Lernqualität.",
    icon: "📚",
  },
  {
    title: "Marketing & Kommunikation",
    body: "Du bringst HalloSkills nach außen — digital, authentisch und nah an unserer Zielgruppe.",
    icon: "📣",
  },
  {
    title: "Produkt & Technologie",
    body: "Du gestaltest die digitale Infrastruktur und Lernplattform, auf der unsere Weiterbildungen laufen.",
    icon: "⚙️",
  },
];

function JobsForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const res = await fetch("https://formspree.io/f/mrerpgqa", {
      method: "POST",
      body: new FormData(e.currentTarget),
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
          Wir melden uns, sobald eine passende Stelle frei wird.
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
      <div className="relative">
        <select name="bereich" required defaultValue="" className={`${inputCls} appearance-none cursor-pointer`}>
          <option value="" disabled>Bereich der Initiativbewerbung *</option>
          <option value="beratung">Karriereberatung</option>
          <option value="education">Education & Kursentwicklung</option>
          <option value="marketing">Marketing & Kommunikation</option>
          <option value="tech">Produkt & Technologie</option>
          <option value="sonstiges">Sonstiges</option>
        </select>
        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#9ca3af]">⌄</span>
      </div>
      <textarea
        name="nachricht"
        required
        rows={4}
        placeholder="Warum möchtest du zu HalloSkills? *"
        className="w-full resize-none rounded-xl border border-[#d1d5db] bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[#004B76] placeholder:text-[#9ca3af]"
      />

      {/* CV Upload */}
      <div>
        <label className="mb-1.5 block text-[0.72rem] font-semibold uppercase tracking-[0.08em]" style={{ color: "#475467" }}>
          Lebenslauf anhängen (optional)
        </label>
        <input
          type="file"
          name="cv"
          accept=".pdf,.doc,.docx"
          className="w-full rounded-xl border border-[#d1d5db] bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-[#004B76] file:mr-4 file:rounded-lg file:border-0 file:bg-[#004B76] file:px-3 file:py-1 file:text-xs file:font-semibold file:text-white file:cursor-pointer"
        />
        <p className="mt-1.5 text-[0.75rem]" style={{ color: "#9ca3af" }}>PDF, DOC oder DOCX · max. 5 MB</p>
      </div>

      <label className="flex items-start gap-3 cursor-pointer pt-1">
        <input type="checkbox" name="dsgvo" required className="mt-0.5 shrink-0 accent-[#004B76]" />
        <span style={{ fontSize: "0.8rem", color: "#475467", lineHeight: 1.6 }}>
          Ich willige ein, dass HalloSkills meine Daten zur Bearbeitung meiner Bewerbung speichert und mich kontaktiert. Weitere Infos in der{" "}
          <a href="/datenschutz" style={{ color: "#004B76", textDecoration: "underline" }}>Datenschutzerklärung</a>. *
        </span>
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-2 w-full rounded-xl border-[1.5px] border-[#004B76] px-7 py-3.5 text-[0.8rem] font-semibold uppercase tracking-[0.1em] transition-colors hover:bg-[#004B76] hover:text-white disabled:opacity-50"
        style={{ color: "#004B76" }}
      >
        {status === "sending" ? "Wird gesendet …" : "Initiativbewerbung absenden"}
      </button>
      {status === "error" && (
        <p className="text-sm" style={{ color: "#dc2626" }}>Etwas ist schiefgelaufen. Bitte versuche es erneut.</p>
      )}
    </form>
  );
}

export default function JobsPage() {
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
              Wir sind noch am Anfang — und genau das macht es spannend. Wenn du Teil von etwas Neuem sein willst, freuen wir uns von dir zu hören.
            </p>
          </div>
        </div>
      </section>

      {/* Bereiche */}
      <section className="py-24" style={{ background: "#f5f7f9" }}>
        <div className="mx-auto max-w-[1200px] px-6 md:px-12">
          <div className="mb-14 text-center">
            <span
              className="mb-5 block text-[0.75rem] font-bold uppercase tracking-[0.12em]"
              style={{ color: "#D4AF37" }}
            >
              Offene Bereiche
            </span>
            <h2
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                fontWeight: 400,
                color: "#0f2744",
              }}
            >
              Wo könntest du dich einbringen?
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {bereiche.map((b) => (
              <div
                key={b.title}
                className="rounded-xl bg-white p-8"
                style={{ border: "1px solid #e5e7eb" }}
              >
                <div className="mb-4 text-2xl">{b.icon}</div>
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: "1.1rem",
                    fontWeight: 400,
                    color: "#0f2744",
                  }}
                >
                  {b.title}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "#475467", lineHeight: 1.7 }}>{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formular */}
      <section className="py-24" style={{ background: "#ffffff" }}>
        <div className="mx-auto max-w-[1200px] px-6 md:px-12">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">
            <div className="lg:pt-2">
              <span
                className="mb-5 block text-[0.75rem] font-bold uppercase tracking-[0.12em]"
                style={{ color: "#D4AF37" }}
              >
                Initiativbewerbung
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
                Zeig uns, wer du bist.
              </h2>
              <p className="leading-[1.7]" style={{ color: "#475467" }}>
                Schreib uns, wer du bist und warum du zu HalloSkills passt — hänge gerne deinen Lebenslauf an. Wir melden uns, sobald eine passende Stelle frei wird.
              </p>
            </div>
            <JobsForm />
          </div>
        </div>
      </section>
    </>
  );
}

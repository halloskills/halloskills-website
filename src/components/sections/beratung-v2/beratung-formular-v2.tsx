"use client";

import React, { useState } from "react";
import { LEHRGANG_OPTIONEN } from "@/lib/beratung-neu-data";

/**
 * Formspree-Endpoint und Feldnamen unverändert aus der bestehenden
 * /beratung-buchen-Seite übernommen — nur Optik (hs-v2 Tokens) und die
 * "interesse"-Auswahl (jetzt die drei aktuellen Lehrgänge statt der alten
 * Kurse) sind neu.
 */
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mrerpgqa";

const inputCls =
  "w-full rounded-hs-input border border-hs-line bg-white px-4 py-3 text-[0.9rem] text-hs-navy outline-none transition-colors focus:border-hs-violet placeholder:text-hs-muted";
const selectCls = `${inputCls} appearance-none cursor-pointer`;

function PfeilUnten() {
  return (
    <svg
      width="12"
      height="7"
      viewBox="0 0 12 7"
      fill="none"
      aria-hidden="true"
      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-hs-muted"
    >
      <path
        d="M1 1l5 4.5L11 1"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BeratungFormularV2() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      body: new FormData(e.currentTarget),
      headers: { Accept: "application/json" },
    });
    setStatus(res.ok ? "success" : "error");
  }

  if (status === "success") {
    return (
      <div className="flex min-h-[340px] flex-col items-center justify-center rounded-hs-card border border-hs-line bg-white p-10 text-center shadow-hs-soft">
        <span className="mb-4 flex size-14 items-center justify-center rounded-full bg-hs-pink/10 text-hs-pink">
          <svg width="24" height="20" viewBox="0 0 22 18" fill="none">
            <path
              d="M1 9l6 6L21 1"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <h3 className="text-[1.2rem] font-[600] text-hs-navy">Vielen Dank!</h3>
        <p className="mt-3 text-[0.9rem] leading-[1.7] text-hs-body">
          Wir haben deine Anfrage erhalten und melden uns
          <br />
          innerhalb von 24 Stunden bei dir.
        </p>
      </div>
    );
  }

  return (
    <form
      id="formular"
      onSubmit={handleSubmit}
      className="scroll-mt-28 flex flex-col gap-4 rounded-hs-card border border-hs-line bg-white p-8 shadow-hs-soft"
    >
      <div className="grid grid-cols-2 gap-4">
        <input type="text" name="vorname" required placeholder="Vorname *" className={inputCls} />
        <input type="text" name="nachname" required placeholder="Nachname *" className={inputCls} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <input type="email" name="email" required placeholder="E-Mail *" className={inputCls} />
        <input type="text" name="plz" placeholder="Postleitzahl" className={inputCls} />
      </div>
      <input type="tel" name="telefon" required placeholder="Telefonnummer *" className={inputCls} />

      <div className="relative">
        <select name="situation" required defaultValue="" className={selectCls}>
          <option value="" disabled>
            Ich bin aktuell... *
          </option>
          <option value="arbeitslos">Arbeitslos gemeldet</option>
          <option value="kuendigung">Von Kündigung bedroht</option>
          <option value="in-arbeit">Noch in Arbeit</option>
          <option value="sonstiges">Sonstiges</option>
        </select>
        <PfeilUnten />
      </div>

      <div className="relative">
        <select name="bildungsgutschein" required defaultValue="" className={selectCls}>
          <option value="" disabled>
            Hast du bereits einen Bildungsgutschein? *
          </option>
          <option value="ja">Ja, ich habe bereits einen</option>
          <option value="nein-beantragen">Nein, möchte einen beantragen</option>
          <option value="weiss-nicht">Ich weiß nicht, wie das geht</option>
        </select>
        <PfeilUnten />
      </div>

      <div className="relative">
        <select name="interesse" required defaultValue="" className={selectCls}>
          <option value="" disabled>
            Für welchen Lehrgang interessierst du dich? *
          </option>
          {LEHRGANG_OPTIONEN.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <PfeilUnten />
      </div>

      <textarea
        name="nachricht"
        rows={3}
        placeholder="Deine Nachricht"
        className="w-full resize-none rounded-hs-input border border-hs-line bg-white px-4 py-3 text-[0.9rem] text-hs-navy outline-none transition-colors focus:border-hs-violet placeholder:text-hs-muted"
      />

      <label className="flex cursor-pointer items-start gap-3 pt-1">
        <input
          type="checkbox"
          name="dsgvo"
          required
          className="mt-0.5 shrink-0 accent-hs-violet"
        />
        <span className="text-[0.8rem] leading-[1.6] text-hs-muted">
          Ich willige ein, dass HalloSkills meine personenbezogenen Daten verarbeitet, um mich
          telefonisch und per E-Mail zu kontaktieren. Weitere Informationen findest du in
          unserer{" "}
          <a href="/datenschutz" className="text-hs-blue underline">
            Datenschutzerklärung
          </a>
          . *
        </span>
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-hs-navy px-7 py-3.5 text-[0.875rem] font-[600] text-white transition-all duration-200 hover:bg-hs-pink disabled:opacity-50"
      >
        {status === "sending" ? "Wird gesendet …" : "Jetzt Beratung anfragen"}
        {status !== "sending" && <span aria-hidden="true">→</span>}
      </button>

      {status === "error" && (
        <p className="text-[0.85rem] text-hs-pink">
          Etwas ist schiefgelaufen. Bitte versuche es erneut.
        </p>
      )}
    </form>
  );
}

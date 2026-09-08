"use client";

import React, { useState } from "react";

/**
 * Formspree-Endpoint unverändert aus der bestehenden /beratung-buchen-Seite
 * übernommen. Die Fragen selbst wurden komplett neu festgelegt (Situation,
 * Ansprechperson bei der Agentur für Arbeit, Fachbereich, Deutschkenntnisse,
 * Kontaktdaten) — die Formspree-Feldnamen sind entsprechend neu und weichen
 * von der alten Version ab. Falls es Formspree-seitige Automatisierungen
 * (Zapier, Benachrichtigungs-Templates) gibt, die auf die alten Feldnamen
 * (situation/bildungsgutschein/interesse/nachricht) keyen, müssen die dort
 * nachgezogen werden.
 */
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mrerpgqa";

type Antworten = {
  situation: string;
  ansprechperson: string;
  fachbereich: string;
  deutsch: string;
};

const SCHRITTE = [
  {
    key: "situation" as const,
    frage: "Wie ist deine aktuelle Situation?",
    optionen: [
      { value: "arbeitssuchend", label: "Arbeitssuchend" },
      { value: "kuendigung-bedroht", label: "Von Kündigung bedroht" },
      { value: "kurzarbeit", label: "In Kurzarbeit" },
      { value: "angestellt", label: "Angestellt" },
    ],
  },
  {
    key: "ansprechperson" as const,
    frage: "Hast du bereits eine feste Ansprechperson bei der Agentur für Arbeit?",
    optionen: [
      { value: "ja", label: "Ja" },
      { value: "nein", label: "Nein" },
    ],
  },
  {
    key: "fachbereich" as const,
    frage: "Welcher Fachbereich interessiert dich?",
    optionen: [
      { value: "bueromanagement", label: "Büromanagement" },
      { value: "industrie", label: "Industrie" },
      { value: "bankwesen", label: "Bankwesen" },
      { value: "anderes", label: "Anderes Fachgebiet" },
    ],
  },
  {
    key: "deutsch" as const,
    frage: "Wie gut sprichst du Deutsch?",
    optionen: [
      { value: "muttersprache", label: "Muttersprache (C1 – C2)" },
      { value: "gut", label: "Gut (B2)" },
      { value: "in-ordnung", label: "In Ordnung (B1)" },
      { value: "anfaenger", label: "Anfänger (A1 – A2)" },
    ],
  },
];

const ANZAHL_SCHRITTE = SCHRITTE.length + 1; // + Kontaktdaten-Schritt

const inputCls =
  "w-full rounded-hs-input border border-hs-line bg-white px-4 py-3 text-[0.9rem] text-hs-navy outline-none transition-colors focus:border-hs-violet placeholder:text-hs-muted";

function HakenKreis() {
  return (
    <span
      aria-hidden="true"
      className="mb-4 flex size-14 items-center justify-center rounded-full bg-hs-pink/10 text-hs-pink"
    >
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
  );
}

export function BeratungFormularV2() {
  const [schritt, setSchritt] = useState(0);
  const [antworten, setAntworten] = useState<Antworten>({
    situation: "",
    ansprechperson: "",
    fachbereich: "",
    deutsch: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const istKontaktSchritt = schritt === SCHRITTE.length;

  function waehleOption(key: keyof Antworten, value: string) {
    setAntworten((a) => ({ ...a, [key]: value }));
    window.setTimeout(() => setSchritt((s) => s + 1), 220);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.currentTarget);
    formData.set("situation", antworten.situation);
    formData.set("ansprechperson", antworten.ansprechperson);
    formData.set("fachbereich", antworten.fachbereich);
    formData.set("deutschkenntnisse", antworten.deutsch);
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });
    setStatus(res.ok ? "success" : "error");
  }

  if (status === "success") {
    return (
      <div
        id="formular"
        className="scroll-mt-28 flex min-h-[420px] flex-col items-center justify-center rounded-hs-card border border-hs-line bg-white p-10 text-center shadow-hs-soft"
      >
        <HakenKreis />
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
    <div
      id="formular"
      className="scroll-mt-28 rounded-hs-card border border-hs-line bg-white p-8 shadow-hs-soft"
    >
      {/* Fortschritt */}
      <div className="mb-7">
        <div className="mb-2.5 flex items-center justify-between text-[0.75rem] font-[600] text-hs-muted">
          <span>
            Schritt {schritt + 1} von {ANZAHL_SCHRITTE}
          </span>
          {schritt > 0 && (
            <button
              type="button"
              onClick={() => setSchritt((s) => s - 1)}
              className="text-hs-navy underline-offset-2 hover:underline"
            >
              ← Zurück
            </button>
          )}
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-hs-soft">
          <div
            className="h-full rounded-full bg-gradient-to-r from-hs-violet to-hs-pink transition-all duration-300"
            style={{ width: `${((schritt + 1) / ANZAHL_SCHRITTE) * 100}%` }}
          />
        </div>
      </div>

      {!istKontaktSchritt ? (
        <div>
          <h3 className="text-[1.15rem] font-[600] leading-[1.3] text-hs-navy">
            {SCHRITTE[schritt].frage}
          </h3>
          <div className="mt-5 grid grid-cols-2 gap-3">
            {SCHRITTE[schritt].optionen.map((opt) => {
              const key = SCHRITTE[schritt].key;
              const aktiv = antworten[key] === opt.value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => waehleOption(key, opt.value)}
                  className={`rounded-hs-input border px-4 py-4 text-left text-[0.9rem] font-[500] transition-colors duration-150 ${
                    aktiv
                      ? "border-hs-violet bg-hs-violet/5 text-hs-navy"
                      : "border-hs-line text-hs-body hover:border-hs-violet hover:text-hs-navy"
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <h3 className="text-[1.15rem] font-[600] leading-[1.3] text-hs-navy">
            Wie erreichen wir dich?
          </h3>

          <input type="hidden" name="situation" value={antworten.situation} />
          <input type="hidden" name="ansprechperson" value={antworten.ansprechperson} />
          <input type="hidden" name="fachbereich" value={antworten.fachbereich} />
          <input type="hidden" name="deutschkenntnisse" value={antworten.deutsch} />

          <div className="grid grid-cols-2 gap-4">
            <input type="text" name="vorname" required placeholder="Vorname *" className={inputCls} />
            <input
              type="text"
              name="nachname"
              required
              placeholder="Nachname *"
              className={inputCls}
            />
          </div>
          <input
            type="tel"
            name="telefon"
            required
            placeholder="Telefonnummer *"
            className={inputCls}
          />
          <input type="email" name="email" required placeholder="E-Mail *" className={inputCls} />

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
      )}
    </div>
  );
}

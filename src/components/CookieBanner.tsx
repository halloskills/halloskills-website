"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

type ConsentState = {
  analytics: boolean;
  marketing: boolean;
};

const COOKIE_KEY = "halloskills_consent";

function loadConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(COOKIE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function saveConsent(state: ConsentState) {
  localStorage.setItem(COOKIE_KEY, JSON.stringify(state));
  // Feuert GTM dataLayer Event – GTM muss noch eingebunden werden
  if (typeof window !== "undefined" && (window as any).dataLayer) {
    (window as any).dataLayer.push({ event: "consent_update", consent: state });
  }
}

export function CookieBanner() {
  const [show, setShow] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const existing = loadConsent();
    if (!existing) setShow(true);
  }, []);

  if (!show) return null;

  const acceptAll = () => {
    saveConsent({ analytics: true, marketing: true });
    setShow(false);
  };

  const rejectAll = () => {
    saveConsent({ analytics: false, marketing: false });
    setShow(false);
  };

  const saveCustom = () => {
    saveConsent({ analytics, marketing });
    setShow(false);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Cookie-Einstellungen"
      className="fixed bottom-0 left-0 right-0 z-[9999] border-t border-neutral-lighter bg-white p-5 shadow-lg md:bottom-4 md:left-4 md:right-auto md:max-w-sm md:rounded-lg md:border"
    >
      {!showDetails ? (
        <>
          <p className="mb-1 font-semibold text-neutral-darkest">Deine Privatsphäre</p>
          <p className="mb-4 text-small text-neutral-dark">
            Wir nutzen Cookies für ein besseres Erlebnis und zur Analyse. Mehr dazu in
            unserer{" "}
            <Link href="/datenschutz" className="underline hover:text-regal-blue">
              Datenschutzerklärung
            </Link>
            .
          </p>
          <div className="flex flex-col gap-2">
            <button
              onClick={acceptAll}
              className="w-full rounded-md bg-regal-blue px-4 py-2 font-semibold text-white hover:bg-regal-blue-dark transition-colors"
            >
              Alle akzeptieren
            </button>
            <button
              onClick={rejectAll}
              className="w-full rounded-md border border-neutral-lighter px-4 py-2 font-semibold text-neutral-darkest hover:bg-neutral-lightest transition-colors"
            >
              Nur notwendige
            </button>
            <button
              onClick={() => setShowDetails(true)}
              className="text-small underline text-neutral-dark hover:text-regal-blue"
            >
              Einstellungen anpassen
            </button>
          </div>
        </>
      ) : (
        <>
          <p className="mb-3 font-semibold text-neutral-darkest">Cookie-Einstellungen</p>
          <div className="mb-4 flex flex-col gap-3">
            <label className="flex items-center justify-between gap-4">
              <div>
                <p className="font-medium text-small">Notwendig</p>
                <p className="text-tiny text-neutral-dark">Immer aktiv</p>
              </div>
              <input type="checkbox" checked disabled className="accent-regal-blue" />
            </label>
            <label className="flex items-center justify-between gap-4 cursor-pointer">
              <div>
                <p className="font-medium text-small">Analyse (Google Analytics)</p>
                <p className="text-tiny text-neutral-dark">Hilft uns die Website zu verbessern</p>
              </div>
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                className="accent-regal-blue"
              />
            </label>
            <label className="flex items-center justify-between gap-4 cursor-pointer">
              <div>
                <p className="font-medium text-small">Marketing (HubSpot)</p>
                <p className="text-tiny text-neutral-dark">Für personalisierte Inhalte</p>
              </div>
              <input
                type="checkbox"
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
                className="accent-regal-blue"
              />
            </label>
          </div>
          <div className="flex gap-2">
            <button
              onClick={saveCustom}
              className="flex-1 rounded-md bg-regal-blue px-4 py-2 font-semibold text-white hover:bg-regal-blue-dark transition-colors"
            >
              Speichern
            </button>
            <button
              onClick={() => setShowDetails(false)}
              className="rounded-md border border-neutral-lighter px-3 py-2 text-small text-neutral-darkest hover:bg-neutral-lightest"
            >
              Zurück
            </button>
          </div>
        </>
      )}
    </div>
  );
}

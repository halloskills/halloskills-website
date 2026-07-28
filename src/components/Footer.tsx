"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const cols = [
  {
    heading: "Kurse",
    links: [
      { label: "Projektmanagement", href: "/kurse/projektmanagement" },
      { label: "Online Marketing", href: "/kurse/online-marketing" },
      { label: "KI & Digitalisierung", href: "/kurse/ki-digitalisierung" },
      { label: "Alle Kurse", href: "/kurse" },
    ],
  },
  {
    heading: "Unternehmen",
    links: [
      { label: "Magazin", href: "/blog" },
      { label: "Bildungsgutschein", href: "/bildungsgutschein" },
      { label: "Beratung buchen", href: "/beratung-buchen" },
      { label: "Jobs", href: "/jobs" },
    ],
  },
];

export function Footer4() {
  return (
    <footer style={{ background: "#111827", padding: "80px 0 40px" }}>
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        {/* Top grid */}
        <div
          className="grid grid-cols-1 gap-10 pb-16 md:grid-cols-[2fr_1fr_1fr] md:gap-14"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
        >
          {/* Brand column */}
          <div>
            <Image
              src="/images/logo-weiss.svg"
              alt="HalloSkills"
              width={160}
              height={50}
              className="mb-6 h-10 w-auto"
            />
            <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, maxWidth: 320 }}>
              Geförderte Online-Weiterbildungen für einen Job mit Zukunftsperspektive.
              Mit Bildungsgutschein förderbar.
            </p>
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div key={col.heading}>
              <h4
                style={{
                  fontFamily: "DM Sans, sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#D4AF37",
                  marginBottom: "24px",
                }}
              >
                {col.heading}
              </h4>
              <ul className="flex flex-col gap-4">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.7)" }}
                      className="transition-colors hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-start justify-between gap-4 pt-8 md:flex-row md:items-center">
          <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.35)" }}>
            © 2026 HalloSkills. Alle Rechte vorbehalten.
          </p>
          <div className="flex flex-wrap gap-6">
            {[
              { label: "Datenschutz", href: "/datenschutz" },
              { label: "Impressum", href: "/impressum" },
              { label: "AGB", href: "/agb" },
            ].map((l) => (
              <Link
                key={l.label}
                href={l.href}
                style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.35)" }}
                className="transition-colors hover:text-white"
              >
                {l.label}
              </Link>
            ))}
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("halloskills:open-cookie"))}
              style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.35)", background: "none", border: "none", padding: 0, cursor: "pointer" }}
              className="transition-colors hover:text-white"
            >
              Cookie-Einstellungen
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

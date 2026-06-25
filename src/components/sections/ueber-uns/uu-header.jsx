"use client";

import React from "react";

export function UeberUnsHeader() {
  return (
    <section
      className="relative flex min-h-[55vh] items-center overflow-hidden"
      style={{ backgroundColor: "#004B76" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bilder/standorte.png')", opacity: 0.25 }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.2) 100%)" }}
      />
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 py-16 md:px-12 md:py-24">
        <div className="max-w-[640px]">
          <span
            className="mb-5 block text-[0.75rem] font-semibold uppercase tracking-[0.12em]"
            style={{ color: "#D4AF37" }}
          >
            Über HalloSkills
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
            Weiterbildung, die{" "}
            <em style={{ fontStyle: "italic" }}>wirklich ankommt.</em>
          </h1>
          <p
            className="leading-[1.7]"
            style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.05rem", maxWidth: 520 }}
          >
            HalloSkills wurde gegründet, um Arbeitssuchenden die digitalen Skills zu geben,
            die der Arbeitsmarkt heute wirklich braucht – kostenlos, persönlich, mit echtem Ergebnis.
          </p>
        </div>
      </div>
    </section>
  );
}

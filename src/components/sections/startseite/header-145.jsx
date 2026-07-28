"use client";

import Link from "next/link";
import React from "react";

export function Header145() {
  return (
    <section
      className="relative flex min-h-[92vh] items-center overflow-hidden"
      style={{ backgroundColor: "#004B76" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bilder/hero.png')", opacity: 0.92 }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.25) 55%, rgba(0,0,0,0) 100%)",
        }}
      />
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 md:px-12">
        <div className="max-w-[560px]">
          <span
            className="mb-5 block text-[0.75rem] font-bold uppercase tracking-[0.12em]"
            style={{ color: "#D4AF37" }}
          >
            100% Kostenfrei · Staatlich gefördert
          </span>
          <h1
            className="mb-5 leading-[1.1] text-white"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontWeight: 400,
              fontSize: "clamp(2.4rem, 5vw, 3.75rem)",
              letterSpacing: "-0.08rem",
            }}
          >
            Dein digitaler Karrieresprung,{" "}
            <em style={{ fontStyle: "italic" }}>100% kostenlos.</em>
          </h1>
          <p
            className="mb-9 max-w-[460px] leading-[1.7]"
            style={{ color: "rgba(255,255,255,0.85)", fontSize: "1rem" }}
          >
            Bei HalloSkills erlangst du Aufstiegschancen bequem im Homeoffice. Du findest
            bei uns spannende Online-Weiterbildungen für deinen Traumjob. Flexibel,
            praxisnah und über den Bildungsgutschein finanzierbar.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/beratung-buchen"
              className="inline-block border-[1.5px] border-white bg-white px-7 py-3 text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-[#111827] transition-colors hover:bg-transparent hover:text-white"
            >
              Kostenlose Beratung
            </Link>
            <Link
              href="/kurse"
              className="inline-block border-[1.5px] border-white bg-transparent px-7 py-3 text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-white hover:text-[#111827]"
            >
              Weiterbildungen entdecken
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

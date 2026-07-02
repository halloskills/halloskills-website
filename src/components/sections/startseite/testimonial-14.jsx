"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const team = [
  {
    name: "Heiko",
    role: "Geschäftsführung",
    img: "/images/team/heiko.png",
  },
  {
    name: "Yvonne",
    role: "Bildungsleitung",
    img: "/images/team/andrea.png",
  },
  {
    name: "Severin",
    role: "Qualitätsmanagement",
    img: "/images/team/konrad.png",
  },
  {
    name: "Nina",
    role: "Produkt & Marketing",
    img: "/images/team/nina.png",
  },
  {
    name: "Christina",
    role: "Karriereberatung",
    img: "/images/team/christina.png",
  },
  {
    name: "Christian",
    role: "Administration",
    img: "/images/team/christian.png",
  },
];

export function Testimonial14() {
  const [offset, setOffset] = useState(0);
  const [visible, setVisible] = useState(4);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setVisible(1);
      else if (window.innerWidth < 1024) setVisible(2);
      else setVisible(4);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxOffset = Math.max(0, team.length - visible);

  return (
    <section className="pt-24 pb-0" style={{ background: "#004B76" }}>
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        {/* Header */}
        <div className="mb-16" style={{ maxWidth: 680 }}>
          <span
            className="mb-5 block text-[0.75rem] font-bold uppercase tracking-[0.12em]"
            style={{ color: "#D4AF37" }}
          >
            Unser Team
          </span>
          <h2
            className="mb-5"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
              fontWeight: 400,
              color: "#ffffff",
            }}
          >
            Wir bieten einen entspannten Einstieg in die digitale Arbeitswelt
          </h2>
          <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}>
            Wir sind überzeugt, dass sich qualitativ hochwertige Bildung mit den Anforderungen
            der modernen Arbeitswelt verbinden lässt. Mit unseren Weiterbildungen bieten wir
            Teilnehmenden frische Perspektiven, Future Skills und eine spannende Lernatmosphäre.
          </p>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden">
          <div
            className="flex"
            style={{
              gap: 48,
              transform: `translateX(calc(-${offset} * (100% / ${visible} + ${48 / visible}px)))`,
              transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1)",
            }}
          >
            {team.map((person) => (
              <div
                key={person.name}
                className="shrink-0 text-left"
                style={{ flex: `0 0 calc(${100 / visible}% - ${(48 * (visible - 1)) / visible}px)` }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <img
                    src={person.img}
                    alt={person.name}
                    className="object-cover object-top shrink-0"
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      border: "1.5px solid rgba(255,255,255,0.2)",
                    }}
                  />
                  <div>
                    <div
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "#ffffff",
                        marginBottom: 3,
                      }}
                    >
                      {person.name}
                    </div>
                    <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.65)", fontWeight: 400 }}>
                      {person.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nav arrows */}
        <div className="mt-12 flex justify-end gap-3">
          <button
            onClick={() => setOffset((o) => Math.max(0, o - 1))}
            disabled={offset === 0}
            className="flex items-center justify-center transition-colors"
            style={{
              width: 52,
              height: 52,
              borderRadius: "50%",
              border: "1.5px solid rgba(255,255,255,0.7)",
              background: "transparent",
              color: "#ffffff",
              fontSize: "1.1rem",
              cursor: offset === 0 ? "default" : "pointer",
              opacity: offset === 0 ? 0.2 : 1,
            }}
          >
            ←
          </button>
          <button
            onClick={() => setOffset((o) => Math.min(maxOffset, o + 1))}
            disabled={offset === maxOffset}
            className="flex items-center justify-center transition-colors"
            style={{
              width: 52,
              height: 52,
              borderRadius: "50%",
              border: "1.5px solid rgba(255,255,255,0.7)",
              background: "transparent",
              color: "#ffffff",
              fontSize: "1.1rem",
              cursor: offset === maxOffset ? "default" : "pointer",
              opacity: offset === maxOffset ? 0.2 : 1,
            }}
          >
            →
          </button>
        </div>

        {/* Hiring box */}
        <div className="mt-16 pb-24">
          <div
            className="flex flex-col items-start justify-between gap-8 rounded-xl p-8 md:flex-row md:items-center"
            style={{ background: "#ffffff" }}
          >
            <div>
              <span
                className="mb-2 block text-[0.75rem] font-bold uppercase tracking-[0.12em]"
                style={{ color: "#D4AF37" }}
              >
                Wir stellen ein!
              </span>
              <p style={{ fontSize: "0.95rem", color: "#475467", maxWidth: 560 }}>
                Werde Teil unseres Teams und gestalte mit uns die Zukunft der geförderten Weiterbildung. Wir freuen uns auf Menschen, die etwas bewegen möchten.
              </p>
            </div>
            <Link
              href="/jobs"
              className="shrink-0 border-[1.5px] border-[#004B76] px-7 py-3 text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-[#004B76] transition-colors hover:bg-[#004B76] hover:text-white"
            >
              Jetzt bewerben
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

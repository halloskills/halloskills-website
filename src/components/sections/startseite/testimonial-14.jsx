"use client";

import Link from "next/link";
import React from "react";

const team = [
  {
    name: "Nina Eglinsky",
    role: "IT Lead",
    bio: "Verantwortlich für die digitale Infrastruktur und Lernplattform von HalloSkills.",
    img: "/images/team/nina.png",
  },
  {
    name: "Andrea Müller",
    role: "Head of Beratung",
    bio: "Begleitet Teilnehmende von der ersten Beratung bis zum Jobstart – persönlich und engagiert.",
    img: "/images/team/andrea.png",
  },
  {
    name: "Christian Bauer",
    role: "Head of Education",
    bio: "Entwickelt Kursinhalte, die praxisnah und aktuell sind – immer am Puls des Arbeitsmarkts.",
    img: "/images/team/christian.png",
  },
];

export function Testimonial14() {
  return (
    <section className="py-24" style={{ background: "#004B76" }}>
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span
              className="mb-5 block text-[0.75rem] font-semibold uppercase tracking-[0.12em]"
              style={{ color: "#D4AF37" }}
            >
              Das Team
            </span>
            <h2
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                fontWeight: 400,
                color: "#ffffff",
              }}
            >
              Menschen hinter HalloSkills
            </h2>
          </div>
          <Link
            href="mailto:jobs@halloskills.de"
            className="shrink-0 border-[1.5px] border-white px-7 py-3 text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-white hover:text-[#111827]"
          >
            Join the team →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {team.map((person) => (
            <div
              key={person.name}
              className="flex flex-col items-center rounded-xl p-8 text-center"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}
            >
              <div className="mb-5 overflow-hidden rounded-full" style={{ width: 96, height: 96 }}>
                <img
                  src={person.img}
                  alt={person.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3
                className="mb-1 text-[0.75rem] font-semibold uppercase tracking-[0.1em]"
                style={{ color: "#ffffff" }}
              >
                {person.name}
              </h3>
              <p className="mb-4 text-[0.8rem]" style={{ color: "rgba(255,255,255,0.5)" }}>
                {person.role}
              </p>
              <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>
                {person.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

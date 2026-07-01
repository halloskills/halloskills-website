"use client";

import Link from "next/link";
import React from "react";
import { POSTS } from "@/lib/blog-data";

const posts = POSTS.slice(0, 3);

export function Blog40() {
  return (
    <section className="py-24" style={{ background: "#ffffff" }}>
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        {/* Header row */}
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span
              className="mb-4 block text-[0.75rem] font-bold uppercase tracking-[0.12em]"
              style={{ color: "#D4AF37" }}
            >
              Blog
            </span>
            <h2
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                fontWeight: 400,
                color: "#0f2744",
              }}
            >
              Wissen für deinen Karriereschritt
            </h2>
          </div>
          <Link
            href="/blog"
            className="shrink-0 border-b border-[#111827] pb-0.5 text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-[#111827] transition-colors hover:border-regal-blue hover:text-regal-blue"
          >
            Alle Beiträge lesen →
          </Link>
        </div>

        {/* Post grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {posts.map((p) => (
            <article key={p.slug} className="group flex flex-col">
              <Link href={`/blog/${p.slug}`}>
                <div
                  className="mb-6 overflow-hidden rounded-xl bg-[#f5f7f9]"
                  style={{ aspectRatio: "3/2" }}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
              </Link>
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="text-[0.7rem] font-bold uppercase tracking-[0.1em]"
                  style={{ color: "#004B76" }}
                >
                  {p.category}
                </span>
                <span className="text-[0.8rem]" style={{ color: "#475467" }}>{p.readingTime} Lesezeit</span>
              </div>
              <Link href={`/blog/${p.slug}`}>
                <h3
                  className="mb-3 transition-colors group-hover:text-regal-blue"
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: "1.1rem",
                    fontWeight: 400,
                    color: "#0f2744",
                    lineHeight: 1.4,
                  }}
                >
                  {p.title}
                </h3>
              </Link>
              <p className="mb-5 flex-1 text-sm leading-relaxed" style={{ color: "#475467" }}>
                {p.excerpt}
              </p>
              <Link
                href={`/blog/${p.slug}`}
                className="border-b border-[#111827] pb-0.5 text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#111827] transition-colors hover:border-regal-blue hover:text-regal-blue w-fit"
              >
                Lesen →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { POSTS, calcReadingTime } from "@/lib/blog-data";
import React, { useState } from "react";

const CATEGORIES = ["Alle", ...Array.from(new Set(POSTS.map((p) => p.category)))];
const PAGE_SIZE = 6;

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("Alle");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered = activeCategory === "Alle"
    ? POSTS
    : POSTS.filter((p) => p.category === activeCategory);

  const featured = filtered[0];
  const rest = filtered.slice(1);
  const visibleRest = rest.slice(0, visibleCount - 1);
  const hasMore = visibleCount - 1 < rest.length;

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setVisibleCount(PAGE_SIZE);
  };

  return (
    <>
      {/* Header */}
      <section
        className="relative flex min-h-[48vh] items-center overflow-hidden"
        style={{ backgroundColor: "#004B76" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/bilder/managerin-schwarzer-pullover-imac.png')", opacity: 0.2 }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 100%)" }}
        />
        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 py-12 md:px-12 md:py-20">
          <span
            className="mb-5 block text-[0.75rem] font-bold uppercase tracking-[0.12em]"
            style={{ color: "#D4AF37" }}
          >
            Magazin
          </span>
          <h1
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
              color: "#ffffff",
              lineHeight: 1.2,
            }}
          >
            Dein Ratgeber für{" "}
            <em style={{ fontStyle: "italic" }}>Weiterbildung & Neustart.</em>
          </h1>
        </div>
      </section>

      {/* Category filter */}
      <div className="sticky top-[64px] z-10 border-b border-[#e5e7eb] bg-white/95 backdrop-blur-sm">
        <div className="mx-auto max-w-[1200px] overflow-x-auto px-6 md:px-12">
          <div className="flex gap-2 py-4">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className="shrink-0 rounded-full px-5 py-2 text-[0.78rem] font-semibold uppercase tracking-[0.06em] transition-colors"
                style={
                  activeCategory === cat
                    ? { background: "#004B76", color: "#ffffff" }
                    : { background: "transparent", color: "#475467", border: "1px solid #e5e7eb" }
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-16" style={{ background: "#f5f7f9" }}>
        <div className="mx-auto max-w-[1200px] px-6 md:px-12">
          {filtered.length === 0 && (
            <p className="py-20 text-center" style={{ color: "#475467" }}>
              Keine Beiträge in dieser Kategorie.
            </p>
          )}

          {/* Featured */}
          {featured && (
            <Link
              href={`/blog/${featured.slug}`}
              className="group mb-8 grid grid-cols-1 overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md lg:grid-cols-2"
            >
              <img
                src={featured.image}
                alt={featured.title}
                className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02] lg:aspect-auto lg:h-full"
              />
              <div className="flex flex-col justify-center p-10">
                <div className="mb-4 flex items-center gap-3">
                  <span
                    className="rounded-full px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.1em]"
                    style={{ background: "#004B76", color: "#fff" }}
                  >
                    {featured.category}
                  </span>
                  <span style={{ fontSize: "0.8rem", color: "#475467" }}>
                    {calcReadingTime(featured.content)}
                  </span>
                </div>
                <h2
                  className="mb-4"
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
                    fontWeight: 400,
                    color: "#0f2744",
                    lineHeight: 1.3,
                  }}
                >
                  {featured.title}
                </h2>
                <p className="mb-6 leading-[1.7]" style={{ fontSize: "0.9rem", color: "#475467" }}>
                  {featured.excerpt}
                </p>
                <span
                  className="border-b pb-0.5 text-[0.8rem] font-semibold uppercase tracking-[0.1em] transition-colors"
                  style={{ borderColor: "#111827", color: "#111827", width: "fit-content" }}
                >
                  Lesen →
                </span>
              </div>
            </Link>
          )}

          {/* Grid */}
          {visibleRest.length > 0 && (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {visibleRest.map((post) => (
                <article key={post.slug} className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-md">
                  <Link href={`/blog/${post.slug}`}>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-3 flex items-center gap-3">
                      <span
                        className="text-[0.68rem] font-bold uppercase tracking-[0.1em]"
                        style={{ color: "#004B76" }}
                      >
                        {post.category}
                      </span>
                      <span style={{ fontSize: "0.78rem", color: "#9ca3af" }}>
                        {calcReadingTime(post.content)}
                      </span>
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <h2
                        className="mb-3"
                        style={{
                          fontFamily: "Georgia, 'Times New Roman', serif",
                          fontSize: "1.05rem",
                          fontWeight: 400,
                          color: "#0f2744",
                          lineHeight: 1.4,
                        }}
                      >
                        {post.title}
                      </h2>
                    </Link>
                    <p className="mb-5 flex-1 text-[0.875rem] leading-[1.6]" style={{ color: "#475467" }}>
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="border-b pb-0.5 text-[0.75rem] font-bold uppercase tracking-[0.1em] transition-colors"
                      style={{ borderColor: "#111827", color: "#111827", width: "fit-content" }}
                    >
                      Lesen →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Load more */}
          {hasMore && (
            <div className="mt-12 flex justify-center">
              <button
                onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                className="border-[1.5px] border-[#111827] px-8 py-3 text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-[#111827] transition-colors hover:bg-[#111827] hover:text-white"
              >
                Weitere Beiträge anzeigen
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

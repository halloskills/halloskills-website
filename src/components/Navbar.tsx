// @ts-nocheck
"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";

const weiterbildungen = [
  { label: "Projektmanager/-in", href: "/kurse/projektmanagement" },
  { label: "Online-Marketing Manager/-in", href: "/kurse/online-marketing" },
  { label: "KI-Manager/-in", href: "/kurse/ki-digitalisierung" },
];

function WeiterbildungenDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <Link
        href="/kurse"
        className="flex items-center gap-1.5 text-[0.75rem] font-bold uppercase tracking-[0.12em] text-[#111827] hover:text-regal-blue transition-colors"
      >
        Weiterbildungen
        <svg
          width="10" height="6" viewBox="0 0 10 6" fill="none"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Link>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 top-full pt-3"
          >
            <div className="rounded-xl bg-white shadow-lg border border-[#e5e7eb] py-2 w-64">
              {weiterbildungen.map((w) => (
                <Link
                  key={w.href}
                  href={w.href}
                  onClick={() => setOpen(false)}
                  className="block px-5 py-3 text-[0.8rem] font-medium text-[#111827] hover:bg-[#f5f7f9] hover:text-[#004B76] transition-colors"
                >
                  {w.label}
                </Link>
              ))}
              <div className="mx-5 mt-2 border-t border-[#e5e7eb] pt-2 pb-1">
                <Link
                  href="/kurse"
                  onClick={() => setOpen(false)}
                  className="block py-2 text-[0.72rem] font-bold uppercase tracking-[0.1em] text-[#004B76] hover:text-[#004B76]/70 transition-colors"
                >
                  Alle Weiterbildungen ansehen →
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const navLinks = [
  { label: "Bildungsgutschein", href: "/bildungsgutschein" },
  { label: "Magazin", href: "/blog" },
];

export function Navbar2() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileWbOpen, setMobileWbOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[999] w-full bg-white border-b border-[#e5e7eb]">
      <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-6 md:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo-primary.svg"
            alt="HalloSkills"
            width={180}
            height={56}
            priority
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-12 lg:flex">
          <WeiterbildungenDropdown />
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[0.75rem] font-bold uppercase tracking-[0.12em] text-[#111827] hover:text-regal-blue transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center lg:flex">
          <Link
            href="/beratung-buchen"
            className="border-[1.5px] border-regal-blue bg-regal-blue px-7 py-3 text-[0.75rem] font-bold uppercase tracking-[0.1em] text-white hover:bg-regal-blue-dark hover:border-regal-blue-dark transition-colors whitespace-nowrap"
          >
            Beratung sichern
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-[5px] lg:hidden"
          onClick={() => setMobileOpen((p) => !p)}
          aria-label="Menü öffnen"
        >
          <span className="h-[1.5px] w-[22px] bg-[#111827]" />
          <span className="h-[1.5px] w-[22px] bg-[#111827]" />
          <span className="h-[1.5px] w-[22px] bg-[#111827]" />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="overflow-hidden border-t border-[#e5e7eb] bg-white lg:hidden"
          >
            {/* Weiterbildungen accordion */}
            <button
              onClick={() => setMobileWbOpen((p) => !p)}
              className="flex w-full items-center justify-between border-b border-[#e5e7eb] px-5 py-4 text-[0.85rem] font-semibold uppercase tracking-[0.1em] text-[#111827]"
            >
              Weiterbildungen
              <svg
                width="10" height="6" viewBox="0 0 10 6" fill="none"
                className={`transition-transform duration-200 ${mobileWbOpen ? "rotate-180" : ""}`}
              >
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <AnimatePresence>
              {mobileWbOpen && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="overflow-hidden bg-[#f5f7f9]"
                >
                  {weiterbildungen.map((w) => (
                    <Link
                      key={w.href}
                      href={w.href}
                      onClick={() => { setMobileOpen(false); setMobileWbOpen(false); }}
                      className="block border-b border-[#e5e7eb] px-8 py-3.5 text-[0.8rem] font-medium text-[#111827] hover:text-[#004B76] transition-colors"
                    >
                      {w.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="block border-b border-[#e5e7eb] px-5 py-4 text-[0.85rem] font-semibold uppercase tracking-[0.1em] text-[#111827] hover:text-regal-blue transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <div className="px-5 py-4">
              <Link
                href="/beratung-buchen"
                onClick={() => setMobileOpen(false)}
                className="block border-[1.5px] border-regal-blue bg-regal-blue px-6 py-3 text-center text-[0.75rem] font-bold uppercase tracking-[0.1em] text-white"
              >
                Beratung sichern
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

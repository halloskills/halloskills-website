// @ts-nocheck
"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function AnrufenDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-neutral-darkest border-b border-neutral-darkest pb-0.5 hover:text-regal-blue hover:border-regal-blue transition-colors whitespace-nowrap"
        >
          Anrufen
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-sm p-8 bg-white">
        <h3 className="mb-2 font-serif text-xl font-bold text-neutral-darkest">Jetzt mit uns sprechen</h3>
        <p className="mb-6 text-sm text-neutral-dark">
          Rufe uns direkt an oder hinterlasse deine Nummer – wir melden uns heute noch.
        </p>
        <a
          href="tel:+4930000000"
          className="mb-4 flex w-full items-center justify-center gap-2 bg-regal-blue px-6 py-3 text-white font-semibold text-sm tracking-wide hover:bg-regal-blue-dark transition-colors"
        >
          <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
          </svg>
          +49 30 000 000 00
        </a>
        <div className="relative my-2 flex items-center gap-3">
          <div className="h-px flex-1 bg-neutral-lighter" />
          <span className="text-xs text-neutral-dark">oder</span>
          <div className="h-px flex-1 bg-neutral-lighter" />
        </div>
        <CallbackForm />
        <p className="mt-4 text-xs text-neutral-dark text-center">
          Mo–Fr, 9–18 Uhr · Kostenlos & unverbindlich
        </p>
      </DialogContent>
    </Dialog>
  );
}

function CallbackForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="bg-[#f5f7f9] p-4 text-center">
        <p className="font-semibold text-regal-blue">Danke! Wir rufen dich bald zurück.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-0">
      <input
        type="text"
        placeholder="Dein Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full border-b border-neutral-lighter bg-transparent py-3 text-sm text-neutral-darkest placeholder:text-neutral-light outline-none focus:border-regal-blue transition-colors"
        autoComplete="name"
      />
      <input
        type="tel"
        placeholder="Deine Telefonnummer"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        className="w-full border-b border-neutral-lighter bg-transparent py-3 text-sm text-neutral-darkest placeholder:text-neutral-light outline-none focus:border-regal-blue transition-colors mb-5"
        autoComplete="tel"
      />
      <button
        type="submit"
        className="w-full border-[1.5px] border-regal-blue bg-transparent py-3 text-[0.75rem] font-bold uppercase tracking-[0.1em] text-regal-blue hover:bg-regal-blue hover:text-white transition-colors"
      >
        Rückruf vereinbaren
      </button>
    </form>
  );
}

const navLinks = [
  { label: "Kurse", href: "/kurse" },
  { label: "Bildungsgutschein", href: "/bildungsgutschein" },
  { label: "Magazin", href: "/blog" },
];

export function Navbar2() {
  const [mobileOpen, setMobileOpen] = useState(false);

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

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-6 lg:flex">
          <AnrufenDialog />
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
            <div className="flex flex-col gap-3 px-5 py-4">
              <AnrufenDialog />
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

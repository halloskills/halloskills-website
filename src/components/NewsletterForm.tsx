"use client";

import React, { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <p className="text-regal-blue font-semibold">
        Danke! Du erhältst bald unseren ersten Newsletter.
      </p>
    );
  }

  return (
    <form
      className="mx-auto flex max-w-sm flex-col gap-3 sm:flex-row"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <input
        type="email"
        placeholder="Deine E-Mail-Adresse"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 rounded-md border border-neutral-lighter px-4 py-2 outline-none focus:border-regal-blue"
        autoComplete="email"
      />
      <button
        type="submit"
        className="rounded-md bg-regal-blue px-6 py-2 font-semibold text-white hover:bg-regal-blue-dark transition-colors whitespace-nowrap"
      >
        Jetzt anmelden
      </button>
    </form>
  );
}

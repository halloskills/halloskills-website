"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "motion/react";
import React from "react";

export function Cta58() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container">
        <div className="mx-auto max-w-lg text-center">
          <h2>
            <motion.span
              initial={{ x: "-50%", opacity: 0 }}
              whileInView={{ x: "0%", opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                type: "spring",
                bounce: 0,
                duration: 0.8,
                delay: 0,
              }}
              className="block text-h1 font-bold"
            >
              Bleib informiert
            </motion.span>
          </h2>
          <h2>
            <motion.span
              initial={{ x: "50%", opacity: 0 }}
              whileInView={{ x: "0%", opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                type: "spring",
                bounce: 0,
                duration: 0.8,
                delay: 0.2,
              }}
              className="mb-5 block text-h1 font-bold md:mb-6"
            >
              mit unserem Newsletter
            </motion.span>
          </h2>
          <p className="text-medium">
            Erhalte wöchentlich praktische Tipps und neue Artikel
          </p>
          <div className="mx-auto mt-6 w-full max-w-sm md:mt-8">
            <form className="mb-4 grid max-w-sm grid-cols-1 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-4">
              <Input
                id="email"
                type="email"
                placeholder="Deine E-Mail-Adresse"
              />
              <Button title="Anmelden">Anmelden</Button>
            </form>
            <p className="text-tiny">
              Mit dem Absenden stimmst du unseren Datenschutzbestimmungen zu
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

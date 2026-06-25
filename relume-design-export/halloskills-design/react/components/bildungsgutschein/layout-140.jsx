"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout140() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container max-w-lg text-center">
        <p className="mb-3 font-semibold md:mb-4">Gutschein</p>
        <h5 className="mb-5 text-h5 font-bold md:mb-6">
          Ein Bildungsgutschein ist dein Ticket zu kostenlosen Weiterbildungen.
          Die Agentur für Arbeit finanziert deine Kurse vollständig, wenn du die
          Voraussetzungen erfüllst.
        </h5>
        <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
          <Button title="Mehr" variant="secondary">
            Mehr
          </Button>
          <Button
            title="Pfeil"
            variant="link"
            size="link"
            iconRight={<ChevronRight className="text-scheme-text" />}
          >
            Pfeil
          </Button>
        </div>
      </div>
    </section>
  );
}

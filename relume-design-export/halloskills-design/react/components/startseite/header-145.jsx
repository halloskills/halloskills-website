"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Header145() {
  return (
    <section className="scheme-1">
      <div className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container flex flex-col items-center text-center">
          <div className="mx-auto w-full max-w-lg">
            <h1 className="mb-5 text-h1 font-bold md:mb-6">
              Kostenlose Weiterbildung mit Bildungsgutschein
            </h1>
            <p className="text-medium">
              Lernen Sie Projektmanagement, Online Marketing und künstliche
              Intelligenz vollständig online. AZAV-zertifiziert und 100%
              kostenfrei für Arbeitssuchende.
            </p>
            <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
              <Button title="Kurse erkunden">Kurse erkunden</Button>
              <Button title="Beratung buchen" variant="secondary">
                Beratung buchen
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
          className="aspect-video size-full object-cover"
          alt="Relume placeholder image"
        />
      </div>
    </section>
  );
}

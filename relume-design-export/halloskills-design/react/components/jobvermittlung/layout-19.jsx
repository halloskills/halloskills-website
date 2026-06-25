"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout19() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Beratung</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Dein persönlicher Jobcoach begleitet dich
            </h2>
            <p className="mb-5 text-medium md:mb-6">
              Unsere erfahrenen Jobcoaches kennen den Markt und wissen, was
              Arbeitgeber suchen. Sie entwickeln mit dir eine individuelle
              Strategie, um deine Chancen zu maximieren und deine Stärken
              richtig zu positionieren.
            </p>
            <ul className="my-4 list-disc pl-5">
              <li className="my-1 self-start pl-2">
                <p>Karriereplanung und Zielentwicklung</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>Analyse deiner Fähigkeiten und Stärken</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>Regelmäßige Fortschrittskontrolle und Anpassung</p>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Termin" variant="secondary">
                Termin
              </Button>
              <Button
                title="Mehr"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Mehr
              </Button>
            </div>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

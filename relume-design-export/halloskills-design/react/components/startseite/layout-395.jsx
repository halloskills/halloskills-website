"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout395() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Angebote</p>
          <h1 className="mb-5 text-h2 font-bold md:mb-6">
            Drei wege zum erfolg
          </h1>
          <p className="text-medium">
            Meistern Sie die fähigkeiten der zukunft
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          <Card className="flex flex-col">
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
              <div>
                <p className="mb-2 font-semibold">Projektmanagement</p>
                <h2 className="mb-3 text-h4 font-bold md:mb-4">
                  Projekte führen wie ein profi
                </h2>
                <p>Lernen Sie bewährte methoden für erfolgreiche projekte</p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Erkunden"
                  variant="link"
                  size="link"
                  iconRight={<ChevronRight className="text-scheme-text" />}
                >
                  Erkunden
                </Button>
              </div>
            </div>
          </Card>
          <Card className="flex flex-col">
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
              <div>
                <p className="mb-2 font-semibold">Marketing</p>
                <h2 className="mb-3 text-h4 font-bold md:mb-4">
                  Online marketing beherrschen
                </h2>
                <p>Strategien entwickeln die ihre reichweite vergrößern</p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Erkunden"
                  variant="link"
                  size="link"
                  iconRight={<ChevronRight className="text-scheme-text" />}
                >
                  Erkunden
                </Button>
              </div>
            </div>
          </Card>
          <Card className="flex flex-col">
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
              <div>
                <p className="mb-2 font-semibold">Technologie</p>
                <h2 className="mb-3 text-h4 font-bold md:mb-4">
                  KI und digitalisierung verstehen
                </h2>
                <p>Zukunftstechnologien praktisch anwenden</p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Erkunden"
                  variant="link"
                  size="link"
                  iconRight={<ChevronRight className="text-scheme-text" />}
                >
                  Erkunden
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

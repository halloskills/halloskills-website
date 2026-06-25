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
          <p className="mb-3 font-semibold md:mb-4">Vorteile</p>
          <h1 className="mb-5 text-h2 font-bold md:mb-6">Was du erhältst</h1>
          <p className="text-medium">Wir finden den richtigen Kurs für dich</p>
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
                <p className="mb-2 font-semibold">Beratung</p>
                <h2 className="mb-3 text-h4 font-bold md:mb-4">
                  Individuelle Kursberatung
                </h2>
                <p>Unsere Berater kennen jeden Kurs genau</p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Mehr erfahren"
                  variant="link"
                  size="link"
                  iconRight={<ChevronRight className="text-scheme-text" />}
                >
                  Mehr erfahren
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
                <p className="mb-2 font-semibold">Unterstützung</p>
                <h2 className="mb-3 text-h4 font-bold md:mb-4">
                  Bildungsgutschein-Support von Anfang an
                </h2>
                <p>Wir begleiten dich durch den gesamten Prozess</p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Mehr erfahren"
                  variant="link"
                  size="link"
                  iconRight={<ChevronRight className="text-scheme-text" />}
                >
                  Mehr erfahren
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
                <p className="mb-2 font-semibold">Betreuung</p>
                <h2 className="mb-3 text-h4 font-bold md:mb-4">
                  Persönliche Betreuung während deiner Weiterbildung
                </h2>
                <p>Du bist nicht allein – wir sind für dich da</p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Mehr erfahren"
                  variant="link"
                  size="link"
                  iconRight={<ChevronRight className="text-scheme-text" />}
                >
                  Mehr erfahren
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

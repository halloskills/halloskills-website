"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { DribbbleLogo, LinkedinLogo, XLogo } from "relume-icons";

export function Team6() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Team</p>
          <h2 className="mb-5 text-h2 font-bold md:mb-6">Unser Team</h2>
          <p className="text-medium">
            Menschen mit Leidenschaft für echte Veränderung
          </p>
        </div>
        <div className="grid grid-cols-1 items-start justify-center gap-x-8 gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <div className="flex flex-col text-center">
            <div className="mb-5 flex flex-col flex-nowrap text-center md:mb-6">
              <div className="mx-auto w-full">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder image 1"
                  className="aspect-square size-full rounded-image object-cover"
                />
              </div>
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-large font-semibold">Thomas Müller</h5>
              <h6 className="text-medium">Gründer und CEO</h6>
            </div>
            <p>
              Thomas baute HalloSkills aus einer persönlichen Überzeugung heraus
              auf.
            </p>
            <div className="mt-5 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center md:mt-6">
              <a href="#">
                <LinkedinLogo className="size-6 text-scheme-text" />
              </a>
              <a href="#">
                <XLogo className="size-6 p-0.5 text-scheme-text" />
              </a>
              <a href="#">
                <DribbbleLogo className="size-6 text-scheme-text" />
              </a>
            </div>
          </div>
          <div className="flex flex-col text-center">
            <div className="mb-5 flex flex-col flex-nowrap text-center md:mb-6">
              <div className="mx-auto w-full">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder image 1"
                  className="aspect-square size-full rounded-image object-cover"
                />
              </div>
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-large font-semibold">Sarah Bergmann</h5>
              <h6 className="text-medium">Leiterin Kursentwicklung</h6>
            </div>
            <p>
              Sarah gestaltet Kursinhalte, die wirklich funktionieren und
              Fähigkeiten vermitteln.
            </p>
            <div className="mt-5 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center md:mt-6">
              <a href="#">
                <LinkedinLogo className="size-6 text-scheme-text" />
              </a>
              <a href="#">
                <XLogo className="size-6 p-0.5 text-scheme-text" />
              </a>
              <a href="#">
                <DribbbleLogo className="size-6 text-scheme-text" />
              </a>
            </div>
          </div>
          <div className="flex flex-col text-center">
            <div className="mb-5 flex flex-col flex-nowrap text-center md:mb-6">
              <div className="mx-auto w-full">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder image 1"
                  className="aspect-square size-full rounded-image object-cover"
                />
              </div>
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-large font-semibold">Michael Weber</h5>
              <h6 className="text-medium">Projektmanagement Spezialist</h6>
            </div>
            <p>
              Michael unterrichtet mit praktischen Beispielen aus seiner
              langjährigen Erfahrung.
            </p>
            <div className="mt-5 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center md:mt-6">
              <a href="#">
                <LinkedinLogo className="size-6 text-scheme-text" />
              </a>
              <a href="#">
                <XLogo className="size-6 p-0.5 text-scheme-text" />
              </a>
              <a href="#">
                <DribbbleLogo className="size-6 text-scheme-text" />
              </a>
            </div>
          </div>
          <div className="flex flex-col text-center">
            <div className="mb-5 flex flex-col flex-nowrap text-center md:mb-6">
              <div className="mx-auto w-full">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder image 1"
                  className="aspect-square size-full rounded-image object-cover"
                />
              </div>
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-large font-semibold">Lisa Hoffmann</h5>
              <h6 className="text-medium">Online Marketing Expertin</h6>
            </div>
            <p>
              Lisa bringt aktuelle Markttrends in jeden Kurs und hilft
              Teilnehmern, relevant zu bleiben.
            </p>
            <div className="mt-5 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center md:mt-6">
              <a href="#">
                <LinkedinLogo className="size-6 text-scheme-text" />
              </a>
              <a href="#">
                <XLogo className="size-6 p-0.5 text-scheme-text" />
              </a>
              <a href="#">
                <DribbbleLogo className="size-6 text-scheme-text" />
              </a>
            </div>
          </div>
          <div className="flex flex-col text-center">
            <div className="mb-5 flex flex-col flex-nowrap text-center md:mb-6">
              <div className="mx-auto w-full">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder image 1"
                  className="aspect-square size-full rounded-image object-cover"
                />
              </div>
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-large font-semibold">Daniel Krämer</h5>
              <h6 className="text-medium">KI und Digitalisierung</h6>
            </div>
            <p>
              Daniel macht komplexe Technologie verständlich und anwendbar für
              alle.
            </p>
            <div className="mt-5 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center md:mt-6">
              <a href="#">
                <LinkedinLogo className="size-6 text-scheme-text" />
              </a>
              <a href="#">
                <XLogo className="size-6 p-0.5 text-scheme-text" />
              </a>
              <a href="#">
                <DribbbleLogo className="size-6 text-scheme-text" />
              </a>
            </div>
          </div>
          <div className="flex flex-col text-center">
            <div className="mb-5 flex flex-col flex-nowrap text-center md:mb-6">
              <div className="mx-auto w-full">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder image 1"
                  className="aspect-square size-full rounded-image object-cover"
                />
              </div>
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-large font-semibold">Anna Richter</h5>
              <h6 className="text-medium">Jobvermittlung Koordinatorin</h6>
            </div>
            <p>
              Anna verbindet Absolventen mit Unternehmen, die ihre Talente
              suchen.
            </p>
            <div className="mt-5 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center md:mt-6">
              <a href="#">
                <LinkedinLogo className="size-6 text-scheme-text" />
              </a>
              <a href="#">
                <XLogo className="size-6 p-0.5 text-scheme-text" />
              </a>
              <a href="#">
                <DribbbleLogo className="size-6 text-scheme-text" />
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-14 w-full max-w-md text-center md:mt-20 lg:mt-24">
          <h4 className="mb-3 text-h4 font-bold md:mb-4">Wir stellen ein</h4>
          <p className="text-medium">
            Interessiert an unserer Mission? Wir suchen talentierte Menschen.
          </p>
          <div className="mt-5 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center md:mt-6">
            <Button title="Offene Stellen" variant="secondary">
              Offene Stellen
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

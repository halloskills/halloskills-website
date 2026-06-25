"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Blog40() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Blog</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Aktuelle insights für ihre karriere
            </h2>
            <p className="text-medium">
              Lesen Sie tipps und trends aus der welt der weiterbildung
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          <Card className="flex size-full flex-col items-center justify-start">
            <a href="#" className="w-full">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="aspect-[3/2] size-full object-cover"
              />
            </a>
            <div className="px-5 py-6 md:p-6">
              <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                <Badge className="mr-4">Karriere</Badge>
                <p className="inline text-small font-semibold">
                  8 min lesezeit
                </p>
              </div>
              <a className="mb-2 block" href="#">
                <h2 className="text-h5 font-bold">
                  Projektmanagement skills die arbeitgeber suchen
                </h2>
              </a>
              <p>Erfahren Sie, welche fähigkeiten den unterschied machen</p>
              <Button
                title="Lesen"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
                className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
              >
                Lesen
              </Button>
            </div>
          </Card>
          <Card className="flex size-full flex-col items-center justify-start">
            <a href="#" className="w-full">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="aspect-[3/2] size-full object-cover"
              />
            </a>
            <div className="px-5 py-6 md:p-6">
              <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                <Badge className="mr-4">Marketing</Badge>
                <p className="inline text-small font-semibold">
                  6 min lesezeit
                </p>
              </div>
              <a className="mb-2 block" href="#">
                <h2 className="text-h5 font-bold">
                  Digitale transformation im marketing verstehen
                </h2>
              </a>
              <p>Wie künstliche intelligenz die branche verändert</p>
              <Button
                title="Lesen"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
                className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
              >
                Lesen
              </Button>
            </div>
          </Card>
          <Card className="flex size-full flex-col items-center justify-start">
            <a href="#" className="w-full">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="aspect-[3/2] size-full object-cover"
              />
            </a>
            <div className="px-5 py-6 md:p-6">
              <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                <Badge className="mr-4">Technologie</Badge>
                <p className="inline text-small font-semibold">
                  7 min lesezeit
                </p>
              </div>
              <a className="mb-2 block" href="#">
                <h2 className="text-h5 font-bold">
                  KI tools die Sie kennen sollten
                </h2>
              </a>
              <p>Ein überblick über die wichtigsten anwendungen</p>
              <Button
                title="Lesen"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
                className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
              >
                Lesen
              </Button>
            </div>
          </Card>
        </div>
        <div className="flex items-center justify-end">
          <Button variant="secondary" className="mt-12 md:mt-18 lg:mt-20">
            Alle artikel
          </Button>
        </div>
      </div>
    </section>
  );
}

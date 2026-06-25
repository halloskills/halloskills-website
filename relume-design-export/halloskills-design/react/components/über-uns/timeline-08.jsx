"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";
import { ChevronRight } from "relume-icons";

const Circle = () => {
  const circleRef = useRef < HTMLDivElement > null;

  const { scrollYProgress } = useScroll({
    target: circleRef,
    offset: ["end end", "end center"],
  });

  const opacity = useTransform(scrollYProgress, [0.85, 1], [0, 1]);

  return (
    <div className="absolute left-0 -ml-5 flex h-full w-5 items-start justify-center md:left-auto md:-ml-8 md:w-8">
      <div
        ref={circleRef}
        className="relative z-20 mt-9 size-3.75 rounded-full shadow-[0_0_0_8px_var(--color-scheme-background)] backdrop-blur-3xl md:mt-12"
      >
        <div className="absolute inset-0 rounded-full bg-scheme-text/15" />
        <motion.div
          className="absolute inset-0 rounded-full bg-scheme-text"
          style={{ opacity }}
        />
      </div>
    </div>
  );
};

export function Timeline8() {
  return (
    <section className="overflow-clip px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container max-w-lg">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="relative z-10 w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Anfang</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              HalloSkills gegründet
            </h2>
            <p className="text-medium">
              Wir begannen mit einer einfachen Idee: Arbeitssuchende verdienen
              bessere Chancen. Die erste Gruppe von Kursteilnehmern startete
              ihre Reise mit uns.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Mehr" variant="secondary">
                Mehr
              </Button>
              <Button
                title="Video"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Video
              </Button>
            </div>
          </div>
        </div>
        <div className="grid w-full max-w-lg auto-cols-fr grid-cols-[max-content_1fr] items-start justify-items-center">
          <div className="relative left-0 flex h-full w-5 flex-col items-center md:left-auto md:w-8">
            <div className="absolute z-10 h-16 w-1 bg-gradient-to-b from-scheme-background to-transparent" />
            <div className="sticky top-0 mt-[-50vh] h-[50vh] w-[3px] bg-scheme-text" />
            <div className="h-full w-[3px] bg-scheme-text/15" />
            <div className="absolute bottom-0 z-0 h-16 w-1 bg-gradient-to-b from-transparent to-scheme-background" />
            <div className="absolute top-[-50vh] h-[50vh] w-full bg-scheme-background" />
          </div>
          <div className="grid auto-cols-fr grid-cols-1 gap-y-8 sm:gap-12 md:gap-20">
            <div className="relative">
              <Circle />
              <Card className="ml-4 flex flex-col md:ml-12">
                <div className="p-6 md:p-8">
                  <h3 className="mb-3 text-h3 font-bold md:mb-4">2022</h3>
                  <h4 className="mb-3 text-h5 font-bold md:mb-4">
                    AZAV-Zertifizierung erhalten
                  </h4>
                  <p>
                    Unsere Kurse wurden offiziell zertifiziert. Das bedeutete,
                    dass Bildungsgutscheine nun vollständig akzeptiert wurden.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button variant="secondary">Mehr</Button>
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<ChevronRight className="text-scheme-text" />}
                    >
                      Video
                    </Button>
                  </div>
                </div>
                <div className="overflow-hidden">
                  <img
                    className="w-full"
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 1"
                  />
                </div>
              </Card>
            </div>
            <div className="relative">
              <Circle />
              <Card className="ml-4 flex flex-col md:ml-12">
                <div className="p-6 md:p-8">
                  <h3 className="mb-3 text-h3 font-bold md:mb-4">2023</h3>
                  <h4 className="mb-3 text-h5 font-bold md:mb-4">
                    Hundert Vermittlungen
                  </h4>
                  <p>
                    Unsere Absolventen fanden neue Positionen. Jede Vermittlung
                    war ein Beweis dafür, dass unser Weg funktioniert.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button variant="secondary">Mehr</Button>
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<ChevronRight className="text-scheme-text" />}
                    >
                      Video
                    </Button>
                  </div>
                </div>
                <div className="overflow-hidden">
                  <img
                    className="w-full"
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 2"
                  />
                </div>
              </Card>
            </div>
            <div className="relative">
              <Circle />
              <Card className="ml-4 flex flex-col md:ml-12">
                <div className="p-6 md:p-8">
                  <h3 className="mb-3 text-h3 font-bold md:mb-4">2024</h3>
                  <h4 className="mb-3 text-h5 font-bold md:mb-4">
                    Neue Kurse gestartet
                  </h4>
                  <p>
                    Wir erweiterten unser Angebot mit Spezialisierungen in KI
                    und Digitalisierung. Die Nachfrage war größer als je zuvor.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button variant="secondary">Mehr</Button>
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<ChevronRight className="text-scheme-text" />}
                    >
                      Video
                    </Button>
                  </div>
                </div>
                <div className="overflow-hidden">
                  <img
                    className="w-full"
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 3"
                  />
                </div>
              </Card>
            </div>
            <div className="relative">
              <Circle />
              <Card className="ml-4 flex flex-col md:ml-12">
                <div className="p-6 md:p-8">
                  <h3 className="mb-3 text-h3 font-bold md:mb-4">Date</h3>
                  <h4 className="mb-3 text-h5 font-bold md:mb-4">
                    Short heading here
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button variant="secondary">Button</Button>
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<ChevronRight className="text-scheme-text" />}
                    >
                      Button
                    </Button>
                  </div>
                </div>
                <div className="overflow-hidden">
                  <img
                    className="w-full"
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 4"
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

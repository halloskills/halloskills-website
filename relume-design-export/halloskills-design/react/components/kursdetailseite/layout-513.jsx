"use client";

import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import React, { Fragment, useRef } from "react";
import { ChevronRight } from "relume-icons";

const ConditionalRender = ({ condition, children }) => {
  return condition ? <>{children}</> : null;
};

const useRelume = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  const getStyles = (index) => {
    const startProgress = index / data.length;
    const endProgress = (index + 1) / data.length;
    const opacity = useTransform(
      scrollYProgress,
      [
        Math.max(0, startProgress - 0.07),
        startProgress,
        endProgress - 0.07,
        Math.min(1, endProgress),
      ],
      [0, 1, 1, 0],
    );
    const y = useTransform(
      scrollYProgress,
      [
        Math.max(0, startProgress - 0.1),
        startProgress,
        endProgress - 0.1,
        Math.min(1, endProgress),
      ],
      [100, 0, 0, -100],
    );
    return { opacity, y };
  };
  return { containerRef, getStyles };
};

const useMobile = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  return { isMobile };
};

const useTablet = () => {
  const isTablet = useMediaQuery("(min-width: 768px)");
  return { isTablet };
};

export function Layout513() {
  const renderTablet = useTablet();
  const renderMobile = useMobile();
  const useSctoll = useRelume({
    data: [
      {
        heading: "01 Feature one",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        image: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-1-portrait.svg",
          alt: "Relume placeholder image 1",
        },
        imageMobile: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-1.svg",
          alt: "Relume placeholder image 1",
        },
      },
      {
        heading: "02 Feature two",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        image: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-2-portrait.svg",
          alt: "Relume placeholder image 2",
        },
        imageMobile: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-2.svg",
          alt: "Relume placeholder image 2",
        },
      },
      {
        heading: "03 Feature three",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        image: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-3-portrait.svg",
          alt: "Relume placeholder image 3",
        },
        imageMobile: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-3.svg",
          alt: "Relume placeholder image 3",
        },
      },
      {
        heading: "04 Feature four",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        image: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-4-portrait.svg",
          alt: "Relume placeholder image 4",
        },
        imageMobile: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-4.svg",
          alt: "Relume placeholder image 4",
        },
      },
    ],
  });
  return (
    <section
      ref={useSctoll.containerRef}
      className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1"
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-start md:gap-20">
          <div className="flex flex-col gap-y-16 md:sticky md:top-20 md:mt-20 md:h-[calc(100vh_-10rem)] md:justify-center">
            <div className="flex flex-col">
              <p className="mb-3 font-semibold md:mb-4">Vorteile</p>
              <h2 className="mb-5 text-h2 font-bold md:mb-6">
                Warum dieser Kurs dich weiterbringt
              </h2>
              <p className="text-medium">
                Du lernst flexibel, wirst persönlich betreut und erhältst ein
                anerkanntes Zertifikat. Alles kostenlos mit deinem
                Bildungsgutschein.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button title="Anmelden" variant="secondary">
                  Anmelden
                </Button>
                <Button
                  title="→"
                  variant="link"
                  size="link"
                  iconRight={<ChevronRight className="text-scheme-text" />}
                >
                  →
                </Button>
              </div>
            </div>
            <div className="flex flex-col justify-start gap-y-8">
              <AnimatePresence>
                <Fragment>
                  <ConditionalRender condition={renderMobile.isMobile}>
                    <div>
                      <h5 className="mb-3 text-h6 font-bold">
                        Vollständig online
                      </h5>
                      <p>
                        Dein Lernberater unterstützt dich bei Fragen und hilft
                        dir, am Ball zu bleiben.
                      </p>
                      <div className="mt-4">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-1.svg"
                          alt="Relume placeholder image 1"
                          className="rounded-image"
                        />
                      </div>
                    </div>
                  </ConditionalRender>
                  <ConditionalRender condition={renderTablet.isTablet}>
                    <motion.div
                      style={{
                        opacity: useSctoll.getStyles(0).opacity,
                        y: useSctoll.getStyles(0).y,
                      }}
                      initial={{ opacity: 0, y: 100 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="md:absolute first:md:relative"
                    >
                      <h5 className="text-h5 font-bold md:mb-4">
                        Vollständig online
                      </h5>
                      <p className="text-medium">
                        Dein Lernberater unterstützt dich bei Fragen und hilft
                        dir, am Ball zu bleiben.
                      </p>
                    </motion.div>
                  </ConditionalRender>
                </Fragment>
                <Fragment>
                  <ConditionalRender condition={renderMobile.isMobile}>
                    <div>
                      <h5 className="mb-3 text-h6 font-bold">
                        Persönliche Betreuung
                      </h5>
                      <p>
                        Dein Lernberater unterstützt dich bei Fragen und hilft
                        dir, am Ball zu bleiben.
                      </p>
                      <div className="mt-4">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-2.svg"
                          alt="Relume placeholder image 2"
                          className="rounded-image"
                        />
                      </div>
                    </div>
                  </ConditionalRender>
                  <ConditionalRender condition={renderTablet.isTablet}>
                    <motion.div
                      style={{
                        opacity: useSctoll.getStyles(1).opacity,
                        y: useSctoll.getStyles(1).y,
                      }}
                      initial={false}
                      animate={{}}
                      transition={{}}
                      className="md:absolute first:md:relative"
                    >
                      <h5 className="text-h5 font-bold md:mb-4">
                        Persönliche Betreuung
                      </h5>
                      <p className="text-medium">
                        Dein Lernberater unterstützt dich bei Fragen und hilft
                        dir, am Ball zu bleiben.
                      </p>
                    </motion.div>
                  </ConditionalRender>
                </Fragment>
                <Fragment>
                  <ConditionalRender condition={renderMobile.isMobile}>
                    <div>
                      <h5 className="mb-3 text-h6 font-bold">
                        Anerkanntes Zertifikat
                      </h5>
                      <p>
                        Nach dem Kurs unterstützen wir dich aktiv bei der
                        Jobsuche und Bewerbungen.
                      </p>
                      <div className="mt-4">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-3.svg"
                          alt="Relume placeholder image 3"
                          className="rounded-image"
                        />
                      </div>
                    </div>
                  </ConditionalRender>
                  <ConditionalRender condition={renderTablet.isTablet}>
                    <motion.div
                      style={{
                        opacity: useSctoll.getStyles(2).opacity,
                        y: useSctoll.getStyles(2).y,
                      }}
                      initial={false}
                      animate={{}}
                      transition={{}}
                      className="md:absolute first:md:relative"
                    >
                      <h5 className="text-h5 font-bold md:mb-4">
                        Anerkanntes Zertifikat
                      </h5>
                      <p className="text-medium">
                        Nach dem Kurs unterstützen wir dich aktiv bei der
                        Jobsuche und Bewerbungen.
                      </p>
                    </motion.div>
                  </ConditionalRender>
                </Fragment>
                <Fragment>
                  <ConditionalRender condition={renderMobile.isMobile}>
                    <div>
                      <h5 className="mb-3 text-h6 font-bold">
                        Jobvermittlung inklusive
                      </h5>
                      <p>
                        Dein Lernberater unterstützt dich bei Fragen und hilft
                        dir, am Ball zu bleiben.
                      </p>
                      <div className="mt-4">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-4.svg"
                          alt="Relume placeholder image 4"
                          className="rounded-image"
                        />
                      </div>
                    </div>
                  </ConditionalRender>
                  <ConditionalRender condition={renderTablet.isTablet}>
                    <motion.div
                      style={{
                        opacity: useSctoll.getStyles(3).opacity,
                        y: useSctoll.getStyles(3).y,
                      }}
                      initial={false}
                      animate={{}}
                      transition={{}}
                      className="md:absolute first:md:relative"
                    >
                      <h5 className="text-h5 font-bold md:mb-4">
                        Jobvermittlung inklusive
                      </h5>
                      <p className="text-medium">
                        Dein Lernberater unterstützt dich bei Fragen und hilft
                        dir, am Ball zu bleiben.
                      </p>
                    </motion.div>
                  </ConditionalRender>
                </Fragment>
              </AnimatePresence>
            </div>
          </div>
          <div className="hidden md:grid md:grid-cols-1 md:gap-4">
            <div className="flex h-screen w-full items-center justify-center overflow-hidden">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-1-portrait.svg"
                alt="Relume placeholder image 1"
                className="w-full rounded-image"
              />
            </div>
            <div className="flex h-screen w-full items-center justify-center overflow-hidden">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-2-portrait.svg"
                alt="Relume placeholder image 2"
                className="w-full rounded-image"
              />
            </div>
            <div className="flex h-screen w-full items-center justify-center overflow-hidden">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-3-portrait.svg"
                alt="Relume placeholder image 3"
                className="w-full rounded-image"
              />
            </div>
            <div className="flex h-screen w-full items-center justify-center overflow-hidden">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-4-portrait.svg"
                alt="Relume placeholder image 4"
                className="w-full rounded-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

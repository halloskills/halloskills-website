import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { KURSE } from "@/lib/kurse-data";
import { NavV2 } from "@/components/sections/startseite-v2/nav-v2";
import { Eyebrow, PfeilKnopf, btnPrimary } from "@/components/sections/startseite-v2/hs-ui";
import { VergleichV2 } from "@/components/sections/startseite-v2/vergleich-v2";
import { CtaV2 } from "@/components/sections/startseite-v2/cta-v2";
import { FooterV2 } from "@/components/sections/startseite-v2/footer-v2";

export const metadata: Metadata = {
  title: "Unsere Lehrgänge | HalloSkills",
  description:
    "Drei Online-Lehrgänge mit Umschulungsinhalten — in 6 statt 24 Monaten, 100% online, mit HalloSkills-Zertifikat.",
};

export default function KurseUebersicht() {
  return (
    <div className="hs-v2 bg-white">
      <NavV2 />

      <section className="px-6 pb-10 pt-14 md:px-10 lg:pt-20">
        <div className="mx-auto max-w-[760px] text-center">
          <Eyebrow>Online-Umschulungsinhalte · 6 statt 24 Monate</Eyebrow>
          <h1 className="mt-6 text-[clamp(2.2rem,5vw,3.25rem)] leading-[1.1] text-balance">
            Unsere Lehrgänge.
          </h1>
          <p className="mt-5 text-[1.0625rem] leading-[1.65] text-hs-body">
            Drei kaufmännische Lehrgänge mit den Inhalten einer klassischen Umschulung —
            kompakt, online und mit persönlicher Begleitung bis zum HalloSkills-Zertifikat.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-[1200px] gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {KURSE.map((kurs) => (
            <Link
              key={kurs.slug}
              href={`/kurse/${kurs.slug}`}
              className="group relative block overflow-hidden rounded-hs-image shadow-hs-soft transition-shadow duration-300 hover:shadow-hs-float"
            >
              <Image
                src={kurs.bild}
                alt={kurs.bildAlt}
                width={660}
                height={880}
                sizes="(max-width: 640px) 90vw, 380px"
                className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <span className="absolute left-4 top-4 rounded-full bg-[#ffeaf2] px-3.5 py-1.5 text-[0.7rem] font-[700] uppercase tracking-[0.1em] text-hs-pink">
                {kurs.kategorie}
              </span>

              <div className="absolute inset-x-0 bottom-0 bg-white/95 p-5 backdrop-blur-sm">
                <h2 className="text-[1.0625rem] font-[600] leading-snug text-balance">
                  {kurs.titel}
                </h2>
                <p className="mt-2 text-[0.8rem] text-hs-muted">
                  Umschulungsinhalte · 6 statt 24 Monate · 100% online
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-hs-line pt-4">
                  <span className="text-[0.75rem] font-[600] text-hs-blue">
                    Start Herbst 2026
                  </span>
                  <PfeilKnopf />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mx-auto mt-12 flex max-w-[1200px] justify-center">
          <Link href="/beratung-buchen" className={btnPrimary}>
            Beratung sichern
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <VergleichV2 />
      <CtaV2 />
      <FooterV2 />
    </div>
  );
}

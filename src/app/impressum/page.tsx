import type { Metadata } from "next";
import { NavV2 } from "@/components/sections/startseite-v2/nav-v2";
import { Eyebrow } from "@/components/sections/startseite-v2/hs-ui";
import { FooterV2 } from "@/components/sections/startseite-v2/footer-v2";

export const metadata: Metadata = {
  title: "Impressum | HalloSkills",
  description: "Impressum der HalloSkills GmbH",
  robots: { index: false, follow: false },
};

export default function ImpressumPage() {
  return (
    <div className="hs-v2 bg-white">
      <NavV2 />

      <section className="px-6 pb-6 pt-14 md:px-10 lg:pt-20">
        <div className="mx-auto max-w-[760px]">
          <Eyebrow ton="blau">Rechtliches</Eyebrow>
          <h1 className="mt-6 text-[clamp(2rem,4vw,2.75rem)] leading-[1.15]">Impressum</h1>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-[760px]">
          <div className="hs-legal">
            <h2>HalloSkills GmbH</h2>
            <p>
              Cremon 11
              <br />
              20457 Hamburg
            </p>
            <p>
              Handelsregister: HRB 198168
              <br />
              Registergericht: Hamburg
            </p>

            <h2>Vertreten durch</h2>
            <p>Heiko Kuhn</p>

            <h2>Kontakt</h2>
            <p>
              E-Mail: <a href="mailto:admin@halloskills.de">admin@halloskills.de</a>
            </p>

            <h2>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
              vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>

            <p className="mt-12 text-[0.85rem] text-hs-muted">Quelle: e-recht24.de</p>
          </div>
        </div>
      </section>

      <FooterV2 />
    </div>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | HalloSkills",
  description: "Impressum der HalloSkills GmbH",
};

export default function ImpressumPage() {
  return (
    <>
      <section
        className="relative flex min-h-[30vh] items-center overflow-hidden"
        style={{ backgroundColor: "#004B76" }}
      >
        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 py-16 md:px-12 md:py-20">
          <span
            className="mb-5 block text-[0.75rem] font-bold uppercase tracking-[0.12em]"
            style={{ color: "#D4AF37" }}
          >
            Rechtliches
          </span>
          <h1
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
              color: "#ffffff",
              lineHeight: 1.2,
            }}
          >
            Impressum
          </h1>
        </div>
      </section>

      <section className="py-20" style={{ background: "#ffffff" }}>
        <div className="mx-auto max-w-[760px] px-6 md:px-12">
          <div className="legal-content">
            <h2>HalloSkills GmbH</h2>
            <p>
              Cremon 11<br />
              20457 Hamburg
            </p>
            <p>
              Handelsregister: HRB 198168<br />
              Registergericht: Hamburg
            </p>

            <h2>Vertreten durch</h2>
            <p>Heiko Kuhn</p>

            <h2>Kontakt</h2>
            <p>
              Telefon: +49 40 000 000 00<br />
              E-Mail: <a href="mailto:admin@halloskills.de">admin@halloskills.de</a>
            </p>

            <h2>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
              vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>

            <p style={{ color: "#9ca3af", fontSize: "0.85rem", marginTop: "3rem" }}>
              Quelle: e-recht24.de
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { KURSE, KURSE_LIST } from "@/lib/kurse-data";
import { Check } from "relume-icons";

export async function generateStaticParams() {
  return KURSE_LIST.map((k) => ({ slug: k.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const kurs = KURSE[slug];
  if (!kurs) return {};
  return { title: kurs.metaTitle, description: kurs.metaDescription };
}

export default async function KursDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const kurs = KURSE[slug];
  if (!kurs) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: kurs.title,
    description: kurs.description,
    provider: {
      "@type": "EducationalOrganization",
      name: "HalloSkills",
      url: "https://halloskills.de",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb + Hero */}
      <section className="px-6 md:px-12 py-16 md:py-24 lg:py-28 scheme-2">
        <div className="mx-auto w-full max-w-lg text-center">
          <nav className="mb-6 flex items-center justify-center gap-2 text-small text-neutral-dark">
            <Link href="/" className="hover:text-regal-blue">Startseite</Link>
            <span>/</span>
            <Link href="/kurse" className="hover:text-regal-blue">Kurse</Link>
            <span>/</span>
            <span className="text-regal-blue font-medium">{kurs.subtitle}</span>
          </nav>
          <h1 className="mb-5 text-3xl font-bold md:mb-6 md:text-5xl">{kurs.title}</h1>
          <p className="mb-6 text-medium">{kurs.description}</p>
          <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-full bg-white px-4 py-1.5 text-small font-semibold text-regal-blue shadow-sm">⏱ {kurs.dauer}</span>
            <span className="rounded-full bg-white px-4 py-1.5 text-small font-semibold shadow-sm">📅 Start: Jeden Montag</span>
            <span className="rounded-full bg-white px-4 py-1.5 text-small font-semibold text-regal-blue shadow-sm">✓ AZAV-zertifiziert</span>
            <span className="rounded-full bg-white px-4 py-1.5 text-small font-semibold shadow-sm">💻 100% Online</span>
          </div>
          <Link
            href="/beratung-buchen"
            className="inline-flex items-center justify-center rounded-md bg-regal-blue px-8 py-3 font-semibold text-white hover:bg-regal-blue-dark transition-colors"
          >
            Jetzt kostenlose Beratung buchen
          </Link>
        </div>
      </section>

      {/* Kursinhalte */}
      <section className="px-6 md:px-12 py-16 md:py-24 lg:py-28 scheme-1">
        <div className="mx-auto w-full max-w-[1200px]">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-20">
            <div>
              <p className="mb-3 font-semibold md:mb-4">Kursinhalte</p>
              <h2 className="mb-5 text-h2 font-bold md:mb-6">Deine Kurs-Inhalte</h2>
              <ul className="flex flex-col gap-4">
                {kurs.inhalte.map((inhalt, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="mt-0.5 size-5 shrink-0 text-regal-blue" />
                    <span>{inhalt}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                className="size-full rounded-image object-cover"
                alt={kurs.title}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vorteile */}
      <section className="px-6 md:px-12 py-16 md:py-24 lg:py-28 scheme-3">
        <div className="mx-auto w-full max-w-[1200px]">
          <div className="mx-auto mb-12 max-w-lg text-center md:mb-18">
            <h2 className="mb-5 text-h2 font-bold md:mb-6">Lernen, das sofort funktioniert</h2>
            <p className="text-medium">
              Dieser Kurs vermittelt nicht nur Theorie, sondern echte Werkzeuge und Methoden,
              die du vom ersten Tag an einsetzen kannst.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {kurs.vorteile.map((v, i) => (
              <div key={i} className="flex items-start gap-3 rounded-card bg-white p-6 shadow-sm">
                <Check className="mt-0.5 size-5 shrink-0 text-regal-blue" />
                <span className="font-medium">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3-Schritte */}
      <section className="px-6 md:px-12 py-16 md:py-24 lg:py-28 scheme-1">
        <div className="mx-auto w-full max-w-lg text-center">
          <h2 className="mb-12 text-h2 font-bold md:mb-18">So funktioniert dein Kursstart</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              { n: "1", t: "Beratung buchen", b: "Wir prüfen gemeinsam deine Eignung und erstellen dein individuelles Angebot." },
              { n: "2", t: "Bildungsgutschein beantragen", b: "Mit unserer Hilfe gehst du optimal vorbereitet zur Agentur für Arbeit." },
              { n: "3", t: "Onboarding & Start", b: "Du erhältst alle Zugänge und startest am nächsten verfügbaren Montag." },
            ].map((step) => (
              <div key={step.n} className="flex flex-col items-center text-center">
                <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-regal-blue text-xl font-bold text-white">
                  {step.n}
                </div>
                <h3 className="mb-2 text-h5 font-bold">{step.t}</h3>
                <p>{step.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="px-6 md:px-12 py-16 md:py-24 lg:py-28 scheme-2">
        <div className="mx-auto w-full max-w-lg text-center">
          <p className="mb-6 text-h5 font-bold italic">
            "{kurs.testimonial.text}"
          </p>
          <p className="font-semibold">{kurs.testimonial.author}</p>
          <p className="text-neutral-dark">{kurs.testimonial.role}</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 md:px-12 py-16 md:py-24 lg:py-28 scheme-3">
        <div className="mx-auto w-full max-w-lg">
          <h2 className="mb-12 text-center text-h2 font-bold md:mb-18">Häufige Fragen</h2>
          <div className="flex flex-col gap-4">
            {kurs.faq.map((item, i) => (
              <details key={i} className="group rounded-card bg-white p-6 shadow-sm">
                <summary className="cursor-pointer list-none font-semibold">
                  {item.q}
                </summary>
                <p className="mt-3 text-neutral-dark">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-16 md:py-24 lg:py-28 scheme-1">
        <div className="mx-auto w-full max-w-lg text-center">
          <h2 className="mb-5 text-h2 font-bold md:mb-6">
            Bereit, deine Karriere in die eigene Hand zu nehmen?
          </h2>
          <p className="mb-8 text-medium">
            Starte mit einer kostenlosen Erstberatung – wir begleiten dich von der
            Beantragung des Bildungsgutscheins bis zum Kursabschluss.
          </p>
          <Link
            href="/beratung-buchen"
            className="inline-flex items-center justify-center rounded-md bg-regal-blue px-8 py-3 font-semibold text-white hover:bg-regal-blue-dark transition-colors"
          >
            Jetzt kostenlose Erstberatung sichern
          </Link>
        </div>
      </section>
    </>
  );
}

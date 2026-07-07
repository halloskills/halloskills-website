import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { KURSE, KURSE_LIST } from "@/lib/kurse-data";
import { KursSchritte } from "@/components/sections/kurse/kurs-schritte";

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
  return {
    title: kurs.metaTitle,
    description: kurs.metaDescription,
    openGraph: {
      title: kurs.metaTitle,
      description: kurs.metaDescription,
      images: kurs.img ? [{ url: kurs.img, width: 1200, height: 630, alt: kurs.title }] : undefined,
    },
  };
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

      {/* Hero */}
      <section
        className="relative flex min-h-[55vh] items-center overflow-hidden"
        style={{ backgroundColor: "#004B76" }}
      >
        {kurs.img && (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${kurs.img}')`, opacity: 0.35 }}
          />
        )}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 100%)" }}
        />
        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 py-16 md:px-12 md:py-24">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2 text-[0.75rem] uppercase tracking-[0.1em]" style={{ color: "rgba(255,255,255,0.55)" }}>
            <Link href="/" className="hover:text-white transition-colors">Startseite</Link>
            <span>/</span>
            <Link href="/kurse" className="hover:text-white transition-colors">Weiterbildungen</Link>
            <span>/</span>
            <span style={{ color: "#D4AF37" }}>{kurs.subtitle}</span>
          </nav>

          <div className="max-w-[620px]">
            <span
              className="mb-5 block text-[0.75rem] font-bold uppercase tracking-[0.12em]"
              style={{ color: "#D4AF37" }}
            >
              {kurs.subtitle}
            </span>
            <h1
              className="mb-6"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 400,
                color: "#ffffff",
                lineHeight: 1.2,
              }}
            >
              {kurs.title}
            </h1>
            <p className="mb-10" style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: 520 }}>
              {kurs.description}
            </p>

            {/* Badges */}
            <div className="mb-10 flex flex-wrap gap-3">
              {[
                `⏱ ${kurs.dauer}`,
                "✓ AZAV-zertifiziert",
                "💻 100% Online",
                "🎓 Bildungsgutschein",
              ].map((b) => (
                <span
                  key={b}
                  className="rounded-full px-4 py-1.5 text-[0.75rem] font-semibold"
                  style={{ background: "rgba(255,255,255,0.12)", color: "#ffffff", border: "1px solid rgba(255,255,255,0.2)" }}
                >
                  {b}
                </span>
              ))}
            </div>

            <Link
              href="/beratung-buchen"
              className="inline-block border-[1.5px] border-white px-7 py-3 text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-white hover:text-[#004B76]"
            >
              Kostenlose Beratung buchen
            </Link>
          </div>
        </div>
      </section>

      {/* Kursinhalte */}
      <section className="py-24" style={{ background: "#ffffff" }}>
        <div className="mx-auto max-w-[1200px] px-6 md:px-12">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
              <span
                className="mb-5 block text-[0.75rem] font-bold uppercase tracking-[0.12em]"
                style={{ color: "#D4AF37" }}
              >
                Kursinhalte
              </span>
              <h2
                className="mb-8"
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                  fontWeight: 400,
                  color: "#0f2744",
                }}
              >
                Was du lernst
              </h2>
              <ul className="flex flex-col gap-4">
                {kurs.inhalte.map((inhalt, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div
                      className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full"
                      style={{ background: "#004B76" }}
                    >
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4l2.5 2.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span style={{ color: "#111827", fontSize: "0.95rem", lineHeight: 1.6 }}>{inhalt}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src={kurs.img ?? "/images/bilder/kurs-bueromanagement.png"}
                className="w-full rounded-2xl object-cover"
                alt={kurs.title}
                style={{ aspectRatio: "4/3" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vorteile */}
      <section className="py-24" style={{ background: "#f5f7f9" }}>
        <div className="mx-auto max-w-[1200px] px-6 md:px-12">
          <div className="mb-14 text-center">
            <span
              className="mb-5 block text-[0.75rem] font-bold uppercase tracking-[0.12em]"
              style={{ color: "#D4AF37" }}
            >
              Deine Vorteile
            </span>
            <h2
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                fontWeight: 400,
                color: "#0f2744",
              }}
            >
              Lernen, das sofort funktioniert
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {kurs.vorteile.map((v, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-xl bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                style={{ border: "1px solid #e5e7eb" }}
              >
                <div
                  className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full"
                  style={{ background: "#004B76" }}
                >
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4l2.5 2.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span style={{ color: "#111827", fontSize: "0.9rem", lineHeight: 1.6 }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3-Schritte Scroll-Animation */}
      <KursSchritte img={kurs.stepsImg ?? "/images/bilder/prozess.png"} />

      {/* FAQ */}
      <section className="py-24" style={{ background: "#f5f7f9" }}>
        <div className="mx-auto max-w-[760px] px-6 md:px-12">
          <div className="mb-14 text-center">
            <span
              className="mb-5 block text-[0.75rem] font-bold uppercase tracking-[0.12em]"
              style={{ color: "#D4AF37" }}
            >
              FAQ
            </span>
            <h2
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                fontWeight: 400,
                color: "#0f2744",
              }}
            >
              Häufige Fragen
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            {kurs.faq.map((item, i) => (
              <details key={i} className="group rounded-xl bg-white p-6" style={{ border: "1px solid #e5e7eb" }}>
                <summary
                  className="cursor-pointer list-none"
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: "1rem",
                    fontWeight: 400,
                    color: "#0f2744",
                  }}
                >
                  {item.q}
                </summary>
                <p className="mt-4" style={{ fontSize: "0.9rem", color: "#475467", lineHeight: 1.7 }}>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" style={{ background: "#ffffff" }}>
        <div className="mx-auto max-w-[760px] px-6 text-center md:px-12">
          <span
            className="mb-5 block text-[0.75rem] font-bold uppercase tracking-[0.12em]"
            style={{ color: "#D4AF37" }}
          >
            Jetzt starten
          </span>
          <h2
            className="mb-6"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
              fontWeight: 400,
              color: "#0f2744",
            }}
          >
            Bereit für deine Weiterbildung?
          </h2>
          <p className="mb-10 leading-[1.7]" style={{ color: "#475467", fontSize: "1rem" }}>
            Starte mit einer kostenlosen Erstberatung. Wir begleiten dich von der Beantragung des Bildungsgutscheins bis zum Abschluss.
          </p>
          <Link
            href="/beratung-buchen"
            className="inline-block border-[1.5px] border-[#004B76] px-8 py-3.5 text-[0.8rem] font-semibold uppercase tracking-[0.1em] transition-colors hover:bg-[#004B76] hover:text-white"
            style={{ color: "#004B76" }}
          >
            Kostenlose Beratung buchen
          </Link>
        </div>
      </section>
    </>
  );
}

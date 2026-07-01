import FadeUp from "@/components/ui/FadeUp";
import Link from "next/link";

const schritte = [
  {
    nr: "01",
    title: "Beratung buchen",
    desc: "Wir klären in einem kostenlosen 20-minütigen Gespräch deine Situation, deine Ziele und welcher Kurs perfekt zu dir passt. Kein Verkaufsgespräch, echte Beratung.",
  },
  {
    nr: "02",
    title: "Bildungsgutschein beantragen",
    desc: "Wir bereiten dich optimal auf den Termin bei der Agentur für Arbeit oder dem Jobcenter vor. Mit unserer Unterlagen-Checkliste und bewährten Argumentationshilfen gehst du sicher rein.",
  },
  {
    nr: "03",
    title: "Durchstarten",
    desc: "Sobald dein Bildungsgutschein genehmigt ist, erhältst du alle Zugänge, ein persönliches Onboarding und startest am nächsten verfügbaren Montag in deinen Kurs.",
  },
];

export default function WieFunktioniertEs() {
  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: "#004B76" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="text-center mb-14">
            <h2
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "Georgia, serif" }}
            >
              In 3 Schritten zum neuen Job
            </h2>
            <p className="text-[#99CDD1] text-lg max-w-2xl mx-auto">
              Du bist nur drei Schritte von deiner nächsten Karriere entfernt. Wir führen dich von der ersten Orientierung bis zu deinem Start im neuen Job.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {schritte.map((s, i) => (
            <FadeUp key={s.nr} delay={i * 0.15}>
              <div className="relative">
                {/* Connector line */}
                {i < schritte.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-white/20 -translate-x-1/2 z-0" />
                )}
                <div className="relative z-10 text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 text-xl font-bold"
                    style={{ backgroundColor: "#D4AF37", color: "#111827", fontFamily: "Georgia, serif" }}
                  >
                    {s.nr}
                  </div>
                  <h3
                    className="text-xl font-bold text-white mb-3"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-[#99CDD1] text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.3}>
          <div className="text-center">
            <Link
              href="/beratung-buchen"
              className="inline-flex items-center px-8 py-4 rounded-md text-base font-semibold text-white border-2 border-white/40 hover:bg-white/10 transition-all"
            >
              Jetzt kostenlos starten →
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

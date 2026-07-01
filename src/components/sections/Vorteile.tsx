import FadeUp from "@/components/ui/FadeUp";
import Link from "next/link";

const vorteile = [
  {
    icon: "💰",
    title: "Komplett gefördert",
    desc: "Dank Bildungsgutschein zahlst du keinen einzigen Euro. Wir übernehmen die Kommunikation mit der Agentur für Arbeit, kein Papierchaos für dich.",
  },
  {
    icon: "👤",
    title: "Persönliche Betreuung",
    desc: "Von der ersten Beratung bis zum Jobstart hast du einen festen Ansprechpartner. Kein Call-Center, keine Warteschleifen, echte Begleitung.",
  },
  {
    icon: "🌐",
    title: "100% online & flexibel",
    desc: "Lerne von zuhause aus, im eigenen Tempo. Live-Sessions, aufgezeichnete Inhalte und lebenslanger Zugriff auf alle Lernmaterialien.",
  },
  {
    icon: "💼",
    title: "Direkte Jobvermittlung",
    desc: "Nach dem Abschluss helfen wir dir aktiv beim Einstieg in den Arbeitsmarkt, mit Bewerbungscoaching und direktem Kontakt zu Arbeitgebern.",
  },
];

export default function Vorteile() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <FadeUp>
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider mb-3 block" style={{ color: "#004B76" }}>
                Warum HalloSkills
              </span>
              <h2
                className="text-3xl sm:text-4xl font-bold mb-6"
                style={{ fontFamily: "Georgia, serif", color: "#0f2744" }}
              >
                Mehr als eine Weiterbildung,{" "}
                <span style={{ color: "#004B76" }}>ein echter Neustart.</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Wir hören dir zu und nehmen uns die Zeit zu verstehen, wo du deine Ziele siehst.
                Dann bauen wir gemeinsam genau deine Weiterbildung, individuell angepasst, nicht von der Stange.
              </p>
              <Link
                href="/beratung-buchen"
                className="inline-flex items-center px-7 py-3.5 rounded-md text-base font-semibold text-white transition-all hover:opacity-90"
                style={{ backgroundColor: "#004B76" }}
              >
                Jetzt kostenlos beraten lassen
              </Link>
            </div>
          </FadeUp>

          {/* Right: Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {vorteile.map((v, i) => (
              <FadeUp key={v.title} delay={i * 0.1}>
                <div
                  className="p-6 rounded-xl border border-gray-100 hover:border-[#004B76]/20 hover:shadow-md transition-all duration-300"
                  style={{ backgroundColor: "#F5F7F9" }}
                >
                  <span className="text-3xl block mb-3">{v.icon}</span>
                  <h3
                    className="text-base font-bold mb-2"
                    style={{ fontFamily: "Georgia, serif", color: "#0f2744" }}
                  >
                    {v.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

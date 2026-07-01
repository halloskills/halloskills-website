import Link from "next/link";
import FadeUp from "@/components/ui/FadeUp";

const kurse = [
  {
    slug: "projektmanagement",
    tag: "Projektmanagement",
    tagColor: "#004B76",
    title: "Projektmanagement – Klassisch, agil & digital",
    desc: "Klassisches & agiles Projektmanagement, Scrum, PRINCE2, digitale PM-Tools. Du verlässt den Kurs mit einem anerkannten Zertifikat und dem Know-how, das Arbeitgeber heute wirklich suchen.",
    dauer: "12–28 Wochen",
    start: "Jeden Montag",
  },
  {
    slug: "online-marketing",
    tag: "Online Marketing",
    tagColor: "#99CDD1",
    title: "Online Marketing Manager:in",
    desc: "SEO, Social Media, Performance Marketing, Google Ads und KI-Tools im Marketing. Ein Rundum-Kurs für den Einstieg in eine der gefragtesten Branchen.",
    dauer: "24–36 Wochen",
    start: "Jeden Montag",
  },
  {
    slug: "ki-digitalisierung",
    tag: "KI & Digitalisierung",
    tagColor: "#D4AF37",
    title: "KI & digitale Transformation",
    desc: "KI-Grundlagen, Automatisierung, Prompt Engineering und digitale Geschäftsprozesse. Werde fit für den Arbeitsmarkt von morgen.",
    dauer: "10–20 Wochen",
    start: "Jeden Montag",
  },
];

export default function Kurse() {
  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: "#F5F7F9" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="text-center mb-14">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ fontFamily: "Georgia, serif", color: "#0f2744" }}
            >
              Unsere Top-Weiterbildungen
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Drei Schwerpunkte. Alle AZAV-zertifiziert. Alle vollständig gefördert.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {kurse.map((kurs, i) => (
            <FadeUp key={kurs.slug} delay={i * 0.12}>
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
                <div className="p-6 flex-1">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
                    style={{ backgroundColor: kurs.tagColor + "20", color: kurs.tagColor === "#99CDD1" ? "#004B76" : kurs.tagColor }}
                  >
                    {kurs.tag}
                  </span>
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ fontFamily: "Georgia, serif", color: "#0f2744" }}
                  >
                    {kurs.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{kurs.desc}</p>
                  <div className="flex gap-4 text-sm text-gray-500">
                    <span>⏱ {kurs.dauer}</span>
                    <span>📅 Start: {kurs.start}</span>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <Link
                    href={`/kurse/${kurs.slug}`}
                    className="inline-flex items-center text-sm font-semibold transition-colors hover:underline"
                    style={{ color: "#004B76" }}
                  >
                    Kurs ansehen →
                  </Link>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

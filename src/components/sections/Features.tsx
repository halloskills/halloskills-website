import FadeUp from "@/components/ui/FadeUp";

const features = [
  {
    icon: "🎓",
    title: "Bildungsgutschein möglich",
    desc: "Viele unserer Kurse sind über den Bildungsgutschein der Agentur für Arbeit förderbar – sprich uns an.",
  },
  {
    icon: "🏅",
    title: "Anerkanntes Zertifikat",
    desc: "Du erhältst ein anerkanntes Abschlusszertifikat inkl. Teilzertifikate für abgeschlossene Module.",
  },
  {
    icon: "💻",
    title: "100% online",
    desc: "Lerne flexibel von zuhause, ohne Präsenzpflicht, mit lebenslangem Zugriff auf alle Inhalte.",
  },
  {
    icon: "🤝",
    title: "Persönliche Betreuung",
    desc: "Dein fester Ansprechpartner begleitet dich von der Beratung bis zum Jobstart.",
  },
];

export default function Features() {
  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <FadeUp key={f.title} delay={i * 0.1}>
              <div className="flex items-start gap-4">
                <span className="text-2xl mt-0.5">{f.icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1" style={{ fontFamily: "Georgia, serif" }}>
                    {f.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

import FadeUp from "@/components/ui/FadeUp";
import CountUp from "@/components/ui/CountUp";

const stats = [
  { value: 87, suffix: " %", label: "unserer Absolvent:innen finden nach der Weiterbildung einen neuen Job" },
  { value: 1500, suffix: "+", label: "Teilnehmende haben ihre Weiterbildung mit uns erfolgreich abgeschlossen" },
  { value: 3, suffix: "", label: "Kursschwerpunkte – alle AZAV-zertifiziert und vollständig gefördert" },
  { value: 100, suffix: " %", label: "Kostenübernahme durch Bildungsgutschein oder AVGS – du zahlst nichts" },
];

export default function Statistiken() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="text-center mb-14">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ fontFamily: "Georgia, serif", color: "#0f2744" }}
            >
              Zahlen, die für sich sprechen
            </h2>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className="text-center p-6">
                <div
                  className="text-5xl font-bold mb-3"
                  style={{ fontFamily: "Georgia, serif", color: "#004B76" }}
                >
                  <CountUp end={s.value} suffix={s.suffix} />
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{s.label}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

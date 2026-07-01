import FadeUp from "@/components/ui/FadeUp";

const testimonials = [
  {
    quote: "Die Beratung hat mich sofort überzeugt. Ich habe viele Anbieter kontaktiert, aber bei HalloSkills wurde wirklich auf meine Situation eingegangen. Kein Standard-Pitch – echte Beratung.",
    name: "Fatima K.",
    kurs: "Online Marketing Managerin",
    sterne: 5,
  },
  {
    quote: "Vom ersten Gespräch bis zum Job – immer begleitet. Was mich am meisten beeindruckt hat: Das Team war nicht nur während des Kurses da, sondern hat mich aktiv bei der Jobsuche unterstützt.",
    name: "Marcus T.",
    kurs: "Projektmanager",
    sterne: 5,
  },
  {
    quote: "100% gefördert und trotzdem Topqualität. Ich hätte nicht gedacht, dass eine kostenlose Weiterbildung so hochwertig sein kann. Die Inhalte sind aktuell, praxisnah und sofort anwendbar.",
    name: "Sandra L.",
    kurs: "KI & Automatisierung",
    sterne: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4" fill="#D4AF37" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: "#F5F7F9" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="text-center mb-14">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ fontFamily: "Georgia, serif", color: "#0f2744" }}
            >
              Das sagen unsere Absolvent:innen
            </h2>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <FadeUp key={t.name} delay={i * 0.12}>
              <div className="bg-white rounded-xl p-7 border border-gray-100 hover:shadow-md transition-shadow h-full flex flex-col">
                <Stars count={t.sterne} />
                <blockquote className="text-gray-700 text-sm leading-relaxed flex-1 italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                    style={{ backgroundColor: "#004B76" }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.kurs}</div>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

import FadeUp from "@/components/ui/FadeUp";

const partner = [

  { name: "Agentur für Arbeit", abbr: "ArbA" },
  { name: "Jobcenter", abbr: "JC" },
  { name: "SGB II / SGB III", abbr: "SGB" },
  { name: "ESF Europäischer Sozialfonds", abbr: "ESF" },
];

export default function LogoLeiste() {
  return (
    <section className="py-14 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <p className="text-center text-sm font-medium text-gray-400 uppercase tracking-wider mb-8">
            Anerkannte Förderpartner
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {partner.map((p) => (
              <div
                key={p.name}
                className="flex items-center justify-center px-6 py-3 rounded-lg border border-gray-200"
                title={p.name}
                style={{ minWidth: 100 }}
              >
                <span
                  className="text-sm font-bold text-gray-500"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {p.abbr}
                </span>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

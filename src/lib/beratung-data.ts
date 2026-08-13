/**
 * Inhalte der Beratungsseite im Design System v1.0.
 *
 * Die Formular-Auswahl "interesse" listet die drei aktuellen Lehrgänge
 * (siehe kurse-data.ts) statt der alten Kurse (Projektmanagement,
 * Online Marketing, KI & Digitalisierung) — Stand des Rebrands.
 */

export const LEHRGANG_OPTIONEN = [
  { value: "bueromanagement", label: "Büromanagement" },
  { value: "industriewirtschaft", label: "Industriewirtschaft" },
  { value: "bankwesen", label: "Bankwesen" },
  { value: "unsicher", label: "Ich bin noch unsicher" },
];

export const BERATUNG_FAQ = [
  {
    frage: "Wie läuft das Beratungsgespräch ab?",
    antwort:
      "Das kostenlose Erstgespräch dauert etwa 20–30 Minuten und findet per Telefon oder Videocall statt. Wir klären deine Situation, besprechen den passenden Lehrgang und erklären den nächsten Schritt zum Bildungsgutschein.",
  },
  {
    frage: "Muss ich mich nach dem Gespräch für etwas entscheiden?",
    antwort:
      "Nein. Das Erstgespräch ist vollständig unverbindlich. Du entscheidest danach in Ruhe, ob und wie es weitergeht.",
  },
  {
    frage: "Welche Unterlagen brauche ich für das Gespräch?",
    antwort:
      "Für das erste Gespräch brauchst du nichts. Wenn du den Bildungsgutschein beantragen möchtest, helfen wir dir danach mit einer vollständigen Unterlagen-Checkliste.",
  },
  {
    frage: "Wie schnell bekomme ich einen Termin?",
    antwort:
      "Nach deiner Anfrage melden wir uns innerhalb von 24 Stunden bei dir und stimmen gemeinsam einen passenden Termin ab.",
  },
];

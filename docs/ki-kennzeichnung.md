# KI-Kennzeichnung von Bildern: der „AI-Kreis“

Diese Anleitung gilt für alle HalloSkills-Websites (halloskills.de, career now) und ist in der `CLAUDE.md` eingebunden. Maßgeblich für die Umsetzung ist die Regel in der `CLAUDE.md` (Abschnitt „KI-Kennzeichnung von Bildern“). Dieses Dokument erklärt den Hintergrund und das Vorgehen.

Die frühere Variante (EU-Icon „AI GENERATED“ als Pille per `add-ai-badge.py`) ist abgelöst. Sie war zu groß und wirkte je nach Bild unterschiedlich stark.

## 1. Grundsatz

Bilder, die mit KI erzeugt wurden und fotorealistisch wirken, bekommen einen kleinen runden Kreis mit „AI“ direkt im Bild. Texte und alles andere wurde von Menschen geschrieben und wird **nicht** gekennzeichnet.

Rechtlicher Hintergrund: Ab dem **2. August 2026** verlangt Artikel 50 des EU AI Act eine klare Kennzeichnung von KI-generierten oder KI-manipulierten Bild-, Audio- und Videoinhalten (Deepfakes). Die EU-Kommission hat dafür Icons veröffentlicht, deren Verwendung freiwillig ist. Die Kennzeichnungspflicht selbst gilt unabhängig davon. Wir nutzen als einheitliches, dezentes Zeichen den AI-Kreis.

## 2. Was gekennzeichnet wird

| Bildtyp | Kreis? |
|---|---|
| Fotorealistische KI-Bilder (mit oder ohne Menschen) | **Ja** |
| Grafiken, Infografiken, Illustrationen, Icons | Nein |
| Screenshots, Logos, Favicons | Nein |
| Echte Fotos und Stockfotos (z. B. Unsplash) | Nein |
| Team-Fotos | Aktuell nicht gekennzeichnet (offen, werden voraussichtlich ersetzt) |

Ob ein Bild KI-generiert ist, entscheidet Jenny. Im Zweifel nachfragen, nicht selbst kennzeichnen. Wird ein Bild später durch ein echtes Foto ersetzt, entfällt der Kreis.

## 3. Aussehen und Position

- Kleiner runder Kreis mit „AI“ in der Mitte: Kreis `#0F172A` mit ca. 75 % Deckkraft, „AI“ weiß und fett. Auf sehr dunklen Bildstellen umgekehrt (weißer Kreis, dunkles „AI“).
- **Größe auf dem Bildschirm überall gleich: 16 px am Desktop, 14 px auf dem Handy.**
- Position unten links, Abstand links und unten je 3 % der Bildbreite.
- Bei Freistellern auf weißem Hintergrund (Option `--inset`) sitzt der Kreis unten links am Rand des Motivs, nicht in der leeren Ecke und nicht über Gesicht oder Händen.
- Im sicheren Bereich: nicht von abgerundeten Bildmasken (`--r`), Textfeldern auf Karten (`--lift`) oder `object-cover`-Ausschnitten (`--crop`) verdeckt oder abgeschnitten.

## 4. Regeln der EU zur Platzierung

- Das Zeichen muss **spätestens beim ersten Sehen** klar erkennbar sein.
- **Keine überlagernden Elemente** (Karten, Buttons, Verläufe, Texte) über dem Zeichen.
- Das Zeichen wird **direkt ins Bild eingebettet**, nicht per CSS darübergelegt. So bleibt es beim Teilen, Herunterladen und als Social-Media-Vorschau (`og:image`) sichtbar.
- Barrierefreiheit: Der **Alt-Text** nennt die KI-Erzeugung und endet mit „(KI-generiert)“.
- Die Verwendung der Zeichen allein stellt **keine Rechtskonformität** sicher. Die Verantwortung für Artikel 50 bleibt beim Betreiber. Bei rechtlichen Fragen die Rechtsberatung einbeziehen.

## 5. Umsetzung im Projekt

Der Kreis wird mit `scripts/add-ai-circle.mjs` (Node, nutzt `sharp`) in die Bilddatei eingebrannt. Weil er mit dem Bild skaliert, entstehen pro Bild und Darstellung **zwei Dateien**: `-d` (Desktop) und `-m` (Mobil). Das Skript erzeugt beide in einem Schritt.

```bash
node scripts/add-ai-circle.mjs <unbeschriftetes-original> public/images/<ordner>/<name>-ai --dw=<px> --mw=<px> [--crop=B:H] [--r=<px[,px]>] [--lift=<px[,px]>] [--inset] [--jpg]
```

- `--dw` / `--mw`: Breite in px, in der das Bild am Desktop bzw. mobil auf der Seite erscheint. Vorher im Browser messen (Entwicklerwerkzeuge oder `getBoundingClientRect()`), bei `object-contain` die tatsächlich gezeichnete Breite.
- `--crop=B:H`: vorher mittig auf das Seitenverhältnis des Anzeigerahmens zuschneiden (z. B. `16:9`, `4:5`, `9:10`). Pflicht bei `aspect-*` mit `object-cover`.
- `--r`: Eckenradius der Maske unten links in Bildschirm-px (Desktop,Mobil oder ein Wert).
- `--lift`: zusätzlicher Abstand unten in Bildschirm-px, wenn ein Textfeld das Bild unten überlagert.
- `--inset`: Freisteller auf Weiß.
- `--jpg`: Ausgabe als JPG statt WebP (für `og:image`, das nicht alle Netzwerke als WebP lesen).
- PNG-Quellen werden als WebP ausgegeben (die PNGs wären mehrere MB groß), JPG bleibt JPG.
- **Immer vom Original ohne Kreis ausgehen**, nie ein schon gekennzeichnetes Bild erneut bearbeiten. Die Originale liegen in der Git-Historie.

Im Code: `src/components/AiImage.tsx` zeigt je nach Bildschirmbreite (ab 768 px) die `-d`- oder `-m`-Datei. Im Blog-Fließtext erzeugt `kiBild()` in `src/lib/blog-data.ts` das `<picture>`.

## 6. Checkliste für jedes neue Bild

1. Ist es ein fotorealistisches KI-Bild? Das entscheidet Jenny. Sonst kein Kreis.
2. Anzeigebreite am Desktop und mobil (390 px) messen, Anzeigerahmen (Seitenverhältnis, Rundung, Textfeld darüber) notieren.
3. Skript ausführen, neue Dateinamen (`-ai-d`, `-ai-m`, kleingeschrieben, URL-sicher), alte Datei löschen, Verweise anpassen.
4. Alt-Text mit „(KI-generiert)“ am Ende.
5. Im Browser prüfen: Kreis nicht abgeschnitten oder überlagert, nicht auf Gesicht oder Händen, überall 16 px bzw. 14 px.

## 7. Quellen

- EU-Kommission, Icons zur Kennzeichnung KI-generierter Inhalte: https://digital-strategy.ec.europa.eu/en/policies/eu-icons-labelling-ai-generated-content
- Code of Practice on Transparency of AI-generated Content: https://digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content

# KI-Kennzeichnung von Bildern (projektübergreifende Anweisung)

Diese Anleitung gilt für alle HalloSkills-Websites (halloskills.de, career-now). Sie kann unverändert in andere Projekte kopiert und in der `CLAUDE.md` per `@docs/ki-kennzeichnung.md` eingebunden werden.

## 1. Grundsatz

Alle Bilder auf unseren Websites sind mit ChatGPT erstellt, also KI-generiert. Texte und alles andere wurde von Menschen geschrieben und wird **nicht** gekennzeichnet. Gekennzeichnet werden nur die Bilder.

Rechtlicher Hintergrund: Ab dem **2. August 2026** verlangt Artikel 50 des EU AI Act eine klare Kennzeichnung von KI-generierten oder KI-manipulierten Bild-, Audio- und Videoinhalten (Deepfakes). Die EU-Kommission hat dafür offizielle Icons veröffentlicht. Deren Verwendung ist freiwillig, die Kennzeichnungspflicht selbst nicht.

## 2. Was bei uns gekennzeichnet wird

| Bildtyp | Badge? |
|---|---|
| Fotos und Bilder, auf denen Menschen zu sehen sind (auch Teile wie Hände) | **Ja** |
| Icons, Grafiken, Infografiken, Illustrationen | Nein, nicht verpflichtend |
| Bilder ohne Personen (z. B. Schreibtisch mit Unterlagen, Laptop am Fenster) | Nein |
| Logos, Favicons | Nein |
| Team-Fotos | Aktuell ausgenommen (werden voraussichtlich ersetzt) |

Im Zweifel nachfragen. Wird ein Bild später durch ein echtes Foto ersetzt, muss das Badge nicht mehr drauf.

## 3. Die offiziellen EU-Icons

Es gibt drei Varianten:

| Icon | Wann verwenden |
|---|---|
| **AI GENERATED** | Inhalt wurde vollständig von KI erzeugt (bei uns: alle ChatGPT-Bilder). Das erste Prompting zählt nicht als menschlicher Anteil. |
| **AI MODIFIED** | Ein vorhandenes, von Menschen erstelltes Bild wurde von KI teilweise verändert (z. B. Gesicht getauscht, Raum per KI möbliert). |
| **AI** (Basis-Icon) | KI war beteiligt, es wird aber ein eigener Text oder eine interaktive zweite Ebene ergänzt. |

Jede Variante gibt es in vier Farbfassungen: **black**, **white**, **black transparent** (schwarz mit 50 % Transparenz) und **white transparent** (weiß mit 50 % Transparenz).

**Unser Standard:** `LABEL_AI GENERATED_black transparent.png` (graue Pille mit weißer Schrift, wirkt auf hellen und dunklen Bildern). Auf sehr hellen Bildern, bei denen das Grau untergeht, `LABEL_AI GENERATED_black.png` nehmen.

### Wo liegen die Dateien?

SharePoint, Site „Marketing“, Freigegebene Dokumente:

- halloskills.de: `02 HS Website / 04 Website Assets / EU LABEL AI GENERATED`
- career-now: `00 career now / 02 cn Website / 04 Website Assets / EU LABEL AI GENERATED`

In beiden Ordnern liegen dieselben 12 Dateien: `LABEL_AI GENERATED_…`, `LABEL_AI MODIFIED_…` und `LABEL_AI_…`, jeweils als black, black transparent, white und white transparent.

Offizielle Quelle (mit SVG- und PNG-Download): https://digital-strategy.ec.europa.eu/en/policies/eu-icons-labelling-ai-generated-content

## 4. Regeln für die Platzierung (laut EU)

- Das Icon muss **spätestens beim ersten Sehen** klar erkennbar und unterscheidbar sein.
- **Keine überlagernden Elemente** über dem Icon (keine Karten, Buttons, Verläufe oder Texte darüber).
- Das Icon wird **direkt ins Bild eingebettet**, nicht nur per CSS darübergelegt. So bleibt es sichtbar, wenn das Bild geteilt, heruntergeladen oder als Social-Media-Vorschau (`og:image`) verwendet wird.
- Das Icon muss in **gut sichtbarer Größe** erscheinen. Bei kleinen Darstellungen (Kacheln, Vorschaubilder) das Badge größer skalieren.
- Barrierefreiheit: Ein **Alt-Text** soll angeben, dass das Bild KI-generiert ist (z. B. „KI-generiertes Bild: Frau arbeitet am Laptop“). Beschriftungen in einfacher Sprache, ohne Abkürzungen außer „AI“.
- Die Nutzung der Icons allein stellt **keine Rechtskonformität** sicher. Die Verantwortung für die Erfüllung von Artikel 50 bleibt beim Betreiber. Bei rechtlichen Fragen die Rechtsberatung einbeziehen.
- Die Icons sind frei nutzbar, eine Namensnennung ist nicht nötig.

## 5. Umsetzung im Projekt

### Badge einbrennen

Das Badge wird mit einem kleinen Skript in die Bilddatei eingebaut (nicht per CSS). Voraussetzungen: Python 3 mit Pillow (`pip install pillow`).

1. Das Badge vorbereiten: `LABEL_AI GENERATED_black transparent.png` aus SharePoint holen, auf den sichtbaren Bereich zuschneiden (transparenten Rand entfernen, z. B. `Image.open(...).crop(im.getbbox())`) und als `scripts/assets/ai-generated-badge.png` ablegen.
2. Das Skript unten als `scripts/add-ai-badge.py` speichern.
3. Pro Bild **einmal** ausführen:

```bash
python3 scripts/add-ai-badge.py public/images/<pfad>/<bild>.png [bl|br|tl|tr|strip] [breite]
```

- Standardposition ist `bl` (unten links). Das ist meist am sichersten, weil abgerundete Bildmasken unten rechts häufiger Ecken abschneiden.
- `breite` ist der Anteil der Bildbreite (Standard `0.20`). Bei klein dargestellten Bildern (z. B. 180 px breite Hochformat-Bilder) auf etwa `0.45` erhöhen.
- `strip` hängt unten einen schmalen Streifen in der Randfarbe an und setzt das Badge dorthin. Das ist für Bilder mit Text oder wichtigen Inhalten bis zum Rand gedacht. (Infografiken brauchen bei uns kein Badge, falls doch, dann `strip`.)
- Bereits gekennzeichnete PNG/JPG werden übersprungen (Marker in den Metadaten). Bei WebP gibt es keinen Marker, dort nur einmal ausführen. Fehler beim Einbrennen lassen sich mit `git checkout -- <bild>` rückgängig machen.

### Skript

```python
#!/usr/bin/env python3
"""Setzt das "AI GENERATED"-Badge in eine Ecke eines Bildes (in place).

Aufruf: python3 scripts/add-ai-badge.py <bild> [bl|br|tl|tr|strip] [breite=0.20]
"strip" hängt unten einen Streifen in der Randfarbe an.
Einmal pro Bild ausführen. Bereits gekennzeichnete PNG/JPG werden übersprungen.
"""
import sys
from pathlib import Path
from PIL import Image, PngImagePlugin

BADGE = Path(__file__).parent / "assets" / "ai-generated-badge.png"
MARKER = "ai-badge"


def apply(path, corner="bl", out=None, size=0.20):
    path = Path(path)
    im = Image.open(path)
    if im.info.get(MARKER) or im.info.get("comment") == MARKER.encode():
        print(f"skip (schon gekennzeichnet): {path}")
        return
    fmt = im.format
    had_alpha = im.mode in ("RGBA", "LA") or "transparency" in im.info
    base = im.convert("RGBA")
    w, h = base.size
    badge = Image.open(BADGE).convert("RGBA")
    bw = max(int(w * size), 150)
    bw = min(bw, int(w * 0.6))
    bh = round(badge.height * bw / badge.width)
    badge = badge.resize((bw, bh), Image.LANCZOS)
    m = round(max(w * 0.04, 12))
    if corner == "strip":
        row = [base.getpixel((i, h - 1)) for i in range(0, w, max(w // 200, 1))]
        col = tuple(sorted(c[k] for c in row)[len(row) // 2] for k in range(4))
        strip = bh + m
        canvas = Image.new("RGBA", (w, h + strip), col)
        canvas.paste(base, (0, 0))
        base, h = canvas, h + strip
        corner = "bl"
        m = m // 2 + m // 4
    x = m if corner[1] == "l" else w - bw - m
    y = m if corner[0] == "t" else h - bh - m
    base.alpha_composite(badge, (x, y))
    out = Path(out or path)
    if fmt == "PNG":
        meta = PngImagePlugin.PngInfo()
        meta.add_text(MARKER, "1")
        (base if had_alpha else base.convert("RGB")).save(out, "PNG", pnginfo=meta, optimize=True)
    elif fmt == "JPEG":
        base.convert("RGB").save(out, "JPEG", quality=90, comment=MARKER.encode())
    else:
        base.save(out, quality=90)
    print(f"ok: {out} ({corner})")


if __name__ == "__main__":
    apply(sys.argv[1], sys.argv[2] if len(sys.argv) > 2 else "bl", size=float(sys.argv[3]) if len(sys.argv) > 3 else 0.20)
```

## 6. Checkliste für jedes neue Bild

1. Zeigt das Bild Menschen (oder Körperteile)? Dann Badge nötig, sonst nicht.
2. Badge mit dem Skript einbrennen, Position und Größe so wählen, dass es **nichts Wichtiges verdeckt** und auch in der verkleinerten Darstellung lesbar bleibt.
3. Prüfen, ob das Badge in der Darstellung auf der Seite **nicht abgeschnitten** wird (Bildmasken mit großen Rundungen, `object-cover`-Ausschnitte, kleine runde Vorschaubilder) und nicht von Karten oder Buttons überlagert wird.
4. Alt-Text mit Hinweis auf KI-Generierung schreiben.
5. Dateiname URL-sicher wählen (keine Leerzeichen oder Sonderzeichen, ä→ae, ö→oe, ü→ue).

## 7. Quellen

- EU-Kommission, Icons zur Kennzeichnung KI-generierter Inhalte: https://digital-strategy.ec.europa.eu/en/policies/eu-icons-labelling-ai-generated-content
- Code of Practice on Transparency of AI-generated Content: https://digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content

@AGENTS.md

# HalloSkills Website — Standing Instructions

## Deploy-Workflow
- Live-Branch ist `redesign`. Ein Push auf `redesign` deployed automatisch (GitHub Actions → Azure Static Web Apps) nach ein paar Minuten live auf www.halloskills.de.
- Vor jedem Push: `npm run build` lokal ausführen und auf Fehler prüfen.
- Es gibt aktuell keinen Pull-Request-Workflow — wer gerade arbeitet, pusht direkt. Bei zwei Personen: kurz absprechen, wer gerade pusht, um Merge-Konflikte zu vermeiden. Vor dem eigenen Push ggf. `git pull`.

## Inhalte, die NICHT ohne Rückfrage geändert werden
- **Impressum, Datenschutz, Datenschutz-Bewerber**: bewusst unverändert lassen, außer bei einer eindeutigen sachlichen Korrektur. Im Zweifel nachfragen statt überschreiben.
- Keine Gedankenstriche (—) in sichtbaren Website-Texten — stattdessen Komma, Punkt, Doppelpunkt oder Satz umformulieren (gilt nicht für Pfeile → oder Zahlenbereiche mit Halbgeviertstrich wie „3–12 Monate").

## Design-System (hs-v2)
- Aktuelles Design-System heißt `hs-v2`: Montserrat, `--color-hs-*`-Tokens, Pill-Buttons, geteilte Bausteine in `src/components/sections/startseite-v2/hs-ui.tsx`.
- `.hs-v2 h1–h6` setzt global eine dunkle Navy-Textfarbe mit hoher Spezifität. Auf dunklen Hintergründen (Gradients, dunkle Karten) IMMER `!text-white` statt nur `text-white` verwenden, sonst ist die Überschrift kaum lesbar.
- Neue Seiten mit eigenem Header/Footer (`NavV2`/`FooterV2`) müssen in `src/components/SiteChrome.tsx` unter `EIGENES_CHROME` eingetragen werden — sonst wird zusätzlich das alte globale Chrome (`Navbar2`/`Footer4`) mitgerendert (doppelter Header/Footer).
- Routing: `public/staticwebapp.config.json` enthält bewusst keine Routen-Allowlist mehr. Neue Seiten werden direkt ausgeliefert, unbekannte URLs liefern ein echtes 404 (`404.html`).

## Content-Struktur
- Die 3 Kursseiten (Büromanagement, Industriekaufmann, Bankkaufmann) haben `src/lib/kurse-data.ts` als einzige Datenquelle (`KURSE`-Array, `Kurs`-Typ, `findeKurs()`).
- Blog-Artikel liegen in `src/lib/blog-data.ts` (`POSTS`-Array), `content` ist ein HTML-String (`<h2>`, `<p>`, `<ul>/<li>`, `<blockquote>`, `<strong>`, inline `<img>` für Zwischenbilder). Vor einem neuen Artikel immer erst prüfen, ob es nicht schon einen Beitrag zum gleichen Thema gibt (Slug/Titel abgleichen) — bei einer Aktualisierung lieber den bestehenden Post in-place ersetzen (gleicher Slug) statt zu duplizieren.
- Bilder aus SharePoint/lokalen Ordnern werden nach `public/images/...` kopiert (URL-sichere, transliterierte Dateinamen: ä→ae, ö→oe, ü→ue, keine Leer-/Sonderzeichen) und über `next/image` bzw. `<img>` referenziert — keine rohen Dateipfade mit Leerzeichen/Sonderzeichen committen.

## KI-Kennzeichnung von Bildern (EU AI Act, Art. 50) — „AI-Kreis“

Rechtlicher Hintergrund: @docs/ki-kennzeichnung.md. Die frühere Badge-Umsetzung („AI GENERATED“-Pille, `add-ai-badge.py`) ist **abgelöst** — maßgeblich ist ausschließlich diese Regel. Dasselbe System läuft auf career now.

**Aussehen (einheitlich auf der ganzen Seite):** kleiner runder Kreis mit „AI“ in der Mitte — Kreis `#0F172A` mit ca. 75 % Deckkraft, „AI“ weiß und fett; auf sehr dunklen Bildstellen umgekehrt (weißer Kreis, dunkles „AI“).

- **Größe: auf dem Bildschirm überall gleich — 16 px am Desktop, 14 px mobil**, egal wie groß das Bild gezeigt wird. Weil der Kreis ins Bild eingebrannt ist und mit dem Bild skaliert, gibt es **pro Bild und Darstellung zwei Dateien**: `<name>-ai-d.<ext>` (Desktop, ab 768 px) und `<name>-ai-m.<ext>` (Mobil). Der Code bindet sie über `src/components/AiImage.tsx` ein (`<AiImage src="/images/…-ai-d.webp" … />`, leitet die `-m`-Datei selbst ab; `breakpoint="sm"` wenn die Darstellung bei 640 px umspringt). Fremde Pfade (echte Fotos, Unsplash) zeigt die Komponente als normales Bild. Wird ein Bild nur am Desktop gezeigt (z. B. Elemente mit `hidden sm:block`) oder ist es ein og:image, reicht eine `-d`-Datei mit normalem `<Image>`. Im Blog-Fließtext (HTML-String in `blog-data.ts`) erzeugt `kiBild()` das `<picture>`.
- **Position:** unten links, Abstand unten und links je 3 % der Bildbreite, im sicheren Bereich (Karten, Vorschauen, mobil, `object-cover`). Sitzt das Bild in einer Maske mit abgerundeter Ecke unten links (Bogen-Bilder `999px 999px R R`), rückt der Kreis mit `--r` weiter nach innen. Liegt unten ein Textfeld über dem Bild (Kurskarten), sitzt der Kreis mit `--lift` darüber.
- **Ausnahme Freisteller:** Bei freigestellten Motiven auf weißem Hintergrund sitzt der Kreis unten links am Rand des Motivs, nicht in der Bildecke (Option `--inset`: erkennt Motivrand und Motivunterkante automatisch). Er soll nicht im weißen Rand schweben und nicht über Gesicht oder Händen liegen.
- **Direkt ins Bild eingebrannt** (nicht per CSS), damit er auch beim Teilen/Download/`og:image` sichtbar bleibt.
- **Welche Bilder:** nur fotorealistische KI-Bilder. Keine Grafiken, Infografiken, Illustrationen, Icons, Logos und keine echten Fotos/Stockfotos (z. B. die Unsplash-Titelbilder im Blog). Ob ein Bild KI-generiert ist, entscheidet Jenny — im Zweifel nachfragen, nicht selbst kennzeichnen. Team-Fotos (`public/images/team/`) sind aktuell nicht gekennzeichnet (offen).
- **Skript (erzeugt `-d` und `-m` in einem Schritt):**
  `node scripts/add-ai-circle.mjs <unbeschriftetes-original> public/images/<ordner>/<name>-ai --dw=<px> --mw=<px> [--crop=B:H] [--r=<px[,px]>] [--lift=<px[,px]>] [--inset] [--jpg]`
  `--dw` / `--mw` = Breite in px, in der das Bild am Desktop bzw. mobil auf der Seite angezeigt wird (vorher im Browser messen, bei `object-contain` die tatsächlich gezeichnete Breite). Ohne `--mw` entsteht nur die `-d`-Datei. `--crop` schneidet vorher mittig auf das Seitenverhältnis des Anzeigerahmens zu (nötig bei `aspect-*` + `object-cover`, sonst schneidet der Browser den Kreis ab). PNG-Quellen werden als WebP ausgegeben, `--jpg` erzwingt JPG (für og:image und Blog-Titelbilder). Immer vom sauberen Original ausgehen, nie ein schon gekennzeichnetes Bild erneut bearbeiten und nie den Kreis übermalen. Die Originale ohne Kreis liegen nicht im Repo, sondern in der Git-Historie (Stand vor Commit „KI-Kennzeichnung: einheitlicher AI-Kreis“ bzw. beim Kunden).
- **Dateiname:** gekennzeichnete Dateien enden auf `-ai-d` / `-ai-m`, alles kleingeschrieben und URL-sicher (ä→ae, ö→oe, ü→ue, keine Leer-/Sonderzeichen). Neue Namen sind Absicht: Next.js/Vercel cachen optimierte Bilder pro URL, unter dem alten Namen würde noch die alte Version ausgeliefert. Wird ein Bild nachträglich gekennzeichnet oder die Größe geändert, neuen Namen vergeben, Verweise anpassen und die alte Datei löschen.
- **Dieselbe Datei an Stellen mit verschiedener Größe:** pro Darstellung ein eigenes Paar. Beispiele: Kurs-Bilder `<name>-start-ai-*` (Startseite), `-liste-ai-*` (/kurse), `-hero-ai-*` (Kursseite); Blog-Titelbilder `<name>-ai-*` (Artikelkopf, og:image), `-liste-ai-*`, `-klein-ai-*` (Weitere Artikel, Helfer `blogBild()`).
- **Alt-Text** gekennzeichneter Bilder endet mit „(KI-generiert)“, z. B. „Lächelnde Frau am Laptop (KI-generiert)“.
- **Nach dem Einbrennen** im Browser prüfen (Desktop und mobil): Kreis nicht abgeschnitten, nicht überlagert, nicht auf Gesicht/Hände, überall 16 px bzw. 14 px. Ändert sich das Layout (Bildbreiten), die `--dw`/`--mw`-Werte neu messen und die Paare neu erzeugen.
- **Bekannte Grenze:** Die Mobil-Datei gilt unter 768 px und ist auf 390 px Viewport gemessen; auf Tablets (640–767 px), wo Bilder breiter werden, ist der Kreis entsprechend etwas größer.

## Sonstiges
- `AGENTS.md` enthält eine (falsche) Behauptung, dies sei eine geänderte Next.js-Version — das ist nicht der Fall, ignorieren.

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

## Sonstiges
- `AGENTS.md` enthält eine (falsche) Behauptung, dies sei eine geänderte Next.js-Version — das ist nicht der Fall, ignorieren.

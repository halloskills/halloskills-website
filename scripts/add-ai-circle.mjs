// Brennt den "AI-Kreis" (KI-Kennzeichnung) unten links in ein Bild ein, einmal für Desktop (-d) und einmal für Mobil (-m).
// Aufruf: node scripts/add-ai-circle.mjs <original> <ziel-basis> --dw=<px> [--mw=<px>] [--crop=<B:H>] [--r=<px[,px]>] [--lift=<px[,px]>] [--inset] [--jpg]
//   <ziel-basis>  Pfad ohne -d/-m und ohne Endung, endet auf "-ai", z. B. public/images/hero-person-ai
//   --dw / --mw   Breite in px, in der das Bild am Desktop bzw. mobil auf der Seite angezeigt wird (im Browser messen).
//                 Ohne --mw entsteht nur die -d-Datei (Bild wird mobil nicht gezeigt).
//   --crop=B:H    vorher mittig auf dieses Seitenverhältnis zuschneiden, z. B. --crop=16:9 (für aspect-* + object-cover)
//   --r           Eckenradius der Bildmaske in Bildschirm-px (unten links), je "Desktop,Mobil" oder ein Wert für beide.
//                 Der Kreis rückt so weit von der Ecke weg, dass er nicht abgeschnitten wird (Minimum: 3 % der Breite).
//   --lift        Zusätzlicher Abstand unten in Bildschirm-px (Desktop,Mobil), wenn unten ein Element über das Bild ragt (z. B. Textfeld einer Karte)
//   --inset       Freisteller auf weißem Grund: Kreis sitzt am erkannten Motivrand (Bereich ohne Weiß) statt in der Bildecke
// Kreis: auf dem Bildschirm immer DESKTOP_PX bzw. MOBILE_PX groß, Abstand unten und links 3 % der Bildbreite (bzw. Motivrand, Maskenrundung, Textfeld darunter),
// #0F172A mit 75 % Deckkraft + weißes "AI"; auf sehr dunklem Untergrund umgekehrt.
// Immer vom unbeschrifteten Original ausgehen, nie ein bereits gekennzeichnetes Bild erneut bearbeiten.
import sharp from "sharp";
import path from "node:path";

const DESKTOP_PX = 16;
const MOBILE_PX = 14;
const DARK_BELOW = 90; // mittlere Helligkeit (0-255) unter dem Kreis, ab der umgekehrt wird

const [src, base, ...flags] = process.argv.slice(2);
const opt = (name) => flags.find((f) => f.startsWith(`--${name}=`))?.split("=")[1];
const dw = parseFloat(opt("dw"));
const mw = opt("mw") ? parseFloat(opt("mw")) : null;
if (!src || !base || !dw) throw new Error("Aufruf: node scripts/add-ai-circle.mjs <original> <ziel-basis> --dw=<px> [--mw=<px>] [--crop=B:H] [--r=px[,px]] [--lift=px[,px]] [--inset]");
const crop = opt("crop")?.split(":").map(Number);
const pair = (v) => { const [a, b = a] = (v ?? "").split(",").map(parseFloat); return [a || 0, b || 0]; };
const rPx = pair(opt("r"));
const liftPx = pair(opt("lift"));
const inset = flags.includes("--inset");

let img = sharp(src);
const meta = await img.metadata();
let { width: w, height: h } = meta;
if (crop) {
  const [cw, ch] = [Math.min(w, Math.round((h * crop[0]) / crop[1])), Math.min(h, Math.round((w * crop[1]) / crop[0]))];
  const left = Math.floor((w - cw) / 2);
  const top = Math.floor((h - ch) / 2);
  img = sharp(await img.extract({ left, top, width: cw, height: ch }).toBuffer());
  [w, h] = [cw, ch];
}
const srcExt = path.extname(src).toLowerCase();
// Fotos als PNG wären mehrere MB groß: Ausgabe als WebP. --jpg erzwingt JPG (für og:image, das Social-Netzwerke nicht überall als WebP lesen).
const ext = flags.includes("--jpg") ? ".jpg" : srcExt === ".png" ? ".webp" : srcExt;

async function render(targetPx, displayedPx, dest, i) {
  const scale = w / displayedPx; // Bild-px pro Bildschirm-px
  const D = Math.max(targetPx * scale, 8); // exakter Kreisdurchmesser in Bild-px
  const d = Math.ceil(D); // Kantenlänge der Zeichenfläche
  let m = Math.round(w * 0.03);
  if (rPx[i]) m = Math.max(m, Math.ceil(((rPx[i] - targetPx / 2) * (1 - Math.SQRT1_2) + 1) * scale)); // Kreis bleibt innerhalb der Maskenrundung
  const mb = m + Math.round(liftPx[i] * scale);
  let bottom = h;
  let top;
  let left = m;
  if (inset) {
    // Freisteller: Unterkante = unterste Zeile mit Motiv (linke 60 % des Bildes), falls unter dem Motiv weißer Rand bleibt
    const all = (await img.clone().removeAlpha().raw().toBuffer()).subarray();
    const nonWhite = (px, y) => all[(y * w + px) * 3] < 244 || all[(y * w + px) * 3 + 1] < 244 || all[(y * w + px) * 3 + 2] < 244;
    const run0 = Math.max(6, Math.round(w * 0.01));
    search: for (let y = h - 1; y >= 0; y--) {
      for (let x = 0, c = 0; x < w * 0.6; x++) {
        c = nonWhite(x, y) ? c + 1 : 0;
        if (c >= run0) { bottom = y + 1; break search; }
      }
    }
    // Weiß = alle Kanäle >= 244; in den Zeilen des Kreises den am weitesten rechts liegenden linken Motivrand suchen
    top = bottom - mb - d;
    const { data } = await img.clone().extract({ left: 0, top, width: w, height: d }).removeAlpha().raw().toBuffer({ resolveWithObject: true });
    let edge = 0;
    for (let y = 0; y < d; y++) {
      let x = 0;
      // Motivrand = erstes Pixel, ab dem eine Strecke (ca. 1 % der Breite) ohne Weiß beginnt; einzelne Rausch-Pixel zählen nicht
      const run = Math.max(6, Math.round(w * 0.01));
      const isWhite = (px) => data[(y * w + px) * 3] >= 244 && data[(y * w + px) * 3 + 1] >= 244 && data[(y * w + px) * 3 + 2] >= 244;
      for (; x < w; x++) {
        let motif = true;
        for (let k = 0; k < run && x + k < w; k++) if (isWhite(x + k)) { motif = false; break; }
        if (motif) break;
      }
      if (x < w) edge = Math.max(edge, x); // komplett weiße Zeilen ignorieren
    }
    left = Math.min(Math.max(m, edge + Math.round(w * 0.015)), w - d - m);
  }
  top ??= bottom - mb - d;
  const region = await img.clone().extract({ left, top, width: d, height: d }).greyscale().stats();
  const dark = region.channels[0].mean < DARK_BELOW;
  const fill = dark ? "#FFFFFF" : "#0F172A";
  const ink = dark ? "#0F172A" : "#FFFFFF";

  // "AI" als Pfade (keine Schriftabhängigkeit): fettes A (Dach + Querbalken) und I
  const sw = D * 0.105;
  const cy = d / 2;
  const lh = D * 0.36;
  const aw = D * 0.3;
  const ax = d * 0.5 - D * 0.1 - aw / 2 - sw * 0.2;
  const ix = d * 0.5 + D * 0.2;
  const y0 = cy - lh / 2;
  const y1 = cy + lh / 2;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${d}" height="${d}">
<circle cx="${d / 2}" cy="${d / 2}" r="${D / 2}" fill="${fill}" fill-opacity="0.75"/>
<g stroke="${ink}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" fill="none">
<path d="M${ax} ${y1} L${ax + aw / 2} ${y0} L${ax + aw} ${y1} M${ax + aw * 0.22} ${cy + lh * 0.18} H${ax + aw * 0.78}"/>
<path d="M${ix} ${y0} V${y1}"/></g></svg>`;

  let out = img.clone().composite([{ input: Buffer.from(svg), left, top }]);
  out = ext === ".jpg" || ext === ".jpeg" ? out.jpeg({ quality: 90 }) : out.webp({ quality: 90 });
  await out.toFile(dest);
  console.log(`ok ${path.basename(dest)} ${w}x${h} Kreis ${D.toFixed(1)}px im Bild = ${targetPx}px bei ${displayedPx}px Anzeige, x=${(left / w).toFixed(3)}${dark ? " invertiert" : ""}`);
}

await render(DESKTOP_PX, dw, `${base}-d${ext}`, 0);
if (mw) await render(MOBILE_PX, mw, `${base}-m${ext}`, 1);

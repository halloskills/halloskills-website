#!/usr/bin/env python3
"""Setzt das "AI GENERATED"-Badge in eine Ecke eines Bildes (in place).

Aufruf: python3 scripts/add-ai-badge.py <bild> [bl|br|tl|tr|strip] [breite=0.20]
"strip" hängt unten einen Streifen in der Randfarbe an (für Infografiken mit Text bis zum Rand).
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

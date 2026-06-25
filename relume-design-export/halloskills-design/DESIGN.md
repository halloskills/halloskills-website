---
name: "HalloSkills"
theme: "light"

colors:
  neutral:
    shade-0: "#FFFFFF"
    shade-1: "#F2F2F2"
    shade-2: "#DADADA"
    shade-3: "#B6B6B6"
    shade-4: "#858585"
    shade-5: "#545454"
    shade-6: "#242424"
    shade-7: "#0C0C0C"
    white: "#FFFFFF"
  regal-blue:
    shade-1: "#E5EDF1"
    shade-2: "#CCDBE3"
    shade-3: "#4C819F"
    shade-4: "#004B76"
    shade-5: "#003C5E"
    shade-6: "#001E2F"
    shade-7: "#001623"
  sinbad:
    shade-1: "#F4FAFA"
    shade-2: "#EAF5F5"
    shade-3: "#B7DCDE"
    shade-4: "#99CDD1"
    shade-5: "#7AA4A7"
    shade-6: "#3D5253"
    shade-7: "#2D3D3E"
  old-gold:
    shade-1: "#FAF7EB"
    shade-2: "#F6EFD7"
    shade-3: "#E0C773"
    shade-4: "#D4AF37"
    shade-5: "#A98C2C"
    shade-6: "#544616"
    shade-7: "#3F3410"
  athens-gray:
    shade-1: "#FEFEFE"
    shade-2: "#FDFDFD"
    shade-3: "#F8F9FA"
    shade-4: "#F5F7F9"
    shade-5: "#C4C5C7"
    shade-6: "#626263"
    shade-7: "#494A4A"
  ebony:
    shade-1: "#E7E7E9"
    shade-2: "#CFD0D3"
    shade-3: "#585D67"
    shade-4: "#111827"
    shade-5: "#0D131F"
    shade-6: "#06090F"
    shade-7: "#05070B"

typography:
  heading:
    fontFamily: "Georgia® Pro"
    fontWeight: 500
  body:
    fontFamily: "Inter"
    fontWeight: 400
  sizes:
    desktop:
      h1: 72px
      h2: 52px
      h3: 44px
      h4: 36px
      h5: 28px
      h6: 22px
      text-large: 22px
      text-medium: 18px
      text-regular: 16px
      text-small: 14px
      text-tiny: 12px
    mobile:
      h1: 44px
      h2: 40px
      h3: 32px
      h4: 24px
      h5: 20px
      h6: 18px
      text-large: 18px
      text-medium: 16px
      text-regular: 12px
      text-small: 12px
      text-tiny: 10px

ui:
  style: "default"
  buttonRadius: 6px
  tagRadius: 4px
  inputRadius: 6px

cards:
  style: "outlined"
  borderWidth: 1px
  dividerWidth: 1px
  radiusLarge: 8px
  radiusMedium: 8px
  radiusSmall: 8px

schemes:
  - name: "Scheme 1"
    background: "neutral-shade-0"
    backgroundHex: "#FFFFFF"
    foregroundHex: "#FFFFFF"
    textHex: "#0c0c0c"
    accentHex: "#004B76"
    borderValue: "#0c0c0c26"
    useLogoVariant: light
    cssClass: "scheme-1"
  - name: "Scheme 2"
    background: "chromatic1-shade-1"
    backgroundHex: "#E5EDF1"
    foregroundHex: "#E5EDF1"
    textHex: "#0c0c0c"
    accentHex: "#004B76"
    borderValue: "#0c0c0c26"
    useLogoVariant: light
    cssClass: "scheme-2"
  - name: "Scheme 3"
    background: "neutral-shade-1"
    backgroundHex: "#F2F2F2"
    foregroundHex: "#F2F2F2"
    textHex: "#0c0c0c"
    accentHex: "#004B76"
    borderValue: "#0c0c0c26"
    useLogoVariant: light
    cssClass: "scheme-3"
---

# HalloSkills — Design Specification

This file contains machine-readable design tokens in the YAML frontmatter above, and human-readable guidance below.

## Colors

The design uses a **light** theme with a neutral palette and 5 chromatic palettes.

- **Neutral shades** range from shade-0 (darkest) to shade-7 (lightest), plus white
- **Regal Blue** — primary shade: `#004B76`
- **Sinbad** — primary shade: `#99CDD1`
- **Old Gold** — primary shade: `#D4AF37`
- **Athens Gray** — primary shade: `#F5F7F9`
- **Ebony** — primary shade: `#111827`

Use the CSS custom properties from `react/globals.css` for all colors (e.g. `--color-neutral-darkest`, `--color-blue-ribbon`).

## Typography

Headings use **Georgia® Pro** at weight 500. Body text uses **Inter** at weight 400.

The type scale has desktop and mobile sizes. Apply mobile sizes at smaller breakpoints. All values are in `react/globals.css`.

## UI Elements

UI style is **default** with button radius 6px. Cards use the **outlined** style with border-width 1px.

## Color Schemes

Sections use color schemes to control their visual appearance. Each scheme is derived from a single background color — all other colors (text, foreground, accent, border) are automatically computed for optimal contrast.

| Scheme | Background | Text | Accent | Logo | CSS class |
|--------|-----------|------|--------|------|-----------|
| Scheme 1 | Neutral White (#FFFFFF) | #0c0c0c | #004B76 | light | `.scheme-1` |
| Scheme 2 | Regal Blue Lightest (#E5EDF1) | #0c0c0c | #004B76 | light | `.scheme-2` |
| Scheme 3 | Neutral Lightest (#F2F2F2) | #0c0c0c | #004B76 | light | `.scheme-3` |

Apply a scheme by adding its CSS class to the section element. See `sitemap.md` for which scheme each section uses.

### Tweaking Schemes

To create visual variation, you can change which scheme a section uses. When switching schemes:

- Swap the CSS class (e.g. change `.scheme-1` to `.scheme-2`)
- All child elements automatically inherit the correct text, accent, and border colors
- Use the matching logo variant (`logo-light.svg` or `logo-dark.svg`) based on the scheme's `useLogoVariant`
- Alternate between light and dark schemes to create visual rhythm

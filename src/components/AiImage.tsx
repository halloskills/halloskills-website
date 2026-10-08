import Image, { getImageProps, type ImageProps } from "next/image";

const BREAKPOINT_PX = { sm: 640, md: 768 };

type AiImageProps = Omit<ImageProps, "src"> & {
  /** Desktop-Datei (endet auf "-ai-d.<ext>"); die Mobil-Datei "-ai-m.<ext>" wird daraus abgeleitet. Andere Pfade (z. B. echte Fotos) werden als normales Bild gezeigt. */
  src: string;
  /** Ab dieser Breite wird die Desktop-Datei gezeigt, darunter die Mobil-Datei. */
  breakpoint?: keyof typeof BREAKPOINT_PX;
};

/** Zeigt je nach Bildschirmbreite das Bild mit dem AI-Kreis in Desktop- (16 px) oder Mobil-Größe (14 px). */
export default function AiImage({ src, alt, breakpoint = "md", ...rest }: AiImageProps) {
  if (!src.includes("-ai-d.")) return <Image src={src} alt={alt} {...rest} />;

  const min = BREAKPOINT_PX[breakpoint];
  const {
    props: { srcSet, src: desktopSrc },
  } = getImageProps({ ...rest, alt, src });
  const {
    props: { srcSet: mobileSrcSet, ...img },
  } = getImageProps({ ...rest, alt, src: src.replace("-ai-d.", "-ai-m.") });
  // Bei images.unoptimized (statischer Export) liefert getImageProps kein srcSet, dann zählt die reine URL.
  const desktop = srcSet ?? desktopSrc;
  const mobile = mobileSrcSet ?? img.src;

  return (
    <picture style={{ display: "contents" }}>
      <source media={`(min-width: ${min}px)`} srcSet={desktop} />
      <source media={`(max-width: ${min - 1}px)`} srcSet={mobile} />
      <img {...img} alt={alt} />
    </picture>
  );
}

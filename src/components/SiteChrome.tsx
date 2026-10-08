/**
 * Jede Seite bringt ihre eigene Navigation und ihren Footer (NavV2/FooterV2) mit,
 * hier wird nur noch der Inhaltsbereich umschlossen.
 */
export function SiteChrome({ children }: { children: React.ReactNode }) {
  return <main className="flex-1">{children}</main>;
}

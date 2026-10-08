"use client";

/** Öffnet das Cookie-Banner erneut, damit eine Einwilligung jederzeit geändert oder widerrufen werden kann. */
export function CookieSettingsButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new CustomEvent("halloskills:open-cookie"))}
      className={className}
    >
      Cookie-Einstellungen
    </button>
  );
}

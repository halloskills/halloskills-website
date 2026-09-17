import React from "react";
import Link from "next/link";
import { Eyebrow, btnPrimary, btnWeiss } from "@/components/sections/startseite-v2/hs-ui";

/** Gemeinsamer Hero-Kopf für die Rechner/Check-Tools. */
export function ToolHero({
  eyebrow,
  titel,
  akzent,
  intro,
  hinweis,
}: {
  eyebrow: string;
  titel: string;
  akzent?: string;
  intro: string;
  hinweis?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-hs-line">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-hs-soft" />
        <div className="absolute -right-24 -top-28 size-[380px] rounded-full bg-hs-violet/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 size-[260px] rounded-full bg-hs-lightblue blur-2xl" />
      </div>

      <div className="mx-auto max-w-[1080px] px-6 pb-10 pt-14 md:px-10 lg:pt-16">
        <Eyebrow ton="blau">{eyebrow}</Eyebrow>
        <h1 className="mt-5 max-w-[720px] text-[clamp(1.9rem,4.6vw,2.6rem)] leading-[1.15] text-balance">
          {titel} {akzent && <span className="text-hs-pink">{akzent}</span>}
        </h1>
        <p className="mt-4 max-w-[620px] text-[0.98rem] leading-[1.65] text-hs-body">{intro}</p>

        {hinweis && (
          <div className="mt-6 flex max-w-[640px] items-start gap-3 rounded-hs-card border border-hs-line bg-white p-4 text-[0.85rem] leading-[1.6] text-hs-muted shadow-hs-soft">
            <span
              aria-hidden="true"
              className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-hs-lightblue text-[0.8rem] font-bold text-hs-blue"
            >
              i
            </span>
            <div>{hinweis}</div>
          </div>
        )}
      </div>
    </section>
  );
}

export function ToolFormCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-hs-card border border-hs-line bg-white p-6 shadow-hs-soft md:p-7">
      {children}
    </div>
  );
}

export function ToolFormSection({
  nr,
  titel,
  hint,
  children,
}: {
  nr: number;
  titel: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={nr > 1 ? "mt-7 border-t border-dashed border-hs-line pt-6" : ""}>
      <h3 className="mb-4 flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.08em] text-hs-muted">
        <span className="flex size-5 items-center justify-center rounded-full bg-hs-lightblue text-[0.65rem] font-bold text-hs-blue">
          {nr}
        </span>
        {titel}
      </h3>
      {hint && <p className="-mt-3 mb-3 text-[0.75rem] text-hs-muted">{hint}</p>}
      {children}
    </div>
  );
}

export function ToolField({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[0.8rem] font-[600] text-hs-navy">{label}</label>
      {children}
      {hint && <span className="text-[0.72rem] text-hs-muted">{hint}</span>}
    </div>
  );
}

export const toolInputClass =
  "w-full rounded-hs-input border border-hs-border bg-white px-3.5 py-2.5 text-[0.9rem] text-hs-ink outline-none transition-colors focus:border-hs-violet";

export function Segmented<T extends string>({
  value,
  onChange,
  options,
}: {
  value: T;
  onChange: (v: T) => void;
  options: { value: T; label: string }[];
}) {
  return (
    <div className="flex flex-wrap gap-2" role="group">
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          aria-pressed={value === o.value}
          onClick={() => onChange(o.value)}
          className={`rounded-full border px-4 py-2 text-[0.8rem] font-[600] transition-colors ${
            value === o.value
              ? "border-hs-navy bg-hs-navy text-white"
              : "border-hs-border bg-white text-hs-muted hover:border-hs-violet hover:text-hs-violet"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

export function ToolCheckRow({
  id,
  checked,
  onChange,
  label,
  hint,
}: {
  id: string;
  checked: boolean;
  onChange: (v: boolean) => void;
  label: React.ReactNode;
  hint?: string;
}) {
  return (
    <div className="flex items-start gap-3 py-2.5">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-0.5 size-4 shrink-0 accent-hs-violet"
      />
      <div>
        <label htmlFor={id} className="text-[0.85rem] font-[600] text-hs-navy">
          {label}
        </label>
        {hint && <span className="mt-0.5 block text-[0.75rem] font-normal text-hs-muted">{hint}</span>}
      </div>
    </div>
  );
}

/** Dunkle, sticky Ergebnis-Karte rechts neben dem Formular. */
export function ResultsCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="lg:sticky lg:top-28">
      <div className="relative overflow-hidden rounded-hs-card bg-hs-navy p-6 text-white shadow-hs-float md:p-7">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-24 size-[260px] rounded-full opacity-20"
          style={{ background: "linear-gradient(135deg, #7861ff 0%, #ff2d7a 100%)" }}
        />
        <div className="relative">{children}</div>
      </div>
    </div>
  );
}

export function ResultRow({
  label,
  value,
  strong,
  hidden,
}: {
  label: string;
  value: string;
  strong?: boolean;
  hidden?: boolean;
}) {
  if (hidden) return null;
  return (
    <div
      className={`flex items-center justify-between gap-3 py-1.5 text-[0.82rem] ${
        strong
          ? "mt-1.5 border-t border-white/15 pt-2.5 font-bold text-white"
          : "text-white/70"
      }`}
    >
      <span>{label}</span>
      <span className="whitespace-nowrap font-[600] tabular-nums text-white">{value}</span>
    </div>
  );
}

export function ToolFaq({ items }: { items: { frage: string; antwort: React.ReactNode }[] }) {
  const [offen, setOffen] = React.useState(0);
  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => {
        const istOffen = offen === i;
        return (
          <div key={item.frage} className="overflow-hidden rounded-hs-card border border-hs-line bg-white">
            <button
              type="button"
              aria-expanded={istOffen}
              onClick={() => setOffen(istOffen ? -1 : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-[0.9rem] font-[600] text-hs-navy"
            >
              {item.frage}
              <span
                aria-hidden="true"
                className={`shrink-0 text-hs-violet transition-transform ${istOffen ? "rotate-180" : ""}`}
              >
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
                  <path d="M1 1l6 5 6-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
            {istOffen && (
              <p className="px-6 pb-5 text-[0.85rem] leading-[1.7] text-hs-body">{item.antwort}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}

export function ToolCta({ titel, text }: { titel: string; text: string }) {
  return (
    <section className="px-6 py-16 md:px-10 lg:py-20">
      <div
        className="relative mx-auto max-w-[1080px] overflow-hidden rounded-[32px] p-8 text-white md:p-12"
        style={{
          background: "linear-gradient(120deg, #004b76 0%, #7861ff 55%, #ff2d7a 100%)",
        }}
      >
        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-[480px]">
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-white/70">
              Und jetzt?
            </p>
            <h2 className="mt-2 text-[clamp(1.3rem,3vw,1.7rem)] leading-[1.25] !text-white">{titel}</h2>
            <p className="mt-3 text-[0.9rem] leading-[1.6] text-white/85">{text}</p>
          </div>
          <div className="flex shrink-0 flex-col gap-3">
            <Link href="/kurse" className={`${btnWeiss} justify-center border-none !text-hs-navy`}>
              Lehrgänge entdecken →
            </Link>
            <Link
              href="/beratung-buchen"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/50 px-7 py-3.5 text-[0.875rem] font-[600] text-white transition-colors hover:border-white"
            >
              Kostenlose Beratung sichern
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export const toolBtnResult = `${btnPrimary} w-full justify-center !bg-white !text-hs-navy hover:!bg-hs-lightblue`;

export function DisclaimerNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-5 flex items-start gap-2 text-[0.72rem] leading-[1.6] text-white/55">
      <span aria-hidden="true">ⓘ</span>
      <span>{children}</span>
    </div>
  );
}

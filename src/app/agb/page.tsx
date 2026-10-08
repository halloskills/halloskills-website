import type { Metadata } from "next";
import { NavV2 } from "@/components/sections/startseite-v2/nav-v2";
import { Eyebrow } from "@/components/sections/startseite-v2/hs-ui";
import { FooterV2 } from "@/components/sections/startseite-v2/footer-v2";

export const metadata: Metadata = {
  title: "AGB | HalloSkills",
  description: "Allgemeine Geschäftsbedingungen der HalloSkills GmbH",
};

export default function AgbPage() {
  return (
    <div className="hs-v2 bg-white">
      <NavV2 />

      <section className="px-6 pb-6 pt-14 md:px-10 lg:pt-20">
        <div className="mx-auto max-w-[760px]">
          <Eyebrow ton="blau">Rechtliches</Eyebrow>
          <h1 className="mt-6 text-[clamp(2rem,4vw,2.75rem)] leading-[1.15]">Allgemeine Geschäftsbedingungen</h1>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-[760px]">
          <div className="hs-legal">
            <h2>§ 1 Geltungsbereich</h2>
            <p>Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen der HalloSkills GmbH (nachfolgend „HalloSkills&quot; oder „Anbieter&quot;) und ihren Kunden (nachfolgend „Teilnehmer&quot;) über die Nutzung der von HalloSkills angebotenen Online-Umschulungen, Kurse und damit verbundenen Dienstleistungen.</p>
            <p>Abweichende Bedingungen des Teilnehmers werden nicht anerkannt, sofern der Anbieter nicht ausdrücklich schriftlich zugestimmt hat.</p>

            <h2>§ 2 Vertragspartner und Vertragsgegenstand</h2>
            <p>
              <strong>Anbieter:</strong><br />
              HalloSkills GmbH<br />
              Cremon 11, 20457 Hamburg<br />
              E-Mail: <a href="mailto:info@halloskills.de">info@halloskills.de</a>
            </p>
            <p>Vertragsgegenstand ist die Erbringung von Online-Bildungsdienstleistungen in Form von Kursen, die von der Bundesagentur für Arbeit gefördert werden können.</p>

            <h2>§ 3 Vertragsschluss</h2>
            <p>Der Vertrag kommt durch die schriftliche Anmeldung des Teilnehmers und die schriftliche Bestätigung durch HalloSkills zustande. HalloSkills ist berechtigt, ein Angebot ohne Angabe von Gründen abzulehnen.</p>

            <h2>§ 4 Leistungsumfang</h2>
            <p>HalloSkills erbringt folgende Leistungen:</p>
            <ul>
              <li>Zugang zur Online-Lernplattform für die Dauer der Weiterbildung</li>
              <li>Bereitstellung von Lernmaterialien, Video-Kursen und Übungsaufgaben</li>
              <li>Betreuung durch qualifizierte Dozenten und Lernbegleiter</li>
              <li>Unterstützung bei der Kommunikation mit der Bundesagentur für Arbeit</li>
              <li>Ausstellung von Zertifikaten nach erfolgreichem Abschluss</li>
            </ul>

            <h2>§ 5 Mitwirkungspflichten des Teilnehmers</h2>
            <p>Der Teilnehmer verpflichtet sich:</p>
            <ul>
              <li>an den Lehrveranstaltungen regelmäßig und pünktlich teilzunehmen</li>
              <li>die erforderlichen Lernzeiten selbstständig einzuplanen und einzuhalten</li>
              <li>Absenzen unverzüglich und mit Begründung zu melden</li>
              <li>die Lernmaterialien und Zugangsdaten nicht an Dritte weiterzugeben</li>
            </ul>

            <h2>§ 6 Entgelt und Zahlungsbedingungen</h2>
            <p>Die Kosten der Weiterbildung werden in der Regel vollständig durch die Bundesagentur für Arbeit oder das Jobcenter übernommen, sofern die Fördervoraussetzungen erfüllt sind (Bildungsgutschein). In diesem Fall erfolgt die Abrechnung direkt zwischen HalloSkills und der zuständigen Behörde.</p>

            <h2>§ 7 Kündigung und Rücktritt</h2>
            <p>Der Teilnehmer kann den Vertrag mit einer Frist von vier Wochen zum Monatsende kündigen. Die Kündigung bedarf der Textform (E-Mail oder Brief).</p>
            <p>HalloSkills ist berechtigt, das Vertragsverhältnis aus wichtigem Grund fristlos zu kündigen, insbesondere wenn der Teilnehmer wiederholt gegen die Mitwirkungspflichten verstößt.</p>

            <h2>§ 8 Haftung</h2>
            <p>HalloSkills haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit sowie für vorsätzlich oder grob fahrlässig verursachte Schäden.</p>
            <p>HalloSkills übernimmt keine Garantie für das Bestehen von Abschlussprüfungen oder die Vermittlung in ein Beschäftigungsverhältnis nach der Weiterbildung.</p>

            <h2>§ 9 Datenschutz</h2>
            <p>Die Erhebung und Verarbeitung personenbezogener Daten des Teilnehmers erfolgt gemäß der geltenden Datenschutzgesetze (DSGVO) sowie unserer <a href="/datenschutz">Datenschutzerklärung</a>.</p>

            <h2>§ 10 Gerichtsstand und anwendbares Recht</h2>
            <p>Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand für alle Streitigkeiten ist Hamburg, sofern der Teilnehmer Kaufmann oder juristische Person des öffentlichen Rechts ist.</p>

            <h2>§ 11 Salvatorische Klausel</h2>
            <p>Sollten einzelne Bestimmungen dieser AGB unwirksam sein, berührt dies die Wirksamkeit der übrigen Bestimmungen nicht.</p>

            <p style={{ color: "#9ca3af", fontSize: "0.85rem", marginTop: "3rem" }}>
              Stand: April 2026
            </p>
          </div>
        </div>
      </section>

      <FooterV2 />
    </div>
  );
}

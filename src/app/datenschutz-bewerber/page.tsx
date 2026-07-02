import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzhinweise für Bewerber | HalloSkills",
  description: "Datenschutzhinweise für Bewerberinnen und Bewerber der HalloSkills GmbH",
  robots: "noindex",
};

export default function DatenschutzBewerberPage() {
  return (
    <>
      <section
        className="relative flex min-h-[30vh] items-center overflow-hidden"
        style={{ backgroundColor: "#004B76" }}
      >
        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 py-16 md:px-12 md:py-20">
          <span
            className="mb-5 block text-[0.75rem] font-bold uppercase tracking-[0.12em]"
            style={{ color: "#D4AF37" }}
          >
            Rechtliches
          </span>
          <h1
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
              color: "#ffffff",
              lineHeight: 1.2,
            }}
          >
            Datenschutzhinweise für Bewerberinnen und Bewerber
          </h1>
          <p className="mt-4" style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem" }}>
            Stand: 02.07.2026
          </p>
        </div>
      </section>

      <section className="py-20" style={{ background: "#ffffff" }}>
        <div className="mx-auto max-w-[760px] px-6 md:px-12">
          <div className="legal-content">
            <p>Wir freuen uns über Ihr Interesse an einer Tätigkeit bei uns. Mit diesen Datenschutzhinweisen informieren wir Sie darüber, wie wir personenbezogene Daten im Rahmen von Bewerbungen verarbeiten.</p>
            <p>Diese Datenschutzhinweise gelten unabhängig davon, über welchen Weg Sie sich bei uns bewerben, insbesondere über eine Recruiting-Plattform, eine Jobbörse, per E-Mail, postalisch, über eine Empfehlung oder auf anderem Wege.</p>
            <p>Soweit wir personenbezogene Daten nicht direkt von Ihnen erhalten, sondern z. B. über eine Empfehlung, eine vermittelnde Person, eine Recruiting-Plattform oder öffentlich zugängliche berufsbezogene Quellen, informieren wir Sie zusätzlich über die jeweilige Quelle der Daten, soweit dies gesetzlich erforderlich ist.</p>

            <h2>1. Verantwortlicher</h2>
            <p>Verantwortlicher für die Verarbeitung Ihrer personenbezogenen Daten im Bewerbungsverfahren ist:</p>
            <p>
              HalloSkills GmbH<br />
              Cremon 11<br />
              20457 Hamburg<br />
              Deutschland<br />
              <br />
              Vertreten durch: Heiko Kuhn<br />
              <br />
              E-Mail: <a href="mailto:jobs@halloskills.de">jobs@halloskills.de</a><br />
              Telefon: +49 176 71206670<br />
              <br />
              Handelsregister: Amtsgericht Hamburg, HRB 198168
            </p>

            <h2>2. Datenschutzkontakt / Datenschutzbeauftragter</h2>
            <p>Ein Datenschutzbeauftragter ist nicht benannt. Bei Fragen zum Datenschutz können Sie sich jederzeit an uns wenden:</p>
            <p><a href="mailto:jobs@halloskills.de">jobs@halloskills.de</a></p>

            <h2>3. Zwecke der Verarbeitung</h2>
            <p>Wir verarbeiten Ihre personenbezogenen Daten, soweit dies für die Durchführung des Bewerbungsverfahrens erforderlich ist. Dazu gehören insbesondere folgende Zwecke:</p>
            <ul>
              <li>Entgegennahme und Prüfung Ihrer Bewerbung</li>
              <li>Beurteilung Ihrer Eignung für die konkret ausgeschriebene Stelle anhand der hierfür relevanten Anforderungen</li>
              <li>Kommunikation mit Ihnen im Rahmen des Bewerbungsverfahrens</li>
              <li>Organisation und Durchführung von Bewerbungsgesprächen</li>
              <li>Dokumentation des Bewerbungs- und Auswahlprozesses</li>
              <li>Entscheidung über die Begründung eines Beschäftigungsverhältnisses</li>
              <li>Erfüllung gesetzlicher Pflichten</li>
              <li>Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen</li>
              <li>Aufnahme in unseren Talentpool, sofern Sie hierzu gesondert eingewilligt haben</li>
            </ul>

            <h2>4. Kategorien personenbezogener Daten</h2>
            <p>Wir verarbeiten insbesondere die personenbezogenen Daten, die Sie uns im Rahmen Ihrer Bewerbung mitteilen oder die im Laufe des Bewerbungsverfahrens entstehen. Dazu können gehören:</p>
            <ul>
              <li>Stammdaten, z. B. Name, Vorname</li>
              <li>Kontaktdaten, z. B. E-Mail-Adresse, Telefonnummer, Anschrift</li>
              <li>Bewerbungsunterlagen, z. B. Lebenslauf, Anschreiben, Zeugnisse, Zertifikate, Arbeitsproben</li>
              <li>Angaben zu Ausbildung, Qualifikationen, beruflichem Werdegang, Kenntnissen und Fähigkeiten</li>
              <li>Angaben zu Verfügbarkeit, gewünschtem Arbeitsumfang und Gehaltsvorstellung, soweit diese abgefragt oder freiwillig angegeben werden</li>
              <li>Kommunikationsdaten, z. B. Nachrichten, E-Mails, Gesprächsnotizen und Terminabstimmungen</li>
              <li>Organisatorische Daten zum Bewerbungsprozess, z. B. Bewerbungsstatus, Bewertungen, interne Notizen und Auswahlentscheidungen</li>
              <li>Technische und administrative Daten, soweit diese bei Nutzung digitaler Bewerbungswege anfallen</li>
            </ul>
            <p>Bitte übermitteln Sie uns möglichst nur solche Informationen, die für die Bewerbung erforderlich sind. Bitte verzichten Sie insbesondere auf Angaben zu besonderen Kategorien personenbezogener Daten, z. B. Gesundheit, Religion, politischer Meinung, Gewerkschaftszugehörigkeit, ethnischer Herkunft oder sexueller Orientierung, soweit diese für die konkrete Bewerbung nicht erforderlich sind.</p>
            <p>Sollten Sie uns dennoch besondere Kategorien personenbezogener Daten im Sinne von Art. 9 DSGVO übermitteln, verarbeiten wir diese nur, soweit dies für das Bewerbungsverfahren rechtlich zulässig und erforderlich ist.</p>

            <h2>5. Rechtsgrundlagen der Verarbeitung</h2>
            <p>Wir verarbeiten Ihre personenbezogenen Daten, soweit dies für die Entscheidung über die Begründung eines Beschäftigungsverhältnisses erforderlich ist. Rechtsgrundlage ist § 26 Abs. 1 BDSG in Verbindung mit Art. 88 DSGVO. Soweit § 26 BDSG im Einzelfall nicht anwendbar ist, erfolgt die Verarbeitung zur Durchführung vorvertraglicher Maßnahmen auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO.</p>
            <p>Soweit wir personenbezogene Daten zur Erfüllung gesetzlicher Pflichten verarbeiten, erfolgt dies auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO.</p>
            <p>Soweit wir personenbezogene Daten zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen verarbeiten, erfolgt dies auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.</p>
            <p>Soweit Sie uns eine Einwilligung erteilen, z. B. für die Aufnahme in unseren Talentpool, verarbeiten wir Ihre Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO sowie, soweit einschlägig, § 26 Abs. 2 BDSG. Eine erteilte Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen.</p>

            <h2>6. Empfänger und Zugriffsberechtigte</h2>
            <p>Innerhalb unseres Unternehmens erhalten nur diejenigen Personen Zugriff auf Ihre Bewerbungsdaten, die an der Bearbeitung Ihrer Bewerbung oder an der Auswahlentscheidung beteiligt sind.</p>
            <p>Darüber hinaus können personenbezogene Daten im erforderlichen Umfang an folgende Empfänger übermittelt werden:</p>
            <ul>
              <li>Anbieter von Recruiting-Plattformen oder Bewerbermanagement-Systemen</li>
              <li>IT- und Hosting-Dienstleister</li>
              <li>Kommunikationsdienstleister, z. B. E-Mail- oder Videokonferenzanbieter</li>
              <li>Rechtsanwälte, Steuerberater, Behörden oder Gerichte, soweit dies im Einzelfall erforderlich ist</li>
            </ul>
            <p>Eine Weitergabe Ihrer Bewerbungsdaten zu Werbezwecken oder ein Verkauf Ihrer Daten findet nicht statt.</p>

            <h2>7. Einsatz von Recruiting-Plattformen, insbesondere JOIN</h2>
            <p>Wir nutzen für die Veröffentlichung von Stellenanzeigen und die Verwaltung von Bewerbungen die Plattform JOIN. Anbieterin ist:</p>
            <p>
              JOIN Solutions AG<br />
              Eichenstrasse 2<br />
              8808 Pfäffikon SZ<br />
              Schweiz
            </p>
            <p>Soweit JOIN personenbezogene Daten im Rahmen des von uns genutzten Bewerbermanagements verarbeitet, erfolgt dies als Auftragsverarbeitung nach unseren Weisungen auf Grundlage einer Vereinbarung zur Auftragsverarbeitung.</p>
            <p>Weitere Informationen zur Datenverarbeitung durch JOIN:</p>
            <ul>
              <li><a href="https://help.join.com/german/rechtliches-und-datenschutz/datenschutzerklarung" target="_blank" rel="noopener noreferrer">Datenschutzerklärung von JOIN</a></li>
              <li><a href="https://join.com/de/dpa" target="_blank" rel="noopener noreferrer">Datenverarbeitungsvereinbarung von JOIN</a></li>
            </ul>

            <h2>8. Drittlandübermittlungen</h2>
            <p>Im Rahmen digitaler Bewerbungsprozesse kann es vorkommen, dass personenbezogene Daten durch eingesetzte Dienstleister in Ländern außerhalb der Europäischen Union oder des Europäischen Wirtschaftsraums verarbeitet werden. Soweit Daten in die Schweiz übermittelt werden, erfolgt dies auf Grundlage eines Angemessenheitsbeschlusses der Europäischen Kommission. Für andere Drittländer erfolgt eine Übermittlung nur, wenn die gesetzlichen Voraussetzungen erfüllt sind.</p>

            <h2>9. Speicherdauer und Löschung</h2>
            <p>Wir speichern Ihre Bewerbungsdaten nur so lange, wie dies für die Durchführung des Bewerbungsverfahrens erforderlich ist.</p>
            <p>Wenn wir Ihre Bewerbung ablehnen und keine Aufnahme in unseren Talentpool erfolgt, löschen wir Ihre Bewerbungsdaten spätestens sechs Monate nach Abschluss des Bewerbungsverfahrens, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.</p>
            <p>Wenn ein Beschäftigungsverhältnis zustande kommt, übernehmen wir die für das Beschäftigungsverhältnis erforderlichen Daten in Ihre Personalakte. Nicht mehr erforderliche Bewerbungsdaten werden gelöscht.</p>

            <h2>10. Talentpool</h2>
            <p>Sofern Sie hierzu gesondert einwilligen, nehmen wir Ihre Bewerbungsdaten in unseren Talentpool auf. Bei Aufnahme in den Talentpool speichern wir Ihre Daten für bis zu zwölf Monate ab Erteilung der Einwilligung.</p>
            <p>Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen, z. B. per E-Mail an <a href="mailto:jobs@halloskills.de">jobs@halloskills.de</a>.</p>

            <h2>11. Bereitstellung der Daten</h2>
            <p>Die Bereitstellung der für die Bewerbung erforderlichen personenbezogenen Daten ist notwendig, damit wir Ihre Bewerbung prüfen und das Bewerbungsverfahren durchführen können. Ohne diese Daten können wir Ihre Bewerbung nicht oder nur eingeschränkt berücksichtigen.</p>
            <p>Die Bereitstellung von Daten für den Talentpool ist freiwillig.</p>

            <h2>12. Ihre Rechte</h2>
            <p>Sie haben nach Maßgabe der gesetzlichen Voraussetzungen folgende Rechte:</p>
            <ul>
              <li>Recht auf Auskunft über die von uns verarbeiteten personenbezogenen Daten</li>
              <li>Recht auf Berichtigung unrichtiger oder unvollständiger Daten</li>
              <li>Recht auf Löschung personenbezogener Daten</li>
              <li>Recht auf Einschränkung der Verarbeitung</li>
              <li>Recht auf Datenübertragbarkeit</li>
              <li>Recht auf Widerspruch gegen Verarbeitungen auf Grundlage berechtigter Interessen</li>
              <li>Recht auf Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft</li>
            </ul>
            <p>Zur Ausübung Ihrer Rechte: <a href="mailto:jobs@halloskills.de">jobs@halloskills.de</a></p>

            <h2>13. Beschwerderecht bei einer Aufsichtsbehörde</h2>
            <p>Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren. Für uns ist zuständig:</p>
            <p>
              Der Hamburgische Beauftragte für Datenschutz und Informationsfreiheit<br />
              Ludwig-Erhard-Str. 22<br />
              20459 Hamburg<br />
              <a href="https://datenschutz-hamburg.de" target="_blank" rel="noopener noreferrer">datenschutz-hamburg.de</a>
            </p>

            <h2>14. Änderung dieser Datenschutzhinweise</h2>
            <p>Wir können diese Datenschutzhinweise anpassen, wenn sich unser Bewerbungsprozess, die eingesetzten Dienstleister oder die rechtlichen Anforderungen ändern. Es gilt die jeweils zum Zeitpunkt Ihrer Bewerbung bereitgestellte Fassung.</p>
          </div>
        </div>
      </section>
    </>
  );
}

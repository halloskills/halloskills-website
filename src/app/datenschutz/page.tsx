import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | HalloSkills",
  description: "Datenschutzerklärung der HalloSkills GmbH",
};

export default function DatenschutzPage() {
  return (
    <>
      <section
        className="relative flex min-h-[30vh] items-center overflow-hidden"
        style={{ backgroundColor: "#004B76" }}
      >
        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 py-16 md:px-12 md:py-20">
          <span
            className="mb-5 block text-[0.75rem] font-semibold uppercase tracking-[0.12em]"
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
            Datenschutzerklärung
          </h1>
        </div>
      </section>

      <section className="py-20" style={{ background: "#ffffff" }}>
        <div className="mx-auto max-w-[760px] px-6 md:px-12">
          <div className="legal-content">
            <h2>1. Datenschutz auf einen Blick</h2>
            <h3>Allgemeine Hinweise</h3>
            <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>

            <h3>Datenerfassung auf dieser Website</h3>
            <p><strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.</p>

            <p><strong>Wie erfassen wir Ihre Daten?</strong><br />
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst.</p>

            <p><strong>Wofür nutzen wir Ihre Daten?</strong><br />
            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.</p>

            <p><strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong><br />
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.</p>

            <h2>2. Hosting</h2>
            <p>Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert.</p>
            <p>Wir setzen folgenden Hoster ein:</p>
            <p>
              Microsoft Corporation<br />
              One Microsoft Way<br />
              Redmond, WA 98052-6399<br />
              United States of America<br />
              (Microsoft Azure Static Web Apps)
            </p>

            <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>
            <h3>Datenschutz</h3>
            <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>

            <h3>Hinweis zur verantwortlichen Stelle</h3>
            <p>
              Heiko Kuhn<br />
              HalloSkills GmbH<br />
              Cremon 11<br />
              20457 Hamburg<br />
              Telefon: +49 15167334408<br />
              E-Mail: <a href="mailto:admin@halloskills.de">admin@halloskills.de</a>
            </p>

            <h3>Speicherdauer</h3>
            <p>Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.</p>

            <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
            <p>Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen.</p>

            <h3>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
            <p>Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde zu.</p>

            <h3>Auskunft, Berichtigung und Löschung</h3>
            <p>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten sowie ein Recht auf Berichtigung oder Löschung dieser Daten.</p>

            <h2>4. Datenerfassung auf dieser Website</h2>
            <h3>Kontaktformular</h3>
            <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>

            <h3>Anfrage per E-Mail oder Telefon</h3>
            <p>Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet.</p>

            <p style={{ color: "#9ca3af", fontSize: "0.85rem", marginTop: "3rem" }}>
              Quelle: e-recht24.de
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

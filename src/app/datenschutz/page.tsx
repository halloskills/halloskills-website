import type { Metadata } from "next";
import { NavV2 } from "@/components/sections/startseite-v2/nav-v2";
import { Eyebrow } from "@/components/sections/startseite-v2/hs-ui";
import { FooterV2 } from "@/components/sections/startseite-v2/footer-v2";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | HalloSkills",
  description: "Informationen zur Verarbeitung personenbezogener Daten auf halloskills.de.",
};

export default function DatenschutzPage() {
  return (
    <div className="hs-v2 bg-white">
      <NavV2 />

      <section className="px-6 pb-6 pt-14 md:px-10 lg:pt-20">
        <div className="mx-auto max-w-[760px]">
          <Eyebrow ton="blau">Rechtliches</Eyebrow>
          <h1 className="mt-6 text-[clamp(2rem,4vw,2.75rem)] leading-[1.15]">
            Datenschutzerklärung
          </h1>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-[760px]">
          <div className="hs-legal">
            <h2>1. Datenschutz auf einen Blick</h2>

            <h3>Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit
              Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
              Personenbezogene Daten sind alle Daten, mit denen Sie persönlich
              identifiziert werden können. Ausführliche Informationen zum Thema
              Datenschutz entnehmen Sie der nachfolgenden Datenschutzerklärung.
            </p>

            <h3>Datenerfassung auf dieser Website</h3>
            <p>
              <strong>
                Wer ist verantwortlich für die Datenerfassung auf dieser Website?
              </strong>
              <br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den
              Websitebetreiber. Die Kontaktdaten finden Sie im Abschnitt &bdquo;Hinweis
              zur verantwortlichen Stelle&ldquo; in dieser Datenschutzerklärung.
            </p>
            <p>
              <strong>Wie erfassen wir Ihre Daten?</strong>
              <br />
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
              mitteilen. Hierbei kann es sich beispielsweise um Daten handeln, die Sie
              in unser Beratungsformular eingeben oder uns per E-Mail übermitteln.
              Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch
              der Website durch unsere IT-Systeme erfasst. Das sind vor allem
              technische Daten, beispielsweise Internetbrowser, Betriebssystem,
              IP-Adresse oder Uhrzeit des Seitenaufrufs. Die Erfassung dieser Daten
              erfolgt automatisch, sobald Sie diese Website betreten.
            </p>
            <p>
              <strong>Wofür nutzen wir Ihre Daten?</strong>
              <br />
              Ein Teil der Daten wird erhoben, um eine technisch fehlerfreie und
              sichere Bereitstellung der Website zu gewährleisten. Daten, die Sie uns
              über das Beratungsformular übermitteln, verwenden wir zur Bearbeitung
              Ihrer Anfrage und dazu, Sie zu unseren Weiterbildungen und zu Ihren
              Fördermöglichkeiten zu beraten. Mit Ihrer Einwilligung nutzen wir
              außerdem Google Analytics zur statistischen Auswertung der Nutzung
              unserer Website sowie HubSpot für unsere Marketing- und
              Kundenbeziehungsmanagement-Maßnahmen.
            </p>
            <p>
              <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong>
              <br />
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft,
              Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu
              erhalten. Sie haben außerdem ein Recht auf Berichtigung oder Löschung
              dieser Daten. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt
              haben, können Sie diese Einwilligung jederzeit mit Wirkung für die
              Zukunft widerrufen. Außerdem haben Sie unter bestimmten
              Voraussetzungen das Recht, die Einschränkung der Verarbeitung Ihrer
              personenbezogenen Daten zu verlangen sowie der Verarbeitung zu
              widersprechen. Des Weiteren steht Ihnen ein Beschwerderecht bei der
              zuständigen Aufsichtsbehörde zu. Hierzu sowie zu weiteren Fragen zum
              Thema Datenschutz können Sie sich jederzeit an uns wenden.
            </p>

            <h3>Analyse-Tools und Tools von Drittanbietern</h3>
            <p>
              Beim Besuch dieser Website kann Ihr Nutzungsverhalten mit Ihrer
              Einwilligung statistisch ausgewertet werden. Hierfür verwenden wir
              Google Analytics. Die Verwaltung der entsprechenden Website-Tags
              erfolgt über den Google Tag Manager. Außerdem setzen wir mit Ihrer
              Einwilligung HubSpot für Marketing- und
              Kundenbeziehungsmanagement-Zwecke ein. Weitere Informationen hierzu
              finden Sie in dieser Datenschutzerklärung.
            </p>

            <h2>2. Hosting</h2>

            <h3>Externes Hosting</h3>
            <p>
              Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf
              dieser Website erfasst werden, werden auf den Servern des Hosters
              gespeichert. Hierbei kann es sich insbesondere um IP-Adressen,
              Kontaktanfragen, Meta- und Kommunikationsdaten, Kontaktdaten,
              Websitezugriffe und sonstige über die Website erzeugte Daten handeln.
            </p>
            <p>
              Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber
              potenziellen und bestehenden Kunden gemäß Art. 6 Abs. 1 lit. b DSGVO
              sowie im Interesse einer sicheren, schnellen und effizienten
              Bereitstellung unseres Online-Angebots durch einen professionellen
              Anbieter gemäß Art. 6 Abs. 1 lit. f DSGVO. Unser Hoster verarbeitet Ihre
              Daten nur insoweit, wie dies zur Erfüllung seiner Leistungspflichten
              erforderlich ist.
            </p>
            <p>Wir setzen folgenden Hoster ein:</p>
            <p>
              Microsoft Corporation
              <br />
              One Microsoft Way
              <br />
              Redmond, WA 98052-6399
              <br />
              Vereinigte Staaten von Amerika
              <br />
              (Microsoft Azure Static Web Apps)
            </p>

            <h3>Auftragsverarbeitung</h3>
            <p>
              Wir haben einen Vertrag über Auftragsverarbeitung zur Nutzung des oben
              genannten Dienstes geschlossen. Hierbei handelt es sich um einen
              datenschutzrechtlichen Vertrag, der sicherstellen soll, dass
              personenbezogene Daten der Websitebesucher entsprechend den geltenden
              datenschutzrechtlichen Vorgaben verarbeitet werden. Da Microsoft seinen
              Sitz in den USA hat, können Daten auch dort verarbeitet werden.
              Grundlage sind das EU-US Data Privacy Framework (DPF) und die
              Standardvertragsklauseln der EU-Kommission.
            </p>

            <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>

            <h3>Datenschutz</h3>
            <p>
              Der Betreiber dieser Website nimmt den Schutz Ihrer persönlichen Daten
              sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und
              entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser
              Datenschutzerklärung. Wenn Sie diese Website benutzen, werden
              verschiedene personenbezogene Daten verarbeitet. Diese
              Datenschutzerklärung erläutert, welche Daten verarbeitet werden, zu
              welchem Zweck dies geschieht und auf welcher Grundlage die
              Verarbeitung erfolgt. Wir weisen darauf hin, dass die Datenübertragung
              im Internet, beispielsweise bei der Kommunikation per E-Mail,
              Sicherheitslücken aufweisen kann. Ein vollständiger Schutz der Daten
              vor dem Zugriff durch Dritte ist nicht möglich.
            </p>

            <h3>Hinweis zur verantwortlichen Stelle</h3>
            <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
            <p>
              HalloSkills GmbH
              <br />
              Heiko Kuhn
              <br />
              Cremon 11
              <br />
              20457 Hamburg
              <br />
              Deutschland
              <br />
              E-Mail: <a href="mailto:admin@halloskills.de">admin@halloskills.de</a>
            </p>
            <p>
              Verantwortliche Stelle ist die natürliche oder juristische Person, die
              allein oder gemeinsam mit anderen über die Zwecke und Mittel der
              Verarbeitung personenbezogener Daten entscheidet.
            </p>

            <h3>Speicherdauer</h3>
            <p>
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere
              Speicherdauer genannt wird, verbleiben Ihre personenbezogenen Daten bei
              uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein
              berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur
              Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern keine
              anderen rechtlich zulässigen Gründe für die Speicherung bestehen.
              Gesetzliche Aufbewahrungsfristen bleiben hiervon unberührt.
            </p>

            <h3>Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung</h3>
            <p>
              Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir
              Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a
              DSGVO. Sofern Ihre Daten zur Vertragserfüllung oder zur Durchführung
              vorvertraglicher Maßnahmen erforderlich sind, erfolgt die Verarbeitung
              auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO. Soweit eine Verarbeitung
              zur Erfüllung einer rechtlichen Verpflichtung erforderlich ist, erfolgt
              sie auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Eine Verarbeitung kann
              darüber hinaus auf Grundlage unseres berechtigten Interesses gemäß Art.
              6 Abs. 1 lit. f DSGVO erfolgen. Soweit die Speicherung von
              Informationen auf Ihrem Endgerät oder der Zugriff auf bereits
              gespeicherte Informationen eine Einwilligung erfordert, erfolgt dies
              zusätzlich auf Grundlage von § 25 Abs. 1 TDDDG.
            </p>

            <h3>Empfänger von personenbezogenen Daten</h3>
            <p>
              Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen
              externen Dienstleistern zusammen. Dabei kann es erforderlich sein,
              personenbezogene Daten an diese Stellen zu übermitteln. Eine Weitergabe
              personenbezogener Daten erfolgt nur, wenn eine entsprechende
              Rechtsgrundlage besteht, beispielsweise zur Durchführung
              vorvertraglicher Maßnahmen, zur Vertragserfüllung, aufgrund einer
              gesetzlichen Verpflichtung, auf Grundlage eines berechtigten Interesses
              oder aufgrund Ihrer Einwilligung.
            </p>

            <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
            <p>
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
              Einwilligung möglich. Sie können eine bereits erteilte Einwilligung
              jederzeit mit Wirkung für die Zukunft widerrufen. Die Rechtmäßigkeit der
              bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf
              unberührt.
            </p>

            <h3>Widerspruchsrecht</h3>
            <p>
              Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f
              DSGVO erfolgt, haben Sie jederzeit das Recht, aus Gründen, die sich aus
              Ihrer besonderen Situation ergeben, gegen die Verarbeitung Ihrer
              personenbezogenen Daten Widerspruch einzulegen. Werden personenbezogene
              Daten zum Zwecke der Direktwerbung verarbeitet, haben Sie jederzeit das
              Recht, der Verarbeitung zum Zwecke derartiger Werbung zu widersprechen.
            </p>

            <h3>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
            <p>
              Im Falle von Verstößen gegen die DSGVO steht Betroffenen ein
              Beschwerderecht bei einer Datenschutzaufsichtsbehörde zu. Das
              Beschwerderecht besteht insbesondere in dem Mitgliedstaat Ihres
              gewöhnlichen Aufenthalts, Ihres Arbeitsplatzes oder des Orts des
              mutmaßlichen Verstoßes. Für uns zuständig ist der Hamburgische
              Beauftragte für Datenschutz und Informationsfreiheit, Ludwig-Erhard-Str.
              22, 20459 Hamburg.
            </p>

            <h3>Recht auf Datenübertragbarkeit</h3>
            <p>
              Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung
              oder in Erfüllung eines Vertrags automatisiert verarbeiten, in einem
              gängigen, maschinenlesbaren Format an sich oder einen Dritten
              aushändigen zu lassen. Eine direkte Übertragung an einen anderen
              Verantwortlichen erfolgt nur, soweit dies technisch machbar ist.
            </p>

            <h3>Auskunft, Berichtigung und Löschung</h3>
            <p>
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit
              das Recht auf unentgeltliche Auskunft über Ihre gespeicherten
              personenbezogenen Daten, deren Herkunft und Empfänger sowie den Zweck
              der Datenverarbeitung. Sie haben außerdem gegebenenfalls ein Recht auf
              Berichtigung oder Löschung dieser Daten.
            </p>

            <h3>Recht auf Einschränkung der Verarbeitung</h3>
            <p>
              Sie haben unter den gesetzlichen Voraussetzungen das Recht, die
              Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
              verlangen. Dies gilt insbesondere, wenn Sie die Richtigkeit der bei uns
              gespeicherten Daten bestreiten, die Verarbeitung unrechtmäßig ist, wir
              die Daten nicht mehr benötigen, Sie diese jedoch zur Geltendmachung
              oder Verteidigung von Rechtsansprüchen benötigen oder Sie Widerspruch
              gegen die Verarbeitung eingelegt haben.
            </p>

            <h3>SSL- beziehungsweise TLS-Verschlüsselung</h3>
            <p>
              Diese Website nutzt aus Sicherheitsgründen und zum Schutz der
              Übertragung vertraulicher Inhalte eine SSL- beziehungsweise
              TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran,
              dass die Adresszeile Ihres Browsers mit &bdquo;https://&ldquo; beginnt
              und in der Regel ein Schloss-Symbol angezeigt wird. Wenn die SSL-
              beziehungsweise TLS-Verschlüsselung aktiviert ist, können die Daten,
              die Sie an uns übermitteln, nicht ohne Weiteres von Dritten mitgelesen
              werden.
            </p>

            <h3>Widerspruch gegen Werbe-E-Mails</h3>
            <p>
              Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
              Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter
              Werbung und Informationsmaterialien wird widersprochen. Der
              Websitebetreiber behält sich rechtliche Schritte im Falle der
              unverlangten Zusendung von Werbeinformationen, beispielsweise durch
              Spam-E-Mails, vor.
            </p>

            <h2>4. Datenerfassung auf dieser Website</h2>

            <h3>Cookies</h3>
            <p>
              Unsere Website verwendet Cookies und vergleichbare Technologien.
              Cookies sind kleine Datenpakete, die auf Ihrem Endgerät gespeichert
              werden können. Sie können entweder nur für die Dauer einer Sitzung
              oder dauerhaft gespeichert werden. Technisch notwendige Cookies
              beziehungsweise vergleichbare Speichertechnologien werden eingesetzt,
              soweit dies für den Betrieb und die Bereitstellung der Website
              erforderlich ist. Soweit Cookies oder vergleichbare Technologien nicht
              technisch erforderlich sind, werden diese nur nach Ihrer vorherigen
              Einwilligung eingesetzt. Die Verarbeitung erfolgt in diesem Fall auf
              Grundlage von Art. 6 Abs. 1 lit. a DSGVO in Verbindung mit § 25 Abs. 1
              TDDDG. Die Einwilligung kann jederzeit mit Wirkung für die Zukunft
              widerrufen werden.
            </p>

            <h3>Cookie-Einstellungen und Einwilligungsverwaltung</h3>
            <p>
              Beim ersten Besuch unserer Website können Sie über das Cookie-Banner
              entscheiden, ob ausschließlich notwendige Funktionen verwendet werden
              oder ob Sie zusätzlich in die Nutzung von Analyse- und
              Marketing-Technologien einwilligen. Ihre Auswahl wird in Ihrem Browser
              gespeichert, damit Sie nicht bei jedem Seitenaufruf erneut gefragt
              werden. Sie können Ihre Entscheidung jederzeit über den Link
              &bdquo;Cookie-Einstellungen&ldquo; im Footer unserer Website ändern oder eine
              erteilte Einwilligung widerrufen. Google Analytics und HubSpot werden
              nur auf Grundlage Ihrer Einwilligung eingesetzt.
            </p>

            <h3>Server-Log-Dateien</h3>
            <p>
              Der Provider dieser Website erhebt und speichert automatisch
              Informationen in sogenannten Server-Log-Dateien, die Ihr Browser
              automatisch übermittelt. Hierzu können insbesondere gehören:
            </p>
            <ul>
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname beziehungsweise technische Informationen des zugreifenden Geräts</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p>
              Eine Zusammenführung dieser Daten mit anderen Datenquellen erfolgt
              grundsätzlich nicht. Die Verarbeitung erfolgt auf Grundlage von Art. 6
              Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer
              technisch fehlerfreien Darstellung, Sicherheit und Optimierung unserer
              Website.
            </p>

            <h3>Beratungsformular</h3>
            <p>
              Auf unserer Seite &bdquo;Beratung buchen&ldquo; bieten wir ein
              Formular an, mit dem Sie eine kostenlose Beratung zu unseren
              Weiterbildungen anfragen können. Das Formular ist technisch als
              HubSpot-Formular eingebunden; Ihre Angaben werden an HubSpot
              übermittelt und dort für uns gespeichert. Weitere Informationen zu
              HubSpot als Auftragsverarbeiter finden Sie im Abschnitt
              &bdquo;HubSpot&ldquo; dieser Datenschutzerklärung. Wir verarbeiten die
              von Ihnen eingegebenen Angaben einschließlich Ihrer Kontaktdaten, um
              Ihre Anfrage zu bearbeiten, Sie zu unseren Weiterbildungen und zu
              Ihren Fördermöglichkeiten zu beraten und Sie gegebenenfalls zu Ihrer
              Anfrage zu kontaktieren. Die Verarbeitung erfolgt zur Durchführung
              vorvertraglicher Maßnahmen gemäß Art. 6 Abs. 1 lit. b DSGVO. Soweit
              keine vorvertragliche Verarbeitung vorliegt, kann die Verarbeitung auf
              Grundlage unseres berechtigten Interesses an einer effektiven
              Bearbeitung Ihrer Anfrage gemäß Art. 6 Abs. 1 lit. f DSGVO erfolgen.
              Sofern für einzelne Verarbeitungsvorgänge ausdrücklich eine
              Einwilligung abgefragt wird, erfolgt die Verarbeitung auf Grundlage von
              Art. 6 Abs. 1 lit. a DSGVO. Die Daten werden nur so lange gespeichert,
              wie dies zur Bearbeitung Ihrer Anfrage erforderlich ist oder
              gesetzliche Aufbewahrungspflichten bestehen.
            </p>

            <h3>Anfrage per E-Mail</h3>
            <p>
              Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir Ihre Anfrage
              einschließlich der daraus hervorgehenden personenbezogenen Daten zum
              Zwecke der Bearbeitung Ihres Anliegens. Die Verarbeitung erfolgt auf
              Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der
              Durchführung vorvertraglicher Maßnahmen oder der Erfüllung eines
              Vertrags zusammenhängt. In allen übrigen Fällen beruht die Verarbeitung
              auf unserem berechtigten Interesse an einer effektiven Bearbeitung der
              an uns gerichteten Anfragen gemäß Art. 6 Abs. 1 lit. f DSGVO oder auf
              Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO, sofern diese
              abgefragt wird. Die Daten werden gelöscht, sobald der Zweck für die
              Speicherung entfällt und keine gesetzlichen Aufbewahrungspflichten
              entgegenstehen.
            </p>

            <h3>Daten von Partnerportalen</h3>
            <p>
              Wenn Sie über ein Partnerportal eine Beratung zu Umschulungen oder
              Weiterbildungen anfragen und in die Weitergabe eingewilligt haben,
              erhalten wir von dort Ihre Kontaktdaten sowie Ihre Angaben zu Ihrer
              beruflichen Situation und Ihren Interessen. Wir nutzen diese Daten, um
              Sie per Telefon, E-Mail oder WhatsApp zu Ihrer Anfrage zu beraten (Art.
              6 Abs. 1 lit. a und b DSGVO). Auf Anfrage nennen wir Ihnen das
              jeweilige Portal.
            </p>

            <h3>Kontakt über WhatsApp</h3>
            <p>
              Wenn Sie eine Kontaktaufnahme per WhatsApp wünschen, nutzen wir dafür
              WhatsApp (WhatsApp Ireland Limited, Dublin, Irland). Dabei können Daten
              auch in die USA übermittelt werden, Grundlage ist das EU-US Data
              Privacy Framework (DPF). Die Kontaktaufnahme erfolgt nur mit Ihrer
              Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), die Sie jederzeit widerrufen
              können.
            </p>

            <h3>Unsere Lernplattform</h3>
            <p>
              Für unsere Online-Lehrgänge nutzen wir eine interaktive Lernplattform
              eines spezialisierten Anbieters mit Sitz in Deutschland. Sobald Sie
              verbindlich zu einem Lehrgang angemeldet sind, verarbeiten wir dort
              Ihre Zugangsdaten, Ihren Namen, Ihre E-Mail-Adresse sowie Ihre
              Lernfortschritte und Teilnahmedaten, um den Lehrgang durchzuführen
              (Art. 6 Abs. 1 lit. b DSGVO). Der Anbieter verarbeitet die Daten in
              unserem Auftrag, wir haben mit ihm einen Vertrag über
              Auftragsverarbeitung geschlossen. Auf Anfrage nennen wir Ihnen den
              Anbieter.
            </p>

            <h3>Datenübermittlung an Agentur für Arbeit und Jobcenter</h3>
            <p>
              Sofern Ihre Teilnahme über einen Bildungsgutschein gefördert wird,
              übermitteln wir die für die Förderung erforderlichen Angaben an die
              zuständige Agentur für Arbeit oder das zuständige Jobcenter. Dazu
              gehören insbesondere Beginn und Ende der Teilnahme, Anwesenheiten und
              Fehlzeiten, ein vorzeitiger Abbruch sowie die Teilnahmebescheinigung.
              Die Übermittlung erfolgt, weil wir als Bildungsträger dazu verpflichtet
              sind (Art. 6 Abs. 1 lit. c DSGVO in Verbindung mit den Vorschriften des
              SGB II und SGB III) und weil sie für die Durchführung der geförderten
              Teilnahme erforderlich ist (Art. 6 Abs. 1 lit. b DSGVO).
            </p>

            <h3>Bewerbungen über Personio</h3>
            <p>
              Für Bewerbungen nutzen wir die Software Personio (Personio SE &amp; Co.
              KG, München). Wenn Sie sich über unsere Stellenangebote bewerben,
              werden Ihre Angaben dort gespeichert und zur Durchführung des
              Bewerbungsverfahrens verarbeitet (§ 26 BDSG, Art. 6 Abs. 1 lit. b
              DSGVO). Nach Abschluss des Verfahrens werden die Daten gelöscht, sofern
              keine gesetzlichen Pflichten oder Ihre Einwilligung eine längere
              Speicherung erlauben.
            </p>

            <h2>5. Analyse-Tools</h2>

            <h3>Google Tag Manager</h3>
            <p>
              Diese Website verwendet den Google Tag Manager. Anbieter ist Google
              Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Der
              Google Tag Manager dient dazu, Website-Tags und andere technische
              Dienste zentral zu verwalten. Der Google Tag Manager erstellt selbst
              keine eigenständigen Nutzerprofile und dient nicht unmittelbar der
              Analyse des Nutzerverhaltens. Über den Tag Manager können jedoch
              andere Dienste, insbesondere Google Analytics, eingebunden und
              gesteuert werden. Der Google Tag Manager wird nur geladen, wenn
              Sie zuvor über unser Cookie-Banner in die Statistik eingewilligt haben
              (Art. 6 Abs. 1 lit. a DSGVO in Verbindung mit § 25 Abs. 1 TDDDG).
              Ohne Ihre Einwilligung wird keine Verbindung zu Servern von Google
              hergestellt. Die Einwilligung können Sie jederzeit über den Link
              &bdquo;Cookie-Einstellungen&ldquo; im Footer unserer Website mit Wirkung für
              die Zukunft ändern oder widerrufen. Nach einem Widerruf wird der Google
              Tag Manager beim nächsten Seitenaufruf nicht mehr geladen.
            </p>

            <h3>Google Analytics</h3>
            <p>
              Diese Website verwendet Google Analytics, einen Webanalysedienst von
              Google. Anbieter für Nutzer im Europäischen Wirtschaftsraum ist Google
              Ireland Limited, Irland. Google Analytics ermöglicht uns, die Nutzung
              unserer Website statistisch auszuwerten. Dabei können insbesondere
              Informationen über aufgerufene Seiten, Verweildauer, verwendete Geräte
              und Browser, ungefähre Herkunft sowie Interaktionen mit der Website
              verarbeitet werden.
            </p>
            <p>
              Google Analytics wird auf dieser Website nur für Analysezwecke
              eingesetzt, wenn Sie zuvor über unser Cookie-Banner eingewilligt
              haben. Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung gemäß
              Art. 6 Abs. 1 lit. a DSGVO in Verbindung mit § 25 Abs. 1 TDDDG. Sie
              können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft über den
              Link &bdquo;Cookie-Einstellungen&ldquo; im Footer unserer Website widerrufen
              oder ändern.
            </p>
            <p>
              Google Analytics setzt Cookies, die bis zu zwei Jahre gespeichert
              werden. Ereignisdaten werden nach 2 Monaten automatisch gelöscht,
              nutzerbezogene Daten nach 14 Monaten ohne erneuten Besuch. Sie können
              die Erfassung zusätzlich mit dem Browser-Add-on zur Deaktivierung von
              Google Analytics verhindern.
            </p>
            <p>
              Im Zusammenhang mit der Nutzung von Google-Diensten kann eine
              Verarbeitung von Daten außerhalb der Europäischen Union beziehungsweise
              des Europäischen Wirtschaftsraums stattfinden. Übermittlungen an die
              Google LLC in den USA erfolgen auf Grundlage des EU-US Data Privacy
              Framework (DPF).
            </p>
            <p>
              Weitere Informationen zum Umgang mit Nutzerdaten bei Google Analytics
              finden Sie in der Datenschutzerklärung von Google:{" "}
              <a
                href="https://policies.google.com/privacy?hl=de"
                target="_blank"
                rel="noopener noreferrer"
              >
                policies.google.com/privacy
              </a>
              .
            </p>

            <h2>6. HubSpot</h2>
            <p>
              Diese Website nutzt HubSpot, eine Software für Marketing, Vertrieb und
              Kundenbeziehungsmanagement (CRM). Anbieter für Nutzer im Europäischen
              Wirtschaftsraum ist HubSpot Ireland Limited, One Dockland Central,
              Guild Street, Dublin 1, Irland. HubSpot ermöglicht uns, das
              Nutzungsverhalten auf unserer Website auszuwerten und unsere
              Marketing-Maßnahmen zu verbessern. Dabei kann HubSpot ein Cookie
              (hubspotutk) auf Ihrem Endgerät setzen, mit dem Ihr Browser bei
              erneuten Besuchen wiedererkannt werden kann. Wenn Sie uns
              beispielsweise über das Beratungsformular Ihre Kontaktdaten mitteilen,
              kann diese Information mit Ihrem bisherigen Nutzungsverhalten auf
              unserer Website verknüpft werden. Dabei können Daten an die HubSpot,
              Inc. in den USA übermittelt werden. Grundlage ist das EU-US Data
              Privacy Framework (DPF).
            </p>
            <p>
              Das HubSpot-Tracking wird auf dieser Website nur eingesetzt, wenn Sie
              zuvor über unser Cookie-Banner eingewilligt haben. Die Verarbeitung
              erfolgt auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a
              DSGVO in Verbindung mit § 25 Abs. 1 TDDDG. Sie können Ihre
              Einwilligung jederzeit mit Wirkung für die Zukunft über den Link
              &bdquo;Cookie-Einstellungen&ldquo; im Footer unserer Website widerrufen oder
              ändern.
            </p>
            <p>
              Weitere Informationen zum Umgang mit Nutzerdaten bei HubSpot finden
              Sie in der Datenschutzerklärung von HubSpot:{" "}
              <a
                href="https://legal.hubspot.com/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                legal.hubspot.com/privacy-policy
              </a>
              .
            </p>

            <h2>7. Schriftarten</h2>
            <p>
              Diese Website nutzt zur einheitlichen Darstellung von Schriftarten
              sogenannte Web Fonts. Die von uns verwendeten Schriftarten werden
              lokal über unsere Website beziehungsweise unseren Hosting-Anbieter
              bereitgestellt. Beim Laden der Schriftarten wird daher keine
              Verbindung zu Servern von Google Fonts oder anderen externen
              Schriftanbieter-Diensten hergestellt.
            </p>

            <h2>Cookie-Übersicht</h2>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[40rem] border-collapse text-left text-sm [&_td]:border-b [&_td]:border-gray-200 [&_td]:py-2 [&_td]:pr-3 [&_td]:align-top [&_th]:border-b [&_th]:border-gray-300 [&_th]:py-2 [&_th]:pr-3 [&_th]:font-bold">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Anbieter</th>
                    <th>Zweck</th>
                    <th>Speicherdauer</th>
                    <th>Kategorie</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>halloskills_consent</td>
                    <td>HalloSkills (diese Website)</td>
                    <td>
                      Speichert Ihre Cookie-Entscheidung. Technisch ist das kein
                      Cookie, sondern ein Eintrag im lokalen Speicher Ihres Browsers.
                    </td>
                    <td>bis Sie die Browserdaten löschen oder Ihre Entscheidung ändern</td>
                    <td>notwendig</td>
                  </tr>
                  <tr>
                    <td>_ga</td>
                    <td>Google Ireland Limited</td>
                    <td>Unterscheidet Nutzer für die statistische Auswertung.</td>
                    <td>2 Jahre</td>
                    <td>Statistik</td>
                  </tr>
                  <tr>
                    <td>_ga_SM215Q2540</td>
                    <td>Google Ireland Limited</td>
                    <td>Speichert den Sitzungsstatus für die statistische Auswertung.</td>
                    <td>2 Jahre</td>
                    <td>Statistik</td>
                  </tr>
                  <tr>
                    <td>__hstc</td>
                    <td>HubSpot Ireland Limited</td>
                    <td>
                      Haupt-Cookie zur Wiedererkennung von Besuchern. Enthält unter
                      anderem Domain, hubspotutk, Zeitpunkte der Besuche und die
                      Sitzungsnummer.
                    </td>
                    <td>6 Monate</td>
                    <td>Marketing</td>
                  </tr>
                  <tr>
                    <td>hubspotutk</td>
                    <td>HubSpot Ireland Limited</td>
                    <td>
                      Erkennt Ihren Browser wieder und wird bei Formularabsendung
                      übergeben, um Kontakte zusammenzuführen.
                    </td>
                    <td>6 Monate</td>
                    <td>Marketing</td>
                  </tr>
                  <tr>
                    <td>__hssc</td>
                    <td>HubSpot Ireland Limited</td>
                    <td>Verfolgt Sitzungen.</td>
                    <td>30 Minuten</td>
                    <td>Marketing</td>
                  </tr>
                  <tr>
                    <td>__hssrc</td>
                    <td>HubSpot Ireland Limited</td>
                    <td>
                      Erkennt, ob der Browser neu gestartet wurde, und damit eine neue
                      Sitzung.
                    </td>
                    <td>bis zum Ende der Sitzung</td>
                    <td>Marketing</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-12 text-[0.85rem] text-hs-muted">
              Stand dieser Datenschutzerklärung: Oktober 2026
            </p>
          </div>
        </div>
      </section>

      <FooterV2 />
    </div>
  );
}

import type { Metadata } from "next";
import { NavV2 } from "@/components/sections/startseite-v2/nav-v2";
import { Eyebrow } from "@/components/sections/startseite-v2/hs-ui";
import { FooterV2 } from "@/components/sections/startseite-v2/footer-v2";

export const metadata: Metadata = {
  title: "Über uns – Unser Leitbild | HalloSkills",
  description:
    "Das Leitbild der HalloSkills GmbH: wer wir sind, für wen wir da sind und welche Werte unsere Arbeit als Bildungsträger leiten.",
};

export default function UeberUnsPage() {
  return (
    <div className="hs-v2 bg-white">
      <NavV2 />

      <section className="px-6 pb-6 pt-14 md:px-10 lg:pt-20">
        <div className="mx-auto max-w-[760px]">
          <Eyebrow ton="blau">Über uns</Eyebrow>
          <h1 className="mt-6 text-[clamp(2rem,4vw,2.75rem)] leading-[1.15]">
            Leitbild der HalloSkills GmbH
          </h1>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-[760px]">
          <div className="hs-legal">
            <h2>Wer wir sind</h2>
            <p>
              Die HalloSkills GmbH ist ein Bildungsträger mit Sitz in Hamburg. Wir
              qualifizieren Menschen für den beruflichen (Wieder-)Einstieg im
              kaufmännischen Bereich und führen unsere Maßnahmen als reine
              Online-Angebote im virtuellen Klassenraum durch, ergänzt um eine
              digitale Lernplattform. So machen wir berufliche Bildung auch für
              Menschen zugänglich, die an klassische Präsenzangebote nur
              eingeschränkt angebunden sind, sei es wegen Wohnort, familiärer
              Verpflichtungen, Mobilität oder zeitlicher Organisation.
            </p>

            <h2>Unser Auftrag</h2>
            <p>
              Wir richten unsere Bildungsmaßnahmen an zwei Maßstäben aus: an den
              realen Voraussetzungen der Teilnehmenden und an den Anforderungen
              des Arbeitsmarktes. Unser Ziel ist die nachhaltige berufliche
              Eingliederung mit einer tragfähigen beruflichen Perspektive. Wir
              vermitteln fachliche, digitale und organisatorische Kompetenzen,
              die im modernen Arbeitsleben wirklich gebraucht werden, und
              befähigen unsere Teilnehmenden, für Unternehmen zu wertvollen
              Arbeitskräften zu werden.
            </p>

            <h2>Für wen wir da sind</h2>
            <p>
              Im Mittelpunkt unserer Arbeit stehen unsere Teilnehmenden. Wir
              richten uns an arbeitsuchende Personen, Quereinsteiger und
              Berufsrückkehrer, die einen (Wieder-)Einstieg in kaufmännische
              Tätigkeiten anstreben, zum Beispiel nach Arbeitslosigkeit,
              Familienphase, längerer Erwerbsunterbrechung, beruflicher
              Neuorientierung oder gesundheitlich bedingter Veränderung ihrer
              bisherigen Tätigkeit.
            </p>
            <p>
              Wir wissen, dass unsere Teilnehmenden unterschiedliche
              Voraussetzungen und Lebenssituationen mitbringen. Ihre Erwartungen
              sind unser Anspruch: ein verständlicher Einstieg, eine klare
              Struktur, verlässliche Betreuung, praxisnahe Inhalte und eine
              berufliche Perspektive. Vor Aufnahme in eine Maßnahme führen wir
              ein Beratungs- und Eignungsgespräch. Ist eine Maßnahme fachlich,
              organisatorisch oder technisch nicht geeignet, kommunizieren wir
              dies offen und verweisen auf passende Alternativen.
            </p>

            <h2>Unsere Werte</h2>
            <p>
              <strong>Kundenorientierung.</strong> Wir gestalten unsere
              Maßnahmen so, dass sie fachlich sinnvoll, digital zugänglich,
              organisatorisch verlässlich und arbeitsmarktnah sind. Wir hören
              zu, holen regelmäßig Rückmeldungen ein und richten unser Handeln
              an den Zielen und Lebensumständen unserer Teilnehmenden aus.
            </p>
            <p>
              <strong>Chancengleichheit und Inklusion.</strong> Wir bekennen uns
              zu Integration, Inklusion und Chancengleichheit. Wir öffnen
              Bildungswege für Menschen, denen der Zugang bisher erschwert war,
              und verpflichten uns zu Diskriminierungsfreiheit. Wo Teilnahme an
              praktischen Hürden zu scheitern droht, suchen wir nach Wegen, sie
              zu ermöglichen, statt Menschen daran scheitern zu lassen. Wir
              begegnen allen mit Respekt, unabhängig von Herkunft, Geschlecht,
              Alter, Weltanschauung, Behinderung oder Lebenssituation.
            </p>
            <p>
              <strong>Verlässlichkeit.</strong> Wir stehen für klare
              Kommunikationswege, verbindliche Absprachen und eine
              kontinuierliche, persönliche Begleitung über den gesamten
              Maßnahmeverlauf hinweg.
            </p>
            <p>
              <strong>Qualität.</strong> Qualität ist für uns ein stetiger
              Verbesserungsprozess. Wir arbeiten nach klaren Standards, prüfen
              unsere Ergebnisse fortlaufend und entwickeln unsere Angebote
              systematisch weiter.
            </p>
            <p>
              <strong>Grenzen anerkennen.</strong> Wir kennen die Grenzen
              unseres Auftrags. Werden Unterstützungsbedarfe erkennbar, die über
              die kaufmännische Qualifizierung hinausgehen, verweisen wir offen
              und verlässlich an geeignete Beratungs- und Unterstützungsstellen.
            </p>

            <h2>Wie wir lernen</h2>
            <p>
              Unser Unterricht findet live im virtuellen Klassenraum statt und
              wird durch eine digitale Lernplattform ergänzt. Wir verbinden
              allgemeingültige Lehrinhalte mit den individuellen
              Interessengebieten unserer Teilnehmenden und setzen auf
              praxisnahe, aktivierende Lernformen. Unsere Dozentinnen und
              Dozenten sind Fachexperten und Lernbegleiter zugleich: Sie fördern
              jede und jeden Einzelnen so, dass alle vom Bildungsangebot
              profitieren, stärken Eigenverantwortung und Selbstwirksamkeit und
              schaffen eine wertschätzende Lernatmosphäre.
            </p>

            <h2>Ausrichtung am Arbeits- und Ausbildungsmarkt</h2>
            <p>
              Wir bereiten unsere Teilnehmenden auf eine realistische Rückkehr
              in den Arbeitsmarkt vor. Unsere Maßnahmen orientieren sich an
              kaufmännischen Berufsbildern und greifen zusätzlich Kompetenzen
              auf, die im heutigen Arbeitsalltag regelmäßig gebraucht werden:
              digitale Zusammenarbeit, sichere Nutzung gängiger Office- und
              Kommunikationstools, kaufmännisches Grundverständnis,
              strukturierte Arbeitsorganisation und berufliche Kommunikation.
              Rückmeldungen aus der Arbeitsmarktbeobachtung, dem
              Teilnehmerfeedback und dem Austausch mit Arbeitsmarktakteuren
              fließen kontinuierlich in die Weiterentwicklung unserer Angebote
              ein.
            </p>

            <h2>Unsere Partner</h2>
            <p>
              Wir arbeiten vertrauensvoll mit Agenturen für Arbeit und
              Jobcentern und perspektivisch mit Betrieben und Kammern zusammen.
              Diese Zusammenarbeit sichert die Praxisnähe und
              Anschlussfähigkeit unserer Maßnahmen und verbindet die
              Erwartungen der Teilnehmenden, der Kostenträger und der
              Unternehmen mit wirtschaftlich tragfähigen und qualitativ
              stabilen Abläufen.
            </p>

            <h2>Unser Führungsverständnis und unsere Lernkultur</h2>
            <p>
              Unser Führungsleitbild beruht auf klarer Verantwortung, offener
              Kommunikation und verbindlichen Absprachen. Wir pflegen eine
              Lernkultur, in der Rückmeldungen willkommen sind und genutzt
              werden, um Prozesse und Maßnahmen pragmatisch zu verbessern. Der
              Erfolg unserer Arbeit beruht auf engagierten, qualifizierten
              Menschen. Wir fördern ihre Weiterbildung, ihre Zusammenarbeit und
              eine Kultur, in der Verantwortung übernommen und Neues erprobt
              werden darf.
            </p>

            <h2>Unsere Qualitätspolitik</h2>
            <p>
              Die Geschäftsführung versteht dieses Leitbild zugleich als
              Qualitätspolitik der HalloSkills GmbH und verpflichtet sich zu
              seiner Umsetzung. Es bildet den Rahmen für die Entwicklung
              unserer Maßnahmen, die Auswahl unserer Dozentinnen und Dozenten,
              den Umgang mit unseren Teilnehmenden und die kontinuierliche
              Verbesserung unserer Bildungsangebote. Unseren Erfolg messen wir
              am Lernfortschritt, an der Zufriedenheit unserer Teilnehmenden
              und vor allem an ihrer erfolgreichen beruflichen Integration.
            </p>

            <h2>Pflege und Aktualisierung</h2>
            <p>
              Dieses Leitbild wird intern (Onboarding von Mitarbeitenden,
              Dozentinnen und Dozenten sowie freien Mitarbeitenden) und extern
              (Website, Teilnehmerinformationen, Partnerunterlagen)
              kommuniziert. Die Verantwortung für Pflege und Aktualisierung
              liegt bei der Geschäftsführung in Abstimmung mit der Stabsstelle
              Qualitätsmanagement. Eine Überprüfung erfolgt mindestens einmal
              jährlich sowie anlassbezogen, wenn sich Zielgruppen, Maßnahmen,
              arbeitsmarktrelevante Anforderungen oder wesentliche
              Rückmeldungen aus Teilnehmerbefragungen und Beschwerden ändern.
              Änderungen werden dokumentiert und intern kommuniziert.
            </p>

            <p className="mt-12 text-[0.85rem] text-hs-muted">
              Stand: 24.08.2026 · Version 1.0
            </p>
          </div>
        </div>
      </section>

      <FooterV2 />
    </div>
  );
}

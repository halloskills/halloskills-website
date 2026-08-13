export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  readingTime: string;
  excerpt: string;
  date: string;
  image: string;
  content: string;
};

export function calcReadingTime(content: string): string {
  const words = content.replace(/<[^>]*>/g, " ").split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} Min.`;
}

export const POSTS: BlogPost[] = [
  {
    slug: "bildungsgutschein-beantragen",
    title: "Bildungsgutschein beantragen – Schritt für Schritt erklärt",
    category: "Bildungsgutschein",
    readingTime: "8 min",
    date: "2025-03-15",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop&q=60",
    excerpt:
      "Alles was du wissen musst, um deinen Bildungsgutschein erfolgreich zu beantragen. Mit Checkliste und Argumentationshilfe für das Gespräch bei der Agentur für Arbeit.",
    content: `
<h2>Was ist der Bildungsgutschein?</h2>
<p>Der Bildungsgutschein (BGS) ist ein staatliches Fördermittel der Bundesagentur für Arbeit oder des Jobcenters. Er übernimmt die vollständigen Kosten deiner Weiterbildung – inklusive Lernmaterialien, Prüfungsgebühren und bei Bedarf sogar Fahrtkosten oder Kinderbetreuungskosten. Du zahlst nichts aus eigener Tasche.</p>
<p>Wer Arbeitslosengeld I oder II (Bürgergeld) bezieht oder von Arbeitslosigkeit bedroht ist, kann einen Bildungsgutschein beantragen. Der Schlüssel liegt im richtigen Gespräch mit deiner Arbeitsvermittlerin oder deinem Arbeitsvermittler – und in der richtigen Vorbereitung darauf.</p>
<p>Jedes Jahr nutzen in Deutschland über 200.000 Menschen den Bildungsgutschein, um sich neu zu qualifizieren. Der Förderumfang kann mehrere Tausend Euro betragen – komplett übernommen vom Staat. Wer diese Chance nicht nutzt, lässt bares Geld liegen.</p>

<h2>Wer hat Anspruch auf einen Bildungsgutschein?</h2>
<p>Grundsätzlich können folgende Personengruppen einen Bildungsgutschein beantragen:</p>
<ul>
<li>Arbeitslose, die Arbeitslosengeld I (ALG I) beziehen</li>
<li>Bürgergeld-Empfänger:innen (ALG II / Hartz IV), die beim Jobcenter gemeldet sind</li>
<li>Arbeitnehmer:innen, die von Arbeitslosigkeit bedroht sind (z.&nbsp;B. wegen einer bevorstehenden Kündigung)</li>
<li>Selbstständige in bestimmten Situationen</li>
</ul>
<p>Die genaue Entscheidung trifft immer dein:e Arbeitsvermittler:in. Es gibt keinen gesetzlichen Rechtsanspruch auf einen Bildungsgutschein – aber mit der richtigen Argumentation und Vorbereitung stehen die Chancen sehr gut.</p>

<h2>Schritt 1: Informiere dich vor dem Beratungsgespräch gründlich</h2>
<p>Erscheine niemals unvorbereitet beim Beratungsgespräch. Das ist der häufigste Fehler, den Menschen beim Bildungsgutschein-Antrag machen. Wer nicht konkret sagen kann, welchen Kurs er machen möchte und warum dieser Kurs seine Berufsaussichten verbessert, bekommt in der Regel keinen Gutschein.</p>
<p>Was du vorher recherchieren musst:</p>
<ul>
<li><strong>Welche Weiterbildung du machen möchtest</strong> – z.&nbsp;B. Büromanagement, Industriewirtschaft oder Bankwesen</li>
<li><strong>Welchen Anbieter du gewählt hast</strong> – und ob dieser für die Förderung über den Bildungsgutschein zugelassen ist</li>
<li><strong>Welche beruflichen Perspektiven</strong> die Weiterbildung konkret eröffnet – am besten mit Stellenanzeigen belegt</li>
<li><strong>Wie der Kurs aufgebaut ist</strong> – Dauer, Inhalte, Abschluss, Lernformat (online, vor Ort, Blended)</li>
<li><strong>Was der Kurs kostet</strong> – damit du gegenüber dem Vermittler konkret bist</li>
</ul>

<h2>Schritt 2: Das Gespräch bei der Agentur für Arbeit vorbereiten</h2>
<p>Beim Beratungsgespräch prüft dein:e Vermittler:in, ob die Weiterbildung „notwendig und zweckmäßig" ist – das ist der gesetzliche Begriff. Das klingt bürokratisch, ist aber lösbar, wenn du gut vorbereitet bist.</p>
<p>Nutze diese Argumentationshilfe als Basis für das Gespräch:</p>
<blockquote>„Ich möchte mich im Bereich [Thema] weiterbilden, weil aktuelle Stellenanzeigen in meiner Zielbranche genau diese Kenntnisse verlangen. Ich habe mir konkret drei Stellenanzeigen mitgebracht, die ich zeigen möchte. Der Kurs bei [Kursanbieter] ist für die Förderung zugelassen und schließt mit einem Zertifikat ab. Die Weiterbildung dauert [X] Monate und ich kann sie vollständig online von zuhause absolvieren."</blockquote>
<p><strong>Wichtig:</strong> Zeige konkrete Stellenanzeigen, die du ausgedruckt oder digital dabei hast. Das macht deinen Antrag erheblich stärker – du zeigst damit, dass die Nachfrage auf dem Arbeitsmarkt real ist.</p>
<p>Weitere Tipps für das Gespräch:</p>
<ul>
<li>Sei konkret – nenn den genauen Kursnamen und Anbieter</li>
<li>Erkläre, warum du dich für genau diesen Bereich entschieden hast (persönliche Motivation zählt)</li>
<li>Frage aktiv: „Was brauche ich noch, damit Sie mir den Bildungsgutschein ausstellen können?"</li>
<li>Wenn der Vermittler zögert: Bitte um einen zweiten Termin und komm dann noch besser vorbereitet</li>
</ul>

<h2>Schritt 3: Unterlagen vollständig zusammenstellen</h2>
<p>Diese Dokumente brauchst du für das Gespräch – je vollständiger deine Unterlagen, desto professioneller wirkst du und desto höher ist die Genehmigungswahrscheinlichkeit:</p>
<ul>
<li>Personalausweis oder Reisepass</li>
<li>Aktueller Lebenslauf (nicht älter als 3 Monate)</li>
<li>Nachweis über Arbeitslosigkeit oder Bedrohung durch Arbeitslosigkeit (z.&nbsp;B. Kündigungsschreiben)</li>
<li>Kursbeschreibung des Anbieters inklusive Nachweis der Zulassung für den Bildungsgutschein</li>
<li>Mindestens 2–3 aktuelle Stellenanzeigen aus deiner Zielbranche, die die im Kurs vermittelten Skills verlangen</li>
<li>Optional: Empfehlungsschreiben oder Beratungsprotokoll des Kursanbieters</li>
</ul>

<h2>Schritt 4: Den Bildungsgutschein erhalten und einlösen</h2>
<p>Wenn dein Antrag genehmigt wird, erhältst du den Bildungsgutschein entweder in Papierform oder digital. Er enthält wichtige Informationen:</p>
<ul>
<li><strong>Bildungsziel:</strong> Welche Art von Weiterbildung gefördert wird</li>
<li><strong>Gültigkeitsdauer:</strong> Meist 3 Monate ab Ausstellungsdatum – diese Frist ist bindend!</li>
<li><strong>Förderhöhe:</strong> Den maximalen Betrag, der übernommen wird</li>
<li><strong>Regionaler Geltungsbereich:</strong> Bei Online-Kursen in der Regel bundesweit</li>
</ul>
<p>Reiche den Gutschein umgehend beim Kursanbieter ein. Der Anbieter meldet sich dann direkt mit der Agentur für Arbeit ab – du musst nichts weiter bezahlen oder veranlassen.</p>

<h2>Was tun, wenn der Antrag abgelehnt wird?</h2>
<p>Eine Ablehnung ist kein endgültiges Nein. Rund 20–30% aller Bildungsgutschein-Anträge werden zunächst abgelehnt – viele davon erfolgreich im Widerspruch umgekehrt. Deine Möglichkeiten:</p>
<ul>
<li><strong>Widerspruch einlegen:</strong> Du hast 1 Monat Zeit. Begründe schriftlich, warum die Weiterbildung notwendig und zweckmäßig ist.</li>
<li><strong>Neues Gespräch vereinbaren:</strong> Mit besserer Vorbereitung und mehr Dokumenten.</li>
<li><strong>Anderen Vermittler:in ansprechen:</strong> Wenn möglich, nutze beim nächsten Termin eine:n anderen Ansprechpartner:in in der Agentur.</li>
<li><strong>Fachkundige Stelle einschalten:</strong> Ein guter Weiterbildungsanbieter kann dir dabei helfen, deinen Widerspruch zu formulieren und die richtigen Argumente zu finden.</li>
</ul>

<h2>Checkliste Bildungsgutschein auf einen Blick</h2>
<ul>
<li>✅ Kurs und Anbieter vorab recherchiert und entschieden</li>
<li>✅ Zulassung des Anbieters für den Bildungsgutschein geprüft</li>
<li>✅ Mindestens 3 aktuelle Stellenanzeigen gesammelt, die den Kurs rechtfertigen</li>
<li>✅ Alle Unterlagen vollständig zusammengestellt</li>
<li>✅ Argumentationsstrategie für das Gespräch vorbereitet</li>
<li>✅ Kostenlose Erstberatung beim Kursanbieter vereinbart</li>
</ul>

<p>Bereit für den nächsten Schritt? <a href='/beratung-buchen'>Buch dir jetzt ein kostenloses Beratungsgespräch</a> – wir bereiten dich Schritt für Schritt auf das Gespräch bei der Agentur für Arbeit vor.</p>
    `,
  },
  {
    slug: "arbeitslosengeld-weiterbildung",
    title: "Weiterbildung während Arbeitslosengeld – was ist erlaubt?",
    category: "Bildungsgutschein",
    readingTime: "5 min",
    date: "2025-05-12",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop&q=60",
    excerpt:
      "Du beziehst ALG I oder ALG II und willst dich weiterbilden? Hier erfährst du, was geht, was nicht geht und wie du beides kombinierst.",
    content: `
<h2>Grundsatz: Weiterbildung und Arbeitslosengeld sind kein Widerspruch</h2>
<p>Viele Menschen, die Arbeitslosengeld beziehen, glauben, dass sie keine Weiterbildung machen dürfen – oder zumindest keine, die länger dauert oder von der Arbeitssuche ablenkt. Das ist ein weit verbreitetes Missverständnis.</p>
<p>Tatsächlich fördert die Bundesagentur für Arbeit Weiterbildung während der Arbeitslosigkeit ausdrücklich. Das Sozialgesetzbuch III (SGB III) enthält explizite Regelungen zur Förderung der beruflichen Weiterbildung (FbW). Der Bildungsgutschein ist das zentrale Instrument dafür.</p>
<p>Die Logik dahinter: Wer qualifizierter ist, findet schneller einen Job – und das ist im Interesse der Agentur für Arbeit.</p>

<h2>Weiterbildung mit ALG I: Was gilt?</h2>
<p>Wenn du Arbeitslosengeld I beziehst, hast du unter bestimmten Bedingungen Anspruch auf einen Bildungsgutschein. Die Voraussetzungen:</p>
<ul>
<li>Die Weiterbildung muss bei einem für den Bildungsgutschein zugelassenen Anbieter stattfinden</li>
<li>Die Weiterbildung muss „notwendig und zweckmäßig" sein – sie muss also deine Chancen auf dem Arbeitsmarkt konkret verbessern</li>
<li>Du musst die Weiterbildung vor dem Start genehmigen lassen – nachträgliche Förderung gibt es nicht</li>
<li>Du musst weiterhin der Arbeitsvermittlung grundsätzlich zur Verfügung stehen</li>
</ul>
<p><strong>Was mit deinem ALG I passiert:</strong> Während einer genehmigten Weiterbildungsmaßnahme läuft dein Arbeitslosengeld I weiter. Bei Maßnahmen, die länger als die Restlaufzeit deines ALG-I-Anspruchs dauern, kann der Anspruch sogar verlängert werden – das nennt sich „Nahtlosigkeitsregelung".</p>
<p><strong>Wichtig:</strong> Wenn die Weiterbildung ganztägig stattfindet, bist du während dieser Zeit von der Pflicht zur Arbeitssuche befreit. Bei Teilzeit-Maßnahmen musst du weiterhin aktiv Stellen suchen.</p>

<h2>Weiterbildung mit ALG II (Bürgergeld): Was gilt?</h2>
<p>Auch Bürgergeld-Empfänger:innen können Weiterbildungen über den Bildungsgutschein finanzieren. Hier ist das Jobcenter zuständig, nicht die Agentur für Arbeit. Das ändert einiges:</p>
<ul>
<li>Der Bildungsgutschein wird vom Jobcenter ausgestellt</li>
<li>Die Genehmigung hängt mehr von der Einschätzung der Fallmanager:innen ab</li>
<li>Es gibt oft mehr Gesprächsbedarf – gute Vorbereitung ist deshalb noch wichtiger</li>
<li>Manchmal sind Eingliederungsvereinbarungen relevant – lies sie durch, bevor du den BGS beantragst</li>
</ul>
<p>Auch hier: Während einer genehmigten Maßnahme läuft das Bürgergeld weiter. Zusätzlich kann es in manchen Fällen eine Weiterbildungsprämie oder Prämien für das Bestehen von Prüfungen geben.</p>

<h2>Häufige Missverständnisse – richtiggestellt</h2>
<p>In der Praxis tauchen immer wieder dieselben Missverständnisse auf. Hier räumen wir mit den häufigsten auf:</p>
<ul>
<li><strong>„Ich muss für jeden Job-Anruf sofort verfügbar sein, also kann ich keine Weiterbildung machen."</strong> – Bei einer genehmigten Vollzeit-Maßnahme entfällt diese Pflicht temporär. Sprich das bei der Genehmigung explizit an.</li>
<li><strong>„Mein ALG fällt weg, wenn ich eine Weiterbildung mache."</strong> – Falsch. Bei genehmigten Maßnahmen läuft es weiter, oft sogar verlängert.</li>
<li><strong>„Ich muss die Kurskosten vorschießen und bekomme sie erstattet."</strong> – Nein. Bei einem genehmigten Bildungsgutschein zahlt die Agentur direkt an den Anbieter. Du gibst keinen Cent aus.</li>
<li><strong>„Online-Kurse werden nicht gefördert."</strong> – Falsch. Online-Kurse werden genau wie Präsenz-Kurse gefördert, sofern der Anbieter für die Förderung zugelassen ist.</li>
<li><strong>„Ich bin zu alt für eine geförderte Weiterbildung."</strong> – Es gibt keine Altersobergrenze für den Bildungsgutschein. Menschen bis ins Rentenalter haben ihn erfolgreich genutzt.</li>
</ul>

<h2>Was passiert, wenn ich die Weiterbildung abbreche?</h2>
<p>Wenn du eine geförderte Weiterbildung ohne wichtigen Grund abbrichst, kann die Agentur für Arbeit eine Sperrzeit von bis zu 12 Wochen verhängen. Das ist zwar unangenehm, aber in der Praxis selten – weil die meisten Menschen, die eine geförderte Weiterbildung beginnen, auch motiviert sind, sie abzuschließen.</p>
<p>Wenn es einen wichtigen Grund gibt (Gesundheit, Pflege, neue Stelle), kann die Agentur auf die Sperrzeit verzichten.</p>

<h2>Nebentätigkeit während der Weiterbildung</h2>
<p>Wenn du während einer Weiterbildung einem Minijob nachgehst (bis 538 € monatlich), bleibt das meist ohne Auswirkungen auf dein ALG. Bei höheren Einnahmen gibt es Anrechnungsregeln – lass dich dazu von deiner Vermittlerin oder deinem Vermittler beraten.</p>

<h2>Tipp: Vorbereitung ist alles</h2>
<p>Eine kostenlose Erstberatung bei einem Weiterbildungsanbieter kann helfen, dich optimal auf das Gespräch mit deinem Vermittler vorzubereiten.</p>

<p>Bereit für den nächsten Schritt? <a href='/beratung-buchen'>Buch dir jetzt ein kostenloses Beratungsgespräch</a> – komplett unverbindlich und kostenlos.</p>
    `,
  },
  {
    slug: "remote-arbeit-tipps",
    title: "Remote Work Tipps: So funktioniert das Arbeiten von zuhause wirklich",
    category: "Karriere",
    readingTime: "6 min",
    date: "2025-06-01",
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&auto=format&fit=crop&q=60",
    excerpt:
      "Homeoffice klingt verlockend – aber es braucht die richtigen Strategien. Diese Tipps helfen dir, produktiv, fokussiert und zufrieden von zuhause zu arbeiten.",
    content: `
<h2>Remote Work ist gekommen um zu bleiben</h2>
<p>Laut einer Studie des Fraunhofer Instituts arbeiten 2025 noch immer über 40% der deutschen Wissensarbeiter:innen regelmäßig im Homeoffice. Viele Unternehmen bieten Remote-Optionen als Standard an – besonders in kaufmännischen Berufen mit digitalen Prozessen.</p>
<p>Das ist eine riesige Chance für alle, die in diese Berufsfelder einsteigen wollen. Aber Homeoffice funktioniert nicht automatisch. Es braucht die richtigen Strukturen, Tools und Gewohnheiten.</p>

<h2>Tipp 1: Einen festen Arbeitsbereich einrichten</h2>
<p>Das Sofa ist eine Falle. Ein dedizierter Arbeitsbereich – auch eine Zimmerecke mit Schreibtisch – hilft dem Gehirn, in den Arbeitsmodus zu wechseln. Wichtig: Am Feierabend diesen Bereich verlassen und nicht mehr hinschauen.</p>
<p>Praktische Ausstattung für dein Homeoffice:</p>
<ul>
<li>Ergonomischer Stuhl – Rückenschmerzen sind der häufigste Produktivitätskiller im Homeoffice</li>
<li>Externer Monitor oder Laptopständer auf Augenhöhe</li>
<li>Gute Beleuchtung von vorne, kein Gegenlicht für Video-Calls</li>
<li>Kopfhörer mit Noise Cancelling für Fokusphasen</li>
<li>Neutraler, aufgeräumter Hintergrund für Video-Calls</li>
</ul>

<h2>Tipp 2: Feste Arbeitszeiten und klare Grenzen</h2>
<p>Im Homeoffice verschwimmen Grenzen schnell – entweder arbeitet man zu wenig (weil man sich ablenken lässt) oder zu viel (weil man nie wirklich abschaltet). Beides schadet auf Dauer.</p>
<p>Definiere klare Start- und Endzeiten, kommuniziere sie im Team und ritualisiere das Ende des Arbeitstags: Computer ausschalten, kurzen Spaziergang machen – das signalisiert dem Gehirn: Feierabend.</p>

<h2>Tipp 3: Asynchrone Kommunikation meistern</h2>
<p>Einer der häufigsten Fehler in Remote-Teams: Alles wird sofort per Chat oder Meeting besprochen. Das führt zu einer Flut von Unterbrechungen. Die bessere Alternative: Asynchrone Kommunikation.</p>
<p>Du schreibst eine vollständige Nachricht – Kontext, Frage, gewünschte Antwort, Deadline – und die andere Person antwortet, wenn es ihr passt. Das funktioniert für 80% der Arbeitskommunikation und schützt Fokuszeiten.</p>
<p>Gute asynchrone Kommunikation:</p>
<ul>
<li>Kontext immer mitliefern: Was, Warum, Was brauche ich bis wann</li>
<li>Niemals „Hast du kurz Zeit?" schreiben ohne Kontext</li>
<li>Loom-Videos für komplexe Erklärungen nutzen</li>
<li>Klare Betreff-Zeilen in E-Mails und Slack/Teams-Nachrichten</li>
</ul>

<h2>Tipp 4: Die richtigen digitalen Tools kennen</h2>
<p>Remote-Worker:innen, die diese Tools beherrschen, sind in jedem Team willkommen:</p>
<ul>
<li><strong>Kommunikation:</strong> Slack, Microsoft Teams</li>
<li><strong>Video-Calls:</strong> Zoom, Google Meet</li>
<li><strong>Projektmanagement:</strong> Asana, Trello, Notion, Jira</li>
<li><strong>Kollaboration:</strong> Google Workspace, Notion, Confluence</li>
<li><strong>Kreativ-Workshops:</strong> Miro, Mural</li>
</ul>

<h2>Tipp 5: Ablenkungen aktiv managen</h2>
<p>Zuhause gibt es mehr Ablenkungen als im Büro: Haushalt, Familie, Social Media, Nachrichten. Erfolgreiche Remote-Worker:innen managen das aktiv:</p>
<ul>
<li>Handy auf Nicht-Stören während Deep-Work-Phasen</li>
<li>Browser-Extensions wie Freedom oder Cold Turkey für ablenkende Websites</li>
<li>Pomodoro-Technik: 25 Minuten fokussiert, 5 Minuten Pause</li>
<li>Klare Absprachen mit Mitbewohner:innen oder Familie</li>
</ul>

<h2>Tipp 6: Soziale Kontakte aktiv pflegen</h2>
<p>Isolation ist das größte Langzeitrisiko im Homeoffice. Plane bewusst sozialen Austausch ein: virtuelle Kaffeepausen mit Kolleg:innen, gelegentliche Co-Working-Tage, Meetups und Networking-Events in der eigenen Branche.</p>

<h2>Remote Work durch Remote-Lernen vorbereiten</h2>
<p>Gute Online-Weiterbildungskurse finden vollständig remote statt – du lernst also nicht nur die Fachinhalte, sondern übst gleichzeitig die Realität des Remote-Arbeitens: digitale Tools nutzen, asynchron kommunizieren, Lernzeit selbst managen. Das ist die beste Vorbereitung auf den digitalen Berufsalltag.</p>

<p>Bereit für den nächsten Schritt? <a href='/beratung-buchen'>Buch dir jetzt ein kostenloses Beratungsgespräch</a> und starte deine Karriere im Remote-Arbeitsmarkt.</p>
    `,
  },
  {
    slug: "lebenslauf-tipps-2025",
    title: "Lebenslauf 2025: Was Personaler wirklich sehen wollen",
    category: "Karriere",
    readingTime: "7 min",
    date: "2025-06-08",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&auto=format&fit=crop&q=60",
    excerpt:
      "Ein guter Lebenslauf entscheidet über Interview oder Ablehnung. Wir zeigen dir, was 2025 drinstehen muss – und was definitiv raus sollte.",
    content: `
<h2>Der Lebenslauf als deine wichtigste Marketingseite</h2>
<p>Personaler verbringen im Schnitt nur 7–10 Sekunden mit einem Lebenslauf. In dieser kurzen Zeit entscheiden sie: Einladen oder ablehnen. Dein Lebenslauf muss auf den ersten Blick überzeugen – klar strukturiert, relevant, ohne Füllstoff.</p>
<p>2025 gelten andere Regeln als noch vor fünf Jahren. Digitale Skills und KI-Kenntnisse sind gefragter denn je. Gleichzeitig werden Lebensläufe oft zuerst von ATS-Systemen (Applicant Tracking Systems) gelesen, bevor ein Mensch sie sieht. Wer das nicht weiß, bewirbt sich am Ziel vorbei.</p>

<h2>Die richtige Struktur</h2>
<p>Ein zeitgemäßer Lebenslauf hat folgende Abschnitte in dieser Reihenfolge:</p>
<ul>
<li>Kontaktdaten: Name, Telefon, E-Mail, LinkedIn-Profil, Wohnort (Stadt reicht)</li>
<li>Profil / Zusammenfassung (2–3 Sätze, optional aber empfehlenswert)</li>
<li>Berufserfahrung (antichronologisch – neueste zuerst)</li>
<li>Aus- und Weiterbildung (antichronologisch)</li>
<li>Skills: Tools, Sprachen, Zertifikate</li>
</ul>

<h2>Was 2025 unbedingt drinstehen muss</h2>

<h3>Digitale Skills konkret nennen</h3>
<p>Nicht: „Gute Kenntnisse in MS Office." Stattdessen: „Excel (Pivot-Tabellen, SVERWEIS, Power Query), HubSpot CRM (Marketing Automation, Lead Nurturing), Google Analytics 4 (Dashboards, Conversion-Tracking)."</p>
<p>Konkrete Tools und Anwendungen – das ist, wonach ATS-Systeme und Personaler suchen.</p>

<h3>KI-Kompetenzen sichtbar machen</h3>
<p>Wenn du ChatGPT, Claude, Midjourney, Copilot oder andere KI-Tools nutzt – schreib es hin. Viele Bewerber:innen nutzen diese Tools, aber kaum jemand nennt sie im Lebenslauf. Das macht dich sofort sichtbarer.</p>

<h3>Ergebnisse statt Aufgaben</h3>
<p><strong>Schwach:</strong> „Verantwortlich für Social-Media-Kanäle."<br>
<strong>Stark:</strong> „Follower-Wachstum von 2.000 auf 8.000 in 12 Monaten durch täglichen Reels-Content."</p>
<p>Nutze immer die Formel: Verb + Zahl + Kontext.</p>

<h2>Was raus sollte</h2>
<ul>
<li>Geburtstag, Familienstand, Nationalität – nicht mehr nötig und manche Firmen wollen es aus Antidiskriminierungsgründen gar nicht</li>
<li>„Interessen: Lesen, Reisen, Kochen" – zu generisch, weglassen</li>
<li>Schulzeugnisse sobald du Berufsausbildung oder Studium hast</li>
<li>Veraltete Software-Angaben</li>
<li>Floskeln wie „teamfähig, kommunikativ, belastbar" – zeig es lieber durch Beispiele</li>
</ul>

<h2>Format, Länge und ATS-Kompatibilität</h2>
<ul>
<li><strong>Länge:</strong> Max. 2 Seiten für Erfahrene, 1 Seite für Einsteiger:innen</li>
<li><strong>Format:</strong> PDF immer, Word nur wenn explizit verlangt</li>
<li><strong>ATS-freundlich:</strong> Klare Struktur, keine Tabellen für Kerninfos, keine Kopfzeilen/Fußzeilen für wichtige Daten</li>
<li><strong>Dateiname:</strong> Lebenslauf_Vorname_Nachname_2025.pdf</li>
</ul>

<h2>Weiterbildung richtig präsentieren</h2>
<p>Eine abgeschlossene Weiterbildung ist kein Makel – sie ist ein starkes Signal für Eigeninitiative und aktuelle Kenntnisse. Formuliere sie prominent:</p>
<blockquote>Kauffrau/-mann für Büromanagement (HalloSkills-Zertifikat) · HalloSkills · 2026<br>Schwerpunkte: Büroorganisation, Kommunikation, Rechnungswesen</blockquote>

<h2>Das LinkedIn-Profil als Ergänzung</h2>
<p>Dein LinkedIn-Profil ist 2025 genauso wichtig wie dein Lebenslauf. Recruiter suchen aktiv auf LinkedIn. Stelle sicher, dass Lebenslauf und Profil konsistent sind – gleiche Jobs, gleiche Zeiträume, gleiche Ergebnisse.</p>

<p>Bereit für den nächsten Schritt? <a href='/beratung-buchen'>Buch dir jetzt ein kostenloses Beratungsgespräch</a> – wir unterstützen dich nach der Weiterbildung aktiv bei deiner Bewerbung.</p>
    `,
  },
  {
    slug: "umschulung-vs-weiterbildung",
    title: "Umschulung oder Weiterbildung – was ist der Unterschied?",
    category: "Bildungsgutschein",
    readingTime: "5 min",
    date: "2025-07-01",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=60",
    excerpt:
      "Umschulung und Weiterbildung werden oft verwechselt. Wir erklären den Unterschied, wer welche Förderung bekommt – und was für dich sinnvoll ist.",
    content: `
<h2>Zwei unterschiedliche Konzepte – häufig verwechselt</h2>
<p>Umschulung und Weiterbildung werden im Alltag oft als Synonyme verwendet – dabei meinen sie etwas grundlegend Verschiedenes. Beide können über die Agentur für Arbeit oder das Jobcenter gefördert werden, aber die Unterschiede in Dauer, Ziel und Fördermöglichkeiten sind erheblich.</p>
<p>Die falsche Wahl kann dich wertvolle Monate kosten. Deshalb ist es wichtig, dass du weißt, was für deine konkrete Situation sinnvoll ist – bevor du den Antrag stellst.</p>

<h2>Was ist eine Umschulung?</h2>
<p>Eine Umschulung ist eine vollwertige Berufsausbildung in einem neuen Berufsfeld – nur verkürzt. Während eine reguläre Ausbildung 3 Jahre dauert, ist eine Umschulung in der Regel auf 2 Jahre komprimiert. Sie schließt mit einer anerkannten IHK- oder HWK-Prüfung ab.</p>
<p>Beispiele für Umschulungsberufe:</p>
<ul>
<li>Kaufmann/-frau für Büromanagement</li>
<li>Fachinformatiker:in für Systemintegration</li>
<li>Medizinische:r Fachangestellte:r</li>
<li>Kaufmann/-frau im E-Commerce</li>
</ul>
<p>Umschulungen werden über den Bildungsgutschein finanziert. In manchen Fällen gibt es zusätzlich Unterhaltsgeld oder Weiterbildungsgeld während der Maßnahme.</p>
<p><strong>Vorteil:</strong> Du erhältst einen gesetzlich anerkannten Berufsabschluss.<br>
<strong>Nachteil:</strong> 2 Jahre sind eine lange Zeit ohne reguläres Einkommen. Und IHK-Abschlüsse sind nicht in jedem Berufsfeld der entscheidende Faktor.</p>

<h2>Was ist eine Weiterbildung?</h2>
<p>Eine Weiterbildung baut auf deinen bestehenden Kenntnissen auf oder ergänzt sie gezielt. Sie dauert deutlich kürzer – typischerweise 3–12 Monate – und schließt mit einem Zertifikat ab, nicht mit einem IHK-Abschluss.</p>
<p>Weiterbildungen bei entsprechend zugelassenen Anbietern sind über den Bildungsgutschein vollständig finanzierbar. Das Ziel ist nicht ein neuer Berufsabschluss, sondern praxisrelevante Skills, die direkt auf dem Arbeitsmarkt einsetzbar sind.</p>
<p>Ein Beispiel: HalloSkills bietet die Inhalte klassischer Umschulungen im Weiterbildungsformat an — kompakt in 6 statt 24 Monaten:</p>
<ul>
<li>Büromanagement (6 Monate)</li>
<li>Industriewirtschaft (6 Monate)</li>
<li>Bankwesen (6 Monate)</li>
</ul>

<h2>Wann ist eine Weiterbildung sinnvoller?</h2>
<p>Eine Weiterbildung ist in den meisten Fällen die schnellere und strategisch klügere Wahl – besonders wenn:</p>
<ul>
<li>Du in eine verwandte oder digitale Branche wechselst (z.&nbsp;B. von einem kaufmännischen Ausgangsberuf in einen neuen Schwerpunkt)</li>
<li>Du bestehende Berufserfahrung hast, die du durch digitale Skills ergänzen willst</li>
<li>Du schnell wieder arbeiten möchtest – 6 Monate statt 2 Jahre</li>
<li>Dein Zielberuf eher Skills als formale Abschlüsse bewertet (das trifft auf fast alle digitalen Berufe zu)</li>
</ul>

<h2>Wann ist eine Umschulung sinnvoller?</h2>
<p>Eine Umschulung ist dann die richtige Wahl, wenn:</p>
<ul>
<li>Dein bisheriger Beruf nicht mehr nachgefragt wird und du komplett neu starten musst</li>
<li>Dein Zielberuf einen gesetzlich anerkannten Berufsabschluss als Eingangsvoraussetzung hat</li>
<li>Du dir sicher bist, dass du 2 Jahre Zeit und Energie investieren kannst und willst</li>
</ul>

<h2>Was sagen Arbeitgeber in digitalen Berufen?</h2>
<p>In der Praxis zeigt sich: In vielen kaufmännischen und digitalen Berufen zählen konkrete Skills und nachweisbare Ergebnisse mehr als formale Abschlüsse. Viele Arbeitgeber fragen im Bewerbungsgespräch explizit nach Portfolios, Praxisprojekten und Zertifikaten – nicht nach dem IHK-Stempel.</p>
<p>Das macht eine gezielte, praxisorientierte Weiterbildung in vielen Fällen zur effektiveren Option.</p>

<h2>Förderung im Vergleich</h2>
<ul>
<li><strong>Weiterbildung mit Bildungsgutschein:</strong> Kurskosten vollständig übernommen, ALG läuft weiter</li>
<li><strong>Umschulung mit Bildungsgutschein:</strong> Kurskosten vollständig übernommen, ALG läuft weiter, ggf. Weiterbildungsgeld</li>
<li><strong>Aufstiegs-BAföG (für Weiterbildung):</strong> Zusätzliche Förderung für bestimmte Aufstiegsqualifikationen</li>
</ul>

<p>Bereit für den nächsten Schritt? <a href='/beratung-buchen'>Buch dir jetzt ein kostenloses Beratungsgespräch</a> – wir helfen dir, die richtige Entscheidung für deine Situation zu treffen.</p>
    `,
  },
  {
    slug: "digitalisierung-arbeitsmarkt-2025",
    title: "Digitalisierung und Arbeitsmarkt: Welche Jobs verschwinden, welche entstehen",
    category: "KI & Digitalisierung",
    readingTime: "8 min",
    date: "2025-07-15",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=60",
    excerpt:
      "KI und Automatisierung verändern den Arbeitsmarkt massiv. Wir zeigen dir, welche Berufe gefährdet sind – und wo neue Chancen entstehen.",
    content: `
<h2>Wie schnell verändert sich der Arbeitsmarkt wirklich?</h2>
<p>Laut einer Studie des McKinsey Global Institute werden bis 2030 in Deutschland zwischen 2,5 und 7 Millionen Stellen durch Automatisierung verändert oder wegfallen. Das klingt bedrohlich. Aber gleichzeitig entstehen durch neue Technologien Millionen neue Jobs – oft in Bereichen, die es heute noch gar nicht gibt.</p>
<p>Der entscheidende Befund: Nicht Branchen verschwinden, sondern Tätigkeiten. Fast jeder Beruf wird sich verändern – aber nur wenige werden komplett obsolet. Die Frage ist nicht „Werde ich meinen Job verlieren?" sondern „Welche Fähigkeiten brauche ich, um relevant zu bleiben?"</p>

<h2>Welche Tätigkeiten durch KI und Automatisierung gefährdet sind</h2>
<p>Besonders betroffen sind stark repetitive, regelbasierte Tätigkeiten, die klaren Mustern folgen:</p>
<ul>
<li><strong>Standardisierte Dateneingabe und Sachbearbeitung:</strong> Formulare ausfüllen, Daten übertragen – das können KI-Systeme heute besser und schneller</li>
<li><strong>Einfache Buchführung:</strong> Routinebuchungen und Standardberichte werden zunehmend automatisiert</li>
<li><strong>Standardisierte Callcenter-Tätigkeiten:</strong> FAQ-Bots übernehmen immer mehr einfache Anfragen</li>
<li><strong>Grundlegende Übersetzungsarbeiten:</strong> DeepL und KI-Tools sind bei Standardtexten sehr gut</li>
<li><strong>Lager- und Sortierlogistik:</strong> Roboter übernehmen körperlich repetitive Aufgaben</li>
<li><strong>Einfache Textproduktion:</strong> Produktbeschreibungen, standardisierte Reportings</li>
</ul>
<p>Wichtig: Das bedeutet nicht, dass diese Berufe komplett verschwinden. Es bedeutet, dass die Menschen in diesen Berufen andere, komplexere Aufgaben übernehmen müssen – und dass weniger Menschen für dieselbe Arbeit gebraucht werden.</p>

<h2>Welche Jobs entstehen und wachsen</h2>
<p>Die gute Nachricht: Die Digitalisierung schafft aktiv neue Berufsfelder – und das in Bereichen, die keine jahrelange Ausbildung voraussetzen:</p>
<ul>
<li><strong>KI-Trainer und Prompt Engineers:</strong> KI-Systeme verstehen, steuern und optimieren – eine der am schnellsten wachsenden Stellenkategorien</li>
<li><strong>Data Analysts:</strong> Daten interpretieren, Dashboards erstellen, Entscheidungen vorbereiten</li>
<li><strong>Digital Marketing Specialists:</strong> SEO, Performance Marketing, Social Media – jedes Unternehmen braucht digitale Sichtbarkeit</li>
<li><strong>Projektmanager:innen in Digitalisierungsprojekten:</strong> Jedes Unternehmen modernisiert sich gerade – dafür braucht es Menschen, die Projekte steuern</li>
<li><strong>UX und Customer Experience Designer:innen:</strong> Digitale Produkte müssen nutzerzentriert gestaltet werden</li>
<li><strong>Cybersecurity-Expert:innen:</strong> Mit mehr Digitalisierung wächst die Bedrohungslage</li>
<li><strong>E-Commerce Manager:innen:</strong> Onlinehandel wächst weiter, braucht Fachleute</li>
</ul>

<h2>Welche Skills 2025 und darüber hinaus gefragt sind</h2>
<p>Das Weltwirtschaftsforum (WEF) veröffentlicht regelmäßig Listen der meistgefragten Skills. 2025 dominieren:</p>
<ul>
<li><strong>Analytisches Denken:</strong> Daten verstehen, Muster erkennen, Schlussfolgerungen ziehen</li>
<li><strong>KI- und Big Data-Kompetenz:</strong> KI-Tools bedienen, Daten interpretieren</li>
<li><strong>Kreativität und kritisches Denken:</strong> Das können Maschinen (noch) nicht</li>
<li><strong>Resilienz und Anpassungsfähigkeit:</strong> Wer kontinuierlich lernt, bleibt relevant</li>
<li><strong>Technologische Kompetenz:</strong> Nicht Programmieren – aber digitale Tools verstehen und nutzen</li>
<li><strong>Kommunikation und Empathie:</strong> Soziale Intelligenz ist der größte menschliche Wettbewerbsvorteil</li>
</ul>

<h2>Drei Strategien die wirklich funktionieren</h2>
<p>Diese drei Strategien helfen nachweislich beim Einstieg in die digitale Arbeitswelt:</p>
<ol>
<li><strong>Digitale Skills aktiv aufbauen:</strong> Wer digitale Tools, Datenanalyse oder Prozesssteuerung beherrscht, ist in fast jeder Branche gefragt – unabhängig vom bisherigen Hintergrund</li>
<li><strong>Auf menschliche Stärken setzen:</strong> Empathie, Kreativität, komplexe Problemlösung, emotionale Intelligenz – das können Maschinen (noch) nicht replizieren. Diese Stärken durch digitale Skills ergänzen.</li>
<li><strong>Kontinuierlich lernen und anpassen:</strong> Die Halbwertzeit von beruflichem Wissen sinkt rapide. Wer aufhört zu lernen, verliert Boden. Wer einmal im Jahr eine neue Kompetenz aufbaut, bleibt dauerhaft relevant.</li>
</ol>

<h2>Warum jetzt der richtige Zeitpunkt ist</h2>
<p>Die Weichen für deine Karriere in der digitalen Wirtschaft werden gerade gestellt. Wer jetzt digitale Skills aufbaut, profitiert vom Nachfrageüberhang – denn qualifizierte Fachkräfte im digitalen Bereich fehlen in Deutschland massiv. Wer wartet, kämpft später gegen mehr Konkurrenz.</p>
<p>Die geförderte Weiterbildung über den Bildungsgutschein ist dabei eine der effektivsten Möglichkeiten, sich fit für den digitalen Arbeitsmarkt zu machen – vollständig kostenfrei und ohne Eigenrisiko.</p>

<p>Bereit für den nächsten Schritt? <a href='/beratung-buchen'>Buch dir jetzt ein kostenloses Beratungsgespräch</a> und starte noch diesen Monat in deine digitale Karriere.</p>
    `,
  },
  {
    slug: "vorstellungsgespraech-tipps",
    title: "Vorstellungsgespräch meistern: Die 10 wichtigsten Tipps",
    category: "Karriere",
    readingTime: "7 min",
    date: "2025-07-22",
    image: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=800&auto=format&fit=crop&q=60",
    excerpt:
      "Mit der richtigen Vorbereitung läuft das Vorstellungsgespräch fast von selbst. Diese 10 Tipps machen den Unterschied zwischen nervösem Stammeln und überzeugtem Auftreten.",
    content: `
<h2>Warum Vorbereitung der wichtigste Erfolgsfaktor ist</h2>
<p>Vorstellungsgespräche scheitern selten an fehlenden Qualifikationen – sie scheitern meist an mangelnder Vorbereitung. Wer die Fragen kennt, die kommen werden, wer sich mit dem Unternehmen beschäftigt hat und wer weiß, wie er seine Stärken klar kommuniziert, hat einen massiven Vorteil.</p>
<p>Die gute Nachricht: Vorstellungsgespräche sind kein Talent – sie sind ein Handwerk. Mit den richtigen Techniken und genug Übung kannst du dich deutlich verbessern.</p>

<h2>Tipp 1: Das Unternehmen wirklich verstehen</h2>
<p>Bevor du ins Gespräch gehst, recherchiere gründlich: Website, LinkedIn-Seite, Glassdoor-Bewertungen, aktuelle News. Was macht das Unternehmen? Wer sind die Kunden? Welche Herausforderungen hat die Branche? Was unterscheidet dieses Unternehmen von Wettbewerbern?</p>
<p>Nutze dieses Wissen aktiv im Gespräch: „Ich habe gesehen, dass ihr euch 2024 in den DACH-Markt ausgedehnt habt – das finde ich spannend, weil..."</p>

<h2>Tipp 2: Die Stellenbeschreibung sorgfältig analysieren</h2>
<p>Markiere alle Anforderungen in der Stellenanzeige. Überlege für jede: Wie erfüllst du sie? Formuliere 2–3 konkrete Beispiele aus deiner Erfahrung (oder Weiterbildung). Das ist dein persönlicher Gesprächsleitfaden.</p>

<h2>Tipp 3: Die STAR-Methode für überzeugende Antworten</h2>
<p>Wenn du nach Erfahrungen gefragt wirst, strukturiere deine Antwort nach der STAR-Methode:</p>
<ul>
<li><strong>S</strong>ituation – Was war der Kontext?</li>
<li><strong>T</strong>ask – Was war deine Aufgabe?</li>
<li><strong>A</strong>ction – Was hast du konkret getan?</li>
<li><strong>R</strong>esult – Was war das messbare Ergebnis?</li>
</ul>
<blockquote>„In meiner Weiterbildung (S) sollten wir eine echte SEO-Kampagne für ein Partnerunternehmen erstellen (T). Ich habe eine Keyword-Recherche durchgeführt, 5 Blogartikel optimiert und technische Fehler behoben (A). Nach 8 Wochen war der organische Traffic um 34% gestiegen (R)."</blockquote>

<h2>Tipp 4: Fragen vorbereiten</h2>
<p>„Haben Sie noch Fragen?" kommt immer. Antworte nie mit „Nein, alles klar." Gute Fragen zeigen echtes Interesse und Durchdachtheit:</p>
<ul>
<li>„Wie sieht ein typischer erster Monat in dieser Rolle aus?"</li>
<li>„Was macht für Sie eine Person in dieser Rolle besonders erfolgreich?"</li>
<li>„Wie würden Sie die Teamkultur beschreiben?"</li>
<li>„Welche Herausforderungen hat die Position aktuell?"</li>
</ul>

<h2>Tipp 5: Gehaltsvorstellungen vorbereiten</h2>
<p>Recherchiere das marktübliche Gehalt über Stepstone, Glassdoor oder Gehalt.de. Nenne immer eine Spanne, keinen Fixwert. Nenne die obere Grenze als Ausgangspunkt – Verhandlung geht immer nach unten, selten nach oben.</p>
<p>Formulierungsbeispiel: „Basierend auf meiner Recherche und den Aufgaben der Stelle bewege ich mich in einem Bereich von 40.000 bis 46.000 € brutto im Jahr – je nach Rahmenbedingungen bin ich offen für ein Gespräch."</p>

<h2>Tipp 6: Körpersprache und Video-Call-Etikette</h2>
<p>Aufrechte Haltung, Blickkontakt, fester aber entspannter Händedruck. Im Video-Call: Kamera auf Augenhöhe positionieren, neutraler Hintergrund, gute Beleuchtung von vorne. Sprich bewusst langsam – Nervosität beschleunigt uns, das wirkt unsicher.</p>

<h2>Tipp 7: Die Schwächen-Frage meistern</h2>
<p>„Was ist Ihre größte Schwäche?" – Diese Frage kommt immer. Strategie: Eine echte Schwäche nennen, aber eine, an der du aktiv arbeitest.</p>
<blockquote>„Ich neige manchmal dazu, Aufgaben zu perfektionieren, bevor ich sie zeige. Ich habe gelernt, das durch Timeboxing und frühes Feedback-Einholen zu begrenzen – das hat meine Arbeitsgeschwindigkeit deutlich erhöht."</blockquote>

<h2>Tipp 8: Lücken im Lebenslauf selbstbewusst erklären</h2>
<p>Weiterbildungsphasen, Pflege, Elternzeit, Krankheit, Jobsuche – erkläre Lücken kurz und sachlich, ohne dich zu entschuldigen. Eine Weiterbildung ist sogar ein Pluspunkt: „In dieser Phase habe ich eine Weiterbildung im Bereich Büromanagement abgeschlossen – das war eine bewusste Investition in meine Qualifikation."</p>

<h2>Tipp 9: Nachbereitung nicht vergessen</h2>
<p>Schreib innerhalb von 24 Stunden eine kurze Dankes-Mail. Das machen erschreckend wenige Bewerber:innen – und es bleibt positiv in Erinnerung. Kein langes Essay, nur 3–4 Sätze: Danke für das Gespräch, Begeisterung für die Stelle, kurzer Verweis auf einen besprochenen Aspekt.</p>

<h2>Tipp 10: Üben, üben, üben</h2>
<p>Führe Probeinterviews mit Freund:innen oder vor dem Spiegel. Besser noch: Film dich auf dem Handy und schau dir die Aufnahme an. Das ist unangenehm – aber die wirksamste Methode, um blinde Flecken in deiner Wirkung zu entdecken.</p>
<p>Viele Weiterbildungsanbieter bieten Absolvent:innen Probe-Interviews mit echtem Feedback an – frag gezielt danach, ob dies im Kurs enthalten ist.</p>

<p>Bereit für den nächsten Schritt? <a href='/beratung-buchen'>Buch dir jetzt ein kostenloses Beratungsgespräch</a> – wir bereiten dich auf Vorstellungsgespräche vor und begleiten dich auf dem Weg in deinen neuen Job.</p>
    `,
  },
  {
    slug: "jobsuche-digital-strategien",
    title: "Moderne Jobsuche: So findest du 2025 den richtigen Job",
    category: "Karriere",
    readingTime: "6 min",
    date: "2025-08-15",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=60",
    excerpt:
      "Stepstone und Indeed allein reichen nicht mehr. Wir zeigen dir, wo und wie du 2025 wirklich erfolgreich Stellen findest – inkl. Hidden Job Market.",
    content: `
<h2>Der sichtbare und der versteckte Stellenmarkt</h2>
<p>Experten schätzen, dass nur 30–40% aller offenen Stellen öffentlich ausgeschrieben werden. Die übrigen 60–70% werden über Netzwerke, Empfehlungen, Direktansprache oder interne Besetzungen gefüllt – das ist der sogenannte Hidden Job Market.</p>
<p>Wer ausschließlich auf Stepstone und Indeed schaut, sieht also weniger als die Hälfte aller verfügbaren Stellen. Erfolgreiche Jobsuche 2025 kombiniert mehrere Strategien – öffentliche Portale, Netzwerk und Direktbewerbung.</p>

<h2>Die besten Jobportale 2025</h2>
<ul>
<li><strong>LinkedIn:</strong> Pflichtprogramm, besonders für digitale und kaufmännische Berufe. Recruiter suchen hier aktiv nach Kandidat:innen.</li>
<li><strong>Stepstone:</strong> Das stärkste deutsche Stellenportal, besonders für Fachkräfte und Führungspositionen</li>
<li><strong>Indeed:</strong> Aggregiert viele Quellen, gut für eine erste breite Recherche</li>
<li><strong>Xing:</strong> In Deutschland noch relevant, besonders für den Mittelstand und traditionellere Branchen</li>
<li><strong>Glassdoor:</strong> Stellen + Unternehmensbewertungen – unverzichtbar für die Vor-Recherche</li>
<li><strong>Arbeitsagentur (JOBBÖRSE):</strong> Für alle, die einen Bildungsgutschein haben, führt kein Weg an der Jobbörse der BA vorbei</li>
</ul>

<h2>LinkedIn optimal nutzen</h2>
<p>LinkedIn ist weit mehr als ein digitales Lebenslauf-Portal – es ist die aktivste Business-Community in Deutschland. Recruiter suchen täglich nach Kandidat:innen. So optimierst du dein Profil:</p>
<ul>
<li><strong>Professionelles Foto:</strong> Profile mit Foto erhalten laut LinkedIn 21x mehr Aufrufe</li>
<li><strong>Aussagekräftige Headline:</strong> Nicht nur Jobtitel, sondern dein Mehrwert. Z.&nbsp;B.: „Kauffrau für Büromanagement | Organisationstalent | offen für neue Chancen"</li>
<li><strong>„Über mich"-Abschnitt:</strong> 3–5 Sätze, wer du bist, was du kannst, wohin du willst</li>
<li><strong>Open-to-Work-Signal aktivieren:</strong> Nur für Recruiter sichtbar, erhöht Kontaktanfragen deutlich</li>
<li><strong>Skills eintragen und bestätigen lassen:</strong> LinkedIn-Algorithmus bevorzugt Profile mit bestätigten Skills</li>
<li><strong>Empfehlungen einholen:</strong> Bitte ehemalige Kolleg:innen, dir eine kurze Empfehlung zu schreiben</li>
</ul>

<h2>Networking: Wie es wirklich funktioniert</h2>
<p>Netzwerken bedeutet nicht, fremde Menschen anzuschreiben und um einen Job zu bitten. Das funktioniert nicht und ist unangenehm für alle Beteiligten. Echtes Networking bedeutet, authentische Beziehungen aufzubauen.</p>
<p>Konkrete Strategien:</p>
<ul>
<li><strong>Ehemalige Kontakte reaktivieren:</strong> Frühere Kolleg:innen, Kommiliton:innen, Vorgesetzte – schreib ihnen, frag wie es ihnen geht</li>
<li><strong>Auf LinkedIn sichtbar werden:</strong> Kommentiere relevante Beiträge, teile interessante Artikel, schreib eigene Posts – so wirst du ohne aktive Bewerbung wahrgenommen</li>
<li><strong>Informationsgespräche führen:</strong> „Darf ich dich 20 Minuten um deine Einschätzung zu [Branche/Rolle] bitten?" – kein Job anfragen, nur Einblicke gewinnen</li>
<li><strong>Branchenevents besuchen:</strong> Meetups, Webinare, Konferenzen – auch online gibt es zahlreiche Möglichkeiten</li>
</ul>

<h2>Direktbewerbung: Die unterschätzte Strategie</h2>
<p>Schreib Unternehmen an, die dich interessieren – auch wenn keine Stelle ausgeschrieben ist. Ein überzeugendes Anschreiben mit einem klaren Mehrwert reicht oft aus. Die Konkurrenz ist hier nahezu null, weil fast niemand diesen Weg geht.</p>
<p>Erfolgreiche Direktbewerbung:</p>
<ul>
<li>Recherchiere den richtigen Ansprechpartner (Hiring Manager, nicht HR-Sammelpostfach)</li>
<li>Zeige, dass du das Unternehmen kennst</li>
<li>Erkläre konkret, welchen Mehrwert du bringst</li>
<li>Mach es leicht zu antworten: kurz, klar, mit einem konkreten nächsten Schritt</li>
</ul>

<h2>Dein digitales Auftreten optimieren</h2>
<p>Arbeitgeber googeln Bewerber:innen. Was finden sie, wenn sie deinen Namen eingeben? Überprüfe und gestalte aktiv:</p>
<ul>
<li>LinkedIn-Profil: Aktuell, vollständig, professionell</li>
<li>Google dich selbst: Was erscheint? Ist es positiv?</li>
<li>Social Media-Profile bereinigen: Was ist öffentlich sichtbar?</li>
<li>Optional: Persönliche Website oder Portfolio – besonders für kreative und digitale Berufe ein Pluspunkt</li>
</ul>

<h2>Nach der Weiterbildung: Jobsuche aktiv angehen</h2>
<p>Gute Weiterbildungsanbieter unterstützen ihre Absolvent:innen aktiv bei der Jobsuche – mit Bewerbungscoaching, Probe-Interviews und Lebenslauf-Feedback. Achte beim Anbietervergleich darauf, ob diese Leistungen im Kurs enthalten sind.</p>

<p>Bereit für den nächsten Schritt? <a href='/beratung-buchen'>Buch dir jetzt ein kostenloses Beratungsgespräch</a> und erfahre, wie wir dich auf deinem Weg in den neuen Job begleiten.</p>
    `,
  },
];

export function findePost(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}

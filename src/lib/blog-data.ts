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
    title: "Bildungsgutschein beantragen: So gehst du Schritt für Schritt vor",
    category: "Bildungsgutschein",
    readingTime: "8 min",
    date: "2026-09-24",
    image: "/images/blog/mann-der-nachdenkt.png",
    excerpt:
      "Wie beantragst du einen Bildungsgutschein, welche Voraussetzungen gelten und was hat sich seit 2025 geändert? Der komplette Ablauf Schritt für Schritt erklärt.",
    content: `
<h2>Wichtigste Erkenntnisse</h2>
<ul>
<li>Einen Bildungsgutschein bekommst du nicht automatisch. Entscheidend ist, ob die Weiterbildung für deine berufliche Situation notwendig und sinnvoll ist.</li>
<li>Seit dem 1. Januar 2025 läuft die Entscheidung über die Förderung beruflicher Weiterbildung auch für Kundinnen und Kunden des Jobcenters über die Agentur für Arbeit.</li>
<li>Dein Bildungsgutschein kann zeitlich befristet, regional begrenzt und auf ein bestimmtes Bildungsziel beschränkt sein.</li>
<li>Bildungsträger und Weiterbildungsmaßnahme müssen für eine Förderung entsprechend zugelassen sein.</li>
<li>Übernommen werden können neben Lehrgangskosten unter anderem Fahrtkosten, Kinderbetreuung sowie notwendige Unterkunft und Verpflegung.</li>
<li>Bei bestimmten geförderten abschlussorientierten Weiterbildungen können zusätzlich Weiterbildungsgeld und Prüfungsprämien hinzukommen.</li>
</ul>
<p>Du hast eine Weiterbildung gefunden, die dich beruflich weiterbringen könnte, möchtest die Kosten aber nicht komplett selbst tragen? Dann stößt du ziemlich schnell auf den Bildungsgutschein.</p>
<p>Nur: Wie beantragt man ihn eigentlich? Gehst du zum Jobcenter oder zur Agentur für Arbeit? Muss dein Kurs vorher schon feststehen? Was solltest du zum Gespräch mitbringen? Und welche Kosten können überhaupt übernommen werden? Genau das schauen wir uns Schritt für Schritt an.</p>

<h2>Was ist ein Bildungsgutschein und wie funktioniert er?</h2>
<p>Mit einem Bildungsgutschein wird bestätigt, dass die Voraussetzungen für die Förderung einer beruflichen Weiterbildung erfüllt sind.</p>
<p>Der Gutschein ist allerdings kein frei verwendbarer Geldbetrag, mit dem du irgendeinen Kurs deiner Wahl buchen kannst. Er kann zeitlich befristet, auf eine bestimmte Region begrenzt und auf ein konkretes Bildungsziel ausgerichtet sein.</p>
<p>Wenn die Voraussetzungen erfüllt sind, kannst du innerhalb dieser Vorgaben eine passende zugelassene Weiterbildung auswählen. Laut Merkblatt der Bundesagentur für Arbeit müssen sowohl der Maßnahmeträger als auch die angestrebte Maßnahme für die Weiterbildungsförderung entsprechend zugelassen sein.</p>
<p>Auch eine Umschulung kann grundsätzlich über einen Bildungsgutschein gefördert werden. Wichtig für HalloSkills ist aber die Unterscheidung: HalloSkills bietet Online-Weiterbildungen beziehungsweise Lehrgänge mit Umschulungsinhalten an. Die HalloSkills-Lehrgänge sind keine klassischen IHK-Umschulungen.</p>

<h2>Was hat sich beim Bildungsgutschein seit 2025 geändert?</h2>
<p>Dieser Punkt ist besonders wichtig, weil viele ältere Ratgeber im Internet inzwischen nicht mehr ganz aktuell sind. Seit dem 1. Januar 2025 ist die Agentur für Arbeit auch bei erwerbsfähigen Kundinnen und Kunden des Jobcenters für Beratung, Entscheidung und Förderung der beruflichen Weiterbildung zuständig. Das bedeutet aber nicht, dass das Jobcenter plötzlich gar keine Rolle mehr spielt.</p>
<p>Wenn du Kundin oder Kunde eines Jobcenters bist, kann dein Jobcenter zunächst den Bedarf für eine Förderung feststellen und eine Vorklärung deiner Eignung durchführen. Danach wird die Agentur für Arbeit einbezogen. Sie führt die Weiterbildungsberatung durch und prüft abschließend, ob die Fördervoraussetzungen erfüllt sind.</p>
<p><strong>Kurz gesagt:</strong> Du kannst als Jobcenter-Kundin oder -Kunde weiterhin dort starten. Die abschließende Prüfung der Weiterbildungsförderung erfolgt aber über die Agentur für Arbeit.</p>

<h2>Welche Voraussetzungen gelten für einen Bildungsgutschein?</h2>
<img src="/images/blog/infografik-voraussetzungen-bildungsgutschein.png" alt="Infografik: Welche Voraussetzungen gelten für einen Bildungsgutschein" />
<p>Ein Bildungsgutschein wird nicht allein deshalb ausgestellt, weil du gern etwas Neues lernen möchtest. Die geplante Weiterbildung soll deine Chancen auf eine dauerhafte Eingliederung in den Arbeitsmarkt verbessern. Bei der Entscheidung können unter anderem deine bisherigen beruflichen Erfahrungen, Kenntnisse, persönlichen Voraussetzungen, deine Eignung und die Situation auf dem Arbeitsmarkt berücksichtigt werden.</p>
<p>Eine Förderung kann beispielsweise infrage kommen, wenn:</p>
<ul>
<li>du arbeitslos bist und die Weiterbildung deine Vermittlungschancen verbessern kann,</li>
<li>dir Arbeitslosigkeit droht und eine zusätzliche Qualifikation helfen kann, sie zu vermeiden,</li>
<li>dir Kenntnisse fehlen, die du für eine nachhaltige Beschäftigung benötigst,</li>
<li>du unter bestimmten Voraussetzungen einen Berufsabschluss nachholen möchtest.</li>
</ul>
<p>Beim nachträglichen Erwerb eines Berufsabschlusses kann unter bestimmten Voraussetzungen sogar ein Rechtsanspruch auf Förderung bestehen. Deshalb wäre die pauschale Aussage „Auf einen Bildungsgutschein gibt es niemals einen Rechtsanspruch" zu einfach.</p>
<p><strong>Wer kommt grundsätzlich für einen Bildungsgutschein infrage?</strong> Ob eine Förderung möglich ist, wird immer individuell geprüft. Entscheidend ist vor allem das Zusammenspiel von deiner aktuellen beruflichen Situation, deinem beruflichen Ziel, der geplanten Weiterbildung und deinen Chancen auf dem Arbeitsmarkt. Auch wenn du bereits beschäftigt bist, kann berufliche Weiterbildung unter bestimmten Voraussetzungen gefördert werden. Für Beschäftigte gelten allerdings teilweise andere Regeln als für Arbeitslose.</p>

<h2>Wie kannst du einen Bildungsgutschein beantragen?</h2>
<p>Der offizielle Prozess lässt sich ziemlich übersichtlich aufteilen.</p>
<h3>Schritt 1: Kläre dein berufliches Ziel</h3>
<p>Bevor du zum Beratungsgespräch gehst, solltest du zumindest ungefähr wissen, wohin du beruflich möchtest. Du musst noch nicht jede Einzelheit entschieden haben. Ein konkretes Ziel hilft aber enorm. Frag dich zum Beispiel:</p>
<ul>
<li>In welchem Beruf oder Tätigkeitsbereich möchte ich künftig arbeiten?</li>
<li>Welche Kenntnisse fehlen mir dafür?</li>
<li>Welche Anforderungen finde ich in aktuellen Stellenanzeigen?</li>
<li>Welche Weiterbildung könnte diese Lücke schließen?</li>
</ul>
<p>Passende Stellenanzeigen können bei der Vorbereitung helfen. Sie sind aber nicht pauschal eine gesetzlich vorgeschriebene Antragsunterlage.</p>
<h3>Schritt 2: Vereinbare ein Beratungsgespräch</h3>
<p>Nimm Kontakt mit deiner Agentur für Arbeit beziehungsweise deinem Jobcenter auf. Das Beratungsgespräch ist nicht nur irgendeine Formalität. Dort wird geklärt, ob eine berufliche Weiterbildung in deiner Situation notwendig sein kann und welche Förderung infrage kommt. Die Bundesagentur für Arbeit empfiehlt ausdrücklich, diese Beratung möglichst frühzeitig durchzuführen.</p>
<h3>Schritt 3: Finde eine passende Weiterbildung</h3>
<p>Jetzt kannst du gezielt nach einer Weiterbildung suchen, die zu deinem Bildungsziel passt. Dabei geht es nicht nur darum, dass der Anbieter grundsätzlich seriös ist. Für eine Förderung über den Bildungsgutschein müssen Träger und konkrete Maßnahme entsprechend zugelassen sein. Die Bundesagentur für Arbeit verweist für die Weiterbildungssuche unter anderem auf das Portal mein NOW. Du kannst natürlich schon vor deinem Beratungstermin recherchieren. Das ist sogar sinnvoll. Nur solltest du nicht einfach verbindlich buchen und anschließend davon ausgehen, dass die Förderung schon irgendwie klappt.</p>
<h3>Schritt 4: Du erhältst den Bildungsgutschein</h3>
<p>Sind die Voraussetzungen erfüllt, kann dir ein Bildungsgutschein ausgestellt werden. Darin wird unter anderem festgelegt, welches Bildungsziel gefördert wird. Außerdem kann der Gutschein zeitlich und regional begrenzt sein. Schau deshalb genau hin, ob deine gewünschte Weiterbildung tatsächlich zu den Angaben auf dem Gutschein passt.</p>
<h3>Schritt 5: Löse den Bildungsgutschein ein</h3>
<p>Hast du eine passende zugelassene Maßnahme gefunden, bestätigt der Bildungsträger deine Aufnahme. Die entsprechenden Unterlagen müssen innerhalb des Gültigkeitszeitraums und vor Beginn deiner Teilnahme bei der Agentur für Arbeit eingereicht werden.</p>
<p>Die wichtigste Reihenfolge lautet also: Förderung klären → passende Maßnahme auswählen → Unterlagen einreichen → Weiterbildung starten.</p>

<h2>Welche Unterlagen helfen beim Beratungsgespräch?</h2>
<img src="/images/blog/bildungsgutschein-unterlagen.png" alt="Unterlagen für den Bildungsgutschein" />
<p>Es gibt keine allgemeine Liste nach dem Motto: „Ohne exakt diese sieben Dokumente bekommst du keinen Bildungsgutschein." Welche Unterlagen erforderlich sind, hängt von deiner individuellen Situation ab. Hilfreich können aber sein:</p>
<ul>
<li>ein aktueller Lebenslauf,</li>
<li>Ausbildungs- und Arbeitszeugnisse,</li>
<li>Informationen über deinen gewünschten Beruf,</li>
<li>Angaben zur geplanten Weiterbildung, Dauer, Inhalten und Abschluss,</li>
<li>Angaben zum Bildungsträger,</li>
<li>passende Stellenanzeigen,</li>
<li>eine kurze Erklärung, warum dir für dein Berufsziel bestimmte Kenntnisse fehlen.</li>
</ul>
<p>Du musst daraus keine riesige Akte machen. Wichtig ist vor allem, dass nachvollziehbar wird, warum diese Weiterbildung dir beruflich helfen soll.</p>

<h2>Welche Kosten kann der Bildungsgutschein übernehmen?</h2>
<p>Bei einer geförderten Weiterbildung können deutlich mehr Kosten berücksichtigt werden als nur die Kursgebühr. Das aktuelle Merkblatt der Bundesagentur für Arbeit nennt unter anderem folgende Weiterbildungskosten:</p>
<ul>
<li><strong>Lehrgangskosten:</strong> Lehrgangsgebühren, notwendige Lernmittel, Arbeitskleidung und bestimmte Prüfungsgebühren</li>
<li><strong>Fahrkosten:</strong> notwendige Fahrten zwischen Wohnung und Bildungsstätte – bei Pendelfahrten derzeit bis zu 588 € monatlich</li>
<li><strong>Kinderbetreuung:</strong> unter bestimmten Voraussetzungen bis zu 160 € monatlich je aufsichtsbedürftigem Kind</li>
<li><strong>Auswärtige Unterbringung:</strong> bei notwendiger Unterbringung außerhalb des Wohnorts, bis zu 420 € monatlich</li>
<li><strong>Verpflegung:</strong> bei notwendiger auswärtiger Unterbringung, bis zu 168 € monatlich</li>
</ul>
<p>Welche Kosten in deinem konkreten Fall übernommen werden, wird individuell geprüft.</p>

<h2>Welche zusätzliche finanzielle Unterstützung gibt es?</h2>
<p>Bei bestimmten geförderten abschlussorientierten Weiterbildungen können zusätzliche Leistungen hinzukommen:</p>
<ul>
<li><strong>Weiterbildungsgeld:</strong> 150 € monatlich</li>
<li><strong>Prämie für eine erfolgreiche Zwischenprüfung:</strong> 1.000 €</li>
<li><strong>Prämie für eine erfolgreiche Abschlussprüfung:</strong> 1.500 €</li>
</ul>
<p><strong>Wichtig:</strong> Diese Zusatzleistungen gelten nicht automatisch für jede Weiterbildung. Sie setzen eine entsprechend geförderte abschlussorientierte Weiterbildung voraus. Sie bedeuten insbesondere nicht, dass ein aktueller HalloSkills-Lehrgang automatisch Anspruch auf Weiterbildungsgeld oder Prüfungsprämien auslöst.</p>

<h2>Wie lange kannst du deinen Bildungsgutschein nutzen?</h2>
<p>Vielleicht hast du schon gelesen, dass ein Bildungsgutschein grundsätzlich drei Monate gültig sei. So pauschal solltest du dich darauf nicht verlassen. Der Bildungsgutschein wird zeitlich befristet ausgestellt. Zusätzlich kann er regional eingeschränkt und an ein bestimmtes Bildungsziel gebunden sein. Entscheidend ist deshalb die Gültigkeitsdauer, die tatsächlich auf deinem Gutschein steht.</p>
<p>Beginnt dein gewünschter Lehrgang nicht innerhalb dieser Frist oder findest du keine geeignete Maßnahme, solltest du dich möglichst schnell wieder an die Agentur für Arbeit wenden. Das Merkblatt weist ausdrücklich darauf hin, dass ein Bildungsgutschein ansonsten verfallen kann.</p>

<h2>Was solltest du bei der Wahl des Bildungsträgers beachten?</h2>
<p>Nur weil ein Kurs interessant klingt, kann er nicht automatisch über einen Bildungsgutschein finanziert werden. Sowohl Träger als auch Maßnahme müssen die notwendigen Zulassungsvoraussetzungen erfüllen. Außerdem muss der Lehrgang zu dem Bildungsziel passen, das auf deinem Bildungsgutschein festgelegt wurde. Schau deshalb nicht nur auf Kursname und Preis. Interessant sind auch:</p>
<ul>
<li>Lernform und Stundenumfang,</li>
<li>Qualifikation der Lehrkräfte,</li>
<li>technische Ausstattung,</li>
<li>Betreuung während des Lehrgangs,</li>
<li>Abschluss beziehungsweise Zertifikat,</li>
<li>Unterstützung bei Praktikum und Jobsuche,</li>
<li>Erfahrungen früherer Teilnehmender.</li>
</ul>
<p>Die Bundesagentur für Arbeit empfiehlt sogar, beim Anbieter nachzufragen, wie viele Teilnehmende des zuletzt durchgeführten Lehrgangs anschließend eine Beschäftigung gefunden haben.</p>

<h2>Was kannst du tun, wenn die Förderung abgelehnt wird?</h2>
<p>Eine Ablehnung ist erst einmal ein Grund, genauer hinzuschauen. Lies dir den Bescheid durch und prüfe, warum die Förderung nicht bewilligt wurde. Vielleicht fehlen Informationen. Vielleicht ist nicht ausreichend erkennbar, warum die Weiterbildung für dein berufliches Ziel notwendig ist. Oder die gewählte Maßnahme erfüllt die Fördervoraussetzungen nicht.</p>
<p>Wenn du mit einem schriftlichen Bescheid nicht einverstanden bist, kannst du grundsätzlich innerhalb eines Monats nach Bekanntgabe Widerspruch einlegen. Die Entscheidung wird anschließend noch einmal überprüft. Eine allgemeine Erfolgsquote für solche Widersprüche lässt sich daraus allerdings nicht ableiten. Entscheidend ist immer dein konkreter Fall.</p>

<h2>Kannst du einen HalloSkills-Lehrgang mit Bildungsgutschein finanzieren?</h2>
<p>Ob ein Bildungsgutschein grundsätzlich für deine persönliche Situation infrage kommt, können wir gemeinsam mit dir anschauen. Eine Förderung eines HalloSkills-Lehrgangs über den Bildungsgutschein ist jedoch erst möglich, sobald die dafür erforderlichen AZAV-Zulassungen für Träger und Maßnahme vorliegen.</p>

<h2>Fazit</h2>
<p>Einen Bildungsgutschein zu beantragen klingt zunächst komplizierter, als der Ablauf eigentlich ist. Du brauchst vor allem ein nachvollziehbares berufliches Ziel, ein Beratungsgespräch und eine Weiterbildung, die geeignet ist, deine Beschäftigungschancen zu verbessern.</p>
<p>Wenn die Voraussetzungen erfüllt sind, können nicht nur Lehrgangskosten übernommen werden. Je nach Situation kommen beispielsweise Fahrtkosten, Kinderbetreuung oder notwendige Unterkunft hinzu. Bei bestimmten abschlussorientierten Weiterbildungen sind außerdem zusätzliches Weiterbildungsgeld und Prüfungsprämien möglich.</p>
<p>Seit 2025 solltest du außerdem wissen: Auch bei Kundinnen und Kunden des Jobcenters läuft die abschließende Prüfung der Weiterbildungsförderung über die Agentur für Arbeit.</p>

<p>Bereit für den nächsten Schritt? <a href='/beratung-buchen'>Buch dir jetzt ein kostenloses Beratungsgespräch</a> – wir schauen gemeinsam, welcher Lehrgang für dich interessant sein kann und ob ein Bildungsgutschein für deine persönliche Situation grundsätzlich infrage kommt.</p>
    `,
  },
  {
    slug: "arbeitslosengeld-weiterbildung",
    title: "Weiterbildung während Arbeitslosengeld: Was ist erlaubt?",
    category: "Bildungsgutschein",
    readingTime: "9 min",
    date: "2026-09-24",
    image: "/images/blog/blonde-frau-mit-laptop.png",
    excerpt:
      "Kannst du während ALG I eine Weiterbildung machen und läuft dein Arbeitslosengeld weiter? Was bei geförderten und nicht geförderten Kursen gilt – und was beim Bürgergeld anders ist.",
    content: `
<h2>Wichtigste Erkenntnisse</h2>
<ul>
<li>Du kannst während des Bezugs von Arbeitslosengeld eine Weiterbildung machen. Ob und wie dein ALG I weitergezahlt wird, hängt unter anderem davon ab, ob die Weiterbildung gefördert wird.</li>
<li>Bei einer geförderten beruflichen Weiterbildung kann dein Arbeitslosengeld weiterlaufen, solange die Anspruchsvoraussetzungen erfüllt sind.</li>
<li>Dein ALG-I-Restanspruch wird dabei günstiger angerechnet: Zwei Tage Arbeitslosengeld bei beruflicher Weiterbildung mindern den Anspruch grundsätzlich nur um einen Tag.</li>
<li>Auch eine nicht geförderte Weiterbildung kann mit ALG I vereinbar sein. Sie muss aber vorher mit der Agentur für Arbeit abgestimmt werden.</li>
<li>Ein Nebenjob ist möglich, solange du unter 15 Stunden pro Woche bleibst und die geltenden Regeln für Nebeneinkommen beachtest.</li>
<li>Weiterbildungsgeld und Prüfungsprämien gibt es nicht automatisch bei jeder Weiterbildung.</li>
</ul>
<p>Du bekommst Arbeitslosengeld und möchtest die Zeit nutzen, um dich beruflich weiterzuentwickeln? Dann stellt sich schnell die Frage: Darfst du überhaupt eine Weiterbildung machen, während du ALG I beziehst?</p>
<p>Grundsätzlich ja. Eine Weiterbildung und Arbeitslosengeld schließen sich nicht aus. Entscheidend ist aber, welche Art von Weiterbildung du machst, ob sie von der Agentur für Arbeit gefördert wird und welche Voraussetzungen in deinem konkreten Fall gelten.</p>
<p>Besonders interessant kann eine Weiterbildung sein, wenn dir für deinen nächsten Job bestimmte Kenntnisse fehlen oder du dich beruflich neu orientieren möchtest. Unter bestimmten Voraussetzungen kann die Agentur für Arbeit die Weiterbildung fördern und dein Arbeitslosengeld während dieser Zeit weiterzahlen.</p>

<h2>Bekommst du während einer Weiterbildung weiter Arbeitslosengeld?</h2>
<img src="/images/blog/offene-hand-mit-euro-muenzen.png" alt="Offene Hand mit Euro-Münzen" />
<p>Bei einer geförderten beruflichen Weiterbildung kann dein ALG I grundsätzlich weitergezahlt werden. Die Bundesagentur für Arbeit erklärt im Merkblatt 6 zur Förderung der beruflichen Weiterbildung, dass Arbeitslosengeld während einer geförderten Weiterbildung gezahlt wird, solange die entsprechenden Anspruchsvoraussetzungen vorliegen.</p>
<p>Dabei handelt es sich nicht um eine zusätzliche Leistung neben deinem bisherigen Arbeitslosengeld. Dein bestehender ALG-I-Anspruch läuft vielmehr unter besonderen Regeln weiter.</p>
<p>Eine Weiterbildung wird allerdings nicht automatisch gefördert, nur weil du arbeitslos bist. Nach § 81 SGB III kann eine berufliche Weiterbildung unter anderem gefördert werden, wenn sie notwendig ist, um dich beruflich einzugliedern oder eine drohende Arbeitslosigkeit abzuwenden, du vorher beraten wurdest und sowohl Träger als auch Maßnahme für die Förderung zugelassen sind.</p>

<h2>Wann kann die Agentur für Arbeit deine Weiterbildung fördern?</h2>
<p>Im Beratungsgespräch schaut die Agentur für Arbeit auf deine individuelle Situation. Dazu können beispielsweise dein bisheriger beruflicher Werdegang, vorhandene Kenntnisse, deine Eignung und die Arbeitsmarktchancen nach der Weiterbildung gehören. Ziel ist, dass die Qualifizierung deine Chancen auf eine dauerhafte Beschäftigung verbessert.</p>
<p>Sind die Voraussetzungen erfüllt, kann dir ein Bildungsgutschein ausgestellt werden. Damit wird die Übernahme der Weiterbildungskosten und gegebenenfalls die Weiterzahlung des Arbeitslosengeldes zugesichert. Der Gutschein enthält ein bestimmtes Bildungsziel und kann zeitlich oder regional begrenzt sein.</p>
<p>Auch wenn du eine Online-Weiterbildung machen möchtest, solltest du deshalb nicht nur auf das Lernformat schauen. Entscheidend für eine Förderung ist unter anderem, dass der gewählte Bildungsträger und die konkrete Maßnahme die erforderliche Zulassung besitzen und zum Bildungsziel deines Gutscheins passen.</p>

<h2>Was passiert mit deinem ALG-I-Anspruch während der Weiterbildung?</h2>
<p>Eine geförderte Weiterbildung hat einen wichtigen Vorteil: Dein verbleibender ALG-I-Anspruch wird währenddessen nicht im normalen Verhältnis von einem Tag zu einem Tag reduziert. Nach § 148 SGB III vermindert sich dein Anspruch grundsätzlich um einen Tag für jeweils zwei Tage, an denen du Arbeitslosengeld bei beruflicher Weiterbildung erhältst.</p>
<ul>
<li><strong>30 Tage ALG-Bezug während der Weiterbildung</strong> → Minderung des Restanspruchs um rund 15 Tage</li>
<li><strong>60 Tage ALG-Bezug während der Weiterbildung</strong> → Minderung des Restanspruchs um rund 30 Tage</li>
<li><strong>120 Tage ALG-Bezug während der Weiterbildung</strong> → Minderung des Restanspruchs um rund 60 Tage</li>
</ul>
<p>Wenn du also beispielsweise vier Monate ALG während einer geförderten Weiterbildung bekommst, reduziert sich dein Restanspruch grundsätzlich nur um ungefähr zwei Monate. Auch die Bundesagentur für Arbeit erläutert dieses 2:1-Prinzip in ihrem Weiterbildungsmerkblatt.</p>
<p><strong>Schutzregelung bei knappem Restanspruch:</strong> Die 2:1-Minderung wird grundsätzlich nicht weiter vorgenommen, wenn dein ALG-I-Anspruch dadurch unter drei Monate beziehungsweise 90 Tage sinken würde. Beträgt dein Restanspruch bereits zu Beginn der Weiterbildung höchstens 90 Tage, findet diese weitere Minderung grundsätzlich nicht statt. Hattest du zu Beginn weniger als 90 Tage Restanspruch und wurdest mindestens sechs zusammenhängende Monate wegen einer beruflichen Weiterbildung gefördert, kann der Anspruch einmalig auf 90 Tage erhöht werden.</p>
<p>Deshalb ist die Aussage, eine Weiterbildung würde dein Arbeitslosengeld einfach „verlängern", zu pauschal. Wie viel Anspruch dir tatsächlich bleibt, hängt von deiner Ausgangssituation und der Dauer der geförderten Weiterbildung ab.</p>

<h2>Kannst du auch eine nicht geförderte Weiterbildung machen?</h2>
<p>Ja. Auch eine Weiterbildung, die nicht über § 81 SGB III gefördert wird, kann grundsätzlich mit ALG I vereinbar sein. Hier wird allerdings deine Verfügbarkeit für den Arbeitsmarkt besonders wichtig. Nach § 139 Abs. 3 SGB III schließt die Teilnahme an einer solchen beruflichen Weiterbildung die Verfügbarkeit nicht aus, wenn:</p>
<ul>
<li>die Agentur für Arbeit deiner Teilnahme zustimmt,</li>
<li>du bereit bist, die Weiterbildung abzubrechen, sobald eine berufliche Eingliederung möglich wird, und</li>
<li>du mit dem Bildungsträger vereinbart hast, dass dieser Abbruch möglich ist.</li>
</ul>
<p>Melde eine nicht geförderte Weiterbildung deshalb vor Beginn bei deiner Agentur für Arbeit. Einfach einen Kurs zu starten und davon auszugehen, dass dein Arbeitslosengeld unverändert weiterläuft, kann zu Problemen führen. Wichtig ist außerdem: Die Zustimmung zur Teilnahme bedeutet nicht automatisch, dass die Agentur für Arbeit auch die Kurskosten übernimmt.</p>

<h2>Wer bezahlt eine geförderte Weiterbildung?</h2>
<p>Bei einer bewilligten Förderung können unterschiedliche Weiterbildungskosten übernommen werden – dazu gehören laut Bundesagentur für Arbeit beispielsweise Lehrgangsgebühren, erforderliche Lernmittel und Prüfungsgebühren sowie unter bestimmten Voraussetzungen Fahrt-, Kinderbetreuungs-, Unterkunfts- und Verpflegungskosten.</p>
<p>Du musst die bewilligten Lehrgangskosten auch nicht grundsätzlich erst selbst bezahlen und anschließend darauf hoffen, sie zurückzubekommen. Nach dem BA-Merkblatt werden Lehrgangskosten im Regelfall direkt an den Bildungsträger ausgezahlt. Andere Weiterbildungskosten können je nach Leistung an dich ausgezahlt werden.</p>

<h2>Darfst du während der Weiterbildung nebenbei arbeiten?</h2>
<img src="/images/blog/frau-kaut-auf-stift-und-denkt-nach.png" alt="Frau denkt über ihre Weiterbildung nach" />
<p>Ein Nebenjob ist grundsätzlich möglich. Dabei gelten aber dieselben wichtigen Grenzen, die auch sonst beim ALG-I-Bezug zu beachten sind. Die Bundesagentur für Arbeit erklärt zum Nebenjob bei Arbeitslosengeld, dass du die Nebentätigkeit vorab melden und weniger als 15 Stunden pro Kalenderwoche arbeiten musst. Ab 15 Stunden wöchentlich giltst du grundsätzlich nicht mehr als arbeitslos.</p>
<p>Beim normalen Nebenverdienst gilt grundsätzlich ein monatlicher Freibetrag von 165 Euro. Einkommen oberhalb des anrechnungsfreien Betrags kann dein Arbeitslosengeld reduzieren. Unter bestimmten Voraussetzungen kann ein höherer individueller Freibetrag gelten. Deshalb ist es nicht sinnvoll, sich an einer allgemeinen Minijob-Grenze zu orientieren – für ALG I gelten eigene Regeln zu Arbeitszeit und Einkommensanrechnung.</p>

<h2>Bekommst du zusätzlich 150 Euro Weiterbildungsgeld?</h2>
<p>Nicht bei jeder Weiterbildung. Das monatliche Weiterbildungsgeld von 150 Euro ist an bestimmte geförderte, abschlussorientierte Weiterbildungen gekoppelt. Dazu zählen beispielsweise Weiterbildungen, die zu einem Abschluss in einem Ausbildungsberuf mit einer regulären Ausbildungsdauer von mindestens zwei Jahren führen.</p>
<p>Unter den gesetzlichen Voraussetzungen können außerdem Prüfungsprämien gezahlt werden: 1.000 Euro nach erfolgreicher entsprechender Zwischenprüfung oder dem ersten Teil einer gestreckten Abschlussprüfung, und 1.500 Euro nach erfolgreicher Abschlussprüfung. Nur weil eine Weiterbildung gefördert wird, bekommst du also nicht automatisch zusätzlich 150 Euro pro Monat oder eine Prüfungsprämie.</p>

<h2>Was passiert, wenn du die Weiterbildung abbrichst?</h2>
<p>Wenn du merkst, dass eine Weiterbildung nicht funktioniert, solltest du nicht einfach aufhören und anschließend die Agentur für Arbeit informieren. Bei einer von der Agentur für Arbeit relevanten Weiterbildungs- oder Eingliederungsmaßnahme kann eine Ablehnung oder ein Abbruch ohne wichtigen Grund und nach entsprechender Rechtsfolgenbelehrung eine Sperrzeit auslösen. § 159 SGB III sieht für diese Kategorie grundsätzlich drei Wochen beim ersten entsprechenden versicherungswidrigen Verhalten, sechs Wochen beim zweiten und zwölf Wochen bei weiteren Fällen vor.</p>
<p>Das heißt nicht, dass jeder Abbruch automatisch zu einer Sperrzeit führt. Ein wichtiger Grund kann eine Rolle spielen, und die konkrete Situation muss geprüft werden. Sprich deshalb möglichst vor einem Abbruch mit deiner Agentur für Arbeit und dem Bildungsträger.</p>

<h2>Was gilt bei Krankheit oder wenn du einen Job findest?</h2>
<p>Auch während einer geförderten Weiterbildung bestehen Mitwirkungs- und Meldepflichten. Eine Arbeitsunfähigkeit musst du der zuständigen Stelle melden. Ebenso solltest du Änderungen mitteilen, die deinen Leistungsanspruch beeinflussen können – beispielsweise eine neue Beschäftigung, eine Unterbrechung der Weiterbildung oder andere relevante Veränderungen.</p>
<p>Findest du während deiner Weiterbildung einen Job, ist das grundsätzlich erst einmal positiv. Wie es mit deiner Weiterbildung weitergeht, solltest du jedoch mit der Agentur für Arbeit und deinem Bildungsträger abstimmen, anstatt die Maßnahme einfach selbstständig zu beenden.</p>

<h2>Was gilt, wenn du Bürgergeld statt ALG I bekommst?</h2>
<p>ALG I und Bürgergeld sind nicht dasselbe. Die oben erklärte 2:1-Regel für den ALG-I-Restanspruch betrifft Arbeitslosengeld nach dem SGB III und lässt sich nicht einfach auf Bürgergeld übertragen.</p>
<p>Seit 1. Januar 2025 gibt es außerdem eine wichtige Änderung bei der Weiterbildungsförderung von Menschen im SGB-II-Bezug: Das Jobcenter kann den Weiterbildungsbedarf feststellen und eine Vorklärung vornehmen, während anschließend die Agentur für Arbeit in die Weiterbildungsberatung einbezogen wird und die Fördervoraussetzungen abschließend prüft. Ältere Ratgeber, die pauschal davon sprechen, dass das Jobcenter selbst sämtliche Entscheidungen über den Bildungsgutschein trifft, können deshalb inzwischen veraltet sein.</p>

<h2>Spielt dein Alter bei einer Weiterbildung eine Rolle?</h2>
<p>Für die allgemeine Förderung einer beruflichen Weiterbildung nach § 81 SGB III gibt es keine pauschale Altersgrenze, ab der eine Weiterbildung automatisch ausgeschlossen wäre. Die gesetzlichen Voraussetzungen beziehen sich vielmehr unter anderem auf die Notwendigkeit der Weiterbildung, Beratung sowie die Zulassung von Maßnahme und Träger. Wie sinnvoll und förderfähig eine konkrete Weiterbildung ist, wird deshalb individuell geprüft.</p>

<h2>Welche Weiterbildung passt zu dir?</h2>
<p>Eine mögliche Förderung ist wichtig, sie sollte aber nicht das einzige Kriterium für deine Entscheidung sein. Entscheidend ist vor allem, welche Kenntnisse du für dein berufliches Ziel benötigst und welche Weiterbildung zu deiner Lebenssituation passt.</p>
<p>Bei HalloSkills findest du kaufmännische Online-Weiterbildungen mit Inhalten klassischer Umschulungen, die kompakt und vollständig online vermittelt werden. Die HalloSkills-Lehrgänge sind dabei keine klassischen IHK-Umschulungen: Du schließt deinen Lehrgang mit einem HalloSkills-Zertifikat statt einer IHK-Prüfung ab. HalloSkills befindet sich aktuell im AZAV-Zertifizierungsprozess. Eine Förderung unserer Lehrgänge über den Bildungsgutschein ist erst möglich, sobald die dafür erforderlichen AZAV-Zulassungen für Träger und Maßnahme vorliegen.</p>

<h2>Fazit</h2>
<p>Eine Weiterbildung während des Bezugs von Arbeitslosengeld ist grundsätzlich möglich. Besonders klar ist die Situation bei einer geförderten beruflichen Weiterbildung: Dein ALG I kann weitergezahlt werden und dein Restanspruch wird grundsätzlich im Verhältnis 2:1 reduziert.</p>
<p>Doch auch eine nicht geförderte Weiterbildung muss ALG I nicht automatisch ausschließen. Hier kommt es insbesondere darauf an, dass die Agentur für Arbeit vorher zustimmt und deine Verfügbarkeit für eine berufliche Eingliederung erhalten bleibt.</p>
<p>Wichtig ist deshalb vor allem: Kläre deine Weiterbildung vor dem Start mit der Agentur für Arbeit. So weißt du, ob eine Förderung möglich ist, welche Kosten übernommen werden können und welche Regeln während deiner Weiterbildung gelten.</p>

<p>Bereit für den nächsten Schritt? <a href='/beratung-buchen'>Buch dir jetzt ein kostenloses Beratungsgespräch</a> – komplett unverbindlich und kostenlos.</p>
    `,
  },
  {
    slug: "remote-arbeit-tipps",
    title: "Remote Work Tipps: So funktioniert das Arbeiten von zuhause wirklich",
    category: "Karriere",
    readingTime: "7 min",
    date: "2026-09-24",
    image: "/images/blog/frau-am-pc-und-home-office.jpg",
    excerpt:
      "Remote Work gehört für viele längst zum Arbeitsalltag – funktioniert aber nicht automatisch. Diese Tipps helfen dir, zuhause konzentriert, produktiv und zufrieden zu arbeiten.",
    content: `
<p>Remote Work gehört für viele längst zum normalen Arbeitsalltag. Zuhause zu arbeiten bedeutet dabei nicht einfach, den Laptop aufzuklappen und loszulegen. Damit du auch außerhalb des klassischen Büros konzentriert und produktiv wie im Büro arbeiten kannst, brauchst du klare Routinen, passende Tools und einen Arbeitsplatz, an dem du möglichst ungestört arbeiten kannst.</p>
<p>Gerade wer nicht jeden Tag ins Büro gehen möchte oder muss, kann von flexiblen Arbeitsmodellen profitieren. Gleichzeitig verändert Remote Work aber auch den Büroalltag: Kommunikation, Zusammenarbeit und Selbstorganisation laufen stärker digital ab und müssen bewusster geplant werden.</p>
<p>Mit den richtigen Strukturen lässt sich Remote Work gut in den Alltag integrieren, ohne dass Arbeit und Freizeit ständig ineinander übergehen. Hier findest du praktische Tipps, mit denen du deinen Arbeitstag zuhause sinnvoll organisieren und typische Probleme im Homeoffice vermeiden kannst.</p>

<h2>Remote Work ist gekommen, um zu bleiben</h2>
<p>Laut einer Studie des Fraunhofer-Instituts arbeiten 2025 noch immer über 40% der deutschen Wissensarbeiter:innen regelmäßig im Homeoffice. Viele Unternehmen bieten Remote-Optionen als Standard an – besonders in kaufmännischen Berufen mit digitalen Prozessen.</p>
<p>Das ist eine riesige Chance für alle, die in diese Berufsfelder einsteigen wollen. Aber Homeoffice funktioniert nicht automatisch. Es braucht die richtigen Strukturen, Tools und Gewohnheiten.</p>

<h2>Tipp 1: Einen festen Arbeitsbereich einrichten</h2>
<img src="/images/blog/laptop-und-fenster.jpg" alt="Laptop an einem Arbeitsplatz am Fenster" />
<p>Das Sofa ist eine Falle. Ein dedizierter Arbeitsbereich – auch eine Zimmerecke mit Schreibtisch – hilft dem Gehirn, in den Arbeitsmodus zu wechseln. Wichtig: Am Feierabend diesen Bereich verlassen und nicht mehr hinschauen.</p>
<p>Praktische Ausstattung für dein Homeoffice:</p>
<ul>
<li>Ergonomischer Stuhl – Rückenschmerzen sind der häufigste Produktivitätskiller im Homeoffice</li>
<li>Externer Monitor oder Laptopständer auf Augenhöhe</li>
<li>Gute Beleuchtung von vorne, kein Gegenlicht für Video-Calls</li>
<li>Kopfhörer mit Noise Cancelling für Fokusphasen</li>
<li>Neutraler, aufgeräumter Hintergrund für Video-Calls</li>
</ul>
<p>Auch die Deutsche Gesetzliche Unfallversicherung weist darauf hin, dass eine ungünstige ergonomische Ausstattung im Homeoffice das Risiko für Beschwerden insbesondere im Nacken- und Rückenbereich erhöhen kann.</p>

<h2>Tipp 2: Feste Arbeitszeiten und klare Grenzen</h2>
<p>Im Homeoffice verschwimmen Grenzen schnell – entweder arbeitet man zu wenig (weil man sich ablenken lässt) oder zu viel (weil man nie wirklich abschaltet). Beides schadet auf Dauer.</p>
<p>Definiere klare Start- und Endzeiten, kommuniziere sie im Team und ritualisiere das Ende des Arbeitstags: Computer ausschalten, kurzen Spaziergang machen – das signalisiert dem Gehirn: Feierabend.</p>
<p>Klare Grenzen sind auch aus Arbeitsschutzsicht sinnvoll: Das Bundesministerium für Arbeit und Soziales betont, dass mobile Arbeit nicht zu einer dauerhaften Entgrenzung führen sollte und Arbeits- sowie Ruhezeiten auch im Homeoffice beachtet werden müssen.</p>

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
<p>Gerade bei Remote Work helfen solche festen Strukturen dabei, die Arbeitsorganisation übersichtlich zu halten und unnötige Unterbrechungen zu vermeiden.</p>

<h2>Tipp 4: Die richtigen digitalen Tools kennen</h2>
<p>Remote-Worker:innen, die diese Tools beherrschen, sind in jedem Team willkommen:</p>
<ul>
<li><strong>Kommunikation:</strong> Slack, Microsoft Teams</li>
<li><strong>Video-Calls:</strong> Zoom, Google Meet</li>
<li><strong>Projektmanagement:</strong> Asana, Trello, Notion, Jira</li>
<li><strong>Kollaboration:</strong> Google Workspace, Notion, Confluence</li>
<li><strong>Kreativ-Workshops:</strong> Miro, Mural</li>
</ul>
<p>Welche Tools sinnvoll sind, hängt vom jeweiligen Arbeitsmodell ab – bei Fernarbeit oder Telearbeit sollten sie vor allem Kommunikation, Zusammenarbeit und eine klare Aufgabenverteilung erleichtern.</p>

<h2>Tipp 5: Ablenkungen aktiv managen</h2>
<p>Zuhause gibt es mehr Ablenkungen als im Büro: Haushalt, Familie, Social Media, Nachrichten. Erfolgreiche Remote-Worker:innen managen das aktiv:</p>
<ul>
<li>Handy auf Nicht-Stören während Deep-Work-Phasen</li>
<li>Browser-Extensions wie Freedom oder Cold Turkey für ablenkende Websites</li>
<li>Pomodoro-Technik: 25 Minuten fokussiert, 5 Minuten Pause</li>
<li>Klare Absprachen mit Mitbewohner:innen oder Familie</li>
</ul>
<p>Versuche außerdem, die wichtigsten Aufgaben des Tages zu priorisieren, mögliche Störfaktoren bewusst auszuschalten und regelmäßig Pausen einzulegen – so kannst du auch zuhause möglichst produktiv arbeiten.</p>

<h2>Tipp 6: Soziale Kontakte aktiv pflegen</h2>
<p>Isolation ist das größte Langzeitrisiko im Homeoffice. Plane bewusst sozialen Austausch ein: virtuelle Kaffeepausen mit Kolleg:innen, gelegentliche Co-Working-Tage, Meetups und Networking-Events in der eigenen Branche.</p>

<h2>Remote Work durch Remote-Lernen vorbereiten</h2>
<img src="/images/blog/infografik-remote-lernen.png" alt="Infografik zu Remote-Lernen und digitalen Arbeitsfähigkeiten" />
<p>Gute Online-Weiterbildungskurse finden vollständig remote statt – du lernst also nicht nur die Fachinhalte, sondern übst gleichzeitig die Realität des Remote-Arbeitens: digitale Tools nutzen, asynchron kommunizieren, Lernzeit selbst managen. Das ist die beste Vorbereitung auf den digitalen Berufsalltag.</p>

<h2>Was sagt die Forschung zu Homeoffice?</h2>
<p>Eine 2024 in Nature veröffentlichte Studie zu hybridem Arbeiten liefert interessante Ergebnisse. In einem sechsmonatigen randomisierten Experiment mit 1.612 Beschäftigten eines chinesischen Technologieunternehmens arbeitete ein Teil der Beschäftigten zwei Tage pro Woche von zuhause. In dieser Gruppe stieg die Arbeitszufriedenheit und die Kündigungsrate sank um rund ein Drittel. Gleichzeitig fanden die Forschenden keine messbaren Nachteile bei Leistungsbewertungen oder Beförderungen in den folgenden zwei Jahren.</p>
<p>Wichtig: Untersucht wurde hybrides Arbeiten mit zwei Homeoffice-Tagen pro Woche, nicht ausschließliches Remote Work. Die Studie zeigt also nicht, dass jede Form von Remote Work automatisch produktiver ist – wohl aber, dass ein hybrides Modell gut funktionieren kann, ohne die gemessene Arbeitsleistung zu verschlechtern.</p>

<h2>Fazit</h2>
<p>Remote Work ist längst mehr als nur eine vorübergehende Arbeitsform. Für viele Mitarbeitende gehört die Arbeit im Homeoffice inzwischen ganz selbstverständlich zum Arbeitsalltag. Wer regelmäßig remote zu arbeiten beginnt, merkt aber schnell: Erfolgreiches Arbeiten von zu Hause braucht mehr als einen Laptop und eine stabile Internetverbindung.</p>
<p>Ein fester Arbeitsplatz, klare Routinen und gutes Zeitmanagement helfen dir dabei, konzentriert zu arbeiten und Aufgaben effizient zu erledigen. Genauso wichtig ist es, bewusst Pausen einzulegen, soziale Kontakte zu pflegen und das Arbeitsleben nicht vollständig mit dem Privatleben verschmelzen zu lassen.</p>
<p>Der große Vorteil der Remote-Arbeit ist die Flexibilität. Je nach Beruf und Unternehmen kannst du zuhause arbeiten oder teilweise außerhalb des Büros tätig sein und beispielsweise Telefonate, Meetings oder konzentrierte Aufgaben ortsunabhängig erledigen. Das bedeutet jedoch nicht, dass du automatisch produktiver bist, nur weil du von überall aus arbeiten kannst. Entscheidend sind die Strukturen, die du dir selbst schaffst.</p>
<p>Wenn du diese Routinen entwickelst, kann Arbeit von zu Hause zu einer flexiblen und langfristig funktionierenden Form des modernen Arbeitens werden.</p>

<p>Bereit für den nächsten Schritt? <a href='/beratung-buchen'>Buch dir jetzt ein kostenloses Beratungsgespräch</a> und starte deine Karriere im Remote-Arbeitsmarkt.</p>
    `,
  },
  {
    slug: "lebenslauf-tipps-2025",
    title: "Lebenslauf 2026: Was Personaler wirklich sehen wollen",
    category: "Karriere",
    readingTime: "8 min",
    date: "2026-09-24",
    image: "/images/blog/lebenslauf-mit-stift-geschrieben.jpg",
    excerpt:
      "Ein guter Lebenslauf soll nicht deine komplette Lebensgeschichte erzählen, sondern schnell zeigen, was du kannst. Was laut Bundesagentur für Arbeit und aktueller Stepstone-Studie 2026 wirklich zählt.",
    content: `
<h2>Wichtigste Erkenntnisse</h2>
<ul>
<li>Ein moderner Lebenslauf sollte übersichtlich, relevant und möglichst auf die konkrete Stelle zugeschnitten sein.</li>
<li>Die Bundesagentur für Arbeit empfiehlt einen tabellarischen Lebenslauf mit maximal zwei Seiten und den aktuellsten Stationen zuerst.</li>
<li>Bei deiner Berufserfahrung zählen nicht nur Aufgaben. Zeige möglichst konkret, was du gemacht, verbessert oder erreicht hast.</li>
<li>Hard Skills, Softwarekenntnisse, Weiterbildungen und Zertifikate sollten schnell erkennbar sein.</li>
<li>Ein Bewerbungsfoto ist keine Pflicht.</li>
<li>KI kann bei der Bewerbung helfen, aber Personaler achten weiterhin auf Individualität, relevante Erfahrung und authentische Angaben.</li>
</ul>
<p>Ein guter Lebenslauf soll nicht deine komplette Lebensgeschichte erzählen. Er soll einer Personalverantwortlichen oder einem Personalverantwortlichen möglichst schnell zeigen: Was kannst du, welche Erfahrung bringst du mit und warum passt das zur Stelle?</p>
<p>Gerade 2026 wird das wichtiger. Digitale Bewerbungsprozesse, KI und automatisierte Vorauswahl verändern zwar die Bewerbung, die grundlegende Frage bleibt aber dieselbe: Passt dein Profil zu dem, was das Unternehmen sucht?</p>

<h2>Wie sollte ein moderner Lebenslauf 2026 aufgebaut sein?</h2>
<img src="/images/blog/lebenslauf-und-laptop.jpg" alt="Lebenslauf auf einem Klemmbrett neben einem Laptop" />
<p>Die Bundesagentur für Arbeit empfiehlt, den Lebenslauf tabellarisch aufzubauen, auf maximal zwei Seiten zu begrenzen und innerhalb der einzelnen Bereiche mit der aktuellsten Station zu beginnen.</p>
<p>Ein übersichtlicher Lebenslauf Aufbau kann zum Beispiel so aussehen:</p>
<ul>
<li>Persönliche Daten und Kontaktdaten</li>
<li>Optional: kurzes berufliches Profil</li>
<li>Berufserfahrung</li>
<li>Ausbildung oder Studium</li>
<li>Weiterbildungen und Zertifikate</li>
<li>Kenntnisse und Skills</li>
<li>Optional: relevante Ehrenämter oder Interessen</li>
</ul>
<p>Du musst nicht zwanghaft jede Station deines Lebens ausführlich erklären. Je länger dein Berufsweg wird, desto stärker darfst du ältere und für die neue Stelle weniger relevante Informationen kürzen.</p>

<h2>Lohnt sich ein Kurzprofil im Lebenslauf?</h2>
<p>Ein kurzes Profil direkt am Anfang kann besonders hilfreich sein, wenn du bereits Berufserfahrung hast, dich beruflich neu orientierst oder als Quereinsteiger:in nicht auf den ersten Blick in ein klassisches Bewerberprofil passt.</p>
<p>Drei bis vier Zeilen reichen meistens. Zum Beispiel:</p>
<blockquote>Kaufmännische Mitarbeiterin mit Erfahrung in Kundenservice und Organisation. Sicher im Umgang mit Microsoft Office und digitalen Arbeitsprozessen. Aktuell Weiterbildung im Bereich Büromanagement mit dem Ziel, künftig stärker in Verwaltung und Organisation zu arbeiten.</blockquote>
<p>Das Kurzprofil ersetzt nicht den restlichen Lebenslauf. Es gibt nur schnell Orientierung.</p>

<h2>Berufserfahrung: Ergebnisse statt langer Aufgabenlisten</h2>
<p>„Telefonate geführt, E-Mails geschrieben, Kunden betreut" sagt noch relativ wenig darüber aus, was du tatsächlich kannst. Versuche deshalb, deine Berufserfahrung konkret zu beschreiben.</p>
<p><strong>Statt:</strong> „Verantwortlich für Kundenservice"<br>
<strong>besser:</strong> „Telefonische und schriftliche Betreuung von Geschäftskunden, Bearbeitung von Anfragen und Koordination mit internen Fachabteilungen"</p>
<p>Wenn du konkrete Ergebnisse nennen kannst, umso besser. Das müssen nicht immer beeindruckende Prozentzahlen sein. Auch Verantwortung, Umfang oder Verbesserungen können relevant sein. Entscheidend ist, dass eine Person beim Lesen versteht, welche Erfahrung du wirklich mitbringst.</p>

<h2>Welche Skills gehören 2026 in den Lebenslauf?</h2>
<p>Bei Hard Skills solltest du möglichst konkret werden. Dazu gehören zum Beispiel:</p>
<ul>
<li>Microsoft Excel, Word oder PowerPoint</li>
<li>SAP oder andere ERP-Systeme</li>
<li>CRM-Systeme</li>
<li>Buchhaltungssoftware</li>
<li>Fremdsprachen</li>
<li>Projektmanagement-Tools</li>
<li>fachliche Zertifikate und Weiterbildungen</li>
</ul>
<p>Auch Soft Skills können wichtig sein. Begriffe wie „teamfähig", „motiviert" oder „belastbar" sind allein allerdings wenig aussagekräftig. Wenn möglich, zeige sie durch deine Erfahrung. Wer beispielsweise regelmäßig Kundengespräche geführt, Projekte koordiniert oder neue Mitarbeitende eingearbeitet hat, vermittelt Kommunikations- und Organisationsfähigkeit viel konkreter.</p>

<h2>Was sagt die Stepstone-Studie über Bewerbungen mit KI?</h2>
<p>KI gehört inzwischen ganz selbstverständlich zum Bewerbungsprozess. Eine Stepstone-Studie aus dem Jahr 2025 mit 704 Recruiter:innen und 3.495 Bewerbenden zeigt aber, warum du ChatGPT & Co. nicht einfach deine komplette Bewerbung überlassen solltest.</p>
<p>80 % der befragten Recruiter:innen bewerteten eingehende Bewerbungen als höchstens mittelmäßig. Besonders häufig wurden Kandidat:innen aussortiert, weil relevante Fähigkeiten fehlten oder die spezifische Berufserfahrung nicht zur Stelle passte. Gleichzeitig nutzten 61 % der befragten Kandidat:innen bereits KI bei Jobsuche und Bewerbung.</p>
<p>Interessant ist der Widerspruch: 74 % der Recruiter:innen fanden Bewerbungen durch KI professioneller gestaltet, gleichzeitig empfanden 73 % sie als weniger authentisch und 69 % als weniger individuell auf die Stelle zugeschnitten.</p>
<p>Für deinen Lebenslauf bedeutet das: Nutze KI ruhig als Werkzeug, aber überprüfe jede Formulierung und passe deinen Lebenslauf an die konkrete Stelle an.</p>

<h2>Wie machst du deinen Lebenslauf für digitale Bewerbungen geeignet?</h2>
<p>Auch 2026 gilt: Ein ausgefallenes Design ist nicht automatisch ein besserer Lebenslauf.</p>
<p>Die Bundesagentur für Arbeit empfiehlt ein übersichtliches und schlichtes Layout, gut lesbare Schrift und kurze, verständliche Formulierungen. Außerdem sollte der Lebenslauf individuell auf den jeweiligen Arbeitgeber zugeschnitten werden.</p>
<p>Das hilft auch bei digitalen Bewerbungsprozessen. Verwende klare Überschriften wie Berufserfahrung, Ausbildung, Weiterbildungen und Kenntnisse und achte darauf, dass wichtige Fähigkeiten aus der Stellenanzeige tatsächlich in deinem Lebenslauf auftauchen, natürlich nur, wenn du sie wirklich besitzt.</p>

<h2>Was gehört nicht mehr zwingend in den Lebenslauf?</h2>
<p>Nicht jede Information, die früher selbstverständlich war, ist heute notwendig.</p>
<p>Ein Bewerbungsfoto ist beispielsweise keine Pflicht. Die Bundesagentur für Arbeit weist ausdrücklich darauf hin, dass du selbst entscheiden kannst, ob du eines verwenden möchtest.</p>
<p>Auch irrelevante Hobbys oder sehr alte berufliche Stationen müssen nicht ausführlich dargestellt werden. Konzentriere dich lieber darauf, was für deinen nächsten Job tatsächlich interessant ist.</p>

<h2>Wie gehst du mit Lücken im Lebenslauf um?</h2>
<img src="/images/blog/mann-macht-beruflichen-sprung.png" alt="Mann springt über eine Felsspalte als Sinnbild für den beruflichen Neustart" />
<p>Lücken solltest du nicht künstlich verstecken. Auch die Bundesagentur für Arbeit empfiehlt einen offenen Umgang mit Lücken. Entscheidend ist, kurz und sachlich anzugeben, was du in dieser Zeit gemacht hast.</p>
<p>Das kann zum Beispiel sein:</p>
<ul>
<li>Berufliche Neuorientierung</li>
<li>Arbeitssuche</li>
<li>Weiterbildung</li>
<li>Familienphase</li>
<li>Auslandsaufenthalt</li>
</ul>
<p>Du musst daraus keine Rechtfertigung schreiben. Ein Lebenslauf soll deinen Werdegang verständlich machen, nicht jede Lebensphase verteidigen.</p>

<h2>Wie gibst du eine Weiterbildung im Lebenslauf an?</h2>
<p>Eine Weiterbildung gehört in deinen Lebenslauf, wenn sie für deine berufliche Richtung relevant ist, gerade bei einem Quereinstieg oder einer beruflichen Neuorientierung.</p>
<p>Nenne dabei möglichst: Zeitraum · Weiterbildung · Bildungsträger · wichtige Inhalte · Abschluss oder Zertifikat</p>
<p>Bei einer HalloSkills-Weiterbildung kannst du beispielsweise den Lehrgang sowie die erworbenen fachlichen Kenntnisse und dein HalloSkills-Zertifikat angeben.</p>
<blockquote>Kauffrau/-mann für Büromanagement (HalloSkills-Zertifikat) · HalloSkills · 2026<br>Schwerpunkte: Büroorganisation, Kommunikation, Rechnungswesen</blockquote>
<p>So wird sichtbar, dass du nicht nur einen beruflichen Wechsel planst, sondern bereits aktiv neue Qualifikationen aufbaust. Möchtest du deine Qualifikationen gezielt erweitern? Dann schau dir unsere HalloSkills-Lehrgänge an oder vereinbare eine kostenlose Beratung.</p>

<h2>Fazit</h2>
<p>Ein moderner Lebenslauf 2026 muss nicht spektakulär aussehen. Viel wichtiger ist, dass Personaler schnell erkennen können, was du kannst und warum deine Erfahrung zur ausgeschriebenen Stelle passt.</p>
<p>Halte den Aufbau übersichtlich, beginne mit den aktuellsten Stationen und beschreibe relevante Berufserfahrung möglichst konkret. Passe Skills und Schwerpunkte an die jeweilige Stellenanzeige an, ohne Fähigkeiten zu erfinden oder künstlich aufzublasen.</p>
<p>Gerade in Zeiten von KI kann genau diese Individualität den Unterschied machen.</p>

<h2>FAQ</h2>
<p><strong>Wie lang sollte ein Lebenslauf 2026 sein?</strong><br>
Die Bundesagentur für Arbeit empfiehlt eine bis maximal zwei Seiten. Je mehr Berufserfahrung du hast, desto stärker kannst du ältere und weniger relevante Stationen kürzen.</p>
<p><strong>Sollte ein Lebenslauf chronologisch oder antichronologisch aufgebaut sein?</strong><br>
In der Regel antichronologisch: Beginne innerhalb der einzelnen Bereiche mit deiner aktuellsten Tätigkeit und arbeite dich anschließend zurück.</p>
<p><strong>Braucht man 2026 noch ein Bewerbungsfoto?</strong><br>
Nein. Ein Bewerbungsfoto ist keine Pflicht. Wenn du eines verwendest, sollte es professionell wirken und zur angestrebten Position passen.</p>
<p><strong>Sollte ich KI für meinen Lebenslauf benutzen?</strong><br>
Du kannst KI beispielsweise zum Strukturieren, Kürzen oder Überarbeiten nutzen. Die Stepstone-Studie zeigt allerdings, dass Recruiter:innen KI-gestützte Bewerbungen teilweise als weniger individuell und weniger authentisch wahrnehmen. Prüfe deshalb jede Formulierung selbst.</p>
<p><strong>Gehört eine Weiterbildung in den Lebenslauf?</strong><br>
Ja, wenn sie für deine berufliche Entwicklung oder die gewünschte Stelle relevant ist. Gib Zeitraum, Weiterbildung, Anbieter und den erworbenen Abschluss beziehungsweise das Zertifikat an.</p>

<p>Bereit für den nächsten Schritt? <a href='/beratung-buchen'>Buch dir jetzt ein kostenloses Beratungsgespräch</a> – wir unterstützen dich nach der Weiterbildung aktiv bei deiner Bewerbung.</p>
    `,
  },
  {
    slug: "umschulung-vs-weiterbildung",
    title: "Umschulung oder Weiterbildung: Was ist der Unterschied?",
    category: "Bildungsgutschein",
    readingTime: "7 min",
    date: "2026-09-24",
    image: "/images/blog/finger-der-auf-laptop-zeigt.jpg",
    excerpt:
      "Umschulung und Weiterbildung werden oft verwechselt. Wir erklären den Unterschied, wann welcher Weg besser passt – und was das für HalloSkills-Lehrgänge bedeutet.",
    content: `
<h2>Wichtigste Erkenntnisse</h2>
<ul>
<li>Eine Umschulung zielt in der Regel auf einen neuen anerkannten Berufsabschluss und damit auf einen grundlegenderen Berufswechsel.</li>
<li>Eine Weiterbildung erweitert, aktualisiert oder ergänzt vorhandene Kenntnisse und kann sehr unterschiedlich aufgebaut sein.</li>
<li>Formal ist die Trennung nicht ganz so eindeutig: Die Bundesagentur für Arbeit zählt auch Umschulungen zur beruflichen Weiterbildung.</li>
<li>Welche Variante besser passt, hängt von deinem Berufsziel, deiner bisherigen Erfahrung, dem benötigten Abschluss und deiner verfügbaren Zeit ab.</li>
<li>Sowohl Weiterbildung als auch Umschulung können unter bestimmten Voraussetzungen gefördert werden.</li>
<li>HalloSkills bietet Online-Weiterbildungen beziehungsweise Lehrgänge mit Umschulungsinhalten, aber keine klassischen IHK-Umschulungen.</li>
</ul>
<p>Umschulung und Weiterbildung werden im Alltag häufig nebeneinander verwendet. Der wichtigste Unterschied lässt sich trotzdem ziemlich einfach erklären: Möchtest du einen neuen Berufsabschluss erwerben oder vor allem deine vorhandenen Kenntnisse erweitern?</p>
<p>Beides kann dir bei einem Berufswechsel oder einer beruflichen Neuorientierung helfen. Welcher Weg sinnvoller ist, hängt aber stark von deinem Ziel ab. Die Bundesagentur für Arbeit nennt neben Umschulung und Weiterbildung außerdem Möglichkeiten wie Quereinstieg und Externenprüfung.</p>

<h2>Umschulung und Weiterbildung: Wo liegt der wichtigste Unterschied?</h2>
<img src="/images/blog/infografik-umschulung-oder-weiterbildung.png" alt="Infografik: Umschulung oder Weiterbildung im Vergleich" />
<p>Bei einer Umschulung steht normalerweise ein neuer Berufsabschluss im Mittelpunkt. Du qualifizierst dich für einen anderen anerkannten Ausbildungsberuf und kannst anschließend entsprechend in diesem Beruf arbeiten.</p>
<p>Eine Weiterbildung ist breiter angelegt. Sie kann vorhandenes Wissen vertiefen, neue fachliche Kenntnisse vermitteln oder dich auf zusätzliche Aufgaben vorbereiten. Je nach Weiterbildung kann sie sehr kurz oder deutlich umfangreicher sein und unterschiedliche Abschlüsse oder Zertifikate umfassen. Die Bundesagentur für Arbeit weist sogar darauf hin, dass bestimmte Weiterbildungen ebenfalls zu einem anerkannten Berufsabschluss führen können.</p>
<p>Deshalb ist „Umschulung oder Weiterbildung" vor allem eine praktische Vergleichsfrage. Formal kann eine Umschulung ebenfalls unter den Oberbegriff berufliche Weiterbildung fallen.</p>

<h2>Was ist eine Umschulung?</h2>
<p>Mit einer Umschulung bereitest du dich auf einen neuen Berufsabschluss vor. Sie ist besonders interessant, wenn du deinen bisherigen Beruf nicht mehr ausüben kannst oder möchtest und für dein neues Berufsziel eine anerkannte Qualifikation benötigst.</p>
<p>Eine Umschulung kann beispielsweise betrieblich oder bei einem Bildungsträger stattfinden. Je nach Beruf erfolgt der Abschluss über die zuständige Stelle, beispielsweise eine Kammer. Die Bundesagentur für Arbeit beschreibt Umschulung ausdrücklich als einen Weg, einen Abschluss in einem anerkannten Ausbildungsberuf zu erwerben.</p>
<p>Umschulungen sind normalerweise umfangreicher als eine gezielte Weiterbildung, weil du nicht nur einzelne neue Fähigkeiten lernst, sondern dich für einen neuen Beruf qualifizierst. Gerade für Arbeitssuchende kann dieser Weg neue Chancen auf dem Arbeitsmarkt eröffnen, wenn der bisherige Beruf keine passende Perspektive mehr bietet.</p>

<h2>Was ist eine Weiterbildung?</h2>
<p>Eine Weiterbildung setzt nicht zwingend einen vollständigen Berufswechsel voraus. Du kannst damit vorhandene Kenntnisse vertiefen, erweitern oder aktualisieren.</p>
<p>Eine Weiterbildung kann sich direkt auf deinen aktuellen Beruf beziehen oder dich auf neue Aufgaben innerhalb deiner bisherigen beruflichen Tätigkeit vorbereiten. Beispiele reichen von einer kurzen Schulung für neue Software bis zu umfangreicheren Qualifikationen wie einem Fachwirt. Das kann beispielsweise sinnvoll sein, wenn du bereits kaufmännische Erfahrung hast, dir aber Kenntnisse in digitalen Anwendungen, Buchhaltung, Organisation oder einem neuen Fachbereich fehlen.</p>
<p>Eine klassische Anpassungsfortbildung dient beispielsweise dazu, vorhandene Kenntnisse und Fertigkeiten an neue Anforderungen anzupassen. Weiterbildung wird im Alltag außerdem oft synonym verwendet mit Begriffen wie Fortbildung, obwohl die genaue Abgrenzung je nach Kontext unterschiedlich sein kann.</p>
<p>Die Dauer lässt sich nicht pauschal auf drei, sechs oder zwölf Monate festlegen. Sie hängt vom Bildungsziel und vom konkreten Lehrgang ab. Auch Unterrichtsform und Lernaufwand unterscheiden sich je nach Angebot.</p>

<h2>Warum werden die Begriffe schon so lange unterschiedlich verwendet?</h2>
<img src="/images/blog/foerderung-posted.png" alt="Förderung von Umschulung und Weiterbildung" />
<p>Die begriffliche Abgrenzung ist tatsächlich nicht neu. In einem BIBB-Fachbeitrag von Tomas Kemp aus dem Jahr 1976 wurde bereits kritisch diskutiert, was genau unter Weiterbildung verstanden werden sollte. Der Beitrag ist keine empirische Studie, sondern eine fachliche Analyse der damals verwendeten Definitionen.</p>
<p>Kemp setzte sich unter anderem mit der damaligen Definition des Deutschen Bildungsrats auseinander, nach der Weiterbildung sowohl Fortbildung als auch Umschulung umfasste. Er argumentierte dagegen, Weiterbildung stärker als Vertiefung, Erweiterung oder Ergänzung vorhandener Bildung zu verstehen, während eine Umschulung stärker in eine neue berufliche Richtung führt.</p>
<p>Für die heutige Praxis ist vor allem wichtig: Die Begriffe wurden historisch unterschiedlich abgegrenzt. Bei Förderfragen solltest du dich deshalb an der aktuellen Terminologie der Bundesagentur für Arbeit orientieren. Dort wird die Umschulung heute als eine mögliche Form geförderter beruflicher Weiterbildung behandelt. Damit lässt sich Weiterbildung als Oberbegriff verstehen, unter dem unterschiedliche Formen beruflicher Qualifizierung zusammengefasst werden können.</p>

<h2>Umschulung oder Weiterbildung im direkten Vergleich</h2>
<ul>
<li><strong>Typisches Ziel:</strong> Weiterbildung – Kenntnisse erweitern oder aktualisieren; Umschulung – neuen Berufsabschluss erwerben</li>
<li><strong>Beruflicher Ausgangspunkt:</strong> Weiterbildung – vorhandene Erfahrung wird weiter genutzt; Umschulung – grundlegender Berufswechsel</li>
<li><strong>Dauer:</strong> Weiterbildung – abhängig von Lehrgang und Bildungsziel; Umschulung – meist deutlich umfangreicher</li>
<li><strong>Abschluss:</strong> Weiterbildung – abhängig von der Maßnahme, z.&nbsp;B. Zertifikat; Umschulung – anerkannter Berufsabschluss</li>
<li><strong>Quereinstieg:</strong> Weiterbildung – gut für gezielten Kompetenzaufbau geeignet; Umschulung – sinnvoll, wenn ein neuer Berufsabschluss benötigt wird</li>
<li><strong>Förderung:</strong> bei beiden unter Voraussetzungen möglich</li>
</ul>

<h2>Wann kann eine Weiterbildung besser zu dir passen?</h2>
<p>Eine Weiterbildung kann sinnvoll sein, wenn du grundsätzlich in deinem bisherigen oder einem verwandten Berufsfeld bleiben möchtest und dir vor allem bestimmte Kenntnisse fehlen. Auch eine betriebliche Weiterbildung kann sinnvoll sein, wenn du deinen bestehenden Beruf weiter ausüben möchtest, aber zusätzliche Kenntnisse oder Fertigkeiten brauchst.</p>
<p>Das gilt auch bei einem Quereinstieg. Nicht jeder Berufswechsel erfordert automatisch eine vollständige Umschulung. Die Bundesagentur für Arbeit nennt beispielsweise Weiterbildung, Quereinstieg und Externenprüfung als weitere mögliche Wege in einen neuen Beruf.</p>
<p>Wenn deine bisherige Berufserfahrung weiterhin wertvoll ist und du lediglich neue fachliche oder digitale Kompetenzen ergänzen möchtest, kann eine Weiterbildung der direktere Weg sein. Entscheidend ist also nicht nur, welche Weiterbildungsangebote verfügbar sind, sondern ob die jeweilige Maßnahme sinnvoll zu deinem beruflichen Ziel und deiner bisherigen Berufserfahrung passt.</p>

<h2>Wann kann eine Umschulung besser zu dir passen?</h2>
<p>Eine Umschulung kann besser passen, wenn du komplett in einen neuen Ausbildungsberuf wechseln möchtest und dafür einen anerkannten Berufsabschluss brauchst.</p>
<p>Das kann beispielsweise relevant sein, wenn dein bisheriger Beruf langfristig keine passende Perspektive mehr bietet, gesundheitliche Gründe einen Wechsel erforderlich machen oder dein Zielberuf eine formale Qualifikation voraussetzt. Die Bundesagentur für Arbeit nennt sowohl Veränderungen auf dem Arbeitsmarkt als auch gesundheitliche Gründe als mögliche Auslöser für eine berufliche Neuorientierung.</p>
<p>Es geht also nicht darum, ob Umschulung oder Weiterbildung grundsätzlich „besser" ist. Entscheidend ist, welches Ergebnis du am Ende brauchst.</p>

<h2>Wie können Umschulung und Weiterbildung gefördert werden?</h2>
<p>Sowohl eine Weiterbildung als auch eine Umschulung kann unter bestimmten Voraussetzungen über einen Bildungsgutschein unterstützt werden. Die Agentur für Arbeit prüft dabei deine individuelle Situation. Außerdem müssen der Bildungsträger und die konkrete Maßnahme entsprechend zugelassen sein.</p>
<p>Bei einer geförderten abschlussorientierten Weiterbildung kann außerdem ein Weiterbildungsgeld von 150 Euro monatlich hinzukommen. Die Bundesagentur für Arbeit nennt eine Umschulung ausdrücklich als Beispiel für eine solche abschlussorientierte Weiterbildung. Unter bestimmten Voraussetzungen sind auch Prüfungsprämien möglich.</p>
<p>Mehr zum Ablauf findest du in unserem <a href='/blog/bildungsgutschein-beantragen'>Ratgeber zum Bildungsgutschein</a>.</p>

<h2>Was bedeutet der Unterschied für HalloSkills?</h2>
<p>HalloSkills bietet Online-Weiterbildungen beziehungsweise Lehrgänge mit Umschulungsinhalten an. Sie sind keine klassischen IHK-Umschulungen und führen nicht zu einem IHK-Berufsabschluss. Nach Abschluss erhältst du ein HalloSkills-Zertifikat.</p>
<p>Die Lehrgänge richten sich damit besonders an Menschen, die vorhandene Erfahrungen ergänzen oder sich beruflich neu orientieren möchten, ohne eine klassische mehrjährige Umschulung zu absolvieren.</p>

<h2>Fazit</h2>
<p>Der Unterschied zwischen Umschulung und Weiterbildung liegt vor allem im Ziel. Wenn du einen neuen anerkannten Berufsabschluss brauchst, kann eine Umschulung der passende Weg sein. Möchtest du dagegen vorhandene Kenntnisse erweitern, neue Fähigkeiten aufbauen oder dich gezielt für ein anderes Aufgabenfeld qualifizieren, kann eine Weiterbildung besser zu deiner Situation passen.</p>
<p>Ob Weiterbildung oder Umschulung besser zu dir passt, hängt letztlich davon ab, ob du deinen bestehenden Beruf weiterentwickeln oder einen vollständigen beruflichen Neustart wagen möchtest. Bevor du dich entscheidest, solltest du deshalb nicht nur auf die Dauer schauen. Frage dich vor allem: Welchen Abschluss brauche ich für mein berufliches Ziel und welche Kenntnisse bringe ich bereits mit?</p>

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
    title: "Moderne Jobsuche: So findest du 2026 den richtigen Job",
    category: "Karriere",
    readingTime: "6 min",
    date: "2025-08-15",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=60",
    excerpt:
      "Stepstone und Indeed allein reichen nicht mehr. Wir zeigen dir, wo und wie du 2026 wirklich erfolgreich Stellen findest – inkl. Hidden Job Market.",
    content: `
<h2>Der sichtbare und der versteckte Stellenmarkt</h2>
<p>Experten schätzen, dass nur 30–40% aller offenen Stellen öffentlich ausgeschrieben werden. Die übrigen 60–70% werden über Netzwerke, Empfehlungen, Direktansprache oder interne Besetzungen gefüllt – das ist der sogenannte Hidden Job Market.</p>
<p>Wer ausschließlich auf Stepstone und Indeed schaut, sieht also weniger als die Hälfte aller verfügbaren Stellen. Erfolgreiche Jobsuche 2026 kombiniert mehrere Strategien – öffentliche Portale, Netzwerk und Direktbewerbung.</p>

<h2>Die besten Jobportale 2026</h2>
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

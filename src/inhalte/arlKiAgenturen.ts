import { ARL } from './gemeinsam'

/* =========================================================================
   arl-consulting.de  (leitet weiter auf /ki-agenturen)
   Wortlaut von der Live-Seite; Schreibfehler korrigiert — siehe
   ABWEICHUNGEN.md.
   ========================================================================= */

export const HERO = {
  kicker: 'Planbare Lead-Generierung für KI-Agenturen und –Berater',
  titel: 'Fülle deinen leeren Kalender mit qualifizierten Erstgesprächen – ohne Preiskampf',
  text: 'indem du als unentbehrlicher Premium-Anbieter scrollende KMU–Entscheider\ndurch einen verkaufspsychologischen Online-Auftritt direkt in dein CRM laufen lässt',
  knopf: { label: 'Ja, ich möchte verkaufsstarke Außenwirkung', href: '#formular' },
  zaehler: '14 erfolgreiche Kundenprojekte',
  belege: [
    { quelle: '/bilder/arl/provenexpert.jpg', alt: 'Erfahrungen & Bewertungen zu Artus Richard Laurenz' },
    { quelle: '/bilder/arl/tuev.jpg', alt: 'TÜV-zertifiziertes Netzwerk' },
  ],
  belegLink: ARL.provenExpert,
  bild: {
    quelle: '/bilder/arl/portrait.jpg',
    alt: 'Artus Richard Laurenz Partheymüller im Anzug',
  },
}

export const GRUENDE = {
  titel: 'Zeigen sich KMU kalt bei deinem Online Marketing?',
  karten: [
    {
      marke: 'Grund 1',
      titel: 'Unsichtbar in einem Pool voller Konkurrenten',
      text: 'Du hast (vielleicht) eine wunderschöne Website mit Claude erstellt.\n\nAber ganz ehrlich: Wie soll sie Kunden gewinnen, wenn 30 Konkurrenten dieselbe Außenwirkung haben',
    },
    {
      marke: 'Grund 2',
      titel: 'Es fehlt an Zeit oder Lust',
      text: 'Als Geschäftsführer fehlt oft Kapazität und Muse für zielgruppengerechte Kommunikation\n\nDarum fehlt es an Engagement potentieller Leads.',
    },
    {
      marke: 'Grund 3',
      titel: 'KMU-Entscheider sehen 0,0 Handlungsbedarf',
      text: 'Du investierst viel in die Neukunden-Gewinnung. Du hast ein exzellentes Angebot.\n\nUnd trotzdem sind Unternehmen nicht bereit Kunde zu werden.',
    },
  ],
}

export const NUTZEN = [
  {
    titel: 'Verkaufsstarke Pages & Profile =\nMehr Gewinn aus weniger Marketingbudget',
    text: 'Mit psychologisch optimierter Wortwahl verwandle ich scrollende Website-Besucher in begeisterte Fans deiner Angebote.\n\nSo holst du das Meiste aus deiner Onlinepräsenz und kannst planbar deine Akquise-Tätigkeit entlasten.',
    punkte: ['Steigende Kundenzahlen', 'Steigender Umsatz'],
  },
  {
    titel: 'Automatisierte Anfragen =\nMehr Zeit und Fokus für deine Beratungs- und KI-Kompetenz',
    text: 'Verkaufspsychologisch optimierte Inhalte sind dein bestes Marketingteam. Rund um die Uhr. Passiv.\n\nSo hast du endlich wieder Kapazitäten für dein Fulfillment und privat außerhalb des Arbeitsalltags',
    punkte: ['Mehr Zeit fürs Kerngeschäft', 'Kommunikations-Strategien, die 24/7 für dich arbeiten'],
  },
]

export const STIMME = {
  text: '"5-stelliger ROI dank Zusammenarbeit mit Laurenz.\n\nDiese war sehr angenehm. Die gesamte Bearbeitung meiner Landingpage war zügig, transparent und ich wurde stets von den Entwicklungsschritten informiert und mit eingebunden.\n\nVom Ergebnis bin ich begeistert und voll überzeugt.',
  name: 'Georg',
  bild: { quelle: '/bilder/arl/stimme-georg.jpg', alt: 'Georg' },
}

export const BANNER_OBEN = {
  titel: 'Hochwertige Kommunikations‒Strategien heben deine Außenwirkung auf ein neues Niveau',
  knopf: { label: 'Ja, ich möchte Außenwirkung mit Resonanz', href: '#formular' },
}

export const LEISTE = {
  kicker: '3-Step Timeline',
  titel: 'Darum haken dich Geschäftsführer gedanklich schon nach 10 Sekunden ab',
  vorspann:
    '... und wie du dafür sorgst, dass sie ihr Häkchen stattdessen bei eurem Erstgespräch setzen.',
  schritte: [
    {
      marke: '6 Sekunden',
      titel: '75% der Interessenten entscheiden oben auf deiner Seite',
      absaetze: [
        'Und diese KMU-Entscheider lehnen dich nicht ab, wenn sie von dir lesen. Sie fühlen nur nichts – und gehen weiter.',
        'Gerade KI-Dienstleister verlieren hier ihre Chancen: Ihr Angebot ist bewährt, aber auf der eigenen Website klingt es wie der Online-Auftritt von der Konkurrenz.',
        'Online hast du keinen Verkäufer, der deine potenziellen Kunden begeistert. Du hast nur wenige Sekunden, in denen deine Texte zeigen müssen: „Ich verstehe dein Geschäft – und bin relevant."',
      ],
    },
    {
      marke: 'AI Slop',
      titel: 'Was stattdessen bei KI-Beratern passiert',
      absaetze: [
        'Texte und Aufbau wurden schnell erstellt oder nie hinterfragt. ChatGPT, Claude oder Agenturen liefern korrekten, glatten Durchschnitt.',
        'Und dann wunderst du dich, dass die echte DNA deines Unternehmens im Wettbewerbsnebel verschwindet.',
        'Wie vermeidest du also generischen AI Slop, der deine Lead-Conversions einbrechen lässt?',
      ],
    },
    {
      marke: 'Termin gebucht ✓',
      titel: 'Mit diesem roten Faden konvertierst du Traffic in Leads — ohne dein Zutun',
      absaetze: [
        'Schwache Außenkommunikation kostet dich neben Klicks vor allem qualifizierte Anfragen, bevor sie entstehen.',
        'Ich übersetze die DNA deiner KI-Agentur in eine No-Brainer-Message, die bei KMU-Entscheidern in Kopf, Herz und Bauch bleibt.',
        'So werden aus skeptischen Besuchern Gesprächspartner, die Geld bei euch lassen. Viel Geld. Und diesen roten Faden entwerfe ich für dich.',
      ],
    },
  ],
}

export const WARUM = {
  titel: 'Wie viele verpasste KMU-Projekte willst du noch abwarten?',
  karten: [
    {
      marke: '1.',
      titel: 'Dein Tag hat nur 24 Stunden',
      text: 'Du hast mit deinem Kerngeschäft wichtigere Dinge zu tun, als Verkaufstexte zu studieren.\n\nDu kümmerst dich um dein Business - ich um dein Marketing',
    },
    {
      marke: '2.',
      titel: 'Du hast ein großartiges Angebot',
      text: 'Und mit den richtigen Texten bekommt es endlich die Bühne, die es verdient hat.\n\nUnd du den Umsatz um diese Bühne zu erhalten.',
    },
    {
      marke: '3.',
      titel: 'Du brauchst einen Blick von außen',
      text: 'Manchmal wird man betriebsblind\n\nDurch einen externen frischen Blick kann ich deinen Online-Auftritt objektiv beurteilen und maximal optimieren.',
    },
  ],
}

export const PERSON = {
  titel: 'Wie der Partymüller deine Marketing-Kanäle 24/7 Umsatz‒Party feiern lässt',
  rollen: [
    {
      name: 'Artus, der Empath',
      text: 'Als Conversion-Architekt beginnt meine Arbeit damit dich, dein Angebot und deine Zielgruppe wirklich zu verstehen.\n\nIch versetze mich in ihre Lage, um sie klar und überzeugend ansprechen zu können.\n\nDas gelingt mir besonders leicht, weil ich verschiedenste Kundentypen aus vielen Branchen analysiert habe.',
    },
    {
      name: 'Richard, Professionell',
      text: 'Meine Faszination für die Verhaltenspsychologie hinter unseren Entscheidungen ist grenzenlos.\n\nNach meiner Marketing-Ausbildung bei Deutschlands Copywriting Marktführer war mir klar: Ich möchte Unternehmen, die es ernst mit ihrem Business meinen zu mehr Kunden verhelfen.',
    },
    {
      name: 'Laurenz, der Idealist',
      text: 'Ich bin davon überzeugt, dass wir alle eine Aufgabe auf dieser Welt haben.\n\nMeine ist es durch optimierte Werbetexte Menschen zu Ihrem Glück zu verhelfen.',
    },
  ],
  bild: { quelle: '/bilder/arl/portrait.jpg', alt: 'Artus Richard Laurenz Partheymüller' },
  vorname: 'Artus Richard Laurenz',
  nachname: 'Partheymüller',
}

export const NETZWERK = {
  titel: '+8 weitere Profi-Augen für deine Anfragen-Maschine:',
  vorspann:
    'Zusätzlich zu meiner eigenen Erfahrung werden meine Projekte regelmäßig im Sparring von externen Top-Copywritern aus einem TÜV-zertifizierten Netzwerk geschärft,\ndie folgende Reputation vorweisen:',
  zahlen: [
    { text: '300%', label: 'an Anfrage-Steigerungen für Kunden erzielt' },
    { text: '50 Mio +', label: 'Umsatz für Kunden erschrieben' },
    { wert: 1000, suffix: '+', label: 'erfolgreiche Projekte' },
    { text: '1000%', label: 'Kundenzufriedenheit durch 30+ Testimonials' },
  ],
}

export const LEISTUNGEN = {
  titel: 'Wie darf ich dir zu mehr Kunden deines KI‒Unternehmens verhelfen?',
  vorspann: 'Alle strategischen Conversion-Hebel, die neugierige Besucher in begeisterte Anfragen verwandeln:',
  karten: [
    {
      titel: 'Leadgewinnende Google Kampagnen',
      text: 'Wenn du in Google Kampagnen investierst und du viel Traffic hast, aber die Leads auf sich warten lassen,\n\noptimiere ich deine Kampagne mit Copywriting, fundierten Analysen, Targeting & Co., um die Conversion nachhaltig zu erhöhen',
      bild: { quelle: '/bilder/arl/leistung-google.jpg', alt: 'Hände tippen auf einer Laptop-Tastatur' },
    },
    {
      titel: '1a Leads durch High Conversion Website',
      text: 'Ganz ehrlich:\nWie viele Kunden gewinnt deine Website wirklich? Dein Design ist stark – doch deine Texte sind austauschbar.\n\nIch mache deine Botschaft so klar und authentisch, dass sie mehr Kunden gewinnt.',
      bild: { quelle: '/bilder/arl/leistung-website.jpg', alt: 'Geöffneter Laptop auf einem Holztisch' },
    },
    {
      titel: 'E-Mail Newsletter, der tatsächlich gern gelesen wird',
      text: '3 monatliche Newsletter mit stundenlangem Aufwand – und niemand reagiert?\nIch konzipiere und schreibe Mails, die den Mehrwert unwiderstehlich machen.\n\nSo werden deine Angebote wahrgenommen – und gebucht.',
      bild: { quelle: '/bilder/arl/leistung-newsletter.jpg', alt: 'Gmail-Webseite auf einem Laptop-Bildschirm' },
    },
    {
      titel: 'Von sinnlosen LinkedIn-Posts zu planbar passenden Leads',
      text: 'Du machst aufwendige Posts und schaltest vielleicht sogar LinkedIn Ads für dein vielfältiges Angebot.\n\nWenn sie trotzdem wieder weglaufen, helfe ich dir ihre Aufmerksamkeit und Vertrauen zu dir zu gewinnen, damit du mehr Anfragen siehst.',
      bild: { quelle: '/bilder/arl/leistung-linkedin.jpg', alt: 'Smartphone neben einem geöffneten Laptop' },
    },
    {
      titel: 'Sauge Anfragen mit optimierten Funnels ein',
      text: 'Wenn du schon lange Sales-Prozesse wie Leadmagnete hast,\n\nund die Conversion trotzdem zu wünschen übrig lässt,\n\noptimiere ich deinen Funnel von A bis Z für erhöhte Leadgenerierung',
      bild: { quelle: '/bilder/arl/leistung-funnel.jpg', alt: 'Smartphone und Laptop auf einem Tisch' },
    },
  ],
}

export const ABLAUF = {
  titel: 'Wie läuft die Zusammenarbeit genau ab?',
  vorspann:
    'Jede Zusammenarbeit läuft sehr individuell ab. Darum nehme ich nur eine Handvoll Klienten auf. Wenn du dazugehören möchtest, sind das deine nächsten Schritte:',
  knopf: { label: 'Ja, ich möchte verkaufsstarke Texte', href: '#formular' },
  punkte: [
    'Tippe kurz deine Daten ins Formular ein und klicke auf "Angaben absenden"',
    'Ich melde mich bei dir in Kürze und wir finden einen ganz individuellen Termin, bei dem du mind. 30 min hast.',
    'In diesem ersten kostenlosen Erstgespräch finden wir gemeinsam heraus, was dein Geschäft aktuell braucht und wie ich dich am besten unterstützen kann.',
    'Hier erhältst du bereits Optimierungsvorschläge und neue Ideen für dein Angebot. Direkt zum Umsetzen.',
    'Wenn alles passt, maßschneidere ich dir ein individuelles Angebot und wir besprechen eine zukünftige Zusammenarbeit.',
  ],
}

export const KONTAKT = {
  titel: 'Lead-Conversion skalieren oder auf den Zahlen sitzen bleiben?',
  vorspann:
    'Trage dich für ein unverbindliches Analyse-Gespräch ein oder kontaktiere mich direkt und erfahre kostenlos:',
  punkte: [
    '‒ an welchen 2‒3 Stellen deiner Seite Interessenten abspringen',
    '‒ welcher der obigen Hebel dir am schnellsten Leads generiert',
    '‒ und wie du deine USPs im Wettbewerbsnebel differenzierst',
  ],
}

export const FAQ = {
  titel: 'Was mich KI-Agenturen und KI-Berater häufig fragen:',
  fragen: [
    {
      frage: 'Was genau kannst du uns anbieten?',
      antwort:
        'Meine Angebote variieren, weil sie so individuell sind wie die Kunden, die ich betreue.\n\nJe nachdem, was für dein Business aktuell der größte Hebel ist, gibt es verschiedene Ansätze zur Neukundengewinnung, Erhalt der Stammkunden sowie Steigerung der Kundenqualität und des Kundenwerts:\n\nLanding Pages, Website Pages, Newsletter, Social Media Posts, Ads etc.',
    },
    {
      frage: 'Was ist deine Qualifikation?',
      antwort:
        'Ich durfte mein Wissen und praktische Expertise im verkaufspsychologischen Texten beim Marktführer Deutschlands (laut eigenen Angaben des Anbieters) erlernen: der Copywriting MBA mit Unternehmenssitz in Düsseldorf.\n\nDoch selbst die beste Theorie zeigt noch keine spürbaren Ergebnisse. Deshalb bin ich sehr dankbar, nach meiner Online-Marketing-Ausbildung 10+ Kunden begleiten zu dürfen, damit sie mit einem optimierten Online-Auftritt mehr Kunden gewinnen.',
    },
    {
      frage: 'Wer pflegt die optimierten Inhalte dann ein?',
      antwort:
        'Natürlich werden die Leistungen nicht als Word-Datei o.ä. geliefert, sondern im verkaufspsychologischen Layout mit passender Anordnung, Form und Farbe - wie eine exakte Kopie deiner Seite (nur eben mit neuen Inhalten). Andernfalls kann ich die Inhalte auch einpflegen, wenn du das möchtest und die Art deines Website-Anbieters es zulässt.',
    },
    {
      frage: 'Noch offene Fragen?',
      antwort:
        'Kontaktiere mich gerne unter +49 171 6243148 oder unter laurenz.copywriting@gmail.com und ich beantworte dir gerne alle Fragen oder noch besser: melde dich über das Formular oben bei mir und wir haben mehr als genügend Zeit für ausführliche Antworten.',
    },
  ],
}

export const BANNER_UNTEN = {
  titel: 'Ja, ich möchte verkaufsstarkes Online-Marketing',
  knopf: { label: 'Zum kostenlosen Erstgespräch', href: '#formular' },
}

/** Die Strasse im Fuss dieser Seite. Die Tanzschul-Seite nennt eine andere. */
export const STRASSE = 'Lettenreutherstraße 4'

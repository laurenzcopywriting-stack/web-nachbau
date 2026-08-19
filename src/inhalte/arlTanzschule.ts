import { ARL } from './gemeinsam'

/* =========================================================================
   arl-consulting.de/tanzschule
   Wortlaut von der Live-Seite; Schreibfehler korrigiert — siehe
   ABWEICHUNGEN.md.
   ========================================================================= */

export const HERO = {
  kicker: 'Für Tanzschulen, die mehr Kunden auf ihrer Tanzfläche sehen wollen',
  titelOben: 'Verwandle deine',
  titel: 'Tanzschul‒Website 👩‍💻 in einen Neukundenmagneten',
  text: 'Verkaufspsychologische Texte für Deine Tanzkurse, die scrollende Besucher direkt in Deine Tanzschule führen.',
  knopf: { label: 'Ja, ich möchte verkaufsstarke Texte', href: '#formular' },
  belege: [
    { quelle: '/bilder/arl/provenexpert.jpg', alt: 'Erfahrungen & Bewertungen zu Artus Richard Laurenz' },
  ],
  belegLink: ARL.provenExpert,
  belegText: 'Alle verifizierten Rezensionen jetzt auf ProvenExpert ansehen',
  bild: {
    quelle: '/bilder/arl/hero-tanzschule.jpg',
    alt: 'Junger Mann in Anzug und rosa Hemd hält ein weißes Buch mit grünem Band vor goldenem Hintergrund',
  },
}

export const GRUENDE = {
  titel: 'Du tanzt perfekt, aber hast zwei linke Füße im (Online) Marketing?',
  karten: [
    {
      marke: 'Grund 1',
      titel: 'Du bist unsichtbar in einem Pool voller Tanzschulen',
      text: 'Du hast (vielleicht) eine wunderschöne Website. Aber ganz ehrlich: Wie viele Kunden bringt sie wirklich?',
    },
    {
      marke: 'Grund 2',
      titel: 'Du hast keine Zeit oder Lust',
      text: 'Als Tanzschulinhaber fehlt oft Möglichkeit und Muse für überzeugende Texte\n\n– und so entsteht bei Kundengewinnung Dis-Tanz statt Mit-Tanz.',
    },
    {
      marke: 'Grund 3',
      titel: 'Einmal getanzt - weg sind sie',
      text: 'Du investierst viel in die Neukunden-Gewinnung. Du hast ein exzellentes Angebot.\n\nUnd trotzdem sind sie nicht bereit langfristig bei dir zu tanzen.',
    },
  ],
}

export const NUTZEN = [
  {
    titel: 'Verkaufsstarke Texte =\nMehr Gewinn aus weniger Marketingbudget',
    text: 'Mit psychologisch optimierter Wortwahl verwandle ich scrollende Website-Besucher in begeisterte Fans deiner Tanzschule.\n\nSo holst du das Meiste aus deiner Onlinepräsenz und kannst planbar deine Tanzlehrer und Säle auslasten.',
    punkte: [
      'Deine Tanzschule ist nicht mehr abhängig von Weiterempfehlungen',
      'Du kannst langfristig und nachhaltig planbar Umsätze steigern',
    ],
  },
  {
    titel: 'Automatisierte Anfragen =\nMehr Zeit und Fokus für deine leidenschaftliche Kernkompetenz 🕺💃',
    text: 'Verkaufspsychologisch optimierte Texte sind dein bestes Marketingteam. Rund um die Uhr. Passiv.\n\nSo hast du endlich wieder Zeit und Nerven für die wichtigen Dinge - privat und im Beruf.',
    punkte: [
      'Du hast kaum Aufwand: Bis auf ein Interview-Gespräch mit dir kümmere ich mich um alles',
      'Du musst deine Freizeit nicht mit Newsletter schreiben, Insta-Posts oder Verkaufspsychologie verbringen',
    ],
  },
]

export const BANNER_OBEN = {
  titel: 'Hochwertige Werbetexte heben dein Tanzschul‒Image auf ein neues Niveau',
  knopf: { label: 'Ja, ich möchte mehr Außenwirkung', href: '#formular' },
}

export const ELEMENT = {
  kicker: 'Das am meisten unterschätzte',
  titel: 'Element im Online-Marketing',
  vorspann: '...und wie du es zu deinem entscheidenden Vorteil machst.',
  absaetze: [
    'Im klassischen Handel ist längst klar: Je besser das Vertriebsteam Interessenten begeistert, desto besser läuft das Geschäft. Bei Tanzschulen gibt es jedoch selten Verkäufer, die potenzielle Kunden begeistern: du hast primär nur deinen Online-Auftritt.',
    'Du hast nur wenige Sekunden um die Aufmerksamkeit der Tanzinteressierten zu gewinnen. Hier entscheidet sich, ob sie weiterlesen oder beim Mitbewerber landen. Doch was machen die meisten Tanzschulinhaber? Die Texte sind irgendwann auf die Schnelle geschrieben - alleine oder mit ChatGPT - und danach nie wieder beachtet worden. Sie sind Mist.',
    'Oder noch schlimmer: Eine Agentur hat die Texte für dich verfasst und deine einzigartige DNA ist kaum noch zu erkennen. Diesen Zeilen einen Feinschliff zu verpassen, verwandelt skeptische Besucher in begeisterte Tanzanfragen.',
    'Und je intensiver deine Texte potenzielle Tanzkunden begeistern, desto mehr Menschen entschließen sich, bei dir Geld zu lassen. Viel Geld.',
    'Genau diese Texte schreibe ich für dich.',
  ],
}

export const STIMMEN = {
  marke: '2 Testimonials von 10+ Kunden',
  haupt: {
    kicker: 'Testimonial: Neue Seite für den Neustart in Stuttgart',
    ueberschrift: '"Ich bin sehr zufrieden"',
    name: 'Tobias Weller',
    rolle: 'Tanzloft Stuttgart',
    text: '"Die Zusammenarbeit mit Laurenz war sehr angenehm. Die gesamte Bearbeitung meiner Landingpage war zügig, transparent und ich wurde stets von den Entwicklungsschritten informiert und mit eingebunden.\n\nVom Ergebnis bin ich begeistert und voll überzeugt. Durch die neue Strategie mit der Seite konnte ich bereits Kunden gewinnen und habe fünfstellig mehr an Geld wieder reinbekommen, als ich vierstellig bei Laurenz investiert hatte. Ich habe ein sehr gutes Gefühl, dass ich durch die Arbeit von Laurenz noch viele weitere Neukunden erreichen und von meiner Leistung überzeugen werde, die ich ohne diese Landingpage sicher nicht erreicht hätte."',
  },
  zweite: {
    name: 'Georg P.',
    bild: { quelle: '/bilder/arl/stimme-georg.jpg', alt: 'Georg P.' },
  },
  hinweis:
    'Rezensionen meiner Kunden stammen teils von Tanzschulen, teils aus branchenübergreifenden Bereichen',
}

export const WARUM = {
  kicker: 'Egal ob ein ganzer Grundschritt oder der nächste Step Touch',
  titel: 'Darum brauchst du den nächsten Move in deiner Kommunikation',
  karten: [
    {
      marke: '1.',
      titel: 'Dein Tag hat nur 24 Stunden',
      text: 'Du hast mit deinem Kerngeschäft wichtigere Dinge zu tun, als Verkaufstexte zu studieren.\n\nDu kümmerst dich um dein Tanzschul-Business - ich um dein Marketing',
    },
    {
      marke: '2.',
      titel: 'Du hast ein großartiges Kurs‒Angebot.',
      text: 'Und mit den richtigen Texten bekommt es endlich die Bühne, die es verdient hat. Und du den Umsatz um diese Bühne zu erhalten.',
    },
    {
      marke: '3.',
      titel: 'Du brauchst einen Blick von außen',
      text: 'Manchmal wird man betriebsblind und man braucht jemanden der den Online-Auftritt von außen objektiv beurteilt.\n\nUnd den kannst du von mir bekommen, weil ich auch selbst liebend gerne tanze',
    },
  ],
}

export const PERSON = {
  kicker: 'Wer ist dieser Marketer und Tänzer',
  titel: 'hinter Laurenz Copywriting?',
  vorspann: 'Artus Richard Laurenz Partheymüller,\ndamit dein Tanzschul-Business zur Kundengewinnungs-Party wird',
  rollen: [
    {
      name: 'Empath',
      text: 'Als Werbetexter beginnt meine Arbeit damit dich, deine Tanzschule, Kurse und deine Zielgruppe wirklich zu verstehen. Ich versetze mich in ihre Lage, um sie klar und überzeugend ansprechen zu können.\n\nDas gelingt mir besonders leicht, weil ich selbst gerne tanze.',
    },
    {
      name: 'Professionell',
      text: 'Meine Faszination für die Verhaltenspsychologie hinter unseren Entscheidungen ist grenzenlos.\n\nNach meiner Marketing-Ausbildung bei Deutschlands Copywriting Marktführer war mir klar: Ich möchte Tanzschulen zu mehr Kunden verhelfen.',
    },
    {
      name: 'Idealist',
      text: 'Ich bin davon überzeugt, dass wir alle eine Aufgabe auf dieser Welt haben.\n\nMeine ist es durch optimierte Werbetexte Menschen zu Ihrem Glück zu verhelfen.',
    },
  ],
  bild: {
    quelle: '/bilder/arl/portrait.jpg',
    alt: 'Junger Mann im Anzug mit Fliege und Einstecktuch blickt nach oben',
  },
}

export const BANNER_UNTEN = {
  titel: 'Hochwertige Werbetexte heben deine Außenwirkung auf ein neues Niveau',
  knopf: { label: 'Ja, ich möchte verkaufsstarke Texte', href: '#formular' },
}

export const LEISTUNGEN = {
  titel: 'Wie darf ich dir zu mehr Tänzern in deinem Buchungssystem verhelfen?',
  vorspann: 'Alle Texte, die neugierige Besucher in begeisterte Tanzkursanfragen verwandeln sollen:',
  karten: [
    {
      titel: 'Tanzschul-Website, die Kunden gewinnt statt nur zu informieren',
      text: 'Ganz ehrlich: Wie viele neue Tanzschüler gewinnt deine Website wirklich?\n\nDein Design mag top aussehen – doch deine Texte sind austauschbar wie bei jeder anderen Tanzschule.\n\nIch optimiere Inhalte und Strategie so, dass deine Botschaft authentisch wirkt – und somit mehr Kunden für dich gewinnt',
      bild: { quelle: '/bilder/arl/leistung-website.jpg', alt: 'Hände tippen auf der Tastatur eines Laptops' },
    },
    {
      titel: 'E-Mail Newsletter, der wie Salsa in die Beine fährt',
      text: 'Du verschickst stundenlang Newsletter – und niemand reagiert?\n\nWenn deine Kunden den Mehrwert nicht spüren, schreibe ich dir Mails, die selbst wie ein Tanz wirken.\n\nSo werden deine Kurse und Events wahrgenommen – und gebucht.',
      bild: { quelle: '/bilder/arl/leistung-newsletter.jpg', alt: 'Gmail-Webseite auf einem Laptop-Bildschirm' },
    },
    {
      titel: 'Von Social Media zum Social Dancing',
      text: 'Du machst aufwendige Posts und schaltest vielleicht sogar Werbung für dein vielfältiges Angebot an Kursen.\n\nWenn sie trotzdem wieder weglaufen, helfe ich dir ihre Aufmerksamkeit und Vertrauen zu dir zu gewinnen, damit du mehr Tanzanfragen siehst.',
      bild: { quelle: '/bilder/arl/leistung-social.jpg', alt: 'Smartphone mit Facebook-App neben einem Laptop' },
    },
  ],
}

export const ABLAUF = {
  titel: 'Wie läuft die Zusammenarbeit 👩‍💻 genau ab?',
  vorspann:
    'Jede Zusammenarbeit läuft sehr individuell ab. Darum nehme ich nur eine Handvoll Tanzschulen auf. Wenn du dazugehören möchtest, sind das deine nächsten Schritte:',
  knopf: { label: 'Ja, ich möchte verkaufsstarke Texte', href: '#formular' },
  punkte: [
    'Tippe kurz deine Daten ins Formular ein und klicke auf "Angaben absenden"',
    'Ich melde mich bei dir in Kürze und wir finden einen ganz individuellen Termin, bei dem du mind. 30 min hast.',
    'In diesem ersten kostenlosen Erstgespräch finden wir gemeinsam heraus, was deine Tanzschule aktuell braucht und wie ich dich am besten unterstützen kann.',
    'Hier erhältst du bereits Optimierungsvorschläge und neue Ideen für dein Angebot. Direkt zum Umsetzen.',
    'Wenn alles passt, maßschneidere ich dir ein individuelles Angebot und wir besprechen eine zukünftige Zusammenarbeit.',
  ],
}

export const KONTAKT = {
  titel: 'Willst du mehr Kunden in deiner Tanzschule tanzen sehen statt den Kopf in den Sand zu stecken?',
  vorspann:
    'Trage dich für ein unverbindliches kostenloses Erstgespräch ein oder kontaktiere mich direkt, wenn du endlich den entscheidenden Schritt im Online-Marketing machen möchtest.',
  punkte: [],
}

export const FAQ = {
  titel: 'Häufig gestellte Fragen, die ich gerne beantworte',
  fragen: [
    {
      frage: 'Was genau kannst du uns anbieten?',
      antwort:
        'Meine Angebote variieren, weil sie so individuell sind wie die Tanzschulen, die ich betreue.\n\nJe nachdem, was für deine Tanzschule aktuell der größte Hebel ist, gibt es verschiedene Ansätze zur Neukundengewinnung, Erhalt der Stammkunden sowie Steigerung der Kundenqualität und des Kundenwerts:\n\nKursseiten, Startseite, Über Uns Seite, Newsletter, Inhalte für Social Media Posts und Ads, Flyer etc.',
    },
    {
      frage: 'Was ist deine Qualifikation?',
      antwort:
        'Ich durfte mein Wissen und praktische Expertise im verkaufspsychologischen Texten beim Marktführer Deutschlands (laut eigenen Angaben des Anbieters) erlernen: der Copywriting MBA mit Unternehmenssitz in Düsseldorf.\n\nDoch selbst die beste Theorie zeigt noch keine spürbaren Ergebnisse. Deshalb bin ich sehr dankbar, nach meiner Online-Marketing-Ausbildung Tanzschulen begleiten zu dürfen, damit sie mit einem optimierten Online-Auftritt mehr Kunden gewinnen.',
    },
    {
      frage: 'Was tanzt du?',
      antwort:
        'Ich habe nach meinem Schülertanzkurs die Liebe zum Tanzen entdeckt. Nach dem Fortschrittskurs besuchte ich für eine kurze Zeit eine Latein-Formation und tanze mittlerweile so oft ich die Gelegenheit habe und helfe bei meiner heimischen Tanzschule bei Schülerkursen und Abschlussbällen aus.',
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

/** Die Strasse im Fuss dieser Seite. Die KI-Agentur-Seite nennt eine andere. */
export const STRASSE = 'Schönberg 14'

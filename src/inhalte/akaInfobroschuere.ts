import { ROUTEN } from './gemeinsam'

/* =========================================================================
   gienow-akademie.onepage.me/gienowmethode-kostenlose-infobroschure
   Wortlaut von der Live-Seite; Schreibfehler korrigiert — siehe
   ABWEICHUNGEN.md.

   NICHT uebernommen: drei Kundenstimmen der Live-Seite
   ("Erik Hansen, Buchhalter", "Sarah Johansson, Datenwissenschaftler",
   "Laurenz, Buchhalter") mit identischem Blindtext. Das sind unveraenderte
   Vorlagen-Beispiele des Baukastens. Sie als echte Rezensionen zu
   veroeffentlichen waere irrefuehrend — Begruendung in ABWEICHUNGEN.md.
   ========================================================================= */

export const HERO = {
  kicker: '3 Freebie‒Tools des DIY‒Gesundheitssystems der GienowMethode',
  titel: 'Sende in 3 min transformierende Impulse an Körper, Geist und Seele',
  text: 'Wie du mit Bewusstseinsschulung in dir selbst die Lösung deiner körperlichen und psychischen Blockaden findest und umsetzt',
  knopf: { label: 'Tools jetzt kostenlos downloaden', href: '#formular' },
  bild: { quelle: '/bilder/akademie/info-hero.jpg', alt: 'GienowMethode Freebie-Tools' },
}

export const KENNZAHLEN = [
  { text: '80%', label: 'positive Veränderungen durch Gienow-Tools' },
  { text: '3 aus 5000+', label: 'Tools, die es nirgendwo anders gibt' },
  { wert: 35, suffix: '+', label: 'Jahre Erfahrung im medizinischen & alternativen Bereich' },
  { wert: 500000, suffix: '+', label: 'Anwendungen der Gienow-Tools' },
]

export const BERICHTE = [
  '"In Zeiten, in denen ich nicht wusste, warum mir wieder dasselbe passiert, obwohl ich es nicht mehr möchte, konnte ich durch die Qodes meine Verhaltens- und Denkmuster kontinuierlich verändern."\n\n- Ingrid F. B.',
  '"Erfolg durch SelfQ (bei Ohrproblemen)\nIhr Lieben, mein früherer Lebensgefährte hatte seit 4 Wochen ein "verstopftes Ohr" (Paukenerguss) nach einem schweren Infekt. Eine kleine Mini-OP stand für ihn kurz bevor. Wir telefonierten und ich hörte seine Sorge heraus, dass er Angst hat, man würde ihm sein Trommelfell bei der OP verletzen. Wir entschieden, dass es vielleicht ein guter Weg wäre einen Heilqode anzusehen. Die 3 Begriffe waren schnell gefunden (Ohr belegt, Infekt und Stress) und so generierte sich der Qode 57, den er sogleich "zu sich nahm" ;-) Noch am selben Abend - kurz vor Mitternacht - ploppte sein verstopftes Ohr wieder auf und er war selig nach so vielen Wochen wieder richtig hören zu können. Die OP wurde am Morgen darauf abgesagt und bis heute geht es Arne gut, und er erfreut sich an dem heilsamen Ergebnis. Dankedankedanke SelfQ - es darf alles ganz leicht gehen 🥰🙏💝"\n\nJulia G.',
  '"Hallo, zum Thema Wirksamkeit der Qodes habe ich eine Geschichte zum Clearing Qode. Meine Tochter wohnt seit einem Jahr in ihrer Wohnung und hat ständig einen verstopften Abfluss. Sie hat den Clearing Qode aufgehängt und seitdem ist der Abfluss im Bad frei. Supergut👏👏👏"\n\n- Beate P.',
]

export const ABLAUF = {
  titel: "So funktioniert's:",
  punkte: [
    {
      titel: 'Tools kostenlos downloaden',
      text: 'Trage dich im Formular ein. Du erhältst dann einen Link per E‒Mail, der dich direkt zu den Tools führt',
    },
    {
      titel: 'Aktiv und bewusst anwenden',
      text: 'Setze deine Impulse wie bei den gesendeten Tools erklärt und nimm die Veränderungen wahr.',
    },
    {
      titel: 'Veränderungen durchleben',
      text: 'Spüre wie sich Körper, Geist und Seele in Liebe bewusst auf Heilung und Selbsterkenntnis ausrichten',
    },
  ],
  knopf: { label: 'Zum kostenlosen Download', href: '#formular' },
}

export const VORTEILE = {
  titel: 'Was die Freebie-Tools mitbringen',
  karten: [
    { titel: 'Tools to go', text: 'alltagstauglich auf jedem digitalen Gerät' },
    { titel: '3 Minuten für einen bewussten Impuls', text: 'statt stundenlanger Meditation' },
    { titel: 'Einfache Anwendung', text: 'mit Anleitung ohne komplizierte überfordernde Techniken' },
    {
      titel: 'Selbstheilungskräfte unterstützen',
      text: 'durch gezielte Impulse über Hören und Sehen',
    },
    {
      titel: 'Bewusstsein schulen',
      text: 'verborgene unbekannte Zusammenhänge von Blockaden innen wie außen erkennen, um sie zu lösen',
    },
    {
      titel: '80% Erfolge',
      text: 'spürbare Veränderungen in Körper, Geist und Seele (siehe Testimonials)',
    },
  ],
  kurzzitat: { text: '"Die Tools sind genial."', name: 'Laurenz' },
  vertrauen: '5000+ Kunden vertrauen uns',
}

export const FORMULAR = {
  titel: 'Werde zur aktiven MitSchöpferIn deines ganzen Seins',
  text: 'Trage dich gerne in das Formular ein.\n\nDu erhältst sofort Zugang zu den Freebie-Tools der Gienowmethode, die dir jetzt noch unbekannte Bewusstseinskräfte offenbaren.',
  knopf: 'Angaben absenden',
}

export const EIGNUNG = {
  titel: 'Bist du für unsere DIY-Tools geeignet?',
  vorspann: 'Worauf du vor dem Tools-Download achten solltest',
  nein: {
    titel: 'Ungeeignet für dich, wenn du ...',
    punkte: [
      'nur deine Krankheit weghaben willst ohne dich ganzheitlich zu betrachten',
      'denkst deine Probleme verschwinden wie auf Knopfdruck ohne transformierende Prozesse',
      'dich nicht mit dir und deinem Inneren auseinandersetzen willst',
      'dich als rein materiell als biochemische Maschine wahrnimmst',
      'nur danach strebst zu beherrschen und zu kontrollieren (auch wenn es um dich geht)',
      'nur das nächste Tool auf dem spirituellen Markt jagen und sammeln willst',
      'die Liebesmacht der Tools missbrauchst und zweckentfremdest',
    ],
  },
  ja: {
    titel: 'Der perfekte Fit, wenn du ...',
    punkte: [
      'verstehst, dass du dich als Mensch ganzheitlich heilen musst, um deine Krankheiten positiv zu beeinflussen',
      'weißt, dass wahre Heilung von Krankheiten mit Arbeit verbunden ist',
      'bereit bist deinem Selbst in der Tiefe zu begegnen',
      'dich als geistig-seelisches Wesen erkennst',
      'in Liebe zu dir und der Welt bist und handelst',
      'in deiner Hochsensibilität akzeptiert werden willst',
      'eine natürliche spirituelle Sehnsucht hast, die du stillen willst',
      'bereit bist Tools auszuprobieren, deren Wissen es nirgendwo anders gibt',
    ],
  },
}

export const WUNDER = {
  titelOben: 'Wunder des',
  titel: 'Do it yourself Gesundheitssystems',
  stimmen: [
    {
      text: '"Meine Erfahrung mit LiebeLabia\nHallo ihr Lieben, meine Stimme war weg. Und ich hatte große Angst, dass sie nicht mehr wiederkommt. Gudrun gab mir den Tipp das GertieGan LiebeLabia zu verwenden. Es hat nicht lange gedauert und meine Stimme ist Gott sei Dank wieder da. Ich bin so dankbar für die Wirkung."',
      name: 'Anne E. G.',
      bild: { quelle: '/bilder/akademie/avatar-anne.jpg', alt: 'Anne E. G.' },
    },
    {
      text: '"Ein wertvoller Alltagsbegleiter, der mir hilft, meinen Alltag in bessere Energie lenken zu können.\n\nIch konnte damit helfen, die schriftliche Prüfung meiner Tochter so zu unterstützen, dass sie sich während der Prüfung sicherer fühlte und die Prüfung bestand.\n\nAuch meinem Sohn konnte ich damit helfen, als er die praktische Fahrprüfung machte."',
      name: 'Ingrid',
      bild: { quelle: '/bilder/akademie/avatar-ingrid.jpg', alt: 'Ingrid' },
    },
    {
      text: '"Einer Freundin empfahl ich vor Jahren bereits den Raumclearing-Qode; dieser hängt bei ihr an der Wohnungstür. Seitdem kommt sie nach meiner Betrachtung langsam, aber stetig voran mit ihrer Wohnsituation, die ihr mittlerweile unerträglich ist.\n\nVor kurzem erst hat sie den Qode neu aktiviert und seit einigen Wochen macht sie Tabula rasa und es kommt richtig etwas in Schwung.\nDer Entschluss, nach 24 Jahren aus der Wohnung auszuziehen, ist gesetzt. Nun geht es ans Entrümpeln etc. pp.\n\nVor lauter Scham hat sie es NIE gewagt, um Hilfe zu bitten. Die Scham ist gewichen, nachdem sie kontinuierlich die Fingergeste dazu hielt. Nun hat sie mich und ihre Nachbarin um Unterstützung gebeten. Wir sind seit Wochen fleißig und es geht stetig voran. Ich freue mich sehr für sie ..."',
      name: 'Julia G.',
      bild: { quelle: '/bilder/akademie/avatar-julia.jpg', alt: 'Julia G.' },
    },
  ],
  knopf: { label: 'Kostenlos downloaden', href: '#formular' },
}

export const GUDRUN = {
  name: 'Dr. med. Gudrun Hasler',
  absaetze: [
    'Durch die Tools der Gienowmethode transformierte ich vom kranken ausgebrannten System‒Menschen',
    'zur freien, gesunden und erfüllten Schöpferin meines eigenen Lebens - im eigenen Rhythmus, in Einklang mit der Quelle des Seins.',
  ],
  listeTitel: 'Meine Expertise:',
  /* Auf der Live-Seite steht in der dritten Zeile "xxx Patientinnen und
     Patienten" — ein nicht gefuellter Platzhalter. Uebernommen wurde die
     Angabe der Community-Seite. Siehe ABWEICHUNGEN.md. */
  liste: [
    '35+ Jahre Berufserfahrung als Ärztin und Internistin',
    '4 Zusatzqualifikationen im alternativ medizinischen Bereich',
    '5000 Patientinnen und Patienten mit diesen Tools erfolgreich geholfen',
    '30+ Jahre Zusammenarbeit mit Gienows, den Erfindern der Gienowmethode-Tools',
  ],
  knopf: { label: 'Tools jetzt kostenlos ausprobieren', href: '#formular' },
  bild: { quelle: '/bilder/akademie/gudrun.jpg', alt: 'Dr. med. Gudrun Hasler' },
}

export const WEITER = { label: 'Zur Community', href: ROUTEN.skool }

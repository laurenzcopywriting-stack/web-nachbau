import { pfad } from '../lib/pfad'

/* =========================================================================
   Adressen und markenweite Inhalte.

   Alle internen Ziele laufen durch `pfad()`, damit sie auch unter einem
   Unterpfad stimmen (GitHub Pages liefert die Seiten unter /<repo>/ aus).
   Mit Schraegstrich am Ende: jede Seite liegt als Verzeichnis mit
   index.html vor.
   ========================================================================= */

export const ROUTEN = {
  uebersicht: pfad('/'),
  arl: pfad('/arl/'),
  arlTanzschule: pfad('/arl/tanzschule/'),
  freetools: pfad('/akademie/freetools/'),
  infobroschuere: pfad('/akademie/infobroschuere/'),
  skool: pfad('/akademie/skool-community/'),
  freedomq: pfad('/akademie/freedomq/'),
  selfrecoveryq: pfad('/akademie/selfrecoveryq/'),
  selfclearingq: pfad('/akademie/selfclearingq/'),
} as const

/* =========================================================================
   Laurenz Copywriting (arl-consulting.de)
   ========================================================================= */

export const ARL = {
  wortmarke: 'Laurenz Copywriting',
  logo: '/bilder/arl/logo.jpg',
  telefon: '+49 171 6243148',
  telefonLink: 'tel:+491716243148',
  email: 'laurenz.copywriting@gmail.com',
  inhaber: 'Artus Richard Laurenz Partheymüller',
  ort: 'Markt Marktgraitz',
  plz: '96257',
  provenExpert: 'https://www.provenexpert.com/artus-richard-laurenz/',
  datenschutz: 'https://arl-consulting.de/datenschutzerklarung',
  impressum: 'https://arl-consulting.de/impressum',

  navigation: [
    { label: 'Startseite', href: '#oben' },
    { label: 'Vorteile', href: '#vorteile' },
    { label: 'Über mich', href: '#ueber-mich' },
    { label: 'Dienstleistungen', href: '#leistungen' },
    { label: 'Zum kostenlosen Erstgespräch', href: '#formular' },
  ],

  /* Steht so im Fuss beider Seiten. */
  rechtlicherHinweis:
    'Diese Website ist nicht Teil der Facebook-Website oder der Facebook Inc. Außerdem wird diese Seite in keiner Weise von Facebook unterstützt. Facebook ist eine Marke der Facebook, Inc. Wir verwenden Google Remarketing-Pixel/Cookies auf dieser Website, um mit Personen, die unsere Website besuchen, erneut in Kontakt zu treten und sicherzustellen, dass wir sie in Zukunft mit relevanten Nachrichten und Informationen erreichen können. Google schaltet unsere Anzeigen auf Websites von Drittanbietern im Internet, um unsere Botschaft zu verbreiten und die richtigen Personen zu erreichen, die in der Vergangenheit Interesse an unseren Informationen gezeigt haben.',
}

/* =========================================================================
   GienowAkademie (gienow-akademie.onepage.me)
   ========================================================================= */

export const AKADEMIE = {
  wortmarke: 'GienowAkademie',
  logo: '/bilder/akademie/logo.png',
  logoFuss: '/bilder/akademie/logo-fuss.png',
  telefon: '+49 172 7625364',
  telefonLink: 'tel:+491727625364',
  email: 'dr.g.hasler@t-online.de',
  facebook: 'https://www.facebook.com/p/Gudrun-Hasler-100008763391572/',
  instagram: 'https://www.instagram.com/dr.gudrunhasler/',
  youtube: 'https://www.youtube.com/@gienowversum',
  skool: 'https://www.skool.com/dr-gudrun-hasler-6431/about',
  digistore: 'https://www.digistore24.com/product/611086',
  selfqApp: 'https://selfq.space/',
  tsoraat: 'https://tsoraat.world/',
  boosterganeFeedback: 'https://boostergane.com/feedback/',

  navigation: [
    { label: 'Zu den Tools', href: '#tools' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Über mich', href: '#ueber-mich' },
    { label: 'Kontakt', href: '#kontakt' },
  ],

  tagline:
    'Dein Weg zu mehr Freiheit, Selbstbestimmung, Selbstheilung und Transformation deines ganzen Seins',

  /* Auf der Live-Seite steht "Es werden hier keine Heilversprechen gemacht."
     bzw. auf den Qode-Seiten "No health claims are made here." */
  disclaimer:
    'Es werden hier keine Heilversprechen gemacht. Die erstaunlichen 80% positive Veränderungen beziehen sich auf eigene ausgewertete Dokumentierungen auf Grundlage von Selbsteinschätzung.',
  disclaimerKurz: 'Es werden hier keine Heilversprechen gemacht.',
}

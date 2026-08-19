import { AKADEMIE } from './gemeinsam'

/* =========================================================================
   Die drei Qode-Seiten der GienowAkademie.

   Sie sind auf der Live-Seite eine einzige Vorlage mit drei Fuellungen:
   gleicher Aufbau, gleiche Schritte, unterschiedlicher Titel, Untertitel und
   Anwendungshinweis. Deshalb hier eine Struktur mit drei Datensaetzen statt
   dreimal derselbe Text.

   Schreibfehler korrigiert ("Geh an einen ort", "Qode Vide",
   "SelfCRecoveryQ") — siehe ABWEICHUNGEN.md.
   ========================================================================= */

export type QodeSeite = {
  titel: string
  unterzeile: string
  anleitungTitel: string
  warnung: { marke: string; text: string }
  poster: string
}

/** Auf allen drei Seiten identisch. */
export const SCHRITTE = [
  {
    titel: 'Stell sicher, dass du ungestört bist',
    text: 'Geh an einen Ort, wo du alleine und für ein paar Minuten ungestört bist',
  },
  {
    titel: 'Entspanne dich ein paar Minuten',
    text: 'Setze dich angenehm hin und nimm ein paar Atemzüge.',
  },
  {
    titel: 'Schau dir das Qode-Video an',
    text: 'Drücke auf Play und halte deine Augen bis zum Video-Ende offen',
  },
]

export const WEITER = {
  label: 'Erfreue dich an allen Tool-Möglichkeiten - erfahre wie du sie anwendest',
  href: AKADEMIE.skool,
}

export const ANSTOSS = "Press when you're ready"

const POSTER = '/bilder/akademie/qode-poster.jpg'

export const FREEDOMQ: QodeSeite = {
  titel: 'FreedomQ',
  unterzeile: 'Befreie deine Wahrnehmungen von Blockaden, die dein Bewusstsein begrenzen',
  anleitungTitel: 'Wie du den FreedomQ anschaust',
  warnung: {
    marke: 'Achtung: Nur einmal mit den Augen ansehen',
    text: '- nicht mehrere Male\n\nDas ist ein one time only Impuls für dein Bewusstsein.\n\nSolltest du dabei gestört, unterbrochen oder abgelenkt werden, schaue ihn ein weiteres Mal innerhalb von 12 Stunden an.',
  },
  poster: POSTER,
}

export const SELFRECOVERYQ: QodeSeite = {
  titel: 'SelfRecoveryQ',
  unterzeile: 'Regeneration von Körper, Geist und Seele - Qode 3/3',
  anleitungTitel: 'Wie du den SelfRecoveryQ anschaust',
  warnung: {
    marke: 'Achtung: Bei Bedarf ansehen',
    text: 'In 4 Wochen Abständen zwischen jeder Wiederholung. Der Aufbau braucht Zeit.\n\nJeweils nur einmal das Video ansehen. Solltest du dabei gestört, unterbrochen oder abgelenkt werden, schaue ihn ein weiteres Mal innerhalb von 12 Stunden an.',
  },
  poster: POSTER,
}

export const SELFCLEARINGQ: QodeSeite = {
  titel: 'SelfClearingQ',
  unterzeile: 'Reinigung innen und außen',
  anleitungTitel: 'Wie du den SelfClearingQ anschaust',
  warnung: {
    marke: 'Achtung: Einmal pro Woche ansehen für 4 Wochen',
    text: 'Jeweils nur einmal ansehen. Solltest du dabei gestört, unterbrochen oder abgelenkt werden, schaue ihn ein weiteres Mal innerhalb von 12 Stunden an.',
  },
  poster: POSTER,
}

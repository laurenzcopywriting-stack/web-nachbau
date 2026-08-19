import { useState } from 'react'
import { pfad } from '../lib/pfad'

type BildProps = {
  /** Pfad unterhalb von `public/`, z. B. "/bilder/team-treppe.jpg". */
  quelle: string
  alt: string
  /** Seitenverhaeltnis als CSS-Wert, z. B. "4 / 3". Haelt das Layout stabil. */
  verhaeltnis?: string
  /** Beschreibt, was hier stehen soll — sichtbar, solange die Datei fehlt. */
  notiz?: string
  className?: string
  /** Staerke der Parallaxe (0 = aus). Wird von der Seiten-Choreografie gelesen. */
  parallaxe?: number
  /** Ueber dem Falz: laedt sofort statt lazy. */
  sofort?: boolean
}

/**
 * Bild mit sichtbarem Platzhalter, solange die Datei fehlt.
 *
 * Die Originalbilder der Live-Seite liegen noch nicht im Projekt. Statt eines
 * kaputten Bildsymbols zeigt dieses Bauteil einen beschrifteten Platzhalter im
 * korrekten Seitenverhaeltnis — das Layout stimmt dadurch schon jetzt, und
 * jede Luecke benennt sich selbst.
 *
 * Sobald eine Datei unter `public/bilder/` liegt, rendert sie ohne
 * Code-Aenderung: der Fehlerpfad greift dann einfach nicht mehr.
 */
export function Bild({
  quelle,
  alt,
  verhaeltnis = '4 / 3',
  notiz,
  className = '',
  parallaxe = 0,
  sofort = false,
}: BildProps) {
  const [fehlt, setFehlt] = useState(false)

  return (
    <figure
      className={`bild ${fehlt ? 'bild--leer' : ''} ${className}`}
      style={{ aspectRatio: verhaeltnis }}
      {...(parallaxe ? { 'data-parallaxe': String(parallaxe) } : {})}
    >
      {fehlt ? (
        /* Der Platzhalter traegt den Alt-Text als sichtbare Beschriftung —
           damit ist auf einen Blick klar, welches Motiv hier fehlt. */
        <div className="bild__platzhalter" role="img" aria-label={alt}>
          <span className="bild__marke" aria-hidden="true">
            Bild fehlt
          </span>
          <span className="bild__notiz">{notiz ?? alt}</span>
          <code className="bild__pfad">{quelle}</code>
        </div>
      ) : (
        <img
          src={pfad(quelle)}
          alt={alt}
          loading={sofort ? 'eager' : 'lazy'}
          decoding="async"
          onError={() => setFehlt(true)}
        />
      )}
    </figure>
  )
}

/**
 * Video-Platzhalter im Stil der Live-Seite: Standbild mit Abspielknopf.
 * Ohne hinterlegte Videodatei bleibt es bewusst eine Flaeche mit Hinweis.
 */
export function VideoBild({
  quelle,
  alt,
  verhaeltnis = '16 / 9',
  notiz,
  className = '',
}: BildProps) {
  return (
    <div className={`videobild ${className}`}>
      <Bild quelle={quelle} alt={alt} verhaeltnis={verhaeltnis} notiz={notiz} />
      <span className="videobild__knopf" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M8 5.5v13l11-6.5z" />
        </svg>
      </span>
    </div>
  )
}

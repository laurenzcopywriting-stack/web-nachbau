import { useState } from 'react'
import { pfad } from '../lib/pfad'

/**
 * YouTube-Einbettung, die erst auf Klick laedt.
 *
 * Vorher steht nur ein lokales Standbild. Das spart beim ersten Aufruf den
 * kompletten Player und verhindert, dass YouTube schon beim Seitenaufruf
 * mitliest — der Besucher entscheidet, wann die Verbindung entsteht.
 *
 * `youtube-nocookie.com` statt `youtube.com`: setzt keine Werbe-Cookies,
 * solange nicht abgespielt wird.
 */
export function VideoEinbettung({
  id,
  titel,
  kanal,
  standbild,
  href,
}: {
  id: string
  titel: string
  kanal?: string
  standbild: string
  href?: string
}) {
  const [laeuft, setLaeuft] = useState(false)

  if (laeuft) {
    return (
      <div className="einbettung">
        <iframe
          className="einbettung__rahmen"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={titel}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }

  return (
    <div className="einbettung">
      <button
        type="button"
        className="einbettung__start"
        onClick={() => setLaeuft(true)}
        aria-label={`Video abspielen: ${titel}`}
      >
        <img src={pfad(standbild)} alt="" loading="lazy" decoding="async" />
        <span className="einbettung__knopf" aria-hidden="true">
          <svg viewBox="0 0 68 48" width="60" height="42" aria-hidden="true">
            <path
              d="M66.5 7.7a8.6 8.6 0 0 0-6-6C55.2 0 34 0 34 0S12.8 0 7.5 1.7a8.6 8.6 0 0 0-6 6A89.6 89.6 0 0 0 0 24a89.6 89.6 0 0 0 1.5 16.3 8.6 8.6 0 0 0 6 6C12.8 48 34 48 34 48s21.2 0 26.5-1.7a8.6 8.6 0 0 0 6-6A89.6 89.6 0 0 0 68 24a89.6 89.6 0 0 0-1.5-16.3z"
              fill="#f00"
            />
            <path d="M27 34l18-10-18-10z" fill="#fff" />
          </svg>
        </span>
      </button>

      <div className="einbettung__zeile">
        <span className="einbettung__titel">{titel}</span>
        {kanal && <span className="einbettung__kanal">{kanal}</span>}
        {href && (
          <a href={href} target="_blank" rel="noopener noreferrer" className="einbettung__extern">
            Watch on YouTube
          </a>
        )}
      </div>
    </div>
  )
}

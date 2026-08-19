import { useRef, useState, type ReactNode } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger, EASE, reduziert } from '../lib/motion'
import { zuAnker } from '../lib/anker'
import { pfad } from '../lib/pfad'

export type NavPunkt = { label: string; href: string }

/**
 * Die Kopfleiste — markenneutral.
 *
 * Logo, Navigationspunkte und der rechte Bereich kommen als Eigenschaften
 * herein, damit beide Marken dasselbe Verhalten teilen (Ausblenden beim
 * Scrollen, Klappmenue, Ankersprung) ohne sich ein Aussehen zu teilen.
 */
export function Kopf({
  logo,
  logoAlt,
  wortmarke,
  navigation,
  rechts,
  start = '/',
}: {
  /** Pfad zur Logodatei. Fehlt er, steht nur die Wortmarke. */
  logo?: string
  logoAlt?: string
  wortmarke?: string
  navigation: NavPunkt[]
  rechts?: ReactNode
  start?: string
}) {
  const kopf = useRef<HTMLElement>(null)
  const [offen, setOffen] = useState(false)

  useGSAP(
    () => {
      if (reduziert()) return

      /* Die Leiste weicht beim Hinunterscrollen und kommt beim Hochscrollen
         sofort zurueck. Der Inhalt bekommt so die volle Hoehe, ohne dass die
         Navigation umstaendlich zu erreichen waere. */
      const zeigen = gsap.quickTo(kopf.current, 'yPercent', {
        duration: 0.4,
        ease: EASE.beide,
      })

      ScrollTrigger.create({
        start: 'top -80',
        end: 'max',
        onUpdate: (self) => zeigen(self.direction === 1 ? -100 : 0),
        onToggle: (self) => {
          kopf.current?.classList.toggle('ist-abgesetzt', self.isActive)
          if (!self.isActive) zeigen(0)
        },
      })
    },
    { scope: kopf }
  )

  const klick = (href: string) => (ereignis: React.MouseEvent) => {
    setOffen(false)
    if (!href.startsWith('#')) return
    ereignis.preventDefault()
    zuAnker(href)
  }

  return (
    <header className={`kopf ${offen ? 'ist-offen' : ''}`} ref={kopf}>
      <div className="kopf__innen">
        <a href={pfad(start)} className="kopf__marke">
          {logo ? (
            <img src={pfad(logo)} alt={logoAlt ?? 'Zur Startseite'} />
          ) : (
            <span>{wortmarke}</span>
          )}
          {logo && wortmarke && <span className="sr">{wortmarke}</span>}
        </a>

        <nav className="kopf__nav" aria-label="Hauptnavigation">
          <ul>
            {navigation.map((p) => (
              <li key={p.label}>
                <a href={p.href.startsWith('#') ? p.href : pfad(p.href)} onClick={klick(p.href)}>
                  {p.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="kopf__rechts">{rechts}</div>

        <button
          type="button"
          className="kopf__brenner"
          aria-expanded={offen}
          aria-label={offen ? 'Menü schließen' : 'Menü öffnen'}
          onClick={() => setOffen((o) => !o)}
        >
          <span aria-hidden="true" />
        </button>
      </div>
    </header>
  )
}

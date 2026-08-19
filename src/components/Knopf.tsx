import type { ReactNode } from 'react'
import { pfad } from '../lib/pfad'

/**
 * Die Toene sind markenneutral benannt — welche Farbe dahintersteht,
 * entscheidet das Stylesheet der jeweiligen Marke.
 */
type Ton = 'akzent' | 'primaer' | 'weiss' | 'umriss' | 'umriss-hell'

type KnopfProps = {
  children: ReactNode
  href?: string
  ton?: Ton
  className?: string
  beiKlick?: () => void
}

/**
 * Der einzige Button der Seiten.
 *
 * Ohne `href` entsteht ein echter `<button>`. Interne Ziele laufen durch
 * `pfad()`, damit sie auch unter einem Unterpfad stimmen; externe bekommen
 * `rel` gesetzt, sonst erhielte die Zielseite ueber `window.opener` Zugriff
 * auf diesen Tab.
 */
export function Knopf({ children, href, ton = 'akzent', className = '', beiKlick }: KnopfProps) {
  const klassen = `knopf knopf--${ton} ${className}`

  if (href) {
    const extern = href.startsWith('http')
    const ziel = extern || href.startsWith('#') ? href : pfad(href)
    return (
      <a
        href={ziel}
        className={klassen}
        onClick={beiKlick}
        {...(extern ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={klassen} onClick={beiKlick}>
      {children}
    </button>
  )
}

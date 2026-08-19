import type { ElementType, ReactNode } from 'react'
import { inWoerter } from '../lib/motion'

/**
 * Ein Stueck Ueberschrift mit optionaler Auszeichnung.
 * `betont` = Markenviolett, `unterstrichen` = der gemalte Lime-Strich.
 */
export type Segment = {
  text: string
  stil?: 'betont' | 'unterstrichen'
}

type MaskenTitelProps = {
  segmente: Segment[]
  as?: ElementType
  className?: string
  id?: string
}

/**
 * Ueberschrift, deren Woerter einzeln hinter einer Kante hervorfahren.
 *
 * Jedes Wort sitzt in einem Kasten mit `overflow: hidden`. GSAP schiebt es von
 * yPercent 108 auf 0 — der Text schiebt sich hervor, statt einzublenden.
 *
 * Zugaenglichkeit: Der ganze Satz haengt am `aria-label`, die Wortkaesten sind
 * per `aria-hidden` ausgeblendet. Ohne das liest ein Screenreader Wort fuer
 * Wort mit Pausen dazwischen.
 */
export function MaskenTitel({
  segmente,
  as: Tag = 'h2',
  className = '',
  id,
}: MaskenTitelProps) {
  const ganzerSatz = segmente.map((s) => s.text).join(' ')

  return (
    <Tag className={`masken-titel ${className}`} aria-label={ganzerSatz} id={id}>
      <span aria-hidden="true">
        {segmente.map((segment, si) =>
          inWoerter(segment.text).map((wort, wi) => (
            <span className="maske" key={`${si}-${wi}`}>
              <span className={`wort ${segment.stil ? segment.stil : ''}`}>{wort}</span>
            </span>
          ))
        )}
      </span>
    </Tag>
  )
}

/**
 * Absatz oder Block, der beim Hereinscrollen einmalig aufsteigt.
 * Das `data-enthuellen` ist der Griff fuer den Reduced-Motion-Pfad.
 */
export function Enthuellen({
  children,
  className = '',
  as: Tag = 'div',
}: {
  children: ReactNode
  className?: string
  as?: ElementType
}) {
  return (
    <Tag className={className} data-enthuellen="">
      {children}
    </Tag>
  )
}

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, reduziert } from '../lib/motion'

/**
 * Endlos laufendes Band aus Karten.
 *
 * Der Inhalt steht zweimal im Markup. Die Spur wandert um genau die Breite
 * einer Haelfte; `gsap.utils.wrap` faltet die Position dabei in den Bereich
 * [-Haelfte, 0) zurueck. Am Umschlagpunkt steht das Duplikat exakt dort, wo
 * das Original stand — der Sprung ist deshalb unsichtbar.
 *
 * Die Karten der zweiten Haelfte tragen `aria-hidden`, sonst laese ein
 * Screenreader jede Geschichte zweimal vor.
 */
export function Laufband({
  eintraege,
  tempo = 55,
  className = '',
}: {
  eintraege: string[]
  /** Pixel pro Sekunde. */
  tempo?: number
  className?: string
}) {
  const wurzel = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const spur = wurzel.current?.querySelector<HTMLElement>('.laufband__spur')
      if (!spur || reduziert()) return

      /* Nur die halbe Breite: die zweite Haelfte ist das Duplikat. */
      const strecke = spur.scrollWidth / 2
      if (strecke <= 0) return

      const falten = gsap.utils.wrap(-strecke, 0)

      const lauf = gsap.to(spur, {
        x: `-=${strecke}`,
        ease: 'none',
        duration: strecke / tempo,
        repeat: -1,
        modifiers: {
          x: (wert) => `${falten(parseFloat(wert))}px`,
        },
      })

      /* Beim Zeigen oder Fokussieren anhalten, damit ein langer Text
         ueberhaupt lesbar ist. */
      const el = wurzel.current!
      const anhalten = () => lauf.pause()
      const weiter = () => lauf.play()

      el.addEventListener('pointerenter', anhalten)
      el.addEventListener('pointerleave', weiter)
      el.addEventListener('focusin', anhalten)
      el.addEventListener('focusout', weiter)

      return () => {
        el.removeEventListener('pointerenter', anhalten)
        el.removeEventListener('pointerleave', weiter)
        el.removeEventListener('focusin', anhalten)
        el.removeEventListener('focusout', weiter)
      }
    },
    { scope: wurzel }
  )

  return (
    <div className={`laufband ${className}`} ref={wurzel}>
      <div className="laufband__spur">
        {eintraege.map((e, i) => (
          <Karte key={`a-${i}`} text={e} />
        ))}
        {eintraege.map((e, i) => (
          <Karte key={`b-${i}`} text={e} doppel />
        ))}
      </div>
    </div>
  )
}

function Karte({ text, doppel = false }: { text: string; doppel?: boolean }) {
  return (
    <blockquote className="laufband__karte" {...(doppel ? { 'aria-hidden': true } : {})}>
      {text.split('\n\n').map((absatz, i) => (
        <p key={i}>{absatz}</p>
      ))}
    </blockquote>
  )
}

import { useId, useRef, useState } from 'react'
import { gsap, ScrollTrigger, EASE, reduziert } from '../lib/motion'

export type Frage = {
  frage: string
  antwort: string
}

/**
 * Das FAQ-Akkordeon.
 *
 * Die Hoehe wird auf `auto` animiert statt auf einen gemessenen Pixelwert:
 * GSAP misst dabei selbst und schreibt am Ende `height: auto` zurueck, sodass
 * ein spaeterer Umbruch (Fenstergroesse, Schriftnachladung) den Kasten nicht
 * abschneidet.
 *
 * Danach `ScrollTrigger.refresh()` — die Seitenhoehe hat sich geaendert, und
 * alle nachfolgenden Trigger stuenden sonst auf veralteten Positionen.
 */
export function Akkordeon({ fragen, ton = 'hell' }: { fragen: Frage[]; ton?: 'hell' | 'dunkel' }) {
  const [offen, setOffen] = useState<number | null>(null)
  const basisId = useId()

  return (
    <div className={`akkordeon akkordeon--${ton}`}>
      {fragen.map((f, i) => (
        <Zeile
          key={f.frage}
          frage={f}
          id={`${basisId}-${i}`}
          offen={offen === i}
          umschalten={() => setOffen(offen === i ? null : i)}
        />
      ))}
    </div>
  )
}

function Zeile({
  frage,
  id,
  offen,
  umschalten,
}: {
  frage: Frage
  id: string
  offen: boolean
  umschalten: () => void
}) {
  const koerper = useRef<HTMLDivElement>(null)
  const vorher = useRef(offen)

  /* Statt useEffect: der Vergleich mit dem vorherigen Wert waehrend des
     Renderns startet die Animation genau bei einem echten Zustandswechsel —
     und nicht zusaetzlich beim ersten Aufbau, wo sonst jede geschlossene
     Zeile einmal durch die Schliess-Animation liefe. */
  if (vorher.current !== offen && koerper.current) {
    vorher.current = offen
    const el = koerper.current

    gsap.killTweensOf(el)

    if (reduziert()) {
      gsap.set(el, { height: offen ? 'auto' : 0, opacity: offen ? 1 : 0 })
      ScrollTrigger.refresh()
    } else if (offen) {
      gsap.fromTo(
        el,
        { height: 0, opacity: 0 },
        {
          height: 'auto',
          opacity: 1,
          duration: 0.42,
          ease: EASE.beide,
          onComplete: () => ScrollTrigger.refresh(),
        }
      )
    } else {
      gsap.to(el, {
        height: 0,
        opacity: 0,
        duration: 0.32,
        ease: EASE.beide,
        onComplete: () => ScrollTrigger.refresh(),
      })
    }
  }

  return (
    <div className={`akkordeon__zeile ${offen ? 'ist-offen' : ''}`}>
      <h3 className="akkordeon__ueberschrift">
        <button
          type="button"
          className="akkordeon__knopf"
          aria-expanded={offen}
          aria-controls={id}
          onClick={umschalten}
        >
          <span>{frage.frage}</span>
          <span className="akkordeon__zeichen" aria-hidden="true" />
        </button>
      </h3>

      {/* Der Kasten bleibt im Markup und wird per Hoehe zugefahren.
          `inert` nimmt den Inhalt im geschlossenen Zustand aus Tastatur- und
          Screenreader-Fluss, ohne ihn aus dem DOM zu nehmen. */}
      <div className="akkordeon__koerper" id={id} ref={koerper} inert={!offen || undefined}>
        <p className="akkordeon__text">{frage.antwort}</p>
      </div>
    </div>
  )
}

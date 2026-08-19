import { useRef, type ReactNode } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollSmoother, reduziert } from './lib/motion'

/**
 * Die gemeinsame Huelle aller Seiten.
 *
 * Jede Seite ist ein eigenes Dokument mit eigenem Bundle — es gibt keinen
 * Router. Der Rahmen startet den ScrollSmoother und nimmt Kopf und Fuss der
 * jeweiligen Marke als Bauteile entgegen, statt sie selbst zu kennen.
 */
export function Rahmen({
  kopf,
  fuss,
  children,
}: {
  kopf: ReactNode
  fuss: ReactNode
  children: ReactNode
}) {
  const wurzel = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (reduziert()) return

      /* Zieht das Scrollen leicht nach. Muss vor allen anderen ScrollTriggern
         entstehen, weil es den Scroller ersetzt. */
      const smoother = ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 1.05,
        effects: true,
        normalizeScroll: true,
      })

      gsap.to('.fortschritt__fuellung', {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: { start: 0, end: 'max', scrub: 0.3 },
      })

      return () => smoother.kill()
    },
    { scope: wurzel }
  )

  return (
    <div ref={wurzel}>
      {/* Alles Fixierte liegt AUSSERHALB von #smooth-wrapper. ScrollSmoother
          transformiert den Content — `position: fixed` wanderte darin mit. */}
      <a className="sprungmarke" href="#inhalt">
        Zum Inhalt springen
      </a>

      <div className="fortschritt" aria-hidden="true">
        <div className="fortschritt__fuellung" />
      </div>

      {kopf}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main id="inhalt">{children}</main>
          {fuss}
        </div>
      </div>
    </div>
  )
}

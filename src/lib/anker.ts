import { ScrollSmoother, reduziert } from './motion'

/**
 * Springt zu einem Anker — ueber ScrollSmoother, wenn er laeuft.
 *
 * Ein normales `scrollIntoView` griffe am Smoother vorbei: der verschiebt den
 * Inhalt per Transform, sodass die native Scrollposition eines Elements nicht
 * mehr dort liegt, wo es sichtbar ist.
 *
 * Bewusst in einem eigenen Modul und nicht neben der Kopf-Komponente: eine
 * Datei, die sowohl eine Komponente als auch etwas anderes exportiert, faellt
 * beim Fast Refresh auf ein volles Neuladen zurueck.
 */
export function zuAnker(anker: string) {
  const ziel = document.querySelector(anker)
  if (!ziel) return

  const smoother = ScrollSmoother.get()
  if (smoother) smoother.scrollTo(ziel, true, 'top 90px')
  else ziel.scrollIntoView({ behavior: reduziert() ? 'auto' : 'smooth' })
}

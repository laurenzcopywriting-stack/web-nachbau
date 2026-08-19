import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

export { gsap, ScrollTrigger, ScrollSmoother }

/**
 * Liest die Systemeinstellung fuer reduzierte Bewegung.
 *
 * Wird bei jedem Aufruf frisch gelesen statt einmal in ein Modul-Level-Const
 * geschrieben: die Einstellung kann sich zur Laufzeit aendern, und ein
 * eingefrorener Wert wuerde dann bis zum naechsten Reload falsch bleiben.
 */
export function reduziert(): boolean {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

/** Die zentrale Ease-Sprache. Sonst driftet jede Sektion in ihr eigenes Gefuehl. */
export const EASE = {
  /* Der Auftritt: schnell heraus, weich aus. Traegt die maskierten Woerter. */
  auftritt: 'expo.out',
  /* Der Normalfall fuer Text und Karten. */
  weich: 'power2.out',
  /* Der Abgang. Spiegelbild von `weich`. */
  ab: 'power2.in',
  /* Fuer beidseitige Bewegungen (Balken, Akkordeon). */
  beide: 'power2.inOut',
} as const

export const DAUER = {
  kurz: 0.42,
  mittel: 0.72,
  lang: 1.05,
} as const

/**
 * Zerlegt einen Satz in Woerter fuer die Maskenanimation.
 *
 * Leerzeichen bleiben am Wort haengen (`w + ' '`), damit der Zeilenumbruch im
 * Fliesstext natuerlich faellt — bei getrennten Leerzeichen-Spans bricht der
 * Browser sonst mitten zwischen Wort und Abstand um.
 */
export function inWoerter(text: string): string[] {
  return text.split(/\s+/).filter(Boolean)
}

/**
 * Formatiert einen Zaehlerwert deutsch, inkl. Suffix ("500+", "5.000+").
 */
export function zahlSchreiben(el: HTMLElement, wert: number): void {
  const nachkomma = Number(el.dataset.nachkomma ?? 0)
  el.textContent =
    wert.toLocaleString('de-DE', {
      minimumFractionDigits: nachkomma,
      maximumFractionDigits: nachkomma,
    }) + (el.dataset.suffix ?? '')
}

/**
 * Die Standard-Einblendung: Element faehrt leicht von unten herein.
 *
 * `once: true` statt eines Toggles — Inhalte, die beim Zurueckscrollen wieder
 * verschwinden, wirken auf einer Verkaufsseite wie ein Fehler.
 */
export function einblenden(
  ziele: gsap.TweenTarget,
  optionen: { versatz?: number; verzug?: number; ausloeser?: Element | string } = {}
): gsap.core.Tween | undefined {
  const liste = gsap.utils.toArray<Element>(ziele)
  if (!liste.length) return

  return gsap.from(liste, {
    opacity: 0,
    y: 26,
    duration: DAUER.mittel,
    ease: EASE.weich,
    stagger: optionen.versatz ?? 0.09,
    delay: optionen.verzug ?? 0,
    scrollTrigger: {
      trigger: optionen.ausloeser ?? liste[0],
      start: 'top 86%',
      once: true,
    },
  })
}

/**
 * Maskierte Wortenthuellung fuer eine Ueberschrift.
 *
 * fromTo statt from: den Startwert kann GSAP nicht aus dem CSS lesen, weil
 * getComputedStyle Transforms als Pixel-Matrix zurueckgibt — die
 * Prozent-Information geht dabei verloren.
 */
export function woerterEnthuellen(
  behaelter: Element | string,
  optionen: { start?: string; verzug?: number; scrub?: boolean } = {}
): gsap.core.Tween | undefined {
  const wurzel =
    typeof behaelter === 'string' ? document.querySelector(behaelter) : behaelter
  if (!wurzel) return

  const woerter = wurzel.querySelectorAll('.wort')
  if (!woerter.length) return

  return gsap.fromTo(
    woerter,
    { yPercent: 108 },
    {
      yPercent: 0,
      duration: DAUER.lang,
      ease: EASE.auftritt,
      stagger: 0.055,
      delay: optionen.verzug ?? 0,
      scrollTrigger: {
        trigger: wurzel,
        start: optionen.start ?? 'top 88%',
        once: true,
      },
    }
  )
}

/**
 * Selektor fuer zaehlbare Kennzahlen.
 *
 * Bewusst ueber `[data-wert]` und nicht ueber die Klasse: feste Angaben wie
 * "24/7" tragen dieselbe Klasse fuers Aussehen, haben aber keinen Zielwert.
 * Ohne dieses Attribut im Selektor wuerde der Zaehler sie auf "0" schreiben.
 */
const ZAEHLBAR = '.zahl__wert[data-wert]'

/** Laesst alle Kennzahlen der Szene beim Hereinscrollen hochzaehlen. */
export function zahlenZaehlen(wurzel: Element | Document = document): void {
  wurzel.querySelectorAll<HTMLElement>(ZAEHLBAR).forEach((el) => {
    const zaehler = { v: 0 }
    gsap.to(zaehler, {
      v: Number(el.dataset.wert ?? 0),
      duration: 1.7,
      ease: EASE.weich,
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      onUpdate: () => zahlSchreiben(el, zaehler.v),
    })
  })
}

/**
 * Setzt eine Szene ohne Animation auf ihren Endzustand.
 *
 * Der Weg fuer `prefers-reduced-motion`. Ohne das blieben maskierte Woerter
 * auf yPercent 108 stehen und Zaehler auf 0 — der Inhalt waere ausgerechnet
 * fuer die Nutzer weg, die reduzierte Bewegung eingestellt haben.
 */
export function szeneSetzen(wurzel: Element | Document = document): void {
  gsap.set(wurzel.querySelectorAll('.wort'), { yPercent: 0, opacity: 1 })
  gsap.set(wurzel.querySelectorAll('[data-enthuellen]'), { opacity: 1, y: 0 })

  wurzel.querySelectorAll<HTMLElement>(ZAEHLBAR).forEach((el) => {
    zahlSchreiben(el, Number(el.dataset.wert ?? 0))
  })
}

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import {
  gsap,
  einblenden,
  woerterEnthuellen,
  szeneSetzen,
  reduziert,
  zahlenZaehlen,
  EASE,
  DAUER,
} from '../lib/motion'
import { MaskenTitel } from '../components/Text'
import { Knopf } from '../components/Knopf'
import { Bild } from '../components/Bild'
import { Kennzahlen } from '../components/Zahlen'
import { Laufband } from '../components/Laufband'
import { Haken, Formular } from '../components/ArlBausteine'
import {
  HERO,
  KENNZAHLEN,
  BERICHTE,
  ABLAUF,
  VORTEILE,
  FORMULAR,
  EIGNUNG,
  WUNDER,
  GUDRUN,
} from '../inhalte/akaInfobroschuere'

export function AkaInfobroschuere() {
  const wurzel = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (reduziert()) {
        szeneSetzen(wurzel.current ?? document)
        return
      }

      gsap
        .timeline({ delay: 0.12 })
        .fromTo(
          '.hero__titel .wort',
          { yPercent: 108 },
          { yPercent: 0, duration: DAUER.lang, ease: EASE.auftritt, stagger: 0.05 }
        )
        .fromTo(
          '.hero__kicker, .hero__text, .hero__aktion',
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: DAUER.mittel, ease: EASE.weich, stagger: 0.1 },
          '-=0.7'
        )
        .fromTo(
          '.hero__bild',
          { opacity: 0, scale: 1.05 },
          { opacity: 1, scale: 1, duration: 1.15, ease: EASE.weich },
          0.15
        )

      zahlenZaehlen(wurzel.current ?? document)
      einblenden('.zahl', { ausloeser: '.zahlen', versatz: 0.1 })

      woerterEnthuellen('.ablauf__titel')
      einblenden('.ablauf__punkt', { ausloeser: '.ablauf', versatz: 0.09 })
      woerterEnthuellen('.vorteile__titel')
      einblenden('.vorteile .karte', { ausloeser: '.vorteile__raster', versatz: 0.08 })
      woerterEnthuellen('.formular__titel')
      einblenden('.formular__text, .formular', { ausloeser: '.anmeldung' })
      woerterEnthuellen('.eignung__titel')
      einblenden('.eignung__spalte', { ausloeser: '.eignung', versatz: 0.14 })
      woerterEnthuellen('.wunder__titel')
      einblenden('.stimme', { ausloeser: '.stimmen__raster', versatz: 0.1 })
      woerterEnthuellen('.vorstellung__name')
      einblenden('.vorstellung__text, .vorstellung__liste li, .vorstellung__aktion, .vorstellung .bild', {
        ausloeser: '.vorstellung',
        versatz: 0.06,
      })
    },
    { scope: wurzel }
  )

  return (
    <div ref={wurzel} className="seite seite--akademie">
      {/* ---------------- Hero ---------------- */}
      <section className="hero">
        <div className="huelle hero__innen">
          <div>
            <span className="kicker hero__kicker">{HERO.kicker}</span>
            <MaskenTitel as="h1" segmente={[{ text: HERO.titel }]} className="hero__titel h1" />
            <p className="lead hero__text">{HERO.text}</p>
            <div className="hero__aktion">
              <Knopf ton="primaer" href={HERO.knopf.href}>
                {HERO.knopf.label}
              </Knopf>
            </div>
          </div>
          <Bild
            quelle={HERO.bild.quelle}
            alt={HERO.bild.alt}
            verhaeltnis="1 / 1"
            className="hero__bild"
            sofort
          />
        </div>
      </section>

      {/* ---------------- Kennzahlen ---------------- */}
      <section className="band-zahlen">
        <div className="huelle">
          <Kennzahlen zahlen={KENNZAHLEN} />
        </div>
      </section>

      {/* ---------------- Berichte ---------------- */}
      <section className="sektion--eng" id="testimonials">
        <Laufband eintraege={BERICHTE} tempo={45} />
      </section>

      {/* ---------------- Ablauf ---------------- */}
      <section className="sektion--eng">
        <div className="huelle mitte">
          <MaskenTitel segmente={[{ text: ABLAUF.titel }]} className="ablauf__titel abschnitt__titel h2" />
        </div>
        <div className="huelle ablauf">
          {ABLAUF.punkte.map((p, i) => (
            <article className="ablauf__punkt" key={p.titel}>
              <span className="ablauf__num" aria-hidden="true">
                {i + 1}
              </span>
              <div>
                <h3>{p.titel}</h3>
                <p>{p.text}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="huelle mitte" style={{ marginTop: 'clamp(28px, 4vw, 44px)' }}>
          <Knopf ton="primaer" href={ABLAUF.knopf.href}>
            {ABLAUF.knopf.label}
          </Knopf>
        </div>
      </section>

      {/* ---------------- Vorteile ---------------- */}
      <section className="sektion vorteile" id="tools">
        <div className="huelle mitte">
          <MaskenTitel segmente={[{ text: VORTEILE.titel }]} className="vorteile__titel abschnitt__titel h2" />
        </div>
        <div className="huelle karten vorteile__raster">
          {VORTEILE.karten.map((k) => (
            <article className="karte" key={k.titel}>
              <h3 className="h4">{k.titel}</h3>
              <p>{k.text}</p>
            </article>
          ))}
        </div>
        <div className="huelle mitte" style={{ marginTop: 'clamp(26px, 4vw, 40px)' }}>
          <p className="h3">{VORTEILE.kurzzitat.text}</p>
          <p className="klein">{VORTEILE.kurzzitat.name}</p>
          <p className="klein" style={{ marginTop: 18, fontWeight: 700 }}>
            {VORTEILE.vertrauen}
          </p>
        </div>
      </section>

      {/* ---------------- Anmeldung ---------------- */}
      <section className="sektion anmeldung auf-dunkel" id="formular">
        <div className="huelle geteilt">
          <div className="geteilt__text">
            <MaskenTitel segmente={[{ text: FORMULAR.titel }]} className="formular__titel h2" />
            <p className="lead formular__text">{FORMULAR.text}</p>
          </div>
          <Formular />
        </div>
      </section>

      {/* ---------------- Eignung ---------------- */}
      <section className="sektion">
        <div className="huelle mitte">
          <MaskenTitel segmente={[{ text: EIGNUNG.titel }]} className="eignung__titel abschnitt__titel h2" />
          <p className="lead" style={{ marginBottom: 'clamp(26px, 4vw, 40px)' }}>
            {EIGNUNG.vorspann}
          </p>
        </div>
        <div className="huelle eignung">
          <div className="eignung__spalte eignung__spalte--nein">
            <h3 className="h4">{EIGNUNG.nein.titel}</h3>
            <ul className="eignung__liste">
              {EIGNUNG.nein.punkte.map((p) => (
                <li key={p}>
                  <span className="eignung__zeichen" aria-hidden="true">
                    ✕
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="eignung__spalte eignung__spalte--ja">
            <h3 className="h4">{EIGNUNG.ja.titel}</h3>
            <ul className="eignung__liste">
              {EIGNUNG.ja.punkte.map((p) => (
                <li key={p}>
                  <span className="eignung__zeichen" aria-hidden="true">
                    ✓
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------------- Wunder ---------------- */}
      <section className="sektion--eng">
        <div className="huelle mitte">
          <span className="kicker">{WUNDER.titelOben}</span>
          <MaskenTitel segmente={[{ text: WUNDER.titel }]} className="wunder__titel abschnitt__titel h2" />
        </div>
        <div className="huelle stimmen__raster">
          {WUNDER.stimmen.map((s) => (
            <figure className="stimme" key={s.name}>
              <blockquote className="stimme__text">{s.text}</blockquote>
              <figcaption className="stimme__person">
                <Bild
                  quelle={s.bild.quelle}
                  alt={s.bild.alt}
                  verhaeltnis="1 / 1"
                  className="stimme__bild"
                />
                <cite className="stimme__name">{s.name}</cite>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="huelle mitte" style={{ marginTop: 'clamp(28px, 4vw, 44px)' }}>
          <Knopf ton="primaer" href={WUNDER.knopf.href}>
            {WUNDER.knopf.label}
          </Knopf>
        </div>
      </section>

      {/* ---------------- Dr. Hasler ---------------- */}
      <section className="sektion" id="ueber-mich">
        <div className="huelle vorstellung">
          <Bild quelle={GUDRUN.bild.quelle} alt={GUDRUN.bild.alt} verhaeltnis="3 / 4" />
          <div>
            <MaskenTitel segmente={[{ text: GUDRUN.name }]} className="vorstellung__name h2" />
            {GUDRUN.absaetze.map((a, i) => (
              <p className="vorstellung__text" key={i}>
                {a}
              </p>
            ))}
            <p className="vorstellung__text" style={{ fontWeight: 700, marginTop: 20 }}>
              {GUDRUN.listeTitel}
            </p>
            <ul className="vorstellung__liste">
              {GUDRUN.liste.map((p) => (
                <li key={p}>
                  <Haken />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <div className="vorstellung__aktion">
              <Knopf ton="primaer" href={GUDRUN.knopf.href}>
                {GUDRUN.knopf.label}
              </Knopf>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

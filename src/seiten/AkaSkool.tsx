import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, einblenden, woerterEnthuellen, szeneSetzen, reduziert, EASE, DAUER } from '../lib/motion'
import { MaskenTitel } from '../components/Text'
import { Knopf } from '../components/Knopf'
import { Bild } from '../components/Bild'
import { Laufband } from '../components/Laufband'
import { Akkordeon } from '../components/Akkordeon'
import { Haken } from '../components/ArlBausteine'
import {
  HERO,
  BERICHTE,
  ZUGANG,
  VORTEILE,
  FUNKE,
  HEILUNG,
  FEUER,
  TOOLS,
  ABLAUF,
  GUDRUN,
  FAQ,
} from '../inhalte/akaSkool'

export function AkaSkool() {
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

      woerterEnthuellen('.vorteile__titel')
      einblenden('.vorteile .karte', { ausloeser: '.vorteile__raster', versatz: 0.1 })
      woerterEnthuellen('.funke__titel')
      einblenden('.funke__absatz, .funke .bild', { ausloeser: '.funke' })
      woerterEnthuellen('.heilung__titel')
      einblenden('.heilung__absatz, .heilung .bild', { ausloeser: '.heilung' })
      woerterEnthuellen('.feuer__titel')
      einblenden('.feuer__absatz, .feuer__zitat', { ausloeser: '.feuer' })
      woerterEnthuellen('.tools__titel')
      einblenden('.tools .karte', { ausloeser: '.tools__raster', versatz: 0.1 })
      woerterEnthuellen('.ablauf__titel')
      einblenden('.ablauf__punkt', { ausloeser: '.ablauf', versatz: 0.09 })
      woerterEnthuellen('.vorstellung__name')
      einblenden('.vorstellung__text, .vorstellung__liste li, .vorstellung__aktion, .vorstellung .bild', {
        ausloeser: '.vorstellung',
        versatz: 0.06,
      })
      woerterEnthuellen('.faq__titel')
      einblenden('.akkordeon__zeile', { ausloeser: '.akkordeon', versatz: 0.06 })
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

      {/* ---------------- Berichte als Endlosband ---------------- */}
      <section className="sektion--eng" id="testimonials">
        <Laufband eintraege={BERICHTE} />
        <div className="huelle mitte" style={{ marginTop: 'clamp(24px, 4vw, 40px)' }}>
          <Knopf ton="primaer" href={ZUGANG.href}>
            {ZUGANG.label}
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
        <div className="huelle mitte" style={{ marginTop: 'clamp(28px, 4vw, 44px)' }}>
          <Knopf ton="primaer" href={VORTEILE.knopf.href}>
            {VORTEILE.knopf.label}
          </Knopf>
        </div>
      </section>

      {/* ---------------- Funke ---------------- */}
      <section className="sektion--eng funke">
        <div className="huelle geteilt geteilt--bild-links">
          <Bild
            quelle={FUNKE.bild.quelle}
            alt={FUNKE.bild.alt}
            verhaeltnis="4 / 3"
            className="geteilt__bild"
          />
          <div className="geteilt__text">
            <MaskenTitel segmente={[{ text: FUNKE.titel }]} className="funke__titel h2" />
            {FUNKE.absaetze.map((a, i) => (
              <p className="funke__absatz" key={i}>
                {a}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Heilung ---------------- */}
      <section className="sektion--eng heilung">
        <div className="huelle geteilt">
          <div className="geteilt__text">
            <MaskenTitel segmente={[{ text: HEILUNG.titel }]} className="heilung__titel h2" />
            {HEILUNG.absaetze.map((a, i) => (
              <p className="heilung__absatz" key={i}>
                {a}
              </p>
            ))}
          </div>
          <Bild
            quelle={HEILUNG.bild.quelle}
            alt={HEILUNG.bild.alt}
            verhaeltnis="1 / 1"
            className="geteilt__bild"
          />
        </div>
      </section>

      {/* ---------------- Feuer ---------------- */}
      <section className="sektion--eng feuer auf-primaer">
        <div className="huelle huelle--schmal mitte">
          <MaskenTitel segmente={[{ text: FEUER.titel }]} className="feuer__titel h2" />
          {FEUER.absaetze.map((a, i) => (
            <p className="lead feuer__absatz" key={i} style={{ marginTop: 14 }}>
              {a}
            </p>
          ))}
          <blockquote className="feuer__zitat" style={{ marginTop: 'clamp(26px, 4vw, 40px)' }}>
            <p>{FEUER.zitat.text}</p>
            <cite className="klein">{FEUER.zitat.name}</cite>
          </blockquote>
        </div>
      </section>

      {/* ---------------- Tools ---------------- */}
      <section className="sektion tools">
        <div className="huelle mitte">
          <MaskenTitel segmente={[{ text: TOOLS.titel }]} className="tools__titel abschnitt__titel h2" />
        </div>
        <div className="huelle karten tools__raster">
          {TOOLS.karten.map((k) => (
            <article className="karte karte--bild" key={k.titel}>
              <Bild quelle={k.bild.quelle} alt={k.bild.alt} verhaeltnis="4 / 3" />
              <div className="karte__text">
                <h3 className="h4">{k.titel}</h3>
                <p>{k.text}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="huelle mitte" style={{ marginTop: 'clamp(28px, 4vw, 44px)' }}>
          <Knopf ton="primaer" href={TOOLS.knopf.href}>
            {TOOLS.knopf.label}
          </Knopf>
        </div>
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
      </section>

      {/* ---------------- Dr. Hasler ---------------- */}
      <section className="sektion vorstellung-sektion" id="ueber-mich">
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

      {/* ---------------- FAQ ---------------- */}
      <section className="sektion faq">
        <div className="huelle huelle--schmal">
          <MaskenTitel segmente={[{ text: FAQ.titel }]} className="faq__titel abschnitt__titel h2" />
          <p className="lead" style={{ marginBottom: 'clamp(24px, 4vw, 36px)' }}>
            {FAQ.vorspann}
          </p>
          <Akkordeon fragen={FAQ.fragen} />
        </div>
      </section>
    </div>
  )
}

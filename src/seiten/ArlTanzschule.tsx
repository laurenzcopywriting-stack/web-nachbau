import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, einblenden, woerterEnthuellen, szeneSetzen, reduziert, EASE, DAUER } from '../lib/motion'
import { MaskenTitel } from '../components/Text'
import { Knopf } from '../components/Knopf'
import { Bild } from '../components/Bild'
import { Akkordeon } from '../components/Akkordeon'
import { Haken, Formular } from '../components/ArlBausteine'
import { pfad } from '../lib/pfad'
import {
  HERO,
  GRUENDE,
  NUTZEN,
  BANNER_OBEN,
  ELEMENT,
  STIMMEN,
  WARUM,
  PERSON,
  BANNER_UNTEN,
  LEISTUNGEN,
  ABLAUF,
  KONTAKT,
  FAQ,
} from '../inhalte/arlTanzschule'

export function ArlTanzschule() {
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
          { yPercent: 0, duration: DAUER.lang, ease: EASE.auftritt, stagger: 0.045 }
        )
        .fromTo(
          '.hero__kicker, .hero__text, .hero__aktion, .hero__beleg',
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: DAUER.mittel, ease: EASE.weich, stagger: 0.1 },
          '-=0.7'
        )
        .fromTo(
          '.hero__bild',
          { opacity: 0, x: 40 },
          { opacity: 1, x: 0, duration: 1.1, ease: EASE.weich },
          0.15
        )

      woerterEnthuellen('.gruende__titel')
      einblenden('.grund', { ausloeser: '.gruende__raster', versatz: 0.1 })
      einblenden('.nutzen', { ausloeser: '.nutzen__raster', versatz: 0.12 })
      woerterEnthuellen('.banner--oben .masken-titel')

      woerterEnthuellen('.element__titel')
      einblenden('.element__absatz', { ausloeser: '.element', versatz: 0.07 })

      einblenden('.stimme, .stimme--zweite', { ausloeser: '.stimmen' })
      woerterEnthuellen('.warum__titel')
      einblenden('.warum .grund', { ausloeser: '.warum__raster', versatz: 0.1 })

      woerterEnthuellen('.person__titel')
      einblenden('.rolle', { ausloeser: '.person__rollen', versatz: 0.12 })
      einblenden('.person__bild', { ausloeser: '.person__innen' })

      woerterEnthuellen('.banner--unten .masken-titel')
      woerterEnthuellen('.leistungen__titel')
      einblenden('.leistung', { ausloeser: '.leistungen__raster', versatz: 0.09 })

      woerterEnthuellen('.ablauf__titel')
      einblenden('.ablauf__punkt', { ausloeser: '.ablauf__liste', versatz: 0.09 })
      woerterEnthuellen('.kontakt__titel')
      einblenden('.kontakt__wege, .formular', { ausloeser: '.kontakt' })
      woerterEnthuellen('.faq__titel')
      einblenden('.akkordeon__zeile', { ausloeser: '.akkordeon', versatz: 0.06 })

      wurzel.current?.querySelectorAll<HTMLElement>('[data-parallaxe]').forEach((el) => {
        el.dataset.speed = String(1 + Number(el.dataset.parallaxe) * 0.1)
      })
    },
    { scope: wurzel }
  )

  return (
    <div ref={wurzel} className="seite seite--arl">
      {/* ---------------- Hero ---------------- */}
      <section className="hero" id="oben">
        <div className="huelle hero__innen">
          <div>
            <span className="kicker hero__kicker">{HERO.kicker}</span>
            <p className="h3 hero__oben">{HERO.titelOben}</p>
            <MaskenTitel as="h1" segmente={[{ text: HERO.titel }]} className="hero__titel h1" />
            <p className="lead hero__text">{HERO.text}</p>
            <div className="hero__aktion">
              <Knopf ton="akzent" href={HERO.knopf.href}>
                {HERO.knopf.label}
              </Knopf>
            </div>
            <div className="hero__beleg">
              {HERO.belege.map((b) => (
                <a key={b.quelle} href={HERO.belegLink} target="_blank" rel="noopener noreferrer">
                  <img src={pfad(b.quelle)} alt={b.alt} />
                </a>
              ))}
              <a
                className="hero__zaehler"
                href={HERO.belegLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {HERO.belegText}
              </a>
            </div>
          </div>
          <Bild
            quelle={HERO.bild.quelle}
            alt={HERO.bild.alt}
            verhaeltnis="3 / 4"
            className="hero__bild"
            sofort
          />
        </div>
      </section>

      {/* ---------------- Gründe ---------------- */}
      <section className="sektion gruende" id="vorteile">
        <div className="huelle mitte">
          <MaskenTitel segmente={[{ text: GRUENDE.titel }]} className="gruende__titel h2" />
        </div>
        <div className="huelle gruende__raster">
          {GRUENDE.karten.map((k) => (
            <article className="grund" key={k.titel}>
              <span className="grund__num">{k.marke}</span>
              <h3 className="h4">{k.titel}</h3>
              <p>{k.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ---------------- Nutzen ---------------- */}
      <section className="sektion--eng">
        <div className="huelle nutzen__raster">
          {NUTZEN.map((n) => (
            <article className="nutzen" key={n.titel}>
              <h3 className="h3">{n.titel}</h3>
              <p>{n.text}</p>
              <ul className="nutzen__punkte">
                {n.punkte.map((p) => (
                  <li key={p}>
                    <Haken />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* ---------------- Banner oben ---------------- */}
      <section className="sektion--eng">
        <div className="huelle">
          <div className="banner banner--oben auf-primaer">
            <MaskenTitel segmente={[{ text: BANNER_OBEN.titel }]} className="banner__titel h2" />
            <Knopf ton="akzent" href={BANNER_OBEN.knopf.href}>
              {BANNER_OBEN.knopf.label}
            </Knopf>
          </div>
        </div>
      </section>

      {/* ---------------- Das unterschätzte Element ---------------- */}
      <section className="sektion element">
        <div className="huelle huelle--schmal">
          <span className="kicker">{ELEMENT.kicker}</span>
          <MaskenTitel segmente={[{ text: ELEMENT.titel }]} className="element__titel h2" />
          <p className="lead element__absatz">{ELEMENT.vorspann}</p>
          {ELEMENT.absaetze.map((a, i) => (
            <p className="element__absatz" key={i}>
              {a}
            </p>
          ))}
        </div>
      </section>

      {/* ---------------- Stimmen ---------------- */}
      <section className="sektion--eng stimmen">
        <div className="huelle">
          <p className="kicker">{STIMMEN.marke}</p>
          <figure className="stimme stimme--gross">
            <blockquote>
              <p className="kicker">{STIMMEN.haupt.kicker}</p>
              <p className="h3">{STIMMEN.haupt.ueberschrift}</p>
              <p className="stimme__text">{STIMMEN.haupt.text}</p>
              <cite className="stimme__name">
                {STIMMEN.haupt.name} — {STIMMEN.haupt.rolle}
              </cite>
            </blockquote>
          </figure>

          <figure className="stimme stimme--zweite">
            <Bild
              quelle={STIMMEN.zweite.bild.quelle}
              alt={STIMMEN.zweite.bild.alt}
              verhaeltnis="1 / 1"
              className="stimme__bild"
            />
            <figcaption className="stimme__name">{STIMMEN.zweite.name}</figcaption>
          </figure>

          <p className="klein">{STIMMEN.hinweis}</p>
        </div>
      </section>

      {/* ---------------- Warum ---------------- */}
      <section className="sektion--eng warum">
        <div className="huelle mitte">
          <span className="kicker">{WARUM.kicker}</span>
          <MaskenTitel segmente={[{ text: WARUM.titel }]} className="warum__titel h2" />
        </div>
        <div className="huelle gruende__raster warum__raster">
          {WARUM.karten.map((k) => (
            <article className="grund" key={k.titel}>
              <span className="grund__num">{k.marke}</span>
              <h3 className="h4">{k.titel}</h3>
              <p>{k.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ---------------- Person ---------------- */}
      <section className="sektion person" id="ueber-mich">
        <div className="huelle mitte">
          <span className="kicker">{PERSON.kicker}</span>
          <MaskenTitel segmente={[{ text: PERSON.titel }]} className="person__titel h2" />
          <p className="lead">{PERSON.vorspann}</p>
        </div>
        <div className="huelle person__innen">
          <div className="person__rollen">
            {PERSON.rollen.map((r) => (
              <article className="rolle" key={r.name}>
                <h3 className="rolle__name">{r.name}</h3>
                <p>{r.text}</p>
              </article>
            ))}
          </div>
          <Bild
            quelle={PERSON.bild.quelle}
            alt={PERSON.bild.alt}
            verhaeltnis="1 / 1"
            className="person__bild"
            parallaxe={1.2}
          />
        </div>
      </section>

      {/* ---------------- Banner unten ---------------- */}
      <section className="sektion--eng">
        <div className="huelle">
          <div className="banner banner--unten auf-primaer">
            <MaskenTitel segmente={[{ text: BANNER_UNTEN.titel }]} className="banner__titel h2" />
            <Knopf ton="akzent" href={BANNER_UNTEN.knopf.href}>
              {BANNER_UNTEN.knopf.label}
            </Knopf>
          </div>
        </div>
      </section>

      {/* ---------------- Leistungen ---------------- */}
      <section className="sektion leistungen" id="leistungen">
        <div className="huelle">
          <MaskenTitel segmente={[{ text: LEISTUNGEN.titel }]} className="leistungen__titel h2" />
          <p className="lead leistungen__vorspann">{LEISTUNGEN.vorspann}</p>
        </div>
        <div className="huelle leistungen__raster">
          {LEISTUNGEN.karten.map((k) => (
            <article className="leistung" key={k.titel}>
              <Bild quelle={k.bild.quelle} alt={k.bild.alt} verhaeltnis="16 / 10" />
              <div className="leistung__text">
                <h3 className="h4">{k.titel}</h3>
                <p>{k.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ---------------- Ablauf ---------------- */}
      <section className="sektion--eng ablauf">
        <div className="huelle">
          <MaskenTitel segmente={[{ text: ABLAUF.titel }]} className="ablauf__titel h2" />
          <p className="lead ablauf__vorspann">{ABLAUF.vorspann}</p>
          <ol className="ablauf__liste">
            {ABLAUF.punkte.map((p) => (
              <li className="ablauf__punkt" key={p}>
                <span>{p}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------------- Kontakt ---------------- */}
      <section className="sektion kontakt auf-dunkel" id="formular">
        <div className="huelle kontakt__innen">
          <div>
            <MaskenTitel segmente={[{ text: KONTAKT.titel }]} className="kontakt__titel h2" />
            <p className="lead">{KONTAKT.vorspann}</p>
            <div className="kontakt__wege">
              <div className="kontakt__weg">
                <span>Telefonnummer</span>
                <a href="tel:+491716243148">+49 171 6243148</a>
              </div>
              <div className="kontakt__weg">
                <span>Meine E-Mail</span>
                <a href="mailto:laurenz.copywriting@gmail.com">laurenz.copywriting@gmail.com</a>
              </div>
            </div>
          </div>
          <Formular />
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="sektion faq">
        <div className="huelle huelle--schmal">
          <MaskenTitel segmente={[{ text: FAQ.titel }]} className="faq__titel h2" />
          <Akkordeon fragen={FAQ.fragen} />
        </div>
      </section>
    </div>
  )
}

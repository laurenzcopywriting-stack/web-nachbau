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
import { Akkordeon } from '../components/Akkordeon'
import { Haken, Formular } from '../components/ArlBausteine'
import { pfad } from '../lib/pfad'
import {
  HERO,
  GRUENDE,
  NUTZEN,
  STIMME,
  BANNER_OBEN,
  LEISTE,
  WARUM,
  PERSON,
  NETZWERK,
  LEISTUNGEN,
  ABLAUF,
  KONTAKT,
  FAQ,
  BANNER_UNTEN,
} from '../inhalte/arlKiAgenturen'

export function ArlKiAgenturen() {
  const wurzel = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (reduziert()) {
        szeneSetzen(wurzel.current ?? document)
        return
      }

      /* --- Einstieg -------------------------------------------------------
         Ohne ScrollTrigger, weil der Hero beim Laden schon sichtbar ist. */
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

      /* --- Abschnitte ------------------------------------------------------ */
      woerterEnthuellen('.gruende__titel')
      einblenden('.grund', { ausloeser: '.gruende__raster', versatz: 0.1 })
      einblenden('.nutzen', { ausloeser: '.nutzen__raster', versatz: 0.12 })
      einblenden('.stimme', { ausloeser: '.stimme' })
      woerterEnthuellen('.banner--oben .masken-titel')

      /* --- Zeitleiste ------------------------------------------------------
         Der Faden fuellt sich, waehrend die Sektion durchlaeuft. */
      woerterEnthuellen('.leiste__titel')
      einblenden('.leiste__kicker, .leiste__vorspann', { ausloeser: '.leiste' })
      einblenden('.schritt', { ausloeser: '.leiste__spur', versatz: 0.14 })

      gsap.fromTo(
        '.leiste__fuellung',
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: '.leiste__spur',
            start: 'top 72%',
            end: 'bottom 78%',
            scrub: 0.7,
          },
        }
      )

      woerterEnthuellen('.warum__titel')
      einblenden('.warum .grund', { ausloeser: '.warum__raster', versatz: 0.1 })

      /* --- Person ----------------------------------------------------------- */
      woerterEnthuellen('.person__titel')
      einblenden('.rolle', { ausloeser: '.person__rollen', versatz: 0.12 })
      einblenden('.person__bild, .person__name', { ausloeser: '.person__innen' })

      /* --- Netzwerk und Leistungen ------------------------------------------ */
      woerterEnthuellen('.netzwerk__titel')
      zahlenZaehlen(wurzel.current ?? document)
      einblenden('.zahl', { ausloeser: '.zahlen', versatz: 0.1 })

      woerterEnthuellen('.leistungen__titel')
      einblenden('.leistung', { ausloeser: '.leistungen__raster', versatz: 0.09 })

      /* --- Ablauf, Kontakt, FAQ ---------------------------------------------- */
      woerterEnthuellen('.ablauf__titel')
      einblenden('.ablauf__punkt', { ausloeser: '.ablauf__liste', versatz: 0.09 })
      woerterEnthuellen('.kontakt__titel')
      einblenden('.kontakt__punkte, .kontakt__wege, .formular', { ausloeser: '.kontakt' })
      woerterEnthuellen('.faq__titel')
      einblenden('.akkordeon__zeile', { ausloeser: '.akkordeon', versatz: 0.06 })
      woerterEnthuellen('.banner--unten .masken-titel')

      /* --- Parallaxe --------------------------------------------------------
         ScrollSmoother liest `data-speed`; hier bleibt nur die Zuweisung. */
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
            <MaskenTitel as="h1" segmente={[{ text: HERO.titel }]} className="hero__titel h1" />
            <p className="lead hero__text">{HERO.text}</p>
            <div className="hero__aktion">
              <Knopf ton="akzent" href={HERO.knopf.href}>
                {HERO.knopf.label}
              </Knopf>
              <span className="hero__zaehler">{HERO.zaehler}</span>
            </div>
            <div className="hero__beleg">
              {HERO.belege.map((b) => (
                <a key={b.quelle} href={HERO.belegLink} target="_blank" rel="noopener noreferrer">
                  <img src={pfad(b.quelle)} alt={b.alt} />
                </a>
              ))}
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

      {/* ---------------- Stimme ---------------- */}
      <section className="sektion--eng">
        <div className="huelle">
          <figure className="stimme">
            <Bild
              quelle={STIMME.bild.quelle}
              alt={STIMME.bild.alt}
              verhaeltnis="1 / 1"
              className="stimme__bild"
            />
            <blockquote>
              <p className="stimme__text">{STIMME.text}</p>
              <cite className="stimme__name">{STIMME.name}</cite>
            </blockquote>
          </figure>
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

      {/* ---------------- Zeitleiste ---------------- */}
      <section className="sektion leiste">
        <div className="huelle">
          <span className="kicker leiste__kicker">{LEISTE.kicker}</span>
          <MaskenTitel segmente={[{ text: LEISTE.titel }]} className="leiste__titel h2" />
          <p className="lead leiste__vorspann">{LEISTE.vorspann}</p>

          <div className="leiste__spur">
            <div className="leiste__faden" aria-hidden="true">
              <span className="leiste__fuellung" />
            </div>
            {LEISTE.schritte.map((s, i) => (
              <article className="schritt" key={s.titel}>
                <span className="schritt__num" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="grund__num">{s.marke}</span>
                <h3 className="h3">{s.titel}</h3>
                {s.absaetze.map((a, j) => (
                  <p key={j}>{a}</p>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Warum jetzt ---------------- */}
      <section className="sektion--eng warum">
        <div className="huelle mitte">
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
          <MaskenTitel segmente={[{ text: PERSON.titel }]} className="person__titel h2" />
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
          <div>
            <Bild
              quelle={PERSON.bild.quelle}
              alt={PERSON.bild.alt}
              verhaeltnis="1 / 1"
              className="person__bild"
              parallaxe={1.2}
            />
            <p className="person__name">
              {PERSON.vorname}
              <span className="person__nachname">{PERSON.nachname}</span>
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- Netzwerk ---------------- */}
      <section className="sektion--eng netzwerk auf-dunkel">
        <div className="huelle mitte">
          <MaskenTitel segmente={[{ text: NETZWERK.titel }]} className="netzwerk__titel h2" />
          <p className="lead netzwerk__vorspann">{NETZWERK.vorspann}</p>
          <Kennzahlen zahlen={NETZWERK.zahlen} ton="dunkel" />
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

      {/* ---------------- Kontakt und Formular ---------------- */}
      <section className="sektion kontakt auf-dunkel" id="formular">
        <div className="huelle kontakt__innen">
          <div>
            <MaskenTitel segmente={[{ text: KONTAKT.titel }]} className="kontakt__titel h2" />
            <p className="lead">{KONTAKT.vorspann}</p>
            <ul className="kontakt__punkte">
              {KONTAKT.punkte.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <KontaktWege />
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
    </div>
  )
}

function KontaktWege() {
  return (
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
  )
}

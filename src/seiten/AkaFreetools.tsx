import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, einblenden, woerterEnthuellen, szeneSetzen, reduziert, EASE, DAUER } from '../lib/motion'
import { MaskenTitel } from '../components/Text'
import { Knopf } from '../components/Knopf'
import { VideoEinbettung } from '../components/VideoEinbettung'
import { zuAnker } from '../lib/anker'
import { HERO, VERZEICHNIS, KAPITEL, ERFAHRUNGEN, ABSCHLUSS, type Block } from '../inhalte/akaFreetools'

/** Setzt einen Textbaustein des Kapitels. */
function Baustein({ block }: { block: Block }) {
  switch (block.art) {
    case 'h3':
      return <h3>{block.text}</h3>
    case 'h4':
      return <h4>{block.text}</h4>
    case 'ul':
      return (
        <ul>
          {block.punkte.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      )
    case 'ol':
      return (
        <ol>
          {block.punkte.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ol>
      )
    case 'hinweis':
      return <p className="kapitel__hinweis">{block.text}</p>
    default:
      return <p>{block.text}</p>
  }
}

export function AkaFreetools() {
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
          '.broschuere__hero .wort',
          { yPercent: 108 },
          { yPercent: 0, duration: DAUER.lang, ease: EASE.auftritt, stagger: 0.05 }
        )
        .fromTo(
          '.broschuere__hero .kicker, .broschuere__hero .lead, .broschuere__hero .hero__aktion, .broschuere__cue',
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: DAUER.mittel, ease: EASE.weich, stagger: 0.1 },
          '-=0.65'
        )

      woerterEnthuellen('.inhalt__titel-gross')
      einblenden('.inhalt__eintrag', { ausloeser: '.inhalt__liste', versatz: 0.05 })

      /* Jedes Kapitel bringt sich beim Hereinscrollen selbst herein. Eine
         Schleife statt einer Sammelregel, damit der Versatz je Kapitel neu
         beginnt und nicht ueber die ganze Seite hinweg laeuft. */
      gsap.utils.toArray<HTMLElement>('.kapitel').forEach((kapitel) => {
        woerterEnthuellen(kapitel.querySelector('.masken-titel') as Element)
        einblenden(kapitel.querySelectorAll('.kapitel__kopf > *, .kapitel__text > *'), {
          ausloeser: kapitel,
          versatz: 0.04,
        })
        einblenden(kapitel.querySelectorAll('.kapitel__zitat, .kapitel__medien'), {
          ausloeser: kapitel,
        })
      })

      woerterEnthuellen('.abschluss__titel')
      einblenden('.abschluss__absatz, .abschluss__aktion', { ausloeser: '.abschluss' })
    },
    { scope: wurzel }
  )

  return (
    <div ref={wurzel} className="seite seite--broschuere">
      {/* ---------------- Hero ---------------- */}
      <section className="broschuere__hero auf-dunkel">
        <div className="huelle">
          <span className="kicker">{HERO.kicker}</span>
          <MaskenTitel
            as="h1"
            segmente={[{ text: HERO.marke }]}
            className="broschuere__marke display"
          />
          <p className="h3">{HERO.unterzeile}</p>
          <p className="lead" style={{ marginTop: 20 }}>
            {HERO.text}
          </p>
          <div className="hero__aktion" style={{ justifyContent: 'center' }}>
            <Knopf ton="akzent" beiKlick={() => zuAnker('#inhalt-verzeichnis')}>
              {HERO.knopf.label}
            </Knopf>
          </div>
          <p className="broschuere__cue">{HERO.cue}</p>
        </div>
      </section>

      {/* ---------------- Inhaltsverzeichnis ---------------- */}
      <section className="sektion" id="inhalt-verzeichnis">
        <div className="huelle mitte">
          <span className="kicker">{VERZEICHNIS.kicker}</span>
          <MaskenTitel
            segmente={[{ text: VERZEICHNIS.titel }]}
            className="inhalt__titel-gross abschnitt__titel h2"
          />
        </div>
        <div className="huelle inhalt__liste">
          {VERZEICHNIS.eintraege.map((e, i) => (
            <a className="inhalt__eintrag" href={`#kapitel-${i + 1}`} key={e.num}>
              <span className="inhalt__num">{e.num}</span>
              <span className="inhalt__titel">
                {e.titel}
                <span className="inhalt__unter">{e.unter}</span>
              </span>
              {e.werkzeug && <span className="inhalt__werkzeug">{e.werkzeug}</span>}
            </a>
          ))}
        </div>
      </section>

      {/* ---------------- Kapitel ---------------- */}
      {KAPITEL.map((k) => (
        <section className="kapitel" id={k.id} key={k.id}>
          <div className="huelle">
            <div className="kapitel__kopf">
              <span className="kapitel__num" aria-hidden="true">
                {k.num}
              </span>
              <span className="kapitel__marke">Kapitel {Number(k.num)}</span>
              {k.werkzeug && <span className="kapitel__werkzeug">{k.werkzeug}</span>}
            </div>

            <MaskenTitel segmente={[{ text: k.titel }]} className="kapitel__titel h2" />

            <div className="kapitel__text">
              {k.bloecke.map((b, i) => (
                <Baustein block={b} key={i} />
              ))}
            </div>

            {k.videos && (
              <div className="kapitel__medien">
                {k.videos.map((v) => (
                  <figure key={v.id}>
                    <VideoEinbettung
                      id={v.id}
                      titel={v.titel}
                      standbild={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                    />
                    <figcaption>{v.titel}</figcaption>
                  </figure>
                ))}
              </div>
            )}

            {k.zitat && <blockquote className="kapitel__zitat">{k.zitat}</blockquote>}

            {k.id === 'kapitel-9' && (
              <p style={{ marginTop: 26 }}>
                <a className="knopf knopf--umriss" href={ERFAHRUNGEN.href} target="_blank" rel="noopener noreferrer">
                  {ERFAHRUNGEN.label}
                </a>
              </p>
            )}
          </div>
        </section>
      ))}

      {/* ---------------- Abschluss ---------------- */}
      <section className="sektion abschluss auf-primaer">
        <div className="huelle huelle--schmal">
          <p className="kicker">{ABSCHLUSS.vorspann}</p>
          <MaskenTitel segmente={[{ text: ABSCHLUSS.titel }]} className="abschluss__titel h2" />
          {ABSCHLUSS.absaetze.map((a, i) => (
            <p className="lead abschluss__absatz" key={i} style={{ marginTop: 16 }}>
              {a}
            </p>
          ))}

          <h3 className="h3" style={{ marginTop: 34 }}>
            {ABSCHLUSS.unterTitel}
          </h3>
          {ABSCHLUSS.unterAbsaetze.map((a, i) => (
            <p className="lead abschluss__absatz" key={i} style={{ marginTop: 14 }}>
              {a}
            </p>
          ))}

          <div className="abschluss__aktion" style={{ marginTop: 30 }}>
            <Knopf ton="akzent" href={ABSCHLUSS.knopf.href}>
              {ABSCHLUSS.knopf.label}
            </Knopf>
          </div>

          <p className="klein" style={{ marginTop: 26 }}>
            {ABSCHLUSS.signatur}
          </p>
        </div>
      </section>
    </div>
  )
}

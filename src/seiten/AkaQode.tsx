import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, einblenden, szeneSetzen, reduziert, EASE, DAUER } from '../lib/motion'
import { MaskenTitel } from '../components/Text'
import { Knopf } from '../components/Knopf'
import { Bild } from '../components/Bild'
import { SCHRITTE, WEITER, ANSTOSS, type QodeSeite } from '../inhalte/akaQodes'

/**
 * Die drei Qode-Seiten teilen sich diese Komponente.
 *
 * Auf der Live-Seite ist es dieselbe Vorlage mit drei Fuellungen — hier
 * entsprechend ein Bauteil, das den jeweiligen Datensatz bekommt.
 */
export function AkaQode({ seite }: { seite: QodeSeite }) {
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
          '.qode__titel .wort',
          { yPercent: 108 },
          { yPercent: 0, duration: DAUER.lang, ease: EASE.auftritt, stagger: 0.05 }
        )
        .fromTo(
          '.qode__unterzeile',
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: DAUER.mittel, ease: EASE.weich },
          '-=0.6'
        )

      einblenden('.qode__schritt', { ausloeser: '.qode__schritte', versatz: 0.1 })
      einblenden('.qode__warnung, .qode__video, .qode__weiter', { ausloeser: '.qode__anleitung' })
    },
    { scope: wurzel }
  )

  return (
    <div ref={wurzel} className="seite seite--qode">
      <section className="qode">
        <div className="huelle huelle--schmal">
          <MaskenTitel as="h1" segmente={[{ text: seite.titel }]} className="qode__titel display" />
          <p className="lead qode__unterzeile">{seite.unterzeile}</p>

          <div className="qode__anleitung">
            <h2 className="h3 mitte">{seite.anleitungTitel}</h2>

            <div className="qode__schritte">
              {SCHRITTE.map((s) => (
                <article className="qode__schritt" key={s.titel}>
                  <h3>{s.titel}</h3>
                  <p>{s.text}</p>
                </article>
              ))}
            </div>

            <div className="qode__warnung">
              <strong>{seite.warnung.marke}</strong>
              <p>{seite.warnung.text}</p>
            </div>

            {/* Das Qode-Video selbst liegt nicht oeffentlich vor. Hier steht
                das Standbild der Live-Seite; siehe ABWEICHUNGEN.md. */}
            <div className="qode__video">
              <Bild
                quelle={seite.poster}
                alt={`Qode-Video ${seite.titel}`}
                verhaeltnis="16 / 6"
                notiz="Qode-Video (auf der Live-Seite eingebettet)"
              />
              <p className="qode__hinweis">{ANSTOSS}</p>
            </div>

            <div className="qode__weiter">
              <Knopf ton="primaer" href={WEITER.href}>
                {WEITER.label}
              </Knopf>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

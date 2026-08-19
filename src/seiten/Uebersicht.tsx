import { ROUTEN } from '../inhalte/gemeinsam'

/**
 * Die Wurzelseite.
 *
 * Sie gehoert zu keiner der beiden Marken, sondern fuehrt nur zu den acht
 * nachgebauten Seiten. Bewusst schlicht gehalten, damit sie nicht als Teil
 * eines der beiden Auftritte missverstanden wird.
 */
const GRUPPEN = [
  {
    marke: 'Laurenz Copywriting',
    quelle: 'arl-consulting.de',
    seiten: [
      { titel: 'Startseite (KI-Agenturen)', pfad: ROUTEN.arl, original: 'https://arl-consulting.de' },
      { titel: 'Tanzschule', pfad: ROUTEN.arlTanzschule, original: 'https://arl-consulting.de/tanzschule' },
    ],
  },
  {
    marke: 'GienowAkademie',
    quelle: 'gienow-akademie.onepage.me',
    seiten: [
      {
        titel: 'Freetools — Online-Broschüre',
        pfad: ROUTEN.freetools,
        original: 'https://gienow-akademie.onepage.me/freetools',
      },
      {
        titel: 'Kostenlose Infobroschüre',
        pfad: ROUTEN.infobroschuere,
        original: 'https://gienow-akademie.onepage.me/gienowmethode-kostenlose-infobroschure',
      },
      {
        titel: 'Skool-Community',
        pfad: ROUTEN.skool,
        original: 'https://gienow-akademie.onepage.me/skool-community',
      },
      { titel: 'FreedomQ', pfad: ROUTEN.freedomq, original: 'https://gienow-akademie.onepage.me/freedomq' },
      {
        titel: 'SelfRecoveryQ',
        pfad: ROUTEN.selfrecoveryq,
        original: 'https://gienow-akademie.onepage.me/selfrecoveryq',
      },
      {
        titel: 'SelfClearingQ',
        pfad: ROUTEN.selfclearingq,
        original: 'https://gienow-akademie.onepage.me/selfclearingq',
      },
    ],
  },
]

export function Uebersicht() {
  return (
    <div className="uebersicht">
      <div className="huelle">
        <header className="uebersicht__kopf">
          <p className="kicker">Nachbau</p>
          <h1 className="h1">Acht Seiten, zwei Marken</h1>
          <p className="lead">
            Nachbauten von <strong>arl-consulting.de</strong> und{' '}
            <strong>gienow-akademie.onepage.me</strong> — Inhalte und Bilder stammen von den
            Originalseiten.
          </p>
        </header>

        {GRUPPEN.map((g) => (
          <section className="uebersicht__gruppe" key={g.marke}>
            <h2 className="h3">
              {g.marke} <span className="klein">· {g.quelle}</span>
            </h2>
            <ul className="uebersicht__liste">
              {g.seiten.map((s) => (
                <li key={s.pfad}>
                  <a className="uebersicht__karte" href={s.pfad}>
                    <span className="uebersicht__titel">{s.titel}</span>
                    <span className="uebersicht__pfeil" aria-hidden="true">
                      →
                    </span>
                  </a>
                  <a
                    className="uebersicht__original"
                    href={s.original}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Original ansehen
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <p className="uebersicht__fuss klein">
          Die Startseite <code>gienow-akademie.onepage.me/</code> ist auf der Live-Seite nicht
          erreichbar (HTTP 404) und konnte deshalb nicht nachgebaut werden.
        </p>
      </div>
    </div>
  )
}

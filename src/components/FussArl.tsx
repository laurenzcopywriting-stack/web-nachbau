import { zuAnker } from '../lib/anker'
import { ARL } from '../inhalte/gemeinsam'

/**
 * Fuss von Laurenz Copywriting.
 *
 * Die Anschrift steht als Eigenschaft, weil die beiden Live-Seiten
 * unterschiedliche Strassen nennen — siehe ABWEICHUNGEN.md.
 */
export function FussArl({ strasse }: { strasse: string }) {
  const klick = (href: string) => (ereignis: React.MouseEvent) => {
    if (!href.startsWith('#')) return
    ereignis.preventDefault()
    zuAnker(href)
  }

  return (
    <footer className="fuss auf-dunkel" id="kontakt-fuss">
      <div className="huelle fuss__innen">
        <div className="fuss__marke">
          <p className="h3">{ARL.wortmarke}</p>
        </div>

        <nav className="fuss__spalten" aria-label="Fußnavigation">
          <div className="fuss__spalte">
            <h2 className="fuss__titel">Navigation</h2>
            <ul>
              {ARL.navigation.map((p) => (
                <li key={p.label}>
                  <a href={p.href} onClick={klick(p.href)}>
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="fuss__spalte">
            <h2 className="fuss__titel">Rechtliches</h2>
            <ul>
              <li>
                <a href={ARL.datenschutz} target="_blank" rel="noopener noreferrer">
                  Datenschutz
                </a>
              </li>
              <li>
                <a href={ARL.impressum} target="_blank" rel="noopener noreferrer">
                  Impressum
                </a>
              </li>
            </ul>
          </div>

          <div className="fuss__spalte">
            <h2 className="fuss__titel">Kontakt</h2>
            <ul>
              <li>
                <a href={ARL.telefonLink}>{ARL.telefon}</a>
              </li>
              <li>
                <span>{ARL.inhaber}</span>
              </li>
              <li>
                <span>
                  {strasse}, {ARL.ort}, {ARL.plz}
                </span>
              </li>
              <li>
                <a href={`mailto:${ARL.email}`}>{ARL.email}</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="huelle fuss__abschluss">
        <p className="fuss__hinweis">{ARL.rechtlicherHinweis}</p>
      </div>
    </footer>
  )
}

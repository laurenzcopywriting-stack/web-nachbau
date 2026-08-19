import { pfad } from '../lib/pfad'
import { AKADEMIE, ROUTEN } from '../inhalte/gemeinsam'

function Sozial() {
  return (
    <ul className="fuss__sozial">
      <li>
        <a href={AKADEMIE.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
            <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H16.7V3.6c-.3-.04-1.3-.13-2.45-.13-2.43 0-4.1 1.48-4.1 4.2v2.34H7.44V13h2.71v8h3.35z" />
          </svg>
        </a>
      </li>
      <li>
        <a href={AKADEMIE.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
            <rect x="3.6" y="3.6" width="16.8" height="16.8" rx="4.8" />
            <circle cx="12" cy="12" r="3.7" />
            <circle cx="17.3" cy="6.7" r="1.05" fill="currentColor" stroke="none" />
          </svg>
        </a>
      </li>
      <li>
        <a href={AKADEMIE.youtube} aria-label="Youtube" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
            <path d="M21.6 7.9c-.23-1.03-.92-1.78-1.86-1.98C18.02 5.55 12 5.55 12 5.55s-6.02 0-7.74.37c-.94.2-1.63.95-1.86 1.98C2 9.77 2 12 2 12s0 2.23.4 4.1c.23 1.03.92 1.78 1.86 1.98 1.72.37 7.74.37 7.74.37s6.02 0 7.74-.37c.94-.2 1.63-.95 1.86-1.98.4-1.87.4-4.1.4-4.1s0-2.23-.4-4.1zM10.1 15.3V8.7l5.2 3.3-5.2 3.3z" />
          </svg>
        </a>
      </li>
    </ul>
  )
}

/**
 * Fuss der GienowAkademie.
 *
 * `knapp` bildet die schlanke Fassung der drei Qode-Seiten ab, die nur
 * Rechtliches, Kontakt und den Hinweis traegt.
 */
export function FussAkademie({ knapp = false }: { knapp?: boolean }) {
  return (
    <footer className="fuss auf-dunkel" id="kontakt">
      <div className="huelle fuss__innen">
        <div className="fuss__marke">
          <a href={ROUTEN.uebersicht}>
            <img src={pfad(AKADEMIE.logoFuss)} alt={AKADEMIE.wortmarke} width={1000} height={876} />
          </a>
          {!knapp && <p className="klein">{AKADEMIE.tagline}</p>}
          <Sozial />
        </div>

        <nav className="fuss__spalten" aria-label="Fußnavigation">
          {!knapp && (
            <div className="fuss__spalte">
              <h2 className="fuss__titel">Übersicht</h2>
              <ul>
                <li>
                  <a href={ROUTEN.freetools}>Freebie-Tools</a>
                </li>
                <li>
                  <a href={ROUTEN.infobroschuere}>Infobroschüre</a>
                </li>
                <li>
                  <a href={ROUTEN.skool}>Community</a>
                </li>
              </ul>
            </div>
          )}

          <div className="fuss__spalte">
            <h2 className="fuss__titel">Rechtliches</h2>
            <ul>
              <li>
                <a href="#">Impressum</a>
              </li>
              <li>
                <a href="#">Datenschutzerklärung</a>
              </li>
              {!knapp && (
                <li>
                  <a href="#">Nutzungsbedingungen</a>
                </li>
              )}
            </ul>
          </div>

          <div className="fuss__spalte">
            <h2 className="fuss__titel">Kontakt</h2>
            <ul>
              {!knapp && (
                <li>
                  <a href={AKADEMIE.telefonLink}>{AKADEMIE.telefon}</a>
                </li>
              )}
              <li>
                <a href={`mailto:${AKADEMIE.email}`}>{AKADEMIE.email}</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="huelle fuss__abschluss">
        <small>© 2025 GienowAkademie. Alle Rechte vorbehalten.</small>
        <p className="fuss__hinweis">
          *Disclaimer: {knapp ? AKADEMIE.disclaimerKurz : AKADEMIE.disclaimer}
        </p>
      </div>
    </footer>
  )
}

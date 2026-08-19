/** Der Haken vor den Nutzen-Punkten. */
export function Haken() {
  return (
    <svg
      className="haken"
      viewBox="0 0 20 20"
      width="17"
      height="17"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 10.4l4 4 8-9" />
    </svg>
  )
}

/**
 * Nachbildung des Kontaktformulars.
 *
 * Die Live-Seite sendet an einen Dienst des Baukastens, den dieser Nachbau
 * nicht hat. Das Formular hier ist deshalb bewusst ohne Empfaenger: `onSubmit`
 * unterbindet das Absenden und weist stattdessen auf Telefon und E-Mail hin.
 * So entsteht kein Eindruck, es ginge eine Nachricht raus, die niemand
 * bekommt — siehe ABWEICHUNGEN.md.
 */
export function Formular() {
  return (
    <form
      className="formular"
      onSubmit={(e) => {
        e.preventDefault()
      }}
      aria-describedby="formular-hinweis"
    >
      <div className="formular__feld">
        <label htmlFor="vorname">Vorname</label>
        <input id="vorname" name="vorname" type="text" autoComplete="given-name" />
      </div>
      <div className="formular__feld">
        <label htmlFor="nachname">Nachname</label>
        <input id="nachname" name="nachname" type="text" autoComplete="family-name" />
      </div>
      <div className="formular__feld formular__feld--breit">
        <label htmlFor="email">E-Mail</label>
        <input id="email" name="email" type="email" autoComplete="email" />
      </div>
      <div className="formular__feld formular__feld--breit">
        <label htmlFor="telefon">Telefon</label>
        <input id="telefon" name="telefon" type="tel" autoComplete="tel" />
      </div>

      <p className="formular__hinweis" id="formular-hinweis">
        Hinweis: Dieser Nachbau verschickt nichts. Nutze bitte Telefon oder E-Mail.
      </p>

      <button type="submit" className="knopf knopf--akzent" disabled>
        Angaben absenden
      </button>
    </form>
  )
}

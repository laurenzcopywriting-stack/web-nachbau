export type Kennzahl = {
  /** Zielwert fuer den Zaehler. Entfaellt bei rein textlichen Angaben. */
  wert?: number
  /** Feststehender Text statt einer Zahl, z. B. "24/7". */
  text?: string
  suffix?: string
  nachkomma?: number
  label: string
}

/**
 * Die Kennzahlenreihe ("5.000+ / 35+ / 500.000+").
 *
 * Die Zielwerte haengen als `data-*` am Element, nicht im JavaScript der
 * Choreografie — so werden Zahl und Formatierung nur an einer Stelle gepflegt.
 * Im Markup steht bereits "0", damit ohne JS wenigstens die Struktur traegt.
 *
 * Eintraege mit `text` (etwa "24/7") bekommen bewusst KEINE `.zahl__wert`-
 * Klasse: die Choreografie sucht genau danach, und ein Count-up auf "24/7"
 * wuerde die Angabe zerschreiben.
 */
export function Kennzahlen({
  zahlen,
  ton = 'hell',
}: {
  zahlen: Kennzahl[]
  ton?: 'hell' | 'dunkel'
}) {
  return (
    <div className={`zahlen zahlen--${ton}`}>
      {zahlen.map((z) => (
        <div className="zahl" key={z.label} data-enthuellen="">
          {z.text ? (
            <span className="zahl__wert zahl__wert--fest">{z.text}</span>
          ) : (
            <span
              className="zahl__wert"
              data-wert={z.wert}
              data-suffix={z.suffix ?? ''}
              data-nachkomma={z.nachkomma ?? 0}
            >
              0{z.suffix ?? ''}
            </span>
          )}
          <span className="zahl__label">{z.label}</span>
        </div>
      ))}
    </div>
  )
}

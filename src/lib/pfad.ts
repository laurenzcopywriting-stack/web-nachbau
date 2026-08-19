/**
 * Setzt den Basispfad der Seite vor einen internen Pfad.
 *
 * Auf GitHub Pages liegt die Seite nicht an der Wurzel, sondern unter
 * `/<repo>/`. Ein fest verdrahtetes `/bilder/logo.jpg` zeigte dort ins Leere.
 * `import.meta.env.BASE_URL` traegt den beim Bauen gesetzten Basispfad — im
 * Entwicklungsserver ist das schlicht `/`.
 *
 * Vite ersetzt solche Pfade nur in HTML-Dateien selbst. Alles, was aus
 * JavaScript kommt — Bildquellen, Navigationsziele —, muss hier durch.
 *
 * Externe Adressen und reine Anker bleiben unangetastet.
 */
export function pfad(ziel: string): string {
  if (!ziel.startsWith('/')) return ziel

  /* BASE_URL endet immer auf "/", `ziel` beginnt immer damit — sonst entstuende
     ein doppelter Schraegstrich. */
  return import.meta.env.BASE_URL.replace(/\/$/, '') + ziel
}

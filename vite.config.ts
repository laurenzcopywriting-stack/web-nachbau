import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/* import.meta.dirname statt __dirname: Vite verwirft __dirname mit dem neuen
   nativen Config-Loader. */
const HIER = import.meta.dirname

/**
 * Alle Seiten als Verzeichnis mit index.html.
 *
 * Dadurch beantwortet jeder statische Hoster — GitHub Pages eingeschlossen —
 * den Aufruf von "/arl/tanzschule/" direkt, ohne Sonderregel fuer saubere
 * URLs. Der leere Schluessel ist die Uebersichtsseite an der Wurzel.
 */
const SEITEN = [
  '',
  'arl',
  'arl/tanzschule',
  'akademie/freetools',
  'akademie/infobroschuere',
  'akademie/skool-community',
  'akademie/freedomq',
  'akademie/selfrecoveryq',
  'akademie/selfclearingq',
]

export default defineConfig(({ command }) => ({
  plugins: [react()],

  /* Beim Bauen liegt alles unter github.io/<repo>/, im Entwicklungsserver an
     der Wurzel. BASE_PFAD ueberschreibt das fuer andere Ziele.

     Interne Pfade duerfen deshalb nirgends fest mit "/" beginnen — sie laufen
     alle ueber `pfad()` aus src/lib/pfad.ts. */
  base: command === 'build' ? (process.env.BASE_PFAD ?? '/web-nachbau/') : '/',

  build: {
    rollupOptions: {
      input: Object.fromEntries(
        SEITEN.map((s) => [
          s === '' ? 'uebersicht' : s.replace(/\//g, '-'),
          `${HIER}/${s ? s + '/' : ''}index.html`,
        ])
      ),
    },
  },

  server: {
    port: 5186,
    strictPort: true,
  },
}))

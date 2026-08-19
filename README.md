# web-nachbau

Nachbauten von acht Seiten aus zwei Auftritten — **arl-consulting.de**
(Laurenz Copywriting) und **gienow-akademie.onepage.me** (GienowAkademie).

**Live:** https://laurenzcopywriting-stack.github.io/web-nachbau/

| Seite | Adresse | Original |
|---|---|---|
| Übersicht | [/](https://laurenzcopywriting-stack.github.io/web-nachbau/) | — |
| KI-Agenturen | [/arl/](https://laurenzcopywriting-stack.github.io/web-nachbau/arl/) | arl-consulting.de |
| Tanzschule | [/arl/tanzschule/](https://laurenzcopywriting-stack.github.io/web-nachbau/arl/tanzschule/) | arl-consulting.de/tanzschule |
| Freetools | [/akademie/freetools/](https://laurenzcopywriting-stack.github.io/web-nachbau/akademie/freetools/) | …/freetools |
| Infobroschüre | [/akademie/infobroschuere/](https://laurenzcopywriting-stack.github.io/web-nachbau/akademie/infobroschuere/) | …/gienowmethode-kostenlose-infobroschure |
| Skool-Community | [/akademie/skool-community/](https://laurenzcopywriting-stack.github.io/web-nachbau/akademie/skool-community/) | …/skool-community |
| FreedomQ | [/akademie/freedomq/](https://laurenzcopywriting-stack.github.io/web-nachbau/akademie/freedomq/) | …/freedomq |
| SelfRecoveryQ | [/akademie/selfrecoveryq/](https://laurenzcopywriting-stack.github.io/web-nachbau/akademie/selfrecoveryq/) | …/selfrecoveryq |
| SelfClearingQ | [/akademie/selfclearingq/](https://laurenzcopywriting-stack.github.io/web-nachbau/akademie/selfclearingq/) | …/selfclearingq |

## Entwickeln

```bash
npm install
npm run dev
```

Läuft auf http://localhost:5186.

## Bauen

```bash
npm run build
```

Jeder Push auf `main` baut und veröffentlicht neu
(`.github/workflows/pages.yml`). Der Basispfad kommt aus der
Pages-Konfiguration — für eine eigene Domain genügt
`BASE_PFAD=/ npm run build`.

## Aufbau

```
index.html, arl/, akademie/…     ein Dokument je Seite, kein Router
src/inhalte/                     alle Texte, nach Seite getrennt
src/seiten/                      die Seitenkomponenten
src/components/                  geteilte Bauteile beider Marken
src/styles/base.css              Reset, Raster, Typo-Skala (markenneutral)
src/styles/bausteine.css         Bauteile, nur über Tokens gefärbt
src/styles/marke-arl.css         Farben, Schriften und Layouts von ARL
src/styles/marke-akademie.css    dasselbe für die GienowAkademie
public/bilder/                   Bilder beider Marken + HERKUNFT.txt
```

`ABWEICHUNGEN.md` listet jede Stelle, an der dieser Nachbau vom Original
abweicht: korrigierte Schreibfehler, bewusst weggelassene Vorlagen-Inhalte,
abgeschaltete Formulare und die offenen Punkte. **Vor dem Livegang bitte
einmal durchgehen.**

# web-nachbau

Originalgetreue Kopien von acht Seiten aus zwei Auftritten:
**arl-consulting.de** (Laurenz Copywriting) und
**gienow-akademie.onepage.me** (GienowAkademie).

**Live:** https://laurenzcopywriting-stack.github.io/web-nachbau/

| Seite | Kopie | Original |
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

## Wie die Kopien entstanden sind

Die Originalseiten liefern **kein** fertiges HTML aus — sie werden erst im
Browser zusammengebaut. Ein einfacher Abruf ergibt eine leere Seite. Deshalb:

1. Jede Seite wird in einem echten Browser geladen und **vollständig
   durchgescrollt**, damit alle Einblende-Animationen abgelaufen sind.
2. Das gerenderte Markup wird gesichert.
3. Alle wirksamen Stylesheets werden eingesammelt (62 Stück je Seite) und zu
   `seite.css` zusammengefasst.
4. Jede referenzierte Datei — Bilder, Schriften, Hintergründe — wird geladen
   und der Verweis auf einen lokalen Pfad umgeschrieben (`dateien/`).
5. Skripte werden entfernt. Die Seite steht zu diesem Zeitpunkt fertig im
   Dokument; ohne Skripte kann nichts mehr nachträglich etwas ausblenden oder
   an den Baukasten zurückfunken.
6. **`korrektur.css`**: Einiges steuert der Baukasten per JavaScript — ob die
   Navigation ausgeschrieben oder als „…"-Menü erscheint, wie hoch ein
   Laufband ist. Dafür wird Original und Kopie Element für Element verglichen
   und nur für die tatsächlich abweichenden Elemente eine Regel geschrieben —
   getrennt für Desktop und Mobil, damit die Seiten anpassungsfähig bleiben.

## Wie genau die Kopien sind

Gemessen wird per Vollbild-Abzug beider Seiten bei 1440 px Breite; ein Pixel
zählt als abweichend, wenn ein Farbkanal um mehr als 24 von 255 danebenliegt.

| Seite | Höhe Original / Kopie | Abweichung |
|---|---|---|
| SelfRecoveryQ | 2448 / 2448 | **0,00 %** |
| SelfClearingQ | 2332 / 2332 | **0,00 %** |
| FreedomQ | 2433 / 2433 | **0,01 %** |
| Infobroschüre | 6931 / 6931 | **1,72 %** |
| Skool-Community | 8340 / 8340 | **2,20 %** |
| KI-Agenturen | 11411 / 11411 | **2,88 %** |
| Tanzschule | 11527 / 11527 | **6,75 %** |
| Freetools | 19634 / 19634 | **7,54 %** |

Alle Seitenhöhen stimmen exakt. Der Rest sind laufende Animationen —
Laufbänder und Bildwechsler stehen in der Kopie still, im Original bewegen
sie sich. Zwei Abzüge davon treffen sich nie Bild für Bild.

## Was fehlt

- **`gienow-akademie.onepage.me/`** antwortet mit HTTP 404 — der Auftritt hat
  keine Startseite, auch nicht für normale Besucher.
- **`arl-consulting.de`** leitet auf `/ki-agenturen` weiter; kopiert ist das
  Weiterleitungsziel.
- **Interaktionen brauchen JavaScript** und sind daher still: Akkordeons
  öffnen nicht, Laufbänder laufen nicht, Formulare senden nicht. Die Seiten
  zeigen den Zustand, den das Original beim Laden hat.
- Verweise zwischen den acht Seiten zeigen auf die Kopien. Alles andere —
  Shops, Skool, YouTube, Impressum — führt weiter zum Original.

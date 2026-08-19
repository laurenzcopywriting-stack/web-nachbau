# Abweichungen vom Original

Nachgebaut wurden acht Seiten von zwei Auftritten:

- **arl-consulting.de** (Laurenz Copywriting) — 2 Seiten
- **gienow-akademie.onepage.me** (GienowAkademie) — 6 Seiten

Texte und Bilder stammen von den Originalseiten. Diese Datei listet jede
Stelle auf, an der der Nachbau bewusst abweicht.

---

## 1. Was nicht nachgebaut werden konnte

**`gienow-akademie.onepage.me/` antwortet mit HTTP 404.** Die Startseite dieses
Auftritts existiert nicht — auch nicht für normale Besucher. Auf den
Unterseiten verlinkt das Logo trotzdem dorthin, dieser Link läuft also auch im
Original ins Leere. Im Nachbau zeigt das Logo stattdessen auf die
Übersichtsseite.

**`arl-consulting.de` leitet auf `/ki-agenturen` weiter.** Es gibt keine
eigenständige Startseite; nachgebaut ist deshalb das Weiterleitungsziel.

---

## 2. Korrigierte Schreibfehler

### Laurenz Copywriting

| Live-Seite | Jetzt |
|---|---|
| Gess**s**chäftsführer | Geschäftsführer |
| „die Leads auf sich warten **lasen**" | **lassen** |
| „Wie **vermiedest** du also" | **vermeidest** |
| „Schwache Außenkommunikation **kosten** dich" | **kostet** dich |
| „eine Message, die … **bleiben**" | **bleibt** |
| mit den richtige**nT**exten | mit den richtigen **T**exten |
| **aufein** neues Niveau | **auf ein** neues Niveau |
| „Landing Pages, Website Pages**,,** Newsletter" | einfaches Komma |
| „Kunden **begleitet haben zu dürfen**" | „Kunden **begleiten zu dürfen**" |
| laurenz.copywriting**g**mail.com | laurenz.copywriting**@**gmail.com |
| der **obrigen** Hebel | der **obigen** Hebel |
| „die Conversion trotzdem **wünschen lässt**" | „**zu wünschen übrig lässt**" |
| Artus Richard Laurenz **Partymüller** | **Partheymüller** (so im Impressum) |
| „Für **,** die mehr Kunden …" | „Für **Tanzschulen**, die mehr Kunden …" |
| „und **tanze ich** mittlerweile" | „und **tanze** mittlerweile" |

### GienowAkademie

| Live-Seite | Jetzt |
|---|---|
| Speicheldrüsen**l**rebs | Speicheldrüsen**k**rebs |
| „Geh an einen **ort**" | „Geh an einen **Ort**" |
| „für ein paar ungestört" | „für ein paar **Minuten** ungestört" |
| „Schau dir das Qode **Vide** an" | „das Qode-**Video**" |
| **SelfCRecoveryQ** | **SelfRecoveryQ** |
| Bewusst**ss**einsk**ärf**te | Bewusstseinsk**räf**te |
| „kontinuierlich**e** verändern" | „kontinuierlich verändern" |
| **tran**formierende Prozesse | **trans**formierende Prozesse |
| die Liebesmacht **missbrachst** | **missbrauchst** |
| **Hömöopathie** | **Homöopathie** |
| Isch**ilagie** | Isch**ialgie** |
| „lie**s** sich krankschreiben" | „lie**ß** sich krankschreiben" |
| „Tabu**larasa**" | „Tabu**la rasa**" |
| „© 2025 Gienowakademie. Alle **Rigts Reserved**." | „© 2025 GienowAkademie. Alle **Rechte vorbehalten**." |
| „© 2025 **Unternehmen**." | „© 2025 **GienowAkademie**." |
| „Dein Weg zu mehr … Selbst**betimmung**" | Selbst**bestimmung** |

---

## 3. Bewusst NICHT übernommen

### Drei Vorlagen-Testimonials auf der Infobroschüre-Seite

Die Live-Seite zeigt unten drei „Kundenstimmen":

> „Die Zusammenarbeit mit diesem Team war wirklich eine tolle Erfahrung…"
> — **Erik Hansen, Buchhalter** · **Sarah Johansson, Datenwissenschaftler** ·
> **Laurenz, Buchhalter**

Alle drei tragen **denselben Blindtext** und generische Berufsbezeichnungen.
Das sind unveränderte Beispieldaten des Baukastens, keine echten Rezensionen.
Sie auf einer öffentlich erreichbaren Seite als echte Kundenstimmen
auszuspielen, wäre irreführend — deshalb fehlen sie im Nachbau. Die drei
**echten** Stimmen daneben (Anne E. G., Ingrid, Julia G.) sind vollständig
übernommen.

Sollen sie doch rein, sag Bescheid — sie stehen im Scrape und sind in zwei
Minuten ergänzt.

### „xxx Patientinnen und Patienten"

Im Expertise-Block von Dr. Hasler steht auf der Infobroschüre-Seite ein nicht
gefüllter Platzhalter (`xxx`). Übernommen wurde die Angabe der
Community-Seite: **5000 Patientinnen und Patienten**.

### Editor-Hinweise des Baukastens

Beim Auslesen der Infobroschüre-Seite tauchen mehrfach Sätze wie „Dieses
Element weist einige Probleme auf…" auf. Das ist die Benutzeroberfläche des
Onepage-Editors, kein Seiteninhalt — nicht übernommen.

---

## 4. Inhaltliche Unstimmigkeiten, die ich NICHT angefasst habe

Das sind keine Schreibfehler, sondern deine Entscheidung:

- **Zwei verschiedene Anschriften.** Der Fuß von `/ki-agenturen` nennt
  *Lettenreutherstraße 4*, der von `/tanzschule` *Schönberg 14* — beide in
  Markt Marktgraitz. Übernommen wie im Original, je Seite unterschiedlich.
- **„1000% Kundenzufriedenheit"** im Netzwerk-Block. Steht so da.
- **„350+ Jahre Erfahrung"** kommt hier nicht vor; die Akademie-Seiten nennen
  durchgängig 35+ Jahre.
- Der Titel der Community-Seite lautet im Browser-Tab **„BoosterGane Kurs"**,
  obwohl die Seite die Skool-Community bewirbt.

---

## 5. Weitere bewusste Abweichungen

### Formulare senden nicht

Beide ARL-Seiten und die Infobroschüre-Seite haben ein Kontaktformular, das
auf der Live-Seite an einen Dienst des Baukastens geht. Dieser Nachbau hat
keinen solchen Empfänger. Die Formulare sind deshalb **nachgebildet, aber
abgeschaltet**: Der Absenden-Knopf ist deaktiviert, und darüber steht ein
Hinweis auf Telefon und E-Mail. So entsteht nicht der Eindruck, es ginge eine
Nachricht raus, die niemand bekommt.

Auch die Länderauswahl im Telefonfeld (eine sehr lange Liste im Original)
fehlt — ohne Empfänger hat sie keinen Zweck.

### Qode-Videos

Die drei Qode-Seiten betten je ein Video ein, das nicht öffentlich abrufbar
ist. An seiner Stelle steht das Standbild der Live-Seite mit dem Hinweis
„Press when you're ready". Die drei YouTube-Videos der Broschüre
(SelfClearing, zwei KlangQodes) sind dagegen echt eingebunden.

### YouTube lädt erst auf Klick

Vorher steht ein Standbild. Das spart den Player beim Aufruf und verhindert,
dass YouTube schon beim Seitenaufruf mitliest.

### Verlinkung repariert

Mehrere Navigationspunkte zeigen im Original auf `onepage.io` — die Seite des
Baukastens, nicht des Kunden. Diese Links führen hier auf die passenden
Abschnitte bzw. Seiten.

### Bilder

28 Dateien, aus den CDNs der Originalseiten geladen und fürs Web verkleinert
(längste Kante max. 2000 px, max. 4 Megapixel): **15,8 MB → 5,5 MB**. Die
Herkunft jeder Datei steht in `public/bilder/HERKUNFT.txt`.

### Farben und Schriften

- **Laurenz Copywriting:** Navy `#1C2B4A`, Gold `#C8952A`, Playfair Display +
  Space Grotesk — übernommen aus dem CI-Profil `laurenz-ci-profile`, das für
  diese Marke die verbindliche Quelle ist.
- **GienowAkademie:** Petrol `#2C7A94` und Bronze `#A87B4A`, aus dem
  Schmetterlings-Logo abgenommen. Schrift: Plus Jakarta Sans.

### Bewegung

Maskierte Wort-Reveals, Parallaxe, Endlosband für die Erfahrungsberichte,
sich füllender Faden in der 3-Step-Timeline, Zähler bei den Kennzahlen.
`prefers-reduced-motion` schaltet die gesamte Choreografie ab und setzt jede
Szene direkt auf ihren Endzustand.

### Technisch

Neun getrennte Seiten, kein Router — jede ist ein eigenes Dokument mit eigenem
Bundle. Die Seiten liegen als `<pfad>/index.html` vor, damit saubere URLs auf
jedem statischen Hoster funktionieren. Interne Pfade laufen über `pfad()` aus
`src/lib/pfad.ts`, weil die Seite auf GitHub Pages unter einem Unterpfad
liegt; für eine eigene Domain genügt `BASE_PFAD=/ npm run build`.

**Das Repo ist öffentlich** — GitHub Pages verlangt das bei kostenlosen
Konten.

---

## 6. Noch nicht geprüft

Die **Sichtprüfung am Bildschirm steht aus**: die Browser-Pane dieser Sitzung
kompositiert keine Frames. Wie die Seiten tatsächlich *aussehen*, hat also
noch niemand gesehen — bitte einmal selbst durchscrollen.

Geprüft und in Ordnung: Typprüfung, Produktions-Build aller neun Seiten, alle
neun Routen antworten lokal mit 200 und ohne Konsolenfehler.

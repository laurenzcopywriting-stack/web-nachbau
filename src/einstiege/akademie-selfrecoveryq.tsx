import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Rahmen } from '../Rahmen'
import { Kopf } from '../components/Kopf'
import { FussAkademie } from '../components/FussAkademie'
import { AkaQode } from '../seiten/AkaQode'
import { SELFRECOVERYQ } from '../inhalte/akaQodes'
import { AKADEMIE, ROUTEN } from '../inhalte/gemeinsam'
import '../styles/base.css'
import '../styles/bausteine.css'
import '../styles/marke-akademie.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Rahmen
      kopf={
        <Kopf
          logo={AKADEMIE.logo}
          logoAlt={AKADEMIE.wortmarke}
          wortmarke={AKADEMIE.wortmarke}
          navigation={[]}
          start={ROUTEN.uebersicht}
        />
      }
      fuss={<FussAkademie knapp />}
    >
      <AkaQode seite={SELFRECOVERYQ} />
    </Rahmen>
  </StrictMode>
)

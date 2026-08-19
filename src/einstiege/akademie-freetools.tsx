import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Rahmen } from '../Rahmen'
import { Kopf } from '../components/Kopf'
import { FussAkademie } from '../components/FussAkademie'
import { AkaFreetools } from '../seiten/AkaFreetools'
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
          navigation={AKADEMIE.navigation}
          start={ROUTEN.freetools}
        />
      }
      fuss={<FussAkademie />}
    >
      <AkaFreetools />
    </Rahmen>
  </StrictMode>
)

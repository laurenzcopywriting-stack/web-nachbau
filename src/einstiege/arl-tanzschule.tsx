import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Rahmen } from '../Rahmen'
import { Kopf } from '../components/Kopf'
import { FussArl } from '../components/FussArl'
import { Knopf } from '../components/Knopf'
import { ArlTanzschule } from '../seiten/ArlTanzschule'
import { ARL, ROUTEN } from '../inhalte/gemeinsam'
import { STRASSE } from '../inhalte/arlTanzschule'
import '../styles/base.css'
import '../styles/bausteine.css'
import '../styles/marke-arl.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Rahmen
      kopf={
        <Kopf
          logo={ARL.logo}
          logoAlt={ARL.inhaber}
          wortmarke={ARL.wortmarke}
          navigation={ARL.navigation}
          start={ROUTEN.arlTanzschule}
          rechts={
            <Knopf ton="akzent" className="knopf--klein" href="#formular">
              Potenzialanalyse buchen
            </Knopf>
          }
        />
      }
      fuss={<FussArl strasse={STRASSE} />}
    >
      <ArlTanzschule />
    </Rahmen>
  </StrictMode>
)

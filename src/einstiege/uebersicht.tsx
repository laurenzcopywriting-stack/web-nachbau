import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Uebersicht } from '../seiten/Uebersicht'
import '../styles/base.css'
import '../styles/uebersicht.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Uebersicht />
  </StrictMode>
)

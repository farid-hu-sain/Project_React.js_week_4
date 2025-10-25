import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
      <div id="root"></div>
  <div id="modal-root"></div>
  </StrictMode>,
)

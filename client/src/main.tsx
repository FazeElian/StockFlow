import { createRoot } from 'react-dom/client'
import Router from './Router'

// Global styles
import "./assets/css/Global.css";

createRoot(document.getElementById('root')!).render(
  <Router />
)

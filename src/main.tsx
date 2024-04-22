import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App.tsx'
import './index.scss'
declare global {
  interface Window {
    isDev: boolean;
  }
}

window.isDev = true;
ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <App />
  </BrowserRouter>
);

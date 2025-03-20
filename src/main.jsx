import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import Wrapper from './Wrapper.jsx'
import { SettingsProvider } from "./useSettings.jsx";


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <SettingsProvider>
        <Wrapper />
    </SettingsProvider>
  </BrowserRouter>
);

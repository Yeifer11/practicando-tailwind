import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Lenguajes from "./Lenguajes.jsx";
import LeadDetails from "./LeadDetails.jsx";
import Api from "./Api.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Lenguajes /> */}
    {/* <Api /> */}
    <LeadDetails />

    
  </StrictMode>,
)

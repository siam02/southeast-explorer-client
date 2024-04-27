import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.jsx'
import SiteDetailsProvider from './providers/SiteDetailsProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SiteDetailsProvider>
      <RouterProvider router={router}></RouterProvider>
    </SiteDetailsProvider>
  </React.StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { AuthContext } from './context/AuthContext.tsx'
import AppRoutes from './routes/AppRoutes.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthContext>
    <RouterProvider router={AppRoutes} />
    </AuthContext>
    </StrictMode>,
)

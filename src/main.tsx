import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Main } from './pages/main/main'
import { Login } from './pages/login/login'
import { authenticateLoader } from './loaders/authenticate'

const router = createBrowserRouter([
  {path: "/", index: true, loader: authenticateLoader, element: <Main />},
  {path: "/login", index: true, element: <Login />}
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

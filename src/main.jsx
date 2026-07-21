import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router"
import { OurServices } from './components/index.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/our-services",
        element:<OurServices/>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)

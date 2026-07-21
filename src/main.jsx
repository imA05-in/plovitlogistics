import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router"
import { AboutUs, ContactUs, OurServices } from './components/index.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/our-services",
        element:<OurServices/>
      },
      {
        path:"about-us",
        element: <AboutUs/>
      },
      {
        path:"contact-us",
        element:<ContactUs/>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)

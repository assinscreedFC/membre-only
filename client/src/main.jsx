import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  Outlet,
  useParams,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'

import Singin from './components/Singin.jsx'

const router=createBrowserRouter([{
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Navigate to="signe-in"/>
      },
      {
        path:"signe-in",
        element: <Singin/>
      },
      {
        path:"login",
        element: <h1>login</h1>

      }
    ]
}])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)

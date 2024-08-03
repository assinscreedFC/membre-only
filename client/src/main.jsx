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
import Logein from './components/Logein.jsx';
import Choice from './components/Choice.jsx';

const router=createBrowserRouter([{
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Choice/>
      },
      {
        path:"signe-in",
        element: <Singin/>
      },
      {
        path:"login",
        element: <Logein/>
      },
      {
        path:"succes",
        element: <h1>FELECITATION</h1>
      }
    ]
}])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)

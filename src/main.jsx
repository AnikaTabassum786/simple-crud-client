import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MainLayout from './layout/MainLayout.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import UserDetails from './components/UserDetails.jsx'
import UpdateUser from './components/UpdateUser.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children:[
      {index:true, Component:App},
      {
        path:'/users/:id',
        loader:({params})=>fetch(`http://localhost:3000/users/${params.id}`),
        Component:UserDetails
      },
      {
        path:'/update/:id',
        loader:({params})=>fetch(`http://localhost:3000/users/${params.id}`),
        Component:UpdateUser
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

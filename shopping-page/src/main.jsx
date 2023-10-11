import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Shop from "./pages/shop.jsx"
import Cart from "./pages/cart.jsx"
import Home from "./pages/home.jsx"

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children:[
      {
        path:"/shop",
        element: <Shop/>
      },
      {
        path:"/cart",
        element: <Cart/>,
      },
      {
        index: true,
        element: <Home />
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

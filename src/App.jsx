import React, { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Contact from './pages/Contact'
import ExploreMenu from './pages/ExploreMenu'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'
import AdminLayout from './components/AdminLayout'
import Add from './pages/Add'
import List from './pages/List'
import Orders from './pages/Orders'




function App() {
  
  const [category, setCategory] = useState("All")
  const  router=createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {path:"/",element:<Home/>},
        {path:"contact",element:<Contact/>},
        {path: "menu", element: <ExploreMenu category={category} setCategory={setCategory} />},
        {path:"cart",element:<Cart/>},
        {path:"order",element:<PlaceOrder/>}

      



      ]
    },


    // Admin routes
    {
      path:"/admin",
      element:<AdminLayout />,
      children:[
        {path:"add",element: <Add/>},
        { path: "list", element:  <List/> },
        { path: "orders", element: <Orders/> },
      ]
    }
    
  ])
  return (
    <>
    
    <RouterProvider router={router}/>
  </>
  )
}

export default App





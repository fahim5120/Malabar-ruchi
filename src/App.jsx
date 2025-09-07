import React, { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Contact from './pages/Contact'
import ExploreMenu from './pages/ExploreMenu'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'



function App() {
  
  const [category, setCategory] = useState("All")
  const  router=createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {path:"home",element:<Home/>},
        {path:"contact",element:<Contact/>},
        {path: "menu", element: <ExploreMenu category={category} setCategory={setCategory} />},
        {path:"cart",element:<Cart/>},
        {path:"order",element:<PlaceOrder/>}

      



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

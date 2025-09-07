import { createContext, useEffect, useState } from "react";

export const StoreContext=createContext(null)

const StoreContextProvider=(props)=>{
const[cartItems,setCartItems]=useState({})

const addToCart=(itemId)=>{
if(!cartItems[itemId]){// id illa engil,cartil onnum illa engil
setCartItems((prev)=>({...prev,[itemId]:1}))
}
else{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1})) //cartil undegil
}
}

const removeFromCart=(itemId)=>{
setCartItems((prev)=>(
    {...prev,[itemId]:prev[itemId]-1}
))
}
 
useEffect(()=>{
console.log(cartItems)
,[cartItems]})

    const contextValue={
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart

    }
    return(
        <StoreContext.Provider value={ contextValue}>
{props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;
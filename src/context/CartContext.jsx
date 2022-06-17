import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) =>{

   const [count,setCount] = useState(0);
   const [saved,setSaved] = useState([]);

    return <CartContext.Provider value={{count,setCount,saved,setSaved}}>
        {children}
    </CartContext.Provider>
}
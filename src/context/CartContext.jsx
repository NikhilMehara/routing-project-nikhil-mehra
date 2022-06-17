import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) =>{

   const [count,setCount] = useState(0);
   const [dataOne,setDataOne] = useState({
    brand: "",
    title: "",
    image: "",
    category: "",
    price: null
   })
   const [saved,setSaved] = useState([]);

    return <CartContext.Provider value={{count,setCount,dataOne, setDataOne,saved,setSaved}}>
        {children}
    </CartContext.Provider>
}
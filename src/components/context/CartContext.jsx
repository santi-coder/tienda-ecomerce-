import React, { createContext } from 'react'
//creo el contexto
export const CartContext =  createContext (); 
console.log(CartContext);


const CartContextProvider = ({children}) => {
    
    const [productos, setProductos] = React.useState([])

    const addCart = (item) =>{
        
            setProductos (item)
        
    }
    
   
    console.log(productos);
    return (
        
        <CartContext.Provider value={{
            
            productos, addCart }}>
                
            {children}
        </CartContext.Provider>

    )
}

export default CartContextProvider

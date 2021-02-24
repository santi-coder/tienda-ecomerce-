import React, { createContext } from 'react'
//creo el contexto
export const CartContext =  createContext (); 
// console.log(CartContext);


const CartContextProvider = ({children}) => {
    
    const [productos, setProductos] = React.useState([])
     
    // console.log(productos)
    
   
    
    const addCart = (item) =>{


        const isInCart = (item) => {
        
            return (
                productos.findIndex(prod=>prod.producto.id === item.producto.id)
            )
        };


        if (isInCart(item.producto.id) === -1 ){
            setProductos (item)
        }else{
            console.log(isInCart)
        }

        
          // console.log(item.producto.id);
    }

  
    

    // console.log(productos.producto.id);
    // console.log(productos.quanity);
    return (
        
        <CartContext.Provider value={{
            
            productos, addCart }}>
                
            {children}
        </CartContext.Provider>

    )
}

export default CartContextProvider

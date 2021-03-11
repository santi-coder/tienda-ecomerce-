import React, { createContext } from 'react'
//creo el contexto
export const CartContext =  createContext (); 
// console.log(CartContext);


const CartContextProvider = ({children}) => {
    
    const [productos, setProductos] = React.useState([])
    //  console.log(productos);
    
     function addCart (item) {
        
        const comprobExiste = productos.find(element=>element.producto.id === item.producto.id);
        // console.log(comprobExiste);
        if (comprobExiste) {
             console.log("ya esta en el carrito")
            let indice = productos.indexOf(comprobExiste);
            let nuevaCant = item.quanity + comprobExiste.quanity;
            const copiaProd = [...productos];
            copiaProd [indice].quanity = nuevaCant;
            setProductos(copiaProd);
            }else{
            let sumoProd = [item, ...productos];
            setProductos(sumoProd)
        };

    }

    function eliminarUnItem (item) {
        // console.log(item)
        // let copiaProdB = [...productos];
        const nuevoArreglo = productos.filter(element => element.producto.id !== item)
        console.log(nuevoArreglo);
        setProductos(nuevoArreglo)
    }

    function vaciarCarrito () {
        
        return setProductos([])
    }

    

    return (
        
        <CartContext.Provider value={{
            
            productos, 
            addCart, 
            eliminarUnItem,
            vaciarCarrito
             }}>
                
            {children}
        </CartContext.Provider>

    )
}

export default CartContextProvider

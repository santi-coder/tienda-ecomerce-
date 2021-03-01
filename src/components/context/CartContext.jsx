import React, { createContext } from 'react'
//creo el contexto
export const CartContext =  createContext (); 
// console.log(CartContext);


const CartContextProvider = ({children}) => {
    
    const [productos, setProductos] = React.useState([])
     
    console.log(productos)
    
    
    React.useEffect(() => {

    const existe = (item) => {
        
        const comprobExiste = productos.find(element=>element.productos.producto.id === item.producto.id);
            //  si existe hace la comprobacion y da true ejecuta add to cart sino ejecutra otra funcion 
        
            if (comprobExiste) {
                       console.log("ya esta en el carrito") 
                    }else {
                        console.log("lo voy a agregar");
                        addCart()
                    }
        }

        }, [item]);


        //    const existe = productos.some (function(item){

//         return productos.producto.id === item.producto.id; 
//     })
    
    

//     if (existe) {
//        console.log("ya esta en el carrito") 
//     }else {
//         console.log("lo voy a agregar");
//         addCart()
//     }
    
    const addCart = (item) => {
        const copiaProd = [...productos];
        const todosLosProductos = [item, ...copiaProd];
        setProductos (todosLosProductos);
    }
    
    
    // existe()
    
    return (
        
        <CartContext.Provider value={{
            
            productos, addCart }}>
                
            {children}
        </CartContext.Provider>

    )
}

export default CartContextProvider








// const addCart = (item) =>{
        
//     const prodAAgregar = (item)
    
//     //   setProductos (item);
//         //  console.log(prodAAgregar.producto.id)
    

//     const existe = productos.find(element=>element.productos.producto.id === prodAAgregar.producto.id);
    
//     if(existe === undefined){
//         let todosLosProd = [item, ...productos ]
//         setProductos(todosLosProd);
        
//     }
//         // }else{
//     //     console.log(existe)
//     // }
    
// }

// //  console.log(productos.producto.id);
// // console.log(productos.quanity);
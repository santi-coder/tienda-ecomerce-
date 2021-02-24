import {useContext} from 'react'
import { CartContext } from '../context/CartContext'


const Cart = () => {
    
    const CartContextUse = useContext(CartContext)
    // console.log(CartContextUse.productos);
    
    
    
    
    return (
        <div>
            <h1>soy el componente carrito vacio </h1>

        </div>
    )
}

export default Cart
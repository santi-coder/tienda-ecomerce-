import {Link} from 'react-router-dom';
import {useContext} from 'react'
import { CartContext } from '../context/CartContext'

const CartWidget = () => {
    
    const {total} = useContext(CartContext)

    return (
        <div>
           <Link to = {'/carrito/'}> <img src="/images/carroDeCompras.png" alt="imagen carrito" className="imgCart" /></Link>
            <h4 className="contadorCarrito">{total}</h4>
        </div>
    )
}

export default CartWidget

import {Link} from 'react-router-dom';
import {useContext} from 'react'
import { CartContext } from '../context/CartContext'

const CartWidget = () => {
    
    const {total} = useContext(CartContext)

    return (
        <div>
           <Link to = {'/carrito/'}> <img src="/images/carroDeCompras.png" alt="" style={{width:80, height:80, float:"right"}}/></Link>
            <h4>{total}</h4>
        </div>
    )
}

export default CartWidget

import {useContext} from 'react'
import { CartContext } from '../context/CartContext'


const Cart = () => {
    
    const {productos} = useContext(CartContext)
    console.log(productos);
    
    let prod = productos.map(element=>element.producto.title)
       
  return (
    <div>
    <h4> {prod}</h4>
    
</div>
);
};

export default Cart
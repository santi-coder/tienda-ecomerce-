import {Link} from 'react-router-dom';

const CartWidget = () => {
    
    
 return (
        <div>
           <Link to = {'/carrito/'}> <img src="/images/carroDeCompras.png" alt="" style={{width:80, height:80, float:"right"}}/></Link>
            <h4>0</h4>
        </div>
    )
}

export default CartWidget

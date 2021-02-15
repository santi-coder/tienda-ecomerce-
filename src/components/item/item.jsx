import React from 'react'
import {Link} from 'react-router-dom';

const Item = ({product}) => {
    

    
    return (
        <div>
            <h3>{product.title}</h3>
            <p>Color: {product.color}</p>
            <p>Precio: $ {product.price}</p>
            <img src={product.foto} style={{width:40, height:40}}></img>
            <Link to={`/detalle`}> <button>Ver detalle de producto</button> </Link>   
        </div>
    
    
    );
};

export default Item

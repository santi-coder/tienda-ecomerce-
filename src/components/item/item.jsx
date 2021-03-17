import React from 'react'
import {Link} from 'react-router-dom';

const Item = ({product}) => {
    

    
    return (
        <>
    
        <div className="item">
                <h4>{product.title}</h4>
            <div className="imgItem">
                <img src={product.foto}></img>
            </div>
            <div className="textosCards">
                <p>Color: {product.color}</p>
                <h5>Precio: $ {product.price}</h5>
            </div>
            <div className="btn">
                <Link to={`/detalle/${product.id}`}> <button> Ver mas </button> </Link>
            </div>  
        </div>
    
        </>
    
    )
}

export default Item

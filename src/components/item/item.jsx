import React from 'react'


const Item = ({product}) => {
    

    
    return (
        <div>
            <h3>{product.title}</h3>
            <p>Color: {product.color}</p>
            <p>Precio: $ {product.price}</p>
            <img src={product.foto} style={{width:40, height:40}}></img>
            <button>Ver detalle de producto</button>    
        </div>
    
    
    );
};

export default Item

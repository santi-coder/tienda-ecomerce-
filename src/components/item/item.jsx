import React from 'react'

const Item = ({product}) => {
    return (
        <div>
            <h3>{product.title}</h3>
            <p>Color: {product.color}</p>
            <p>Precio: $ {product.price}</p>
            <image src= {product.foto}/>


            
        </div>
    );
};

export default Item

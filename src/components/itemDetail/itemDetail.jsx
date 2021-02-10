import React from 'react'

const ItemDetail = ({products}) => {
    
    
    return (
        <div>
            
            <h3>{products.title}</h3>
            <p>Color: {products.color}</p>
            <p>Precio: $ {products.price}</p>
            <img src={products.foto} style={{width:40, height:40}}></img>
            <p>Forma de pago {products.formaDePago}</p>
            <p>envio {products.envio}</p>
            <p>Reputacion del vendor {products.repDelVendedor}</p>
            <p>Caracteristicas{products.caracDelProducto}</p>

            
        </div>
    );
};

export default ItemDetail




/*const Item = ({product}) => {
    

    
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

export default Item*/
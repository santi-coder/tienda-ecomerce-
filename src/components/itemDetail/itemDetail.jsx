import React from 'react';
import "../../App.css"

const ItemDetail = ({producto}) => {
    
    return (
        
        <div className="contenedorDetalle">
            <div className="imagen">
                <img src={producto.foto}></img>
            </div>
            <div className="infoProd">
                <h1>Producto: {producto.title} </h1>
                <p>Colores disponibles: {producto.color}</p>
                <p>Caracteristicas / Materiales: {producto.caracDelProducto}</p>
                <p>Tiempo de entrega: {producto.envio}</p>
                <p>Reputacion del vendedor: {producto.repDelVendedor}</p>
                <p>Forma de pago: {producto.formaDePago}</p>
                <h3>Precio: $ {producto.price}</h3>
            </div>
        
        </div>
        
    );
};

export default ItemDetail

import React from 'react';
import "../../App.css"
import ItemCountComponent from '../itemCount';


const ItemDetail = ({producto}) => {
    
    const [irCart, setIrCart] = React.useState(false)

    const agregarAlCarrito = (contador) =>{
        alert("se agrago el producto al carrito");
        setIrCart(true)
    }

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
            <div>
               
               {irCart ? <button> ir al carrito</button> : <ItemCountComponent stock={5} agregarAlCarrito={agregarAlCarrito} />}
            
            </div>
        </div>
        
    );
};

export default ItemDetail

import React from 'react';
import "../../App.css"
import ItemCountComponent from '../itemCount';
import {Link} from 'react-router-dom';
import {useContext} from 'react';
import { CartContext } from '../context/CartContext';



const ItemDetail = ({producto}) => {
    
    const [irCart, setIrCart] = React.useState(false)

    const {addCart} = useContext(CartContext)

    const agregarAlCarrito = (contador) =>{
        alert(`se agrego ${contador} productos al carrito`);
        setIrCart(true)
        addCart({ producto:producto, quanity:contador})
        
    
    }
    

    return (
        
        <div className="detalleProducto">
            <div className="imagenDetalle">
                <img src={producto.foto}></img>
            </div>
            <div className="contenedorText-btn">
                <div className="textProd">
                    <h3>Producto: {producto.title} </h3>
                    <p>Colores disponibles: {producto.color}</p>
                    <p>Caracteristicas / Materiales: {producto.caracDelProducto}</p>
                    <p>Tiempo de entrega: {producto.envio}</p>
                    <p>Reputacion del vendedor: {producto.repDelVendedor}</p>
                    <p>Forma de pago: {producto.formaDePago}</p>
                    <h5>Precio: $ {producto.price}</h5>
                </div>
                <div className="btnComprar">
                     {irCart ? <Link to={"/carrito/"}><button className="btnIrCarrito"> ir al carrito</button></Link> : <ItemCountComponent stock={5} agregarAlCarrito={agregarAlCarrito} />}
                </div>
            </div>
        </div>
    );
};

export default ItemDetail

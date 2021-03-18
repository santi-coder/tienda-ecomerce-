import {useContext} from 'react'
import { CartContext } from '../context/CartContext'
import React from 'react'
import { getFirestore } from '../../Firebase';


const Cart = () => {
  
  // corregir
  
  const [nombre, setNombre] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [telefono, setTelefono] = React.useState("")
  
  const {productos, eliminarUnItem, vaciarCarrito} = useContext(CartContext)
  
  // console.log(productos);
  let subTotal = productos.map (valor => (valor.quanity*valor.producto.price)) 
  let  total = 0 
  for(let i = 0 ; i<subTotal.length; i++)
  {
    total += subTotal[i];
  }
  
  const finalizarCompra = () => {
    console.log(productos)
    
      let nuevaOrden = {clientes: {name:nombre, email:email, telefono:telefono}, items: [...productos], total:total}
      
      const fbd = getFirestore()
      const coleccionDeOrdenes = fbd.collection("ordenes");
      coleccionDeOrdenes.add(nuevaOrden).then((value) =>{
        alert(`gracias por tu compra, tu numero de orden es ${value.id}`)
        
      })
 }
 return (
    
  <>
    <div className="contenedorCart">
      <table className="carrito">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          <div className="scroll">
        {productos.map (valor => ( 
          <tr className="insertarProd">                   
            <th className="th1"> { valor.producto.title } </th>
            <th className="th2"> { valor.producto.price }</th>
            <th className="th4"> { valor.quanity }</th>
            <th> {(valor.quanity*valor.producto.price)}</th> 
            <th className="th3"><button onClick={() => {eliminarUnItem (valor.producto.id)}} className="countBotones">x</button></th>                 
          </tr>                 
        ) ) }
        </div>
        </tbody>
        <tfoot>
          <tr>
              <th>total: $ {total}</th> 
              <th><button onClick={vaciarCarrito} className="btnAgregar">vaciar carrito</button></th>
          </tr>    
        </tfoot>
      </table>
      <div className="inputText">
          <h5> Por favor ingrese sus datos para finalizar la compra </h5>
        <div className="input">
          <h6>ingresa tu nombre</h6>
          <input type="text" placeholder="nombre" onChange={(e)=>{setNombre(e.target.value)}}/>
          <h6>ingresa tu email</h6>
          <input type="text" placeholder="email" onChange={(e)=>{setEmail(e.target.value)}}/>
          <h6>ingresa tu telefono</h6>
          <input type="text" placeholder="telefono" onChange={(e)=>{setTelefono(e.target.value)}}/>
        </div>
        <div className="btnFinal">
          <th><button onClick={ () => { finalizarCompra() }} className="btnAgregar">finalizar compra</button></th>
        </div>
      </div>
    </div>
  </>
);
};

export default Cart
    
import {useContext} from 'react'
import ReactDOM from 'react-dom';
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
    
    <div>
      <table>
        <thead>
          <tr>
            <th>producto</th>
            <th>precio</th>
            <th>cantidad</th>
            <th>subtotal</th>
            <th>eliminar</th>
          </tr>
        </thead>
        <tbody>
            
        {productos.map (valor => ( 
          <tr>                   
            <th> { valor.producto.title } </th>
            <th> { valor.producto.price }</th>
            <th> { valor.quanity }</th>
            <th> {(valor.quanity*valor.producto.price)}</th> 
            <th><button onClick={() => {eliminarUnItem (valor.producto.id)}}>x</button></th>                 
          </tr>                 
        ) ) }

        </tbody>
        <tfoot>
          <tr>
              <th>total: $ {total}</th> 
          </tr>
          <tr>
              <th><button onClick={vaciarCarrito}>vaciar carrito</button></th>
              <th><button onClick={ () => { finalizarCompra() }}>finalizar compra</button></th>
          </tr>    
        </tfoot>
      </table>
      <div>
        <input type="text" placeholder="nombre" onChange={(e)=>{setNombre(e.target.value)}}/>
        <input type="text" placeholder="email" onChange={(e)=>{setEmail(e.target.value)}}/>
        <input type="text" placeholder="telefono" onChange={(e)=>{setTelefono(e.target.value)}}/>
      </div>


     
    
    </div>
   
    </>
    
);
                        
};

export default Cart




// React.useEffect(() => {
  
//   prod.forEach(p => {
//      console.log( p.producto.title)
    
  
//   let tablaProductos = document.getElementById ('tabla')
  
//   let row = 
//             <tr>
//               <th>{p.producto.title}</th>
//               <th>{p.producto.title}</th>
//               <th>{p.producto.title}</th>  
//             </tr> 
                      
  
//   ReactDOM.render(row, tablaProductos);
// });

// }, [])

     
    
    


    
    // let tablaProductos = document.getElementsByClassName('tabla');
    // let cuerpoTabla = document.createElement('tbody')
    
    // prod.forEach(p => {
    //   // console.log(p.producto.title);
    //   let fila = document.createElement("tr");

    //   let td = document.createElement("td");
    //   td.innerText=p.producto.title;
    //   fila.appendChild(td);

    //   cuerpoTabla.appendChild(fila);
      
    // });
    
    // tablaProductos.appendChild(cuerpoTabla)
    
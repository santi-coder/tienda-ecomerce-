import {useContext} from 'react'
import { CartContext } from '../context/CartContext'


const Cart = () => {
  
  const {productos} = useContext(CartContext)
  
    let prod = productos
    
    let tablaProductos = document.getElementById('tabla');
    let cuerpoTabla = document.createElement('tbody')
    
    prod.forEach(p => {
      // console.log(p.producto.title);
      let fila = document.createElement("tr");

      let td = document.createElement("td");
      td.innerText=p.producto.title;
      fila.appendChild(td);

      cuerpoTabla.appendChild(fila);
      
    });
    
    tablaProductos.appendChild(cuerpoTabla)
    
  

  return (
    <>
    <div>
      <table id= 'tabla'>
        <tr>
          <th>nombre</th>
          <th>cantidad</th>
          <th>precio</th>
        </tr>
      </table>

      {/* <h4> {prod}</h4> */}
    
    </div>
    </>
);
};

export default Cart
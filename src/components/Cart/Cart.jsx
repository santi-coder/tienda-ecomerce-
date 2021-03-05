import {useContext} from 'react'
import ReactDOM from 'react-dom';
import { CartContext } from '../context/CartContext'


const Cart = () => {
  
  // const {productos} = useContext(CartContext)
  
    // let prod = productos

    

    let tablaProductos = document.getElementById ('tabla')
    let element = <th>santiago</th>;
    ReactDOM.render(element, tablaProductos);



    
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
    
    

  return (
    
    <>
   
    <div>
      <table>
        <thead>
          <tr>
            <th>precio</th>
            <th>nombre</th>
            <th>cantidad</th>
          </tr>
        </thead>
        <tbody>
          <tr id= 'tabla'>
          
            

          </tr>
          
        </tbody>
      </table>

      {/* <h4> {prod}</h4> */}
    
    </div>
   
    </>
    
);


};

export default Cart
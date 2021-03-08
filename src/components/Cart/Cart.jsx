import {useContext} from 'react'
import ReactDOM from 'react-dom';
import { CartContext } from '../context/CartContext'
import React from 'react'


const Cart = () => {
  
  const {productos} = useContext(CartContext)
  
    let prod = productos

    
   

React.useEffect(() => {
  
  prod.forEach(p => {
     console.log( p.producto.title)
    
  
  let tablaProductos = document.getElementById ('tabla')
  
  let row = 
            <tr>
              <th>{p.producto.title}</th>
              <th>{p.producto.title}</th>
              <th>{p.producto.title}</th>  
            </tr> 
                      
  
  ReactDOM.render(row, tablaProductos);
});

}, [])

     
    
    


    
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
        <tbody id= 'tabla' >

        </tbody>
      </table>

     
    
    </div>
   
    </>
    
);
                        
};

export default Cart
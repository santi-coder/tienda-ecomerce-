import React from 'react'

const ItemCountComponent = ({stock, agregarAlCarrito}) => {
    
  const [contador, setContador] = React.useState (1)

    const sumar = (stock) => {
        if (contador<stock){
            setContador (contador+1);
        }else { console.log("nos quedamos sin estock ")

        }
    }

    const resta = () =>{
        if (contador > 1){
            setContador (contador - 1);
        }else {
            console.log("no podemos vender productos negativos")
        }

    }

   const handlerAgregarAlCarrito = () =>{
    agregarAlCarrito(contador);
   }
  
 return (
      <>
    <div className="contenedoBotones">
        <div>
            <button onClick={resta} className="countBotones">-</button>
            <b>{contador}</b>
            <button onClick={() => {sumar (stock)}} className="countBotones">+</button>
        </div>
        <div>
            <button onClick={handlerAgregarAlCarrito} className="btnAgregar"> Agregar al Carrito </button>
        </div>
    </div> 
      </>
    )
}

export default ItemCountComponent

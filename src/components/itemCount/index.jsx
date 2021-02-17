import React from 'react'

const ItemCountComponent = ({stock, agregarAlCarrito }) => {
    
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
        <div style={{marginLeft:100}}>
            <button onClick={resta}>-</button>
            <br/>
            <b>{contador}</b>
            <br/>
            <button onClick={() => {sumar (stock)}}>+</button>
        </div>
        <div style={{marginLeft:50, marginTop:20}}>
            <button onClick={agregarAlCarrito}> Agregar al Carrito </button>
        </div>
      </>
    )
}

export default ItemCountComponent

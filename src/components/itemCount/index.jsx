import React from 'react'

const ItemCountComponent = ({stock, sumar, contador, resta }) => {
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
            <button> Agregar al Carrito </button>
        </div>
      </>
    )
}

export default ItemCountComponent

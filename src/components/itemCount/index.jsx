import React from 'react'

const ItemCountComponent = ({stock}) => {
    return (
      <>
        <div style={{marginLeft:100}}>
            <button>-</button>
            <br/>
            <b>1</b>
            <br/>
            <button>+</button>
        </div>
        <div style={{marginLeft:50, marginTop:20}}>
            <button> Agregar al Carrito </button>
        </div>
      </>
    )
}

export default ItemCountComponent

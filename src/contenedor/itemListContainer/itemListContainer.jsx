import React from 'react'

const ItemListContainerComponent = (props) => {
    return (
        <div>
            <p style={{color:"red", fontSize:50}}>hola como estas, bienvenido a: {props.curso} espero aprendas {props.cantidad}</p>
        </div>
    )
}

export default ItemListContainerComponent

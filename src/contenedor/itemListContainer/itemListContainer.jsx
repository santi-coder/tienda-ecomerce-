import React from 'react'
import ItemCountComponent from '../../components/itemCount'

const ItemListContainerComponent = (props) => {
    return (
        <div>
            <p style={{color:"red", fontSize:50}}>hola como estas, bienvenido a: {props.curso} espero aprendas {props.cantidad}</p>
            <ItemCountComponent stock={5}/>
        </div>
    )
}

export default ItemListContainerComponent

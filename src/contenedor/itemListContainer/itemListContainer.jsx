import React from 'react' 
import ItemCountComponent from '../../components/itemCount'



const ItemListContainerComponent = (props) => {

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

    const agregarAlCarrito = () =>{
        alert("se agrago el producto al carrito");
    }

    return (
        <>
            <ItemCountComponent stock={5} contador={contador} sumar={sumar} resta={resta} agregarAlCarrito={agregarAlCarrito} />
            <p style={{color:"red", fontSize:50}}>hola como estas, bienvenido a: {props.curso} espero aprendas {props.cantidad}</p>
            
        </>
    )
}

export default ItemListContainerComponent

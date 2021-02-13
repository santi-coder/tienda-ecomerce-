import React from 'react' 
import ItemCountComponent from '../../components/itemCount'
import productList from '../../components/mocks/productList' 
import ItemList from './itemList'





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


    /*Desafio clase 6*/

    const [products, setProducts] = React.useState([]);    
    
React.useEffect(() =>{
    const myPromise= new Promise((resolve, reject) => {
        setTimeout(()=> resolve(productList), 2000);
    });

    myPromise.then ((result)=> setProducts (result));

}, []);




    return (
        <>
            <ItemCountComponent stock={5} contador={contador} sumar={sumar} resta={resta} agregarAlCarrito={agregarAlCarrito} />
            <p style={{color:"red", fontSize:50}}>hola como estas, bienvenido a: {props.curso} espero aprendas {props.cantidad}</p>
            <ItemList products={products}/>   
            
        </>
    )
}

export default ItemListContainerComponent

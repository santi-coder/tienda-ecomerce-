import React from 'react' 
import productList from '../../components/mocks/productList' 
import ItemList from './itemList'

const ItemListContainerComponent = (props) => {

//     /*Desafio clase 6*/

    const [products, setProducts] = React.useState([]);    
    
React.useEffect(() =>{
    const myPromise= new Promise((resolve, reject) => {
        setTimeout(()=> resolve(productList), 2000);
    });

    myPromise.then ((result)=> setProducts (result));

}, []);


    return (
        <>
            <p style={{color:"red", fontSize:50}}>hola como estas, bienvenido a: {props.curso} espero aprendas {props.cantidad}</p>
            <ItemList products={products}/>   
            
        </>
    )
}

export default ItemListContainerComponent

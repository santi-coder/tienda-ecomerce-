import React from 'react' 
import productList from '../../components/mocks/productList' 
import ItemList from '../../components/itemList/itemList'
import { getFirestore } from '../../Firebase';


const ItemListContainerComponent = (props) => {

//     /*Desafio clase 6*/

    const [products, setProducts] = React.useState([]);    
   
    // console.log(products);
// React.useEffect(() =>{
//     const myPromise= new Promise((resolve, reject) => {
//         setTimeout(()=> resolve(productList), 2000);
//     });

//     myPromise.then ((result)=> setProducts (result));
        
// }, []);


// implemento firebase 

React.useEffect(() =>{
    const baseDeDatos = getFirestore();
    const itemCollection = baseDeDatos.collection('items');
    itemCollection.get().then((value) => {
    let bd = value.docs.map(element => { 
        return element.data()
    })
    // console.log(bd);
    setProducts(bd)
    });
    
}, [])


return (
        <>
            <p style={{color:"red", fontSize:50}}>hola como estas, bienvenido a: {props.curso} espero aprendas {props.cantidad}</p>
            <ItemList products={products}/>   
            
        </>
    )
}

export default ItemListContainerComponent

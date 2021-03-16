import React from 'react'  
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
    setProducts ( value.docs.map(element => ({ 
        id:element.id, ...element.data()
    })))
    // console.log(products)
    });
    
}, [])


return (
        
            
            <ItemList products={products}/>   
            
        
    )
}

export default ItemListContainerComponent

import React from 'react'
import ItemDetail from '../../components/itemDetail/itemDetail';

const ItemDetailContainer = () => {
    
    const [products, setProducts] = React.useState([]);    
    
React.useEffect(() =>{
    const myPromise= new Promise((resolve, reject) => {
        setTimeout(()=> resolve(productList), 2000);
    });

    myPromise.then ((result)=> setProducts (result));

}, []);
    
    return (
        <ItemDetail products={products}/>
    )
}

export default ItemDetailContainer


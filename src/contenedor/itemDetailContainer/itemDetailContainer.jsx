import React from 'react'
import ItemDetail from '../../components/itemDetail/itemDetail';
import productList from '../../components/mocks/productList';
import {useParams} from 'react-router-dom'
import { getFirestore } from '../../Firebase';

const ItemDetailContainer = () => {

    const [producto, setProducto] = React.useState([]);
    
    const {id} = useParams ()

    // React.useEffect(() => {
    //     const detailPromise= new Promise ((resolve, reject)=>{
    //         setTimeout(()=> resolve(productList),3000);
    //     });

    //     detailPromise.then (function (result) { 
    //         const unProducto = result.find (element => element.id.toString() === id);
    //         setProducto (unProducto)
    //     }
    // )}, []);


React.useEffect(() =>{
    const baseDeDatos = getFirestore();
    const itemCollection = baseDeDatos.collection('items');
    const item = itemCollection.doc(id); 
    
    item.get().then((value) => {
    let detail = value.data()
     console.log(detail);
     setProducto(detail)
    
    });

}, [])



    return <ItemDetail producto={producto} />
    
}

export default ItemDetailContainer
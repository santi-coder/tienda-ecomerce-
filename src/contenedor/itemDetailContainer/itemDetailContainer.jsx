import React from 'react'
import ItemDetail from '../../components/itemDetail/itemDetail';
import {useParams} from 'react-router-dom';
import { getFirestore } from '../../Firebase';

const ItemDetailContainer = () => {

    const [producto, setProducto] = React.useState([]);
    
    const {id} = useParams ()

React.useEffect(() =>{
    const baseDeDatos = getFirestore();
    const itemCollection = baseDeDatos.collection('items');
    const item = itemCollection.doc(id); 
    
    item.get().then((value) => {
    setProducto({id: value.id, ...value.data()})
    });

}, [])

    return <ItemDetail producto={producto} />
}

export default ItemDetailContainer
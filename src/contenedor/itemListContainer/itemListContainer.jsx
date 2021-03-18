import React from 'react'  
import ItemList from '../../components/itemList/itemList'
import { getFirestore } from '../../Firebase';


const ItemListContainerComponent = (props) => {

    const [products, setProducts] = React.useState([]);    


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
         <ItemList products={products} />   
    )
}

export default ItemListContainerComponent

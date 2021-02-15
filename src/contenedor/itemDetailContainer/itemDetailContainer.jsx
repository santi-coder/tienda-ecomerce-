import React from 'react'
import ItemDetail from '../../components/itemDetail/itemDetail';
import productList from '../../components/mocks/productList';


const ItemDetailContainer = () => {

    const [producto, setProducto] = React.useState([]);
    
    React.useEffect(() => {
        const detailPromise= new Promise ((resolve, reject)=>{
            setTimeout(()=> resolve(productList),3000);
        });

        detailPromise.then (function (result) { 
            const unProducto = result.find (element => element.id === 1);
            setProducto (unProducto)
        }
    )}, []);




 



    
    return <ItemDetail producto={producto} />
    
    
}

export default ItemDetailContainer
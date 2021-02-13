import React from 'react'
import ItemDetail from '../../components/itemDetail/itemDetail';
import productList from '../../components/mocks/productList';


const ItemDetailContainer = () => {

    const [producto, setProducto] = React.useState([]);
    
    React.useEffect(() => {
        const detailPromise= new Promise ((resolve, reject)=>{
            setTimeout(()=> resolve(productList),5000);
        });

        detailPromise.then ((result)=> setProducto (result));
    }, []);
    
   
//  console.log(producto)
        
 const unProducto = producto.find (element => element.id === 1);
    //  console.log(unProducto)
         
   
    return <ItemDetail unProducto={unProducto} />
            
        
    
}

export default ItemDetailContainer
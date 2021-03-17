import React from 'react';
import {useParams} from 'react-router-dom';
import Item from '../item/item';
import { getFirestore } from '../../Firebase';

const Categoria = () => {
    
    const [producto, setProducto] = React.useState([]);

    const {catID} = useParams();
    
    React.useEffect(() => {
        
        const baseDeDatos = getFirestore();
    const itemCollection = baseDeDatos.collection('items').where('categoria', '==', catID);
    
    itemCollection.get().then((value) => {
    setProducto ( value.docs.map(element => ({ 
        id:element.id, ...element.data()
    })))
    
    });
    
}, [catID]);


    return(
        <div className="categorias">
            {producto.map((product)=>{
                return(
                    <>
                    <Item key={product.id} product={product}/>
                    </>
                )
            })}
        </div>
    );
};

export default Categoria


// React.useEffect(() => {
        
//     const categoriaPromise= new Promise ((resolve, reject)=>{
//         setTimeout(()=> resolve(productList),1000); 
//     });
    
//     categoriaPromise.then (function (result) { 
//          const filtrarCategorias = result.filter (element => element.categoria.toString() === catID);
//          setProducto (filtrarCategorias)
//          console.log(filtrarCategorias)
//     }
// )}, [catID]);
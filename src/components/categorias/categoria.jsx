import React from 'react';
import {useParams} from 'react-router-dom';
import Item from '../item/item';
import productList from '../mocks/productList';

const Categoria = () => {
    
    const [producto, setProducto] = React.useState([]);

    const {catID} = useParams();
    
    React.useEffect(() => {
        
        const categoriaPromise= new Promise ((resolve, reject)=>{
            setTimeout(()=> resolve(productList),1000); 
        });
        
        categoriaPromise.then (function (result) { 
             const filtrarCategorias = result.filter (element => element.categoria.toString() === catID);
             setProducto (filtrarCategorias)
             console.log(filtrarCategorias)
        }
    )}, [catID]);


    

    return(
        <div>
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
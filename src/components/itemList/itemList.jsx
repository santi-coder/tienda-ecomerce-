import Item from "../item/item";
import ItemCountComponent from "../itemCount";

const ItemList =({products}) => {
      
    return (
    <div className="contenedorItems">
        
            {products.map((product)=>{
                return ( 
                <>
                <Item key={product.id} product={product}/>
                </>
                )

            })}
    

    </div>
    );
};

export default ItemList

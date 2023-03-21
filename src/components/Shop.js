import React, { useContext } from 'react';

// add Product Context whih you exported from ProductContectProvider
import { ProductsContext } from '../context/ProductContextProvider';

// Product Component 
import Product from './shared/Product';

const Shop = () => {

    const Products = useContext(ProductsContext);

    return (
        <div style={{display:"flex", flexWrap:"wrap", gap:"20px", justifyContent:"space-between"}}>
            {
                Products.map(product => <Product key={product.id} productData={product} />)
            }
        </div>
    );
};

export default Shop;
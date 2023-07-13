import React, { useContext } from 'react';

// add Product Context whih you exported from ProductContectProvider
import { ProductsContext } from '../context/ProductContextProvider';

// Product Component 
import Product from './shared/Product';

const Shop = () => {

    const products = useContext(ProductsContext);

    return (
        <div style={{display:"flex", flexWrap:"wrap", gap:"10px", justifyContent:"center", alignItems:"center", maxWidth:"1120px", margin:"120px auto 100px"}}>
            {
                products.map(product => <Product key={product.id} productData={product} />)
            }
        </div>
    );
};

export default Shop;
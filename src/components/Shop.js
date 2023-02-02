import React, { useContext } from 'react';

import { ProductsContext } from '../context/ProductContextProvider';

// Product Component 
import Product from './shared/Product';

const Shop = () => {

    const Products = useContext(ProductsContext);

    return (
        <div>
            {
                Products.map(product => <Product key={product.id} productData={product} />)
            }
        </div>
    );
};

export default Shop;
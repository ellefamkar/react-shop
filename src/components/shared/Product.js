import React from 'react';
import { shortTitle } from '../helper/functions';

const Product = ({productData}) => {
    console.log(productData);
    return (
        <div>
            <img src={productData.image}  alt={productData.title} width='200' />
            <h3>{shortTitle(productData.title)}</h3>
            <p>
                {productData.description}
            </p>
            <p>{productData.price}</p>
            <p>{productData.category}</p>
            <button>Add To Card</button>
        </div>
    );
};

export default Product;
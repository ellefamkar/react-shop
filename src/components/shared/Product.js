import React from 'react';
import { shortTitle } from '../../helper/functions';
import { Link } from "react-router-dom";

const Product = ({productData}) => {
    return (
        <>
            <img src={productData.image}  alt={productData.title} width='200' />
            <h3>{shortTitle(productData.title)}</h3>
            <Link to={`/products/${productData.id}`}> Details</Link>
            <div>
                <button>Add To Card</button>
            </div>
        </>
    );
};

export default Product;
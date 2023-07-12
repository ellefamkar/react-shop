import React , { useContext } from 'react';
import { Link } from "react-router-dom";

import { ProductsContext } from '../context/ProductContextProvider';

const ProductDetails = (props) => {
    const id = props.match.params.id;
    const data = useContext(ProductsContext);
    const product = data[id - 1];
    const {image, title, price, description, category} = product;

    return (
        <>
            <img src={image} alt={title} width='200' />
            <h2>{title}</h2>
            <p>Category : {category}</p>
            <p>
                {description}
            </p>
            <p>{price}</p>
            <Link to="/products">Back to shop</Link>
        </>
    );
};

export default ProductDetails;
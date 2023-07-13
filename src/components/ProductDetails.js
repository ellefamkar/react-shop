import React , { useContext } from 'react';
import { Link } from "react-router-dom";

// context 
import { ProductsContext } from '../context/ProductContextProvider';

// styles 
import styles from "./ProductDetails.module.css";

const ProductDetails = (props) => {
    const id = props.match.params.id;
    const data = useContext(ProductsContext);
    const product = data[id - 1];
    const {image, title, price, description, category, quantity} = product;

    return (
        <>
        <div className={styles.container}>
            <img className={styles.image}  src={image} alt={title} />
            <div className={styles.textContainer}>
                <h2>{title}</h2>
                <p className={styles.category}>Category : {category}</p>
                <p className={styles.description}>
                    {description}
                </p>
                <div className={styles.buttonContainer}>
                <span className={styles.price}>{price} $</span>

                    <Link to="/products">Back to shop</Link>
                </div>
            </div>
        </div>

        </>
    );
};

export default ProductDetails;

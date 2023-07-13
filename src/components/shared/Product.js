import React, {useContext} from 'react';
import { shortTitle, isInCart, quantityCount } from '../../helper/functions';
import { Link } from "react-router-dom";

// context 
import { CartContext } from '../../context/CartContextProvider';

import trashIcon from "../../assets/icons/trash.svg";

import styles from "./Product.module.css";

const Product = ({productData}) => {

    const {state, dispatch} = useContext(CartContext);

    return (
        <div className={styles.container}>
            <img src={productData.image}  alt={productData.title} className={styles.cardImage} />
            <h3>{shortTitle(productData.title)}</h3>
            <p>{productData.price} $</p>
            <div className={styles.linkContainer}>
            <Link to={`/products/${productData.id}`}> details</Link>
            <div className={styles.buttonContainer}>
                {
                    quantityCount(state, productData.id) > 1 &&  <button className={styles.decreseBtn} onClick={()=> dispatch({type: "DECREASE", payload: productData})}>-</button>
                }
                {
                    quantityCount(state, productData.id) === 1 &&  <button className={styles.deleteBtn} onClick={()=> dispatch({type: "REMOVE_ITEM", payload: productData})}><img src={trashIcon} alt='trash'/></button>
                }
                {
                    quantityCount(state, productData.id) > 0 && <span className={styles.counter}>{quantityCount(state, productData.id)}</span>
                }
                {
                    isInCart(state, productData.id) ?
                    <button className={styles.increaseBtn} onClick={()=> dispatch({type: "INCREASE", payload: productData})}>+</button> :
                    <button className={styles.addToCartBtn} onClick={()=> dispatch({type: "ADD_ITEM", payload: productData})}>Add To Card</button>
                }
            </div>
            </div>
        </div>
    );
};

export default Product;
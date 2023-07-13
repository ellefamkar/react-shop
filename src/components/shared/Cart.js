import React, { useContext } from 'react';

// context 
import { CartContext } from '../../context/CartContextProvider';

import { shortTitle } from '../../helper/functions';
import trashIcon from "../../assets/icons/trash.svg";

import styles from "./Cart.module.css";

const Cart = (props) => {

    const {image, title, price, quantity } = props.data;
    const {dispatch} = useContext(CartContext);

    return (
        <div className={styles.container}>
            <img className={styles.productImage} src={image} alt={title}/>
            <div className={styles.data}>
                <h3>{shortTitle(title)}</h3>
                <p>{price} $</p>
            </div>
            <div>
                <span className={styles.quantity}> {quantity}</span>
            </div>
            <div className={styles.buttonContainer}>
                {
                    quantity > 1 ?
                    <button onClick={() => dispatch({type: "DECREASE", payload: props.data })}>-</button> :
                    <button onClick={() => dispatch({type: "REMOVE_ITEM", payload: props.data })}><img src={trashIcon} alt='trash' style={{width: "15px"}} /></button>
                }
                <button onClick={() => dispatch({type: "INCREASE", payload: props.data })}>+</button> 
            </div>
        </div>
    );
};

export default Cart;
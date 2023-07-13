import React, {useContext} from 'react';
import { shortTitle, isInCart, quantityCount } from '../../helper/functions';
import { Link } from "react-router-dom";

// context 
import { CartContext } from '../../context/CartContextProvider';

import trashIcon from "../../assets/icons/trash.svg";

const Product = ({productData}) => {

    const {state, dispatch} = useContext(CartContext);

    return (
        <div style={{display:"flex", flexDirection:"column"}}>
            <img src={productData.image}  alt={productData.title} width='200' />
            <h3>{shortTitle(productData.title)}</h3>
            <Link to={`/products/${productData.id}`}> Details</Link>
            <div>
                {
                    quantityCount(state, productData.id) > 1 &&  <button onClick={()=> dispatch({type: "DECREASE", payload: productData})}>-</button>
                }
                {
                    quantityCount(state, productData.id) === 1 &&  <button onClick={()=> dispatch({type: "REMOVE_ITEM", payload: productData})}><img src={trashIcon} alt='trash' style={{width: "15px"}} /></button>
                }
                {
                    quantityCount(state, productData.id) > 0 && <span>{quantityCount(state, productData.id)}</span>
                }
                {
                    isInCart(state, productData.id) ?
                    <button onClick={()=> dispatch({type: "INCREASE", payload: productData})}>+</button> :
                    <button onClick={()=> dispatch({type: "ADD_ITEM", payload: productData})}>Add To Card</button>
                }
                
            </div>
        </div>
    );
};

export default Product;
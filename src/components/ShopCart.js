import React, { useContext } from 'react';

// Link
import { Link } from "react-router-dom";

// context 
import { CartContext } from '../context/CartContextProvider';
import Cart from './shared/Cart';

const ShopCart = () => {

    const {state, dispatch} = useContext(CartContext);

    return (
        <>
            <div>
                {
                    state.selectedItems.map((item)=> <Cart value={item.id} data={item} />)
                }
            </div>
            <div>
                {
                    state.itemsCounter > 0 && <div>
                        <p><span>Total Items:</span> {state.itemsCounter}</p>
                        <p><span>Total Price:</span> {state.total}</p>
                        <div>
                            <button onClick={()=> dispatch({type:"CHECKOUT"})}>Checkout</button>
                            <button onClick={()=> dispatch({type:"CLEAR"})}>Clear cart</button>
                        </div>
                    </div>
                }
                {
                    state.checkedOut && <div>
                        <p>Checkoud completed.</p>
                        <Link to="/products">Buy more</Link>
                    </div>
                }
                 {
                    !state.checkedOut && state.itemsCounter === 0 && <div>
                        <p>Empty Card</p>
                        <Link to="/products">Buy your dream.</Link>
                    </div>
                }
            </div>
        </>
    );
};

export default ShopCart;
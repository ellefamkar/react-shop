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
            <div style={{maxWidth:"1120px", margin:"100px auto 10px", padding:"1rem"}}>
                {
                    state.selectedItems.map((item)=> <Cart value={item.id} data={item} />)
                }
            </div>
            <div style={{maxWidth: "1088px", margin: "1px auto 20px", padding: "1rem",backgroundColor: "#676767", borderRadius: "10px", color: "white"}}>
                {
                    state.itemsCounter > 0 && <div>
                        <p><span>Total Items:</span> {state.itemsCounter}</p>
                        <p><span>Total Price:</span> {state.total} $</p>
                        <div>
                            <button style={{padding: "0.5rem", border:"none", borderRadius:"5px", margin:"0 0.4rem", cursor:"pointer"}} onClick={()=> dispatch({type:"CHECKOUT"})}>Checkout</button>
                            <button style={{padding: "0.5rem", border:"none", borderRadius:"5px", margin:"0 0.4rem", cursor:"pointer"}} onClick={()=> dispatch({type:"CLEAR"})}>Clear cart</button>
                        </div>
                    </div>
                }
                {
                    state.checkedOut && <div>
                        <p>Checkoud completed.</p>
                        <Link style={{textDecoration:"none", color:"white"}} to="/products">Buy more</Link>
                    </div>
                }
                 {
                    !state.checkedOut && state.itemsCounter === 0 && <div>
                        <p>Empty Card</p>
                        <Link style={{textDecoration:"none", color:"white"}} to="/products">Click here to buy your dream stuff.</Link>
                    </div>
                }
            </div>
        </>
    );
};

export default ShopCart;
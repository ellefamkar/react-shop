import React, {useContext} from 'react';

// context 
import { CartContext } from "../../context/CartContextProvider";

// Link 
import { Link } from "react-router-dom";

// icon 
import cartIcon from "../../assets/icons/shop.svg";


const Navbar = () => {
    const {state} = useContext(CartContext);

    return (
        <div>
            <Link to="/products">Products</Link>   
            <div>
                <Link to='/Cart' style={{textDecoration:"none"}}><img src={cartIcon} alt='navbar' /> </Link>
                <span>{state.itemsCounter}</span>   
            </div>     
        </div>
    );
};

export default Navbar;
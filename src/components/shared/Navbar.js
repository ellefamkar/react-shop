import React, {useContext} from 'react';

// context 
import { CartContext } from "../../context/CartContextProvider";

// Link 
import { Link } from "react-router-dom";

// icon 
import cartIcon from "../../assets/icons/shop.svg";

// styles 
import styles from "./Navbar.module.css";

const Navbar = () => {
    const {state} = useContext(CartContext);

    return (
        <div className={styles.mainContainer}>
             <div className={styles.container}>
                <div className={styles.navLinks}>
                    <Link to="/">Home</Link>   
                    <Link to="/products">Products</Link>   
                </div>
                <div className={styles.iconContainer}>
                    <Link to='/Cart' style={{textDecoration:"none"}}><img src={cartIcon} alt='navbar' /> </Link>
                    <span>{state.itemsCounter}</span>   
                </div> 
             </div>    
        </div>
    );
};

export default Navbar;
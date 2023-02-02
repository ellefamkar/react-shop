import React, { useState, useEffect, createContext} from 'react';

// Get API
import { getProducts } from '../services/api';

// const ProductsContext = React.createContext()
const ProductsContext = createContext();

const ProductContextProvider = ({children}) => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const fetchAPI = async () =>{
            setProducts(await getProducts()); 
        }

        fetchAPI();
    }, []);

    return (
        <ProductsContext.Provider value={products}>
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductContextProvider;
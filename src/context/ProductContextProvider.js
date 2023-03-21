import React, { useState, useEffect, createContext} from 'react';

// Get API
// import { getProducts } from '../services/api';
import { getProducts } from '../local-js/custom-api';

export const ProductsContext = createContext();

const ProductContextProvider = ({children}) => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        setProducts(getProducts); 
    }, []);

    return (
        <ProductsContext.Provider value={products}>
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductContextProvider;



// const ProductsContext = React.createContext()
// export const ProductsContext = createContext();

// const ProductContextProvider = ({children}) => {
//     const [products, setProducts] = useState([]);

//     useEffect(()=>{
//         const fetchAPI = async () =>{
//             setProducts(await getProducts()); 
//         }

//         fetchAPI();
//     }, []);

//     return (
//         <ProductsContext.Provider value={products}>
//             {children}
//         </ProductsContext.Provider>
//     );
// };

// export default ProductContextProvider;
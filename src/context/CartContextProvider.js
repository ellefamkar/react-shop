import React , {createContext, useReducer} from 'react';
import { act } from 'react-dom/test-utils';

// we use useReducer and createContext for cart 

const initialState = {
    selectedItems : [],
    itemsCounter : 0,
    total: 0,
    checkedOut: false
}

// add item -> add item for the first time to basket 
// remove item -> only one item is available in cart 

const sumItems = (items) =>{
    const itemsCounter = items.reduce((total,product)=> total + product.quantity, 0); 
    const total= items.reduce((total,product)=> total + product.price * product.quantity).toFixed(2);
    return{itemsCounter, total};
}

const cartReducer = (state, action) =>{
    switch(action.type){
        case "ADD_ITEM":
            if (!state.selectedItems.find(item => item.id === action.payload.id)){
                state.selectedItems.push({
                    ...action.payload,
                    quantity:1
                })
            }
            return {
                ...state,
                selectedItems: [...state.selectedItems],
                ...sumItems(state.selectedItems),
            }
        case "REMOVE_ITEM":
            const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.id);
            return {
                ...state,
                selectedItems : [...newSelectedItems],
                ...sumItems(state.selectedItems),
            }
        case "INCREASE":
            const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexI].quantity++;
            return {
                ...state,
                ...sumItems(state.selectedItems),
            }
        case "DECREASE":
            const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexD].quantity--;
            return {
                ...state,
                ...sumItems(state.selectedItems),
            }
        case "CHECKOUT":
            return {
                selectedItems : [],
                itemsCounter : 0,
                total: 0,
                checkedOut: true
            }
        case "CLEAR":
            return{
                selectedItems : [],
                itemsCounter : 0,
                total: 0,
                checkedOut: false
            }
        default:
            return state;
    }
}


export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={{state, dispatch}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
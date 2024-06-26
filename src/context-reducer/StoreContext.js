import { createContext, useReducer } from 'react';
import storeReducer, { initialState } from './reducer.js';

export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(storeReducer, initialState);

    const addToBasket = (product) => {
        const updatedBasket = [...state.products, product];
        updatePrice(updatedBasket);
        dispatch({
            type: "add",
            payload: updatedBasket
        });
    };

    const removeFromBasket = (product) => {
        const updatedBasket = state.products.filter((currentProduct) => currentProduct.name !== product.name);
        updatePrice(updatedBasket);
        dispatch({
            type: "remove",
            payload: updatedBasket
        });
    };

    const updatePrice = (products) => {
        let total = 0;
        products.forEach(product => {
            total += product.price;
        });
        dispatch({
            type: "update price",
            payload: total
        });
    };

    const value = {
        total: state.total,
        products: state.products,
        addToBasket,
        removeFromBasket
    };

    return (
        <StoreContext.Provider value={value}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreProvider

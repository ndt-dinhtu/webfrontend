const cartMiddleware = (store) => (next) => (action) => {
    const result = next(action);

    if (action.type.startsWith('cart/')) {
        const state = store.getState();
        const cartItems = state.cart.cartItems;
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }

    return result;
};

export default cartMiddleware;
    
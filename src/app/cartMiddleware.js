const cartMiddleware = (store) => (next) => (action) => {
    const result = next(action);

    // Kiểm tra hành động có liên quan đến giỏ hàng không
    if (action.type.startsWith('cart/')) {
        const state = store.getState();
        const cartItems = state.cart.cartItems;
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }

    return result;
};

export default cartMiddleware;
    
import React from 'react';
import { useSelector } from 'react-redux';
import { cartTotalSelector } from './selectors';


function Cart() {
    const cartTotal = useSelector(cartTotalSelector);

    return <div>Cart Feature {cartTotal}</div>;
}

export default Cart;
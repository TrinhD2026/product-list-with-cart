import React from 'react';
import './Cart.css';

function Cart({selectedItems}) {
    return (
        <ul className="cart-container">
            <li>
                {
                    selectedItems.map((product) => {
                        return (
                            <li key={`${product.name}-${product.id}`}>
                                <p>{product.name}</p>
                                <p>{product.nums}</p>
                                <p>{product.price}</p>
                            </li>
                        );
                    })
                }
            </li>
        </ul>
    )
}

export default Cart;
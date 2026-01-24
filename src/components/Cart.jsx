import React from 'react';
import './Cart.css';

function Cart({selectedItems, handleRemoveItem, handleConfirm}) {

    let totalItems=0;
    let sum=0;
    selectedItems.forEach(p => {
        sum+=p.nums*p.price;
        totalItems+=p.nums;
    });

    return (
        <div className="cart-container">
            <h2>{`Your Cart (${totalItems})`}</h2>
            {totalItems==0&&
                <div className="empty-container">
                <img src="\illustration-empty-cart.svg" alt="empty cart icon" />
                <p>Your added items will appear here</p>
                </div>
            }
            {totalItems>0&&
                <>
                <ul className="items-container">
                    {
                        selectedItems.map((product) => {
                            return (
                                <li key={product.id} className="item-in-cart">
                                    <div className="selection-review">
                                        <p className="product-name-review">{product.name}</p>
                                        <div className="quantity-price">
                                            <p className="quantity-review">{`${product.nums}x`}</p>
                                            <p className="single-price-review">{`@ $${product.price.toFixed(2)}`}</p>
                                            <p className="quantity-price-review">{`$${(product.price*product.nums).toFixed(2)}`}</p>
                                        </div>
                                    </div>

                                    <button className="round-btn remove-item-btn" onClick={() => handleRemoveItem(product.id)}>
                                        <img src="\icon-remove-item.svg" alt="remove item icon" />
                                    </button>
                                </li>
                            );
                        })
                    }
                </ul>

                <div className="total-container">
                    <p>Order total</p>
                    <p>{`$${sum.toFixed(2)}`}</p>
                </div>

                <div className="delivery-container">
                    <img src='\icon-carbon-neutral.svg' alt="carbon neutral icon" />
                    <p>This is <strong>carbon-neutral</strong> delivery</p>
                </div>

                <button className="wide-btn confirm-btn" onClick={() => handleConfirm()}>Confirm Order</button>
                </>
            }
        </div>
        
    )
}

export default Cart;
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
        <>
            <h2>{`Your Cart (${totalItems})`}</h2>
            {totalItems==0&&<img src="\illustration-empty-cart.svg" alt="empty cart icon" />}
            {totalItems>0&&
                <>
                <ul className="cart-container">
                    <li>
                        {
                            selectedItems.map((product) => {
                                return (
                                    <li key={product.id} className="item-in-cart">
                                        <div className="selection-review">
                                            <p>{product.name}</p>
                                            <div className="quantity-price">
                                                <p className="quantity-review">{`${product.nums}x`}</p>
                                                <p className="single-price-review">{`@ $${product.price}`}</p>
                                                <p className="total-price-review">{`$${product.price*product.nums}`}</p>
                                            </div>
                                        </div>

                                        <button className="remove-item-btn" onClick={() => handleRemoveItem(product.id)}>
                                            <img src="\icon-remove-item.svg" alt="remove item icon"/>
                                        </button>
                                    </li>
                                );
                            })
                        }
                    </li>
                </ul>

                <div className="total-container">
                    <p>{`Order total: $${sum}`}</p>
                    <div>
                        <img src='\icon-carbon-neutral.svg' alt="carbon neutral icon" />
                        <p>This is carbon-neutral delivery</p>
                    </div>
                    <button className="confirm-btn" onClick={() => handleConfirm()}>Confirm Order</button>
                </div>
                </>
            }
        </>
        
    )
}

export default Cart;
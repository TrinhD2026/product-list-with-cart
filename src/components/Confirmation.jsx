import React from 'react';
import './Confirmation.css';

function Confirmation({selectedItems,handleStartNewOrder}) {
    let sum=0;
    selectedItems.forEach(p => {
        sum+=p.nums*p.price;
    });

    return (
        <div className="confirmation">
            <img src="\icon-order-confirmed.svg" alt="order confirmed icon"/>
            <h2>Order confirmed</h2>
            <div className="order-view">
                <ul>
                    <li>
                        {
                            selectedItems.map((product) => {
                                return (
                                    <li key={product.id} className="item-in-cart">
                                        <img src={product.imgThumbnail} />
                                        <div className="selection-review">
                                            <p>{product.name}</p>
                                                <p className="quantity-review">{`${product.nums}x`}</p>
                                                <p className="single-price-review">{`@ $${product.price}`}</p>
                                                <p className="total-price-review">{`$${product.price*product.nums}`}</p>
                                        </div>
                                    </li>
                                );
                            })
                        }
                    </li>
                </ul>
                <div className="confirm-order-total">
                    <p>Order total</p>
                    <p>{`$${sum}`}</p>
                </div>
            </div>

            <button className="confirm-btn" onClick={() => handleStartNewOrder()}>Start new order</button>
        </div>

    )
}

export default Confirmation;
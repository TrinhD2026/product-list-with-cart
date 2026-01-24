import React from 'react';
import './Confirmation.css';

function Confirmation({selectedItems,handleStartNewOrder}) {
    let sum=0;
    selectedItems.forEach(p => {
        sum+=p.nums*p.price;
    });

    return (
        <div className="confirmation-container">
            <div className="confirmation-container--content" >
                <img src="\icon-order-confirmed.svg" alt="order confirmed icon" />
                <h2>Order confirmed</h2>
                <p>Hope you enjoy your food</p>
                <div>
                    <ul className="items-container--confirmed">
                        {
                            selectedItems.map((product) => {
                                return (
                                    <li key={product.id}>
                                        <img src={product.imgThumbnail} />
                                        <div>
                                            <p className="product-name-confirmed">{product.name}</p>
                                            <div>
                                                <p className="quantity-confirmed">{`${product.nums}x`}</p>
                                                <p className="single-price-confirmed">{`@ $${product.price.toFixed(2)}`}</p>
                                            </div>
                                        </div>
                                       
                                        <p className="quantity-price-confirmed">{`$${(product.price*product.nums).toFixed(2)}`}</p>
                                    </li>
                                );
                            })
                        }
                    </ul>
                    <div className="total-container">
                        <p>Order total</p>
                        <p>{`$${sum.toFixed(2)}`}</p>
                    </div>
                </div>

                <button className="wide-btn confirm-btn" onClick={() => handleStartNewOrder()}>Start new order</button>
            </div>
        </div>

    )
}

export default Confirmation;
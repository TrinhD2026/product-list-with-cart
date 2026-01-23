import React from 'react';
import './Product.css';

function Product({id, category, name, price, imgMobile, imgDesktop, nums, onAddBtnClick = null, onSubtractBtnClick = null}) {
    return (
        <div className="product-container">
            <picture>
                <source srcset={imgDesktop} media="(min-width: 860px)" />
                <img className="image-product" src={imgMobile} alt={name}
                    style={{border: nums > 0 ? '0.15rem solid var(--red)' : '0'}}
                />
            </picture>
            {
                nums==0 &&
                <button className="add-item-btn" type="button" onClick={() => onAddBtnClick(id)}>
                    <img src="/icon-add-to-cart.svg" alt="add to cart icon" className="add-to-cart-img" />
                    <p>Add to Cart</p>
                </button>
             }
            {
                nums>0&&
                <div className="update-quantity-container">
                    <button id="decrease-quantity-btn" className="quantity-btn" type="button" onClick={() => onSubtractBtnClick(id)}>
                        <img src="/icon-decrement-quantity.svg" alt="decrease quantity icon" className="quantity-img" />
                    </button>
                    <p>{nums}</p>
                        <button id="decrease-quantity-btn" className="quantity-btn" onClick={() => {
                            onAddBtnClick(id);
                            this.blur();
                        }}>
                        <img src="/icon-increment-quantity.svg" alt="increase quantity icon" className="quantity-img" />
                    </button>
                </div>
            }
            <p className="category">{`${category}`}</p>
            <p className="name">{`${name}`}</p>
            <p className="price">{`$${price.toFixed(2)}`}</p>
        </div>
    )
}

export default Product;
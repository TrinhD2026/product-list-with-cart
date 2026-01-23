import React from 'react';
import './Product.css';

function Product({id, category, name, price, imgMobile, imgDesktop, nums, onAddBtnClick = null, onSubtractBtnClick = null}) {
    return (
        <div className="product-container">
            <picture>
                <source srcset={imgDesktop} media="(min-width: 860px)" />
                <img className="image-product" src={imgMobile} alt={`${name}-${id}`} />
            </picture>
            {
                nums==0 &&
                <button className="add-item-btn" type="button" onClick={() => onAddBtnClick(id)}>
                    <img src="/icon-add-to-cart.svg" alt="add to cart icon" className="add-to-cart-img" />
                </button>
             }
            {
                nums>0&&
                <div className="update-quantity-container">
                    <button className="decrease-item-btn" type="button" onClick={() => onSubtractBtnClick(id)}>
                        <img src="/icon-decrement-quantity.svg" alt="decrease quantity icon" className="decrease-quantity-img" />
                    </button>
                    <p>{nums}</p>
                    <button className="increase-item-btn" type="button" onClick={() => onAddBtnClick(id)}>
                        <img src="/icon-increment-quantity.svg" alt="increase quantity icon" className="increase-quantity-img" />
                    </button>
                </div>
            }
            <p className="category">{`${category}`}</p>
            <p className="name">{`${name}`}</p>
            <p className="price">{`$${price}`}</p>
        </div>
    )
}

export default Product;
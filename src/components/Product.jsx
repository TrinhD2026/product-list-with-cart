import React from 'react';
import {useRef} from 'react';
import './Product.css';

function Product({id,category,name,price,imgMobile,imgTablet,imgDesktop,nums,onAddBtnClick=null,onSubtractBtnClick=null}) {
    const increaseQuantityBtn=useRef(null);
    const decreaseQuantityBtn=useRef(null);
    return (
        <div className="product-container">
            <picture>
                <source srcset={imgMobile} media="(max-width: 801px)" />
                <source srcset={imgTablet} media="(max-width: 1025px)" />
                <source srcset={imgDesktop} media="(min-width: 1025px)" />
                <img className="image-product" src={imgMobile} alt={name}
                    style={{border: nums > 0 ? '0.15rem solid var(--red)' : '0'}}
                />
            </picture>
            {
                nums==0 &&
                <button className="wide-btn add-item-btn" type="button" onClick={() => onAddBtnClick(id)}>
                    <img src="/icon-add-to-cart.svg" alt="add to cart icon" className="add-to-cart-img" />
                    Add to Cart
                </button>
             }
            {
                nums>0&&
                <div className="update-quantity-container">
                        <button ref={decreaseQuantityBtn} id="decrease-quantity-btn" className="round-btn" type="button" onClick={() => {
                            onSubtractBtnClick(id);
                            decreaseQuantityBtn.current.blur();
                        }}>
                        <img src="/icon-decrement-quantity.svg" alt="decrease quantity icon" className="quantity-img" />
                    </button>
                    <p>{nums}</p>
                    <button ref={increaseQuantityBtn} id="decrease-quantity-btn" className="round-btn" onClick={() => {
                            onAddBtnClick(id);
                            increaseQuantityBtn.current.blur();
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
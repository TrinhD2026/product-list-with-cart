import React from 'react';
import './Product.css';

function Product({id, category, name, price, imgMobile, imgDesktop}) {
    return (
        <div className="product-container">
            <picture>
                <source srcset={imgDesktop} media="(min-width: 860px)" />
                <img className="image-product" src={imgMobile} alt={`${name}-${id}`} />
            </picture>

            <p className="category">{`${category}`}</p>
            <p className="name">{`${name}`}</p>
            <p className="price">{`$${price}`}</p>
        </div>
    )
}

export default Product;
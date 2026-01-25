import React from 'react';
import {useRef,useEffect} from 'react';
import './Confirmation.css';

function Confirmation({selectedItems,isOpen,setIsOpen}) {

    let sum=0;
    selectedItems.forEach(p => {
        sum+=p.nums*p.price;
    });
    const modalRef=useRef(null);

    useEffect(() => {
        if(!isOpen) {
            return;
        }

        const modalElement=modalRef.current;
        const focusableElements=modalElement.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement=focusableElements[0];
        const lastElement=focusableElements[focusableElements.length-1];
        const handleTabKeyPress=(event) => {
            if(event.key==='Tab') {
                if(event.shiftKey&&document.activeElement===firstElement) {
                    //if shift+tab, prevent focus goes backward out of the first element
                    event.preventDefault();
                    lastElement.focus();
                } else if(!event.shiftKey&&document.activeElement===lastElement) {
                    //if tab at the last element, prevent focus goes out of the last element
                    event.preventDefault();
                    firstElement.focus();
                }
            }
        };

        modalElement.addEventListener('keydown',handleTabKeyPress);
        return () => {
            modalElement.removeEventListener("keydown",handleTabKeyPress);
        };

    },[isOpen,setIsOpen]);

    return isOpen && (
        <div className="confirmation-container" ref={modalRef} >
            <div className="confirmation-container__content" >
                <img src="\icon-order-confirmed.svg" alt="order confirmed icon" />
                <h2>Order confirmed</h2>
                <p>Hope you enjoy your food</p>
                <div>
                    <ul className="items-container__confirmed">
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

                <button className="wide-btn confirm-btn" onClick={() => setIsOpen()}>Start new order</button>
            </div>
        </div>
    )
};

export default Confirmation;
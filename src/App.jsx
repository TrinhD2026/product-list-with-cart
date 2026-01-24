import {useState} from 'react';
import './App.css';
import Product from './components/Product.jsx';
import Cart from './components/Cart.jsx';
import Confirmation from './components/Confirmation.jsx';

const products=[
    {
        id: 1,
        category: "Waffle",
        name: "Waffle with Berries",
        price: 6.50,
        imgMobile: "/image-waffle-mobile.jpg",
        imgTablet: "/image-waffle-tablet.jpg",
        imgDesktop: "/image-waffle-desktop.jpg",
        imgThumbnail: "/image-waffle-thumbnail.jpg",
        nums: 0,
    },
    {
        id: 2,
        category: 'Cr\u00E8me Br\u00FBl\u00E9e',
        name: 'Vanilla Bean Cr\u00E8me Br\u00FBl\u00E9e',
        price: 7,
        imgMobile: "/image-creme-brulee-mobile.jpg",
        imgTablet: "/image-creme-brulee-tablet.jpg",
        imgDesktop: "/image-creme-brulee-desktop.jpg",
        imgThumbnail: "/image-creme-brulee-thumbnail.jpg",
        nums: 0,
    },
    {
        id: 3,
        category: "Macaron",
        name: "Macaron Mix of Five",
        price: 8,
        imgMobile: "/image-macaron-mobile.jpg",
        imgTablet: "/image-macaron-tablet.jpg",
        imgDesktop: "/image-macaron-desktop.jpg",
        imgThumbnail: "/image-macaron-thumbnail.jpg",
        nums: 0,
    },
    {
        id: 4,
        category: "Tiramisu",
        name: "Classic Tiramisu",
        price: 5.50,
        imgMobile: "/image-tiramisu-mobile.jpg",
        imgTablet: "/image-tiramisu-tablet.jpg",
        imgDesktop: "/image-tiramisu-desktop.jpg",
        imgThumbnail: "/image-tiramisu-thumbnail.jpg",
        nums: 0,
    },
    {
        id: 5,
        category: "Baklava",
        name: "Pistachio Baklava",
        price: 4,
        imgMobile: "/image-baklava-mobile.jpg",
        imgTablet: "/image-baklava-tablet.jpg",
        imgDesktop: "/image-baklava-desktop.jpg",
        imgThumbnail: "/image-baklava-thumbnail.jpg",
        nums: 0,
    },
    {
        id: 6,
        category: "Pie",
        name: "Lemon Meringue Pie",
        price: 5,
        imgMobile: "/image-meringue-mobile.jpg",
        imgTablet: "/image-meringue-tablet.jpg",
        imgDesktop: "/image-meringue-desktop.jpg",
        imgThumbnail: "/image-meringue-thumbnail.jpg",
        nums: 0,
    },
    {
        id: 7,
        category: "Cake",
        name: "Red Velvet Cake",
        price: 4.50,
        imgMobile: "/image-cake-mobile.jpg",
        imgTablet: "/image-cake-tablet.jpg",
        imgDesktop: "/image-cake-desktop.jpg",
        imgThumbnail: "/image-cake-thumbnail.jpg",
        nums: 0,
    },
    {
        id: 8,
        category: "Brownie",
        name: "Salted Caramel Brownie",
        price: 4.50,
        imgMobile: "/image-brownie-mobile.jpg",
        imgTablet: "/image-brownie-tablet.jpg",
        imgDesktop: "/image-brownie-desktop.jpg",
        imgThumbnail: "/image-brownie-thumbnail.jpg",
        nums: 0,
    },
    {
        id: 9,
        category: "Panna Cotta",
        name: "Vanilla Panna Cotta",
        price: 6.50,
        imgMobile: "/image-panna-cotta-mobile.jpg",
        imgTablet: "/image-panna-cotta-tablet.jpg",
        imgDesktop: "/image-panna-cotta-desktop.jpg",
        imgThumbnail: "/image-panna-cotta-thumbnail.jpg",
        nums: 0,
    },
];

function App() {

    const [selectedItems,setSelectedItems]=useState([]);

    const [isConfirmed,setIsConfirmed]=useState(false);

    function handleAddItem(id) {
        const selected=products.find(p => p.id===id);
        selected.nums++;

        setSelectedItems(products.filter(product => product.nums>0));
    }

    function handleDecreaseQuantity(id) {
        const selected=products.find(p => p.id===id);
        //just to make sure nums never go negative.
        if(selected.nums>0)
            selected.nums--;

        setSelectedItems(products.filter(product => product.nums>0));
    }

    function removeItem(id) {
        const selected=products.find(p => p.id===id);
        selected.nums=0;
        setSelectedItems(products.filter(product => product.nums>0));
    }

    function startNewOrder() {
        products.forEach(p => p.nums=0);
        setSelectedItems([]);
        setIsConfirmed(false);
    }

    return (
        <div className="main-container">
            <div>
                <h1>Desserts</h1>
                <ul className="products">
                    {
                        products.map((product) => {
                            return (
                                <li key={product.id}>
                                    <Product
                                        id={product.id}
                                        category={product.category}
                                        name={product.name}
                                        price={product.price}
                                        imgMobile={product.imgMobile}
                                        imgTablet={product.imgTablet}
                                        imgDesktop={product.imgDesktop}
                                        nums={product.nums}
                                        onAddBtnClick={handleAddItem}
                                        onSubtractBtnClick={handleDecreaseQuantity} />
                                </li>
                            );
                        })
                    }
                </ul>
            </div>

            <Cart
                selectedItems={selectedItems}
                handleRemoveItem={removeItem}
                handleConfirm={() => setIsConfirmed(true)} />

            {isConfirmed&&<Confirmation selectedItems={selectedItems} handleStartNewOrder={startNewOrder} />}
        </div>
    )
}

export default App

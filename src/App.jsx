import {useState} from 'react';
import './App.css';
import Product from './components/Product.jsx';
import Cart from './components/Cart.jsx';

function App() {
    const products=[
        {
            id: 1,
            category: "Waffle",
            name: "Waffle with Berries",
            price: 6.50,
            imgMobile: "../src/assets/images/image-waffle-mobile.jpg",
            imgDesktop: "../src/assets/images/image-waffle-desktop.jpg",
            nums: 0,
        },
        {
            id: 2,
            category: 'Cr\u00E8me Br\u00FBl\u00E9e',
            name: 'Vanilla Bean Cr\u00E8me Br\u00FBl\u00E9e',
            price: 7,
            imgMobile: "../src/assets/images/image-creme-brulee-mobile.jpg",
            imgDesktop: "../src/assets/images/image-creme-brulee-desktop.jpg",
            nums: 0,
        },
        {
            id: 3,
            category: "Macaron",
            name: "Macaron Mix of Five",
            price: 8,
            imgMobile: "../src/assets/images/image-macaron-mobile.jpg",
            imgDesktop: "../src/assets/images/image-macaron-desktop.jpg",
            nums: 0,
        },
        {
            id: 4,
            category: "Tiramisu",
            name: "Classic Tiramisu",
            price: 5.50,
            imgMobile: "../src/assets/images/image-tiramisu-mobile.jpg",
            imgDesktop: "../src/assets/images/image-tiramisu-desktop.jpg",
            nums: 0,
        },
        {
            id: 5,
            category: "Baklava",
            name: "Pistachio Baklava",
            price: 4,
            imgMobile: "../src/assets/images/image-baklava-mobile.jpg",
            imgDesktop: "../src/assets/images/image-baklava-desktop.jpg",
            nums: 0,
        },
        {
            id: 6,
            category: "Pie",
            name: "Lemon Meringue Pie",
            price: 5,
            imgMobile: "../src/assets/images/image-meringue-mobile.jpg",
            imgDesktop: "../src/assets/images/image-meringue-desktop.jpg",
            nums: 0,
        },
        {
            id: 7,
            category: "Cake",
            name: "Red Velvet Cake",
            price: 4.50,
            imgMobile: "../src/assets/images/image-cake-mobile.jpg",
            imgDesktop: "../src/assets/images/image-cake-desktop.jpg",
            nums: 0,
        },
        {
            id: 8,
            category: "Brownie",
            name: "Salted Caramel Brownie",
            price: 4.50,
            imgMobile: "../src/assets/images/image-brownie-mobile.jpg",
            imgDesktop: "../src/assets/images/image-brownie-desktop.jpg",
            nums: 0,
        },
        {
            id: 9,
            category: "Panna Cotta",
            name: "Vanilla Panna Cotta",
            price: 6.50,
            imgMobile: "../src/assets/images/image-panna-cotta-mobile.jpg",
            imgDesktop: "../src/assets/images/image-panna-cotta-desktop.jpg",
            nums: 0,
        },
    ];

    const [count,setCount]=useState(0);

    return (
        <>
            <h1>Desserts</h1>
            <ul className="products">
                {
                    products.map((product) => {
                        return (
                            <li key={`${product.name}-${product.id}`}>
                                <Product
                                    id={product.id}
                                    category={product.category}
                                    name={product.name}
                                    price={product.price}
                                    imgMobile={product.imgMobile}
                                    imgDesktop={product.imgDesktop} />
                            </li>
                        );
                    })
                }
            </ul>
            <Cart selectedItems={products} />
        </>
    )
}

export default App

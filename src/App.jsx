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
            imgMobile: "/image/image-waffle-mobile.jpg",
            imgDesktop: "/image/image-waffle-desktop.jpg",
            nums: 0,
        },
        {
            id: 2,
            category: 'Cr\u00E8me Br\u00FBl\u00E9e',
            name: 'Vanilla Bean Cr\u00E8me Br\u00FBl\u00E9e',
            price: 7,
            imgMobile: "/image/image-creme-brulee-mobile.jpg",
            imgDesktop: "/image/image-creme-brulee-desktop.jpg",
            nums: 0,
        },
        {
            id: 3,
            category: "Macaron",
            name: "Macaron Mix of Five",
            price: 8,
            imgMobile: "/image/image-macaron-mobile.jpg",
            imgDesktop: "/image/image-macaron-desktop.jpg",
            nums: 0,
        },
        {
            id: 4,
            category: "Tiramisu",
            name: "Classic Tiramisu",
            price: 5.50,
            imgMobile: "/image/image-tiramisu-mobile.jpg",
            imgDesktop: "/image/image-tiramisu-desktop.jpg",
            nums: 0,
        },
        {
            id: 5,
            category: "Baklava",
            name: "Pistachio Baklava",
            price: 4,
            imgMobile: "/image/image-baklava-mobile.jpg",
            imgDesktop: "/image/image-baklava-desktop.jpg",
            nums: 0,
        },
        {
            id: 6,
            category: "Pie",
            name: "Lemon Meringue Pie",
            price: 5,
            imgMobile: "/image/image-meringue-mobile.jpg",
            imgDesktop: "/image/image-meringue-desktop.jpg",
            nums: 0,
        },
        {
            id: 7,
            category: "Cake",
            name: "Red Velvet Cake",
            price: 4.50,
            imgMobile: "/image/image-cake-mobile.jpg",
            imgDesktop: "/image/image-cake-desktop.jpg",
            nums: 0,
        },
        {
            id: 8,
            category: "Brownie",
            name: "Salted Caramel Brownie",
            price: 4.50,
            imgMobile: "/image/image-brownie-mobile.jpg",
            imgDesktop: "/image/image-brownie-desktop.jpg",
            nums: 0,
        },
        {
            id: 9,
            category: "Panna Cotta",
            name: "Vanilla Panna Cotta",
            price: 6.50,
            imgMobile: "/image/image-panna-cotta-mobile.jpg",
            imgDesktop: "/image/image-panna-cotta-desktop.jpg",
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

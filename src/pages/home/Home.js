import React, { useEffect, useState } from 'react';
import Allbooks_Category from './Allbooks_Category';
import Allbooks from './Books/Allbooks';
import { HiShoppingCart } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import Cart from '../Cart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
const Home = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCrat] = useState([]);

    useEffect(() => {
        fetch('allbooks.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(()=> {
        const storedCart = getStoredCart();
        const savedCard = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity
                savedCard.push(addedProduct);

            }
        }
        setCrat(savedCard);
    },[products])


    const hadelAddToCart = (product) => {
        console.log(product);
        const newCart = [...cart, product];
        setCrat(newCart);
        addToDb(products.id);

    };
    return (
        <div className='grid grid-cols-4 gap-4  bg-base-100'>
            <div>
                <Allbooks_Category
                ></Allbooks_Category>
            </div>
            <div className='col-span-2'>
                <Allbooks
                    products={products}
                    setProducts={setProducts}
                    hadelAddToCart={hadelAddToCart}
                ></Allbooks>
            </div>
            <div >
                <div className="card  bg-base-100 shadow-xl fixed mt-5">
                    <Cart cart={cart}>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Home;
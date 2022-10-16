import React from 'react';

const Books = ({hadelAddToCart, product}) => {
    const { name, img, price, ratting } = product;
    return (
        <div  className="card w-42 border-solid-base-100  hover:bg-base-100 hover:shadow-xl">
            <figure className="px-10 pt-10 py-0">
                <img src={img} alt="Shoes" className="rounded-xl p-15" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-base font-bold">{name}</h2>
                <p>Price: {price}</p>
                <div className="card-actions ">
                    <button onClick={()=> hadelAddToCart(product)} className="btn btn-primary px-10">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Books;
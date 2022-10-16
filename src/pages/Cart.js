import React from 'react';

const Cart = ({cart}) => {

    let total = 0;
    for(const product of cart){
        total = total + product.price
    } 

    return (
        <div className="card-body">
                        <h2 className="card-title">Order Summery</h2>
                        <p>Selected Books: {cart.length}</p>
                        <p>Total Price: {total}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Processed To checkout</button>
                        </div>
                    </div>
    );
};

export default Cart;
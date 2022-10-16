import React, { useEffect, useState } from 'react';
import Books from './Books';

const Allbooks = ({hadelAddToCart, products}) => {
   

    return (
        <div>
            <h3 className=' font-bold m-5 text-lg'>Recent Book</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-6'>
            
            {
                products.map(product => <Books
                key={product.id}
                product={product}
                hadelAddToCart ={hadelAddToCart}
                ></Books> )
            }
        </div>
        </div>
    );
};

export default Allbooks;
import React from 'react';
import { Link } from 'react-router-dom';

const Allbooks_Category = () => {
    return (
        <div className='border border-r-orange-700  ml-2'>
            <div className="card w-48 mt-10 ml-10 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title ">All Book</h2>
                    <h6><Link to="/">Example 1</Link></h6>
                    <h6><Link to="/">Example 2</Link></h6>
                    <h6><Link to="/">Example 3</Link></h6>
                    <h6><Link to="/">Example 4</Link></h6>
                    <h6><Link to="/">Example 5</Link></h6>
                </div>
            </div>
            <div className="card w-48 mt-10 ml-10 bg-base-100 shadow-xl mt-6">
                <div className="card-body">
                    <h2 className="card-title">Author</h2> 
                    <h6><Link to="/">Example 1</Link></h6>
                    <h6><Link to="/">Example 2</Link></h6>
                    <h6><Link to="/">Example 3</Link></h6>
                    <h6><Link to="/">Example 4</Link></h6>
                    <h6><Link to="/">Example 5</Link></h6>
                </div>
            </div>
        </div>

    );
};

export default Allbooks_Category;
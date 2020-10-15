import React from 'react';
import { NavLink } from 'react-router-dom';
import './Review.css'

const Review = () => {
    return (
        <div className="container">
            <div className="row"> 
            <div className="col-md-3"> 
            <h5>Logo here</h5>
            <NavLink to="/order"><p>. Order</p></NavLink>
            <NavLink to="/service"><p>. Services list</p></NavLink>
            <p className="colorR" >. Review</p>
            </div>
            <div className="col-md-7"> 
            <h4>Order</h4>
            <br/>
            <input type="text" className = "OrderSize" placeholder="Your name"/>
            <br/>
            <br/>
            <input  type="text" placeholder="Company's name Designation" className = "OrderSize"/>
            <br/>
            <br/>
            <input  type="text" placeholder="Description" className = "OrderSize"/>
            <br/>
            <br/>
            <button className="btnColor" size="sm">
                  Send
            </button>
            </div>
            </div>
        </div>
    );
};

export default Review;
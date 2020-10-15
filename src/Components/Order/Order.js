import React from 'react';
import { NavLink } from 'react-router-dom';
import './Order.css'

const Order = () => {
    return (
        <div className="container">
            <div className="row"> 
            <div className="col-md-3"> 
            <h5>Logo here</h5>
            <NavLink to="/order"><p className="colorR">. Order</p></NavLink>
            <NavLink to="/service"><p>. Services list</p></NavLink>
            <NavLink to="/review"><p>. Review</p></NavLink>
            </div>
            <div className="col-md-7"> 
            <h4>Order</h4>
            <br/>
            <input type="text" className = "OrderSize" placeholder="Your name/Company's name"/>
            <br/>
            <br/>
            <input  type="text" placeholder="Your email address" className = "OrderSize"/>
            <br/>
            <br/>
            <input  type="text" placeholder="Graphic Design" className = "OrderSize"/>
            <br/>
            <br/>
            <input  type="text" placeholder="Project Details" className = "OrderSize"/>
            <br/>
            <br/>
            <input  type="text" placeholder="Price" className = "OrderSize"/>
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

export default Order;
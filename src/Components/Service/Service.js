import React from 'react';
import { NavLink } from 'react-router-dom';
import imge1 from '../../images/icons/service1.png';
import imge2 from '../../images/icons/service2.png';
import './Service.css';

const Service = () => {
    return (
        <div className="container">
            <div className="row"> 
            <div className="col-md-4"> 
            <h5>Logo here</h5>
            <NavLink to="/order"><p>. Order</p></NavLink>
            <p  className="colorS" >. Services list</p>
            <NavLink to="/review"><p>. Review</p></NavLink>
             </div>
            <div className="col-md-4"> 
            <h5>Order</h5>
            <img src={imge1} alt="" className="img-fluid"/>
                <h5>Graphics design</h5>
                <p><small>Lorem ipsum dolor sit amet consectetur adipisicing.</small></p>
            </div>
            <div className="col-md-4"> 
            <img src={imge2} alt="" className="img-fluid"/>
                <h5>Graphics design</h5>
                <p><small>Lorem ipsum dolor sit amet consectetur adipisicing.</small></p>
            </div>
            </div>
        </div>
    );
};

export default Service;
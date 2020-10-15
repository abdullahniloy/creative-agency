import React from 'react';
import {Button,Navbar,Nav,Link,Carousel} from 'react-bootstrap';
import logo from '../../images/logos/logo.png';
import './Home.css';
import img from '../../images/logos/Frame.png';
import img2 from '../../images/logos/slack.png';
import img3 from '../../images/logos/airbnb.png';
import img4 from '../../images/logos/google.png';
import img5 from '../../images/logos/netflix.png';
import img6 from '../../images/logos/uber.png';

import img7 from '../../images/icons/service1.png';
import img8 from '../../images/icons/service2.png';
import img9 from '../../images/icons/service3.png';

import carosel1 from '../../images/carousel-1.png';
import carosel2 from '../../images/carousel-2.png';
import carosel3 from '../../images/carousel-3.png';
import carosel4 from '../../images/carousel-4.png';
import carosel5 from '../../images/carousel-5.png';

import NashPatrik from '../../images/customer-1.png';
import Miriam from '../../images/customer-2.png';
import Bria from '../../images/customer-3.png';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container" >
           <div className=" backGround" > 
           <div> 
            <Navbar bg="light" variant="light">
            <img className="img" src={logo} alt=""/>
             <Nav className="mr-auto">
             </Nav>
             <Nav.Link href="/home" >Home</Nav.Link>
              <Nav.Link >Our Portfolio</Nav.Link>
              <Nav.Link >Our Team</Nav.Link>
              <Nav.Link >Contact Us</Nav.Link>
              <NavLink to="/order"><button className="btnColor" variant="secondary">Login</button></NavLink>
               </Navbar>
              <br/>
            <div className="row"> 
            <div className="col-md-4 offset-md-1"> 
           <h1>Let's Grow YourBrand To The Next Level</h1>
              <br/>
             <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora facilis, molestias saepe  consequatur labore quod?</small></p>
             <button className="btnColor" size="sm">
                  Hire Us
             </button>
            </div>
            <div className="col-md-6">
            <img src={img} alt="" className="img-fluid"/>
                 </div>
            </div>
            </div>
            </div>
           <br/>
           <br/>
           <div className="row">
               <div className="col-md-2">
                   <img src={img2} alt="" className="img-fluid"/>
                    </div>
               <div className="col-md-2">
               <img src={img3} alt="" className="img-fluid"/>
                    </div>
               <div className="col-md-2"> 
               <img src={img4} alt="" className="img-fluid"/>
               </div>
               <div className="col-md-2"> 
               <img src={img5} alt="" className="img-fluid"/>
               </div>
               <div className="col-md-2"> 
               <img src={img6} alt="" className="img-fluid"/>
               </div>
                </div>
                <br/>
                <br/>
            <div> 
                <h3 className="services"><b>Provide awesome <b className="servicesColor">services</b> </b></h3>
            </div>
                <br/>
                <br/>
                <div className="row"> 
                <div className="col-md-3">
                    <NavLink to="/order"><img src={img7} alt="" className="img-fluid"/>
                    <h5>Web and Mobile design</h5>
                    <p><small>Lorem ipsum dolor sit amet consectetur adipisicing.</small></p></NavLink>
                     </div>
                <div className="col-md-3"> 
                <NavLink to="/order"><img src={img8} alt="" className="img-fluid"/>
                <h5>Graphics design</h5>
                <p><small>Lorem ipsum dolor sit amet consectetur adipisicing.</small></p></NavLink>
                </div>
                <div className="col-md-3"> 
                <NavLink to="/order"> <img src={img9} alt="" className="img-fluid"/>
                <h5>Web development</h5>
                <p><small>Lorem ipsum dolor sit amet consectetur adipisicing.</small></p></NavLink>
                </div>
                </div>
                <br/>
                <br/>
                <div className="worksBackGround"> 
                <br/>
                <h3> <b className="work2">Here are some of</b> <b className="work">our works</b></h3>
                <br/>
                <br/>
                <Carousel >
                    <Carousel.Item className ="cro">
                        <img
                        className="CaroImg "
                        src={carosel1}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className ="cro">
                        <img
                        className="CaroImg"
                        src={carosel2}
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className ="cro">
                        <img
                        className="CaroImg"
                        src={carosel3}
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className ="cro">
                        <img
                        className="CaroImg"
                        src={carosel4}
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className ="cro">
                        <img
                        className="CaroImg"
                        src={carosel5}
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
                </div>
                <br/>
                <br/>
                <div> 
                    <h3 className="Center"><b className="client">Clients</b> <b className="feedback">Feedback</b></h3>
                    <br/>
                    <br/>
                    <div className="row"> 
                    <div className="col-md-4"> 
                    <div className="col-md-3">
                    <img src={NashPatrik} alt="" className="img-fluid"/>
                    </div>
                    <p>Nash Patrik</p>
                    <small>CEO, MANPOL</small>
                    <p><small>Lorem ipsum dolor sit amet consectetur adipisicing.</small></p>
                    </div>
                    <div className="col-md-4"> 
                    <div className="col-md-3">
                    <img src={Miriam} alt="" className="img-fluid"/>
                    </div>
                    <p>Miriam Barron</p>
                    <small>CEO, MANPOL</small>
                    <p><small>Lorem ipsum dolor sit amet consectetur adipisicing.</small></p>
                    </div>
                    <div className="col-md-4"> 
                    <div className="col-md-3">
                    <img src={Bria} alt="" className="img-fluid"/>
                    </div>
                    <p>Bari Malone</p>
                    <small>CEO, MANPOL</small>
                    <p><small>Lorem ipsum dolor sit amet consectetur adipisicing.</small></p>
                    </div>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <div className="row backColor"> 
                <div className="col-md-6">
                <h3 className="marginTop"><b>Lets us handle your</b></h3>
                <h3><b>your project, professionally</b></h3>
                <p><small>Lorem ipsum dolor sit, amet consectetur adipisicing.</small></p>
                </div>
                <div className="col-md-5"> 
            <input className="margin" type="text" placeholder="Your email address" className = "size"/>
            <br/>
            <br/>
            <input type="text" placeholder="Your Name/Company's Name" className = "size"/>
            <br/>
            <br/>
            <input type="text" placeholder="Your Message" className = "largeSize"/>
               <br/>
               <br/>
               <button className="btnColor" size="sm">
                  Send
                 </button>
                </div>
                <footer className="footer"><small >Copyright Orange Lab 2020</small></footer>
                </div>
        </div>
    );
};

export default Home;
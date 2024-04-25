import React from 'react'
import weblogo from '..//../assets/img/logo.png';
import { Link } from "react-router-dom";
import '..//../assets/js/main.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
// import '..//../assets/css/style.css';
export default function header() {
  return (
    <header id="header" className="fixed-top d-flex align-items-center bg-white">
    <div className="container d-flex justify-content-between align-items-center">
      <div className="logo">
        <Link to="/"><img  className="img-fluid" width={110} src={weblogo} /></Link>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/Pricing">Pricing</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/order_a_device">Order a Device</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/book_a_demo">Book a Demo</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Get-a-Free-Quote">Get a Free Quote</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Blog">Blog</Link>
              </li>
            </ul>
            
          </div>
         
        </div>
        <span><i className="fa fa-list mobile-nav-toggle navbar-mobile"></i> </span>
      </nav>
      
    </div>
  </header>
  )
}



  // <header id="header" class="fixed-top d-flex align-items-center">
  //   <div class="container d-flex justify-content-between align-items-center">

  //     <div class="logo">
         
  //     <Link to="/"><img  class="img-fluid" width={110} src={weblogo} /></Link>
         
  //     </div>

  //     <nav id="navbar" class="navbar">
  //       <ul>
  //         <li><a class="active " href="index.html">Home</a></li>
  //         <li><a href="Privacy-Policy.html">Privacy Policy</a></li>
  //         <li><a href="Terms-of-Use.html">Terms Of Use</a></li>
  //         <li><a href="Cookie-Policy.html">Cookie Policy</a></li>
  //         <li><a href="contact.html">Contact Us</a></li>
  //       </ul>
  //       <i class="bi bi-list mobile-nav-toggle"></i>
  //     </nav> 

  //   </div>
  // </header>
import React from 'react'
import weblogo from '..//../assets/img/logo.png';
import { Link } from "react-router-dom";
export default function header() {
  return (
    <header id="header" class="fixed-top d-flex align-items-center bg-white">
    <div class="container d-flex justify-content-between align-items-center">
      <div class="logo">
        <Link to="/"><img  class="img-fluid" width={110} src={weblogo} /></Link>
      </div>
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
            <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" aria-current="page" to="/Pricing">Pricing</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/order_a_device">Order a Device</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/book_a_demo">Book a Demo</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Get-a-Free-Quote">Get a Free Quote</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Blog">Blog</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
  )
}

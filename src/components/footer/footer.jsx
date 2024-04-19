import React from 'react';
import weblogo from '..//../assets/img/logo.png';
import  './footer.css';
export default function Footer() {
  return (
    <div className='footer'>
      <footer class="footer" role="contentinfo">
    <div class="container">
      <div class="row">
        <div class="col-md-4 mb-4 mb-md-0">
          <div class="logo">
          <div class="col-md-6 mb-6 mb-md-0">
          <a href="index.html">  <img class="img-fluid" width={120} src={weblogo} /> </a>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius ea delectus pariatur, numquam aperiam
            dolore nam optio dolorem facilis itaque voluptatum recusandae deleniti minus animi.</p>
              </div>
              <div class="col-md-4 mb-4 mb-md-0">
               
                
              </div>
              <div class="col-md-4 mb-4 mb-md-0">
            
          </div>
          
          {/* <p class="social">
            <a href="#"><span class="fa fa-twitter"></span></a>
            <a href="#"><span class="fa fa-facebook"></span></a>
            <a href="#"><span class="fa fa-instagram"></span></a>
            <a href="#"><span class="fa fa-linkedin"></span></a>
          </p> */}
        </div>
        <div class="col-md-7 ms-auto">
          <div class="row site-section pt-0">
            <div class="col-md-4 mb-4 mb-md-0">
              
            </div>
            <div class="col-md-4 mb-4 mb-md-0">
             
              
            </div>
            <div class="col-md-4 mb-4 mb-md-0">
              
              
            </div>
          </div>
        </div>
      </div>

      <div class="row justify-content-center text-center">
        <div class="col-md-7">
          <p class="copyright">&copy; Copyright FB Vid Lite. All Rights Reserved</p>
          <div class="credits">
           
            Designed by <a href="https://techvezoto.com/">Tech Vezoto</a>
          </div>
        </div>
      </div>
      </div>
    </div>
  </footer>
    </div>
  )
}

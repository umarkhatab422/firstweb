import React from 'react';
import weblogo from '..//../assets/img/logo.png';
import DvsaLogo from '..//../assets/img/DVSA-EARNED-LOGO-00 (1).webp';
import  './footer.css';
import { Link } from "react-router-dom";
import DownloadButton from '.././/../assets/img/Download-Button-1.png';
import DownloadButton1 from '.././/../assets/img/Download-Button-1-1.png';
import XLogo from '.././/../assets/img/x.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
  return (
     <div>
    <div className='footer'>
      <footer className="footer" role="contentinfo">
        <div className="container MainFooter">
          <div className="row align-items-center">
            <div className="col-12 hero-text-image">
              <div className="row">
                <div className="col col-lg-3">
                  <img  className="img-fluid" width={108} src={weblogo} /><br/>
                  <h4  href="#">info@techgv.co.uk</h4><br/>
                  <h4  href="#">01332 323 989</h4>
                  <div >
                  <a href="#" className="fa fa-facebook"></a>
                  <span><i className="bi bi-0-circle"></i></span>
                  <a href="#" className="fa fa-linkedin"></a>
                 <a href="#" class="fa"><img   width={15} src={XLogo} /></a> 
                  <a href="# " className="fa fa-instagram"></a>
                  
                   </div>
                </div>
                <div className="col col-lg-3">
                  <img  className="img-fluid3" width={130}  padding-top={36} src={DvsaLogo} />
                </div>
                <div className="col col-lg-2"></div>
                <div className="col col-lg-4">
                <h3>What are you waiting for?</h3>
                <p>Join hundreds of thousands of happy users.</p>
                <div className="row justify-content-md-normal1 ">
                  <div className="col col-lg-4">
                    <Link to="/"><img  width={120} src={DownloadButton} /></Link>
                  </div>
                  <div className="col col-lg-4"></div>
                  <div className="col col-lg-4">
                    <Link tp="/"><img  width={120} src={DownloadButton1} /></Link>
                  </div>
                </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
    <div className='footer bottomBar'>
      <div className="container">
        <div class="row justify-content-center text-center">
        
          <div class="col-md-6">
            <p class="copyright">&copy; Copyrights 2024 TecHGV All Rights Reserved Powered By <a href="#">Tech Vezoto</a></p>
            <div class="credits"><p><a href="#">Terms of Business </a> &nbsp; <a href="#">Privacy Policy</a></p>
            </div>
          </div>
          <div class="col-md-6"></div>
        </div>
      </div>
   
    </div>
  </div>
  )
}

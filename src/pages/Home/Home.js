import React from 'react'
import PhoneImg from 'assets/img/main-img-1.png';
import DownloadButton from 'assets/img/Download-Button-1.png';
import DownloadButton1 from 'assets/img/Download-Button-1-1.png';
import { Link } from "react-router-dom";
const Home=()=> {
  return (

<section class="hero-section" id="hero">
<div className="container">
  <div className="row align-items-center">
    <div className="col-12 hero-text-image">
      <div className="row">
        <div className="col-lg-6 text-center text-lg-start">
          <h1 data-aos="fade-right">Your Electronic Transport Managers
          </h1>
          <p>TecHGV is a multi-language application designed to<br />ensure your fleet stays compliant.</p>
          <div className="row justify-content-md-normal">
            <div className="col col-lg-6">
              <Link to="/"><img  className="img-fluid1" width={120} src={DownloadButton} /></Link>
            </div>
            <div class="col col-lg-6">
              <Link tp="/"><img  className="img-fluid2" width={120} src={DownloadButton1} /></Link>
            </div>
          </div>
          <div className="row justify-content-md-normal">
            <div className="col col-lg-12">
            <p data-aos="fade-right" data-aos-delay="200" ><Link to="/" className="btn btn-outline-white btn-Get-started">LOGIN</Link></p>
            </div>
          </div>
          <div className="row justify-content-md-normal">
            <div className="col col-lg-6">
            <p data-aos="fade-right" data-aos-delay="200" data-aos-offset="-500"><Link to="/" className="btn btn-outline-white btn-No-Long">No Long Contracts</Link></p>
            </div>
            <div class="col col-lg-6">
            <p data-aos="fade-right" data-aos-delay="200" data-aos-offset="-500"><Link to="/" className="btn btn-outline-white btn-No-Long">Pay as You Go</Link></p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 iphone-wrap">
        <img  className="phone-2" src={PhoneImg} />
        </div>
      </div>
    </div>
  </div>
</div>

</section>

  );
}

export default Home;
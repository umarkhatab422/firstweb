import React from 'react';
import PhoneImg from '.././/../assets/img/main-img-1.png';
import DriverChecksimg from '.././/../assets/img/Driver-Checks-mobile-1.png';
import TorqueRegisterimg from '.././/../assets/img/Torque-Register-mobile-1.png';
import FuelAdblueUsageimg from '.././/../assets/img/Fuel-Adblu-Usage-mobile-1.png';
import DownloadButton from '.././/../assets/img/Download-Button-1.png';
import DownloadButton1 from '.././/../assets/img/Download-Button-1-1.png';
import DriverChecksimgG from '.././/../assets/img/Group-37142-1.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '..//../assets/js/main.js'
import NumberCounter from '..//../components/NumberCounter/NumberCounter.jsx';

import { Link } from "react-router-dom";
export default function home() {
  return (
<div>
  <section class="hero-section" id="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 hero-text-image">
            <div className="row">
              <div className="col-lg-6 text-center text-lg-start">
                <h1 className="fade-right">Your Electronic Transport Manager</h1>
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
                  <p className="fade-right" ><Link to="/" className="btn btn-outline-white btn-Get-started">LOGIN</Link></p>
                  </div>
                </div>
                <div className="row justify-content-md-normal">
                  <div className="col col-lg-6">
                  <p className="fade-right"><Link to="/" className="btn btn-outline-white btn-No-Long">No Long Contracts</Link></p>
                  </div>
                  <div class="col col-lg-6">
                  <p className="fade-right"><Link to="/" className="btn btn-outline-white btn-No-Long">Pay as You Go</Link></p>
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
  <section className='Electronic'>
  <div className="container">
        <div className="row align-center Electronic-row">
          <div className="col-12">
          <h2 className="fade-right text-center">Trusted By Customers <br/> Across The <span style={{ color: '#7ebcb1' }}>Industries </span> </h2>
          </div>
        </div>
        <div className="row align-center Electronic-row">
          <div className="col-md-4 text-center">
            <div className=' text-center1'>
            <h2 style={{ color: '#7ebcb1', fontSize: '72px'}}><NumberCounter start={0} end={150} duration={3000} /></h2>
              <h3>Customers</h3>
                
            </div>
          </div>
          <div className="col-md-4">
            <div className=' text-center1'>
            <h2 style={{ color: '#7ebcb1',  fontSize: '72px'}}><NumberCounter start={0} end={325} duration={3000} /></h2>
              <h3>Transport Mangers</h3>
                
            </div>
          </div>
          <div className="col-md-4">
            <div className=' text-center1'>
            <h2 style={{ color: '#7ebcb1',  fontSize: '72px'}}><NumberCounter start={0} end={772} duration={3000} /></h2>
              <h3>Drivers</h3>
                
            </div>
          </div>
        </div>
      </div>
  </section>
  <section className='Driver-Checks-sec'>
  <div className="container">
        <div className="row align-center Electronic-row">
        <div className="col-md-4 text-center">
            <div className="feature-1">   
              <img  className="DriverChecksimg" src={DriverChecksimg} />
              <h3 className="mb-3">Driver Checks</h3>
              <p>With our advanced technology and user-friendly platform, you can efficiently manage driver documentation, monitor compliance, and maintain a reliable record of driver checks.</p>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="feature-1">   
              <img  className="DriverChecksimg" src={TorqueRegisterimg} />
              <h3 className="mb-3">Torque Register</h3>
              <p>With our intuitive platform, you can easily track, monitor, and maintain accurate records of torque specifications. Trust TecHGV to streamline your torque register process and ensure optimal performance.</p>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="feature-1 ">   
              <img  className="DriverChecksimg" src={FuelAdblueUsageimg} />
              <h3 className="mb-3">Fuel & Adblue Usage</h3>
              <p>A comprehensive solution for managing fuel & Adblue usage, helping you optimise efficiency. With our user-friendly platform, you can easily monitor fuel and Adblue levels, track usage patterns.</p>
            </div>
          </div>
        </div>
      </div>
  </section>
  <section class="OneApp-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 hero-text-image">
            <div className="row">
              <div className="col-lg-6 text-lg-start">
                <h1 className="fade-right">Your Electronic Transport Manager</h1>
                <p>TecHGV is a multi-language application designed to<br />ensure your fleet stays compliant.</p>
              </div>
              <div className="col-lg-6 iphone-wrap text-center">
              <img  className="phone-2" src={DriverChecksimgG} />
              </div>
            </div>
          </div>
        </div>
      </div>
  </section>
</div>

  );
}

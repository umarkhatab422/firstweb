import React from 'react';
import PhoneImg from '.././/../assets/img/main-img-1.png';
import DriverChecksimg from '.././/../assets/img/Driver-Checks-mobile-1.png';
import TorqueRegisterimg from '.././/../assets/img/Torque-Register-mobile-1.png';
import FuelAdblueUsageimg from '.././/../assets/img/Fuel-Adblu-Usage-mobile-1.png';
import DownloadButton from '.././/../assets/img/Download-Button-1.png';
import DownloadButton1 from '.././/../assets/img/Download-Button-1-1.png';
import DriverChecksimgG from '.././/../assets/img/Group-37142-1.png';
import TripTrackinginG from '.././/../assets/img/techgv-37164.png';
import VehicleManagementinG from '.././/../assets/img/Group-37143-1-2-1.png';
import DriverDefectReportImG from '.././/../assets/img/DriverDefectReportImG.png';
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
              <div className="col-lg-6 text-lg-start">
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
          <div className="col-md-12  text-center">
          <h2 className="fade-right">Trusted By Customers <br/> Across The <span style={{ color: '#7ebcb1' }}>Industries </span> </h2>
          </div>
        </div>
        <div className="row align-center Electronic-row">
          <div className="col-md-4 text-center">
            <div className=' text-center1'>
            <h2 style={{ color: '#7ebcb1', fontSize: '72px'}}><NumberCounter start={0} end={150} duration={3000} /></h2>
              <h3>Customers</h3>
                
            </div>
          </div>
          <div className="col-md-4  text-center">
            <div className=' text-center1'>
            <h2 style={{ color: '#7ebcb1',  fontSize: '72px'}}><NumberCounter start={0} end={325} duration={3000} /></h2>
              <h3>Transport Mangers</h3>
                
            </div>
          </div>
          <div className="col-md-4  text-center">
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
                <h2 className="fade-right">One App, Infinite <br/><span style={{ color: '#7ebcb1' }}>Possibilities</span></h2>
                <p>TecHGV offers a world of infinite possibilities when it comes to fleet management and vehicle tracking. With our innovative solutions and advanced technology, we empower businesses to unlock new levels of efficiency, productivity, and legal compliance.</p>
                <br/>
                  <p>One of the key strengths of TecHGV lies in its ability to provide comprehensive fleet management software that caters to the unique needs of each client. Whether it’s a small business with a handful of vehicles or a large enterprise with an extensive fleet, TecHGV has the tools and expertise to optimise fleet operations.</p>
              </div>
              <div className="col-lg-6 iphone-wrap text-center">
              <img  className="phone-2" src={DriverChecksimgG} />
              </div>
            </div>
          </div>
        </div>
      </div>
  </section>
  <section class="TripTrackinginG">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12 hero-text-image">
          <img  className="TripTrackinginG1" src={TripTrackinginG} />
          </div>
        </div>
      </div>
  </section>
  <section class="OneApp-section" style={{ paddingTop: '0px'}}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 hero-text-image">
            <div className="row">
            <div className="col-lg-6 iphone-wrap text-center">
              <img  className="phone-2" src={VehicleManagementinG} />
              </div>
              <div className="col-lg-6 text-lg-start " style={{ padding: '70px'}}>
                <h2 className="fade-right" style={{ padding: '0px'}}>Driver, Trailer <br/> and Vehicle <br/><span style={{ color: '#7ebcb1' }}>Management</span></h2>
                <p>TecHGV’s solutions seamlessly integrate trailer, vehicle, and driver data into a centralised platform, providing businesses with a holistic view of their entire fleet operations.</p>
                <br/>
                  <p>Fleet managers can access real-time analytics and generate customised reports to gain actionable insights. These insights help in making informed decisions, optimizing resources, and improving overall fleet performance. TecHGV’s analytics capabilities enable businesses to identify trends, patterns, and areas for improvement, driving operational efficiencies and cost savings.</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
  </section>
  <section class="TripTrackinginG">
    <div className="container"  >
      <div className="row align-items-center">
        <div className="col-12 hero-text-image">
          <img  className="TripTrackinginG1" src={DriverDefectReportImG} />
          </div>
        </div>
      </div>
  </section>
  <section class="TripTrackinginG">
    <div className="container">
      <div className="row align-center Electronic-row">
      <div className="col-md-12 text-center">
            <div className="feature-12">   
              <h2 className="mb-3">Reduce your Fleet & Assets <br/> Management costs today!</h2>
              <p>Simple, scalable pricing. No contract plans available.</p>
            </div>
          </div>
      </div>
      <div className="row align-center Electronic-row">
          <div className="col-md-3 feature-2">
            <div className="feature-1">
              <h5 className="col-mb-3">Basic</h5>
              <p>Ideal for individuals who need quick access to basic features.</p>
              <h6  style={{ fontSize: '40px', color: '#666', fontFamily: 'Poppins'}}> £ 5 <span style={{ fontWeight: '300', color: '#b3b3b3', fontSize: '15px', fontFamily: 'Poppins, Helvetica, Arial, Lucida, sans-serif'}} >/ Per Vehicle - Month</span></h6>
              <p className="fade-right" ><Link to="/" className=" btn btn-outline-white ReduceyourFleet">Get Started Now</Link></p>
              <div className="icon-circle"  style={{ display: 'flex', paddingTop: '20px'}}>
                <div className="col-sm-1"><span class="bi bi-check circle"></span></div>
                <div className="col-mb-4"  style={{ paddingTop: '3px'}}><p>Driver Checks</p></div>
              </div>
              <div className="icon-circle"  style={{ display: 'flex', paddingTop: '10px'}}>
                <div className="col-sm-1"><span class="bi bi-check circle"></span></div>
                <div className="col-mb-4"   style={{ paddingTop: '3px'}}><p>Fuel & Adblue Usage</p></div>
              </div>
              <div className="icon-circle"  style={{ display: 'flex', paddingTop: '10px'}}>
                <div className="col-sm-1"><span class="bi bi-check circle"></span></div>
                <div className="col-mb-4"   style={{ paddingTop: '3px'}}><p>Auditor Transport Manager Access</p></div>
              </div>
              <div className="icon-circle"  style={{ display: 'flex', paddingTop: '10px'}}>
                <div className="col-sm-1"><span class="bi bi-check circle"></span></div>
                <div className="col-mb-4"   style={{ paddingTop: '3px'}}><p>Torque Register</p></div>
              </div>
              <div className="icon-circle"  style={{ display: 'flex', paddingTop: '10px'}}>
                <div className="col-sm-1"><span class="bi bi-check circle"></span></div>
                <div className="col-mb-4"   style={{ paddingTop: '3px'}}><p>Training Document Management</p></div>
              </div>
              <div className="icon-circle"  style={{ display: 'flex', paddingTop: '10px'}}>
                <div className="col-sm-1"><span class="bi bi-check circle"></span></div>
                <div className="col-mb-4"   style={{ paddingTop: '3px'}}><p>Admin Web Dashboard</p></div>
              </div>
              <div className="icon-circle"  style={{ display: 'flex', paddingTop: '10px'}}>
                <div className="col-sm-1"><span class="bi bi-check circle"></span></div>
                <div className="col-mb-4"   style={{ paddingTop: '3px'}}><p>T-Drive</p></div>
              </div>
              <div className="icon-circle"  style={{ display: 'flex', paddingTop: '10px'}}>
                <div className="col-sm-1"><span class="bi bi-x circle-x"></span></div>
                <div className="col-mb-4"   style={{ paddingTop: '3px'}}><p>Tachograph Analysis</p></div>
              </div>
              <div className="icon-circle"  style={{ display: 'flex', paddingTop: '10px'}}>
                <div className="col-sm-1"><span class="bi bi-x circle-x"></span></div>
                <div className="col-mb-4"   style={{ paddingTop: '3px'}}><p>Remote tachograph download</p></div>
              </div>
              <div className="icon-circle"  style={{ display: 'flex', paddingTop: '10px'}}>
                <div className="col-sm-1"><span class="bi bi-x circle-x"></span></div>
                <div className="col-mb-4"   style={{ paddingTop: '3px'}}><p>Vehicle tracking</p></div>
              </div>
              <div className="icon-circle"  style={{ display: 'flex', paddingTop: '10px'}}>
                <div className="col-sm-1"><span class="bi bi-x circle-x"></span></div>
                <div className="col-mb-4"   style={{ paddingTop: '3px'}}><p>KPI Analysis</p></div>
              </div>
              <div className="icon-circle"  style={{ display: 'flex', paddingTop: '10px'}}>
                <div className="col-sm-1"><span class="bi bi-x circle-x"></span></div>
                <div className="col-mb-4"   style={{ paddingTop: '3px'}}><p>Automated DVSA Emails</p></div>
              </div>
              <div className="icon-circle"  style={{ display: 'flex', paddingTop: '10px'}}>
                <div className="col-sm-1"><span class="bi bi-x circle-x"></span></div>
                <div className="col-mb-4"   style={{ paddingTop: '3px'}}><p>Fuel Theft Notification</p></div>
              </div>
              <div className="icon-circle"  style={{ display: 'flex', paddingTop: '10px'}}>
                <div className="col-sm-1"><span class="bi bi-x circle-x"></span></div>
                <div className="col-mb-4"   style={{ paddingTop: '3px'}}><p>Earned Recognition Features</p></div>
              </div>
            </div>
          </div>
          <div className="col-sm-1"></div>
          <div className="col-md-3 feature-3">
            <div className="feature-1">
              <h5 className="col-mb-3" style={{ color: '#fff'}}>Norn</h5>
              <p>Ideal for individuals who need advanced features and tools for client work.</p>
              <h6  style={{ fontSize: '40px', color: '#e8e8e8', fontFamily: 'Poppins'}}> £ 20 <span style={{ fontWeight: '300', color: '#b3b3b3', fontSize: '15px', fontFamily: 'Poppins, Helvetica, Arial, Lucida, sans-serif'}} >/ Per Vehicle - Month</span></h6>
              <p className="fade-right" ><Link to="/" className=" btn btn-outline-white ReduceyourFleet">Get Started Now</Link></p>
              <div className="icon-circle"  style={{ display: 'flex', paddingTop: '20px'}}>
                <div className="col-sm-1"><span class="bi bi-check circle"></span></div>
                <div className="col-mb-4"  style={{ paddingTop: '3px'}}><p>Driver Checks</p></div>
              </div>
              <div className="icon-circle"  style={{ display: 'flex', paddingTop: '10px'}}>
                <div className="col-sm-1"><span class="bi bi-check circle"></span></div>
                <div className="col-mb-4"   style={{ paddingTop: '3px'}}><p>Fuel & Adblue Usage</p></div>
              </div>
              <div className="icon-circle"  style={{ display: 'flex', paddingTop: '10px'}}>
                <div className="col-sm-1"><span class="bi bi-check circle"></span></div>
                <div className="col-mb-4"   style={{ paddingTop: '3px'}}><p>Auditor Transport Manager Access</p></div>
              </div>
              <div className="icon-circle"  style={{ display: 'flex', paddingTop: '10px'}}>
                <div className="col-sm-1"><span class="bi bi-check circle"></span></div>
                <div className="col-mb-4"   style={{ paddingTop: '3px'}}><p>Torque Register</p></div>
              </div>
              <div className="icon-circle"  style={{ display: 'flex', paddingTop: '10px'}}>
                <div className="col-sm-1"><span class="bi bi-check circle"></span></div>
                <div className="col-mb-4"   style={{ paddingTop: '3px'}}><p>Training Document Management</p></div>
              </div>
              <div className="icon-circle"  style={{ display: 'flex', paddingTop: '10px'}}>
                <div className="col-sm-1"><span class="bi bi-check circle"></span></div>
                <div className="col-mb-4"   style={{ paddingTop: '3px'}}><p>Admin Web Dashboard</p></div>
              </div>
              <div className="icon-circle"  style={{ display: 'flex', paddingTop: '10px'}}>
                <div className="col-sm-1"><span class="bi bi-check circle"></span></div>
                <div className="col-mb-4"   style={{ paddingTop: '3px'}}><p>T-Drive</p></div>
              </div>
              <div className="icon-circle"  style={{ display: 'flex', paddingTop: '10px'}}>
                <div className="col-sm-1"><span class="bi bi-check circle"></span></div>
                <div className="col-mb-4"   style={{ paddingTop: '3px'}}><p>Tachograph Analysis</p></div>
              </div>
              <div className="icon-circle"  style={{ display: 'flex', paddingTop: '10px'}}>
                <div className="col-sm-1"><span class="bi bi-check circle"></span></div>
                <div className="col-mb-4"   style={{ paddingTop: '3px'}}><p>Remote tachograph download</p></div>
              </div>
              <div className="icon-circle"  style={{ display: 'flex', paddingTop: '10px'}}>
                <div className="col-sm-1"><span class="bi bi-check circle"></span></div>
                <div className="col-mb-4"   style={{ paddingTop: '3px'}}><p>Vehicle tracking</p></div>
              </div>
              <div className="icon-circle"  style={{ display: 'flex', paddingTop: '10px'}}>
                <div className="col-sm-1"><span class="bi bi-x circle-x"></span></div>
                <div className="col-mb-4"   style={{ paddingTop: '3px'}}><p>KPI Analysis</p></div>
              </div>
              <div className="icon-circle"  style={{ display: 'flex', paddingTop: '10px'}}>
                <div className="col-sm-1"><span class="bi bi-x circle-x"></span></div>
                <div className="col-mb-4"   style={{ paddingTop: '3px'}}><p>Automated DVSA Emails</p></div>
              </div>
              <div className="icon-circle"  style={{ display: 'flex', paddingTop: '10px'}}>
                <div className="col-sm-1"><span class="bi bi-x circle-x"></span></div>
                <div className="col-mb-4"   style={{ paddingTop: '3px'}}><p>Fuel Theft Notification</p></div>
              </div>
              <div className="icon-circle"  style={{ display: 'flex', paddingTop: '10px'}}>
                <div className="col-sm-1"><span class="bi bi-x circle-x"></span></div>
                <div className="col-mb-4"   style={{ paddingTop: '3px'}}><p>Earned Recognition Features</p></div>
              </div>
            </div>
          </div>
          <div className="col-sm-1"></div>
          <div className="col-md-3  feature-2">
            <div className="feature-1 ">
              <h5 className="col-mb-3">Earned Recognition</h5>
              <p>Ideal for individuals who need quick access to Earned Recognition features.</p>
              <h6  style={{ fontSize: '40px', color: '#666', fontFamily: 'Poppins'}}> £ 35 <span style={{ fontWeight: '300', color: '#b3b3b3', fontSize: '15px', fontFamily: 'Poppins, Helvetica, Arial, Lucida, sans-serif'}} >/ Per Vehicle - Month</span></h6>
              <p className="fade-right" ><Link to="/" className=" btn btn-outline-white ReduceyourFleet">Get Started Now</Link></p>
              <div className="icon-circle"  style={{ display: 'flex', paddingTop: '20px'}}>
                <div className="col-sm-1"><span class="bi bi-check circle"></span></div>
                <div className="col-mb-4"  style={{ paddingTop: '3px'}}><p>Driver Checks</p></div>
              </div>
              <div className="icon-circle"  style={{ display: 'flex', paddingTop: '10px'}}>
                <div className="col-sm-1"><span class="bi bi-check circle"></span></div>
                <div className="col-mb-4"   style={{ paddingTop: '3px'}}><p>Fuel & Adblue Usage</p></div>
              </div>
              <div className="icon-circle"  style={{ display: 'flex', paddingTop: '10px'}}>
                <div className="col-sm-1"><span class="bi bi-check circle"></span></div>
                <div className="col-mb-4"   style={{ paddingTop: '3px'}}><p>Auditor Transport Manager Access</p></div>
              </div>
              <div className="icon-circle"  style={{ display: 'flex', paddingTop: '10px'}}>
                <div className="col-sm-1"><span class="bi bi-check circle"></span></div>
                <div className="col-mb-4"   style={{ paddingTop: '3px'}}><p>Torque Register</p></div>
              </div>
              <div className="icon-circle"  style={{ display: 'flex', paddingTop: '10px'}}>
                <div className="col-sm-1"><span class="bi bi-check circle"></span></div>
                <div className="col-mb-4"   style={{ paddingTop: '3px'}}><p>Training Document Management</p></div>
              </div>
              <div className="icon-circle"  style={{ display: 'flex', paddingTop: '10px'}}>
                <div className="col-sm-1"><span class="bi bi-check circle"></span></div>
                <div className="col-mb-4"   style={{ paddingTop: '3px'}}><p>Admin Web Dashboard</p></div>
              </div>
              <div className="icon-circle"  style={{ display: 'flex', paddingTop: '10px'}}>
                <div className="col-sm-1"><span class="bi bi-check circle"></span></div>
                <div className="col-mb-4"   style={{ paddingTop: '3px'}}><p>T-Drive</p></div>
              </div>
              <div className="icon-circle"  style={{ display: 'flex', paddingTop: '10px'}}>
                <div className="col-sm-1"><span class="bi bi-x circle-x"></span></div>
                <div className="col-mb-4"   style={{ paddingTop: '3px'}}><p>Tachograph Analysis</p></div>
              </div>
              <div className="icon-circle"  style={{ display: 'flex', paddingTop: '10px'}}>
                <div className="col-sm-1"><span class="bi bi-x circle-x"></span></div>
                <div className="col-mb-4"   style={{ paddingTop: '3px'}}><p>Remote tachograph download</p></div>
              </div>
              <div className="icon-circle"  style={{ display: 'flex', paddingTop: '10px'}}>
                <div className="col-sm-1"><span class="bi bi-x circle-x"></span></div>
                <div className="col-mb-4"   style={{ paddingTop: '3px'}}><p>Vehicle tracking</p></div>
              </div>
              <div className="icon-circle"  style={{ display: 'flex', paddingTop: '10px'}}>
                <div className="col-sm-1"><span class="bi bi-x circle-x"></span></div>
                <div className="col-mb-4"   style={{ paddingTop: '3px'}}><p>KPI Analysis</p></div>
              </div>
              <div className="icon-circle"  style={{ display: 'flex', paddingTop: '10px'}}>
                <div className="col-sm-1"><span class="bi bi-x circle-x"></span></div>
                <div className="col-mb-4"   style={{ paddingTop: '3px'}}><p>Automated DVSA Emails</p></div>
              </div>
              <div className="icon-circle"  style={{ display: 'flex', paddingTop: '10px'}}>
                <div className="col-sm-1"><span class="bi bi-x circle-x"></span></div>
                <div className="col-mb-4"   style={{ paddingTop: '3px'}}><p>Fuel Theft Notification</p></div>
              </div>
              <div className="icon-circle"  style={{ display: 'flex', paddingTop: '10px'}}>
                <div className="col-sm-1"><span class="bi bi-x circle-x"></span></div>
                <div className="col-mb-4"   style={{ paddingTop: '3px'}}><p>Earned Recognition Features</p></div>
              </div>
            </div>
          </div>
      </div>
      </div>
  </section>
</div>

  );
}

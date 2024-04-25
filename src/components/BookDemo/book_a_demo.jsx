import React from 'react'
import BookADemoForm from '../forms/bookAdemoForm'
export default function book_a_demo(props) {
  return (
    <section className="hero-section OrderDevice" id="hero">
      <div className="container">
        <div className="row align-items-center">
        <div className="col-6 hero-text-image">
            <h2 data-aos="fade-right">Schedule a demo for our Fleet Management & Telematics Solutions</h2>
            <h5>Our expert team will demonstrate our application features and how we are solving fleet management tracking problems. That is positively impacting your business to derive maximum efficiency and increase your fleet business.</h5>
            <div class="container">
    <ul class="list-group">
      <li>Creating Vehicles & Drivers</li>
      <li>Vehicle Tracking, Monitoring & Trip History</li>
      <li>Driver Checks </li>
      <li>Vehicle Defects Management</li>
      <li>Tyre/Wheel Management & Predictions</li>
      <li>Torque Register, Fuel & Adblue usage, MOT Checks</li>
      <li>Document Management</li>
      <li >Tachograph Analysis, Remote Tachograph Download</li>
      <li >Training Document Management</li>
      <li >E-signatures for Training Documents from the Mobile App</li>
      <li >Gap analysis for drivers, vehicles, & trailers</li>
      <li >Overdue event alerts, upcoming event alerts</li>
      <li >KPI Analysis and VOR Automation</li>
      <li >Vehicle & Driver tracker/planner sheet</li>
      <li >Fuel theft, Auditor Transport Manager Access</li>
      <li >Easy Signup for drivers using the Mobile App</li>
      <li >Connect a Device with a simple scan</li>
      <li >Induction Pack Signing</li>
      <li >Driver Stats</li>
      <li >Time-Related States</li>
      <li >Fleet Management in Detail</li>
    </ul>
  </div>
          </div>
          <div className="col-6 hero-text-image">
            <h3 data-aos="fade-right">Request Your Demo Session Now</h3>
             <BookADemoForm/>
          </div>
        </div>
      </div>
    </section>
  )
}

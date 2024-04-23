import React from 'react';
// import VehicleForm from './'; // Assuming VehicleForm.js is in the same directory
import VehicleForm from '../forms/OrderDeviceForm'
export default function OrderDevice(props) {
  return (
    <section className="hero-section OrderDevice" id="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 hero-text-image">
            <h1 data-aos="fade-right">Order a Device</h1>
            <VehicleForm />
          </div>
        </div>
      </div>
    </section>
  );
}

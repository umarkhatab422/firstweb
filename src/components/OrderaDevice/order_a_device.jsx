import React from 'react';
import VehicleForm from '../Forms/OrderDeviceForm'
const OrderDevice=(props)=> {
  return (
    <section className="hero-section OrderDevice" id="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 hero-text-image">
            <h1 data-aos="fade-right">Order a Device</h1>
            <div style={{height:'100px'}}></div>
            <VehicleForm />
            <div style={{height:'100px'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrderDevice;
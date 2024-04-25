import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    lookingFor: '',
    region: '',
    fleetSize: '',
    remarks: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    const dataToSend = {
      ...formData,
      // Additional data or formatting before sending
    };
    sendFormData(dataToSend);
  };

  const sendFormData = (formData) => {
    // Implement sending form data to the specified email
    fetch('https://api.example.com/send-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (response.ok) {
        // Handle success
        alert('Form submitted successfully!');
        setFormData({
          name: '',
          phone: '',
          email: '',
          lookingFor: '',
          region: '',
          fleetSize: '',
          remarks: ''
        });
      } else {
        // Handle error
        alert('Failed to submit form. Please try again later.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Failed to submit form. Please try again later.');
    });
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-5">
      <div className="mb-3">
        <label className="form-label">Name *</label>
        <input type="text" className="form-control" name="name"  placeholder="Enter Name" value={formData.name} onChange={handleChange} required />
      </div>
      
      <div className="mb-3">
        <label className="form-label">Phone *</label>
        <input type="text" className="form-control" name="phone"  placeholder="Enter Numder" value={formData.phone} onChange={handleChange} required />
      </div>
      
      <div className="mb-3">
        <label className="form-label">Email *</label>
        <input type="email" className="form-control" name="email" placeholder="Enter Mail"  value={formData.email} onChange={handleChange} required />
      </div>
      
      <div className="mb-3">
        <label className="form-label">Looking For *</label>
        <select className="form-select" name="lookingFor" value={formData.lookingFor} onChange={handleChange} required>
          <option value="">- Select -</option>
          <option value="Driver Checks">Driver Checks</option>
          <option value="Tyre/Wheel Management & Predictions">Tyre/Wheel Management & Predictions</option>
          <option value="Fuel & Adblue usage">Fuel & Adblue usage</option>
          <option value="Document Mangement">Document Mangement</option>
          <option value="T-Drive Your Documents Space Storage">T-Drive Your Documents Space Storage</option>
          <option value="Tachograph Analysis">Tachograph Analysis</option>
          <option value="Remote Tachograph Download">Remote Tachograph Download</option>
          <option value="Gap Analysis">Gap Analysis</option>
          <option value="Vehicle Tracking">Vehicle Tracking</option>
          <option value="Others">Others</option>
          {/* Add other options */}
        </select>
      </div>
      
      <div className="mb-3">
        <label className="form-label">Zone/Region *</label>
        <select className="form-select" name="region" value={formData.region} onChange={handleChange} required>
          <option value="">- Select -</option>
          <option value="UK">UK</option>
          {/* Add other options */}
        </select>
      </div>
      
      <div className="mb-3">
        <label className="form-label">Fleet size *</label>
        <select className="form-select" name="fleetSize" value={formData.fleetSize} onChange={handleChange} required>
          <option value="">- Select -</option>
          <option value="0-10">0-10</option>
          <option value="11-50">11-50</option>
          <option value="50-100">50-100</option>
          <option value=">100">100</option>
          {/* Add other options */}
        </select>
      </div>
      
      <div className="mb-3">
        <label className="form-label">Remarks</label>
        <textarea className="form-control" name="remarks" placeholder="Enter Remarks"  value={formData.remarks} onChange={handleChange}></textarea>
      </div>
      
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Form;

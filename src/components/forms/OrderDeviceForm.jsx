import React, { useState } from 'react';

function VehicleForm() {
  const [vehicleType, setVehicleType] = useState('');
  const [numVehicles, setNumVehicles] = useState(1);
  const [vehicleNames, setVehicleNames] = useState(Array(numVehicles).fill(''));

  const handleVehicleTypeChange = (event) => {
    setVehicleType(event.target.value);
    setNumVehicles(1); // Reset number of vehicles when vehicle type changes
  };

  const handleNumVehiclesChange = (event) => {
    setNumVehicles(parseInt(event.target.value));
    setVehicleNames(Array(parseInt(event.target.value)).fill(''));
  };

  const handleVehicleNameChange = (index, event) => {
    const newNames = [...vehicleNames];
    newNames[index] = event.target.value;
    setVehicleNames(newNames);
  };

  const renderVehicleNameInputs = () => {
    return vehicleNames.map((name, index) => (
      <div key={index} className="form-group">
        <label>{`Vehicle ${index + 1} Name:`}</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(event) => handleVehicleNameChange(index, event)}
        />
      </div>
    ));
  };

  return (
    <form>
    <div className="form-group">
      <label htmlFor="companyName">Company Name</label>
      <input type="text" className="form-control" id="companyName" placeholder="Enter company name" />
    </div>
    <div className="form-group">
      <label htmlFor="oLicense">O-License</label>
      <input type="text" className="form-control" id="oLicense" placeholder="Enter O-License" />
    </div>
    <div className="form-group">
      <label htmlFor="address">Address</label>
      <input type="text" className="form-control" id="address" placeholder="Enter address" />
    </div>
    <div className="form-group">
      <label htmlFor="country">Country</label>
      <input type="text" className="form-control" id="country" placeholder="Enter country" />
    </div>
    <div className="form-group">
      <label htmlFor="state">State</label>
      <input type="text" className="form-control" id="state" placeholder="Enter state" />
    </div>
    <div className="form-group">
      <label htmlFor="city">City</label>
      <input type="text" className="form-control" id="city" placeholder="Enter city" />
    </div>
    <div className="form-group">
      <label htmlFor="addressLine">Address Line</label>
      <input type="text" className="form-control" id="addressLine" placeholder="Enter address line" />
    </div>
    <div className="form-group">
      <label htmlFor="postalCode">Postal Code</label>
      <input type="text" className="form-control" id="postalCode" placeholder="Enter postal code" />
    </div>
    <div className="form-group">
      <label htmlFor="email">Email Address</label>
      <input type="email" className="form-control" id="email" placeholder="Enter email" />
    </div>
    <div className="form-group">
      <label htmlFor="phone">Phone</label>
      <input type="tel" className="form-control" id="phone" placeholder="Enter phone" />
    </div>
    <div className="form-group">
      <label>Vehicle:</label>
      <select className="form-control" onChange={handleVehicleTypeChange}>
        <option value="">Select</option>
        <option value="Single">Single</option>
        <option value="Multiple">Multiple</option>
      </select>
    </div>
    {vehicleType === 'Multiple' && (
    <div className="form-group">
      <label>Select Number of Vehicles:</label>
      <select className="form-control" onChange={handleNumVehiclesChange}>
        <option value="1">1 Vehicle</option>
        <option value="2">2 Vehicles</option>
        <option value="3">3 Vehicles</option>
        <option value="4">4 Vehicles</option>
        <option value="5">5 Vehicles</option>
        <option value="6">6 Vehicles</option>
        <option value="7">7 Vehicles</option>
        <option value="8">8 Vehicles</option>
        <option value="9">9 Vehicles</option>
        <option value="10">10 Vehicles</option>
        {/* Add more options if needed */}
      </select>
    </div>
    )}
    {vehicleType === 'Single' && (
    <div className="form-group">
      <label>Vehicle Name:</label>
      <input type="text" className="form-control" value={vehicleNames[0]} onChange={(event) => setVehicleNames([event.target.value])} />
    </div>
    )}
    {vehicleType === 'Multiple' && renderVehicleNameInputs()}
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
  );
}

export default VehicleForm;

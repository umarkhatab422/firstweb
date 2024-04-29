import React, { useEffect, useState } from "react";

function VehicleForm() {
  const [inputVehicleForms, setInputVehicleForms] = useState([]);
  const [vehicleForm, setVehicleForm] = useState({
    company_name: "",
    o_license: "",
    address: "",
    country: "",
    state: "",
    city: "",
    address_line: "",
    postal_code: "",
    email_address: "",
    phone: "",
    vehicle_type: "",
    form_select: ["Select", "Single", "Multiple"],
    vehicle_number: "",
    isRequired: false,
  });

  ////////////////////////////////////////////methods///////////////////////////////
  const onHandleChange = (value, item) => {
    setVehicleForm({ ...vehicleForm, [item]: value });
  };
  const onSelectVehicle = (value) => {
    setVehicleForm({ ...vehicleForm, vehicle_type: value });
  };

  const onSelectVehicleNumer = (value) => {
    console.log(value);
    setVehicleForm({ ...vehicleForm, vehicle_number: value });
  };

  const onChangeInputFields = (value, index, type) => {
    if (type === "Multiple") {
      inputVehicleForms[`Vehicle ${index + 1}`] = value;
      setInputVehicleForms(inputVehicleForms);
    } else {
      setInputVehicleForms(value);
    }
  };

  const onSubmitForm = (event) => {
    event.preventDefault();

    if (vehicleForm?.company_name == "") {
      setInputVehicleForms({ ...inputVehicleForms, isRequired: true });
    }
  };
  /////////////////////////////////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////Components////////////////////////////////
  const VehicleNumbersDropdown = ({ onChange }) => {
    return (
      <div className="form-group">
        <label>Select Number of Vehicles:</label>
        <select className="form-control" onChange={onChange}>
          <option>Vehicles</option>
          {Array.from({ length: 10 }, (_, index) => index + 1).map((item) => (
            item > 0 && <option value={item}>{item} Vehicles</option>
          ))}
        </select>
      </div>
    );
  };
  const VehicleNumbersofInput = ({ vehicle_number, onChange, values }) => {
    return (
      <div className="form-group">
        {Array.from({ length: vehicle_number }, (_, index) => index + 1).map(
          (item) => (
            <div>
              <label>Vehicle Name:</label>
              <input
                key={item}
                type="text"
                className="form-control"
                placeholder={`Vehicle ${item}`}
                value={values[item - 1]}
                onChange={(val) => onChange(val.target.value, item - 1)}
              />
            </div>
          )
        )}
      </div>
    );
  };
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <form>
      {Object.keys(vehicleForm).map(
        (item) =>
          item !== "vehicle_type" &&
          item !== "form_select" &&
          item !== "vehicle_number" &&
          item !== "isRequired" &&
          (
            <div className="form-group my-3" key={item}>
              <label htmlFor={item}>
                {item.replace("_", " ").toUpperCase()}
              </label>
              <input
                value={vehicleForm[item]}
                type="text"
                className="form-control"
                id={item}
                placeholder={`Enter Your ${item
                  .replace("_", " ")
                  .toUpperCase()}`}
                onChange={(e) => {
                  onHandleChange(e.target.value, item);
                }}
              />
              {inputVehicleForms?.isRequired && item == '' && (
                <p style={{ textAlign: "left", color: "red", fontSize: 10 }}>
                  This field is required
                </p>
              )}
            </div>
          )
      )}
      <div className="form-group">
        <label>Vehicle:</label>
        <select
          className="form-control"
          onChange={(value) => onSelectVehicle(value.target.value)}
        >
          {vehicleForm.form_select.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>
      </div>

      {vehicleForm?.vehicle_type === "Single" && (
        <div>
          <label>Vehicle Name:</label>
          <input
            type="text"
            className="form-control"
            placeholder={`Vehicle Number`}
            value={inputVehicleForms}
            onChange={(value, index) =>
              onChangeInputFields(value.target.value, index)
            }
          />
        </div>
      )}

      {vehicleForm?.vehicle_type === "Multiple" && (
        <>
          <VehicleNumbersDropdown
            onChange={(val) => onSelectVehicleNumer(val.target.value)}
          />
          <VehicleNumbersofInput
            vehicle_number={vehicleForm.vehicle_number}
            onChange={(value, index) =>
              onChangeInputFields(value, index, "Multiple")
            }
            values={inputVehicleForms || ""}
          />
        </>
      )}

      <button
        type="submit"
        className="btn btn-primary"
        onClick={(event) => onSubmitForm(event)}
      >
        Submit
      </button>
    </form>
  );
}

export default VehicleForm;

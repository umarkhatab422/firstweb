import SimpleButton from "components/Buttons/SimpleButton";
import React, { useEffect, useState } from "react";

function VehicleForm() {
  const [inputVehicleForms, setInputVehicleForms] = useState([]);
  const [inputFormValue, setInputFormValue] = useState({
    value: "",
    isChecked: false,
  });
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
    setVehicleForm({ ...vehicleForm, vehicle_number: value });
  };
  const onChangeInputFields = (value, index, type) => {
    if (type === "Multiple") {
      setInputVehicleForms((prevState) => {
        inputVehicleForms[index] = {
          ...inputVehicleForms[index],
          value: value,
          isChecked: false,
        };
        return inputVehicleForms;
      });
    } else {
      setInputVehicleForms({value:value, isChecked: false });
    }
  };

  const onCheckBoxValue = (isChecked, index, type) => {
    if (type === "Multiple") {
      setInputVehicleForms((prevState) => {
        inputVehicleForms[index] = {
          ...inputVehicleForms[index],
          value: inputVehicleForms[index]?.value,
          isChecked: isChecked,
        };
        return inputVehicleForms;
      });
    } else {
      setInputVehicleForms({
        value: inputFormValue?.value,
        isChecked: isChecked,
      });
    }
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    if (
      vehicleForm?.company_name == "" ||
      vehicleForm?.address_line == "" ||
      vehicleForm?.email_address == "" ||
      vehicleForm?.phone == ""
    ) {
      setVehicleForm({ ...vehicleForm, isRequired: true });
    } else {
      const data_format = Object.assign({}, vehicleForm, {
        vehicle_numbers: inputVehicleForms,
      });
      console.log(data_format,inputFormValue)
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
          {Array.from({ length: 10 }, (_, index) => index + 1).map(
            (item) => item > 0 && <option value={item}>{item} Vehicles</option>
          )}
        </select>
      </div>
    );
  };
  //////////////////////////////////////////////////////////////////////////////////////////////
  const VehicleNumbersofInput = ({
    vehicle_number,
    onChange,
    values,
    isCheck,
    onChecked,
  }) => {
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
                value={values[item]?.value}
                onChange={(val) => onChange(val.target.value, item - 1)}
              />
              <input
                type="checkbox"
                checked={isCheck[item]?.isChecked}
                onChange={(val) => onChecked(val?.target?.checked, item - 1)}
              />
            </div>
          )
        )}
      </div>
    );
  };
  //////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <form>
      {Object.keys(vehicleForm).map(
        (item) =>
          item !== "vehicle_type" &&
          item !== "form_select" &&
          item !== "vehicle_number" &&
          item !== "isRequired" && (
            <div className="form-group my-3" key={item}>
              <label htmlFor={item}>
                {item.replace("_", " ").toUpperCase()}
              </label>
              <input
                value={vehicleForm[item]}
                type="text"
                className="form-control order-deveice-input"
                id={item}
                placeholder={`Enter Your ${item
                  .replace("_", " ")
                  .toUpperCase()}`}
                onChange={(e) => {
                  onHandleChange(e.target.value, item);
                }}
              />
              {vehicleForm?.isRequired && vehicleForm[item] == "" ? (
                <p
                  style={{
                    textAlign: "left",
                    color: "red",
                    fontSize: 10,
                    margin: "10px 0px",
                  }}
                >
                  This field is required *
                </p>
              ) : null}
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
            value={inputVehicleForms[0]?.value}
            onChange={(value, index) =>
              onChangeInputFields(value.target.value, index)
            }
          />
          <input
            type="checkbox"
            checked={inputVehicleForms[0]?.isChecked}
            onChange={(val) => onCheckBoxValue(val.target.checked)}
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
            isCheck={inputFormValue?.isChecked}
            onChecked={(value, index) => onCheckBoxValue(value, index,'Multiple')}
            values={inputFormValue?.value}
          />
        </>
      )}

      <SimpleButton
        background={"#7fbcb1"}
        color={"white"}
        text={"Submit"}
        textMargin={0}
        margin={"20px 0px"}
        width={"130px"}
        border={0}
        onSubmit={(event) => onSubmitForm(event)}
      />
    </form>
  );
}

export default VehicleForm;

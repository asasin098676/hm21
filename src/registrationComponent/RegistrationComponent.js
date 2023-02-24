import React, { useState } from "react";
import validator from "validator";
import { Link } from "react-router-dom";
import "../registrationComponent/RegistrationComponent.css";

const RegistrationComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isActiveName, setIsActiveName] = useState(false);
  const [isActiveLastName, setIsActiveLastName] = useState(false);
  const [isActiveMail, setIsActiveMail] = useState(false);
  const [isActivePassword, setIsActivePassword] = useState(false);

  const lockalStr = {
    name: firstName,
    lastName: lastName,
    email: email,
    password: password,
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "firstName") {
      if (value.length >= 3) {
        setFirstName(value);
        setIsActiveName(true);
      } else {
        setIsActiveName(false);
      }
    }
    if (id === "lastName") {
      if (value.length >= 3) {
        setLastName(value);
        setIsActiveLastName(true);
      } else {
        setIsActiveLastName(false);
      }
    }
    if (id === "email") {
      if (validator.isEmail(value)) {
        setEmail(value);
        setIsActiveMail(true);
      } else {
        setIsActiveMail(false);
      }
    }
    if (id === "password") {
      if (value.length >= 8) {
        setPassword(value);
        setIsActivePassword(true);
      } else {
        setIsActivePassword(false);
      }
    }
  };

  const handleSubmit = () => {
    if (
      isActiveName == true &&
      isActiveLastName == true &&
      isActiveMail == true &&
      isActivePassword == true
    ) {
      localStorage.setItem(lockalStr.email, JSON.stringify(lockalStr));
    }
  };

  return (
    <div className="form">
      <div className="img">
        <img src="https://png.pngtree.com/png-vector/20220609/ourmid/pngtree-closed-lock-neon-sign-png-image_4839992.png"></img>
      </div>
      <h1>Sign Un</h1>
      <div className="formBody">
        <div className="userName">
          <label className="formLabel">First Name </label>
          <input
            className="formInput"
            type="text"
            style={{
              border: isActiveName ? " 2px solid green" : "2px solid red",
            }}
            onChange={(e) => handleInputChange(e)}
            id="firstName"
            placeholder="First Name"
          />
        </div>
        <div className="lastName">
          <label className="formLabel">Last Name </label>
          <input
            type="text"
            id="lastName"
            style={{
              border: isActiveLastName ? " 2px solid green" : "2px solid red",
            }}
            className="formInput"
            onChange={(e) => handleInputChange(e)}
            placeholder="LastName"
          />
        </div>
        <div className="email">
          <label className="formLabel">Email </label>
          <input
            type="email"
            id="email"
            style={{
              border: isActiveMail ? " 2px solid green" : "2px solid red",
            }}
            className="formInput"
            onChange={(e) => handleInputChange(e)}
            placeholder="Email"
          />
        </div>
        <div className="password">
          <label className="formLabel">Password </label>
          <input
            style={{
              border: isActivePassword ? " 2px solid green" : "2px solid red",
            }}
            className="formInput"
            type="password"
            id="password"
            onChange={(e) => handleInputChange(e)}
            placeholder="Password"
          />
        </div>
      </div>
      <div>
        <button onClick={() => handleSubmit()}>Register</button>
      </div>
      <Link to="/">log in</Link>
    </div>
  );
};

export default RegistrationComponent;

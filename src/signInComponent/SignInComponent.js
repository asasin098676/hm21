import React, { useState } from "react";
import { Link } from "react-router-dom";
import validator from "validator";
import "../signInComponent/SignInComponent.css";

const SignInComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isActiveGmail, setIsActiveGmail] = useState(false);
  const [isActivePassword, setIsActivePassword] = useState(false);

  const InputChange = (v) => {
    const { id, value } = v.target;

    if (id === "email") {
      if (validator.isEmail(value)) {
        setIsActiveGmail(true);
        setEmail(value);
      } else {
        setIsActiveGmail(false);
      }
    }
    if (id === "password") {
      if (value.length >= 8) {
        setIsActivePassword(true);
        setPassword(value);
      } else {
        setIsActivePassword(false);
      }
    }
  };

  const lockalStr = {
    email: email,
    password: password,
  };

  const SignIn = () => {
    if (isActiveGmail == true && isActivePassword == true) {
      let info = JSON.parse(localStorage.getItem(lockalStr.email));

      if (info.password == lockalStr.password) {
        console.log("gmail : " + info.email);
        console.log("password : " + info.password);
        console.log("name : " + info.name);
        console.log("lastNAme : " + info.lastName);
      } else {
        console.log("password not true");
      }
    }
  };

  return (
    <div className="mainDiv">
      <div className="img">
        <img src="https://png.pngtree.com/png-vector/20220609/ourmid/pngtree-closed-lock-neon-sign-png-image_4839992.png"></img>
      </div>
      <h1>Sign In</h1>
      <div className="formBody">
        <div className="email">
          <label className="formLabel">Email </label>
          <input
            style={{
              border: isActiveGmail ? " 2px solid green" : "2px solid red",
            }}
            id="email"
            type="email"
            className="formInput"
            onChange={(v) => InputChange(v)}
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
            onChange={(v) => InputChange(v)}
            placeholder="Password"
          />
        </div>
      </div>
      <div>
        <button onClick={() => SignIn()}>Sign In</button>
      </div>
      <div className="footer">
        <a>Forgot password?</a>
        <a>Don't have an account?</a>
        <Link to="/Registration"> Sign Up</Link>
      </div>
    </div>
  );
};

export default SignInComponent;

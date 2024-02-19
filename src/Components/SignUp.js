import React, { useState } from "react";
import { Link } from "react-router-dom";
import GenderToggle from "../Components/GenderToggle";
const SignUp = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="Login">
      <div className="main_login">
        <h1>Join with us for Colaborating with others </h1>
        <p>Sign up to start your journey</p>
        <form action="">
          <div className="form-row " id="col-2">
            <div className="grid grid-rows-2 ">
              <label htmlFor="firstname">First Name </label>
              <input type="text" placeholder="Enter First Name" />
            </div>
            <div className="grid grid-rows-2">
              <label htmlFor="lastname ">Last Name </label>
              <input type="text" placeholder="Enter Last Name" />
            </div>
          </div>{" "}
          <div className="form-row">
            <label htmlFor="email">Email </label>
            <input type="email" placeholder="Enter Your Email" />
          </div>{" "}
          <div className="form-row" id="col-2">
            <div className="grid grid-rows-2 ">
              <label htmlFor="password">Password </label>
              <input type="password" placeholder="Enter Password" />
            </div>
            <div className="grid grid-rows-2 ">
              <label htmlFor="cnfpassword">Confirm Password </label>
              <input type="password" placeholder="Confirm Password" />
            </div>
          </div>{" "}
          <div className="form-row">
            <label htmlFor="username">Username: </label>
            <input type="email" placeholder="Username" />
          </div>
          <div className="form-row toggle" id="col-3">
            <h3>Gender</h3>
            <GenderToggle />
          </div>{" "}
          <div className="form-row">
            <button type="submit" className="btn">
              {" "}
              Register
            </button>
          </div>
          <div>
            <span className=" text-white">Dont have an account ? </span>
            <button type="submit" className="log-in">
              <li>
                <Link to="/Login">Log In</Link>
              </li>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

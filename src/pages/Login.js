import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="Login">
      <div className="main_login">
        <h1>Welcome Back</h1>
        <p>Enjoy the Interaction with our platform!</p>
        <form action="">
          <div className="form-row">
            <label htmlFor="username">Username: </label>
            <input type="email" placeholder="Username" />
          </div>
          <div className="form-row">
            <label htmlFor="password">password: </label>
            <input type="password" placeholder="Password" />
          </div>

          <div className="form-row">
            <button type="submit" className="btn">
              {" "}
              Sign-In
            </button>
          </div>
          <div>
            <span className=" text-white">Dont have an account ? </span>
            <button type="submit" className="log-in">
              <li>
                <Link to="/SignUp">Register</Link>
              </li>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

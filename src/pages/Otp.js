import React, { useState } from "react";

const Otp = () => {
  const [inputValues, setInputValues] = useState();

  return (
    <div className="otp-container">
      <div className="body">
        <h1>Enter OTP</h1>
        <p>A verification code has been sent to you. Enter the code below -</p>
        <form action="">
          <div className="input">
            <input type="text" maxLength={1} />
            <input type="text" maxLength={1} />
            <input type="text" maxLength={1} />
            <input type="text" maxLength={1} />
          </div>
          <button type="submit" className="btn">
            Verify Email
          </button>
        </form>
      </div>
    </div>
  );
};

export default Otp;

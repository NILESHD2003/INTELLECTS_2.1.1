import React, { useState } from "react";

const Otp = () => {
  const [inputValues, setInputValues] = useState(Array(6).fill(""));

  return (
    <div className="otp-container">
      <div className="body">
        <h1>Enter OTP</h1>
        <p>A verification code has been sent to you. Enter the code below -</p>
        <div className="input">
          <input type="text" maxLength={1} />
          <input type="text" maxLength={1} />
          <input type="text" maxLength={1} />
          <input type="text" maxLength={1} />
        </div>
        <button className="btn">Verify Email</button>
      </div>
    </div>
  );
};

export default Otp;

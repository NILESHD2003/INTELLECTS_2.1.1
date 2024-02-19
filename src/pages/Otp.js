import React, { useState } from "react";

const Otp = () => {
  const [inputValues, setInputValues] = useState();

  return (
    <div className="otp-container">
      <div className="body">
        <h1>Enter OTP</h1>
        <p>A verification code has been sent to you.<br></br> Enter the code</p>
        <form action="" className="otp-form">
          <div className="input">
            <input type="text" maxLength={1} />
            <input type="text" maxLength={1} />
            <input type="text" maxLength={1} />
            <input type="text" maxLength={1} />
            <input type="text" maxLength={1} />
            <input type="text" maxLength={1} />
          </div>
          <button type="submit" className="btn otp-btn">
            Verify Email
          </button>
        </form>
      </div>
    </div>
  );
};

export default Otp;

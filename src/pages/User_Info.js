import React, { useState } from "react";

const User_Info = () => {
  const [color, setColor] = useState(false);
  return (
    <div className="User_Info-container">
      <form action="">
        <div className="info">
          <div>
            <div
              className={color ? " startup " : "startup opacity"}
              //   className="startup"
              onClick={() => {
                setColor(false);
              }}
            >
              {/* <button
                className={color ? "btn" : " bg-red"}
                onClick={() => {
                  setColor(false);
                }}
              >
                Entrepreneur
              </button> */}
            </div>
            <div
              className={color ? "opacity  enter" : "enter"}
              onClick={() => {
                setColor(true);
              }}
            >
              {/* <h4
                className={color ? "bg-red" : "btn"}
                onClick={() => {
                  setColor(true);
                }}
              >
                startup
              </h4> */}
            </div>
            <button type="submit" id="post">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default User_Info;

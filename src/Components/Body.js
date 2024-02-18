import React from "react";

const Body = ({ first_name, desc, image, compnay, title }) => {
  return (
    <div className="Post_body text-black">
      <div className="info text-black">
        <h3>{title}</h3>
        <button>Follow</button>
      </div>
      <div className="desc">{desc}</div>
      <div className="Post">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Body;

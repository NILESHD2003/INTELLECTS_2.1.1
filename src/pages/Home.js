import React from "react";
import Navbar from "../Components/Navbar";
import Body from "../Components/Body";
import { dumy } from "../Dumy_info/info";
const Home = () => {
  return (
    <div className="Home_outer">
      <Navbar></Navbar>
      <div className="post_Outerbody  ">
        {dumy.map((values, index) => {
          return <Body key={index} {...values}></Body>;
        })}
      </div>
      <div></div>
    </div>
  );
};

export default Home;

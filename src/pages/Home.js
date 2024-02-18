import React from "react";
import Navbar from "../Components/Navbar";
import Body from "../Components/Body";
import { dumy } from "../Dumy_info/info";
const Home = () => {
  return (
    <div className="flex flex-row">
      <Navbar></Navbar>
      <div className="post_Outerbody  ">
        {dumy.map((values, index) => {
          return (
            <div className="border mb-10 border-white">
              <Body key={index} {...values}></Body>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;

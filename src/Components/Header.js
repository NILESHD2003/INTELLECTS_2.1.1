import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div
        className="logo flex  gap-6 
      items-center justify-start"
      >
        <img
          className="h-20"
          src="https://th.bing.com/th/id/OIP.hHoOUi-6-WDKnb6A7lSa0QHaGP?rs=1&pid=ImgDetMain"
          alt=""
        />
        <input type="text" className="h-10" placeholder="Search" />
      </div>
      <div className="p-4 color-white">
        <h1>second</h1>
      </div>
      <div className="p-4 ">
        <h1>second</h1>
      </div>
    </div>
  );
};

export default Header;

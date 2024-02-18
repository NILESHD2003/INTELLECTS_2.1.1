import React, { useState } from "react";

const GenderToggle = () => {
  const [selectedGender, setSelectedGender] = useState("male");

  const handleToggle = () => {
    setSelectedGender(selectedGender === "male" ? "female" : "male");
  };

  return (
    <div className={`gender-toggle ${selectedGender}`} onClick={handleToggle}>
      <div className="toggle-option">Male</div>
      <div className="toggle-option">Female</div>
    </div>
  );
};

export default GenderToggle;

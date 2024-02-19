import React, { useState } from "react";

const ReadMoreLess = ({ description, maxLength }) => {
  const [isExpanded, setExpanded] = useState(false);

  const truncatedText = isExpanded
    ? description
    : `${description.slice(0, maxLength)}...`;

  return (
    <div>
      <p>{truncatedText}</p>
      {description.length > maxLength && (
        <button onClick={() => setExpanded(!isExpanded)}>
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
  );
};

export default ReadMoreLess;

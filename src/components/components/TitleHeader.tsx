// src/components/TitleHeader.jsx
import React from "react";

const TitleHeader = ({ title, sub }) => {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-4xl font-bold  text-white">{title}</h2>
      {/* {sub && <p className="text-grey-600 mt-2 text-lg">{sub}</p>} */}
    </div>
  );
};

export default TitleHeader;

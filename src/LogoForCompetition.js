// LogoForCompetition.js
import React from "react";

const LogoForCompetition = ({ imageSrc, dataAlt }) => {
  return (
    <div className="logo-for-competition">
      <img src={imageSrc} alt="" data-alt={dataAlt} />
    </div>
  );
};

export default LogoForCompetition;

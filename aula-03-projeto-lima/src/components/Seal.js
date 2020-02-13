import React from "react";

import selo01 from "../assets/selo-01.png";
import selo02 from "../assets/selo-02.png";
import selo03 from "../assets/selo-03.png";

const Seal = () => {
  const selos = [selo01, selo02, selo03];
  return (
    <div className="flex flex-col items-center sm:flex-row justify-around">
      {selos.map((currentValue, index, arr) => {
        return (
          <img
            src={currentValue}
            alt={`Selo de garantia ${index + 1}`}
            className="my-4"
          />
        );
      })}
    </div>
  );
};

export default Seal;

import React from "react";
import img01 from "../assets/img-01.png";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:justify-between">
      <div className="p-8">
        <h2 className="font-bold text-4xl">Móveis Planejados</h2>
        <p className="text-xl">
          Comerciais e residenciais para todos os ambientes
        </p>
        <p className="text-gray-700">Atemdemos Pouso Alegre e região</p>
      </div>
      <div>
        <img src={img01} alt="Móveis planejados" />
      </div>
    </div>
  );
};

export default Hero;

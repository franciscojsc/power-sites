import React from "react";

import projeto01 from "../assets/projeto-01.png";
import projeto02 from "../assets/projeto-02.png";
import projeto03 from "../assets/projeto-03.png";

const Project = () => {
  const projetos = [projeto01, projeto02, projeto03];
  return (
    <div>
      <h2 className="font-bold p-8 text-2xl">Projetos de móveis planejados</h2>
      <div className="flex flex-wrap">
        {projetos.map((currentValue, index, arr) => {
          return (
            <div className="max-w-sm">
              <div className="m-8 rounded shadow-lg">
                <img src={currentValue} alt={`Projeto ${index + 1}`} />
                <div className="px-6 py-4">
                  <p className="font-bold text-xl mb-2">
                    {" "}
                    Projeto {index + 1}{" "}
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer egestas, nunc aliquet faucibus eleifend, augue
                    tellus vestibulum metus, eu viverra ipsum neque tincidunt
                    dui.
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;

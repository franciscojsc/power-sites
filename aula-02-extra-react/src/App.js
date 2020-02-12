import React, { useState, useEffect } from "react";
import "./index.css";

const Button = props => {
  const { title } = props; // destructuring assignment
  return <button>{title}</button>;
};

export default function App() {
  let [contador, setContador] = useState(0);
  const contar = () => {
    setContador(contador + 1);
  };

  // Executa ao iniciar a aplicação
  useEffect(() => {
    console.log("ready");
  }, []);

  // Executa quando o valor de contador for alterado
  useEffect(() => {
    if (contador > 0) {
      console.log("Contador alterado");
    }
  }, [contador]);

  return (
    <div className="App">
      <h1>Power Sites</h1>
      <h2>Aula Extra 2</h2>
      <button onClick={contar}> Click-me</button>
      <Button title="Meu botão" />
      <p>Contador: {contador}</p>
    </div>
  );
}

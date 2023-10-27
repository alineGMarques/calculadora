import React, { useState } from "react";
import styled from "styled-components";

const Main = styled.main`
  width: 30vw;

  text-align: center;
  background: gray;
  justify-content: center;
  align-items: center;
  border-radius: 50px 50px;
`;

const Button = styled.button`
  color: #1dba23;
  height: 3vh;
  border-radius: 50px 50px;
  flex-direction: column;
  text-align: center;
`;

const H1 = styled.h1`
  text-align: center;
`;

const Input = styled.input`
  background: #00dfa2;
  border-radius: 50px 50px;
  height: 5vh;

  justify-content: center;
  align-items: center;
`;

function App() {
  const [primeiroValor, setPrimeirovalor] = useState();
  const [segundoValor, setSegundoValor] = useState();
  const [resultado, setResultado] = useState();
  const [C, setC] = useState(0);

  const capturandoPrimeiroValor = (evento) => {
    setPrimeirovalor(Number(evento.target.value));
  };

  const capturandoSegundoValor = (evento) => {
    setSegundoValor(Number(evento.target.value));
  };

  const soma = () => {
    setResultado(primeiroValor + segundoValor);
  };
  const subtração = () => {
    setResultado(primeiroValor - segundoValor);
  };
  const multiplicação = () => {
    setResultado(primeiroValor * segundoValor);
  };
  const divisão = () => {
    setResultado(primeiroValor / segundoValor);
  };

  const total = () => {
    setResultado(primeiroValor + segundoValor);
    setResultado(primeiroValor - segundoValor);
    setResultado(primeiroValor - segundoValor);
    setResultado(primeiroValor / segundoValor);
  };

  return (
    <Main>
      <H1>Calculadora</H1>
      <Input onChange={capturandoPrimeiroValor} />
      <Input onChange={capturandoSegundoValor} />
      <Button onClick={soma}>SOMAR</Button>
      <Button onClick={subtração}>SUBTRAIR</Button>
      <Button onClick={multiplicação}>MULTIPLICAR</Button>
      <Button onClick={divisão}>DIVIDIR</Button>

      <h2>{resultado}</h2>
    </Main>
  );
}
export default App;

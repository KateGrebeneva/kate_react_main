import React, { useState } from "react";
import TempInp from "./TempInp";
import Verdict from "./Verdict";
import "./App.css";

function Calculator() {
  const [temp, setTemp] = useState(0);

  return (
    <div className="calculator-container">
      <h2>Калькулятор температуры воды</h2>
      <TempInp temp={temp} setTemp={setTemp} />
      <Verdict temp={temp} />
    </div>
  );
}

export default Calculator;

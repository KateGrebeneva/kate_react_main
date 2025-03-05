import React, { useState } from "react";
import "./App.css";

function App() {
  const [values, setValues] = useState(Array(5).fill(0));

  function handleChange(index, event) {
    const newValues = [...values];
    newValues[index] = +event.target.value || 0; // Преобразуем ввод в число
    setValues(newValues);
  }

  const average = values.reduce((acc, val) => acc + val, 0) / values.length;

  return (
    <div className="container">
      <h1 className="header">Среднее арифметическое</h1>
      {values.map((value, index) => (
        <input
          key={index}
          value={value}
          onChange={(event) => handleChange(index, event)}
          className="input"
          placeholder={"Введите число " + (index + 1)} // Заменили на конкатенацию строк
        />
      ))}
      <p className="text">Среднее арифметическое: {average.toFixed(2)}</p>
    </div>
  );
}

export default App;
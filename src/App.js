import React, { useState } from "react";
import "./App.css";

function getAverage(arr) {
  if (arr.length === 0) return 0;
  const sum = arr.reduce((acc, num) => acc + Number(num), 0);
  return (sum / arr.length).toFixed(2);
}

function App() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  function changeHandler(index, event) {
    const newNumbers = [...numbers];
    newNumbers[index] = event.target.value;
    setNumbers(newNumbers);
  }

  return (
    <div className="container">
      <h2 className="header">Среднее арифметическое</h2>
      {numbers.map((num, index) => (
        <input
          key={index}
          className="input-box"
          value={num}
          onChange={(event) => changeHandler(index, event)}
        />
      ))}
      <p className="result">Среднее: {getAverage(numbers)}</p>
    </div>
  );
}

export default App;
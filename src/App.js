import React, { useState } from "react";
import "./App.css"; // Подключаем стили

function getSum(arr) {
  return arr.reduce((acc, num) => acc + Number(num), 0);
}

function Calculator() {
  const [value, setValue] = useState("");
  const [nums, setNums] = useState([1, 2, 3]);

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleAdd() {
    if (value.trim() !== "") {
      const updatedNums = [...nums, value];
      setNums(updatedNums);
      setValue("");
    }
  }

  return (
    <div className="calculator-container">
      <h2>Калькулятор суммы</h2>
      <div className="sum-display">Сумма: {getSum(nums)}</div>
      <div className="input-container">
        <input 
          type="number"
          value={value}
          onChange={handleChange}
          placeholder="Введите число"
        />
        <button onClick={handleAdd}>Добавить</button>
      </div>
    </div>
  );
}

export default Calculator;

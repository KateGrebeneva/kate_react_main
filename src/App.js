import React, { useState } from "react";
import "./App.css"; 

export default function App() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  const [inputValue, setInputValue] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  // №1: Клик по li возводит число в квадрат
  const squareNumber = (index) => {
    setNumbers(numbers.map((num, i) => (i === index ? num * num : num)));
  };

  // №2: Удаление li
  const deleteNumber = (index) => {
    setNumbers(numbers.filter((_, i) => i !== index));
  };

  // №3: Клик по li переносит число в input
  const selectNumber = (index) => {
    setInputValue(numbers[index]);
    setEditIndex(index);
  };

  // №4: Потеря фокуса input обновляет li
  const updateNumber = () => {
    if (editIndex !== null) {
      const updatedNumbers = [...numbers];
      updatedNumbers[editIndex] = Number(inputValue);
      setNumbers(updatedNumbers);
      setEditIndex(null);
    }
  };

  // №5: Переворачиваем порядок элементов
  const reverseNumbers = () => {
    setNumbers([...numbers].reverse());
  };

  return (
    <div className="container">
      <h1 className="header">Реактивный список</h1>
      <ul>
        {numbers.map((num, index) => (
          <li key={index} onClick={() => squareNumber(index)} className="list-item">
            {num} 
            <button className="delete-btn" onClick={(e) => { e.stopPropagation(); deleteNumber(index); }}>❌</button>
          </li>
        ))}
      </ul>
      <input
        type="number"
        className="input-box"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onBlur={updateNumber}
      />
      <button className="reverse-btn" onClick={reverseNumbers}>🔄 Перевернуть</button>
    </div>
  );
}
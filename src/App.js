import React, { useState } from "react";
import "./App.css"; // Подключаем стили

function TemperatureConverter() {
  const [fahrenheit, setFahrenheit] = useState(32); // Храним температуру только в Фаренгейтах

  function handleFahrenheitChange(event) {
    setFahrenheit(event.target.value);
  }

  // Вычисляем температуру в Цельсиях из Фаренгейта
  const celsius = (fahrenheit - 32) * 5 / 9;

  return (
    <div className="temp-container">
      <h2>Конвертер температуры</h2>
      <div className="temp-input">
        <label>Температура в Фаренгейтах:</label>
        <input
          type="number"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
        />
      </div>
      <div className="temp-result">
        <label>Температура в Цельсиях:</label>
        <input type="text" value={celsius.toFixed(2)} readOnly />
      </div>
    </div>
  );
}

export default TemperatureConverter;
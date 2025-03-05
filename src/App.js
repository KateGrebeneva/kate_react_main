import React, { useState } from "react";
import "./App.css";

function App() {
  const [age, setAge] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);

  function handleAgeChange(event) {
    setAge(event.target.value);
  }

  function handleFahrenheitChange(event) {
    setFahrenheit(event.target.value);
  }

  const currentYear = new Date().getFullYear();
  const birthYear = currentYear - age;
  const celsius = (fahrenheit - 32) * (5 / 9);

  return (
    <div className="container">
      <h1 className="header">Задание 58</h1>

      <div className="section">
        <h2>Определение года рождения</h2>
        <input 
          type="number" 
          value={age} 
          onChange={handleAgeChange} 
          placeholder="Введите ваш возраст" 
          className="input" 
        />
        <p className="text">Ваш год рождения: {birthYear}</p>
      </div>

      <div className="section">
        <h2>Конвертация Фаренгейта в Цельсий</h2>
        <input 
          type="number" 
          value={fahrenheit} 
          onChange={handleFahrenheitChange} 
          placeholder="Введите градусы Фаренгейта" 
          className="input" 
        />
        <p className="text">Градусы Цельсия: {celsius.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default App;
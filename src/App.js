import React, { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("");

  return (
    <div className="container">
      <h1 className="header">Выбор города 🌍</h1>

      <select className="select-box" value={city} onChange={(e) => setCity(e.target.value)}>
        <option value="">Выберите город...</option>
        <option value="Рим 🇮🇹 🍕">Рим 🇮🇹 🍕</option>
        <option value="Париж 🇫🇷 🥐">Париж 🇫🇷 🥐</option>
        <option value="Токио 🇯🇵 🍣">Токио 🇯🇵 🍣</option>
        <option value="Нью-Йорк 🇺🇸 🍔">Нью-Йорк 🇺🇸 🍔</option>
        <option value="Барселона 🇪🇸 🍷">Барселона 🇪🇸 🍷</option>
      </select>

      {city && <p className="text">Вы выбрали: {city}</p>}
    </div>
  );
}

export default App;
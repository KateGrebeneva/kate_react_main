import React, { useState } from "react";
import "./App.css";

function App() {
  const cities = ["Рим 🇮🇹", "Париж 🇫🇷", "Токио 🇯🇵", "Нью-Йорк 🇺🇸", "Барселона 🇪🇸"];
  const [selectedCity, setSelectedCity] = useState("");

  return (
    <div className="container">
      <h1 className="header">Выбор города 🌍</h1>

      <select className="select-box" value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
        <option value="">Выберите город...</option>
        {cities.map((city, index) => (
          <option key={index} value={city}>{city}</option>
        ))}
      </select>

      {selectedCity && <p className="text">Вы выбрали: {selectedCity}</p>}
    </div>
  );
}

export default App;
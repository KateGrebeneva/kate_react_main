import React, { useState } from "react";
import "./App.css";

function App() {
  const [ageGroup, setAgeGroup] = useState("");

  return (
    <div className="container">
      <h1 className="header">Выберите вашу возрастную группу 👧👩👵</h1>

      <select className="select-box" value={ageGroup} onChange={(e) => setAgeGroup(e.target.value)}>
        <option value="">Выберите возраст...</option>
        <option value="0-12">от 0 до 12 лет</option>
        <option value="13-17">от 13 до 17 лет</option>
        <option value="18-25">от 18 до 25 лет</option>
        <option value="26+">старше 25 лет</option>
      </select>

      {ageGroup && (
        <p className="text">
          {ageGroup === "0-12" && "Вы маленькая принцесса! 👧👑"}
          {ageGroup === "13-17" && "Вы юная леди! 🌸"}
          {ageGroup === "18-25" && "Вы прекрасная девушка! 💃"}
          {ageGroup === "26+" && "Вы роскошная женщина! 👑✨"}
        </p>
      )}
    </div>
  );
}

export default App;
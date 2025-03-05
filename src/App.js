import React, { useState } from "react";
import "./App.css"; // Подключаем стили

function App() {
  const [duckTales1, setDuckTales1] = useState("");
  const [duckTales2, setDuckTales2] = useState("");

  return (
    <div className="container">
      <h1 className="header">Утиные истории</h1>

      <input
        className="input"
        type="text"
        placeholder="«Утиные истории» — телевизионный мультсериал, созданный компанией Уолта Диснея."
        value={duckTales1}
        onChange={(e) => setDuckTales1(e.target.value)}
      />
      <p className="text">Текст 1: {duckTales1}</p>

      <input
        className="input"
        type="text"
        placeholder="Главными героями мультсериала являются пожилой селезень Скрудж МакДак и его племянники-утята — Билли, Вилли и Дилли."
        value={duckTales2}
        onChange={(e) => setDuckTales2(e.target.value)}
      />
      <p className="text">Текст 2: {duckTales2}</p>
    </div>
  );
}

export default App;
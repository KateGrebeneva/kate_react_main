import React, { useState } from "react";
import "./App.css";

function App() {
  const [text] = useState("Привет, мир!");
  const [isChecked] = useState(true);

  return (
    <div className="container">
      <h1 className="header">Значения по умолчанию 🌸</h1>

      <label className="input-label"> 
        Введите текст:
        <input type="text" defaultValue={text} className="input-box" />
      </label>

      <label className="checkbox-label">
        <input type="checkbox" defaultChecked={isChecked} />
        Согласен с условиями 🌟
      </label>
    </div>
  );
}

export default App;
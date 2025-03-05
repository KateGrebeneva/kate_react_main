import React, { useState } from "react";
import "./App.css"; // Подключаем стили

function App() {
  const [text, setText] = useState("");

  return (
    <div className="container">
      <h1 className="header">Счетчик символов</h1>

      <input
        className="input"
        type="text"
        placeholder="Введите текст..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p className="text">Количество символов: {text.length}</p>
    </div>
  );
}

export default App;
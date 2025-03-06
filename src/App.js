import React, { useState } from "react";
import "./App.css";

function App() {
  const characters = ["🐿️ Чип", "🐿️ Дейл", "🐀 Рокфор", "🦇 Вжик", "🐭 Гаечка"];
  const [notes, setNotes] = useState(characters);
  const [inputValue, setInputValue] = useState("");

  function addNewItem() {
    setNotes([...notes, "⭐ Новый герой"]);
  }

  function addCustomItem() {
    if (inputValue.trim() !== "") {
      setNotes([...notes, `🌟 ${inputValue}`]);
      setInputValue("");
    }
  }

  return (
    <div className="container">
      <h2 className="header">🔎 Команда спасателей</h2>
      <ul className="list">
        {notes.map((note, index) => (
          <li key={index} className="list-item">{note}</li>
        ))}
      </ul>
      <button className="btn" onClick={addNewItem}>➕ Добавить героя</button>
      <br />
      <input
        className="input-box"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Введите имя героя"
      />
      <button className="btn" onClick={addCustomItem}>✨ Добавить персонажа</button>
    </div>
  );
}

export default App;

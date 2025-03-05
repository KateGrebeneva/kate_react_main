import React, { useState } from "react";
import "./App.css";

function App() {
  // Состояние для первого задания
  const [isChecked, setIsChecked] = useState(false);
  const [message, setMessage] = useState("");

  function handleClick() {
    setMessage(isChecked ? "Привет, пользователь! 😊" : "До свидания! 👋");
  }

  // Состояние для второго задания
  const [htmlChecked, setHtmlChecked] = useState(false);
  const [cssChecked, setCssChecked] = useState(false);
  const [jsChecked, setJsChecked] = useState(false);

  return (
    <div className="container">
      <h1 className="header">Задание 62</h1>

      {/* Первая задача */}
      <div className="box">
        <h2 className="sub-header">Приветствие</h2>
        <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
        <label className="checkbox-label">Отметьте, если вы хотите приветствие</label>
        <br />
        <button className="button" onClick={handleClick}>Показать сообщение</button>
        <p className="text">{message}</p>
      </div>

      {/* Вторая задача */}
      <div className="box">
        <h2 className="sub-header">Выбор языков</h2>
        <div className="checkbox-group">
          <label>
            <input type="checkbox" checked={htmlChecked} onChange={() => setHtmlChecked(!htmlChecked)} />
            HTML
          </label>
          <label>
            <input type="checkbox" checked={cssChecked} onChange={() => setCssChecked(!cssChecked)} />
            CSS
          </label>
          <label>
            <input type="checkbox" checked={jsChecked} onChange={() => setJsChecked(!jsChecked)} />
            JavaScript
          </label>
        </div>
        <p className="text">HTML: {htmlChecked ? "✅ Знаю" : "❌ Не знаю"}</p>
        <p className="text">CSS: {cssChecked ? "✅ Знаю" : "❌ Не знаю"}</p>
        <p className="text">JavaScript: {jsChecked ? "✅ Знаю" : "❌ Не знаю"}</p>
      </div>
    </div>
  );
}

export default App;
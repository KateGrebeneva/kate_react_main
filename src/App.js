import React, { useState } from "react";
import "./App.css";

function App() {
  const [language, setLanguage] = useState("");

  return (
    <div className="container">
      <h1 className="header">Выберите ваш любимый язык программирования 💻✨</h1>

      <div className="radio-group">
        <label>
          <input
            type="radio"
            name="language"
            value="JavaScript"
            checked={language === "JavaScript"}
            onChange={(e) => setLanguage(e.target.value)}
          />
          JavaScript
        </label>

        <label>
          <input
            type="radio"
            name="language"
            value="Python"
            checked={language === "Python"}
            onChange={(e) => setLanguage(e.target.value)}
          />
          Python
        </label>

        <label>
          <input
            type="radio"
            name="language"
            value="C++"
            checked={language === "C++"}
            onChange={(e) => setLanguage(e.target.value)}
          />
          C++
        </label>
      </div>

      {language && (
        <p className="text">
          {language === "JavaScript"
            ? "Отличный выбор! JavaScript — это круто! 🚀🔥"
            : `Вы выбрали: ${language} 💖`}
        </p>
      )}
    </div>
  );
}

export default App;
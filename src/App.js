import React, { useState } from "react";
import "./App.css"; 

function App() {
  const [language, setLanguage] = useState("ru");

  return (
    <div className="app-container">
      <LanguageSwitcher setLanguage={setLanguage} />
      <Header language={language} />
      <Footer language={language} />
    </div>
  );
}

function LanguageSwitcher({ setLanguage }) {
  return (
    <select onChange={(e) => setLanguage(e.target.value)}>
      <option value="ru">Русский</option>
      <option value="en">English</option>
    </select>
  );
}

function Header({ language }) {
  return <h1>{language === "ru" ? "Привет, пользователь!" : "Hello, User!"}</h1>;
}

function Footer({ language }) {
  return <p>{language === "ru" ? "Вы выбрали русский" : "You have chosen english"}</p>;
}

export default App;

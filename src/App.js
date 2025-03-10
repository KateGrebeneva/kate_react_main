import React from "react";
import User from "./User";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1 className="title">👥 Список пользователей</h1>
      <User name="Алиса" age="25" city="Милан" />
      <User name="Виктор" age="30" city="Барселона" />
      <User name="Ксения" age="22" city="Париж" />
    </div>
  );
}

export default App;

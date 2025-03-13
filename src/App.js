import React from "react";
import User from "./User";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1 className="title">📜 Список персонажей</h1>
      <User name="Ариэль" age={18} city="Атлантика" />
      <User name="Эрик" age={21} city="Королевство" />
      <User name="Урсула" age={45} city="Подводный мир" />
    </div>
  );
}

export default App;


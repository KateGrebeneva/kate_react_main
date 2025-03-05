import React, { useState } from 'react';
import './App.css';

function App() {
  const [age, setAge] = useState(0); // Стейт для хранения возраста

  return (
    <div className="container">
      <h1 className="header">Счетчик возраста</h1>
      <p className="text">Ваш возраст: {age}</p>
      <button className="button" onClick={() => setAge(age + 1)}>Увеличить возраст</button>
      <button className="button" onClick={() => setAge(age - 1)}>Уменьшить возраст</button>
    </div>
  );
}

export default App;
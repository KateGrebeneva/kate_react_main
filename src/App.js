import React from 'react';
import RandomTextGenerator from './RandomTextGenerator'; 
import './App.css'; // Подключаем стили

function App() {
  return (
    <div className="app-container">
      <h1 className="app-header">Генератор текста</h1>
      <RandomTextGenerator />
    </div>
  );
}

export default App;
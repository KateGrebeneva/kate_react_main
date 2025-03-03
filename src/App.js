import React from 'react';
import RandomIDGenerator from './RandomIDGenerator'; 
import './App.css'; // Подключаем стили

function App() {
  return (
    <div className="app-container">
      <h1 className="app-header">Генератор Уникальных ID</h1>
      <RandomIDGenerator />
    </div>
  );
}

export default App;
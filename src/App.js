import React from 'react';
import './App.css'; // Подключаем CSS файл

function App() {
  const arr = ['Флора', 'Блум', 'Муза', 'Стелла', 'Лейла'];

  // Используем метод map для формирования списка
  const listItems = arr.map((item) => (
    <li key={item}>{item}</li> // Используем item как уникальный ключ
  ));

  return (
    <div className="container">
      <h1 className="header">Список фей</h1>
      <ul className="list">
        {listItems}
      </ul>
    </div>
  );
}

export default App;
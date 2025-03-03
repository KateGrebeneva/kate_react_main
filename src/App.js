import React from 'react';
import './App.css'; 

function App() {
  const arr = ['a', 'b', 'c', 'd', 'e'];

  // Используем метод map для формирования списка
  const listItems = arr.map((item, index) => (
    <li key={index}>{item}</li>
  ));

  return (
    <div className="container">
      <h1 className="header">Список букв</h1>
      <ul className="list">
        {listItems}
      </ul>
    </div>
  );
}

export default App;

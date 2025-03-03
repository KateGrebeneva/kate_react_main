import React from 'react';
import './App.css'; // Не забудьте подключить CSS файл

function App() {
  const arr = [];

  for (let i = 1; i <= 5; i++) {
    arr.push(<li key={i}>{i}</li>);
  }

  return (
    <div className="container">
      <h1 className="header">Список чисел</h1>
      <ul className="list">
        {arr}
      </ul>
    </div>
  );
}

export default App;


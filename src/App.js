import React from 'react';
import './App.css'; 

function App() {
  const arr = [
    <li key={1}>Emma Swan</li>,
    <li key={2}>Regina Mills</li>,
    <li key={3}>Mister Gold</li>,
    <li key={4}>Killian Jhons</li>,
    <li key={5}>Mary Margeret</li>,
  ];

  return (
    <div className="container">
      <h1 className="header">Список элементов</h1>
      <ul className="list">
        {arr}
      </ul>
    </div>
  );
}

export default App;
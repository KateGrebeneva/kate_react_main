import React from 'react';
import './App.css'; // Убедитесь, что вы импортируете файл стилей

function App() {
  function show1() {
    alert('Hi, u click button 1');
  }

  function show2() {
    alert('Hi, u click button 2');
  }

  return (
    <div className="container">
      <h1 className="header">Навешивание событий в React</h1>
      <button className="button" onClick={show1}>Act 1</button>
      <button className="button" onClick={show2}>Act 2</button>
    </div>
  );
}

export default App;
import React from 'react';
import './App.css'; 

function App() {
  // Задание №1 - Обработчик события для вывода объекта события в консоль
  function handleEvent(event) {
    console.log(event); 
  }

  // Задание №2 - Обработчик события для вывода event.target в консоль
  function handleTarget(event) {
    console.log(event.target); 
  }

  return (
    <div className="container">
      <h1 className="header">Объект Event в React</h1>
      <button className="button" onClick={handleEvent}>Вывести объект события</button>
      <button className="button" onClick={handleTarget}>Вывести event.target</button>
    </div>
  );
}

export default App;
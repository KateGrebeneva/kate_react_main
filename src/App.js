import React from 'react';
import './App.css'; 

function App() {
  function showNumber(number) {
    alert(number);
  }

  return (
    <div className="container">
      <h1 className="header">Нажмите на кнопку</h1>
      <button className="button" onClick={() => showNumber(1)}>Click for 1</button>
      <button className="button" onClick={() => showNumber(2)}>Click for 2</button>
      <button className="button" onClick={() => showNumber(3)}>Click for 3</button>
    </div>
  );
}

export default App;
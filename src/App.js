import React from 'react';
import './App.css'; 

function App() {
  function getDigitsSum(num) {
    return String(num)
      .split('')
      .reduce((acc, digit) => acc + Number(digit), 0);
  }

  const number = 12345; 
  const sum = getDigitsSum(number); 

  return (
    <div className="container">
      <h1 className="header">Task#32</h1>
      <p className="text">Сумма цифр: {sum}</p>
    </div>
  );
}

export default App;


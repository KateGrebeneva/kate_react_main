import React from 'react';
import './App.css'; // Убедитесь, что вы импортируете файл стилей

function App() {
  // Вспомогательная функция для нахождения суммы цифр
  function getDigitsSum(num) {
    return String(num)
      .split('')
      .reduce((acc, digit) => acc + Number(digit), 0);
  }

  const number = 123; // Число, сумма цифр которого будет найдена
  const sum = getDigitsSum(number); // Вычисляем сумму цифр

  return (
    <div className="container">
      <h1 className="header">Task#31</h1>
      <p className="text">Сумма цифр: {sum}</p>
    </div>
  );
}

export default App;

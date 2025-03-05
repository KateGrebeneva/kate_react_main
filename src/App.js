import React, { useState } from "react";
import "./App.css"; // Подключаем стили

function App() {
  // Стейты для двух чисел и результата
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  // Стейты для дат
  const today = new Date().toISOString().split("T")[0]; // Текущая дата в формате YYYY-MM-DD
  const [date1, setDate1] = useState(today);
  const [date2, setDate2] = useState(today);
  const [dateDiff, setDateDiff] = useState(null);

  // Стейты для чисел с обработкой фокуса
  const [sumDigits, setSumDigits] = useState(null);
  const [multiplicationDivisors, setMultiplicationDivisors] = useState(null);

  // Функции для обработки кнопок
  function calculateSum() {
    setResult(Number(num1) + Number(num2));
  }

  function calculateProduct() {
    setResult(Number(num1) * Number(num2));
  }

  function calculateDateDifference() {
    const diff =
      (new Date(date2) - new Date(date1)) / (1000 * 60 * 60 * 24);
    setDateDiff(Math.abs(diff));
  }

  function handleBlurSum(event) {
    const num = event.target.value;
    const sum = num
      .split("")
      .map(Number)
      .reduce((acc, n) => acc + n, 0);
    setSumDigits(sum);
  }

  function handleBlurMultiplication(event) {
    const num = Number(event.target.value);
    let product = 1;
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) product *= i;
    }
    setMultiplicationDivisors(product);
  }

  return (
    <div className="container">
      <h2 className="header">Задание 1 и 2</h2>

      {/* Сумма и произведение */}
      <div className="box">
        <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} className="input" placeholder="Число 1" />
        <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} className="input" placeholder="Число 2" />
        <div className="button-group">
          <button onClick={calculateSum} className="button">Сумма</button>
          <button onClick={calculateProduct} className="button">Произведение</button>
        </div>
        <p className="text">Результат: {result !== null ? result : "—"}</p>
      </div>

      <h2 className="header">Задание 3</h2>
      {/* Разница дат */}
      <div className="box">
        <input type="date" value={date1} onChange={(e) => setDate1(e.target.value)} className="input" />
        <input type="date" value={date2} onChange={(e) => setDate2(e.target.value)} className="input" />
        <button onClick={calculateDateDifference} className="button">Разница в днях</button>
        <p className="text">Разница: {dateDiff !== null ? `${dateDiff} дней` : "—"}</p>
      </div>

      <h2 className="header">Задание 4</h2>
      <div className="box">
        <input type="number" onBlur={handleBlurSum} className="input" placeholder="Введите число" />
        <p className="text">Сумма цифр: {sumDigits !== null ? sumDigits : "—"}</p>
      </div>

      <h2 className="header">Задание 5</h2>
      <div className="box">
        <input type="number" onBlur={handleBlurMultiplication} className="input" placeholder="Введите число" />
        <p className="text">Произведение делителей: {multiplicationDivisors !== null ? multiplicationDivisors : "—"}</p>
      </div>
    </div>
  );
}

export default App;
import React, { useState } from "react";
import "./App.css";

function translit(text) {
  const dictionary = {
    а: "a", б: "b", в: "v", г: "g", д: "d", е: "e", ё: "yo", ж: "zh",
    з: "z", и: "i", й: "y", к: "k", л: "l", м: "m", н: "n", о: "o",
    п: "p", р: "r", с: "s", т: "t", у: "u", ф: "f", х: "kh", ц: "ts",
    ч: "ch", ш: "sh", щ: "shch", ъ: "", ы: "y", ь: "", э: "e", ю: "yu", я: "ya"
  };

  return text.split("").map(char => dictionary[char.toLowerCase()] || char).join("");
}

function sumNumbers(text) {
  return text
    .split("\n")
    .map(line => Number(line.trim()))
    .filter(num => !isNaN(num))
    .reduce((sum, num) => sum + num, 0);
}

function App() {
  const [text, setText] = useState("");
  const [numbers, setNumbers] = useState("");

  return (
    <div className="container">
      <h1 className="header">Задание 1</h1>
      <div className="box">
        <h2 className="sub-header">Транслитерация</h2>
        <textarea value={text} onChange={e => setText(e.target.value)} className="textarea" placeholder="Введите текст..." />
        <p className="text">Транслит: {translit(text)}</p>
      </div>

      <h1 className="header">Задание 2</h1>
      <div className="box">
        <h2 className="sub-header">Сумма чисел</h2>
        <textarea value={numbers} onChange={e => setNumbers(e.target.value)} className="textarea" placeholder="Введите числа, каждое с новой строки..." />
        <p className="text">Сумма: {sumNumbers(numbers)}</p>
      </div>
    </div>
  );
}

export default App;
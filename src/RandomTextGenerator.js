import React, { useState } from 'react';
import './RandomTextGenerator.css'; // Подключаем стили

const texts = [
  "Привет, мир!",
  "Как дела?",
  "Случайный текст",
  "React — это мощная библиотека!",
  "Генерация текста — это весело!",
  "Вдохновение приходит в самых неожиданных местах.",
  "Каждый день — это новая возможность.",
  "Будь смелым, мечтай о большем!",
  "Случайные слова могут привести к интересным идеям.",
  "Создавайте, экспериментируйте и учитесь!"
];

function RandomTextGenerator() {
  const [randomText, setRandomText] = useState('');

  const generateRandomText = () => {
    const randomIndex = Math.floor(Math.random() * texts.length);
    setRandomText(texts[randomIndex]);
  };

  return (
    <div className="random-text-container">
      <h2 className="header">Генерация случайного текста</h2>
      <button className="generate-button" onClick={generateRandomText}>
        Сгенерировать случайный текст
      </button>
      <p className="text-display">{randomText}</p>
    </div>
  );
}

export default RandomTextGenerator;

import React, { useState } from "react";
import "./App.css";

function App() {
  // Задание 1: Проверка возраста
  const [isAdult, setIsAdult] = useState(false);

  // Задание 2: Отображение текста о мультфильме
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="container">
      <h1 className="header">Задание 63</h1>

      {/* Первая задача */}
      <div className="box">
        <h2 className="sub-header">Подтверждение возраста</h2>
        <label className="checkbox-label">
          <input type="checkbox" checked={isAdult} onChange={() => setIsAdult(!isAdult)} />
          Мне уже есть 18 лет
        </label>
        <div className="content-box">
          {isAdult ? (
            <div>
              <h2>Ура, вам уже есть 18! 🎉</h2>
              <p>Здесь расположен контент только для взрослых. 🔞</p>
            </div>
          ) : (
            <div>
              <p>Увы, вам еще нет 18 лет. 😢</p>
            </div>
          )}
        </div>
      </div>

      {/* Вторая задача */}
      <div className="box">
        <h2 className="sub-header">О мультфильме</h2>
        <label className="checkbox-label">
          <input type="checkbox" checked={isVisible} onChange={() => setIsVisible(!isVisible)} />
          Показать описание "Чудеса на виражах"
        </label>
        {isVisible && (
          <p className="text">
            "Чудеса на виражах" — это захватывающий мультсериал о приключениях Балло и его друзей,
            путешествующих на гидроплане и попадающих в удивительные ситуации. 🛩️✨
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
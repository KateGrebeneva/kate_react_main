import React, { useState } from "react";
import "./App.css";

const initDate = {
  year: 2025,
  month: 12,
  day: 31,
};

function getWeekday(year, month, day) {
  const date = new Date(year, month - 1, day);
  const weekdays = ["🌞 Воскресенье", "🌜 Понедельник", "🌛 Вторник", "⭐ Среда", "🌎 Четверг", "🔥 Пятница", "🎉 Суббота"];
  return weekdays[date.getDay()];
}

function App() {
  const [date, setDate] = useState(initDate);

  function handleChange(prop, event) {
    setDate({ ...date, [prop]: event.target.value });
  }

  return (
    <div className="container">
      <h2 className="header">Выбор даты</h2>
      <input
        type="number"
        className="input-box"
        value={date.year}
        onChange={(event) => handleChange("year", event)}
      />
      <input
        type="number"
        className="input-box"
        value={date.month}
        onChange={(event) => handleChange("month", event)}
      />
      <input
        type="number"
        className="input-box"
        value={date.day}
        onChange={(event) => handleChange("day", event)}
      />
      <p className="result">
        Дата: {date.year}-{date.month}-{date.day} ({getWeekday(date.year, date.month, date.day)})
      </p>
    </div>
  );
}

export default App;
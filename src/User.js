import React from "react";

function User({ name, age, city }) {
  return (
    <div className="user-box">
      <p className="user-text">🤩 <strong>Имя:</strong> {name}</p>
      <p className="user-text">🎂 <strong>Возраст:</strong> {age} лет</p>
      <p className="user-text">📍 <strong>Город:</strong> {city}</p>
    </div>
  );
}

export default User;

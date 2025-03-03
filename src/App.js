// src/App.js
import React from 'react';
import { id } from './utils';
import './App.css'; // Импортируем стили

const App = () => {
  const users = [
    { id: id(), name: 'Alice', age: 25 },
    { id: id(), name: 'Bob', age: 30 },
    { id: id(), name: 'Charlie', age: 35 },
  ];

  return (
    <div className="container">
      <h1>Список Пользователей</h1>
      {users.map(user => (
        <div key={user.id} className="user">
          ID: {user.id}, Имя: {user.name}, Возраст: {user.age}
        </div>
      ))}
    </div>
  );
};

export default App;
import React, { useState } from "react";
import User from "./User";
import "./App.css";

function App() {
  const initUsers = [
    { id: 1, name: "Реджина", surname: "Миллс", age: 29, isBanned: false },
    { id: 2, name: "Робин", surname: "Андреева", age: 32, isBanned: false },
    { id: 3, name: "Арчи", surname: "Хоппер", age: 35, isBanned: false }
  ];

  const [users, setUsers] = useState(initUsers);

  // Функция для бана пользователя
  const banUser = (id) => {
    setUsers(users.map((user) =>
      user.id === id ? { ...user, isBanned: true } : user
    ));
  };

  return (
    <div className="container">
      <h1 className="title">📋 Список пользователей</h1>
      <table className="user-table">
        <thead>
          <tr>
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Возраст</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <User
              key={user.id}
              id={user.id}
              name={user.name}
              surname={user.surname}
              age={user.age}
              isBanned={user.isBanned}
              banUser={banUser} // Передаем функцию для бана
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
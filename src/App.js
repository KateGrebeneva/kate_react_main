import React from "react";
import User from "./User";
import "./App.css";

function App() {
  const users = [
    { id: 1, name: "Реджина", surn: "Миллс", age: 29 },
    { id: 2, name: "Робин", surn: "Андреева", age: 32 },
    { id: 3, name: "Арчи", surn: "Хоппер", age: 35 }
  ];

  return (
    <div className="container">
      <h1 className="title">📋 Список пользователей</h1>
      <table className="user-table">
        <thead>
          <tr>
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Возраст</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <User key={user.id} name={user.name} surn={user.surn} age={user.age} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

import React from "react";
import User from "./User";
import "./App.css";

function App() {
  const users = [
    { id: 1, name: "Анастасия", surn: "Лебедева", age: 16 },
    { id: 2, name: "Мира", surn: "Андреева", age: 16 },
    { id: 3, name: "Анна", surn: "Джонс", age: 18 }
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
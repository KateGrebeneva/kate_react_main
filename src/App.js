import React, { useState } from "react";
import User from "./User";
import "./App.css";

function App() {
  const initUsers = [
    { id: 1, name: "Реджина", surname: "Миллс", age: 29 },
    { id: 2, name: "Робин", surname: "Андреева", age: 32 },
    { id: 3, name: "Арчи", surname: "Хоппер", age: 35 }
  ];

  const [users] = useState(initUsers);

  return (
    <div className="container">
      <h1 className="title">📋 Список пользователей</h1>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th> 
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Возраст</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <User key={user.id} id={user.id} name={user.name} surname={user.surname} age={user.age} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
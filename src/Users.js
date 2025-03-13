import React, { useState } from "react";
import User from "./User";
import "./App.css";

function Users() {
  const initUsers = [
    { id: 1, name: "Реджина", surname: "Миллс", age: 29, isEdit: false },
    { id: 2, name: "Робин", surname: "Гуд", age: 32, isEdit: false },
    { id: 3, name: "Арчи", surname: "Хоппер", age: 35, isEdit: false }
  ];

  const [users, setUsers] = useState(initUsers);

  function toggleEditMode(id) {
    setUsers(users.map(user =>
      user.id === id ? { ...user, isEdit: !user.isEdit } : user
    ));
  }

  function editUser(id, field, value) {
    setUsers(users.map(user =>
      user.id === id ? { ...user, [field]: value } : user
    ));
  }

  return (
    <div className="container">
      <h1 className="title">📋 Список пользователей</h1>
      <table className="user-table">
        <thead>
          <tr>
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Возраст</th>
            <th>Действие</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <User 
              key={user.id} 
              user={user} 
              toggleEditMode={toggleEditMode} 
              editUser={editUser} 
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
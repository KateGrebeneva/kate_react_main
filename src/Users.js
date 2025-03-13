import React, { useState } from "react";
import User from "./User";
import "./App.css";

const initUsers = [
  { id: 1, name: 'User1', email: 'user1@example.com', role: 'Admin' },
  { id: 2, name: 'User2', email: 'user2@example.com', role: 'User' },
  { id: 3, name: 'User3', email: 'user3@example.com', role: 'Manager' },
];

function Users() {
  const [users, setUsers] = useState(initUsers);

  function changeField(id, field, event) {
    setUsers(users.map(user => {
      if (user.id === id) {
        user[field] = event.target.value;
      }
      return user;
    }));
  }

  const rows = users.map(user => {
    return (
      <User
        key={user.id}
        id={user.id}
        name={user.name}
        email={user.email}
        role={user.role}
        changeField={changeField}
      />
    );
  });

  return (
    <div className="container">
      <h2 className="title">Список пользователей</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>Имя</th>
            <th>Email</th>
            <th>Роль</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  );
}

export default Users;

import React from 'react';
import './App.css'; 

const users = [
  { id: 1, name: 'Марина', surn: 'Нарочинская', age: 30 },
  { id: 2, name: 'Олег', surn: 'Брагин', age: 31 },
  { id: 3, name: 'Нина', surn: 'Дубровская', age: 32 },
];

function App() {
  const rows = users.map((user) => (
    <tr key={user.id}>
      <td>{user.name}</td>
      <td>{user.surn}</td>
      <td>{user.age}</td>
    </tr>
  ));

  return (
    <div className="container">
      <h2 className="header">Список Пользователей</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Возраст</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

export default App;
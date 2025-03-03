import React from 'react';
import './App.css'; 

const users = [
  { id: 1, name: 'Elena', surn: 'Gilbert', age: 18 },
  { id: 2, name: 'Damon', surn: 'Salvatore', age: 25 },
  { id: 3, name: 'Catherine', surn: 'Pirs', age: 20 },
];

function App() {
  const userList = users.map((user) => (
    <li key={user.id}>
      {user.name} {user.surn}, Age: {user.age}
    </li>
  ));

  return (
    <div className="container">
      <h2 className="header">Список Пользователей</h2>
      <ul className="list">{userList}</ul>
    </div>
  );
}

export default App;
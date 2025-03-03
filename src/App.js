import React from 'react';
import './App.css'; 

const users = [
  { name: 'Elena', surn: 'Gilbert', age: 18 },
  { name: 'Damon', surn: 'Salvatore', age: 25 },
  { name: 'Catherine', surn: 'Pirs', age: 20 },
];

function App() {
  const userList = users.map((user, index) => (
    <li key={index}>
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
import React, { useState } from 'react';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState('Реджина');
  const [lastName, setLastName] = useState('Милс');
  const [age, setAge] = useState(25);

  return (
    <div className="container">
      <h1 className="header">Данные пользователя</h1>
      <p className="text">Имя: <span>{firstName}</span></p>
      <p className="text">Фамилия: <span>{lastName}</span></p>
      <p className="text">Возраст: <span>{age}</span></p>
    </div>
  );
}

export default App;
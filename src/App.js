import React, { useState } from 'react';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState('Реджина');
  const [lastName, setLastName] = useState('Милс');

  return (
    <div className="container">
      <h1 className="header">Данные пользователя</h1>
      <p className="text">Имя: <span>{firstName}</span></p>
      <button className="button" onClick={() => setFirstName('Эмма')}>Изменить имя</button>
      <p className="text">Фамилия: <span>{lastName}</span></p>
      <button className="button" onClick={() => setLastName('Свон')}>Изменить фамилию</button>
    </div>
  );
}

export default App;
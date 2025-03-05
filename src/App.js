import React, { useState } from 'react';
import './App.css';

function App() {
  // Стейт для бана пользователя
  const [isBanned, setIsBanned] = useState(false);

  return (
    <div className="container">
      <h1 className="header">Управление пользователем</h1>
      <p className="text">Пользователь {isBanned ? 'заблокирован' : 'не заблокирован'}</p>
      {isBanned ? (
        <button className="button" onClick={() => setIsBanned(false)}>Разблокировать пользователя</button>
      ) : (
        <button className="button" onClick={() => setIsBanned(true)}>Заблокировать пользователя</button>
      )}
    </div>
  );
}

export default App;
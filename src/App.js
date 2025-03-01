import React from 'react';
import './App.css'; 

function App() {
  const isAuth = true; 

  return (
    <div className="container">
      <h1 className="header">Добро пожаловать!</h1>
      {isAuth && <p className="text">Вы авторизованы</p>}
    </div>
  );
}

export default App;

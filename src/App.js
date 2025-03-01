import React from 'react';
import './App.css';

function App() {
  const isAuth = false; 
  
  return (
    <div className="container">
      <h1 className="header">Добро пожаловать!</h1>
      {/* Текст будет отображаться только если isAuth равно false */}
      {!isAuth && <p className="text">Пожалуйста, авторизуйтесь</p>}
    </div>
  );
}

export default App;

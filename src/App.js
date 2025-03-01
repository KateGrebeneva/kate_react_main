import './App.css';

function App() {
  const isAdmin = true;

  return (
    <div className="container">
      <h1 className="header">Администратор</h1>
      {isAdmin ? (
        <div>
          <p className="text">Добро пожаловать, администратор!</p>
          <p className="text">Вы имеете доступ к специальным функциям.</p>
          <p className="text">Пожалуйста, управляйте пользователями и настройками.</p>
        </div>
      ) : (
        <p className="text">У вас нет доступа к этой странице.</p>
      )}
      <div className="footer">© 2025 Все права защищены</div>
    </div>
  );
}

export default App;

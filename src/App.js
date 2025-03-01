import './App.css';

function App() {
  const age = 17; // Измените значение для проверки

  return (
    <div className="container">
      <h1 className="header">Проверка возраста</h1>
      <div className="text">
        {age > 18 ? (
          <p>Вы совершеннолетний!</p>
        ) : (
          <p>Вы еще молоды!</p>
        )}
      </div>
    </div>
  );
}

export default App;

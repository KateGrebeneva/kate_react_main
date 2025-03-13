import React from "react";
import Employee from "./Employee";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1 className="title">💼 Список сотрудников</h1>
      <Employee surname="Лебедев" name="Иван" patronymic="Васильевич" salary={50000} />
      <Employee surname="Петрова" name="Мария" patronymic="Александровна" salary={60000} />
      <Employee surname="Сидоров" name="Алексей" patronymic="Сергеевич" salary={70000} />
    </div>
  );
}

export default App;

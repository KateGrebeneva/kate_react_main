import React from "react";
import Employee from "./Employee";
import "./App.css";

function App() {
  const employees = [
    { surname: "Лебедев", name: "Евгений", patronymic: "Андреевич", salary: 50000 },
    { surname: "Либерман", name: "Татьяна", patronymic: "Александровна", salary: 60000 },
    { surname: "Костенко", name: "Лина", patronymic: "Васильевна", salary: 70000 }
  ];

  return (
    <div className="container">
      <h1 className="title">💼 Список сотрудников</h1>
      {employees.map((employee, index) => (
        <Employee
          key={index}
          surname={employee.surname}
          name={employee.name}
          patronymic={employee.patronymic}
          salary={employee.salary}
        />
      ))}
    </div>
  );
}

export default App;

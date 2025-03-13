import React from "react";

function Employee(props) {
  return (
    <div className="employee-box">
      <p className="employee-text"><strong>Фамилия:</strong> {props.surname}</p>
      <p className="employee-text"><strong>Имя:</strong> {props.name}</p>
      <p className="employee-text"><strong>Отчество:</strong> {props.patronymic}</p>
      <p className="employee-text"><strong>Зарплата:</strong> {props.salary.toLocaleString()} руб.</p>
    </div>
  );
}

export default Employee;
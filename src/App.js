import React from 'react';
import './App.css'; 

function App() {
  // Задача 1: Функция принимает один аргумент и выводит его в консоль
  function func(arg) {
    console.log('Task#36 №1: ' + arg);
  }

  // Задача 2: Функция принимает два аргумента: аргумент и объект события
  function funcWithEvent(arg, event) {
    console.log('Task#36 №2: ' + arg, event);
  }

  // Задача 3: Объект события передается первым параметром
  function funcEventFirst(event, arg) {
    console.log('Task#36 №3: ' +  event, arg);
  }

  // Задача 4: Объект события передается вторым параметром
  function funcEventMiddle(arg1, event, arg2) {
    console.log('Task#36 №4: ' + arg1, event, arg2);
  }

  return (
    <div className="container">
      <h1 className="header">Объект Event в React</h1>

      <h2>Задача 1</h2>
      <button className="button" onClick={() => func('eee')}>Click me!</button>

      <h2>Задача 2</h2>
      <button className="button" onClick={event => funcWithEvent('eee', event)}>Click me!</button>

      <h2>Задача 3</h2>
      <button className="button" onClick={event => funcEventFirst(event, 'eee')}>Click me!</button>

      <h2>Задача 4</h2>
      <button className="button" onClick={event => funcEventMiddle('arg1', event, 'arg2')}>Click me!</button>
    </div>
  );
}

export default App;
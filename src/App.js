import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // Для генерации уникальных ID
import "./App.css"; 

const initNotes = [
  {
    id: "GYi9G_uC4gBF1e2SixDvu",
    prop1: "Флора",
    prop2: "фея",
    prop3: "природа",
  },
  {
    id: "IWSpfBPSV3SXgRF87uO74",
    prop1: "Блум",
    prop2: "фея",
    prop3: "огонь",
  },
  {
    id: "JAmjRlfQT8rLTm5tG2m1L",
    prop1: "Муза",
    prop2: "фея",
    prop3: "музыка",
  },
];

function App() {
  const [notes, setNotes] = useState(initNotes);
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");

  // Функция для добавления нового объекта
  const addNote = () => {
    const newNote = {
      id: uuidv4(),
      prop1: "Стелла",
      prop2: "фея",
      prop3: "солнце",
    };
    setNotes([...notes, newNote]);
  };

  // Функция для добавления объекта из инпутов
  const addNoteFromInputs = () => {
    if (!input1 || !input2 || !input3) return;
    const newNote = {
      id: uuidv4(),
      prop1: input1,
      prop2: input2,
      prop3: input3,
    };
    setNotes([...notes, newNote]);
    setInput1("");
    setInput2("");
    setInput3("");
  };

  return (
    <div className="container">
      <h2 className="header">Массив объектов</h2>
      <ul>
        {notes.map((note) => (
          <li key={note.id} className="list-item">
            <span>{note.prop1}</span>
            <span>{note.prop2}</span>
            <span>{note.prop3}</span>
          </li>
        ))}
      </ul>

      <button className="add-btn" onClick={addNote}>
        ➕ Добавить объект
      </button>

      <div className="input-group">
        <input
          type="text"
          placeholder="Prop1"
          className="input-box"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Prop2"
          className="input-box"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />
        <input
          type="text"
          placeholder="Prop3"
          className="input-box"
          value={input3}
          onChange={(e) => setInput3(e.target.value)}
        />
        <button className="add-btn" onClick={addNoteFromInputs}>
          ➕ Добавить из инпутов
        </button>
      </div>
    </div>
  );
}

export default App;
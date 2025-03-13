import React, { useState } from "react";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
  const [editNum, setEditNum] = useState(null);

  const result = notes.map((note, index) => {
    return (
      <div
        key={index}
        className="note-container"
        onClick={() => startEdit(index)}
      >
        <p className="note-text">{note}</p>
      </div>
    );
  });

  function startEdit(index) {
    setEditNum(index);
  }

  function changeItem(event) {
    const updatedNotes = [...notes];
    updatedNotes[editNum] = event.target.value;
    setNotes(updatedNotes);
  }

  return (
    <div className="app-container">
      <div className="notes-list">{result}</div>
      {editNum !== null && (
        <div className="input-container">
          <input
            className="edit-input"
            value={notes[editNum]}
            onChange={changeItem}
            autoFocus
          />
        </div>
      )}
    </div>
  );
}

export default App;

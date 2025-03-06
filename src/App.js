import React, { useState } from 'react';
import './App.css';

const id = () => '_' + Math.random().toString(36).substr(2, 9);  // Генерация уникального ID

const initNotes = [
  {
    id: id(),
    name: 'Rose Water Facial Toner 🌹',
    desc: 'A refreshing toner made from rose water to hydrate and rejuvenate the skin. 💧',
    show: false,
  },
  {
    id: id(),
    name: 'Lavender Lip Balm 💜',
    desc: 'A soothing lip balm with lavender oil to keep your lips soft and hydrated. 💋',
    show: false,
  },
  {
    id: id(),
    name: 'Minty Fresh Face Mask 🌿',
    desc: 'A cooling face mask with mint extract that helps to refresh and revitalize tired skin. ❄️',
    show: false,
  },
];

function App() {
  const [notes, setNotes] = useState(initNotes);

  const toggleDescription = (id) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, show: !note.show } : note
      )
    );
  };

  const result = notes.map((note) => (
    <div key={note.id} className="note">
      <p className="product-name">
        {note.name}
      </p>
      {note.show && (
        <div className="description-box">
          <i>{note.desc}</i>
        </div>
      )}
      <button className="show-btn" onClick={() => toggleDescription(note.id)}>
        {note.show ? 'Hide Description ❌' : 'Show Description 👀'}
      </button>
    </div>
  ));

  return <div className="container">{result}</div>;
}

export default App;

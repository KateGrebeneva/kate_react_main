import React, { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

const initCharacters = [
  {
    id: uuidv4(),
    name: "Ариэль",
    role: "Русалочка",
    trait: "Любознательная",
  },
  {
    id: uuidv4(),
    name: "Урсула",
    role: "Ведьма моря",
    trait: "Коварная",
  },
  {
    id: uuidv4(),
    name: "Тритон",
    role: "Отец Ариэль",
    trait: "Мудрый",
  },
  {
    id: uuidv4(),
    name: "Флаундер",
    role: "Рыбка, друг Ариэль",
    trait: "Добродушный",
  },
  {
    id: uuidv4(),
    name: "Себастьян",
    role: "Краб-дворецкий",
    trait: "Заботливый",
  },
];

function App() {
  const [characters, setCharacters] = useState(initCharacters);
  const [inputName, setInputName] = useState("");
  const [inputRole, setInputRole] = useState("");
  const [inputTrait, setInputTrait] = useState("");
  const [editId, setEditId] = useState(null);

  // Удаление персонажа
  const removeCharacter = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  // Заполнение инпутов данными персонажа
  const fillInputs = (id) => {
    const char = characters.find((char) => char.id === id);
    if (char) {
      setInputName(char.name);
      setInputRole(char.role);
      setInputTrait(char.trait);
      setEditId(id);
    }
  };

  // Обновление данных персонажа
  const updateCharacter = () => {
    if (!editId) return;

    setCharacters(
      characters.map((char) =>
        char.id === editId
          ? { ...char, name: inputName, role: inputRole, trait: inputTrait }
          : char
      )
    );

    // Очистка инпутов
    setInputName("");
    setInputRole("");
    setInputTrait("");
    setEditId(null);
  };

  return (
    <div className="container">
      <h2 className="header">✨ Персонажи "Русалочки" ✨</h2>
      <ul>
        {characters.map((char) => (
          <li key={char.id} className="list-item">
            <span>🌊 {char.name}</span>
            <span>🎭 {char.role}</span>
            <span>💖 {char.trait}</span>
            <button className="btn" onClick={() => fillInputs(char.id)}>
              ✏️ Редактировать
            </button>
            <button className="btn delete" onClick={() => removeCharacter(char.id)}>
              ❌ Удалить
            </button>
          </li>
        ))}
      </ul>

      <div className="input-group">
        <input
          type="text"
          placeholder="Имя"
          className="input-box"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Роль"
          className="input-box"
          value={inputRole}
          onChange={(e) => setInputRole(e.target.value)}
        />
        <input
          type="text"
          placeholder="Характеристика"
          className="input-box"
          value={inputTrait}
          onChange={(e) => setInputTrait(e.target.value)}
        />
        <button className="btn update" onClick={updateCharacter}>
          ✅ Сохранить изменения
        </button>
      </div>
    </div>
  );
}

export default App;

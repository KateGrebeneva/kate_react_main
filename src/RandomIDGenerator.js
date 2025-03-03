import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { v4 as uuidv4 } from 'uuid'; // Импортируем v4 из библиотеки uuid
import './RandomIDGenerator.css'; // Подключаем стили

function RandomIDGenerator() {
  const [nanoidId, setNanoidId] = useState('');
  const [uuidId, setUuidId] = useState('');

  const generateNanoId = () => {
    setNanoidId(nanoid());
  };

  const generateUuid = () => {
    setUuidId(uuidv4()); // Используем uuidv4 для генерации UUID
  };

  return (
    <div className="random-id-container">
      <h2 className="header">Генерация ID</h2>
      <button className="generate-button" onClick={generateNanoId}>
        Сгенерировать Nano ID
      </button>
      <p className="id-display">Nano ID: {nanoidId}</p>
      
      <button className="generate-button" onClick={generateUuid}>
        Сгенерировать UUID
      </button>
      <p className="id-display">UUID: {uuidId}</p>
    </div>
  );
}

export default RandomIDGenerator;

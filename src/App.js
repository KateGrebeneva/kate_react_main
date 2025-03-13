import React from 'react';
import { styles } from './styles.js'; // Импортируем стили

function DuckTales() {
  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(to right,rgb(165, 178, 193),rgb(94, 129, 174))' }}>
      <div style={styles.container}>
        <h1 style={styles.title}>Утиные Истории</h1>
        <button style={styles.button1}>Начать смотреть</button>
        <button style={styles.button2}>Посмотреть трейлер</button>
      </div>
    </div>
  );
}

export default DuckTales;

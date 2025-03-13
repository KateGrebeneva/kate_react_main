import React from 'react';

function DuckTales() {
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(to right, #e0f7fa, #80deea)'
    }}>
      <div style={{
        width: '350px',
        padding: '30px',
        backgroundColor: '#b3e5fc', // Нежный голубой
        borderRadius: '12px',
        textAlign: 'center',
        border: '3px solid #0288d1', // Насыщенный голубой
        boxShadow: '0 4px 10px rgba(0, 121, 107, 0.4)', // Тень
      }}>
        <h1 style={{
          fontSize: '26px',
          color: '#004d40',
          marginBottom: '20px',
          fontWeight: 'bold',
        }}>
          Утиные Истории
        </h1>
        <button style={{
          padding: '12px 24px',
          margin: '10px 0',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
          backgroundColor: '#0288d1',
          color: 'white',
          fontSize: '16px',
          fontWeight: 'bold',
        }}>
          Начать смотреть
        </button>
        <button style={{
          padding: '12px 24px',
          margin: '10px 0',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
          backgroundColor: '#4caf50',
          color: 'white',
          fontSize: '16px',
          fontWeight: 'bold',
        }}>
          Посмотреть трейлер
        </button>
      </div>
    </div>
  );
}

export default DuckTales;

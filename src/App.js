import React from 'react';

function DuckTales() {
  const pageStyle = {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(to right,rgb(141, 184, 191),rgb(99, 150, 157))', // Градиентный фон
  };

  const containerStyle = {
    width: '400px',
    padding: '30px',
    backgroundColor: 'rgb(196, 216, 218)', // Нежный голубой
    borderRadius: '12px',
    textAlign: 'center',
    border: '3px solid rgb(26, 37, 132)', // Насыщенный голубой
    boxShadow: '0 4px 10px rgba(0, 38, 121, 0.4)', // Тень
  };

  const titleStyle = {
    fontSize: '26px',
    color: '#004d40',
    marginBottom: '20px',
    fontWeight: 'bold',
  };

  const buttonStyle = {
    padding: '12px 24px',
    margin: '10px 0',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    fontSize: '16px',
    fontWeight: 'bold',
  };

  const button1Style = {
    ...buttonStyle,
    backgroundColor: '#0288d1',
    color: 'white',
  };

  const button2Style = {
    ...buttonStyle,
    backgroundColor: '#4caf50',
    color: 'white',
  };

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <h1 style={titleStyle}>Утиные Истории</h1>
        <button style={button1Style}>Начать смотреть</button>
        <button style={button2Style}>Посмотреть трейлер</button>
      </div>
    </div>
  );
}

export default DuckTales;

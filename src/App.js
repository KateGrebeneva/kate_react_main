import React from 'react';

function ForestAdventure() {
  // Стили для фонового контейнера
  const bgHeight = '100vh';
  const bgDisplay = 'flex';
  const bgJustifyContent = 'center';
  const bgAlignItems = 'center';
  const bgGradient = 'linear-gradient(to right,rgb(139, 187, 83),rgba(119, 182, 46, 0.71))';

  // Стили для центрального блока
  const containerWidth = '350px';
  const containerPadding = '30px';
  const containerBg = 'rgb(176, 222, 123)'; 
  const containerRadius = '12px';
  const containerTextAlign = 'center';
  const containerBorder = '3px solid rgb(28, 56, 10)'; 
  const containerShadow = '0 4px 10px rgba(85, 139, 47, 0.4)'; // Тень

  // Стили для заголовка
  const titleSize = '26px';
  const titleColor = '#33691e'; 
  const titleMargin = '20px';
  const titleWeight = 'bold';

  // Стили для кнопок
  const buttonPadding = '12px 24px';
  const buttonMargin = '10px 0';
  const buttonBorder = 'none';
  const buttonRadius = '8px';
  const buttonCursor = 'pointer';
  const buttonTransition = 'background-color 0.3s ease';

  const button1Bg = '#558b2f'; 
  const button1Color = 'white';
  const button1Hover = '#33691e';

  const button2Bg = '#8bc34a'; 
  const button2Color = 'white';
  const button2Hover = '#689f38';

  return (
    <div style={{
      height: bgHeight,
      display: bgDisplay,
      justifyContent: bgJustifyContent,
      alignItems: bgAlignItems,
      background: bgGradient
    }}>
      <div style={{
        width: containerWidth,
        padding: containerPadding,
        backgroundColor: containerBg,
        borderRadius: containerRadius,
        textAlign: containerTextAlign,
        border: containerBorder,
        boxShadow: containerShadow,
      }}>
        <h1 style={{
          fontSize: titleSize,
          color: titleColor,
          marginBottom: titleMargin,
          fontWeight: titleWeight,
        }}>
          Приключения в лесу
        </h1>
        <button style={{
          padding: buttonPadding,
          margin: buttonMargin,
          border: buttonBorder,
          borderRadius: buttonRadius,
          cursor: buttonCursor,
          transition: buttonTransition,
          backgroundColor: button1Bg,
          color: button1Color,
          fontSize: '16px',
          fontWeight: 'bold',
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = button1Hover}
        onMouseOut={(e) => e.target.style.backgroundColor = button1Bg}
        >
          Начать путешествие
        </button>
        <button style={{
          padding: buttonPadding,
          margin: buttonMargin,
          border: buttonBorder,
          borderRadius: buttonRadius,
          cursor: buttonCursor,
          transition: buttonTransition,
          backgroundColor: button2Bg,
          color: button2Color,
          fontSize: '16px',
          fontWeight: 'bold',
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = button2Hover}
        onMouseOut={(e) => e.target.style.backgroundColor = button2Bg}
        >
          Посмотреть карту
        </button>
      </div>
    </div>
  );
}

export default ForestAdventure;
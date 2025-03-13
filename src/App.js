import React from 'react';
import styled from 'styled-components';

// Стили для всего фона страницы
const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right,rgb(245, 168, 208),rgb(229, 137, 175)); /* плавный переход от светло-розового к более темному */
  font-family: 'Arial', sans-serif;
`;

// Контейнер, в котором размещены все элементы
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 20px;
  background-color: #fff5e1; /* светлый кремовый фон */
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);  /* мягкая тень */
  width: 500px;
  margin-top: 20px;
  transition: all 0.3s ease; /* плавный переход при изменении состояния */
  
  &:hover {
    transform: scale(1.05); /* эффект увеличения при наведении */
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2); /* увеличенная тень */
  }
`;

// Компонент DIVA с желтым фоном и границей 2px
const DIVA = styled.div`
  width: 150px;
  height: 150px;
  background-color: #ffec65; /* мягкий желтый */
  border: 2px solid #e1c400;  /* граница желтого цвета */
  border-radius: 8px;
  margin: 10px;
  transition: background-color 0.3s ease;  /* плавное изменение фона */
  
  &:hover {
    background-color: #ffd400; /* более яркий желтый при наведении */
  }
`;

// Компонент DIVB с зеленым фоном и границей 3px
const DIVB = styled(DIVA)`
  background-color: #a8e6a5; /* мягкий зеленый */
  border: 3px solid #64a064;   /* темно-зеленая граница */
  
  &:hover {
    background-color: #76c76b;  /* яркий зеленый при наведении */
  }
`;

// Основной контейнер страницы
function Block1() {
  return (
    <PageContainer>
      <Container>
        <DIVA />  {/* Первый DIVA */}
        <DIVB />  {/* DIVB между ними */}
        <DIVA />  {/* Второй DIVA */}
      </Container>
    </PageContainer>
  );
}

export default Block1;


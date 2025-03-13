import React from 'react';
import styled from 'styled-components';

// Контейнер с розовым градиентом
const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #f8bbd0, #f48fb1); /* пастельные розовые оттенки */
`;

// Блок с розовым фоном
const Box = styled.div`
  width: 350px;
  padding: 30px;
  background-color: #fce4ec; /* светлый розовый цвет */
  border-radius: 12px;
  text-align: center;
  border: 3px solid #f06292; /* яркий розовый акцент */
  box-shadow: 0 4px 10px rgba(255, 105, 180, 0.3); /* легкая розовая тень */
`;

// Заголовок 
const Title = styled.h1`
  font-size: 28px;
  color: #d32f2f; /* яркий розовый цвет */
  margin-bottom: 20px;
  font-weight: bold;
  font-family: 'Cursive', sans-serif;
`;

// Кнопка 1 
const Button1 = styled.button`
  padding: 12px 24px;
  margin: 10px 0;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  background-color: #e91e63; /* яркий розовый */
  color: white;
  font-size: 16px;
  font-weight: bold;
  font-family: 'Arial', sans-serif;

  &:hover {
    background-color: #c2185b; /* более темный розовый при наведении */
  }
`;

// Кнопка 2 
const Button2 = styled.button`
  padding: 12px 24px;
  margin: 10px 0;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  background-color:rgb(58, 185, 77); 
  color: white;
  font-size: 16px;
  font-weight: bold;
  font-family: 'Arial', sans-serif;

  &:hover {
    background-color:rgb(25, 99, 18); 
  }
`;

function RoseTheme() {
  return (
    <Container>
      <Box>
        <Title>Цветок Роза</Title>
        <Button1>Смотреть розы</Button1>
        <Button2>Узнать больше</Button2>
      </Box>
    </Container>
  );
}

export default RoseTheme;

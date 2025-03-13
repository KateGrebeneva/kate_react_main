import React from 'react';
import styled from 'styled-components';

// Стилизованный контейнер для всего сайта
const FullContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-color: rgba(190, 60, 69, 0.8); 
  padding: 20px;
`;

// Стилизованный текст с именем пользователя
const UserText = styled.h2`
  color: rgb(249, 173, 173); 
  font-family: 'Cursive', sans-serif;
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
  padding: 20px;
  border: 3px solid rgb(97, 5, 11);
  background-color:rgb(164, 5, 5); 
  width: 700px;
  border-radius: 8px;
`;

// Стилизованный контейнер для кнопок
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 700px;
  padding: 20px;
  border: 3px solid rgb(100, 6, 13);
  background-color:rgba(128, 0, 0, 0.81); 
  border-radius: 8px;
  margin-top: 20px;
`;

// Стилизованная кнопка
const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 16px;
  font-weight: bold;

  background-color: ${({ disabled, type }) =>
    disabled
      ? '#d3d3d3' // цвет для заблокированной кнопки
      : type === 'reset'
      ? '#ff6347' // красный оттенок для кнопки reset
      : '#b22222'}; /* бордовый оттенок для обычной кнопки */

  color: white;

  &:hover {
    background-color: ${({ disabled, type }) =>
      disabled
        ? '#d3d3d3'
        : type === 'reset'
        ? '#e64a19' 
        : '#8b1a1a'}; /* темный бордовый при hover */
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

function App() {
  return (
    <FullContainer>
      <UserText>Task#104</UserText>
      <ButtonContainer>
        <Button disabled>Первая кнопка (заблокирована)</Button>
        <Button>Вторая кнопка</Button>
        <Button type="reset">Третья кнопка (reset)</Button>
      </ButtonContainer>
    </FullContainer>
  );
}

export default App;

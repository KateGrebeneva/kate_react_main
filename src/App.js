import React from 'react';
import styled from 'styled-components';

// Стилизованный контейнер для всего блока
const BlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: rgba(255, 182, 193, 0.8); /* светлый розовый фон */
  padding: 40px;
  font-family: 'Arial', sans-serif;
`;

// Заголовок с пояснением
const Title = styled.h1`
  font-size: 24px;
  color: #800000; /* бордовый цвет для заголовка */
  margin-bottom: 20px;
  font-family: 'Cursive', sans-serif;
  text-align: center;
`;

// Описание задачи
const Description = styled.p`
  font-size: 18px;
  color:rgb(164, 3, 62);
  margin-bottom: 40px;
  text-align: center;
  line-height: 1.5;
  max-width: 600px;
`;

// Стилизованная кнопка с использованием пропсов для изменения стилей
const Button = styled.button`
  padding: 15px 30px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  font-size: 18px;
  font-weight: bold;
  width: 220px;
  margin: 10px 0;

  background-color: ${({ warn, disabled, type }) => {
    if (warn) return 'yellow'; // для warn кнопки желтый фон
    if (disabled) return '#d3d3d3'; // для заблокированной кнопки серый фон
    if (type === 'reset') return '#ff6347'; // для кнопки reset красный фон
    return '#32cd32'; // для обычных кнопок зеленый фон
  }};
  color: ${({ warn, disabled }) => (warn ? 'red' : disabled ? '#a9a9a9' : 'white')}; // цвет текста

  &:hover {
    background-color: ${({ warn, disabled, type }) => {
      if (warn) return 'orange'; // темный желтый при hover для warn кнопки
      if (disabled) return '#d3d3d3'; // оставляем серый для заблокированной
      if (type === 'reset') return '#e64a19'; // темный оттенок для reset кнопки
      return '#228b22'; // темно-зеленый для обычной кнопки
    }};
    transform: scale(1.1); /* эффект увеличения при наведении */
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

function Block() {
  return (
    <BlockContainer>
      <Title>Условный рендеринг с Styled Components</Title>
      <Description>
        В этом примере, с помощью пропсов мы изменяем внешний вид кнопок. Первая кнопка заблокирована, 
        вторая кнопка имеет стиль с предупреждением, а третья кнопка — кнопка типа reset.
      </Description>
      {/* Первая кнопка с заблокированным состоянием */}
      <Button disabled>Первая кнопка (заблокирована)</Button>

      {/* Вторая кнопка с пропсом warn */}
      <Button warn>Вторая кнопка (warn)</Button>

      
      <Button>Вторая кнопка (без warn)</Button>

      {/* Третья кнопка с типом reset */}
      <Button type="reset">Третья кнопка (reset)</Button>
    </BlockContainer>
  );
}

export default Block;

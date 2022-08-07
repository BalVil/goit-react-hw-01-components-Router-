import styled from 'styled-components';

export const Statistics = styled.section`
  width: 250px;

  margin: 0 auto;
  margin-bottom: 16px;

  background-color: var(--color-white);
  border-radius: 5px;
  overflow: hidden;
`;
export const Title = styled.h2`
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
  text-transform: uppercase;
`;
export const List = styled.ul`
  display: flex;
  border-radius: 5px 5px;
`;

const getRandomColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 67px;
  height: 60px;

  background-color: ${getRandomColor};
`;
export const ItemLabel = styled.span`
  margin-bottom: 5px;

  color: var(--background-color);
`;

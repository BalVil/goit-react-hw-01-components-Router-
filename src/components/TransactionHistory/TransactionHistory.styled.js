import styled from 'styled-components';

export const Table = styled.table`
  width: 850px;

  margin: 0 auto;

  border-collapse: collapse;
  background-color: var(--color-white);
  box-shadow: var(--shadow-color-primery);
`;
export const Thead = styled.thead`
  height: 48px;

  background-color: var(--background-color-secondary);
  color: var(--color-white);
  text-transform: uppercase;
`;
export const TheadCell = styled.th`
  :nth-child(even) {
    border-left: 1px solid var(--background-color);
    border-right: 1px solid var(--background-color);
  }
`;
export const TbodyRow = styled.tr`
  text-align: center;

  :nth-child(even) {
    background-color: var(--background-color-primery);
  }
`;
export const TbodyCell = styled.td`
  height: 48px;

  color: var(--color-primery-text);
  text-transform: capitalize;

  :nth-child(even) {
    border-left: 1px solid var(--background-color);
    border-right: 1px solid var(--background-color);
  }
`;

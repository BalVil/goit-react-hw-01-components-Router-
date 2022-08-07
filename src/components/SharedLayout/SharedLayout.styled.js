import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 80px;
  margin-bottom: 16px;

  border-bottom: 1px solid #2a363b;
  box-shadow: rgb(0 0 0 / 14%) 0px 4px 2px 0px,
    rgb(0 0 0 / 12%) 0px 10px 5px 0px;
  background-color: #e1e7ee;
`;

export const Link = styled(NavLink)`
  display: inline-block;
  padding: 12px;

  text-decoration: none;
  font-weight: 500;
  color: #2a363b;
  font-size: 18px;

  &.active {
    color: #f3218a;
  }
`;

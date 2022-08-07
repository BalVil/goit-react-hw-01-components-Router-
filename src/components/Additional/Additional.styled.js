import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AdditionalWrap = styled.div`
  padding: 8px;

  font-size: 24px;
  line-height: 1.667em;
  font-weight: 500;
  text-transform: capitalize;
`;

export const StatLink = styled(Link)`
  display: inline-block;

  font-weight: 500;
  font-size: 18px;

  &:hover {
    color: #f3218a;

    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

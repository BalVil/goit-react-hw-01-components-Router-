import styled from 'styled-components';

export const FriendItem = styled.li`
  width: 100%;
  display: flex;
  align-items: center;

  margin-bottom: 8px;
  padding: 4px 8px;

  background-color: var(--color-white);
  box-shadow: var(--shadow-color-secondary);

  :last-child {
    margin-bottom: 0;
  }
`;
export const Status = styled.span`
  display: block;
  width: 14px;
  height: 14px;
  background-color: ${props => (props.status ? 'green' : 'red')};
  border-radius: 50%;
`;
export const FriendAvatar = styled.img`
  width: 60px;
  height: 60px;

  margin-left: 10px;
`;
export const FriendName = styled.p`
  margin-left: 10px;

  font-weight: 600;
  font-size: 20px;
`;

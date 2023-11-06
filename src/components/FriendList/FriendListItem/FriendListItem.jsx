import styled from 'styled-components';
import CSS from './FriendList.module.css';

const OnlineCircle = styled('span')`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: green;
  margin-top: 20px;
  margin-right: 10px;
`;
const OfflineCircle = styled('span')`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: red;
  margin-top: 20px;
  margin-right: 10px;
`;

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={CSS.item}>
      {isOnline ? <OnlineCircle /> : <OfflineCircle />}
      <img className={CSS.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={CSS.name}>{name}</p>
    </li>
  );
};

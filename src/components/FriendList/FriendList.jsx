import { FriendListItem } from './FriendListItem/FriendListItem';
import CSS from './FrindList.module.css';

export const FriendList = ({ list }) => {
  return (
    <ul className={CSS.friend_list}>
      {list.map(item => (
        <FriendListItem
          avatar={item.avatar}
          name={item.name}
          isOnline={item.isOnline}
          key={item.id}
        />
      ))}
    </ul>
  );
};

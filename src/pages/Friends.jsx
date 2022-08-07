import friends from 'data/friends.json';
import FriendList from 'components/FriendList/FriendList';

const Friends = () => {
  return <FriendList friends={friends} />;
};

export default Friends;

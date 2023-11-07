import userData from './Profile/user.json';
import statisticsData from './Statistics/data.json';
import friendsData from './FriendList/friends.json';
import transactionsData from './TransactionHistory/transactions.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
export const App = () => {
  return (
    <div className="container">
      <Profile user={userData} />
      <Statistics stats={statisticsData} title="Upload stats" />
      <FriendList list={friendsData} />
      <TransactionHistory items={transactionsData} />
    </div>
  );
};

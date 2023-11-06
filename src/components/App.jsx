import userData from './Profile/user.json';
import statisticsData from './Statistics/data.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
export const App = () => {
  return (
    <div className="container">
      <Profile user={userData} />
      <Statistics stats={statisticsData} title="Upload stats" />
    </div>
  );
};

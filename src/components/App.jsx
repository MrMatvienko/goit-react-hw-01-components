import userData from './Profile/user.json';
import { Profile } from './Profile/Profile';
export const App = () => {
  return (
    <div className="container">
      <Profile user={userData} />
    </div>
  );
};

import userData from './Profile/user.json';
import { Profile } from './Profile/Profile';
export const App = () => {
  return (
    <div>
      <Profile user={userData} />
    </div>
  );
};
export default App;

import UserStack from './UserStack';
import AuthStack from './AuthStack';
import { useAuthContext } from '../context/authProvider';

export default function RootNavigation() {
  const { isLoggedIn } = useAuthContext();

  // if user logged in, then go to HOME page
  // if user NOT logged in, then go to LOGIN page
  return isLoggedIn ? <UserStack /> : <AuthStack />;
}

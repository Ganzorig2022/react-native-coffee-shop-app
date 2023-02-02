import { useAuthContext } from '../hooks/useAuth';
import UserStack from './UserStack';
import AuthStack from './AuthStack';

export default function RootNavigation() {
  // const { user } = useAuth();
  const { isLoggedIn } = useAuthContext();

  return isLoggedIn ? <UserStack /> : <AuthStack />;
}

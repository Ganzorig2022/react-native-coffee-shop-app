import { useAuthContext } from '../hooks/useAuth';
import UserStack from './UserStack';
import AuthStack from './AuthStack';

export default function RootNavigation() {
  // const { user } = useAuth();
  const { isLoggedIn } = useAuthContext();
  console.log(isLoggedIn);

  return isLoggedIn ? <UserStack /> : <AuthStack />;
}

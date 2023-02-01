import { StyleSheet, Text, View } from 'react-native';
import { useEffect } from 'react';
// import { useAuth } from '../hooks/useAuth';
import { SafeAreaView } from 'react-native';
import { RootStackParamList } from '../../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { useAuthContext } from '../hooks/useAuth';

type setUserType = {
  user: boolean;
  setUser: (value: boolean) => void;
};

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'SignIn'
>;

const SignInScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const { isLoggedIn, setIsLoggedIn } = useAuthContext();

  return (
    <SafeAreaView>
      <Text onPress={() => setIsLoggedIn(true)} className='mt-[500px]'>
        SignInScreen
      </Text>
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({});

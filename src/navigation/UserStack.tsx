import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { store } from '../redux/store';
import { Provider } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { BottomTabs } from './BottomTabs';
import DetailsScreen from '../screens/DetailsScreen';
import PaymentScreen from '../screens/PaymentScreen';
import BagScreen from '../screens/BagScreen';

const queryClient = new QueryClient();

const Stack = createNativeStackNavigator<RootStackParamList>();

const UserStack = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name='BottomTabs'
                component={BottomTabs}
                options={{ headerShown: false, title: 'BottomTabs' }}
              />
              <Stack.Screen
                name='Details'
                component={DetailsScreen}
                options={{
                  headerShown: false,
                  presentation: 'modal',
                }}
              />
              <Stack.Screen
                name='Bag'
                component={BagScreen}
                options={{
                  headerShown: false,
                  presentation: 'modal',
                }}
              />
              <Stack.Screen
                name='Payment'
                component={PaymentScreen}
                options={{
                  headerShown: false,
                  presentation: 'modal',
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
};

export default UserStack;

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ScanScreen from '../screens/ScanScreen';
import OrderScreen from '../screens/OrderScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: {
          // backgroundColor: GlobalStyles.colors.primary500,
        },
        headerTintColor: 'white', //header title color.
        headerShown: false, // hide header title
        // tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },//Background color for the active tab.
        tabBarActiveTintColor: '#D3A762',
        // headerRight: ({ tintColor }) => (
        //   <IconButton
        //     icon='add-circle-sharp'
        //     size={24}
        //     color={tintColor}
        //     onPress={() => {
        //       navigation.navigate('ManageExpense');
        //     }}
        //   />
        // ),
      })}
    >
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={(route) => ({
          title: 'Home',
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='home-outline' size={size} color={color} />
          ),
        })}
      />
      <Tab.Screen
        name='Scan'
        component={ScanScreen}
        options={(route) => ({
          title: 'Scan',
          tabBarLabel: 'Scan',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='scan' size={size} color={color} />
          ),
        })}
      />
      <Tab.Screen
        name='Order'
        component={OrderScreen}
        options={(route) => ({
          title: 'Order',
          tabBarLabel: 'Order',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='cart-outline' size={size} color={color} />
          ),
        })}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={(route) => ({
          title: 'Profile',
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name='user' size={size} color={color} />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

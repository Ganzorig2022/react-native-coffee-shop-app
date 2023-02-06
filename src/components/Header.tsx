import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useTypedSelector } from '../redux/hooks';
import { selectCartItems } from '../redux/cartSlice';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Bag'
>;

const Header = () => {
  const items = useTypedSelector(selectCartItems); //from REDUX
  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView className='mt-10 py-3 border-b-[1px] border-gray-300 '>
      <View className='flex-row items-center justify-center relative bg-[##E5E5E5] '>
        <Image
          source={require('../../assets/Logo_small.png')}
          className='h-10'
          style={{ resizeMode: 'contain' }}
        />
        <TouchableOpacity
          className='absolute right-5'
          onPress={() => navigation.navigate('Bag')}
        >
          {items.length > 0 && (
            <Text
              className='absolute right-3 -top-0 z-50 flex flex-row h-4 w-4 items-center justify-center text-center bg-[#D3A762] rounded-full bg-b text-[10px] text-white'
              style={{ borderRadius: 100 }}
            >
              {items.length}
            </Text>
          )}
          <Ionicons name='lock-closed-outline' size={20} color='black' />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({});

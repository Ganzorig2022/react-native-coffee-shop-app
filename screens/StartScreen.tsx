import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Start'
>;

const StartScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView className='bg-[#2D2A2B] flex-col items-center  justify-center flex-1'>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image
          source={require('./../assets/Logo.png')}
          className='h-40 p-10'
          style={{ resizeMode: 'contain' }}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default StartScreen;

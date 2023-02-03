import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Lottie from 'lottie-react-native';

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Welcome'
>;

const WelcomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView className='bg-[#2D2A2B] flex-col items-center  justify-center h-full'>
      <TouchableOpacity>
        <Image
          source={require('../../assets/Logo.png')}
          className='h-40 p-10'
          style={{ resizeMode: 'contain' }}
        />
        <Lottie
          // source={require('../../assets/json/135470-work-place-animation.json')}
          source={{
            uri: 'https://assets9.lottiefiles.com/packages/lf20_4mu3hoco.json',
          }}
          autoPlay
          loop
          style={{ width: 200, height: 200 }}
          resizeMode='cover'
        />
      </TouchableOpacity>
      <View className='w-full mt-10'>
        <Pressable className='bg-customOrange rounded-3xl py-2 px-4 mx-10 mt-5'>
          <Text
            className='text-center text-white font-bold text-base'
            onPress={() => navigation.navigate('SignIn')}
          >
            Sign In
          </Text>
        </Pressable>
        <Pressable className='bg-customOrange rounded-3xl py-2 px-4 mx-10 mt-5'>
          <Text
            className='text-center text-white font-bold text-base'
            onPress={() => navigation.navigate('SignUp')}
          >
            Sign Up
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

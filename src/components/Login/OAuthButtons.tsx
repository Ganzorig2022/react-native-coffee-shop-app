import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { auth } from '../../firebase/firebase';

const OAuthButtons = () => {
  const signInWithGoogle = async () => {};

  return (
    <View className='flex-col items-center justify-center'>
      <TouchableOpacity
        // onPress={() => signInWithGoogle()}
        className='flex-row items-center justify-center p-5'
      >
        <Image
          source={require('../../../assets/googlelogo.png')}
          className='w-6 h-6'
          resizeMode='cover'
        />
        <Text className='ml-4 font-semibold text-lg'>Continue with Google</Text>
      </TouchableOpacity>
      {/* {error && <Text className='text-red-500'> {error.message}</Text>} */}
    </View>
  );
};

export default OAuthButtons;

const styles = StyleSheet.create({});

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Header from '../components/Header';
import { Ionicons } from '@expo/vector-icons';
import { useAuthContext } from '../hooks/useAuth';

const ProfileScreen = () => {
  const { setIsLoggedIn } = useAuthContext();
  const submitHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <View>
      <Header />
      <View className='p-10 flex-col items-center space-y-10'>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60',
          }}
          resizeMode='contain'
          style={{ width: 80, height: 80, borderRadius: 200 }}
          className='w-20 h-20 rounded-full'
        />
        <Text className='text-center font-bold'>Phone: 99022052</Text>
        <TouchableOpacity
          onPress={submitHandler}
          className='flex-row items-center justify-center w-full mt-5 px-5 py-2 space-x-6 border-[1px] border-gray-300 rounded-md'
        >
          <Ionicons name='log-out-outline' size={24} color='#F44C4C' />
          <Text className='text-center font-bold'>Log out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});

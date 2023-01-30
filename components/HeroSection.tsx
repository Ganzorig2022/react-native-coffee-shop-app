import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

const HeroSection = () => {
  return (
    <View className='flex-row items-center justify-center'>
      <Image
        source={require('../assets/HeroImg1.png')}
        className='mt-5'
        style={{ resizeMode: 'contain', height: 220 }}
      />
    </View>
  );
};

export default HeroSection;

const styles = StyleSheet.create({});

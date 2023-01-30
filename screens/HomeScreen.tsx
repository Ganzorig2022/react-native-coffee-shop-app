import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons';
import HeroSection from '../components/HeroSection';
import FavouriteCard from '../components/FavouriteCard';

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView className='bg-[#e5e5e5]'>
      <ScrollView>
        {/* HEADER */}
        <Header />
        {/* SUBHEADER */}
        <View className='bg-[#2D2A2B] px-5 py-3 flex-row items-center justify-between'>
          <View className='flex-col justify-center space-y-2'>
            <Text className='text-[#ffffff] opacity-60 text-xs'>
              Pick-up store
            </Text>
            <Text className='text-[#ffffff] text-sm'>
              Barkley Village * 0.5 mi
            </Text>
          </View>
          <Ionicons name='chevron-forward' size={24} color='white' />
        </View>

        {/* HERO IMAGE */}
        <HeroSection />

        {/* HORIZONTAL FAVOURITE CARD*/}
        <FavouriteCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

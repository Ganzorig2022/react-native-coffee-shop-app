import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../App';

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

type Props = {
  title: string;
};

const BackButton = ({ title }: Props) => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View className='w-full border-b border-gray-300 px-5 pb-3'>
      <TouchableOpacity
        className='absolute top-0 left-6 z-10'
        onPress={() => navigation.goBack()}
      >
        <Ionicons name='arrow-back' size={24} color='black' />
      </TouchableOpacity>
      <View className='z-1 flex-row items-center justify-center'>
        <Text className='font-bold text-xl'>{title}</Text>
      </View>
    </View>
  );
};

export default BackButton;

const styles = StyleSheet.create({});

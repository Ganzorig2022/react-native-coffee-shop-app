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
    <View className='flex-row items-center justify-between w-full border-b border-gray-300 px-5 pb-3'>
      <TouchableOpacity className='' onPress={() => navigation.goBack()}>
        <Ionicons name='arrow-back' size={24} color='black' />
      </TouchableOpacity>
      <View className='basis-1/2'>
        <Text className='font-bold text-xl'>{title}</Text>
      </View>
    </View>
  );
};

export default BackButton;

const styles = StyleSheet.create({});

import {
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { useTypedDispatch } from '../../redux/hooks';
import { removeFromCart } from '../../redux/cartSlice';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  amount: number;
  price: number;
  index: number;
  createdAt: Date;
};

const OrderItem = ({ amount, price, createdAt }: Props) => {
  // console.log(amount);

  return (
    <View className='flex-row items-start space-between border border-gray-400 mt-5 rounded p-4'>
      <View className='flex flex-row space-x-1 w-[180px]'>
        <View className='flex-col space-y-2'>
          <Text className='text-lg'>Order #12</Text>
          <View className='flex-row space-x-1'>
            <Text className='text-gray-400 text-xs'>Quantity:</Text>
            <Text className='text-xs'>{amount}</Text>
          </View>
          <Pressable className='px-6 py-2 border rounded'>
            <Text className='text-xs'>Details</Text>
          </Pressable>
        </View>
      </View>
      <View className='flex-col items-end space-y-3'>
        <Text className='text-gray-400'>2023-02-07</Text>
        <Text>Total Amount: ${price}</Text>
        {/* <Text>{createdAt.toDateString()}</Text> */}
        <Text className='text-[#2AA952]'>Success</Text>
      </View>
    </View>
  );
};

export default OrderItem;

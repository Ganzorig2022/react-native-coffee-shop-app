import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useTypedDispatch } from '../../redux/hooks';
import { removeFromCart } from '../../redux/cartSlice';
import { Ionicons } from '@expo/vector-icons';

type Props = Products;

const OrderItem = ({ id, title, image, price }: Props) => {
  const dispatch = useTypedDispatch(); //from REDUX

  const removeItemFromBasket = (id: string) => {
    dispatch(removeFromCart({ id })); //from REDUX
  };

  return (
    <View className='flex-row items-start space-between mt-5 w-full'>
      <View>
        <Image
          source={{
            uri: image,
          }}
          resizeMode='cover'
          className='w-28 h-28 rounded-lg'
        />
      </View>
      <View className='flex-row justify-between'>
        <View className='ml-5 items-start space-y-2 w-1/2'>
          <Text className='font-bold text-lg'>{title}</Text>
          <Text className='text-gray-400 text'>${price} / spruce</Text>
        </View>
        <TouchableOpacity
          onPress={() => removeItemFromBasket(id)}
          className='w-1/6'
        >
          <Ionicons name='close' size={24} color='black' />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({});

import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Details'
>;

const ProductItem = ({
  id,
  title,
  ingredients,
  description,
  image,
}: ProductType) => {
  const navigation = useNavigation<NavigationProp>();

  // go to <ManageExpense/> page
  const itemPressHandler = () => {
    navigation.navigate('Details', {
      productId: id,
      product: { id, title, description, image, ingredients },
    });
  };

  return (
    <Pressable
      onPress={itemPressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View className='flex flex-col m-2'>
        <View className=''>
          <Image
            source={{ uri: image }}
            className='h-40 w-44 p-10 rounded-md'
            style={{ resizeMode: 'contain' }}
          />
        </View>
        <View className='flex-col mt-2'>
          <Text className='text-sm font-bold mb-1'>{title} coffee</Text>
          <Text className='text-sm text-[#2D2A2B] mb-1'>$ 3.12 / spruce</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
});

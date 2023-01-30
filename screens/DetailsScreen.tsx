import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useEffect, useState } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import Ionicons from '@expo/vector-icons/Ionicons';
import CupSize from '../components/Details/CupSize';

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

//Homescreen-ees coffee-nii zurgan dr darhad data-gaa chireed irne.
const DetailsScreen = ({ route, navigation }: DetailsProps) => {
  const [productId, setProductId] = useState<string>('');
  const [product, setProduct] = useState<ProductType>();

  // productId: 1
  // console.log(route.params.productId);

  useEffect(() => {
    setProductId(route.params.productId);
    setProduct(route.params.product);
  }, [route]);

  // console.log(product);
  return (
    <View className='bg-gray-100 h-full'>
      <View className='h-full'>
        <Image
          source={{ uri: product?.image }}
          className='h-1/3 w-full rounded-md'
          style={{ resizeMode: 'contain' }}
        />
        <Pressable
          onPress={navigation.goBack}
          className='bg-gray-400/70 rounded-full flex items-center justify-center h-10 w-10 absolute top-10 left-5 z-10'
        >
          <Ionicons name='chevron-back' size={24} color='white' />
        </Pressable>
        <Pressable
          // onPress={navigation.goBack}
          className='bg-gray-400/70 rounded-full flex items-center justify-center h-10 w-10 absolute top-10 right-5 z-10'
        >
          <Text className='absolute right-5 top-0 z-50 flex flex-row h-4 w-4 items-center justify-center text-center bg-[#D3A762] rounded-full bg-b text-[10px] text-white'>
            1
          </Text>
          <Ionicons name='lock-closed-outline' size={20} color='white' />
        </Pressable>
        <View className='border-b border-[#D3A762] py-5 mx-5'>
          <Text className='font-bold text-[#2D2A2B]'>Size options</Text>
        </View>

        <CupSize />
      </View>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({});

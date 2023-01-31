import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import { useEffect, useState } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import Ionicons from '@expo/vector-icons/Ionicons';
import CupSizes from '../components/Details/CupSizes';
import FlavourChanges from '../components/Details/FlavourChanges';
import { useTypedSelector } from '../redux/hooks';
import { selectCartItems } from '../redux/cartSlice';

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

//Homescreen-ees coffee-nii zurgan dr darhad data-gaa chireed irne.
const DetailsScreen = ({ route, navigation }: DetailsProps) => {
  const [productId, setProductId] = useState<string>('');
  const [product, setProduct] = useState<ProductType>();
  const items = useTypedSelector(selectCartItems); //from REDUX

  // productId: 1
  // console.log(route.params.productId);

  useEffect(() => {
    setProductId(route.params.productId);
    setProduct(route.params.product);
  }, [route]);

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
          {items.length > 0 && (
            <Text className='absolute right-5 top-0 z-50 flex flex-row h-4 w-4 items-center justify-center text-center bg-customOrange rounded-full bg-b text-[10px] text-white'>
              {items.length}
            </Text>
          )}
          <Ionicons name='lock-closed-outline' size={20} color='white' />
        </Pressable>

        <View className='border-b border-customOrange py-5 mx-5'>
          <Text className='font-bold text-[#2D2A2B]'>Size options</Text>
        </View>

        {/* COFFEE SIZE CUPS */}
        <CupSizes />

        {/* MILK, FOAM CHANGE INPUTS */}
        <ScrollView>
          <FlavourChanges />
        </ScrollView>
      </View>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({});

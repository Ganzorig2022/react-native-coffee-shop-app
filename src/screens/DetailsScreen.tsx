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
import { useTypedDispatch, useTypedSelector } from '../redux/hooks';
import { addToCart, selectCartItems } from '../redux/cartSlice';
import { Button } from '@rneui/themed';
import { v4 as uuidv4 } from 'uuid';
import { GlobalStyles } from '../constants/GlobalStyles';

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

//Homescreen-ees coffee-nii zurgan dr darhad data-gaa chireed irne.
const DetailsScreen = ({ route, navigation }: DetailsProps) => {
  const items = useTypedSelector(selectCartItems); //from REDUX
  const [productId, setProductId] = useState<string>('');
  const [product, setProduct] = useState<ProductType>();
  const dispatch = useTypedDispatch(); //redux

  // productId: 1
  // console.log(route.params.productId);

  useEffect(() => {
    setProductId(route.params.productId);
    setProduct(route.params.product);
  }, [route]);

  const submitHandler = () => {
    const { image, title, description } = product as ProductType;
    const newProduct = {
      id: uuidv4(),
      title,
      amount: 2,
      image,
      price: 5.99,
      description,
    };

    dispatch(addToCart(newProduct)); // to REDUX store
  };

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
          onPress={() => navigation.navigate('Order')}
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

        {/* ADD TO BAG button */}
        <View className=''>
          <Button
            onPress={submitHandler}
            title='Add to bag'
            buttonStyle={{
              backgroundColor: GlobalStyles.colors.orange,
              borderRadius: 3,
            }}
            titleStyle={{ color: 'white' }}
            className='rounded-sm'
          />
        </View>
      </View>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({});

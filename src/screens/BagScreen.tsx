import { Text, View, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import Layout from '../components/ui/Layout';
import BackButton from '../components/ui/BackButton';
import OrderItem from '../components/Order/OrderItem';
import { useTypedSelector } from '../redux/hooks';
import { selectCartItems, selectCartTotal } from '../redux/cartSlice';
import { Button } from '@rneui/themed';
import { GlobalStyles } from '../constants/GlobalStyles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { useNavigation } from '@react-navigation/native';

type OrderProps = NativeStackNavigationProp<RootStackParamList, 'Order'>;

const BagScreen = () => {
  const items = useTypedSelector(selectCartItems); //from REDUX
  const totalPrice = useTypedSelector(selectCartTotal); //from REDUX
  const navigation = useNavigation<OrderProps>();
  const [tax, setTax] = useState<number>(0);

  // 10% tax
  useEffect(() => {
    setTax(totalPrice * 0.01);
  }, [items]);

  return (
    <Layout>
      <BackButton title={'My Bag'} />
      <View className='flex-col justify-center items-start w-full mt-3 p-5'>
        <View className='items-start justify-between'>
          <Text className='font-bold text-lg'>
            Order items ({items.length > 0 ? items.length : ' '})
          </Text>

          {/* FLATLIST */}
          <FlatList
            data={items}
            keyExtractor={(item, idx) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <OrderItem {...item} />}
            style={{ maxHeight: '100%' }}
          />

          {/* TOTAL COST  */}
          <View className='border-t border-gray-300 mt-5 mb-20 flex-col space-y-4'>
            <View className='flex-row items-center justify-between w-full mt-3'>
              <Text className='text-gray-500'>Subtotal</Text>
              <Text className='text-gray-500'>$ {totalPrice.toFixed(2)}</Text>
            </View>
            <View className='flex-row items-center justify-between w-full'>
              <Text className='text-gray-500'>Tax & Fees (10%)</Text>
              <Text className='text-gray-500'>$ {tax.toFixed(2)}</Text>
            </View>
            <View className='flex-row items-center justify-between w-full'>
              <Text className='text-lg font-bold'>Total</Text>
              <Text className='text-lg font-bold'>
                $ {(totalPrice + tax).toFixed(2)}
              </Text>
            </View>
          </View>
        </View>

        {/* CHECK OUT PAYMENT */}
        <View className='w-full'>
          <Button
            onPress={() => navigation.navigate('Payment')}
            title={`Check out $${(totalPrice + tax).toFixed(2)}`}
            buttonStyle={{
              backgroundColor: GlobalStyles.colors.orange,
              borderRadius: 5,
            }}
            titleStyle={{ color: 'white' }}
          />
        </View>
      </View>
    </Layout>
  );
};

export default BagScreen;

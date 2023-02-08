import { View, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import Layout from '../components/ui/Layout';
import BackButton from '../components/ui/BackButton';
import OrderItem from '../components/Order/OrderItem';
import { useTypedSelector } from '../redux/hooks';
import { selectCartItems, selectCartTotal } from '../redux/cartSlice';
import { Tab, TabView, Text } from '@rneui/themed';
import { GlobalStyles } from '../constants/GlobalStyles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { useNavigation } from '@react-navigation/native';
import {
  collection,
  query,
  where,
  getDocs,
  orderBy,
  doc,
  getDoc,
  onSnapshot,
  documentId,
} from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { useRecoilValue } from 'recoil';
import { documentIdState } from '../recoil/userIdAtom';
import { useAuth } from '../hooks/useAuth';
import { orderSuccessState } from '../recoil/orderSuccessAtom';

type OrderProps = NativeStackNavigationProp<RootStackParamList, 'Order'>;

interface AllSuccessType extends Products {
  createdAt: Date;
}

const OrderScreen = () => {
  const items = useTypedSelector(selectCartItems); //from REDUX
  const [index, setIndex] = useState(1);
  const navigation = useNavigation<OrderProps>();
  const [allSuccess, setAllSuccess] = useState<AllSuccessType[]>([]);
  const documentId = useRecoilValue(documentIdState); //from RECOIL
  const userId = useAuth();
  const isOrderSuccess = useRecoilValue(orderSuccessState);

  useEffect(() => {
    console.log('Order Screen useEffect renders...');
    //if user logged in, then fetch data from FIREBASE

    const unsub = onSnapshot(collection(db, 'Orders'), (snapshot) => {
      let result = [] as AllSuccessType[];
      snapshot.docs.forEach((doc) => {
        result.push(doc?.data() as AllSuccessType);
      });
      const newData = Object.values(...result) as AllSuccessType[];
      // console.log(newData[0], 'SHUUUUUUUU');
      setAllSuccess(newData);
    });

    return () => {
      unsub();
    };
  }, []);
  console.log(allSuccess);

  return (
    <Layout>
      <BackButton title={'My Orders'} />
      <View className='flex-col justify-center items-start w-full mt-3 p-5'>
        <View className='items-start justify-between'>
          {/* Tabs */}
          <>
            <Tab
              value={index}
              onChange={setIndex}
              dense
              indicatorStyle={{ backgroundColor: GlobalStyles.colors.orange }}
              titleStyle={{ color: 'black' }}
            >
              <Tab.Item>Processing </Tab.Item>
              <Tab.Item>Success</Tab.Item>
              <Tab.Item>Cancelled</Tab.Item>
            </Tab>
          </>

          {/* FLATLIST */}
          {allSuccess.length > 0 && (
            <FlatList
              data={allSuccess}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <OrderItem {...item} index={index} />}
            />
          )}
        </View>
      </View>
    </Layout>
  );
};

export default OrderScreen;

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
} from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { useRecoilValue } from 'recoil';
import { documentIdState } from '../recoil/userIdAtom';

type OrderProps = NativeStackNavigationProp<RootStackParamList, 'Order'>;

interface AllSuccessType extends Products {
  createdAt: Date;
}

const OrderScreen = () => {
  const items = useTypedSelector(selectCartItems); //from REDUX
  const totalPrice = useTypedSelector(selectCartTotal); //from REDUX
  const [index, setIndex] = useState(0);
  const navigation = useNavigation<OrderProps>();
  const [allSuccess, setAllSuccess] = useState<AllSuccessType[]>([]);
  const documentId = useRecoilValue(documentIdState); //from RECOIL

  console.log('IDDDD', documentId);
  // const success =

  useEffect(() => {
    const getData = async () => {
      // const q = query(collection(db, 'Orders'));
      // const querySnapshot = await getDocs(q);

      // let AllSuccess = [] as AllSuccessType[];

      // querySnapshot.forEach((doc) => {
      //   AllSuccess.push(doc.data() as any);
      // });

      const docRef = doc(db, 'Orders', documentId as any);
      const docSnap = await getDoc(docRef);

      let AllSuccess = [] as AllSuccessType[];

      if (docSnap.exists()) {
        AllSuccess.push(docSnap.data() as AllSuccessType);
      } else {
        console.log('No such document!');
      }
      setAllSuccess(AllSuccess);
    };
    getData();
  }, []);

  console.log(allSuccess.length);
  return (
    <Layout>
      <BackButton title={'My Orders'} />
      <View className='flex-col justify-center items-start w-full mt-3 p-5'>
        <View className='items-start justify-between'>
          {/* FLATLIST */}
          {/* <FlatList
            data={items}
            keyExtractor={(item, idx) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <OrderItem {...item} />}
            style={{ maxHeight: '100%' }}
          /> */}

          {/* Tabs */}
          <>
            <Tab
              value={index}
              onChange={(e) => setIndex(e)}
              dense
              indicatorStyle={{ backgroundColor: GlobalStyles.colors.orange }}
              titleStyle={{ color: 'black' }}
            >
              <Tab.Item>Processing </Tab.Item>
              <Tab.Item>Success</Tab.Item>
              <Tab.Item>Cancelled</Tab.Item>
            </Tab>

            {index === 0 && (
              <View className='red'>
                <Text>asddadsad</Text>
              </View>
            )}
            {index === 1 && (
              <View className=''>
                {allSuccess?.length > 0 &&
                  allSuccess?.map((item) => (
                    <Text key={item.id} className='text-yellow-300'>
                      {item.title}
                    </Text>
                  ))}
              </View>
            )}
            {index === 2 && (
              <View className='red'>
                <Text>asddadsad</Text>
              </View>
            )}
          </>
        </View>
      </View>
    </Layout>
  );
};

export default OrderScreen;
